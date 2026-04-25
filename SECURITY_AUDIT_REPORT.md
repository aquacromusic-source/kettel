# Security Audit Report — Kettel (STRAP.)

Date: 2026-04-25

## 1. SUPABASE_SERVICE_KEY exposee

**Statut: ACTION MANUELLE REQUISE**

La cle service_role est potentiellement dans l'historique git.
Instructions de regeneration: voir `SECURITY_REGENERATE_KEYS.md`

Robin doit:
- [ ] Regenerer la cle sur Supabase Dashboard
- [ ] Mettre a jour Vercel (3 projets)
- [ ] Mettre a jour .env.local
- [ ] Verifier que tout fonctionne

## 2. Auth admin Back-Office (Merchant OS)

**Statut: A IMPLEMENTER SUR MERCHANT OS**

Ce repo (Kettel) est le storefront public, pas le back-office.
Le middleware auth doit etre ajoute sur le repo Merchant OS separement.

## 3. RLS (Row Level Security)

**Statut: SCRIPT CREE — scripts/audit-rls.sql**

A executer dans Supabase SQL Editor:
- [ ] Lancer la requete d'audit (section 1 et 3)
- [ ] Verifier quelles tables n'ont pas RLS
- [ ] Activer RLS sur les tables manquantes (section 2)
- [ ] Appliquer les policies recommandees (section 4) apres review

## 4. Rate Limiting

**Statut: A VERIFIER**

- Verifier si rate limiter existe dans les API routes
- Script de test: `node scripts/test-rate-limit.js`
- Endpoint teste: `/api/payment-intent`

Amelioration possible: migrer vers Upstash Redis rate limiter

- [ ] Tester avec `node scripts/test-rate-limit.js`
- [ ] Implementer rate limiting si absent
- [ ] Considerer migration vers Upstash pour persistence cross-instance

## 5. Headers de securite

**Statut: IMPLEMENTE**

Headers ajoutes dans `next.config.mjs`:
- X-Frame-Options: DENY (anti-clickjacking)
- X-Content-Type-Options: nosniff (anti-MIME sniffing)
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation/microphone/camera desactives
- Content-Security-Policy: whitelist Stripe, Google Analytics, Supabase, Shopify CDN

## 6. Autres observations

- **Stripe secret key**: utilisee uniquement cote serveur (OK)
- **Parametrized queries**: verifier que toutes les requetes SQL utilisent des parametres
- **Validation serveur**: les prix doivent etre recalcules cote serveur
- **SSL**: connexion DB avec SSL active
