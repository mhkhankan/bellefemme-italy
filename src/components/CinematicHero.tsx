import { motion } from 'framer-motion';
import sealImage from '@/assets/seal.png';

export const CinematicHero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative flex flex-col" style={{ height: '100svh' }}>
      {/* Video background — replace src when ready */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      />

      {/* Forest green gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, hsla(150,30%,7%,0.6), hsla(150,30%,7%,0.85))' }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-between py-16 md:py-20 px-6">
        {/* Top — Seal Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center gap-6"
        >
          <img
            src={sealImage}
            alt="Belle Femme Seal"
            className="w-24 h-24 md:w-36 md:h-36 object-contain"
          />
          <p className="text-[10px] tracking-[0.5em] uppercase text-primary/70">
            Belle Femme PMU Atelier & Academy
          </p>
        </motion.div>

        {/* Center — Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light text-foreground tracking-[3px] leading-[1.1]">
            The Art of<br />
            <span className="italic text-primary">Precision</span>
          </h1>
          <p className="text-sm text-foreground/50 max-w-sm mx-auto leading-relaxed">
            Where architectural science meets elite permanent makeup artistry.
          </p>
        </motion.div>

        {/* Bottom — Two CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          <button
            onClick={() => scrollTo('atelier')}
            className="flex-1 text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[44px] hover:bg-primary/90 transition-all duration-500"
          >
            Enter the Atelier
          </button>
          <button
            onClick={() => scrollTo('academy')}
            className="flex-1 text-[11px] tracking-[0.2em] uppercase border border-primary/40 text-primary px-8 py-4 min-h-[44px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            The Academy
          </button>
        </motion.div>
      </div>
    </section>
  );
};
