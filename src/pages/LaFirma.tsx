import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { StickyHeader } from '@/components/StickyHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { WhatsAppSticky } from '@/components/WhatsAppSticky';
import { Link } from 'react-router-dom';
import sealImage from '@/assets/seal.png';

const JURIST_CITIES = ['MILAN', 'DUBAI', 'VENEZIA', 'CAPPADOCIA', 'ROMANIA'];

const LaFirma = () => {
  const { t, language } = useLanguage();

  const bioHeader = language === 'it'
    ? "L'Architetto dello Sguardo"
    : language === 'ar'
    ? 'مهندسة النظرة'
    : 'The Architect of the Gaze';

  const bioBody = language === 'it'
    ? "Con una formazione in Graphic Design e un decennio di maestria globale, Mouna Chabbar non applica semplicemente pigmento; ingegnerizza la simmetria. In qualità di Giurista Internazionale che unisce il rigore tecnico europeo all'estetica mediorientale, il suo \"Metodo Blueprint\" è il gold standard dell'armonia facciale."
    : language === 'ar'
    ? 'مع شهادة في التصميم الجرافيكي وعقد من الإتقان العالمي، منى شبار لا تطبق الصبغة فحسب؛ بل تهندس التناسق.'
    : "With a degree in Graphic Design and a decade of global mastery, Mouna Chabbar does not just apply pigment; she engineers symmetry. As an International Jurist bridging European technical rigor with Middle Eastern aesthetics, her \"Blueprint Method\" is the gold standard of facial harmony.";

  const juristLabel = language === 'it' ? 'GIUDICE INTERNAZIONALE' : language === 'ar' ? 'حكمة دولية' : 'INTERNATIONAL JUDGE';

  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />

      {/* Blueprint background layer — 5% opacity golden ratio lines */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="61.8" fill="none" stroke="hsl(30, 33%, 48%)" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="38.2" fill="none" stroke="hsl(30, 33%, 48%)" strokeWidth="0.3" />
              <line x1="0" y1="76.4" x2="200" y2="76.4" stroke="hsl(30, 33%, 48%)" strokeWidth="0.3" />
              <line x1="0" y1="123.6" x2="200" y2="123.6" stroke="hsl(30, 33%, 48%)" strokeWidth="0.3" />
              <line x1="76.4" y1="0" x2="76.4" y2="200" stroke="hsl(30, 33%, 48%)" strokeWidth="0.3" />
              <line x1="123.6" y1="0" x2="123.6" y2="200" stroke="hsl(30, 33%, 48%)" strokeWidth="0.3" />
              <line x1="0" y1="0" x2="200" y2="200" stroke="hsl(30, 33%, 48%)" strokeWidth="0.2" />
              <line x1="200" y1="0" x2="0" y2="200" stroke="hsl(30, 33%, 48%)" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      {/* Hero Label */}
      <section className="relative z-10 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">{t.about.label}</p>
            <h1 className="font-cormorant text-4xl md:text-6xl font-light text-foreground tracking-[3px]">
              {t.about.heroTitle}
            </h1>
            <div className="h-px w-16 bg-primary/40 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 60/40 Asymmetric Grid — Desktop: sticky portrait left, scrollable bio right */}
      <section className="relative z-10 pb-16 md:pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Left 60% — Sticky Portrait */}
            <div className="md:w-[58%] md:self-start md:sticky md:top-28">
              <div className="aspect-[3/4] bg-card border border-primary/10 flex items-center justify-center">
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30">
                  Portrait of the Master
                </span>
              </div>
            </div>

            {/* Right 40% — Scrollable bio */}
            <div className="md:w-[42%] space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="font-cormorant text-2xl md:text-3xl font-light text-foreground tracking-[2px]">
                  {bioHeader}
                </h2>
                <p className="text-base text-muted-foreground leading-[2] tracking-wide">
                  {bioBody}
                </p>
              </motion.div>

              {/* Credentials */}
              <div className="border-t border-primary/10 pt-12 space-y-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">{t.about.credentialsLabel}</p>
                <h3 className="font-cormorant text-xl font-light text-foreground tracking-[2px]">
                  {t.about.credentialsTitle}
                </h3>
                <div className="space-y-6">
                  {Object.entries(t.about.credentials)
                    .filter(([key]) => !key.endsWith('Sub'))
                    .map(([key, val]) => (
                      <div key={key} className="space-y-1">
                        <p className="font-cormorant text-lg text-foreground tracking-wide">{val as string}</p>
                        <p className="text-xs text-muted-foreground">
                          {(t.about.credentials as Record<string, string>)[`${key}Sub`]}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE JURIST POWER-BAR — Full-width scrolling ticker */}
      <section className="relative z-10 border-y border-primary/20 overflow-hidden py-5 md:py-6">
        <div className="flex animate-[ticker_20s_linear_infinite] whitespace-nowrap">
          {[...Array(4)].map((_, rep) => (
            <span key={rep} className="flex items-center">
              <span className="text-[11px] md:text-[13px] tracking-[0.3em] uppercase font-inter font-bold" style={{ color: 'hsl(30, 33%, 48%)' }}>
                {juristLabel}:
              </span>
              {JURIST_CITIES.map((city, i) => (
                <span key={`${rep}-${i}`} className="flex items-center">
                  <span className="mx-3 text-primary/30">•</span>
                  <span className="text-[11px] md:text-[13px] tracking-[0.3em] uppercase font-inter font-bold" style={{ color: 'hsl(30, 33%, 48%)' }}>
                    {city}
                  </span>
                </span>
              ))}
              <span className="mx-8" />
            </span>
          ))}
        </div>
      </section>

      {/* THE CLIMAX SIGNATURE — Gold seal, large, fade-in */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-6 md:px-12 text-center" style={{ paddingBottom: '150px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="space-y-8"
          >
            <img
              src={sealImage}
              alt="Belle Femme Signature Seal"
              className="w-1/2 md:w-[30%] max-w-xs object-contain mx-auto opacity-70"
            />
            <p className="font-cormorant text-xl md:text-2xl italic tracking-[3px]" style={{ color: 'hsl(30, 33%, 48%)' }}>
              Mouna Chabbar
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40">
              Master Trainer · International PMU Judge
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 text-center pb-16">
        <Link
          to="/"
          className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-8 py-3 min-h-[44px] inline-flex items-center hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          {t.about.backToAcademy}
        </Link>
      </div>

      <div className="relative z-10">
        <SiteFooter />
      </div>
      <WhatsAppSticky />
    </div>
  );
};

export default LaFirma;
