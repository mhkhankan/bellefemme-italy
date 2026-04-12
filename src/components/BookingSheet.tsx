import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const WHATSAPP_BASE = 'https://wa.me/393924487530?text=';

const CENTRES = [
  { name: 'Poliambulatorio Elianto', addr: 'Viale Luigi Borri 75 · Varese', city: 'Varese', forCourses: true },
  { name: 'Centro Benessere Mi Amo', addr: 'Via Marconi 11 · Gavirate', city: 'Gavirate', forCourses: false },
  { name: 'Jerago con Orago', addr: '', city: 'Jerago con Orago', forCourses: false },
  { name: 'Cocquio Trevisago', addr: '', city: 'Cocquio Trevisago', forCourses: false },
];

interface SpotData {
  location: string;
  spots_remaining: number;
}

interface BookingSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'treatment' | 'course' | 'hero' | 'location';
  itemName?: string;
  itemNameIT?: string;
}

export const BookingSheet = ({ open, onOpenChange, mode, itemName = '', itemNameIT = '' }: BookingSheetProps) => {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const [spots, setSpots] = useState<SpotData[]>([]);
  const [spotsLoaded, setSpotsLoaded] = useState(false);
  const [eliteModalOpen, setEliteModalOpen] = useState(false);
  const [eliteName, setEliteName] = useState('');
  const [elitePhone, setElitePhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setEliteModalOpen(false);
      setEliteName('');
      setElitePhone('');
      setSpotsLoaded(false);
      supabase
        .from('spots_availability')
        .select('location, spots_remaining')
        .then(({ data }) => {
          if (data) setSpots(data);
          setSpotsLoaded(true);
        })
        .then(undefined, () => setSpotsLoaded(true));
    }
  }, [open]);

  const getSpotLabel = (city: string) => {
    if (!spotsLoaded) return '';
    const s = spots.find(sp => sp.location === city);
    return s ? `${s.spots_remaining} posti` : 'Disponibilità su richiesta';
  };

  const openWhatsApp = (msg: string) => {
    window.open(`${WHATSAPP_BASE}${encodeURIComponent(msg)}`, '_blank');
    onOpenChange(false);
  };

  const handleCentreClick = (centre: typeof CENTRES[0]) => {
    const isNamed = !!centre.addr;
    if (mode === 'treatment') {
      const msg = isNamed
        ? `Salve, vorrei prenotare una consulenza per ${itemNameIT} presso ${centre.name} a ${centre.city}.`
        : `Salve, vorrei prenotare una consulenza per ${itemNameIT} a ${centre.city}.`;
      openWhatsApp(msg);
    } else if (mode === 'course') {
      openWhatsApp(`Salve, vorrei informazioni sul corso ${itemName} a Varese.`);
    } else {
      const msg = isNamed
        ? `Salve, vorrei prenotare una consulenza presso ${centre.name} a ${centre.city}.`
        : `Salve, vorrei prenotare una consulenza a ${centre.city}.`;
      openWhatsApp(msg);
    }
  };

  const handleMilanoClick = () => {
    setEliteModalOpen(true);
  };

  const handleEliteSubmit = async () => {
    if (!eliteName.trim() || !elitePhone.trim()) return;
    setSubmitting(true);
    try {
      const table = mode === 'course' ? 'academy_waitlist' : 'waitlist_leads';
      const payload = mode === 'course'
        ? { name: eliteName.trim(), phone: elitePhone.trim(), city: 'Milano', course: itemName }
        : { name: eliteName.trim(), phone: elitePhone.trim(), city: 'Milano', treatment: itemNameIT };
      await supabase.from(table).insert(payload as any);
      setSubmitted(true);
    } catch {
      const fallback = mode === 'course'
        ? `Salve, vorrei entrare in lista d'attesa corsi. Nome: ${eliteName.trim()} Telefono: ${elitePhone.trim()} Città: Milano Corso: ${itemName}`
        : `Salve, vorrei entrare in lista d'attesa. Nome: ${eliteName.trim()} Telefono: ${elitePhone.trim()} Città: Milano Trattamento: ${itemNameIT}`;
      openWhatsApp(fallback);
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const handlePrivateCourse = () => {
    openWhatsApp(`Salve, sono interessata a un corso privato 1 su 1 con Craft Master Mouna Chabbar: ${itemName}.`);
  };

  const drawerTitle = mode === 'course'
    ? 'Seleziona la sede del corso'
    : 'La tua Consulenza';

  // Submitted confirmation
  if (submitted) {
    const confirmContent = (
      <div className="py-8 px-4 text-center space-y-6">
        <p className="font-inter font-bold text-[11px] tracking-[0.2em] uppercase" style={{ color: '#D4AF37' }}>
          SEI NELLA NOSTRA LISTA PRIORITARIA
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,245,0.6)' }}>
          Il tuo profilo è ora in lista prioritaria. Ti contatteremo non appena si apre un nuovo calendario.
        </p>
        <button
          onClick={() => onOpenChange(false)}
          className="font-inter text-[10px] tracking-[0.15em] uppercase transition-colors min-h-[44px]"
          style={{ color: 'rgba(212,175,55,0.6)' }}
        >
          Chiudi
        </button>
      </div>
    );
    return isMobile ? (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent style={{ backgroundColor: '#000', border: 'none' }}>
          {confirmContent}
        </DrawerContent>
      </Drawer>
    ) : (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-sm" style={{ backgroundColor: '#000', border: '1px solid rgba(212,175,55,0.2)' }}>
          {confirmContent}
        </DialogContent>
      </Dialog>
    );
  }

  // Milano elite form
  if (eliteModalOpen) {
    const eliteContent = (
      <div className="space-y-6 py-4 px-4">
        <div className="text-center space-y-4">
          <p className="font-inter text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(212,175,55,0.6)' }}>
            ACCESSO RISERVATO — MILANO
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,245,0.6)' }}>
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
            className="w-full bg-transparent px-4 py-3 text-sm min-h-[48px] outline-none transition-colors"
            style={{ color: '#F5F5F5', border: '1px solid rgba(212,175,55,0.2)' }}
          />
          <input
            type="tel"
            value={elitePhone}
            onChange={(e) => setElitePhone(e.target.value)}
            placeholder="WhatsApp / Telefono"
            maxLength={20}
            className="w-full bg-transparent px-4 py-3 text-sm min-h-[48px] outline-none transition-colors"
            style={{ color: '#F5F5F5', border: '1px solid rgba(212,175,55,0.2)' }}
          />
          <button
            onClick={handleEliteSubmit}
            disabled={submitting || !eliteName.trim() || !elitePhone.trim() || !/^[+\d\s\-().]{6,20}$/.test(elitePhone.trim())}
            className="w-full font-inter font-bold text-[10px] tracking-[0.15em] uppercase px-4 py-4 min-h-[48px] transition-colors disabled:opacity-50"
            style={{ backgroundColor: '#D4AF37', color: '#000' }}
          >
            RICHIEDI ACCESSO PRIORITARIO →
          </button>
        </div>
        <button
          onClick={() => setEliteModalOpen(false)}
          className="w-full text-center text-[10px] tracking-[0.15em] uppercase transition-colors min-h-[44px]"
          style={{ color: 'rgba(245,245,245,0.5)' }}
        >
          ← Torna alla selezione
        </button>
      </div>
    );

    return isMobile ? (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent style={{ backgroundColor: '#000', border: 'none' }}>
          <DrawerHeader>
            <DrawerTitle className="font-cormorant text-2xl font-light tracking-[2px] text-center" style={{ color: '#F5F5F5' }}>
              Milano
            </DrawerTitle>
          </DrawerHeader>
          {eliteContent}
        </DrawerContent>
      </Drawer>
    ) : (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-sm" style={{ backgroundColor: '#000', border: '1px solid rgba(212,175,55,0.2)' }}>
          <DialogHeader>
            <DialogTitle className="font-cormorant text-2xl font-light tracking-[2px] text-center" style={{ color: '#F5F5F5' }}>
              Milano
            </DialogTitle>
          </DialogHeader>
          {eliteContent}
        </DialogContent>
      </Dialog>
    );
  }

  // Main location selector
  const locations = mode === 'course'
    ? CENTRES.filter(c => c.forCourses)
    : CENTRES;

  const content = (
    <div className="space-y-4 py-4 px-2">
      {mode === 'course' && (
        <p className="font-cormorant italic text-sm text-center px-4 mb-4" style={{ color: '#D4AF37' }}>
          La formazione Belle Femme si svolge attualmente presso centri selezionati a Varese.
        </p>
      )}

      <div className="flex flex-col gap-0">
        {locations.map((centre) => (
          <button
            key={centre.city}
            onClick={() => handleCentreClick(centre)}
            className="w-full text-left px-6 py-4 min-h-[48px] transition-all duration-300 flex items-center justify-between"
            style={{ borderBottom: '1px solid rgba(212,175,55,0.1)' }}
          >
            <div>
              {centre.addr ? (
                <>
                  <p className="font-inter font-bold text-[13px] uppercase tracking-[0.1em]" style={{ color: '#F5F5F5' }}>
                    {centre.name}
                  </p>
                  <p className="font-inter text-[11px] mt-1" style={{ color: '#D4AF37' }}>
                    {centre.addr}
                  </p>
                </>
              ) : (
                <p className="font-cormorant text-lg" style={{ color: 'rgba(245,245,245,0.7)' }}>
                  {centre.city}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-inter text-[10px] tracking-[0.1em] uppercase" style={{ color: 'rgba(212,175,55,0.6)' }}>
                {getSpotLabel(centre.city)}
              </span>
              <ChevronRight className="w-4 h-4" style={{ color: 'rgba(212,175,55,0.4)' }} />
            </div>
          </button>
        ))}

        {/* Milano row */}
        <button
          onClick={handleMilanoClick}
          className="w-full text-left px-6 py-4 min-h-[48px] transition-all duration-300 flex items-center justify-between"
          style={{ borderBottom: '1px solid rgba(212,175,55,0.1)' }}
        >
          <p className="font-cormorant text-lg" style={{ color: 'rgba(245,245,245,0.7)' }}>Milano</p>
          <span
            className="text-[9px] font-inter tracking-[0.15em] uppercase px-2 py-1"
            style={{ backgroundColor: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}
          >
            LISTA PRIORITARIA
          </span>
        </button>

        {mode === 'course' && (
          <button
            onClick={handlePrivateCourse}
            className="w-full text-left px-6 py-4 min-h-[48px] transition-all duration-300 flex items-center justify-between"
            style={{ border: '1px solid rgba(212,175,55,0.2)', marginTop: '8px' }}
          >
            <span className="font-inter text-[10px] tracking-[0.15em] uppercase" style={{ color: '#D4AF37' }}>
              Corso Privato con Mouna Chabbar →
            </span>
          </button>
        )}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent style={{ backgroundColor: '#000', border: 'none' }}>
          <DrawerHeader>
            <DrawerTitle className="font-cormorant text-2xl font-light tracking-[2px] text-center" style={{ color: '#F5F5F5' }}>
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
      <DialogContent className="max-w-sm" style={{ backgroundColor: '#000', border: '1px solid rgba(212,175,55,0.2)' }}>
        <DialogHeader>
          <DialogTitle className="font-cormorant text-2xl font-light tracking-[2px] text-center" style={{ color: '#F5F5F5' }}>
            {drawerTitle}
          </DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};
