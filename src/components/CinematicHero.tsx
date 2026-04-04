import { motion } from 'framer-motion';

export const CinematicHero = () => {
  return (
    <section id="top" className="relative flex flex-col" style={{ height: '100svh' }}>
      {/* Full-screen hero image */}
      <img
        src="/branding/hero-mouna-architecture.jpg"
        alt="Belle Femme Atelier — Master Trainer Mouna Chabbar"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 20%' }}
        fetchPriority="high"
      />

      {/* Bottom gradient for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 40%, hsla(0,0%,0%,0.7) 100%)',
        }}
      />

      {/* Golden Ratio (1.618) Mask Overlay — fades in after 1.5s */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
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

      {/* 1px Venetian Gold border overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          border: '1px solid hsla(43, 76%, 52%, 0.2)',
        }}
      />
    </section>
  );
};
