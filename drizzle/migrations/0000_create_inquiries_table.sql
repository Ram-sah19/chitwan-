CREATE TABLE public.inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  visit_date date,
  travellers integer,
  country text,
  experiences text[] NOT NULL DEFAULT '{}',
  duration text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Visitors submit inquiries without an account; the operator reads them with elevated access.
GRANT INSERT ON public.inquiries TO anon;
GRANT ALL ON public.inquiries TO service_role;

ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can submit inquiries"
  ON public.inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Operators manage inquiries"
  ON public.inquiries
  FOR SELECT
  TO service_role
  USING (true);