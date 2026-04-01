import { motion } from 'framer-motion';
import sealImage from '@/assets/seal.png';

export const StickyHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10"
    >
      <div className="container mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={sealImage} alt="Belle Femme" className="w-8 h-8 object-contain" />
          <span className="font-cormorant text-sm tracking-[0.3em] uppercase text-primary hidden sm:inline">
            Belle Femme
          </span>
        </a>
        <nav className="hidden md:flex gap-10">
          {['Atelier', 'Academy', 'Heritage', 'Concierge'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 hover:text-primary transition-colors duration-500"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/393516605507?text=Ciao%20Mouna%2C%20vorrei%20prenotare%20una%20consulenza%20privata."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/30 px-4 py-2 min-h-[44px] flex items-center hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Direct Inquiry
        </a>
      </div>
    </motion.header>
  );
};
