import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
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

const TreatmentImage = ({
  item,
  sizeClass,
  numberSize,
  imgStyle,
}: {
  item: TreatmentItem;
  sizeClass: string;
  numberSize: string;
  imgStyle?: React.CSSProperties;
}) => {
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
          <span className={`font-cormorant ${numberSize} font-light text-primary/20`}>
            {item.number}
          </span>
        </div>
      )}
    </>
  );
};

interface MobileSwiperProps {
  treatments: TreatmentItem[];
  language: string;
  tickerText: string;
  t: any;
  onConsultation: (name: string) => void;
}

const MobileSwiper = ({ treatments, language, tickerText, t, onConsultation }: MobileSwiperProps) => {
  const TOTAL = treatments.length + 1;

  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [exited, setExited] = useState(false);

  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (exited) {
      const academy = document.getElementById('academy');
      if (academy) {
        academy.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [exited]);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating.current) return;
      if (index < 0) return;
      if (index >= TOTAL) {
        setExited(true);
        return;
      }
      isAnimating.current = true;
      setActiveIndex(index);
      setExpandedId(null);
      setTimeout(() => {
        isAnimating.current = false;
      }, 500);
    },
    [TOTAL]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (isAnimating.current) return;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const deltaX = Math.abs(touchStartX.current - e.changedTouches[0].clientX);
      if (deltaX > Math.abs(deltaY)) return;
      if (Math.abs(deltaY) < 80) return;
      if (expandedId !== null) return;
      if (deltaY > 0) {
        goTo(activeIndex + 1);
      } else {
        goTo(activeIndex - 1);
      }
    },
    [activeIndex, expandedId, goTo]
  );

  const toggleExpanded = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  if (exited) return null;

  return (
    <div
      className="md:hidden relative"
      style={{ height: '100svh', overflow: 'hidden', touchAction: 'none' }}
      onTouchStart={handleTouchStart}
      onTouchMove={(e) => { e.preventDefault(); }}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide track — moves by exact svh units */}
      <div
        className="flex flex-col w-full"
        style={{
          transform: `translateY(-${activeIndex * 100}svh)`,
          transition: 'transform 0.4s ease-out',
          willChange: 'transform',
        }}
      >
        {/* SLIDE 0 — Intro */}
        <div className="w-full flex flex-col items-center justify-center text-center px-6 space-y-4" style={{ height: '100svh' }}>
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">
            The 8-Point Collection
          </p>
          <h2 className="font-cormorant text-3xl font-light text-foreground tracking-[2px]">
            {t.nav.atelier}
          </h2>
          <div className="w-12 h-px bg-primary/30" />
          <p className="text-[11px] tracking-[0.2em] uppercase text-primary/80 font-inter">
            {tickerText}
          </p>
          <p className="text-[10px] tracking-[0.15em] uppercase text-primary/40 mt-8 animate-pulse">
            {language === 'it' ? 'Scorri per esplorare ↓' : 'Swipe to explore ↓'}
          </p>
        </div>

        {/* SLIDES 1–8 — Treatments */}
        {treatments.map((item, index) => {
          const isExpanded = expandedId === item.id;
          return (
            <div key={item.id} className="w-full flex flex-col" style={{ height: '100svh' }}>
              {/* Image — fixed height */}
              <div className="flex-shrink-0" style={{ height: 'min(38svh, 280px)' }}>
                <TreatmentImage
                  item={item}
                  sizeClass="w-full h-full"
                  numberSize="text-6xl"
                  imgStyle={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Content */}
              <div
                className="flex-1 px-6 pt-4 pb-6 space-y-3"
                style={{ overflowY: isExpanded ? 'auto' : 'hidden', WebkitOverflowScrolling: 'touch' }}
                onTouchStart={(e) => { if (isExpanded) e.stopPropagation(); }}
                onTouchEnd={(e) => { if (isExpanded) e.stopPropagation(); }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-cormorant text-4xl font-light text-primary/20">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-inter font-bold text-[14px] tracking-[0.15em] uppercase text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-cormorant italic text-[22px] mt-1 text-primary/90">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onConsultation(item.title)}
                  className="w-full font-inter font-bold text-[11px] tracking-[0.22em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-all duration-300 mb-3"
                >
                  {t.treatments.checkAvailability}
                </button>

                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="text-[10px] tracking-[0.15em] uppercase text-primary/50 hover:text-primary transition-colors min-h-[44px] flex items-center"
                >
                  {isExpanded
                    ? (language === 'it' ? 'Chiudi —' : 'Close —')
                    : (language === 'it' ? 'Dettagli Tecnici +' : 'Technical Details +')}
                </button>

                {isExpanded && (
                  <p className="text-[15px] leading-relaxed text-foreground/80 pb-4">
                    {item.description}
                  </p>
                )}

                {!isExpanded && (
                  <div className="flex items-center justify-center gap-2 pt-4">
                    {treatments.map((_, i) => (
                      <div
                        key={i}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: activeIndex === i + 1 ? '8px' : '4px',
                          height: activeIndex === i + 1 ? '8px' : '4px',
                          backgroundColor: activeIndex === i + 1
                            ? 'hsl(43 76% 52%)'
                            : 'hsl(43 76% 52% / 0.3)',
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {activeIndex > 0 && (
        <div className="absolute top-4 right-4 text-[10px] tracking-[0.2em] uppercase" style={{ color: 'hsl(43 76% 52% / 0.5)', pointerEvents: 'none' }}>
          {activeIndex} / {treatments.length}
        </div>
      )}
    </div>
  );
};

export const TreatmentArchitecture = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const treatments = t.treatments.items;

  const openConsultation = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    setSheetOpen(true);
  };

  const tickerText =
    language === 'it'
      ? 'La Collezione — 8 Trattamenti Esclusivi'
      : 'The Collection — 8 Exclusive Treatments';

  const scrollToTreatment = (index: number) => {
    const el = document.getElementById(`treatment-${index}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
          {treatments.map((item: TreatmentItem, i: number) => (
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

        <MobileSwiper
          treatments={treatments}
          language={language}
          tickerText={tickerText}
          t={t}
          onConsultation={openConsultation}
        />

        <div className="hidden md:block">
          <div className="space-y-0 max-w-5xl mx-auto">
            {treatments.map((item: TreatmentItem, index: number) => (
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
                    <span className="font-cormorant text-8xl font-light text-primary/10 block">
                      {item.number}
                    </span>
                    <h3 className="font-inter font-bold text-[12px] tracking-[0.25em] uppercase text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-cormorant italic text-2xl text-primary/90">{item.subtitle}</p>
                    <button
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      className="text-[10px] tracking-[0.15em] uppercase text-primary/50 hover:text-primary transition-colors min-h-[48px] flex items-center"
                    >
                      {expandedId === item.id
                        ? (language === 'it' ? 'Chiudi —' : 'Close —')
                        : (language === 'it' ? 'Dettagli Tecnici +' : 'Technical Details +')}
                    </button>
                    <p
                      className="text-[16px] leading-relaxed max-w-md overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: expandedId === item.id ? '20rem' : '0',
                        opacity: expandedId === item.id ? 0.85 : 0,
                      }}
                    >
                      {item.description}
                    </p>
                    <button
                      onClick={() => openConsultation(item.title)}
                      className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-10 py-4 min-h-[48px] hover:bg-primary/90 transition-all duration-500"
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
