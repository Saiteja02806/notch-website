/**
 * Shared helpers for the Vercel functions. The leading underscore keeps Vercel
 * from deploying this file as its own route.
 */
import { SITE_URL } from '../src/data/origin.mjs'

export { SITE_URL }

export function getQueryParam(req, name) {
  if (req.query && req.query[name] !== undefined) {
    return String(req.query[name])
  }
  try {
    const url = new URL(req.url || '/', SITE_URL)
    return url.searchParams.get(name) || ''
  } catch {
    return ''
  }
}

/** Dodo environment + credentials, read from env on every call (never exposed to the browser). */
export function getDodoConfig() {
  const apiKey = String(process.env.DODO_APIKEY || '').trim()
  const productId = String(
    process.env.HERONOTCH_PRODUCTID || process.env.PUBLIC_HERONOTCH_PRODUCTID || ''
  ).trim()
  const businessId = String(process.env.DODO_BUSINESS_ID || '').trim()
  const isTestMode =
    process.env.DODO_PAYMENTS_ENVIRONMENT === 'test_mode' || apiKey.startsWith('dodo_test_')
  return {
    apiKey,
    productId,
    businessId,
    isTestMode,
    apiBase: isTestMode ? 'https://test.dodopayments.com' : 'https://live.dodopayments.com',
    buyBase: isTestMode ? 'https://test.checkout.dodopayments.com' : 'https://checkout.dodopayments.com'
  }
}

export function dodoHeaders(apiKey) {
  return { Authorization: `Bearer ${apiKey}`, Accept: 'application/json' }
}

/**
 * Where Dodo should send the buyer back to. Production always uses the
 * canonical origin. Previews and local dev return to themselves so a test
 * purchase can be completed end to end without touching production.
 */
export function resolveReturnOrigin(req) {
  if (process.env.VERCEL_ENV === 'production') return SITE_URL
  const host = String(req.headers?.['x-forwarded-host'] || req.headers?.host || '')
    .split(',')[0]
    .trim()
    .toLowerCase()
  const proto = String(req.headers?.['x-forwarded-proto'] || 'https').split(',')[0].trim()
  if (/^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host)) return `${proto === 'https' ? 'https' : 'http'}://${host}`
  if (/^[a-z0-9-]+\.vercel\.app$/.test(host)) return `https://${host}`
  return SITE_URL
}
