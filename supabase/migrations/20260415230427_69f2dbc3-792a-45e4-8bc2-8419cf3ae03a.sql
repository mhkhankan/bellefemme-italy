CREATE TABLE public.brochure_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  course_slug TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  download_token TEXT DEFAULT gen_random_uuid()::text
);

ALTER TABLE public.brochure_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous brochure lead insert"
  ON public.brochure_leads
  FOR INSERT
  TO public
  WITH CHECK (true);