/**
 * Import all products from mykettel.com Shopify API
 * - Downloads product images to /public/images/products/shopify/
 * - Generates updated /src/lib/products.ts
 */

import fs from 'fs'
import path from 'path'
import https from 'https'
import http from 'http'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const IMG_DIR = path.join(ROOT, 'public', 'images', 'products', 'shopify')

// Ensure image dir exists
fs.mkdirSync(IMG_DIR, { recursive: true })

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try { resolve(JSON.parse(data)) }
        catch (e) { reject(new Error('JSON parse error: ' + e.message)) }
      })
    }).on('error', reject)
  })
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath)) { resolve(destPath); return }
    const mod = url.startsWith('https') ? https : http
    const file = fs.createWriteStream(destPath)
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        fs.unlinkSync(destPath)
        downloadFile(res.headers.location, destPath).then(resolve).catch(reject)
        return
      }
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve(destPath) })
    })
    req.on('error', e => { fs.unlink(destPath, () => {}); reject(e) })
  })
}

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function detectSport(title, tags, handle) {
  const all = [title, ...tags, handle].join(' ').toLowerCase()
  if (/kettlebell|crossfit|cross.?training|musculation|fitness/.test(all)) return 'muscu'
  if (/football|foot/.test(all)) return 'football'
  if (/basketball|basket/.test(all)) return 'basketball'
  if (/tennis/.test(all)) return 'tennis'
  if (/rugby/.test(all)) return 'rugby'
  if (/golf/.test(all)) return 'golf'
  if (/boxe|boxing|gant/.test(all)) return 'boxe'
  if (/handball/.test(all)) return 'handball'
  if (/petanque|pétanque/.test(all)) return 'golf'
  if (/ping.?pong|tennis.?table|padel/.test(all)) return 'tennis'
  if (/ski|snow/.test(all)) return 'ski'
  if (/natation|swim|piscine/.test(all)) return 'natation'
  if (/cyclisme|velo|vélo|bike/.test(all)) return 'cyclisme'
  if (/running|course|trail/.test(all)) return 'running'
  return 'muscu'
}

function detectCategory(title, tags, price) {
  const all = [title, ...tags].join(' ').toLowerCase()
  if (/massif|925|sterling/.test(all)) return 'massif'
  if (/pvd|or\s*18|gold|doré|platine|prestige/.test(all)) return 'prestige'
  if (/cordon/.test(all)) return 'cordon'
  if (parseFloat(price) >= 65) return 'prestige'
  return 'signature'
}

function detectFinish(title, tags) {
  const all = [title, ...tags].join(' ').toLowerCase()
  if (/rose.?gold|or.?rose/.test(all)) return 'Doré Or Rose 18 carats'
  if (/gold|doré|or.?24|or.?18|or.?fin/.test(all)) return 'Doré Or 24 carats'
  if (/platine/.test(all)) return 'Plaqué Platine'
  if (/massif|925/.test(all)) return 'Argent Massif 925'
  if (/inox|316/.test(all)) return 'Acier Inoxydable 316L'
  return 'Plaqué Argent Brossé'
}

function extractCordColors(variants) {
  const seen = new Set()
  const colors = []
  for (const v of variants) {
    const color = (v.option2 || '').toLowerCase().trim()
    if (color && !seen.has(color)) {
      seen.add(color)
      const slug = slugify(color)
      colors.push(slug || color)
    }
  }
  return colors.length ? colors : ['noir', 'marine', 'kaki', 'rouge', 'blanc']
}

function buildSpecs(product) {
  const title = product.title.toLowerCase()
  const specs = [
    { key: 'Cordon', value: 'Polyester tressé — France' },
    { key: 'Taille', value: 'Réglable 15–21 cm' },
    { key: 'Atelier', value: 'Assemblé en France' },
  ]
  if (/massif|925/.test(title)) {
    specs.unshift({ key: 'Métal', value: 'Argent massif 925 poinçon certifié' })
  } else if (/inox|316/.test(title)) {
    specs.unshift({ key: 'Pendentif', value: 'Acier Inoxydable 316L hypoallergénique' })
    specs.push({ key: 'Étanchéité', value: 'Résiste eau, transpiration, chlore' })
  } else if (/or.?rose|rose.?gold/.test(title)) {
    specs.unshift({ key: 'Finition', value: 'Or Rose 18 carats' })
  } else if (/gold|doré/.test(title)) {
    specs.unshift({ key: 'Finition', value: 'Or fin 24 carats' })
  } else {
    specs.unshift({ key: 'Pendentif', value: 'Acier plaqué argent brossé 10 microns' })
    specs.unshift({ key: 'Diamètre', value: '10 mm' })
  }
  return specs
}

