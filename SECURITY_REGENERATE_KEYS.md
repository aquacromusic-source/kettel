# URGENT: Regeneration de la SUPABASE_SERVICE_KEY

La cle service_role a ete exposee dans le repo git public.
Elle doit etre regeneree IMMEDIATEMENT.

## Etapes

### 1. Regenerer la cle sur Supabase

1. Aller sur: https://supabase.com/dashboard/project/depztempjsdlpnfcjxir/settings/api
2. Section "Service role key" -> cliquer **Regenerate**
3. Confirmer la regeneration
4. **Copier la nouvelle cle** (elle ne sera plus visible apres)

### 2. Mettre a jour Vercel (3 projets)

Pour chaque projet, aller dans Settings > Environment Variables et mettre a jour `SUPABASE_SERVICE_ROLE_KEY`:

| Projet | Dashboard Vercel |
|--------|-----------------|
| Gaming Posters | https://vercel.com/dashboard/project/prj_4D2PwYslFn4vXRcvUPsKhxwb13xp/settings/environment-variables |
| STRAP. (Kettel) | https://vercel.com/dashboard/project/prj_Vxwv7236vFJ6EmtSa4oFQb5hh2HG/settings/environment-variables |
| Merchant OS | https://vercel.com/dashboard/project/prj_ic6Aaui8qruiPSjdkTG7dbWNp2Eh/settings/environment-variables |

Pour chaque projet:
1. Trouver la variable `SUPABASE_SERVICE_ROLE_KEY`
2. Cliquer Edit
3. Coller la nouvelle cle
4. Sauvegarder
5. **Redeployer** le projet (Settings > Deployments > Redeploy)

### 3. Mettre a jour .env.local

Sur ta machine locale, mettre a jour `.env.local` avec la nouvelle cle.

### 4. Verifier

- Tester que chaque site fonctionne apres redeploiement
- Verifier que les API routes repondent correctement
- Tester un achat complet sur Kettel

### 5. Invalider l'ancienne cle

La regeneration invalide automatiquement l'ancienne cle.
Verifier qu'aucun service externe n'utilise l'ancienne cle.

## Securite Git

L'ancienne cle est dans l'historique git. Meme si le repo est prive,
il est recommande de considerer cette cle comme compromise.

Si le repo a ete public a un moment:
- Toute personne ayant clone le repo a potentiellement la cle
- Des bots scannent GitHub en permanence pour les secrets exposes
- La cle doit etre consideree comme compromise
