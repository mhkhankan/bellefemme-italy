import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLACEHOLDER = '/placeholder.svg';

interface TreatmentData {
  key: string;
  name: string;
  poetic: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

const TreatmentBlock = ({
  treatment,
  index,
  isRTL,
  cta,
  safety,
  healedResults,
  beforeLabel,
  afterLabel,
}: {
  treatment: TreatmentData;
  index: number;
  isRTL: boolean;
  cta: string;
  safety: string;
  healedResults: string;
  beforeLabel: string;
  afterLabel: string;
}) => {
  const isEven = index % 2 === 0;
  // For RTL, flip the layout direction
  const imageFirst = isRTL ? !isEven : isEven;

  const whatsappMsg = encodeURIComponent(
    `Ciao Mouna, vorrei informazioni sul trattamento ${treatment.name} a Varese`
  );
  const whatsappUrl = `https://wa.me/393516605507?text=${whatsappMsg}`;

  const imageCol = (
    <motion.div
      initial={{ opacity: 0, x: imageFirst ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
      className="md:col-span-6"
    >
      <div className="space-y-3">
        <BeforeAfterSlider
          beforeSrc={treatment.beforeImg}
          afterSrc={treatment.afterImg}
          beforeLabel={beforeLabel}
          afterLabel={afterLabel}
        />
        <p className="text-[10px] tracking-[0.2em] uppercase text-accent/50 text-center">
          {healedResults}
        </p>
      </div>
    </motion.div>
  );

  const textCol = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="md:col-span-6 flex flex-col justify-center space-y-6"
    >
      <div className="space-y-4">
        <p className="text-xs tracking-[0.25em] uppercase text-accent/60">
          {treatment.name}
        </p>
        <h2 className="heading-editorial-italic text-3xl md:text-5xl text-accent">
          {treatment.poetic}
        </h2>
        <div className="divider-gold w-20" />
        <p className="text-base md:text-lg text-foreground/50 font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          {treatment.description}
        </p>
      </div>

      {/* Safety seal */}
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-accent/60" />
        <span className="text-[10px] tracking-[0.15em] uppercase text-accent/40">
          {safety}
        </span>
      </div>

      {/* Gold ghost CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 border border-accent/30 px-8 py-4 text-xs tracking-[0.2em] uppercase text-accent/80 hover:bg-accent/10 hover:border-accent/60 transition-all duration-500 w-fit group"
      >
        {cta}
        {isRTL ? (
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        ) : (
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        )}
      </a>
    </motion.div>
  );

  return (
    <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
      {imageFirst ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </div>
  );
};

const TreatmentsPage = () => {
  const { t, isRTL } = useLanguage();
  const tp = t.treatmentsPage;

  const treatments: TreatmentData[] = [
    { key: 'brows', ...tp.brows, beforeImg: PLACEHOLDER, afterImg: PLACEHOLDER },
    { key: 'lips', ...tp.lips, beforeImg: PLACEHOLDER, afterImg: PLACEHOLDER },
    { key: 'eyes', ...tp.eyes, beforeImg: PLACEHOLDER, afterImg: PLACEHOLDER },
    { key: 'paramedical', ...tp.paramedical, beforeImg: PLACEHOLDER, afterImg: PLACEHOLDER },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — 100svh */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '100svh' }}>
        <div className="watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] leading-none whitespace-nowrap">
          TRATTAMENTI
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-center relative z-10 px-6"
        >
          <div className="divider-gold w-24 mx-auto mb-8" />
          <h1 className="heading-editorial text-5xl md:text-8xl text-accent mb-6">
            {tp.heroTitle}
          </h1>
          <p className="text-sm md:text-base tracking-[0.25em] uppercase text-foreground/30">
            {tp.heroSubtitle}
          </p>
          <div className="divider-gold w-24 mx-auto mt-8" />
        </motion.div>
      </section>

      {/* Treatment blocks */}
      <section className="container mx-auto px-6 md:px-12 pb-32 space-y-32">
        {treatments.map((treatment, index) => (
          <TreatmentBlock
            key={treatment.key}
            treatment={treatment}
            index={index}
            isRTL={isRTL}
            cta={tp.cta}
            safety={tp.safety}
            healedResults={tp.healedResults}
            beforeLabel={tp.beforeLabel}
            afterLabel={tp.afterLabel}
          />
        ))}
      </section>

      {/* Back link */}
      <div className="container mx-auto px-6 md:px-12 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground/30 hover:text-accent transition-colors"
        >
          {isRTL ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
          {t.about?.backToAcademy || 'Back'}
        </Link>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TreatmentsPage;
