'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useCart } from '@/context/CartContext'
import { T } from '@/components/tokens'
import * as gtag from '@/lib/gtag'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function PaymentForm({ total, onSuccess }: { total: number; onSuccess: () => void }) {
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
      confirmParams: { return_url: window.location.origin + '/success' },
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
      <PaymentElement options={{ layout: 'tabs' }} />
      {error && (
        <p style={{ color: '#e53e3e', marginTop: 8, fontSize: 13, fontFamily: T.mono }}>{error}</p>
      )}
      <button
        type="submit"
        disabled={loading || !stripe}
        style={{
          width: '100%',
          marginTop: 20,
          padding: '16px 0',
          background: loading || !stripe ? '#ccc' : T.accent,
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          fontSize: 15,
          fontFamily: T.display,
          fontWeight: 600,
          cursor: loading || !stripe ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          transition: 'background 0.2s',
        }}
      >
        {loading ? 'Traitement...' : `Payer ${total.toFixed(2)}€`}
      </button>
    </form>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#fff',
  border: '1px solid #E5E7EB',
  borderRadius: 4,
  padding: '12px 14px',
  fontSize: 14,
  fontFamily: T.body,
  color: '#1A1A1A',
  outline: 'none',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontFamily: T.mono,
  color: '#6B7280',
  marginBottom: 6,
  display: 'block',
  letterSpacing: '0.05em',
}

const sectionStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #E5E7EB',
  borderRadius: 8,
  padding: 24,
  marginBottom: 20,
}

const COUNTRIES = [
  'France',
  'Belgique',
  'Suisse',
  'Luxembourg',
  'Canada',
  'Allemagne',
  'Espagne',
  'Italie',
  'Portugal',
  'Pays-Bas',
  'Autre',
]

