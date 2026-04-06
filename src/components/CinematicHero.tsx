import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export const CinematicHero = () => {
  const [imgError, setImgError] = useState(false);
  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowChevron(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const waMsg = encodeURIComponent('Buongiorno Mouna, vorrei iniziare con una consulenza privata.');

  return (
    <section id="top" className="relative overflow-hidden" style={{ height: '100svh', backgroundColor: 'hsl(0 0% 4%)' }}>
      {/* Background image */}
      {!imgError && (
        <img
          src="/branding/hero-mouna-architecture.jpg"
          alt="Belle Femme Atelier — Master Trainer Mouna Chabbar"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
          fetchPriority="high"
          onError={() => setImgError(true)}
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, hsla(0,0%,0%,0.15) 0%, hsla(0,0%,0%,0.4) 50%, hsla(0,0%,0%,0.85) 100%)',
        }}
      />

      {/* Phi-grid overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ delay: 1.5, duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/branding/phi-grid-blueprint.svg)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Content block — safe area aware */}
      <div
        className="absolute left-0 right-0 px-8 md:px-16 text-center md:text-left"
        style={{ bottom: 'max(12%, env(safe-area-inset-bottom, 0px) + 5rem)' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-inter text-[10px] tracking-[0.4em] uppercase"
          style={{ color: 'hsl(43 76% 52% / 0.7)' }}
        >
          BELLE FEMME ATELIER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-cormorant text-4xl md:text-6xl font-light text-white tracking-[3px] mt-3"
        >
          L'Architettura del Volto
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-cormorant italic text-lg md:text-xl mt-2"
          style={{ color: 'hsl(43 76% 52% / 0.8)' }}
        >
          Trattamenti esclusivi firmati Mouna Chabbar
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="font-inter text-[9px] tracking-[0.35em] uppercase mt-3"
          style={{ color: 'hsl(43 76% 52% / 0.55)' }}
        >
          Grand Master PhiAcademy · Giudice Internazionale PMU
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="h-px w-12 bg-primary/40 mt-6 mb-8 origin-left md:mx-0 mx-auto"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex gap-4 mt-2 flex-col sm:flex-row justify-center md:justify-start"
        >
          <button
            onClick={() => scrollToSection('atelier')}
            className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors"
          >
            Scopri i Trattamenti
          </button>
          <a
            href={`https://wa.me/393516605507?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-transparent border border-primary/50 text-primary px-8 py-4 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500 text-center"
          >
            Inizia con una Consulenza
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {showChevron && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: 'hsl(43 76% 52% / 0.5)' }} />
        </motion.div>
      )}
    </section>
  );
};
