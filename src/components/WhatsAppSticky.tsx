import { ArrowRight } from 'lucide-react';

export const WhatsAppSticky = () => {
  return (
    <a
      href="https://wa.me/393516605507?text=Ciao%20Mouna%2C%20vorrei%20prenotare%20una%20consulenza%20privata."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 group border border-primary/30 bg-background/90 backdrop-blur-sm px-4 py-3 min-h-[44px] hover:bg-primary hover:border-primary transition-all duration-500"
    >
      <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
      <span className="font-inter font-bold text-[9px] tracking-[0.15em] uppercase text-primary group-hover:text-primary-foreground transition-colors">
        Consulenza
      </span>
    </a>
  );
};
