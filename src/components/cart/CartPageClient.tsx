'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { T } from '../tokens'
import { IconClose, IconPlus, IconMinus, IconArrow, IconCheck, IconStar } from '../Icons'
import { useCart } from '@/context/CartContext'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function CheckoutForm({ onSuccess }: { onSuccess: () => void }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return
    setLoading(true)
    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + '/success',
      },
      redirect: 'if_required',
    })
    if (stripeError) {
      setError(stripeError.message || 'Erreur de paiement')
      setLoading(false)
    } else {
      onSuccess()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {error && (
        <p style={{ color: '#e53e3e', marginTop: 12, fontSize: 13, fontFamily: T.mono }}>{error}</p>
      )}
      <button
        type="submit"
        className="strap-btn-primary"
        style={{ width: '100%', padding: '18px 0', fontSize: 15, marginTop: 20, borderRadius: 2, gap: 10, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        disabled={loading}
      >
        {loading ? 'Traitement...' : 'Confirmer le paiement'} <IconArrow size={15}/>
      </button>
    </form>
  )
}

const SUGGESTIONS = [
  { handle: 'bracelet-kettlebell-gold', title: 'Kettlebell Gold', price: 69, thumb: '/images/products/shopify/bracelet-kettlebell-gold-1.jpg' },
  { handle: 'bracelet-golf-silver', title: 'Golf Platine', price: 69, thumb: '/images/products/shopify/bracelet-golf-silver-1.jpg' },
  { handle: 'bracelet-football-silver', title: 'Football Argent', price: 49, thumb: '/images/products/shopify/bracelet-football-silver-1.jpg' },
]

export default function CartPageClient() {
  const { items, removeItem, updateQty, total } = useCart()
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [paymentDone, setPaymentDone] = useState(false)

  const handleCheckout = async () => {
    setCheckoutLoading(true)
    try {
      const res = await fetch('/api/payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total }),
      })
      const { clientSecret: secret } = await res.json()
      setClientSecret(secret)
      setShowCheckout(true)
    } catch (err) {
      console.error('Payment intent error:', err)
    } finally {
      setCheckoutLoading(false)
    }
  }

  const handlePaymentSuccess = () => {
    setPaymentDone(true)
    setShowCheckout(false)
  }

  const FREE_SHIP = 79
  const progress = Math.min(100, (total / FREE_SHIP) * 100)

  if (paymentDone) {
    return (
      <div style={{ padding: 'clamp(48px,8vw,100px) clamp(16px,4vw,48px)', textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
        <div className="strap-display" style={{ fontSize: 40, color: T.bone, marginBottom: 12 }}>Paiement confirmé !</div>
        <p style={{ color: T.fog, fontSize: 16, marginBottom: 32, maxWidth: 400 }}>
          Merci pour ta commande. Tu recevras un email de confirmation très bientôt.
        </p>
        <Link href="/" className="strap-btn-primary" style={{ padding: '16px 28px', fontSize: 15, borderRadius: 2, gap: 10 }}>
          Retour à l&apos;accueil <IconArrow/>
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div style={{ padding: 'clamp(48px,8vw,100px) clamp(16px,4vw,48px)', textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>&#128142;</div>
        <div className="strap-display" style={{ fontSize: 40, color: T.bone, marginBottom: 12 }}>Ton panier est vide.</div>
        <p style={{ color: T.fog, fontSize: 16, marginBottom: 32, maxWidth: 400 }}>
          Tu n&apos;as pas encore choisi ton bracelet sport. Commence par personnaliser le tien.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/catalogue" className="strap-btn-primary" style={{ padding: '16px 28px', fontSize: 15, borderRadius: 2, gap: 10 }}>
            Voir la collection <IconArrow/>
          </Link>
          <Link href="/products/bracelet-kettlebell-gold" className="strap-btn-ghost" style={{ padding: '16px 24px', fontSize: 15, borderRadius: 2 }}>
            Best-seller du moment
          </Link>
        </div>

        {/* Suggestions */}
        <div style={{ marginTop: 60, width: '100%', maxWidth: 720 }}>
          <div className="strap-mono" style={{ color: T.fog, marginBottom: 20 }}>§ LES PLUS PORTÉS</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {SUGGESTIONS.map(s => (
              <Link key={s.handle} href={`/products/${s.handle}`} style={{ textDecoration: 'none', background: T.ink2, border: `1px solid ${T.line2}`, borderRadius: 4, overflow: 'hidden', display: 'block' }}>
                <div style={{ position: 'relative', aspectRatio: '1', background: T.ink }}>
                  <Image src={s.thumb} alt={s.title} fill style={{ objectFit: 'cover' }}/>
                </div>
                <div style={{ padding: 12 }}>
                  <div className="strap-display" style={{ fontSize: 14, color: T.bone }}>{s.title}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, color: T.accent }}>
                    {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} size={9}/>)}
                  </div>
                  <div className="strap-display" style={{ fontSize: 16, color: T.bone, marginTop: 6 }}>{s.price}€</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: 'clamp(16px,4vw,40px) clamp(16px,4vw,48px) clamp(40px,6vw,80px)' }}>
      <h1 className="strap-display" style={{ fontSize: 48, color: T.bone, marginBottom: 8 }}>Ton panier.</h1>
      <div className="strap-mono" style={{ color: T.fog, marginBottom: 40 }}>{items.reduce((s, i) => s + i.qty, 0)} article{items.reduce((s, i) => s + i.qty, 0) > 1 ? 's' : ''}</div>

      {/* Free shipping bar */}
      <div style={{ padding: '16px 20px', background: T.ink2, border: `1px solid ${T.line}`, borderRadius: 4, marginBottom: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ color: T.bone, fontSize: 14 }}>
            {total >= FREE_SHIP ? '🎉 Livraison offerte débloquée !' : `Plus que ${FREE_SHIP - total}€ pour la livraison offerte`}
          </span>
          <span className="strap-mono" style={{ color: T.accent }}>{total}€ / {FREE_SHIP}€</span>
        </div>
        <div style={{ height: 4, background: T.ink3, borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: T.accent, transition: 'width .3s', borderRadius: 2 }}/>
        </div>
      </div>

      <div className="strap-cart-grid" style={{ alignItems: 'flex-start' }}>
        {/* Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: 20, padding: 20, background: T.ink2, border: `1px solid ${T.line2}`, borderRadius: 4 }}>
              <div style={{ width: 100, height: 100, background: T.ink, borderRadius: 2, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                  <div style={{ color: T.bone, fontFamily: T.display, fontWeight: 500, fontSize: 16 }}>{item.name}</div>
                  <button onClick={() => removeItem(item.id)} style={{ background: 'transparent', border: 'none', color: T.fog, cursor: 'pointer', padding: 4 }}><IconClose size={16}/></button>
                </div>
                <div className="strap-mono" style={{ color: T.fog, marginTop: 6 }}>
                  {item.engravingText && `GRAVURE · "${item.engravingText}" · `}
                  CORDON {item.cordColor.toUpperCase()}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${T.line}`, borderRadius: 2 }}>
                    <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ background: 'transparent', border: 'none', color: T.bone, width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconMinus size={12}/></button>
                    <span style={{ color: T.bone, fontFamily: T.mono, fontSize: 13, minWidth: 28, textAlign: 'center' }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ background: 'transparent', border: 'none', color: T.bone, width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconPlus size={12}/></button>
                  </div>
                  <div className="strap-display" style={{ fontSize: 20, color: T.bone }}>{item.price * item.qty}€</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <aside style={{ background: T.ink2, border: `1px solid ${T.line}`, borderRadius: 4, padding: 24 }} className="strap-cart-summary">
          <div className="strap-mono" style={{ color: T.fog, marginBottom: 16 }}>RÉSUMÉ DE COMMANDE</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: T.fog }}><span>Sous-total</span><span>{total}€</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: T.fog }}><span>Livraison</span><span style={{ color: total >= FREE_SHIP ? '#29C268' : T.fog }}>{total >= FREE_SHIP ? 'OFFERTE' : 'Calculée au checkout'}</span></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 16, paddingTop: 16, borderTop: `1px solid ${T.line2}` }}>
            <span className="strap-display" style={{ fontSize: 15, color: T.bone }}>Total</span>
            <span className="strap-display" style={{ fontSize: 28, color: T.bone }}>{total}€</span>
          </div>

          {/* Stripe Elements inline checkout */}
          {showCheckout && clientSecret ? (
            <div style={{ marginTop: 20 }}>
              <div className="strap-mono" style={{ color: T.fog, marginBottom: 16, fontSize: 11 }}>PAIEMENT SÉCURISÉ</div>
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret,
                  appearance: {
                    theme: 'stripe',
                    variables: { colorPrimary: '#FF4A1C' },
                  },
                }}
              >
                <CheckoutForm onSuccess={handlePaymentSuccess} />
              </Elements>
              <button
                style={{ background: 'transparent', border: 'none', color: T.fog, cursor: 'pointer', fontSize: 13, marginTop: 12, display: 'block', width: '100%', textAlign: 'center', fontFamily: T.mono }}
                onClick={() => setShowCheckout(false)}
              >
                ← Annuler
              </button>
            </div>
          ) : (
            <>
              <button
                className="strap-btn-primary"
                style={{ width: '100%', padding: '18px 0', fontSize: 15, marginTop: 20, borderRadius: 2, gap: 10, cursor: checkoutLoading ? 'not-allowed' : 'pointer', opacity: checkoutLoading ? 0.7 : 1 }}
                onClick={handleCheckout}
                disabled={checkoutLoading}
              >
                {checkoutLoading ? 'Chargement...' : 'Commander'} <IconArrow size={15}/>
              </button>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 14, justifyContent: 'center' }}>
                {['CB Sécurisé', 'PayPal', '3x sans frais'].map(p => (
                  <span key={p} style={{ padding: '4px 10px', border: `1px solid ${T.line}`, borderRadius: 2, fontFamily: T.mono, fontSize: 10, color: T.fog }}>{p}</span>
                ))}
              </div>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Paiement 100% sécurisé', 'Retours 30 jours offerts', 'Écrin cadeau inclus dès 49€'].map(r => (
                  <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 8, color: T.fog, fontSize: 13 }}>
                    <IconCheck size={12}/> {r}
                  </div>
                ))}
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  )
}
