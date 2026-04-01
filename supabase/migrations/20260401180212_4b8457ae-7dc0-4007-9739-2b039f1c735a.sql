
-- Drop overly permissive policies
DROP POLICY "Anyone can submit waitlist lead" ON public.waitlist_leads;
DROP POLICY "Anyone can submit academy waitlist" ON public.academy_waitlist;

-- Rate-limited insert for waitlist_leads (max 3 per phone)
CREATE POLICY "Rate-limited waitlist lead insert"
  ON public.waitlist_leads FOR INSERT
  WITH CHECK (
    (SELECT count(*) FROM public.waitlist_leads wl WHERE wl.phone = phone) < 3
  );

-- Rate-limited insert for academy_waitlist (max 3 per phone)
CREATE POLICY "Rate-limited academy waitlist insert"
  ON public.academy_waitlist FOR INSERT
  WITH CHECK (
    (SELECT count(*) FROM public.academy_waitlist aw WHERE aw.phone = phone) < 3
  );
