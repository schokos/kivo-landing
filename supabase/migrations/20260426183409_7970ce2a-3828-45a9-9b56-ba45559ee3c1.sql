CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL CHECK (char_length(email) <= 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  name TEXT CHECK (name IS NULL OR char_length(name) <= 100),
  tier TEXT NOT NULL CHECK (tier IN ('starter', 'pro', 'max', 'family', 'donation')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX waitlist_signups_email_tier_idx ON public.waitlist_signups (lower(email), tier);

ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
ON public.waitlist_signups
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view waitlist"
ON public.waitlist_signups
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));