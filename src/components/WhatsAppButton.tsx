import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const WhatsAppButton = () => {
  const { t, isRTL } = useLanguage();
  const phoneNumber = '+393516605507';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${isRTL ? 'left-6' : 'right-6'} bottom-6 z-50 
        bg-primary hover:bg-primary/90 text-primary-foreground 
        rounded-full p-4 shadow-lg hover:shadow-xl 
        transition-all duration-300 hover:scale-110 
        flex items-center gap-3 group`}
      aria-label={t.contact.whatsapp}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-sm font-medium whitespace-nowrap">
        {t.contact.whatsapp}
      </span>
    </a>
  );
};
