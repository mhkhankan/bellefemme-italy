import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const watermarkY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden flex flex-col"
      style={{ height: '100svh', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Video Background — set src="/your-video.mp4" to activate */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      />

      {/* Dark gradient overlay — cinema feel */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/80 via-background/45 to-background" />
      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 35%, hsl(var(--background)) 85%)' }}
      />

      {/* Parallax watermarks */}
      <motion.div
        style={{ y: watermarkY }}
        className="watermark absolute top-[10%] -left-[5%] text-[12vw] leading-none select-none pointer-events-none"
      >
        ARTISTRY
      </motion.div>
      <motion.div
        style={{ y: watermarkY2 }}
        className="watermark absolute bottom-[5%] -right-[5%] text-[10vw] leading-none select-none pointer-events-none"
      >
        PERFEZIONE
      </motion.div>

      {/* Main content — flex-1 to fill height below navbar */}
      <div className="flex-1 flex flex-col justify-center pt-20 relative z-10">
        <div className="container mx-auto px-6 md:px-12 w-full">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            {/* Left — editorial text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:col-span-7 lg:col-span-6 space-y-5 md:space-y-7"
            >
              <div className="space-y-2">
                <div className="divider-gold w-20 mb-5" />
                <h1 className="heading-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground">
                  L'Anima del Tratto.
                </h1>
                <h2 className="heading-editorial-italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-accent mt-1">
                  The Soul of the Stroke.
                </h2>
              </div>

              <p className="text-sm md:text-base text-foreground/50 max-w-md leading-relaxed font-light tracking-wide">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={() => scrollToSection('academy')}
                  className="btn-luxury px-8 py-3 text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-accent transition-all"
                >
                  {t.hero.viewCourses}
                </button>
                <button
                  onClick={() => scrollToSection('treatments')}
                  className="border-draw px-8 py-3 text-xs tracking-[0.2em] uppercase border border-accent/30 text-foreground hover:text-accent transition-colors"
                >
                  {t.hero.bookTreatment}
                </button>
              </div>
            </motion.div>

            {/* Right — editorial accent frame (desktop only) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:col-span-5 lg:col-span-6 relative hidden md:flex items-center justify-center"
            >
              <div className="relative w-full aspect-[3/4] max-w-xs lg:max-w-sm">
                <div className="absolute inset-0 border border-accent/20" />
                <div className="absolute inset-4 border border-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="heading-editorial text-6xl lg:text-7xl text-accent/10">BF</span>
                </div>
                <div className="absolute -right-6 top-1/3 w-20 h-px bg-accent/40" />
                <div className="absolute -left-6 bottom-1/4 w-14 h-px bg-accent/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
