import { motion } from 'framer-motion';
import { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { BookingSheet } from './BookingSheet';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TreatmentItem } from '@/lib/translations';
import { translations } from '@/lib/translations';
import TruncatedQuote from './TruncatedQuote';

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
  'shadow-layer': 'Ombre powder brows Varese — Shadow Layer pixelation',
  'lip-vitality': 'PMU labbra Varese — Nude-Lip Infusion acquerello',
  'eye-engineering': 'Eyeliner permanente Varese — Lash-Line Engineering',
  'lash-architecture': 'Laminazione ciglia Varese — Gaze Sculpting Kerafill',
  'brow-blueprint': 'Architettura sopracciglia Varese — Brow Architecture Sezione Aurea',
  'lash-sculpting': 'Extension ciglia su misura Varese — Lash Sculpting volumetria',
};

const POSITION_MAP: Record<string, string> = {
  'raw-stroke': 'center 30%',
  'pigment-restauro': 'center center',
  'shadow-layer': 'center center',
  'lip-vitality': 'center 40%',
  'eye-engineering': 'center center',
  'lash-architecture': 'center center',
  'brow-blueprint': 'center 45%',
  'lash-sculpting': 'center center',
};

const TREATMENT_EOS_TESTIMONIALS = [
  {
    quote_it: 'Ho fatto il tatuaggio alle sopracciglia e alle labbra e sono super soddisfatta! Mouna è gentile, precisa e molto attenta all\'igiene. Mi ha spiegato tutto nei dettagli e mi ha aiutato a scegliere una forma naturale e adatta al mio viso. Dopo il secondo ritocco, il colore si è stabilizzato benissimo e adesso mi sveglio ogni giorno con le sopracciglia perfette! Consiglio vivamente a chi vuole un risultato elegante e duraturo. Ho fatto poi il tatuaggio labbra effetto naturale e ne sono davvero felice! Il colore è molto naturale, le labbra sono più piene e definite, senza dover usare il rossetto ogni giorno. Mouna è disponibile anche nel post, rispondendo a tutte le mie domande. Contentissima e soddisfatta del percorso fatto!!!',
    quote_en: 'I had my eyebrows and lips tattooed and I am absolutely thrilled! Mouna is kind, precise and very attentive to hygiene. She explained everything in detail and helped me choose a natural shape suited to my face. After the second touch-up, the colour settled beautifully and now I wake up every day with perfect brows! Highly recommend to anyone wanting an elegant, lasting result. I also had the natural-effect lip tattoo and I am truly happy! The colour is very natural, my lips are fuller and more defined without having to wear lipstick every day. Mouna is available even afterwards, answering all my questions. Delighted and satisfied with the whole journey!!!',
    name: 'Carmen M.',
    source_it: 'Fonte: Recensione Facebook · 1 di 39',
    source_en: 'Source: Facebook Review · 1 of 39',
  },
  {
    quote_it: 'Mouna non è soltanto una professionista, è anche una persona empatica, sa metterti a proprio agio, comprende le tue esigenze e trova la soluzione adatta al tuo specifico problema o desiderio. Io l\'ho trovata per caso e sono stata davvero fortunata, la consiglio in quanto per quanto riguarda la mia esperienza ha saputo fare un Miracolo, avevo già presenti vecchi lavori e lei mi ha donato un viso nuovo, non affidatevi a chiunque!! Realista, precisa, meticolosa, delicata, ha un senso estetico perfetto, questa è Mouna.',
    quote_en: 'Mouna is not just a professional, she is also an empathetic person who knows how to put you at ease, understands your needs and finds the right solution for your specific problem or desire. I found her by chance and I was truly lucky — for my experience she worked a Miracle. I already had old work done and she gave me a new face. Do not trust just anyone!! Realistic, precise, meticulous, delicate, with a perfect aesthetic sense — this is Mouna.',
    name: 'Ketty F.',
    source_it: 'Fonte: Recensione Facebook · 2 di 39',
    source_en: 'Source: Facebook Review · 2 of 39',
  },
  {
    quote_it: 'Quando passione e competenza lavorano insieme, ci si aspetta un capolavoro... ed è proprio quello che ho ottenuto con la tecnica Microblanding realizzata da Mouna. Una vera professionista, una maestra sul suo campo, persona onesta e disponibile anche solo per una consulenza. Lavoro realizzato in mattinata, è stata messa a dura prova su un vecchio tatuaggio ormai sbiadito e storto che mi chiudeva lo sguardo. Eccellente. Mani d\'oro. Sono contentissima del risultato, non potevo aspettarmi di meglio. TOP!',
    quote_en: 'When passion and competence work together, you expect a masterpiece... and that is exactly what I got with the Microblanding technique by Mouna. A true professional, a master in her field, honest and available even just for a consultation. Work completed in the morning — she was put to the test on an old faded and crooked tattoo that was closing off my gaze. Excellent. Golden hands. I am absolutely thrilled with the result, I could not have hoped for better. TOP!',
    name: 'Laura L.',
    source_it: 'Fonte: Recensione Facebook · 3 di 39',
    source_en: 'Source: Facebook Review · 3 of 39',
  },
];