async function main() {
  console.log('Fetching products from mykettel.com...')
  
  let allProducts = []
  let page = 1
  const limit = 250
  
  // Fetch all pages (products.json supports limit up to 250)
  const data = await fetchJson(`https://mykettel.com/products.json?limit=${limit}`)
  allProducts = data.products || []
  
  console.log(`Found ${allProducts.length} products`)

  // Download images and map product
  const mapped = []
  let imgCount = 0
  
  for (const p of allProducts) {
    const images = (p.images || []).slice(0, 5)
    const localImages = []
    
    for (const img of images) {
      const srcUrl = img.src.split('?')[0] // remove cache busting
      const ext = path.extname(srcUrl.split('/').pop()) || '.jpg'
      const filename = `${p.handle}-${img.position}${ext}`
      const destPath = path.join(IMG_DIR, filename)
      const publicPath = `/images/products/shopify/${filename}`
      
      try {
        await downloadFile(srcUrl, destPath)
        localImages.push(publicPath)
        imgCount++
        if (imgCount % 10 === 0) console.log(`  Downloaded ${imgCount} images...`)
      } catch (e) {
        console.warn(`  WARN: failed to download ${srcUrl}: ${e.message}`)
        localImages.push(publicPath) // still reference it
      }
    }
    
    const thumbImage = localImages[0] || `/images/products/shopify/${p.handle}-1.jpg`
    const heroImage = localImages[1] || thumbImage
    
    const price = parseFloat(p.variants?.[0]?.price || '49')
    const comparePrice = parseFloat(p.variants?.[0]?.compare_at_price || '0')
    const sport = detectSport(p.title, p.tags, p.handle)
    const category = detectCategory(p.title, p.tags, price)
    const finish = detectFinish(p.title, p.tags)
    const cordColors = extractCordColors(p.variants || [])
    const specs = buildSpecs(p)
    
    // Determine badge
    let badge = undefined
    const titleLower = p.title.toLowerCase()
    const tagsLower = p.tags.map(t => t.toLowerCase())
    if (tagsLower.some(t => /bestsell|best.sell/.test(t))) badge = 'Best-seller'
    else if (category === 'massif') badge = 'Argent massif'
    else if (/inox|316/.test(titleLower)) badge = 'Premium'
    else if (/nouveau|new/.test(tagsLower.join(' '))) badge = 'Nouveau'
    
    // Featured: first 8 products or prestige
    const featured = category === 'prestige' || mapped.length < 8
    
    // Clean body_html to plain description
    const description = (p.body_html || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 200) + (p.body_html?.length > 200 ? '…' : '')
    
    // Extract title parts (e.g. "Bracelet Kettlebell - Rose Doré" → "Kettlebell" + "Rose Doré")
    const titleParts = p.title.replace(/^Bracelet\s+/i, '').split(/\s*[-–]\s*/)
    const cleanTitle = titleParts[0]?.trim() || p.title
    const subtitle = titleParts[1]?.trim() || finish
    
    mapped.push({
      id: `shopify-${p.id}`,
      handle: p.handle,
      title: cleanTitle,
      subtitle: `${sport.charAt(0).toUpperCase() + sport.slice(1)} · ${subtitle}`,
      price,
      comparePrice: comparePrice > price ? comparePrice : undefined,
      description: description || `Bracelet ${cleanTitle} — pendentif sport sur cordon tressé.`,
      fullDescription: p.body_html?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() || description,
      sport,
      category,
      finish,
      badge,
      images: localImages,
      thumbImage,
      heroImage,
      cordColors,
      featured,
      tags: p.tags,
      specs,
    })
  }

  console.log(`Total images downloaded: ${imgCount}`)
  console.log(`Generating products.ts...`)

  // Generate TypeScript file
  const ts = `// Données produits importées depuis mykettel.com (${new Date().toISOString().slice(0, 10)})
// Script: scripts/import-products.mjs

export interface Product {
  id: string
  handle: string
  title: string
  subtitle: string
  price: number
  comparePrice?: number
  description: string
  fullDescription: string
  sport: string
  category: 'signature' | 'prestige' | 'massif' | 'cordon'
  finish: string
  badge?: string
  images: string[]
  thumbImage: string
  heroImage: string
  cordColors: string[]
  featured: boolean
  tags: string[]
  specs: { key: string; value: string }[]
}

export const PRODUCTS: Product[] = ${JSON.stringify(mapped, null, 2)}

// Helpers
export function getProductByHandle(handle: string): Product | undefined {
  return PRODUCTS.find(p => p.handle === handle)
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.featured)
}

export function getProductsBySport(sport: string): Product[] {
  return PRODUCTS.filter(p => p.sport === sport)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return PRODUCTS.filter(p => p.category === category)
}

export function getBestSellers(): Product[] {
  return PRODUCTS.filter(p => p.badge === 'Best-seller' || p.featured).slice(0, 8)
}

export const SPORT_MAP: Record<string, string[]> = {
  football: PRODUCTS.filter(p => p.sport === 'football').map(p => p.id),
  basketball: PRODUCTS.filter(p => p.sport === 'basketball').map(p => p.id),
  tennis: PRODUCTS.filter(p => p.sport === 'tennis').map(p => p.id),
  running: PRODUCTS.filter(p => p.sport === 'running').map(p => p.id),
  muscu: PRODUCTS.filter(p => p.sport === 'muscu').map(p => p.id),
  rugby: PRODUCTS.filter(p => p.sport === 'rugby').map(p => p.id),
  golf: PRODUCTS.filter(p => p.sport === 'golf').map(p => p.id),
  boxe: PRODUCTS.filter(p => p.sport === 'boxe').map(p => p.id),
  cyclisme: PRODUCTS.filter(p => p.sport === 'cyclisme').map(p => p.id),
  natation: PRODUCTS.filter(p => p.sport === 'natation').map(p => p.id),
}
`

  const tsPath = path.join(ROOT, 'src', 'lib', 'products.ts')
  fs.writeFileSync(tsPath, ts, 'utf8')
  console.log(`Written: ${tsPath}`)
  console.log(`Done! ${mapped.length} products imported.`)
}

main().catch(e => { console.error(e); process.exit(1) })
