import { motion } from 'framer-motion';

export const CinematicHero = () => {
  return (
    <section id="top" className="relative flex flex-col" style={{ height: '100svh' }}>
      {/* Full-screen hero image — NAKED: zero UI elements */}
      <img
        src="/branding/hero-architect.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 20%' }}
      />

      {/* Subtle bottom gradient for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, hsla(150,30%,7%,0.6) 100%)',
        }}
      />
    </section>
  );
};
