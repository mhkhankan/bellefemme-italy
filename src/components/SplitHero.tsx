import { motion } from 'framer-motion';

const WHATSAPP_BASE = 'https://wa.me/393516605507?text=';

export const SplitHero = () => {
  return (
    <section id="top" className="relative">
      <div className="flex flex-col md:grid md:grid-cols-2" style={{ minHeight: '100svh' }}>
        {/* Left — Atelier */}
        <div id="atelier" className="relative flex flex-col items-center justify-center px-8 md:px-16 border-b md:border-b-0 md:border-r border-primary/10" style={{ minHeight: '100svh' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center space-y-8 max-w-sm"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">The Atelier</p>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] tracking-[2px]">
              Permanent<br />
              <span className="italic text-primary">Makeup</span><br />
              Artistry
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
              Where architectural precision meets the art of enhancing natural beauty. Each stroke, a deliberate act of design.
            </p>
            <a
              href={`${WHATSAPP_BASE}${encodeURIComponent("Ciao Mouna, vorrei prenotare un trattamento presso l'Atelier Belle Femme.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] tracking-[0.2em] uppercase border border-primary text-primary px-8 py-3.5 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Book Treatment
            </a>
          </motion.div>
        </div>

        {/* Right — Academy */}
        <div id="academy" className="relative flex flex-col items-center justify-center px-8 md:px-16" style={{ minHeight: '100svh' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center space-y-8 max-w-sm"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">The Academy</p>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] tracking-[2px]">
              Master<br />
              <span className="italic text-primary">Trainer</span><br />
              Program
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
              Elevate your craft under the guidance of Master Trainer Mouna Chabbar. Internationally certified courses for aspiring artists.
            </p>
            <a
              href={`${WHATSAPP_BASE}${encodeURIComponent('Ciao Mouna, vorrei richiedere il prospetto dei corsi Masterclass Belle Femme Academy.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] tracking-[0.2em] uppercase border border-primary text-primary px-8 py-3.5 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Request Masterclass Prospectus
            </a>
          </motion.div>
        </div>

        {/* Center Seal — responsive sizing */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-primary/30 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          >
            <span className="font-cormorant text-xl md:text-3xl font-semibold text-primary tracking-wider">BF</span>
          </motion.div>
        </div>
      </div>

      {/* Thin gold divider at bottom */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};
