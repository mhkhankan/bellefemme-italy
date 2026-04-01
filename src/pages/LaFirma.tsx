import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { StickyHeader } from '@/components/StickyHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { WhatsAppSticky } from '@/components/WhatsAppSticky';
import { Link } from 'react-router-dom';
import sealImage from '@/assets/seal.png';

const LaFirma = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />

      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">{t.about.label}</p>
            <h1 className="font-cormorant text-4xl md:text-6xl font-light text-foreground tracking-[3px]">
              {t.about.heroTitle}
            </h1>
            <div className="h-px w-16 bg-primary/40 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Portrait placeholder */}
      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl">
          <div className="aspect-[3/4] bg-card border border-primary/10 flex items-center justify-center">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30">
              Portrait of the Master
            </span>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="pb-32">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl space-y-16">
          {[t.about.bio1, t.about.bio2, t.about.bio3].map((bio, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="text-base text-muted-foreground leading-[2] tracking-wide"
            >
              {bio}
            </motion.p>
          ))}

          {/* Credentials */}
          <div className="border-t border-primary/10 pt-16 space-y-8">
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">{t.about.credentialsLabel}</p>
            <h2 className="font-cormorant text-2xl font-light text-foreground tracking-[2px]">
              {t.about.credentialsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(t.about.credentials).filter(([key]) => !key.endsWith('Sub')).map(([key, val]) => (
                <div key={key} className="space-y-2">
                  <p className="font-cormorant text-lg text-foreground tracking-wide">{val as string}</p>
                  <p className="text-xs text-muted-foreground">{(t.about.credentials as Record<string, string>)[`${key}Sub`]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gold Signature Closer */}
      <section className="pb-32">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-8"
          >
            <img
              src={sealImage}
              alt="Belle Femme Signature Seal"
              className="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto opacity-60"
            />
            <p className="font-cormorant text-xl italic text-primary/50 tracking-[3px]">
              Mouna Chabbar
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40">
              Master Trainer · International PMU Judge
            </p>
          </motion.div>
        </div>
      </section>

      <div className="text-center pb-16">
        <Link
          to="/"
          className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-8 py-3 min-h-[44px] inline-flex items-center hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          {t.about.backToAcademy}
        </Link>
      </div>

      <SiteFooter />
      <WhatsAppSticky />
    </div>
  );
};

export default LaFirma;
