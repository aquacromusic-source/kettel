import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const { items } = await req.json()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map((item: { title: string; image_url?: string; price: number; qty: number }) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.title,
          images: [item.image_url].filter(Boolean),
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.qty,
    })),
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kettel-three.vercel.app'}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kettel-three.vercel.app'}/cart`,
    shipping_address_collection: { allowed_countries: ['FR', 'BE', 'CH', 'LU'] },
    locale: 'fr',
  })

  return Response.json({ url: session.url })
}
