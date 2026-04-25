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

  const { amount, currency = 'eur', email, cartItems, shippingAddress, shipping, discount } = await req.json()

  // Metadata for webhook processing (Stripe limit: 500 chars per value)
  const metadata: Record<string, string> = {
    site_id: 'strap',
    shipping: shipping || 'standard',
    discount: String(discount || 0),
  }
  if (cartItems) metadata.cart_items = typeof cartItems === 'string' ? cartItems : JSON.stringify(cartItems)
  if (shippingAddress) metadata.shipping_address = typeof shippingAddress === 'string' ? shippingAddress : JSON.stringify(shippingAddress)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // centimes
    currency,
    automatic_payment_methods: { enabled: true },
    metadata,
    ...(email ? { receipt_email: email } : {}),
  })
  return Response.json({ clientSecret: paymentIntent.client_secret })
}
