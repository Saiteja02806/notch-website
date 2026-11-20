/**
 * Vercel Serverless Function: POST /api/verify-key  { "license_key": "..." }
 * Used by the "Already have a license key?" box on /download. Dodo's public
 * /licenses/validate only answers { valid } for ANY merchant's key, so instead
 * we look the key up server-side (DODO_APIKEY, never sent to the browser) among
 * ACTIVE keys of our own product and compare product_id (and business_id when
 * DODO_BUSINESS_ID is set). Responds { ok: true, valid: boolean }.
 */
import { getDodoConfig, dodoHeaders } from './_lib.js'

const MAX_PAGES = 30 // 30 * 100 keys; revisit if sales ever exceed this
const hits = new Map() // best-effort per-instance throttle: ip -> [timestamps]

function throttled(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60_000)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 500) hits.clear()
  return recent.length > 8
}

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      return {}
    }
  }
  return {}
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  const send = (status, body) => {
    res.statusCode = status
    res.end(JSON.stringify(body))
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return send(405, { ok: false, error: 'Method not allowed' })
  }

  const ip = String(req.headers?.['x-forwarded-for'] || 'unknown').split(',')[0].trim()
  if (throttled(ip)) return send(429, { ok: false, error: 'Too many attempts. Try again in a minute.' })

  const { apiKey, productId, businessId, apiBase } = getDodoConfig()
  if (!apiKey || !productId) return send(200, { ok: false, error: 'Key check is not configured' })

  const body = await readJson(req)
  const key = String(body?.license_key || '').trim()
  if (!key || key.length > 200 || /\s/.test(key)) return send(200, { ok: true, valid: false })

  const headers = dodoHeaders(apiKey)
  try {
    for (let page = 0; page < MAX_PAGES; page++) {
      const qs = new URLSearchParams({
        product_id: productId,
        status: 'active',
        page_size: '100',
        page_number: String(page)
      })
      const resp = await fetch(`${apiBase}/license_keys?${qs}`, { headers })
      if (!resp.ok) return send(200, { ok: false, error: `Key lookup returned ${resp.status}` })
      const data = await resp.json()
      const items = Array.isArray(data?.items) ? data.items : Array.isArray(data) ? data : []
      const match = items.find(
        (k) =>
          k?.key === key &&
          k?.product_id === productId &&
          (!businessId || k?.business_id === businessId)
      )
      if (match) return send(200, { ok: true, valid: true })
      if (items.length < 100) break
    }
    return send(200, { ok: true, valid: false })
  } catch {
    return send(200, { ok: false, error: 'Unable to query Dodo Payments API' })
  }
}
