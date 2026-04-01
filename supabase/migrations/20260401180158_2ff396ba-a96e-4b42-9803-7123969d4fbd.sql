
-- Spots availability for scarcity engine
CREATE TABLE public.spots_availability (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  location TEXT NOT NULL UNIQUE,
  spots_remaining INTEGER NOT NULL DEFAULT 4,
  last_reset TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_decrement TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.spots_availability ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view spot availability"
  ON public.spots_availability FOR SELECT
  USING (true);

-- Seed initial locations
INSERT INTO public.spots_availability (location, spots_remaining) VALUES
  ('Varese', 4),
  ('Jerago con Orago', 4),
  ('Gavirate', 4),
  ('Cocquio Trevisago', 4),
  ('Milano', 0),
  ('Roma', 0);

-- Waitlist leads for Milano/Roma expansion
CREATE TABLE public.waitlist_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  treatment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.waitlist_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit waitlist lead"
  ON public.waitlist_leads FOR INSERT
  WITH CHECK (true);

-- Academy elite waitlist
CREATE TABLE public.academy_waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.academy_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit academy waitlist"
  ON public.academy_waitlist FOR INSERT
  WITH CHECK (true);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_spots_updated_at
  BEFORE UPDATE ON public.spots_availability
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
