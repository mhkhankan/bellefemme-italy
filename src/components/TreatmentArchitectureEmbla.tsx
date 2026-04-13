import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { BookingSheet } from './BookingSheet';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TreatmentItem } from '@/lib/translations';
import { translations } from '@/lib/translations';

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

const TREATMENT_TESTIMONIALS = [
  { quote_it: 'Ho fatto il tatuaggio alle sopracciglia e alle labbra e sono super soddisfatta! Mouna è un\'artista, è brava, precisa, professionale e soprattutto una persona fantastica. Non potevo scegliere meglio!',
    name: 'Carmen M.', treatment_it: 'Raw Stroke · Nude-Lip Infusion', featured: true },
  { quote_it: 'Mouna è una vera professionista, onesta e disponibile. Davanti alla mia indecisione non ha insistito, dicendo che avevo tutto il tempo per decidere. Alla fine mi sono fidata e non me ne sono pentita.',
    name: 'Giorgia M.', treatment_it: 'Raw Stroke', featured: true },
  { quote_it: 'Dopo 2 anni di indecisione se fare o meno questo trattamento, per caso ho conosciuto Mouna. Subito mi ha messa a mio agio, spiegandomi tutto con calma e professionalità.',
    name: 'Stefania R.', treatment_it: 'Raw Stroke', featured: false },
  { quote_it: 'Sono qui in Italia da 7 anni, e volevo davvero farmi le sopracciglia, ma non riuscivo a trovare qualcuno di cui mi fidassi veramente. Poi ho incontrato Mouna, e da quel giorno non ho avuto più dubbi.',
    name: 'Nilda M.', treatment_it: 'Raw Stroke', featured: false },
  { quote_it: 'Quando passione e competenza lavorano insieme, ci si aspetta un capolavoro... ed è esattamente quello che ho ottenuto. Sopracciglia perfette, risultato naturale e una professionista eccezionale.',
    name: 'Laura L.', treatment_it: 'Raw Stroke', featured: false },
  { quote_it: 'Mouna non è soltanto una professionista, è anche una persona empatica, sa mettersi nei panni dei clienti e cerca di capire cosa vogliono veramente.',
    name: 'Ketty F.', treatment_it: 'Pigment Restauro', featured: false },
  { quote_it: 'Grazie Mouna per la gentilezza e la professionalità. Con la tua abilità mi hai ridato le sopracciglia che avevo perso. Sono molto soddisfatta del risultato.',
    name: 'Leila M.', treatment_it: 'Pigment Restauro', featured: false },
  { quote_it: 'Professionalità, efficienza, precisione, bravissima Mouna, super risultato sia per il microblading che per l\'eyeliner permanente. La consiglio vivamente.',
    name: 'Sonia M.', treatment_it: 'Raw Stroke · Lash-Line Engineering', featured: false },
  { quote_it: 'Ho fatto una vita con delle sopracciglia disastrose, fini e senza una forma ma per paura non mi sono mai decisa. Poi ho conosciuto Mouna e ho capito che era la persona giusta.',
    name: 'Amanda C.', treatment_it: 'Raw Stroke', featured: false },
];

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

