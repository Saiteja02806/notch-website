/**
 * Vercel Serverless Function: /api/order
 * Verifies a Dodo payment status by payment_id (server-side, with DODO_APIKEY)
 * for our product only. Never returns customer email or license keys to the
 * browser (license keys are delivered via Dodo Payments email only).
 */
import { getQueryParam, getDodoConfig, dodoHeaders } from './_lib.js'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  const { apiKey, productId, apiBase } = getDodoConfig()
  const paymentId = getQueryParam(req, 'payment_id').trim()

  if (!paymentId || !/^[A-Za-z0-9_-]{4,128}$/.test(paymentId)) {
    res.statusCode = 400
    res.end(JSON.stringify({ ok: false, error: 'Missing or invalid payment_id' }))
    return
  }

  if (!apiKey) {
    res.statusCode = 200
    res.end(JSON.stringify({ ok: false, error: 'Order lookup is not configured' }))
    return
  }

  const headers = dodoHeaders(apiKey)

  try {
    const payResp = await fetch(`${apiBase}/payments/${encodeURIComponent(paymentId)}`, { headers })
    if (!payResp.ok) {
      res.statusCode = 200
      res.end(
        JSON.stringify({
          ok: false,
          authError: payResp.status === 401 || payResp.status === 403,
          error: `Payment lookup returned ${payResp.status}`
        })
      )
      return
    }

    const payment = await payResp.json()

    // Only payments for the Hero Notch product may be confirmed here.
    const cart = Array.isArray(payment?.product_cart) ? payment.product_cart : null
    if (productId && cart && !cart.some((item) => item?.product_id === productId)) {
      res.statusCode = 200
      res.end(JSON.stringify({ ok: false, error: 'Payment is not for this product' }))
      return
    }

    const status = String(payment?.status || '').trim()
    const normalizedStatus = status.toLowerCase()
    const succeeded = ['succeeded', 'active', 'paid', 'completed'].includes(normalizedStatus)

    res.statusCode = 200
    res.end(
      JSON.stringify({
        ok: true,
        paymentId,
        status,
        succeeded
      })
    )
  } catch {
    res.statusCode = 200
    res.end(JSON.stringify({ ok: false, error: 'Unable to query Dodo Payments API' }))
  }
}
