import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export const WhatsAppSticky = () => {
  const { t, language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= window.innerHeight * 1.2);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const msg = language === 'it'
    ? 'Ciao Mouna, vorrei prenotare una consulenza privata.'
    : 'Hello Mouna, I would like to book a private consultation.';

  if (!visible) return null;

  return (
    <a
      href={`https://wa.me/393516605507?text=${encodeURIComponent(msg)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 z-50 flex items-center gap-2 group border border-primary/30 bg-background/90 backdrop-blur-sm px-4 py-3 min-h-[44px] hover:bg-primary hover:border-primary transition-all duration-500"
      style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px) + 1rem)' }}
    >
      <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
      <span className="font-inter font-bold text-[9px] tracking-[0.15em] uppercase text-primary group-hover:text-primary-foreground transition-colors">
        {t.contact.whatsapp}
      </span>
    </a>
  );
};
