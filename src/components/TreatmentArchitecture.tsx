import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LocationSheet } from './LocationSheet';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TreatmentItem } from '@/lib/translations';

const IMAGE_MAP: Record<string, string> = {
  'raw-stroke': '/treatments/01-tratto-grezzo-sopracciglia.jpg',
  'pigment-restauro': '/treatments/02-pigment-restauro-correttivo.jpg',
  'shadow-layer': '/treatments/03-shadow-layer-pixelation.jpg',
  'lip-vitality': '/treatments/04-nude-lip-infusion.jpg',
  'eye-engineering': '/treatments/05-lash-line-engineering.jpg',
  'lash-architecture': '/treatments/06-gaze-sculpting-ciglia.jpg',
  'brow-blueprint': '/treatments/07-brow-architecture-visagismo.jpg',
  'lash-sculpting': '/treatments/08-consultation.jpg',
};

const ALT_MAP: Record<string, string> = {
  'raw-stroke': 'Microblading iperrealismo Varese — Raw Stroke PhiBrows',
  'pigment-restauro': 'Correzione PMU Varese — Pigment Restauro AcademyS',
  'shadow-layer': 'Ombre powder brows Milano — Shadow Layer pixelation',
  'lip-vitality': 'PMU labbra Varese — Nude-Lip Infusion acquerello',
  'eye-engineering': 'Eyeliner permanente Varese — Lash-Line Engineering',
  'lash-architecture': 'Laminazione ciglia Varese — Gaze Sculpting Kerafill',
  'brow-blueprint': 'Architettura sopracciglia Varese — Brow Architecture Sezione Aurea',
  'lash-sculpting': 'Extension ciglia su misura Varese — Lash Sculpting volumetria',
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const TreatmentArchitecture = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [inSection, setInSection] = useState(false);

  const treatments = t.treatments.items;

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('atelier');
      if (section) {
        const rect = section.getBoundingClientRect();
        setInSection(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openConsultation = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    setSheetOpen(true);
  };

  const tickerText = language === 'it'
    ? 'La Collezione — 8 Trattamenti Esclusivi'
    : 'The Collection — 8 Exclusive Treatments';

  const scrollToTreatment = (index: number) => {
    const el = document.getElementById(`treatment-${index}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const TreatmentImage = ({ item, sizeClass, numberSize, imgStyle }: { item: TreatmentItem; sizeClass: string; numberSize: string; imgStyle?: React.CSSProperties }) => {
    const [imgFailed, setImgFailed] = useState(false);
    const imgPath = IMAGE_MAP[item.id];
    const altText = ALT_MAP[item.id] || item.title;
    return (
      <>
        {imgPath && !imgFailed ? (
          <img
            src={imgPath}
            alt={altText}
            className={`${sizeClass} object-cover`}
            loading={item.number <= '02' ? 'eager' : 'lazy'}
            onError={() => setImgFailed(true)}
            style={imgStyle}
          />
        ) : (
          <div className={`${sizeClass} shimmer-venetian flex items-center justify-center`}>
            <span className={`font-cormorant ${numberSize} font-light text-primary/20`}>{item.number}</span>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <section id="atelier" className="relative">
        <div className="hidden md:block py-24 md:py-32">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">
              The 8-Point Collection
            </p>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light text-foreground tracking-[2px]">
              {t.nav.atelier}
            </h2>
            <p className="text-[11px] tracking-[0.2em] uppercase text-primary/80 font-inter">
              {tickerText}
            </p>
          </motion.div>
        </div>

        <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
          {treatments.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToTreatment(i)}
              className="group flex items-center gap-2"
              aria-label={`Go to ${item.title}`}
            >
              <span
                className="block transition-all duration-300"
                style={{
                  width: activeIndex === i ? '32px' : '16px',
                  height: '1px',
                  backgroundColor: activeIndex === i
                    ? 'hsl(43 76% 52%)'
                    : 'hsl(43 76% 52% / 0.2)',
                }}
              />
            </button>
          ))}
        </div>

        <div
          className="md:hidden"
          style={{ scrollSnapType: 'y mandatory', height: '100svh', overflowY: 'scroll', overscrollBehavior: 'contain' }}
        >
          {treatments.map((item, index) => (
            <motion.div
              key={item.id}
              id={`treatment-${index}`}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              onViewportEnter={() => setActiveIndex(index)}
              onViewportLeave={() => setExpandedId(null)}
              viewport={{ once: false, margin: '-40%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col justify-end px-6 pb-8 pt-16 border-t border-primary/10 relative"
              style={{ minHeight: '100svh', scrollSnapAlign: 'start' }}
            >
              <div className="flex-1 flex items-center justify-center mb-8" style={{ maxHeight: 'min(50vh, 320px)' }}>
                <TreatmentImage item={item} sizeClass="w-full" numberSize="text-6xl" imgStyle={{ maxHeight: 'min(50vh, 320px)', width: '100%', objectFit: 'cover' }} />
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-cormorant text-4xl font-light text-primary/20">{item.number}</span>
                  <div>
                    <h3 className="font-inter font-bold text-[12px] tracking-[0.2em] uppercase text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-cormorant italic text-xl mt-1" style={{ color: 'hsl(43 76% 52% / 0.90)' }}>{item.subtitle}</p>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="text-[10px] tracking-[0.15em] uppercase text-primary/50 hover:text-primary transition-colors min-h-[44px] flex items-center"
                >
                  {expandedId === item.id
                    ? (language === 'it' ? 'Chiudi −' : 'Close −')
                    : (language === 'it' ? 'Dettagli Tecnici +' : 'Technical Details +')}
                </button>

                <p
                  className="text-base leading-relaxed overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: expandedId === item.id ? '20rem' : '0',
                    opacity: expandedId === item.id ? 0.85 : 0,
                  }}
                >
                  {item.description}
                </p>

                <button
                  onClick={() => openConsultation(item.title)}
                  className="w-full font-inter font-bold text-[11px] tracking-[0.22em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-all duration-500 mt-4"
                >
                  {t.treatments.checkAvailability}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {inSection && (
          <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
            {treatments.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === i ? '8px' : '4px',
                  height: activeIndex === i ? '8px' : '4px',
                  backgroundColor: activeIndex === i
                    ? 'hsl(43 76% 52%)'
                    : 'hsl(43 76% 52% / 0.3)',
                }}
              />
            ))}
          </div>
        )}

        <div className="hidden md:block">
          <div className="space-y-0 max-w-5xl mx-auto">
            {treatments.map((item, index) => (
              <motion.div
                key={item.id}
                id={`treatment-${index}`}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ once: false, margin: '-30%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="min-h-screen flex items-center border-t border-primary/10 px-12"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="grid grid-cols-12 gap-16 items-center w-full py-16">
                  <div className={`col-span-5 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <TreatmentImage item={item} sizeClass="w-full aspect-[4/5]" numberSize="text-8xl" />
                  </div>

                  <div className={`col-span-7 space-y-6 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <span className="font-cormorant text-8xl font-light text-primary/10 block">{item.number}</span>
                    <h3 className="font-inter font-bold text-[12px] tracking-[0.25em] uppercase text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-cormorant italic text-2xl text-primary/90">{item.subtitle}</p>

                    <button
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      className="text-[10px] tracking-[0.15em] uppercase text-primary/50 hover:text-primary transition-colors min-h-[48px] flex items-center"
                    >
                      {expandedId === item.id
                        ? (language === 'it' ? 'Chiudi −' : 'Close −')
                        : (language === 'it' ? 'Dettagli Tecnici +' : 'Technical Details +')}
                    </button>

                    <p
                      className="text-base leading-relaxed max-w-md overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: expandedId === item.id ? '20rem' : '0',
                        opacity: expandedId === item.id ? 0.85 : 0,
                      }}
                    >
                      {item.description}
                    </p>

                    <button
                      onClick={() => openConsultation(item.title)}
                      className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-10 py-4 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                    >
                      {t.treatments.checkAvailability}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <LocationSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        treatmentName={selectedTreatment}
      />
    </>
  );
};
