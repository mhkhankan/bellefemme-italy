import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useScarcity } from '@/hooks/useScarcity';

const WHATSAPP_BASE = 'https://wa.me/393516605507?text=';

interface SpotData {
  location: string;
  spots_remaining: number;
}

const activeLocations = ['Varese', 'Jerago con Orago', 'Gavirate', 'Cocquio Trevisago'];
const eliteLocations = ['Milano', 'Roma'];

interface LocationSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  treatmentName: string;
}

export const LocationSheet = ({ open, onOpenChange, treatmentName }: LocationSheetProps) => {
  const isMobile = useIsMobile();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [spots, setSpots] = useState<SpotData[]>([]);
  const [eliteModalCity, setEliteModalCity] = useState('');
  const [eliteName, setEliteName] = useState('');
  const [elitePhone, setElitePhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const scarcitySpots = useScarcity();

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setEliteModalCity('');
      supabase
        .from('spots_availability')
        .select('location, spots_remaining')
        .then(({ data }) => {
          if (data) setSpots(data);
        });
    }
  }, [open]);

  const handleSelect = (location: string) => {
    const msg = `Buongiorno Mouna, vorrei verificare la disponibilità per ${treatmentName} presso l'Atelier di ${location}.`;
    window.open(`${WHATSAPP_BASE}${encodeURIComponent(msg)}`, '_blank');
    onOpenChange(false);
  };

  const handleEliteSubmit = async () => {
    if (!eliteName.trim() || !elitePhone.trim() || !eliteModalCity) return;
    setSubmitting(true);
    try {
      await supabase.from('waitlist_leads').insert({
        name: eliteName.trim(),
        phone: elitePhone.trim(),
        city: eliteModalCity,
        treatment: treatmentName,
      });
      setSubmitted(true);
    } catch {
      // silently fail
    }
    setSubmitting(false);
  };

  const getSpots = (loc: string) => spots.find((s) => s.location === loc)?.spots_remaining ?? scarcitySpots;

  // Elite Atelier "ACCESSO RISERVATO" modal
  if (eliteModalCity && !submitted) {
    const modalContent = (
      <div className="space-y-6 py-4 px-2">
        <div className="text-center space-y-4">
          <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-primary/60">
            ACCESSO RISERVATO — {eliteModalCity}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Unisciti alla nostra Lista Prioritaria per ricevere un invito esclusivo alla prossima apertura del calendario.
          </p>
        </div>
        <div className="space-y-3">
          <input
            type="text"
            value={eliteName}
            onChange={(e) => setEliteName(e.target.value)}
            placeholder="Nome e Cognome"
            maxLength={100}
            className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground min-h-[48px] focus:border-primary/50 outline-none transition-colors"
          />
          <input
            type="tel"
            value={elitePhone}
            onChange={(e) => setElitePhone(e.target.value)}
            placeholder="WhatsApp / Telefono"
            maxLength={20}
            className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground min-h-[48px] focus:border-primary/50 outline-none transition-colors"
          />
          <button
            onClick={handleEliteSubmit}
            disabled={submitting || !eliteName.trim() || !elitePhone.trim()}
            className="w-full font-inter font-bold text-[10px] tracking-[0.15em] uppercase bg-primary text-primary-foreground px-4 py-4 min-h-[48px] hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            RICHIEDI ACCESSO PRIORITARIO
          </button>
        </div>
        <button
          onClick={() => setEliteModalCity('')}
          className="w-full text-center text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors min-h-[44px]"
        >
          ← Torna alla selezione
        </button>
      </div>
    );

    if (isMobile) {
      return (
        <Drawer open={open} onOpenChange={onOpenChange}>
          <DrawerContent className="bg-card border-primary/20">
            <DrawerHeader>
              <DrawerTitle className="font-cormorant text-2xl font-light text-foreground tracking-[2px] text-center">
                {eliteModalCity}
              </DrawerTitle>
            </DrawerHeader>
            {modalContent}
          </DrawerContent>
        </Drawer>
      );
    }

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-card border-primary/20 max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-cormorant text-2xl font-light text-foreground tracking-[2px] text-center">
              {eliteModalCity}
            </DialogTitle>
          </DialogHeader>
          {modalContent}
        </DialogContent>
      </Dialog>
    );
  }

  // Confirmation after elite submit
  if (submitted) {
    const confirmContent = (
      <div className="py-8 px-4 text-center space-y-6">
        <p className="font-inter font-bold text-[11px] tracking-[0.2em] uppercase text-primary">
          RICHIESTA PRESA IN CARICO
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
          Il tuo profilo è ora in lista d'attesa prioritaria. Sarai ricontattata non appena si libererà uno slot o verranno pubblicate le nuove date.
        </p>
        <button
          onClick={() => onOpenChange(false)}
          className="font-inter text-[10px] tracking-[0.15em] uppercase text-primary/60 hover:text-primary transition-colors min-h-[44px]"
        >
          Chiudi
        </button>
      </div>
    );

    if (isMobile) {
      return (
        <Drawer open={open} onOpenChange={onOpenChange}>
          <DrawerContent className="bg-card border-primary/20">
            {confirmContent}
          </DrawerContent>
        </Drawer>
      );
    }
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-card border-primary/20 max-w-sm">
          {confirmContent}
        </DialogContent>
      </Dialog>
    );
  }

  // Main location selector
  const content = (
    <div className="space-y-4 py-4 px-2">
      <p className="text-center text-sm text-muted-foreground">
        {t.concierge.whereDesire}
      </p>
      <div className="flex flex-col gap-1">
        {/* Active Hubs */}
        {activeLocations.map((loc) => {
          const remaining = getSpots(loc);
          return (
            <button
              key={loc}
              onClick={() => handleSelect(loc)}
              className="w-full text-left font-cormorant text-lg md:text-xl text-foreground/70 hover:text-primary px-6 py-4 min-h-[48px] border-b border-primary/10 last:border-b-0 hover:bg-primary/5 transition-all duration-300 flex items-center justify-between"
            >
              <span>{loc}</span>
              <span className="text-[10px] font-inter tracking-[0.1em] uppercase text-primary/60">
                {remaining} {t.treatments.spotsRemaining}
              </span>
            </button>
          );
        })}

        {/* Elite Ateliers — Milano & Roma */}
        {eliteLocations.map((loc) => (
          <button
            key={loc}
            onClick={() => setEliteModalCity(loc)}
            className="w-full text-left font-cormorant text-lg md:text-xl text-foreground/30 hover:text-foreground/50 px-6 py-4 min-h-[48px] border-b border-primary/10 last:border-b-0 transition-all duration-300 flex items-center justify-between"
          >
            <span>{loc}</span>
            <span
              className="text-[10px] font-inter tracking-[0.15em] uppercase"
              style={{ color: 'hsl(43, 76%, 52%)' }}
            >
              LISTA PRIORITARIA
            </span>
          </button>
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
