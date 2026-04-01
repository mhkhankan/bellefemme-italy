import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const WHATSAPP_BASE = 'https://wa.me/393516605507?text=';

interface SpotData {
  location: string;
  spots_remaining: number;
}

const activeLocations = ['Varese', 'Jerago con Orago', 'Gavirate', 'Cocquio Trevisago'];
const phantomLocations = ['Milano', 'Roma'];

interface LocationSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  treatmentName: string;
}

export const LocationSheet = ({ open, onOpenChange, treatmentName }: LocationSheetProps) => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [spots, setSpots] = useState<SpotData[]>([]);
  const [phantomPhone, setPhantomPhone] = useState('');
  const [phantomCity, setPhantomCity] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      supabase
        .from('spots_availability')
        .select('location, spots_remaining')
        .then(({ data }) => {
          if (data) setSpots(data);
        });
    }
  }, [open]);

  const handleSelect = (location: string) => {
    const msg = `Hi Mouna, I want to discuss ${treatmentName} in ${location}.`;
    window.open(`${WHATSAPP_BASE}${encodeURIComponent(msg)}`, '_blank');
    onOpenChange(false);
  };

  const handlePhantomSubmit = async () => {
    if (!phantomPhone.trim() || !phantomCity) return;
    setSubmitting(true);
    try {
      await supabase.from('waitlist_leads').insert({
        phone: phantomPhone.trim(),
        city: phantomCity,
        treatment: treatmentName,
      });
      toast({ title: t.concierge.waitlistSuccess });
      setPhantomPhone('');
      setPhantomCity('');
    } catch {
      // silently fail
    }
    setSubmitting(false);
  };

  const getSpots = (loc: string) => spots.find((s) => s.location === loc)?.spots_remaining ?? 4;

  const content = (
    <div className="space-y-4 py-4 px-2">
      <p className="text-center text-sm text-muted-foreground">
        {t.concierge.whereDesire}
      </p>
      <div className="flex flex-col gap-1">
        {activeLocations.map((loc) => {
          const remaining = getSpots(loc);
          return (
            <button
              key={loc}
              onClick={() => handleSelect(loc)}
              className="w-full text-left font-cormorant text-lg md:text-xl text-foreground/70 hover:text-primary px-6 py-4 min-h-[44px] border-b border-primary/10 last:border-b-0 hover:bg-primary/5 transition-all duration-300 flex items-center justify-between"
            >
              <span>{loc}</span>
              <span className="text-[10px] font-inter tracking-[0.1em] uppercase text-primary/60">
                {remaining} {t.treatments.spotsRemaining}
              </span>
            </button>
          );
        })}

        {/* Phantom demand — Milano & Roma */}
        {phantomLocations.map((loc) => (
          <div key={loc} className="border-b border-primary/10 last:border-b-0">
            <div className="w-full text-left font-cormorant text-lg md:text-xl text-foreground/30 px-6 py-4 min-h-[44px] flex items-center justify-between">
              <span>{loc}</span>
              <span className="text-[10px] font-inter tracking-[0.1em] uppercase text-destructive/60">
                {t.treatments.soldOut} · {t.concierge.phantomLabel}
              </span>
            </div>
            {!phantomCity || phantomCity === loc ? (
              <div className="px-6 pb-4">
                <button
                  onClick={() => setPhantomCity(loc)}
                  className={`text-[10px] tracking-[0.15em] uppercase text-primary/50 hover:text-primary transition-colors ${phantomCity === loc ? 'hidden' : ''}`}
                >
                  → {t.concierge.joinWaitlist}
                </button>
                {phantomCity === loc && (
                  <div className="flex gap-2 mt-2">
                    <input
                      type="tel"
                      value={phantomPhone}
                      onChange={(e) => setPhantomPhone(e.target.value)}
                      placeholder={t.concierge.phonePlaceholder}
                      className="flex-1 bg-transparent border border-primary/20 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground min-h-[44px]"
                    />
                    <button
                      onClick={handlePhantomSubmit}
                      disabled={submitting || !phantomPhone.trim()}
                      className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase bg-primary text-primary-foreground px-4 py-2 min-h-[44px] hover:bg-primary/90 transition-colors disabled:opacity-50"
                    >
                      {t.concierge.joinWaitlist}
                    </button>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="bg-card border-primary/20">
          <DrawerHeader>
            <DrawerTitle className="font-cormorant text-2xl font-light text-foreground tracking-[2px] text-center">
              {t.concierge.selectAtelier}
            </DrawerTitle>
          </DrawerHeader>
          {content}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-primary/20 max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-cormorant text-2xl font-light text-foreground tracking-[2px] text-center">
            {t.concierge.selectAtelier}
          </DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};
