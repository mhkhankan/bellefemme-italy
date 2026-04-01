import { MessageCircle } from 'lucide-react';

export const WhatsAppSticky = () => {
  return (
    <a
      href="https://wa.me/393516605507?text=Ciao%20Mouna%2C%20vorrei%20prenotare%20una%20consulenza%20privata."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-3 group border border-primary/30 bg-background/90 backdrop-blur-sm px-4 py-3 hover:bg-primary hover:border-primary transition-all duration-500"
    >
      <MessageCircle className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
      <span className="text-[10px] tracking-[0.15em] uppercase text-primary group-hover:text-primary-foreground transition-colors hidden sm:inline">
        WhatsApp Consultation
      </span>
    </a>
  );
};
