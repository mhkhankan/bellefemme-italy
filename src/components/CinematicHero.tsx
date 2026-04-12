import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookingSheet } from './BookingSheet';

export const CinematicHero = () => {
  const [imgError, setImgError] = useState(false);
  const { language } = useLanguage();
  const [sheetOpen, setSheetOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="top" className="relative overflow-hidden" style={{ height: '100svh', backgroundColor: 'hsl(0 0% 4%)' }}>
        {!imgError && (
          <img
            src="/branding/hero-mouna-architecture.jpg"
            alt="Belle Femme Atelier — Master Trainer Mouna Chabbar"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'top center', animation: 'kenBurns 20s ease-in-out infinite' }}
            fetchPriority="high"
            onError={() => setImgError(true)}
          />
        )}

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, hsla(0,0%,0%,0.35) 0%, hsla(0,0%,0%,0.60) 45%, hsla(0,0%,0%,0.92) 100%)',
          }}
        />

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

        <div
          className="absolute left-0 right-0 px-8 md:px-16 text-center md:text-left"
          style={{ bottom: 'max(8%, env(safe-area-inset-bottom, 0px) + 2rem)' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-inter text-[10px] tracking-[0.4em] uppercase"
            style={{ color: 'hsl(43 76% 52% / 0.7)' }}
          >
            BELLE FEMME ATELIER E ACCADEMIA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-cormorant text-4xl md:text-6xl font-light text-white tracking-[3px] mt-3"
            style={{ textShadow: '0 2px 12px hsla(0,0%,0%,0.6)' }}
          >
            {language === 'it' ? "L'Architettura del Volto" : 'The Architecture of the Face'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-cormorant italic text-lg md:text-xl mt-2"
            style={{ color: 'hsl(43 76% 52% / 0.8)', textShadow: '0 2px 12px hsla(0,0%,0%,0.6)' }}
          >
            {language === 'it' ? "L'armonia non si improvvisa. Si progetta." : 'Harmony is not improvised. It is designed.'}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8, ease: 'easeOut' }}
            className="font-inter text-[10px] tracking-[0.35em] uppercase mt-3"
            style={{ color: 'hsl(43 76% 52% / 0.70)' }}
          >
            {language === 'it' ? 'Craft Master Dermopigmentazione · Giudice Internazionale' : 'Craft Master Dermopigmentation · International Judge'}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="h-px w-12 bg-primary/40 mt-6 mb-8 origin-left md:mx-0 mx-auto animate-pulse"
          />

          {/* Collection discovery line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex items-center gap-4 mb-6 justify-center md:justify-start flex-nowrap"
          >
            <span className="h-px w-8 bg-primary/40" />
            <span className="font-inter text-[9px] tracking-[0.3em] uppercase text-primary/60">
              {language === 'it' ? 'Scopri la Collezione in 8 Punti' : 'Discover the 8-Point Collection'}
            </span>
            <span className="h-px w-8 bg-primary/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex gap-4 mt-2 flex-col sm:flex-row justify-center md:justify-start"
          >
            <button
              onClick={() => setSheetOpen(true)}
              className="font-inter font-bold text-[11px] tracking-[0.25em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors text-center"
            >
              Richiedi la tua Consulenza →
            </button>
            <button
              onClick={() => scrollToSection('atelier')}
              className="font-inter font-bold text-[11px] tracking-[0.25em] uppercase bg-transparent border border-primary/20 text-primary/60 px-8 py-4 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              SCOPRI I TRATTAMENTI
            </button>
          </motion.div>
        </div>
      </section>

      <BookingSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        mode="hero"
      />
    </>
  );
};
