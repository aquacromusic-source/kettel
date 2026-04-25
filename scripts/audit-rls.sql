-- =============================================================
-- AUDIT RLS (Row Level Security) — Supabase
-- Executer dans: Supabase Dashboard > SQL Editor
-- =============================================================

-- 1. Lister les tables SANS RLS active
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
  AND rowsecurity = false;

-- 2. Activer RLS sur toutes les tables critiques
ALTER TABLE IF EXISTS kettel_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS shipping_zones ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS shipping_rates ENABLE ROW LEVEL SECURITY;

-- 3. Lister les policies existantes
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- =============================================================
-- 4. POLICIES RECOMMANDEES
-- (a adapter selon les policies existantes listees ci-dessus)
-- =============================================================

-- PRODUITS: lecture publique, ecriture service_role uniquement
-- Decommenter et executer apres verification des policies existantes:

/*
-- Kettel Products
DROP POLICY IF EXISTS "Products readable by all" ON kettel_products;
CREATE POLICY "Products readable by all" ON kettel_products
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Products writable by service_role" ON kettel_products;
CREATE POLICY "Products writable by service_role" ON kettel_products
  FOR ALL USING (auth.role() = 'service_role');

-- Commandes: lecture authentifiee, ecriture service_role
DROP POLICY IF EXISTS "Orders readable by authenticated" ON orders;
CREATE POLICY "Orders readable by authenticated" ON orders
  FOR SELECT USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

DROP POLICY IF EXISTS "Orders writable by service_role" ON orders;
CREATE POLICY "Orders writable by service_role" ON orders
  FOR ALL USING (auth.role() = 'service_role');

-- Clients: lecture authentifiee, ecriture service_role
DROP POLICY IF EXISTS "Customers readable by authenticated" ON customers;
CREATE POLICY "Customers readable by authenticated" ON customers
  FOR SELECT USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

DROP POLICY IF EXISTS "Customers writable by service_role" ON customers;
CREATE POLICY "Customers writable by service_role" ON customers
  FOR ALL USING (auth.role() = 'service_role');

-- Shipping: lecture publique, ecriture service_role
DROP POLICY IF EXISTS "Shipping readable by all" ON shipping_zones;
CREATE POLICY "Shipping readable by all" ON shipping_zones
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Shipping writable by service_role" ON shipping_zones;
CREATE POLICY "Shipping writable by service_role" ON shipping_zones
  FOR ALL USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Rates readable by all" ON shipping_rates;
CREATE POLICY "Rates readable by all" ON shipping_rates
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Rates writable by service_role" ON shipping_rates;
CREATE POLICY "Rates writable by service_role" ON shipping_rates
  FOR ALL USING (auth.role() = 'service_role');
*/
