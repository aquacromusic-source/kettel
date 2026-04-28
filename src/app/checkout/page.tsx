'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { loadStripe, type PaymentRequest } from '@stripe/stripe-js'
import {
  Elements,
  PaymentElement,
  PaymentRequestButtonElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { useCart } from '@/context/CartContext'
import { T } from '@/components/tokens'
import * as gtag from '@/lib/gtag'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

/* ── Country code mapping ── */
const COUNTRY_CODE_MAP: Record<string, string> = {
  France: 'FR',
  Belgique: 'BE',
  Suisse: 'CH',
  Luxembourg: 'LU',
  Canada: 'CA',
  Allemagne: 'DE',
  Espagne: 'ES',
  Italie: 'IT',
  Portugal: 'PT',
  'Pays-Bas': 'NL',
  Autre: 'FR',
}

/* ── Reverse mapping (code -> country name) for Google Places autofill ── */
const CODE_COUNTRY_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(COUNTRY_CODE_MAP).map(([k, v]) => [v, k])
)

/* ── Shipping rate type from API ── */
interface ShippingRate {
  id: string
  carrier: string
  label: string
  price: number
  delivery: string
}

/* ── PaymentForm with Apple Pay / Google Pay ── */
function PaymentForm({ total, onSuccess, clientSecret }: { total: number; onSuccess: () => void; clientSecret: string }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(null)
  const [canPay, setCanPay] = useState(false)

  /* Apple Pay / Google Pay setup */
  useEffect(() => {
    if (!stripe) return

    const pr = stripe.paymentRequest({
      country: 'FR',
      currency: 'eur',
      total: {
        label: 'STRAP.',
        amount: Math.round(total * 100),
      },
      requestPayerName: true,
      requestPayerEmail: true,
    })

    pr.canMakePayment().then(result => {
      if (result) {
        setPaymentRequest(pr)
        setCanPay(true)
      }
    })

    pr.on('paymentmethod', async (ev) => {
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        { payment_method: ev.paymentMethod.id },
        { handleActions: false }
      )

      if (confirmError) {
        ev.complete('fail')
        setError(confirmError.message || 'Erreur de paiement')
      } else {
        ev.complete('success')
        if (paymentIntent?.status === 'requires_action') {
          const { error: actionError } = await stripe.confirmCardPayment(clientSecret)
          if (actionError) {
            setError(actionError.message || 'Erreur de paiement')
          } else {
            onSuccess()
          }
        } else {
          onSuccess()
        }
      }
    })
  }, [stripe, total, clientSecret, onSuccess])

  /* Update payment request amount when total changes */
  useEffect(() => {
    if (paymentRequest) {
      paymentRequest.update({
        total: {
          label: 'STRAP.',
          amount: Math.round(total * 100),
        },
      })
    }
  }, [paymentRequest, total])

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
    <div>
      {/* Apple Pay / Google Pay button */}
      {canPay && paymentRequest && (
        <>
          <PaymentRequestButtonElement
            options={{ paymentRequest, style: { paymentRequestButton: { height: '48px' } } }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              margin: '16px 0',
            }}
          >
            <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
            <span style={{ fontFamily: T.mono, fontSize: 12, color: '#9CA3AF' }}>ou</span>
            <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
          </div>
        </>
      )}

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
          {loading ? 'Traitement...' : `Payer ${total.toFixed(2)}\u20AC`}
        </button>
      </form>
    </div>
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

/* ── Google Places Autocomplete hook ── */
function useGooglePlacesAutocomplete(
  inputRef: React.RefObject<HTMLInputElement | null>,
  onSelect: (place: { address: string; city: string; zip: string; country: string }) => void
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const autocompleteRef = useRef<any>(null) // Google Maps Autocomplete instance

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY
    if (!apiKey) return

    const loadScript = () => {
      if (document.getElementById('google-places-script')) {
        initAutocomplete()
        return
      }
      const script = document.createElement('script')
      script.id = 'google-places-script'
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = initAutocomplete
      document.head.appendChild(script)
    }

    const initAutocomplete = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any
      if (!inputRef.current || !w.google) return
      const google = w.google

      autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        fields: ['address_components', 'formatted_address'],
      })

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current.getPlace()
        if (!place || !place.address_components) return

        let streetNumber = ''
        let route = ''
        let city = ''
        let zip = ''
        let countryCode = ''

        for (const component of place.address_components) {
          const types = component.types
          if (types.includes('street_number')) streetNumber = component.long_name
          if (types.includes('route')) route = component.long_name
          if (types.includes('locality')) city = component.long_name
          if (types.includes('postal_code')) zip = component.long_name
          if (types.includes('country')) countryCode = component.short_name
        }

        const address = streetNumber ? `${streetNumber} ${route}` : route
        const countryName = CODE_COUNTRY_MAP[countryCode] || 'Autre'

        onSelect({ address, city, zip, country: countryName })
      })
    }

    loadScript()

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any
      if (autocompleteRef.current && w.google) {
        w.google.maps.event.clearInstanceListeners(autocompleteRef.current)
      }
    }
  }, [inputRef, onSelect])
}

