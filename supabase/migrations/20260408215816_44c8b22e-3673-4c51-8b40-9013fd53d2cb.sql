ALTER TABLE public.waitlist_leads
  ADD CONSTRAINT waitlist_leads_name_length CHECK (char_length(name) <= 100),
  ADD CONSTRAINT waitlist_leads_phone_length CHECK (char_length(phone) <= 20),
  ADD CONSTRAINT waitlist_leads_city_length CHECK (char_length(city) <= 100),
  ADD CONSTRAINT waitlist_leads_treatment_length CHECK (char_length(treatment) <= 200);