import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { LocationSheet } from './LocationSheet';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScarcity } from '@/hooks/useScarcity';

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
  const spots = useScarcity();
  const [activeIndex, setActiveIndex] = useState(0);

  const openConsultation = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    setSheetOpen(true);
  };

  const tickerText = language === 'it'
    ? `${spots} Posti Disponibili questa settimana a Varese`
    : `${spots} Spots Available this week in Varese`;

  const scrollToTreatment = (index: number) => {
    const el = document.getElementById(`treatment-${index}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
              The 7-Point Collection
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
          style={{ scrollSnapType: 'y mandatory' }}
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
                <img
                  src={item.imagePath}
                  alt={item.title}
                  className="w-full aspect-[4/5] object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full aspect-[4/5] shimmer-venetian flex items-center justify-center">
                  <span className="font-cormorant text-6xl font-light text-primary/10">{item.number}</span>
                </div>
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
                  onClick={() => openConsultation(item.title)}
                  className="w-full font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-all duration-500 mt-4"
                >
                  {t.treatments.checkAvailability}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

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
                    <img
                      src={item.imagePath}
                      alt={item.title}
                      className="w-full aspect-[4/5] object-cover"
                      loading={index < 2 ? 'eager' : 'lazy'}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full aspect-[4/5] shimmer-venetian flex items-center justify-center">
                      <span className="font-cormorant text-8xl font-light text-primary/10">{item.number}</span>
                    </div>
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