/* ── Checkout data for localStorage persistence ── */
interface CheckoutData {
  email: string
  firstName: string
  lastName: string
  address: string
  city: string
  zip: string
  country: string
  shipping: string
  promoCode: string
  promoApplied: boolean
}

const CHECKOUT_STORAGE_KEY = 'checkoutData'

export default function CheckoutPage() {
  const { items, clearCart, total } = useCart()
  const router = useRouter()

  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info')
  const [clientSecret, setClientSecret] = useState('')
  const [paymentIntentId, setPaymentIntentId] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('France')
  const [zip, setZip] = useState('')
  const [shipping, setShipping] = useState('standard')
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoError, setPromoError] = useState('')

  /* Shipping rates from API */
  const [apiRates, setApiRates] = useState<ShippingRate[] | null>(null)
  const [ratesLoading, setRatesLoading] = useState(false)

  /* Address input ref for Google Places */
  const addressInputRef = useRef<HTMLInputElement | null>(null)

  /* ── 3. Restore from localStorage on mount ── */
  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem(CHECKOUT_STORAGE_KEY)
      if (saved) {
        const data: CheckoutData = JSON.parse(saved)
        if (data.email) setEmail(data.email)
        if (data.firstName) setFirstName(data.firstName)
        if (data.lastName) setLastName(data.lastName)
        if (data.address) setAddress(data.address)
        if (data.city) setCity(data.city)
        if (data.zip) setZip(data.zip)
        if (data.country) setCountry(data.country)
        if (data.shipping) setShipping(data.shipping)
        if (data.promoCode) setPromoCode(data.promoCode)
        if (data.promoApplied) setPromoApplied(data.promoApplied)
      }
    } catch {}
  }, [])

  /* ── 3. Persist to localStorage on any field change ── */
  useEffect(() => {
    if (!mounted) return
    try {
      localStorage.setItem(
        CHECKOUT_STORAGE_KEY,
        JSON.stringify({
          email,
          firstName,
          lastName,
          address,
          city,
          zip,
          country,
          shipping,
          promoCode,
          promoApplied,
        })
      )
    } catch {}
  }, [mounted, email, firstName, lastName, address, city, zip, country, shipping, promoCode, promoApplied])

  /* ── 1. Fetch shipping rates from API ── */
  useEffect(() => {
    if (!mounted) return
    const countryCode = COUNTRY_CODE_MAP[country] || 'FR'

    const fetchRates = async () => {
      setRatesLoading(true)
      try {
        const res = await fetch(
          `https://merchant-os-mauve.vercel.app/api/shipping/rates?site=strap&country=${countryCode}`
        )
        if (!res.ok) throw new Error('API error')
        const data = await res.json()
        if (Array.isArray(data) && data.length > 0) {
          setApiRates(data)
          /* If current shipping selection is not in the new rates, select first */
          const ids = data.map((r: ShippingRate) => r.id)
          if (!ids.includes(shipping)) {
            setShipping(data[0].id)
          }
        } else {
          setApiRates(null)
        }
      } catch {
        setApiRates(null)
      } finally {
        setRatesLoading(false)
      }
    }

    fetchRates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, country])

  /* ── 2. Google Places Autocomplete ── */
  const handlePlaceSelect = useCallback(
    (place: { address: string; city: string; zip: string; country: string }) => {
      if (place.address) setAddress(place.address)
      if (place.city) setCity(place.city)
      if (place.zip) setZip(place.zip)
      if (place.country && COUNTRIES.includes(place.country)) setCountry(place.country)
    },
    []
  )

  useGooglePlacesAutocomplete(addressInputRef, handlePlaceSelect)

  /* ── Shipping cost calculation ── */
  const FREE_SHIP = 75
  const freeShip = total >= FREE_SHIP

  let shippingCost: number
  if (freeShip) {
    shippingCost = 0
  } else if (apiRates) {
    const selectedRate = apiRates.find(r => r.id === shipping)
    shippingCost = selectedRate ? selectedRate.price : (apiRates[0]?.price ?? 5.95)
  } else {
    /* Fallback to hardcoded */
    shippingCost = shipping === 'express' ? 9.95 : 5.95
  }

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

  // Create Payment Intent ONCE when cart is ready
  useEffect(() => {
    if (!mounted || items.length === 0 || paymentIntentId) return
    const cartItemsPayload = items.map(i => ({ id: i.productId, name: i.name, qty: i.qty, cordColor: i.cordColor, engravingText: i.engravingText, price: i.price }))
    const shippingAddress = { firstName, lastName, address, city, zip, country }
    fetch('/api/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: grandTotal,
        email: email || undefined,
        siteId: 'strap',
        cartItems: JSON.stringify(cartItemsPayload),
        shippingAddress: JSON.stringify(shippingAddress),
        shipping,
        discount,
      }),
    }).then(r => r.json()).then(d => {
      if (d.clientSecret) {
        setClientSecret(d.clientSecret)
        const piId = d.clientSecret.split('_secret_')[0]
        setPaymentIntentId(piId)
      }
    }).catch(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, items.length])

  // Update Payment Intent with debounce 500ms when fields change
  useEffect(() => {
    if (!paymentIntentId) return
    const timeoutId = setTimeout(() => {
      const cartItemsPayload = items.map(i => ({ id: i.productId, name: i.name, qty: i.qty, cordColor: i.cordColor, engravingText: i.engravingText, price: i.price }))
      const shippingAddress = { firstName, lastName, address, city, zip, country }
      fetch('/api/payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: grandTotal,
          email,
          paymentIntentId,
          siteId: 'strap',
          cartItems: JSON.stringify(cartItemsPayload),
          shippingAddress: JSON.stringify(shippingAddress),
          shipping,
          discount,
        }),
      }).catch(() => {})
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [email, firstName, lastName, address, city, zip, country, shipping, grandTotal, paymentIntentId, items, discount])

  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    gtag.event({
      action: 'begin_checkout',
      currency: 'EUR',
      value: grandTotal,
      items: items.map(i => ({ item_id: i.productId, item_name: i.name, price: i.price, quantity: i.qty })),
    })
    setStep('payment')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSuccess = useCallback(() => {
    gtag.event({
      action: 'purchase',
      currency: 'EUR',
      value: grandTotal,
      transaction_id: `STRAP-${Date.now()}`,
      shipping: shippingCost,
      items: items.map(i => ({ item_id: i.productId, item_name: i.name, price: i.price, quantity: i.qty })),
    })
    clearCart()
    /* Clear checkout data from localStorage on success */
    try { localStorage.removeItem(CHECKOUT_STORAGE_KEY) } catch {}
    setStep('success')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [grandTotal, shippingCost, items, clearCart])

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

  /* ── Build shipping options for the info step ── */
  const renderShippingOptions = () => {
    if (freeShip) {
      return (
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
            <input type="radio" name="shipping" checked readOnly style={{ accentColor: T.accent }} />
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
              <div style={{ fontFamily: T.mono, fontSize: 12, color: '#6B7280', marginTop: 4 }}>
                5–7 jours ouvrés
              </div>
            </div>
          </div>
          <span style={{ fontFamily: T.display, fontWeight: 700, fontSize: 14, color: T.accent }}>
            GRATUIT
          </span>
        </label>
      )
    }

    /* API rates available */
    if (apiRates && apiRates.length > 0) {
      return (
        <>
          {apiRates.map(rate => (
            <label
              key={rate.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                border: shipping === rate.id ? `2px solid ${T.accent}` : '1px solid #E5E7EB',
                borderRadius: 4,
                background: shipping === rate.id ? 'rgba(255,74,28,0.04)' : '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <input
                  type="radio"
                  name="shipping"
                  value={rate.id}
                  checked={shipping === rate.id}
                  onChange={() => setShipping(rate.id)}
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
                    {rate.carrier} — {rate.label}
                  </div>
                  <div
                    style={{
                      fontFamily: T.mono,
                      fontSize: 12,
                      color: '#6B7280',
                      marginTop: 4,
                    }}
                  >
                    {rate.delivery}
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
                {rate.price === 0 ? 'GRATUIT' : `${rate.price.toFixed(2).replace('.', ',')}€`}
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
      )
    }

    /* Fallback to hardcoded rates */
    return (
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
              border: shipping === opt.id ? `2px solid ${T.accent}` : '1px solid #E5E7EB',
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
        {/* -- Left column -- */}
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
                    ref={addressInputRef}
                    type="text"
                    required
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="12 rue de la Paix"
                    style={inputStyle}
                    autoComplete="off"
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
                  {ratesLoading ? (
                    <div
                      style={{
                        padding: '20px 0',
                        textAlign: 'center',
                        fontFamily: T.mono,
                        fontSize: 13,
                        color: '#9CA3AF',
                      }}
                    >
                      Chargement des options de livraison...
                    </div>
                  ) : (
                    renderShippingOptions()
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
                  <PaymentForm total={grandTotal} onSuccess={handleSuccess} clientSecret={clientSecret} />
                </Elements>
              </div>
            </div>
          )}
        </div>

        {/* -- Right column — Résumé -- */}
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
          href="#"
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
// trigger redeploy 1777117736
