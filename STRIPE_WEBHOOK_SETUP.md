# Stripe Webhook Setup

## 1. Configure Webhook in Stripe Dashboard

1. Go to https://dashboard.stripe.com/webhooks
2. Click **Add endpoint**
3. Enter your endpoint URL:
   - STRAP: `https://kettel-three.vercel.app/api/webhooks/stripe`
4. Select events:
   - `payment_intent.succeeded`
   - `customer.created`
   - `customer.updated`
   - `charge.refunded`
5. Click **Add endpoint**
6. Copy the **Signing secret** (`whsec_...`)

## 2. Add Environment Variables

Add to Vercel (Settings > Environment Variables):

```
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_SUPABASE_URL=https://depztempjsdlpnfcjxir.supabase.co
SUPABASE_SERVICE_KEY=<your-supabase-service-role-key>
```

Also add to `.env.local` for local development.

## 3. Supabase: Create Tables & Functions

### Orders table
```sql
CREATE TABLE IF NOT EXISTS orders (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  site_id text NOT NULL DEFAULT 'strap',
  stripe_payment_intent_id text UNIQUE NOT NULL,
  customer_email text,
  amount numeric NOT NULL,
  currency text DEFAULT 'eur',
  status text DEFAULT 'paid',
  items jsonb,
  shipping_address jsonb,
  discount numeric DEFAULT 0,
  refunded_at timestamptz,
  created_at timestamptz DEFAULT now()
);
```

### Customers table
```sql
CREATE TABLE IF NOT EXISTS customers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  stripe_customer_id text UNIQUE NOT NULL,
  email text,
  name text,
  phone text,
  metadata jsonb,
  updated_at timestamptz DEFAULT now()
);
```

### Stock decrement function
```sql
CREATE OR REPLACE FUNCTION decrement_stock(
  product_id text,
  quantity int,
  table_name text
)
RETURNS void AS $$
BEGIN
  EXECUTE format(
    'UPDATE %I SET stock = stock - $1 WHERE id = $2',
    table_name
  ) USING quantity, product_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

## 4. Local Testing with Stripe CLI

```bash
# Install Stripe CLI (if not already)
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward events to local dev server
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# In another terminal, trigger test events:
stripe trigger payment_intent.succeeded
stripe trigger customer.created
stripe trigger charge.refunded
```

## 5. Verify

After deployment, check Vercel logs for:
- `Order created: <uuid>`
- `Customer updated: <email>`
- `Order refunded: <pi_...>`

In Stripe Dashboard > Webhooks, verify events show 200 status.
