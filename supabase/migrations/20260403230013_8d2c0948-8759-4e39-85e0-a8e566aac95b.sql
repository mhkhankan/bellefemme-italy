-- Fix broken rate-limit policy on waitlist_leads
-- The subquery must reference the NEW row's phone via the target table name
DROP POLICY IF EXISTS "Rate-limited waitlist lead insert" ON public.waitlist_leads;
CREATE POLICY "Rate-limited waitlist lead insert"
ON public.waitlist_leads
FOR INSERT
TO public
WITH CHECK (
  (SELECT count(*) FROM public.waitlist_leads wl WHERE wl.phone = waitlist_leads.phone) < 3
);

-- Fix broken rate-limit policy on academy_waitlist
DROP POLICY IF EXISTS "Rate-limited academy waitlist insert" ON public.academy_waitlist;
CREATE POLICY "Rate-limited academy waitlist insert"
ON public.academy_waitlist
FOR INSERT
TO public
WITH CHECK (
  (SELECT count(*) FROM public.academy_waitlist aw WHERE aw.phone = academy_waitlist.phone) < 3
);