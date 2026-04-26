import Stripe from 'stripe'
import { rateLimit, getClientIP } from '@/lib/rateLimit'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  // Rate limiting (10 req/min)
  const ip = getClientIP(req)
  const { success } = rateLimit(ip, { limit: 10, windowMs: 60_000 })
  if (!success) {
    return new Response('Too many requests', { status: 429 })
  }

  try {
    const body = await req.json()
    const { amount, currency = 'eur', email, cartItems, shippingAddress, shipping, discount, paymentIntentId, siteId = 'strap' } = body

    const total = Math.round(amount * 100) // centimes

    if (total < 50) {
      return Response.json({ error: 'Montant trop faible' }, { status: 400 })
    }

    // Metadata for webhook processing (Stripe limit: 500 chars per value)
    const metadata: Record<string, string> = {
      site_id: siteId,
      shipping: shipping || 'standard',
      discount: String(discount || 0),
    }
    if (cartItems) metadata.cart_items = typeof cartItems === 'string' ? cartItems : JSON.stringify(cartItems)
    if (shippingAddress) metadata.shipping_address = typeof shippingAddress === 'string' ? shippingAddress : JSON.stringify(shippingAddress)
    if (email) metadata.customer_email = email

    let paymentIntent
    if (paymentIntentId) {
      // Update existing Payment Intent
      paymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
        amount: total,
        metadata,
        ...(email ? { receipt_email: email } : {}),
      })
    } else {
      // Create new Payment Intent
      paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency,
        automatic_payment_methods: { enabled: true },
        metadata,
        ...(email ? { receipt_email: email } : {}),
      })
    }

    return Response.json({ clientSecret: paymentIntent.client_secret, amount: total })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    return Response.json({ error: message }, { status: 500 })
  }
}