const TreatmentTestimonialsEOS = ({ language }: { language: string }) => (
  <div style={{ backgroundColor: '#0A0A0A' }} className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
    <div className="text-center space-y-4 mb-12">
      <p className="font-inter text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(212,175,55,0.75)' }}>
        Belle Femme · Atelier
      </p>
      <h3 className="font-cormorant text-2xl md:text-3xl font-light tracking-[2px]" style={{ color: '#F5F5F5' }}>
        {language === 'it' ? 'Esperienze Dirette' : 'Direct Experiences'}
      </h3>
      <div className="h-px w-12 mx-auto" style={{ backgroundColor: 'rgba(212,175,55,0.4)' }} />
    </div>

    <div className="space-y-8">
      {TREATMENT_EOS_TESTIMONIALS.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          className="relative p-6 md:p-8"
          style={{ backgroundColor: '#0A0A0A', borderLeft: '3px solid #D4AF37', border: '1px solid rgba(212,175,55,0.12)', borderLeftWidth: '3px', borderLeftColor: '#D4AF37' }}
        >
          <span className="absolute font-cormorant pointer-events-none" style={{ fontSize: '56px', color: 'rgba(212,175,55,0.08)', top: '12px', left: '20px' }}>"</span>
          <TruncatedQuote
            text={language === 'it' ? t.quote_it : t.quote_en}
            maxLines={3}
            language={language}
          />
          <div style={{ borderTop: '1px solid rgba(212,175,55,0.1)', marginTop: '18px', paddingTop: '14px' }}>
            <p className="font-inter font-semibold text-[11px] uppercase" style={{ letterSpacing: '0.18em', color: '#D4AF37' }}>
              {t.name}
            </p>
            <a
              href="https://www.facebook.com/bellefemme.varese/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter uppercase hover:opacity-80 transition-opacity"
              style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(212,175,55,0.45)' }}
            >
              {language === 'it' ? t.source_it : t.source_en}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

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
      style={{ ...imgStyle, objectPosition: POSITION_MAP[item.id] || 'center center' }}
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
    dragFree: true,
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
                className="flex-[0_0_90%] min-w-0 flex flex-col"
                style={{ height: 'calc(100svh - 60px)', marginTop: '60px' }}
              >
                {/* Header inside each slide */}
                <div className="flex-shrink-0 px-6 pt-3 pb-2 text-center space-y-2">
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
                </div>

                {/* Content */}
                <div className="flex-shrink-0 px-5 py-3 space-y-2.5">
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
                    className="w-full min-h-[44px] bg-primary px-8 py-2.5 font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                  >
                    {t.treatments.checkAvailability}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile testimonials */}
      <TreatmentTestimonialsEOS language={language} />
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
          <TreatmentTestimonialsEOS language={language} />
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
