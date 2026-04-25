// Test de rate limiting sur l'endpoint payment-intent
// Usage: node scripts/test-rate-limit.js [URL]

const BASE_URL = process.argv[2] || 'https://kettel-three.vercel.app'

async function testRateLimit() {
  const endpoint = `${BASE_URL}/api/payment-intent`
  const fakeIP = 'test-ip-' + Math.random().toString(36).slice(2)

  console.log(`Testing rate limit on: ${endpoint}`)
  console.log(`Using fake IP: ${fakeIP}`)
  console.log('---')

  let blocked = false

  for (let i = 1; i <= 15; i++) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': fakeIP,
        },
        body: JSON.stringify({
          items: [{ slug: 'test', qty: 1 }],
          shipping: 'standard',
        }),
      })

      const status = res.status
      console.log(`Request ${i.toString().padStart(2)}: HTTP ${status}`)

      if (status === 429) {
        console.log(`\nRate limiting OK — bloque apres ${i} requetes`)
        blocked = true
        break
      }
    } catch (err) {
      console.log(`Request ${i.toString().padStart(2)}: ERROR — ${err.message}`)
    }
  }

  if (!blocked) {
    console.log('\nRate limiting ne fonctionne PAS — 15 requetes passees sans blocage')
  }
}

testRateLimit()
