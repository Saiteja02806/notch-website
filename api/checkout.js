/**
 * Vercel Serverless Function: /api/checkout
 * Starts a Dodo Payments checkout session for the single Notch product
 * (HERONOTCH_PRODUCTID) and sends the buyer back to /download after payment.
 * Production always returns to the canonical origin; previews/local return to
 * themselves so test purchases never leave the deployment under test.
 */
import { getQueryParam, getDodoConfig, resolveReturnOrigin } from './_lib.js'

function detectRequestOs(req) {
  const chPlatform = String(req.headers?.['sec-ch-ua-platform'] || '')
    .replace(/"/g, '')
    .trim()
    .toLowerCase()
  const ua = String(req.headers?.['user-agent'] || '').toLowerCase()

  // Check mobile first: iPhone/iPad UAs contain "like Mac OS X".
  if (chPlatform.includes('ios') || chPlatform.includes('android') || /\b(iphone|ipad|ipod|android)\b/.test(ua)) {
    return 'mobile'
  }
  if (chPlatform.includes('mac') || (!chPlatform && /\b(macintosh|mac os x)\b/.test(ua))) {
    return 'macos'
  }
  if (chPlatform.includes('win') || (!chPlatform && /\bwindows\b/.test(ua))) {
    return 'windows'
  }
  if (chPlatform.includes('linux') || /\blinux\b/.test(ua)) {
    return 'linux'
  }
  return 'other'
}

export default async function handler(req, res) {
  const { apiKey, productId, apiBase, buyBase } = getDodoConfig()

  const rawOs = getQueryParam(req, 'os').trim().toLowerCase()
  const os =
    rawOs === 'mac' || rawOs === 'macos'
      ? 'mac'
      : rawOs === 'win' || rawOs === 'windows'
        ? 'win'
        : ''

  const selectedOs = os === 'mac' ? 'macos' : os === 'win' ? 'windows' : 'unspecified'
  const detectedOs = detectRequestOs(req)
  const platform =
    selectedOs !== 'unspecified'
      ? selectedOs
      : detectedOs === 'macos' || detectedOs === 'windows'
        ? detectedOs
        : 'unspecified'

  const metadata = {
    platform,
    selected_os: selectedOs,
    detected_os: detectedOs,
    order_type: 'prebook'
  }

  const origin = resolveReturnOrigin(req)
  const returnUrl = `${origin}/download?purchased=1${os ? `&os=${os}` : ''}`

  if (!productId) {
    console.error('HERONOTCH_PRODUCTID is not set; sending buyer back to /pricing')
    res.writeHead(302, {
      Location: `/pricing${os ? `?os=${os}` : ''}`,
      'Cache-Control': 'no-store'
    })
    res.end()
    return
  }

  const buyParams = new URLSearchParams({
    quantity: '1',
    redirect_url: returnUrl,
    metadata_platform: metadata.platform,
    metadata_selected_os: metadata.selected_os,
    metadata_detected_os: metadata.detected_os,
    metadata_order_type: metadata.order_type
  })
  const staticCheckoutUrl = `${buyBase}/buy/${encodeURIComponent(productId)}?${buyParams.toString()}`

  // The static buy link redirects instantly. A checkout *session* costs an extra
  // Dodo API round trip (~0.6-1.4s) before the buyer sees anything, so it is opt-in.
  if (apiKey && process.env.DODO_USE_CHECKOUT_SESSIONS === '1') {
    try {
      const response = await fetch(`${apiBase}/checkouts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          product_cart: [{ product_id: productId, quantity: 1 }],
          return_url: returnUrl,
          metadata
        })
      })

      if (response.ok) {
        const data = await response.json()
        if (
          data &&
          typeof data.checkout_url === 'string' &&
          data.checkout_url.startsWith('https://')
        ) {
          res.writeHead(302, {
            Location: data.checkout_url,
            'Cache-Control': 'no-store'
          })
          res.end()
          return
        }
        console.error('Dodo checkout response missing checkout_url')
      } else {
        const errBody = await response.text().catch(() => '')
        console.error(
          `Dodo POST /checkouts failed (${response.status}) for ${productId}: ${errBody.slice(0, 300)}`
        )
      }
    } catch (err) {
      console.error('Dodo POST /checkouts network error:', err?.message || 'unknown error')
    }
  }

  res.writeHead(302, {
    Location: staticCheckoutUrl,
    'Cache-Control': 'no-store'
  })
  res.end()
}
