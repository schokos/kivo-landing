-- Tighten the over-permissive policies. Edge functions use service role and bypass RLS anyway.
DROP POLICY IF EXISTS "insert_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "update_own_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "insert_donations" ON public.donations;
DROP POLICY IF EXISTS "update_donations" ON public.donations;

-- No client-side INSERT or UPDATE allowed; only service role (used by edge functions) can write.
-- SELECT policies remain so users can read their own data.