import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gavel, GraduationCap, PenTool, Globe, ArrowLeft } from 'lucide-react';
import { useRef } from 'react';

const AboutMouna = () => {
  const { t, isRTL } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const credentials = [
    { icon: Gavel, title: t.about.credentials.judge, sub: t.about.credentials.judgeSub },
    { icon: GraduationCap, title: t.about.credentials.trainer, sub: t.about.credentials.trainerSub },
    { icon: PenTool, title: t.about.credentials.design, sub: t.about.credentials.designSub },
    { icon: Globe, title: t.about.credentials.specialist, sub: t.about.credentials.specialistSub },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Biography */}
      <section ref={heroRef} className="relative min-h-svh pt-20 overflow-hidden">
        {/* Watermark */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        >
          <span className="watermark text-[12vw] md:text-[10vw] leading-none">
            MASTER
          </span>
        </motion.div>

        <div className={`container mx-auto px-6 md:px-12 h-full flex items-center py-16 md:py-24 relative z-10`}>
          <div className={`grid md:grid-cols-5 gap-8 md:gap-16 items-center w-full ${isRTL ? 'direction-rtl' : ''}`}>
            {/* Portrait — 3 cols */}
            <div className={`md:col-span-3 ${isRTL ? 'md:order-2' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                className="relative"
              >
                <img
                  src="/mouna-portrait.jpg"
                  alt="Mouna — Master Trainer"
                  className="w-full h-[60vh] md:h-[75vh] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>
            </div>

            {/* Narrative — 2 cols */}
            <div className={`md:col-span-2 space-y-8 ${isRTL ? 'md:order-1 text-right' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <p className="text-xs tracking-[0.3em] uppercase text-accent/60">
                  {t.about.label}
                </p>
                <h1 className="heading-editorial text-3xl md:text-5xl text-accent leading-tight">
                  {t.about.heroTitle}
                </h1>
                <div className="divider-gold w-16" />
                <p className="text-sm md:text-base leading-relaxed text-foreground/70 font-cormorant">
                  {t.about.bio1}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-foreground/50 font-cormorant">
                  {t.about.bio2}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-foreground/50 font-cormorant">
                  {t.about.bio3}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="divider-gold" />
      </div>

      {/* Credentials Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent/50 mb-4">
              {t.about.credentialsLabel}
            </p>
            <h2 className="heading-editorial text-2xl md:text-4xl text-foreground">
              {t.about.credentialsTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {credentials.map((cred, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`p-8 md:p-10 border border-accent/20 flex flex-col items-center text-center space-y-4 ${isRTL ? 'text-right items-end' : ''}`}
              >
                <cred.icon className="w-6 h-6 text-accent" strokeWidth={1.2} />
                <h3 className="heading-editorial-bold text-xs tracking-[0.15em] text-foreground">
                  {cred.title}
                </h3>
                <p className="text-[11px] text-foreground/40 tracking-wider font-cormorant">
                  {cred.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-6 md:px-12 pb-20 flex justify-center">
        <Link
          to="/"
          className={`inline-flex items-center gap-3 px-8 py-3 border border-accent/30 text-accent text-xs tracking-[0.2em] uppercase hover:bg-accent/10 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          {t.about.backToAcademy}
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMouna;
