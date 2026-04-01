import { motion } from 'framer-motion';

export const StickyHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10"
    >
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <a href="#top" className="font-cormorant text-sm tracking-[0.3em] uppercase text-primary">
          Belle Femme
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
          className="text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/30 px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Book Now
        </a>
      </div>
    </motion.header>
  );
};