const TestimonialBlock = ({ language }: { language: string }) => {
  const featured = TREATMENT_TESTIMONIALS.filter(t => t.featured);
  const secondary = TREATMENT_TESTIMONIALS.filter(t => !t.featured);

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-12">
      <h3 className="font-cormorant text-2xl md:text-3xl font-light text-foreground tracking-[2px] text-center">
        {language === 'it' ? 'Voci delle Clienti' : 'Client Voices'}
      </h3>

      {/* Featured */}
      <div className="space-y-10">
        {featured.map((t, i) => (
          <div key={i} className="text-center space-y-3 max-w-2xl mx-auto">
            <p className="font-cormorant italic text-xl md:text-2xl text-foreground/80 leading-relaxed">
              &ldquo;{t.quote_it}&rdquo;
            </p>
            <p className="font-inter font-bold text-[11px] tracking-[0.15em] uppercase" style={{ color: '#D4AF37' }}>
              {t.name}
            </p>
            <p className="font-inter text-[10px] tracking-[0.1em] uppercase text-foreground/40">
              {t.treatment_it}
            </p>
          </div>
        ))}
      </div>

      {/* Secondary grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {secondary.map((t, i) => (
          <div
            key={i}
            className="p-6 space-y-3"
            style={{ backgroundColor: '#000', border: '1px solid rgba(212,175,55,0.2)' }}
          >
            <p className="font-cormorant italic text-base text-foreground/80 leading-relaxed">
              &ldquo;{t.quote_it}&rdquo;
            </p>
            <p className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase" style={{ color: '#D4AF37' }}>
              {t.name}
            </p>
            <p className="font-inter text-[10px] tracking-[0.1em] uppercase text-foreground/40">
              {t.treatment_it}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* SwipePill — self-contained CSS animation, no Tailwind keyframes needed */
const swipePillKeyframes = `
  @keyframes slideDot {
    0%   { transform: translateX(0); opacity: 1; }
    45%  { transform: translateX(9px); opacity: 1; }
    46%  { transform: translateX(0); opacity: 0; }
    47%  { opacity: 1; }
    100% { transform: translateX(0); opacity: 1; }
  }
`;

const SwipePill = () => (
  <>
    <style>{swipePillKeyframes}</style>
    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5" style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}>
      <span className="font-inter text-[9px] tracking-[0.15em] uppercase" style={{ color: 'rgba(212,175,55,0.8)' }}>
        Scorri
      </span>
      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#D4AF37', animation: 'slideDot 1.8s ease-in-out 3' }} />
    </div>
  </>
);

interface MobileSwiperProps {
  treatments: TreatmentItem[];
  treatmentsIT: TreatmentItem[];
  language: string;
  tickerText: string;
  t: ReturnType<typeof useLanguage>['t'];
  onConsultation: (name: string, nameIT: string) => void;
}

const MobileSwiper = ({ treatments, treatmentsIT, language, tickerText, t, onConsultation }: MobileSwiperProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: 'x',
    loop: false,
    dragFree: false,
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className="md:hidden">
      {/* Horizontal carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {treatments.map((item, idx) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] min-w-0 h-svh flex flex-col"
              >
                {/* Header inside each slide */}
                <div className="flex-shrink-0 px-6 pt-8 pb-4 text-center space-y-2">
                  <h2 className="font-cormorant text-3xl font-light text-foreground tracking-[2px]">
                    {t.nav.atelier}
                  </h2>
                  <p className="font-inter text-[11px] uppercase tracking-[0.2em] text-primary/80">
                    {tickerText}
                  </p>
                </div>

                <div className="flex-1 w-full min-h-0 relative overflow-hidden">
                  <TreatmentImage
                    item={item}
                    sizeClass="h-full w-full"
                    numberSize="text-6xl"
                    imgStyle={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  />
                  {selectedIndex === 0 && idx === 0 && (
                    <SwipePill />
                  )}
                </div>

                {/* Content */}
                <div className="flex-shrink-0 px-5 py-5 space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-cormorant text-3xl font-light text-primary/20">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-inter text-[13px] font-bold uppercase tracking-[0.15em] text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-cormorant text-[20px] italic text-primary/90">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-[13px] leading-relaxed text-foreground/70">
                    {item.description}
                  </p>

                  <button
                    onClick={() => onConsultation(
                      item.title,
                      treatmentsIT.find(ti => ti.id === item.id)?.title ?? item.title
                    )}
                    className="w-full min-h-[48px] bg-primary px-8 py-3 font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                  >
                    {t.treatments.checkAvailability}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots — gold horizontal lines */}
      <div className="flex items-center justify-center gap-2 pt-4">
        {treatments.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className="py-3 px-1 flex items-center justify-center"
            aria-label={`Go to treatment ${i + 1}`}
          >
            <div className={`h-px transition-all duration-300 ${
              selectedIndex === i ? 'w-6 bg-primary' : 'w-3 bg-primary/30'
            }`} />
          </button>
        ))}
      </div>

      {/* Mobile testimonials */}
      <TestimonialBlock language={language} />
    </div>
  );
};

export const TreatmentArchitecture = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedTreatmentIT, setSelectedTreatmentIT] = useState('');
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const treatments = t.treatments.items;
  const treatmentsIT = translations.it.treatments.items;

  const openConsultation = (treatmentName: string, treatmentNameIT: string) => {
    setSelectedTreatment(treatmentName);
    setSelectedTreatmentIT(treatmentNameIT);
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
        <div className="hidden py-16 md:block md:py-20">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center"
          >
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
          treatmentsIT={treatmentsIT}
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
                    <p className="max-w-md text-[16px] leading-relaxed text-foreground/80">
                      {item.description}
                    </p>
                    <button
                      onClick={() => openConsultation(
                        item.title,
                        treatmentsIT.find(ti => ti.id === item.id)?.title ?? item.title
                      )}
                      className="min-h-[48px] bg-primary px-10 py-4 font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 hover:bg-primary/90"
                    >
                      {t.treatments.checkAvailability}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop testimonials */}
          <TestimonialBlock language={language} />
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <BookingSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        mode="treatment"
        itemName={selectedTreatment}
        itemNameIT={selectedTreatmentIT}
      />
    </>
  );
};
