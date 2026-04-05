import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LocationSheet } from './LocationSheet';
import { useLanguage } from '@/contexts/LanguageContext';

interface Treatment {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
}

const TREATMENTS: Treatment[] = [
  {
    number: '01',
    id: 'raw-stroke',
    title: 'RAW STROKE',
    subtitle: 'Iperrealismo Strutturale',
    description: 'Non un semplice tatuaggio, ma una stratificazione di pigmenti biocompatibili che mima la direzione naturale del pelo. Risultato: armonia visibile anche alla luce diretta del sole.',
    imagePath: '/treatments/01-raw-stroke.jpg',
  },
  {
    number: '02',
    id: 'pigment-restauro',
    title: 'PIGMENT RESTAURO',
    subtitle: 'Laboratorio Correttivo',
    description: 'Gestione dei viraggi cromatici (grigio/rosso) e migrazioni. Promettiamo neutralizzazione e ripristino dei toni naturali, rispettando la biologia della pelle.',
    imagePath: '/treatments/02-pigment-restauro.jpg',
  },
  {
    number: '03',
    id: 'shadow-layer',
    title: 'SHADOW LAYER',
    subtitle: 'Pixelation Avanzata',
    description: 'Una sfumatura tecnica che crea profondità senza saturazione eccessiva. Ideale per chi cerca volume senza l\'effetto "make-up" pesante.',
    imagePath: '/treatments/03-shadow-layer.jpg',
  },
  {
    number: '04',
    id: 'lip-vitality',
    title: 'ANATOMICAL LIP VITALITY',
    subtitle: 'Simmetria Anatomica',
    description: 'Definizione dei contorni e saturazione velata per labbra che appaiono sane e rinvigorite, non rifatte. Focus sulla mucosa e il rispetto dei volumi.',
    imagePath: '/treatments/04-lip-vitality.jpg',
  },
  {
    number: '05',
    id: 'eye-engineering',
    title: 'EYE ENGINEERING',
    subtitle: 'Infracigliare Tecnico',
    description: 'Un sollevamento visivo dello sguardo attraverso una linea ultra-sottile tra le ciglia. Eleganza invisibile per una profondità quotidiana.',
    imagePath: '/treatments/05-eye-engineering.jpg',
  },
  {
    number: '06',
    id: 'lash-architecture',
    title: 'LASH ARCHITECTURE',
    subtitle: 'Integrazione Volumetrica',
    description: 'Progetto di estensione basato sulla biomeccanica dell\'occhio. Utilizziamo mappature personalizzate per sollevare lo sguardo senza appesantire la rima palpebrale.',
    imagePath: '/treatments/06-lash-architecture.jpg',
  },
  {
    number: '07',
    id: 'brow-blueprint',
    title: 'BROW BLUEPRINT',
    subtitle: "L'Architettura Finale",
    description: 'Il progetto totale del volto. Utilizzo della Sezione Aurea per ridisegnare i punti di forza del viso attraverso l\'equilibrio visagistico.',
    imagePath: '/treatments/07-brow-blueprint.jpg',
  },
  {
    number: '08',
    id: 'private-consultation',
    title: 'PRIVATE CONSULTATION',
    subtitle: "Il Primo Passo verso l'Armonia",
    description: 'Ogni percorso Belle Femme inizia con una consulenza personalizzata con Mouna Chabbar — in sede o via WhatsApp. Un\'analisi visagistica del viso, della struttura ossea e delle aspettative. Nessun trattamento senza comprensione.',
    imagePath: '/treatments/08-consultation.jpg',
  },
];

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

  const handleTreatmentCTA = (item: Treatment) => {
    if (item.id === 'private-consultation') {
      const msg = encodeURIComponent('Buongiorno Mouna, vorrei verificare la disponibilità per una consulenza privata.');
      window.open(`https://wa.me/393516605507?text=${msg}`, '_blank');
    } else {
      openConsultation(item.title);
    }
  };

  const tickerText = language === 'it'
    ? 'La Collezione — 8 Trattamenti Esclusivi'
    : 'The Collection — 8 Exclusive Treatments';

  const scrollToTreatment = (index: number) => {
    const el = document.getElementById(`treatment-${index}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const TreatmentImage = ({ item, sizeClass, numberSize }: { item: Treatment; sizeClass: string; numberSize: string }) => {
    const [imgFailed, setImgFailed] = useState(false);
    return (
      <>
        {!imgFailed ? (
          <img
            src={item.imagePath}
            alt={item.title}
            className={`${sizeClass} object-cover`}
            loading={item.number <= '02' ? 'eager' : 'lazy'}
            onError={() => setImgFailed(true)}
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
        {/* Section header */}
        <div className="py-24 md:py-32">
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

        {/* Right-edge progress indicator (desktop only) */}
        <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
          {TREATMENTS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => scrollToTreatment(i)}
              className="group flex items-center gap-2"
              aria-label={`Go to ${t.title}`}
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

        {/* Mobile: snap-scroll stack */}
        <div
          className="md:hidden"
          style={{ scrollSnapType: 'y mandatory', height: '100svh', overflowY: 'scroll', overscrollBehavior: 'contain' }}
        >
          {TREATMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              id={`treatment-${index}`}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              onViewportEnter={() => setActiveIndex(index)}
              viewport={{ once: false, margin: '-40%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col justify-end px-6 pb-8 pt-16 border-t border-primary/10 relative"
              style={{ minHeight: '100svh', scrollSnapAlign: 'start' }}
            >
              {/* Treatment image */}
              <div className="flex-1 flex items-center justify-center mb-8">
                <TreatmentImage item={item} sizeClass="w-full aspect-[4/5]" numberSize="text-6xl" />
              </div>

              {/* Thumb zone — bottom 30% */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-cormorant text-4xl font-light text-primary/20">{item.number}</span>
                  <div>
                    <h3 className="font-inter font-bold text-[11px] tracking-[0.2em] uppercase text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-cormorant italic text-lg text-primary/70 mt-1">{item.subtitle}</p>
                  </div>
                </div>

                {/* Technical detail toggle */}
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="text-[10px] tracking-[0.15em] uppercase text-primary/50 hover:text-primary transition-colors min-h-[44px] flex items-center"
                >
                  {expandedId === item.id ? 'Chiudi −' : 'Dettagli Tecnici +'}
                </button>

                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => handleTreatmentCTA(item)}
                  className="w-full font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-all duration-500 mt-4"
                >
                  {item.id === 'private-consultation'
                    ? 'Verifica Disponibilità Consulenza'
                    : t.treatments.checkAvailability}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile scroll dot indicator */}
        {inSection && (
          <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
            {TREATMENTS.map((_, i) => (
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

        {/* Desktop: natural scroll */}
        <div className="hidden md:block">
          <div className="space-y-0 max-w-5xl mx-auto">
            {TREATMENTS.map((item, index) => (
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
                  {/* Image column */}
                  <div className={`col-span-5 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <TreatmentImage item={item} sizeClass="w-full aspect-[4/5]" numberSize="text-8xl" />
                  </div>

                  {/* Text column */}
                  <div className={`col-span-7 space-y-6 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <span className="font-cormorant text-8xl font-light text-primary/10 block">{item.number}</span>
                    <h3 className="font-inter font-bold text-[12px] tracking-[0.25em] uppercase text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-cormorant italic text-2xl text-primary/80">{item.subtitle}</p>

                    <button
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      className="text-[10px] tracking-[0.15em] uppercase text-primary/50 hover:text-primary transition-colors min-h-[48px] flex items-center"
                    >
                      {expandedId === item.id ? 'Chiudi −' : 'Dettagli Tecnici +'}
                    </button>

                    <AnimatePresence>
                      {expandedId === item.id && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-muted-foreground leading-relaxed max-w-md overflow-hidden"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => handleTreatmentCTA(item)}
                      className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-10 py-4 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                    >
                      {item.id === 'private-consultation'
                        ? 'Verifica Disponibilità Consulenza'
                        : t.treatments.checkAvailability}
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
