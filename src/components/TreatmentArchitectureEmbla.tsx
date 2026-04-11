import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
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

  return imgPath && !imgFailed ? (
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
  );
};

interface MobileSwiperProps {
  treatments: TreatmentItem[];
  language: string;
  tickerText: string;
  t: ReturnType<typeof useLanguage>['t'];
  onConsultation: (name: string) => void;
}

const MobileSwiper = ({ treatments, language, tickerText, t, onConsultation }: MobileSwiperProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: 'y',
    loop: false,
    dragFree: false,
    containScroll: 'trimSnaps',
    watchDrag: expandedId === null,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setExpandedId(null);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({
      axis: 'y',
      loop: false,
      dragFree: false,
      containScroll: 'trimSnaps',
      watchDrag: expandedId === null,
    });
  }, [emblaApi, expandedId]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSettle = () => {
      if (emblaApi.selectedScrollSnap() === treatments.length) {
        window.setTimeout(() => {
          document.getElementById('academy')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    };

    emblaApi.on('settle', onSettle);
    return () => {
      emblaApi.off('settle', onSettle);
    };
  }, [emblaApi, treatments.length]);

  const toggleExpanded = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative h-[100svh] overflow-hidden md:hidden">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full flex-col">
          <div className="flex-[0_0_100%] min-h-0 bg-background px-6">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">
                The 8-Point Collection
              </p>
              <h2 className="mt-4 font-cormorant text-3xl font-light tracking-[2px] text-foreground">
                {t.nav.atelier}
              </h2>
              <div className="mt-4 h-px w-12 bg-primary/30" />
              <p className="mt-4 font-inter text-[11px] uppercase tracking-[0.2em] text-primary/80">
                {tickerText}
              </p>
              <p className="mt-8 text-[10px] uppercase tracking-[0.15em] text-primary/40 animate-pulse">
                {language === 'it' ? 'Scorri per esplorare ↓' : 'Swipe to explore ↓'}
              </p>
            </div>
          </div>

          {treatments.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <div key={item.id} className="flex-[0_0_100%] min-h-0 bg-background">
                <div className="flex h-full flex-col">
                  <div className="flex-shrink-0" style={{ height: 'min(38svh, 280px)' }}>
                    <TreatmentImage
                      item={item}
                      sizeClass="h-full w-full"
                      numberSize="text-6xl"
                      imgStyle={{ height: '100%', width: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 pb-6 pt-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-cormorant text-4xl font-light text-primary/20">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="font-inter text-[14px] font-bold uppercase tracking-[0.15em] text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-1 font-cormorant text-[22px] italic text-primary/90">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onConsultation(item.title)}
                      className="mt-4 min-h-[48px] w-full bg-primary px-8 py-4 font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                    >
                      {t.treatments.checkAvailability}
                    </button>

                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="mt-3 flex min-h-[44px] items-center text-[10px] uppercase tracking-[0.15em] text-primary/50 transition-colors hover:text-primary"
                    >
                      {isExpanded
                        ? (language === 'it' ? 'Chiudi —' : 'Close —')
                        : (language === 'it' ? 'Dettagli Tecnici +' : 'Technical Details +')}
                    </button>

                    {isExpanded && (
                      <p className="pb-4 text-[15px] leading-relaxed text-foreground/80">
                        {item.description}
                      </p>
                    )}

                    {!isExpanded && (
                      <div className="flex items-center justify-center gap-2 pt-4">
                        {treatments.map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-full transition-all duration-300 ${selectedIndex === i + 1 ? 'h-2 w-2 bg-primary' : 'h-1 w-1 bg-primary/30'}`}
                          />
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-4 text-center text-[10px] uppercase tracking-[0.15em] text-primary/40">
                      {index === treatments.length - 1
                        ? (language === 'it' ? 'Ultima carta — scorri ancora per proseguire' : 'Last card — swipe once more to continue')
                        : (language === 'it' ? 'Scorri per il prossimo trattamento' : 'Swipe for the next treatment')}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedIndex > 0 && (
        <div className="pointer-events-none absolute right-4 top-4 text-[10px] uppercase tracking-[0.2em] text-primary/50">
          {selectedIndex} / {treatments.length}
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
    document.getElementById(`treatment-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="atelier" className="relative">
        <div className="hidden py-24 md:block md:py-32">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary/60">
              The 8-Point Collection
            </p>
            <h2 className="font-cormorant text-3xl font-light tracking-[2px] text-foreground md:text-5xl">
              {t.nav.atelier}
            </h2>
            <p className="font-inter text-[11px] uppercase tracking-[0.2em] text-primary/80">
              {tickerText}
            </p>
          </motion.div>
        </div>

        <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
          {treatments.map((item: TreatmentItem, i: number) => (
            <button
              key={item.id}
              onClick={() => scrollToTreatment(i)}
              className="group flex items-center gap-2"
              aria-label={`Go to ${item.title}`}
            >
              <span
                className={`block h-px transition-all duration-300 ${activeIndex === i ? 'w-8 bg-primary' : 'w-4 bg-primary/20'}`}
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
          <div className="mx-auto max-w-5xl space-y-0">
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
                className="flex min-h-screen items-center border-t border-primary/10 px-12"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="grid w-full grid-cols-12 items-center gap-16 py-16">
                  <div className={`col-span-5 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <TreatmentImage item={item} sizeClass="w-full aspect-[4/5]" numberSize="text-8xl" />
                  </div>
                  <div className={`col-span-7 space-y-6 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <span className="block font-cormorant text-8xl font-light text-primary/10">
                      {item.number}
                    </span>
                    <h3 className="font-inter text-[12px] font-bold uppercase tracking-[0.25em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-cormorant text-2xl italic text-primary/90">{item.subtitle}</p>
                    <button
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      className="flex min-h-[48px] items-center text-[10px] uppercase tracking-[0.15em] text-primary/50 transition-colors hover:text-primary"
                    >
                      {expandedId === item.id
                        ? (language === 'it' ? 'Chiudi —' : 'Close —')
                        : (language === 'it' ? 'Dettagli Tecnici +' : 'Technical Details +')}
                    </button>
                    <p
                      className="max-w-md overflow-hidden text-[16px] leading-relaxed text-foreground/80 transition-all duration-300"
                      style={{
                        maxHeight: expandedId === item.id ? '20rem' : '0',
                        opacity: expandedId === item.id ? 0.85 : 0,
                      }}
                    >
                      {item.description}
                    </p>
                    <button
                      onClick={() => openConsultation(item.title)}
                      className="min-h-[48px] bg-primary px-10 py-4 font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 hover:bg-primary/90"
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