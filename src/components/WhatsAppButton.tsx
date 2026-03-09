import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const WhatsAppButton = () => {
  const { t, isRTL } = useLanguage();
  const whatsappUrl = 'https://wa.me/393516605507';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${isRTL ? 'left-6' : 'right-6'} bottom-6 z-50 
        btn-luxury glass-card
        p-4 
        flex items-center gap-3 group
        animate-glow-pulse`}
      aria-label={t.contact.whatsapp}
    >
      <MessageCircle className="w-5 h-5 text-accent" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-xs tracking-[0.15em] uppercase text-foreground/70 whitespace-nowrap">
        {t.contact.whatsapp}
      </span>
    </a>
  );
};
