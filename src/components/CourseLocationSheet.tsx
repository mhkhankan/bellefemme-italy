import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const WHATSAPP_BASE = 'https://wa.me/393924487530?text=';
const ACTIVE_LOCATIONS = ['Varese'];
const ELITE_LOCATIONS = ['Milano', 'Roma'];

interface CourseLocationSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseName: string;
}

export const CourseLocationSheet = ({ open, onOpenChange, courseName }: CourseLocationSheetProps) => {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const { toast } = useToast();

  const [eliteCity, setEliteCity] = useState('');
  const [eliteName, setEliteName] = useState('');
  const [elitePhone, setElitePhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const reset = () => {
    setEliteCity('');
    setEliteName('');
    setElitePhone('');
    setSubmitting(false);
    setSubmitted(false);
  };

  const handleClose = (val: boolean) => {
    if (!val) reset();
    onOpenChange(val);
  };

  const handleActiveSelect = (location: string) => {
    const msg = language === 'it'
      ? `Buongiorno, vorrei informazioni sul corso ${courseName} presso la sede di ${location}.`
      : `Hello, I would like information about the course ${courseName} at the ${location} location.`;
    window.open(`${WHATSAPP_BASE}${encodeURIComponent(msg)}`, '_blank');
    handleClose(false);
  };

  const handlePrivateCourse = () => {
    const msg = language === 'it'
      ? `Buongiorno, sono interessata a un corso privato 1 su 1 con la Craft Master: ${courseName}. Vorrei ricevere informazioni.`
      : `Hello, I am interested in a private 1-to-1 course with the Craft Master: ${courseName}. I would like more information.`;
    window.open(`${WHATSAPP_BASE}${encodeURIComponent(msg)}`, '_blank');
    handleClose(false);
  };

  const handleEliteSubmit = async () => {
    if (!eliteName.trim() || !elitePhone.trim() || !eliteCity) return;
    setSubmitting(true);
    try {
      await supabase.from('academy_waitlist').insert({
        name: eliteName.trim(),
        phone: elitePhone.trim(),
        city: eliteCity,
        course: courseName,
      } as any);
      setSubmitted(true);
    } catch {
      const msg = encodeURIComponent(
        `Buongiorno, vorrei entrare in lista d'attesa corsi.\n\nNome: ${eliteName.trim()}\nTelefono: ${elitePhone.trim()}\nCittà: ${eliteCity}\nCorso: ${courseName}`
      );
      window.open(`https://wa.me/393924487530?text=${msg}`, '_blank');
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const drawerTitle = language === 'it' ? 'Seleziona la sede del corso' : 'Select course location';

  // Confirmation screen
  if (submitted) {
    const confirmContent = (
      <div className="px-6 py-12 text-center space-y-6">
        <p className="font-inter font-bold text-[11px] tracking-[0.2em] uppercase text-primary">
          {language === 'it' ? 'RICHIESTA PRESA IN CARICO' : 'REQUEST RECEIVED'}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {language === 'it'
            ? "Il tuo profilo è ora in lista d'attesa prioritaria. Sarai ricontattata non appena si libererà uno slot."
            : 'Your profile is now on the priority waitlist. You will be contacted as soon as a slot becomes available.'}
        </p>
        <button
          onClick={() => handleClose(false)}
          className="font-inter text-[10px] tracking-[0.15em] uppercase text-primary/60 hover:text-primary transition-colors min-h-[44px]"
        >
          {language === 'it' ? 'Chiudi' : 'Close'}
        </button>
      </div>
    );
    if (isMobile) {
      return (
        <Drawer open={open} onOpenChange={handleClose}>
          <DrawerContent>{confirmContent}</DrawerContent>
        </Drawer>
      );
    }
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent>{confirmContent}</DialogContent>
      </Dialog>
    );
  }

  // Elite waitlist modal
  if (eliteCity) {
    const eliteContent = (
      <div className="px-6 py-8 space-y-6">
        <div className="text-center space-y-3">
          <p className="font-inter font-bold text-[11px] tracking-[0.2em] uppercase text-primary">
            ACCESSO RISERVATO — {eliteCity.toUpperCase()}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {language === 'it'
              ? "Unisciti alla nostra Lista Prioritaria per ricevere un invito esclusivo alla prossima apertura del calendario corsi."
              : 'Join our Priority List to receive an exclusive invitation when the course calendar opens.'}
          </p>
        </div>
        <div className="space-y-3">
          <input
            type="text"
            value={eliteName}
            onChange={(e) => setEliteName(e.target.value)}
            placeholder={language === 'it' ? 'Nome e Cognome' : 'Full Name'}
            maxLength={100}
            className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground min-h-[48px] focus:border-primary/50 outline-none transition-colors"
          />
          <input
            type="tel"
            value={elitePhone}
            onChange={(e) => setElitePhone(e.target.value)}
            placeholder={language === 'it' ? 'WhatsApp / Telefono' : 'WhatsApp / Phone'}
            maxLength={20}
            className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground min-h-[48px] focus:border-primary/50 outline-none transition-colors"
          />
          <button
            onClick={handleEliteSubmit}
            disabled={submitting || !eliteName.trim() || !elitePhone.trim()}
            className="w-full font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {language === 'it' ? 'RICHIEDI ACCESSO PRIORITARIO' : 'REQUEST PRIORITY ACCESS'}
          </button>
        </div>
        <button
          onClick={() => setEliteCity('')}
          className="w-full text-center text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors min-h-[44px]"
        >
          {language === 'it' ? '\u2190 Torna alla selezione' : '\u2190 Back to selection'}
        </button>
      </div>
    );
    if (isMobile) {
      return (
        <Drawer open={open} onOpenChange={handleClose}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="font-cormorant text-xl tracking-[2px] text-center">
                {eliteCity}
              </DrawerTitle>
            </DrawerHeader>
            {eliteContent}
          </DrawerContent>
        </Drawer>
      );
    }
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-cormorant text-xl tracking-[2px] text-center">
              {eliteCity}
            </DialogTitle>
          </DialogHeader>
          {eliteContent}
        </DialogContent>
      </Dialog>
    );
  }

  // Main selector
  const content = (
    <div className="px-6 py-8 space-y-6">
      <p className="font-cormorant italic text-sm text-primary/70 text-center">
        {language === 'it' ? 'Dove desideri seguire il corso?' : 'Where would you like to attend the course?'}
      </p>
      <p className="font-cormorant italic text-sm text-primary/70 text-center px-4 mb-4">
        {language === 'it'
           ? 'Ogni corso è preceduto da una consulenza personalizzata con Craft Master Mouna Chabbar.'
          : 'Every course begins with a personalised consultation with Craft Master Mouna Chabbar.'}
      </p>
      <div className="divide-y divide-primary/10">
        {ACTIVE_LOCATIONS.map((loc) => (
          <button
            key={loc}
            onClick={() => handleActiveSelect(loc)}
            className="w-full text-left font-cormorant text-lg md:text-xl text-foreground/70 hover:text-primary px-6 py-4 min-h-[48px] hover:bg-primary/5 transition-all duration-300 flex items-center justify-between"
          >
            <span>{loc}</span>
          </button>
        ))}
        {ELITE_LOCATIONS.map((loc) => (
          <button
            key={loc}
            onClick={() => setEliteCity(loc)}
            className="w-full text-left font-cormorant text-lg md:text-xl text-foreground/70 hover:text-primary px-6 py-4 min-h-[48px] hover:bg-primary/5 transition-all duration-300 flex items-center justify-between"
          >
            <span>{loc}</span>
            <span className="text-[9px] font-inter tracking-[0.15em] uppercase px-2 py-1" style={{ backgroundColor: 'hsl(43 76% 52% / 0.15)', border: '1px solid hsl(43 76% 52% / 0.4)', color: 'hsl(43 76% 52%)' }}>
              LISTA PRIORITARIA
            </span>
          </button>
        ))}
        <button
          onClick={handlePrivateCourse}
          className="w-full text-left font-cormorant text-lg md:text-xl text-foreground/70 hover:text-primary px-6 py-4 min-h-[48px] hover:bg-primary/5 transition-all duration-300 flex items-center justify-between"
        >
          <span>{language === 'it' ? 'Corso Privato' : 'Private Course'}</span>
          <span className="text-[9px] font-inter tracking-[0.15em] uppercase px-2 py-1" style={{ backgroundColor: 'hsl(43 76% 52% / 0.15)', border: '1px solid hsl(43 76% 52% / 0.4)', color: 'hsl(43 76% 52%)' }}>
            {language === 'it' ? '1 su 1 con la Craft Master' : '1 to 1 with the Craft Master'}
          </span>
        </button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={handleClose}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="font-cormorant text-xl tracking-[2px] text-center">
              {drawerTitle}
            </DrawerTitle>
          </DrawerHeader>
          {content}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-cormorant text-xl tracking-[2px] text-center">
            {drawerTitle}
          </DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};
