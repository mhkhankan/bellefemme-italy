import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const WHATSAPP_BASE = 'https://wa.me/393924487530?text=';

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
  mode?: 'treatment' | 'course';
}

export const LocationSheet = ({ open, onOpenChange, treatmentName, mode = 'treatment' }: LocationSheetProps) => {
  const isMobile = useIsMobile();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [spots, setSpots] = useState<SpotData[]>([]);
  const [loading, setLoading] = useState(true);
  const [eliteModalCity, setEliteModalCity] = useState('');
  const [eliteName, setEliteName] = useState('');
  const [elitePhone, setElitePhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setEliteModalCity('');
      setLoading(true);
      Promise.resolve(
        supabase
          .from('spots_availability')
          .select('location, spots_remaining')
      ).then(({ data, error }) => {
        if (data && !error) setSpots(data);
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    }
  }, [open]);

  const handleSelect = (location: string) => {
    const treatmentNameMap: Record<string, string> = {
      'RAW STROKE': 'Microblading Iperrealismo',
      'BROW ARCHITECTURE': 'Architettura Sopracciglia',
      'SHADOW LAYER': 'Ombre Powder Brows',
      'PIGMENT RESTAURO': 'Correzione PMU',
      'NUDE-LIP INFUSION': 'Labbra Permanenti',
      'LASH-LINE ENGINEERING': 'Eyeliner Permanente',
      'GAZE SCULPTING': 'Laminazione Ciglia',
      'LASH SCULPTING': 'Extension Ciglia',
    };
    const clientName = treatmentNameMap[treatmentName] || treatmentName;
    const msg = `Buongiorno Mouna, vorrei prenotare una consulenza per ${clientName} presso l'Atelier di ${location}.`;
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
      const msg = encodeURIComponent(
        `Buongiorno Mouna, vorrei entrare in lista d'attesa.\n\nNome: ${eliteName.trim()}\nTelefono: ${elitePhone.trim()}\nCittà: ${eliteModalCity}\nTrattamento: ${treatmentName}`
      );
      window.open(`https://wa.me/393924487530?text=${msg}`, '_blank');
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const getSpots = (loc: string) => spots.find((s) => s.location === loc)?.spots_remaining;

  const drawerTitle = mode === 'course'
    ? (language === 'it' ? 'Seleziona la sede del corso' : 'Select course location')
    : (language === 'it' ? 'La tua Consulenza' : 'Your Consultation');

  const consultationNote = mode === 'course'
    ? (language === 'it' ? 'Ogni corso è preceduto da una consulenza personalizzata con Mouna Chabbar.' : 'Every course begins with a personalised consultation with Mouna Chabbar.')
    : (language === 'it' ? 'Ogni trattamento è preceduto da una consulenza personalizzata — in sede o via WhatsApp.' : 'Every treatment begins with a personalised consultation — in person or via WhatsApp.');

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
            disabled={submitting || !eliteName.trim() || !elitePhone.trim() || !/^[+\d\s\-().]{6,20}$/.test(elitePhone.trim())}
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

  if (submitted) {
    const confirmContent = (
      <div className="py-8 px-4 text-center space-y-6">
        <p className="font-inter font-bold text-[11px] tracking-[0.2em] uppercase text-primary">
          SEI NELLA NOSTRA LISTA PRIORITARIA
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
          Il tuo profilo è ora in lista prioritaria. Ti contatteremo non appena si apre un nuovo calendario.
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

  const content = (
    <div className="space-y-4 py-4 px-2">
      <p className="font-cormorant italic text-sm text-primary/70 text-center px-4 mb-4">
        {consultationNote}
      </p>
      <p className="text-center text-[10px] tracking-[0.15em] uppercase text-primary/60">
        {language === 'it' ? 'Mouna risponde entro 24 ore' : 'Mouna replies within 24 hours'}
      </p>
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
              className={`w-full text-left font-cormorant text-lg md:text-xl hover:text-primary px-6 py-4 min-h-[48px] border-b border-primary/10 last:border-b-0 hover:bg-primary/5 transition-all duration-300 flex items-center justify-between ${loc === 'Varese' ? 'font-medium text-foreground' : 'text-foreground/70'}`}
            >
              <span>{loc}</span>
              <span className="text-[10px] font-inter tracking-[0.1em] uppercase text-primary/60">
                {loading ? (
                  <span className="shimmer-venetian inline-block w-20 h-3 rounded" />
                ) : remaining !== undefined ? (
                  `${remaining} ${t.treatments.spotsRemaining}`
                ) : null}
              </span>
            </button>
          );
        })}

        {eliteLocations.map((loc) => (
          <button
            key={loc}
            onClick={() => setEliteModalCity(loc)}
            className="w-full text-left font-cormorant text-lg md:text-xl text-foreground/70 hover:text-primary px-6 py-4 min-h-[48px] border-b border-primary/10 last:border-b-0 hover:bg-primary/5 transition-all duration-300 flex items-center justify-between"
          >
            <span>{loc}</span>
            <span
              className="text-[9px] font-inter tracking-[0.15em] uppercase px-2 py-1"
              style={{
                backgroundColor: 'hsl(43 76% 52% / 0.15)',
                border: '1px solid hsl(43 76% 52% / 0.4)',
                color: 'hsl(43 76% 52%)',
              }}
            >
              LISTA PRIORITARIA
            </span>
          </button>
        ))}

        {mode === 'course' && (
          <button
            onClick={() => {
              const msg = encodeURIComponent(`Buongiorno Mouna, sono interessata a un corso privato 1-to-1: ${treatmentName}. Vorrei ricevere informazioni.`);
              window.open(`${WHATSAPP_BASE}${msg}`, '_blank');
              onOpenChange(false);
            }}
            className="w-full text-left font-cormorant text-lg md:text-xl text-foreground/70 hover:text-primary px-6 py-4 min-h-[48px] border-b border-primary/10 last:border-b-0 hover:bg-primary/5 transition-all duration-300 flex items-center justify-between"
          >
            <span>{language === 'it' ? 'Corso Privato' : 'Private Course'}</span>
            <span
              className="text-[9px] font-inter tracking-[0.15em] uppercase px-2 py-1"
              style={{
                backgroundColor: 'hsl(43 76% 52% / 0.15)',
                border: '1px solid hsl(43 76% 52% / 0.4)',
                color: 'hsl(43 76% 52%)',
              }}
            >
              {language === 'it' ? '1 su 1 con Mouna' : '1 to 1 with Mouna'}
            </span>
          </button>
        )}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="bg-card border-primary/20">
          <DrawerHeader>
            <DrawerTitle className="font-cormorant text-2xl font-light text-foreground tracking-[2px] text-center">
              {drawerTitle}
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
            {drawerTitle}
          </DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};
