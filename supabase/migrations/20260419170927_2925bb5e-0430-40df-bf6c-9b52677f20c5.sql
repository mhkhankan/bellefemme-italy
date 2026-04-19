-- Drop permissive policy
DROP POLICY IF EXISTS "Allow anonymous brochure lead insert" ON public.brochure_leads;

-- Rate-limited insert: max 3 submissions per whatsapp number
CREATE POLICY "Rate-limited brochure lead insert"
  ON public.brochure_leads
  FOR INSERT
  TO public
  WITH CHECK (
    (SELECT count(*) FROM public.brochure_leads bl WHERE bl.whatsapp = brochure_leads.whatsapp) < 3
  );

-- Length constraints
ALTER TABLE public.brochure_leads
  ADD CONSTRAINT brochure_leads_name_length CHECK (char_length(name) <= 100),
  ADD CONSTRAINT brochure_leads_whatsapp_length CHECK (char_length(whatsapp) <= 20),
  ADD CONSTRAINT brochure_leads_course_slug_length CHECK (char_length(course_slug) <= 100);