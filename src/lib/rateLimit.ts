// Rate limiter in-memory simple — pas de Redis nécessaire
// Fonctionne par instance Vercel (suffisant pour bloquer les bots basiques)

const requests = new Map<string, { count: number; resetAt: number }>()

export function rateLimit(
  ip: string,
  options: { limit: number; windowMs: number } = { limit: 10, windowMs: 60_000 }
): { success: boolean; remaining: number; resetAt: number } {
  const now = Date.now()
  const key = ip

  const entry = requests.get(key)

  if (!entry || now > entry.resetAt) {
    requests.set(key, { count: 1, resetAt: now + options.windowMs })
    return { success: true, remaining: options.limit - 1, resetAt: now + options.windowMs }
  }

  if (entry.count >= options.limit) {
    return { success: false, remaining: 0, resetAt: entry.resetAt }
  }

  entry.count++
  return { success: true, remaining: options.limit - entry.count, resetAt: entry.resetAt }
}

export function getClientIP(req: Request): string {
  // Vercel forwarde l'IP réelle
  const forwarded = (req.headers as Headers)?.get?.('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  const realIP = (req.headers as Headers)?.get?.('x-real-ip')
  if (realIP) return realIP
  return 'unknown'
}