export default function CheckoutPage() {
  const { items, clearCart, total } = useCart()
  const router = useRouter()

  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info')
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('France')
  const [zip, setZip] = useState('')
  const [shipping, setShipping] = useState<'standard' | 'express' | 'free'>('standard')
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoError, setPromoError] = useState('')

  const FREE_SHIP = 75
  const freeShip = total >= FREE_SHIP
  const shippingCost = freeShip || shipping === 'free' ? 0 : shipping === 'express' ? 9.95 : 5.95
  const discount = promoApplied ? Math.round(total * 0.1 * 100) / 100 : 0
  const grandTotal = Math.round((total + shippingCost - discount) * 100) / 100

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'STRAP10') {
      setPromoApplied(true)
      setPromoError('')
    } else {
      setPromoError('Code invalide')
      setPromoApplied(false)
    }
  }

  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: grandTotal }),
      })
      const { clientSecret: secret } = await res.json()
      setClientSecret(secret)
      setStep('payment')
      gtag.event({
        action: 'begin_checkout',
        currency: 'EUR',
        value: grandTotal,
        items: items.map(i => ({ item_id: i.productId, item_name: i.name, price: i.price, quantity: i.qty })),
      })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSuccess = () => {
    gtag.event({
      action: 'purchase',
      currency: 'EUR',
      value: grandTotal,
      transaction_id: `STRAP-${Date.now()}`,
      shipping: shippingCost,
      items: items.map(i => ({ item_id: i.productId, item_name: i.name, price: i.price, quantity: i.qty })),
    })
    clearCart()
    setStep('success')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!mounted) return null

  if (items.length === 0 && step === 'info') {
    router.push('/cart')
    return null
  }

  if (step === 'success') {
    const orderId = `#STRAP-${Math.floor(Math.random() * 9000 + 1000)}`
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#FAFAFA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '60px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
        <h1
          style={{
            fontFamily: T.display,
            fontSize: 36,
            color: '#1A1A1A',
            marginBottom: 12,
            fontWeight: 700,
          }}
        >
          Commande confirmée !
        </h1>
        <p style={{ color: '#6B7280', fontSize: 16, marginBottom: 8, maxWidth: 400, fontFamily: T.body }}>
          Merci pour ta commande. Tu recevras un email de confirmation très bientôt.
        </p>
        <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 40, fontFamily: T.mono }}>
          Référence : {orderId}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            href="/"
            style={{
              padding: '14px 28px',
              background: T.accent,
              color: '#fff',
              borderRadius: 4,
              fontFamily: T.display,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
            }}
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/catalogue"
            style={{
              padding: '14px 28px',
              border: `1px solid ${T.accent}`,
              color: T.accent,
              borderRadius: 4,
              fontFamily: T.display,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
            }}
          >
            Continuer mes achats
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#FAFAFA', minHeight: '100vh' }}>
      {/* Header minimal */}
      <header
        style={{
          borderBottom: '1px solid #E5E7EB',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: T.display,
            fontSize: 20,
            color: '#1A1A1A',
            textDecoration: 'none',
            fontWeight: 700,
            letterSpacing: '-0.04em',
          }}
        >
          STRAP<span style={{ color: T.accent }}>.</span>
        </Link>
        {/* Breadcrumb */}
        <nav
          style={{
            fontSize: 13,
            fontFamily: T.mono,
            color: '#9CA3AF',
            display: 'flex',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Link href="/cart" style={{ color: '#9CA3AF', textDecoration: 'none' }}>
            Panier
          </Link>
          <span>›</span>
          <span style={{ color: step === 'info' ? T.accent : '#9CA3AF' }}>Coordonnées</span>
          <span>›</span>
          <span style={{ color: step === 'payment' ? T.accent : '#9CA3AF' }}>Paiement</span>
        </nav>
        <div style={{ width: 80 }} />
      </header>

      {/* Main layout */}
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '40px 24px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: 40,
          alignItems: 'start',
        }}
        className="strap-checkout-grid"
      >
        {/* ── Left column ── */}
        <div>
          {step === 'info' && (
            <form onSubmit={handleProceedToPayment}>
              {/* Contact */}
              <div style={sectionStyle}>
                <h2
                  style={{
                    fontFamily: T.display,
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#1A1A1A',
                    marginBottom: 20,
                  }}
                >
                  Contact
                </h2>
                <div>
                  <label style={labelStyle}>EMAIL</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="vous@exemple.fr"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Adresse */}
              <div style={sectionStyle}>
                <h2
                  style={{
                    fontFamily: T.display,
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#1A1A1A',
                    marginBottom: 20,
                  }}
                >
                  Adresse de livraison
                </h2>
                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}
                >
                  <div>
                    <label style={labelStyle}>PRÉNOM</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      placeholder="Jean"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>NOM</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      placeholder="Dupont"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>ADRESSE</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="12 rue de la Paix"
                    style={inputStyle}
                  />
                </div>
                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}
                >
                  <div>
                    <label style={labelStyle}>VILLE</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      placeholder="Lyon"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>CODE POSTAL</label>
                    <input
                      type="text"
                      required
                      value={zip}
                      onChange={e => setZip(e.target.value)}
                      placeholder="69001"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>PAYS</label>
                  <select
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    {COUNTRIES.map(c => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mode de livraison */}
              <div style={sectionStyle}>
                <h2
                  style={{
                    fontFamily: T.display,
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#1A1A1A',
                    marginBottom: 20,
                  }}
                >
                  Mode de livraison
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {freeShip ? (
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 16px',
                        border: `2px solid ${T.accent}`,
                        borderRadius: 4,
                        background: 'rgba(255,74,28,0.05)',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <input
                          type="radio"
                          name="shipping"
                          checked
                          readOnly
                          style={{ accentColor: T.accent }}
                        />
                        <div>
                          <div
                            style={{
                              fontFamily: T.display,
                              fontWeight: 600,
                              fontSize: 14,
                              color: '#1A1A1A',
                            }}
                          >
                            🎉 Livraison gratuite débloquée
                          </div>
                          <div
                            style={{ fontFamily: T.mono, fontSize: 12, color: '#6B7280', marginTop: 4 }}
                          >
                            5–7 jours ouvrés
                          </div>
                        </div>
                      </div>
                      <span
                        style={{ fontFamily: T.display, fontWeight: 700, fontSize: 14, color: T.accent }}
                      >
                        GRATUIT
                      </span>
                    </label>
                  ) : (
                    <>
                      {[
                        {
                          id: 'standard' as const,
                          label: 'Standard',
                          desc: '5–7 jours ouvrés',
                          price: '5,95€',
                        },
                        {
                          id: 'express' as const,
                          label: 'Express',
                          desc: '2–3 jours ouvrés',
                          price: '9,95€',
                        },
                      ].map(opt => (
                        <label
                          key={opt.id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '14px 16px',
                            border:
                              shipping === opt.id ? `2px solid ${T.accent}` : '1px solid #E5E7EB',
                            borderRadius: 4,
                            background: shipping === opt.id ? 'rgba(255,74,28,0.04)' : '#fff',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <input
                              type="radio"
                              name="shipping"
                              value={opt.id}
                              checked={shipping === opt.id}
                              onChange={() => setShipping(opt.id)}
                              style={{ accentColor: T.accent }}
                            />
                            <div>
                              <div
                                style={{
                                  fontFamily: T.display,
                                  fontWeight: 600,
                                  fontSize: 14,
                                  color: '#1A1A1A',
                                }}
                              >
                                {opt.label}
                              </div>
                              <div
                                style={{
                                  fontFamily: T.mono,
                                  fontSize: 12,
                                  color: '#6B7280',
                                  marginTop: 4,
                                }}
                              >
                                {opt.desc}
                              </div>
                            </div>
                          </div>
                          <span
                            style={{
                              fontFamily: T.display,
                              fontWeight: 600,
                              fontSize: 14,
                              color: '#1A1A1A',
                            }}
                          >
                            {opt.price}
                          </span>
                        </label>
                      ))}
                      <div
                        style={{
                          fontSize: 13,
                          fontFamily: T.mono,
                          color: '#6B7280',
                          paddingTop: 10,
                          borderTop: '1px solid #E5E7EB',
                        }}
                      >
                        🚚 Livraison gratuite dès {FREE_SHIP}€ d&apos;achat
                      </div>
                    </>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '18px 0',
                  background: loading ? '#ccc' : T.accent,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  fontSize: 15,
                  fontFamily: T.display,
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  transition: 'background 0.2s',
                }}
              >
                {loading ? 'Chargement...' : 'Procéder au paiement →'}
              </button>
            </form>
          )}

          {step === 'payment' && clientSecret && (
            <div>
              {/* Recap adresse */}
              <div style={{ ...sectionStyle, marginBottom: 20 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{ fontFamily: T.display, fontWeight: 600, fontSize: 14, color: '#1A1A1A' }}
                  >
                    Livraison
                  </span>
                  <button
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: T.accent,
                      cursor: 'pointer',
                      fontSize: 13,
                      fontFamily: T.mono,
                    }}
                    onClick={() => setStep('info')}
                  >
                    Modifier
                  </button>
                </div>
                <div style={{ fontSize: 13, fontFamily: T.mono, color: '#6B7280' }}>
                  {email} · {firstName} {lastName}
                </div>
                <div style={{ fontSize: 13, fontFamily: T.mono, color: '#6B7280', marginTop: 4 }}>
                  {address}, {zip} {city}, {country}
                </div>
              </div>

              {/* Stripe */}
              <div style={sectionStyle}>
                <h2
                  style={{
                    fontFamily: T.display,
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#1A1A1A',
                    marginBottom: 20,
                  }}
                >
                  Paiement sécurisé 🔒
                </h2>
                <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret,
                    appearance: {
                      theme: 'stripe',
                      variables: { colorPrimary: T.accent },
                    },
                  }}
                >
                  <PaymentForm total={grandTotal} onSuccess={handleSuccess} />
                </Elements>
              </div>
            </div>
          )}
        </div>

        {/* ── Right column — Résumé ── */}
        <aside>
          <div
            style={{
              background: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              padding: 24,
              position: 'sticky',
              top: 80,
            }}
          >
            <h2
              style={{
                fontFamily: T.mono,
                fontSize: 11,
                color: '#6B7280',
                letterSpacing: '0.1em',
                marginBottom: 20,
              }}
            >
              RÉSUMÉ DE COMMANDE
            </h2>

            {/* Items */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                paddingBottom: 16,
                borderBottom: '1px solid #E5E7EB',
              }}
            >
              {items.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      background: '#F3F4F6',
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    {/* Qty badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: -6,
                        right: -6,
                        background: T.accent,
                        color: '#fff',
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                    >
                      {item.qty}
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: T.display,
                        fontWeight: 600,
                        fontSize: 13,
                        color: '#1A1A1A',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.name}
                    </div>
                    <div style={{ fontSize: 12, fontFamily: T.mono, color: '#6B7280', marginTop: 3 }}>
                      {item.engravingText && `"${item.engravingText}" · `}
                      {item.cordColor.toUpperCase()}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: T.display,
                      fontWeight: 600,
                      fontSize: 14,
                      color: '#1A1A1A',
                      flexShrink: 0,
                    }}
                  >
                    {(item.price * item.qty).toFixed(2)}€
                  </div>
                </div>
              ))}
            </div>

            {/* Code promo */}
            <div
              style={{
                padding: '16px 0',
                borderBottom: '1px solid #E5E7EB',
              }}
            >
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  type="text"
                  value={promoCode}
                  onChange={e => setPromoCode(e.target.value)}
                  placeholder="Code promo"
                  style={{
                    ...inputStyle,
                    flex: 1,
                    fontSize: 13,
                    padding: '10px 12px',
                  }}
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  style={{
                    padding: '10px 16px',
                    background: 'transparent',
                    border: `1px solid ${T.accent}`,
                    borderRadius: 4,
                    color: T.accent,
                    fontFamily: T.display,
                    fontWeight: 600,
                    fontSize: 13,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Appliquer
                </button>
              </div>
              {promoApplied && (
                <div
                  style={{ fontSize: 12, fontFamily: T.mono, color: '#10B981', marginTop: 6 }}
                >
                  ✓ -10% appliqué
                </div>
              )}
              {promoError && (
                <div
                  style={{ fontSize: 12, fontFamily: T.mono, color: '#EF4444', marginTop: 6 }}
                >
                  {promoError}
                </div>
              )}
            </div>

            {/* Totaux */}
            <div style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                <span style={{ fontFamily: T.body, color: '#6B7280' }}>Sous-total</span>
                <span style={{ fontFamily: T.body, color: '#1A1A1A' }}>{total.toFixed(2)}€</span>
              </div>
              {discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <span style={{ fontFamily: T.body, color: '#6B7280' }}>Réduction (10%)</span>
                  <span style={{ fontFamily: T.body, color: '#10B981' }}>-{discount.toFixed(2)}€</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                <span style={{ fontFamily: T.body, color: '#6B7280' }}>Livraison</span>
                {shippingCost === 0 ? (
                  <span style={{ fontFamily: T.body, color: '#10B981', fontWeight: 600 }}>
                    OFFERTE
                  </span>
                ) : (
                  <span style={{ fontFamily: T.body, color: '#1A1A1A' }}>
                    {shippingCost.toFixed(2)}€
                  </span>
                )}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 16,
                borderTop: '1px solid #E5E7EB',
              }}
            >
              <span style={{ fontFamily: T.display, fontWeight: 700, fontSize: 15, color: '#1A1A1A' }}>
                Total
              </span>
              <span style={{ fontFamily: T.display, fontWeight: 700, fontSize: 24, color: '#1A1A1A' }}>
                {grandTotal.toFixed(2)}€
              </span>
            </div>

            {/* Reassurance */}
            <div
              style={{
                marginTop: 20,
                padding: '16px 0',
                borderTop: '1px solid #E5E7EB',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              {['🔒 Paiement 100% sécurisé', '📦 Livraison offerte dès 75€', '↩️ Retours 30 jours'].map(
                r => (
                  <div
                    key={r}
                    style={{ fontSize: 12, fontFamily: T.mono, color: '#6B7280', display: 'flex', alignItems: 'center', gap: 8 }}
                  >
                    {r}
                  </div>
                )
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Footer minimal */}
      <footer
        style={{
          borderTop: '1px solid #E5E7EB',
          padding: '20px 32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 32,
          flexWrap: 'wrap',
          background: '#fff',
        }}
      >
        <div style={{ fontSize: 12, fontFamily: T.mono, color: '#9CA3AF' }}>
          🔒 Paiement sécurisé SSL
        </div>
        <Link
          href="/mentions-legales"
          style={{ fontSize: 12, fontFamily: T.mono, color: '#9CA3AF', textDecoration: 'none' }}
        >
          Mentions légales
        </Link>
        <div style={{ fontSize: 12, fontFamily: T.mono, color: '#9CA3AF' }}>© 2026 STRAP.</div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .strap-checkout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
