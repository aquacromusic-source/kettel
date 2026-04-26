import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  )
}

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return new Response('Missing stripe-signature header', { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Webhook signature verification failed:', message)
    return new Response('Webhook Error: Invalid signature', { status: 400 })
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      await handlePaymentSuccess(event.data.object as Stripe.PaymentIntent)
      break

    case 'customer.created':
    case 'customer.updated':
      await handleCustomer(event.data.object as Stripe.Customer)
      break

    case 'charge.refunded':
      await handleRefund(event.data.object as Stripe.Charge)
      break
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 })
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  const { metadata, amount, receipt_email } = paymentIntent

  const {
    site_id = 'strap',
    cart_items,
    shipping_address,
    discount,
    customer_email,
  } = metadata

  const email = customer_email || receipt_email

  if (!cart_items) {
    console.error('Missing cart_items in payment intent metadata')
    return
  }

  const supabase = getSupabase()

  // Create order in Supabase
  const { data: order, error } = await supabase
    .from('orders')
    .insert({
      site_id,
      stripe_payment_intent_id: paymentIntent.id,
      customer_email: email,
      amount: amount / 100,
      currency: 'eur',
      status: 'paid',
      items: JSON.parse(cart_items),
      shipping_address: shipping_address ? JSON.parse(shipping_address) : null,
      discount: parseFloat(discount || '0'),
      created_at: new Date().toISOString(),
    })
    .select()
    .single()

  if (error) {
    console.error('Order creation error:', error)
    return
  }

  console.log('Order created:', order.id)

  // Decrement stock for each item
  const items = JSON.parse(cart_items)
  for (const item of items) {
    await supabase.rpc('decrement_stock', {
      product_id: item.id,
      quantity: item.qty,
      table_name: getTableName(site_id),
    })
  }

  console.log('Email confirmation to send:', receipt_email)
}

async function handleCustomer(customer: Stripe.Customer) {
  const supabase = getSupabase()
  const { error } = await supabase
    .from('customers')
    .upsert(
      {
        stripe_customer_id: customer.id,
        email: customer.email,
        name: customer.name,
        phone: customer.phone,
        metadata: customer.metadata,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'stripe_customer_id' }
    )

  if (error) {
    console.error('Customer upsert error:', error)
  } else {
    console.log('Customer updated:', customer.email)
  }
}

async function handleRefund(charge: Stripe.Charge) {
  const paymentIntentId =
    typeof charge.payment_intent === 'string'
      ? charge.payment_intent
      : charge.payment_intent?.id

  if (!paymentIntentId) return

  await getSupabase()
    .from('orders')
    .update({ status: 'refunded', refunded_at: new Date().toISOString() })
    .eq('stripe_payment_intent_id', paymentIntentId)

  console.log('Order refunded:', paymentIntentId)
}

function getTableName(siteId: string): string {
  const map: Record<string, string> = {
    'gaming-posters': 'posters',
    strap: 'kettel_products',
    'pdf-guide-store': 'guides',
  }
  return map[siteId] || 'kettel_products'
}
