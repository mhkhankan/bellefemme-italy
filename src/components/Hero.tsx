import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const watermarkY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Watermark parallax text */}
      <motion.div
        style={{ y: watermarkY }}
        className="watermark absolute top-[15%] -left-[5%] text-[12vw] leading-none select-none"
      >
        ARTISTRY
      </motion.div>
      <motion.div
        style={{ y: watermarkY2 }}
        className="watermark absolute bottom-[10%] -right-[5%] text-[10vw] leading-none select-none"
      >
        PERFEZIONE
      </motion.div>

      {/* Content - Asymmetric layout */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center min-h-screen py-24">
          {/* Left - editorial text block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-7 lg:col-span-6 space-y-10"
          >
            <div className="space-y-2">
              <div className="divider-gold w-24 mb-8" />
              <h1 className="heading-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground">
                L'Anima del Tratto.
              </h1>
              <h2 className="heading-editorial-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-accent mt-2">
                The Soul of the Stroke.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-foreground/50 max-w-lg leading-relaxed font-light tracking-wide">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('academy')}
                className="btn-luxury px-10 py-4 text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-accent transition-all"
              >
                {t.hero.viewCourses}
              </button>
              <button
                onClick={() => scrollToSection('treatments')}
                className="border-draw px-10 py-4 text-sm tracking-[0.2em] uppercase border border-accent/30 text-foreground hover:text-accent transition-colors"
              >
                {t.hero.bookTreatment}
              </button>
            </div>
          </motion.div>

          {/* Right - editorial accent */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-5 lg:col-span-6 relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-full aspect-[3/4] max-w-md">
              {/* Abstract editorial frame */}
              <div className="absolute inset-0 border border-accent/20" />
              <div className="absolute inset-4 border border-accent/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="heading-editorial text-8xl lg:text-9xl text-accent/10">
                  BF
                </span>
              </div>
              {/* Floating accent line */}
              <div className="absolute -right-6 top-1/3 w-24 h-px bg-accent/40" />
              <div className="absolute -left-6 bottom-1/4 w-16 h-px bg-accent/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
