import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { StickyHeader } from '@/components/StickyHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { CookieConsent } from '@/components/CookieConsent';
import { StructuredData } from '@/components/StructuredData';

type FilterTab = 'tutti' | 'congressi' | 'formazione' | 'certificazioni' | 'eventi';

interface ScenaCard {
  id: string;
  date: string;
  tag: FilterTab;
  geo: string;
  title_it: string;
  title_en: string;
  desc_it: string;
  desc_en: string;
  image: string;
  alt: string;
}

const SCENA_CARDS: ScenaCard[] = [
  {
    id: 'venezia-wlc-2021',
    date: '2021',
    tag: 'congressi',
    geo: 'Venezia',
    title_it: 'Giudice PMU — World Lash Championship Venezia',
    title_en: 'PMU Judge — World Lash Championship Venice',
    desc_it: '2021 — Giudice ufficiale PMU al World Lash Championship Venice 2021 — Online Edition. Presenza internazionale nella competizione più importante del settore ciglia e dermopigmentazione.',
    desc_en: '2021 — Official PMU judge at the World Lash Championship Venice 2021 — Online Edition. International presence at the most important lash and PMU competition.',
    image: '/la-scena/giudice-internazionale-world-lash-championship-venezia-2021.jpg',
    alt: 'Mouna Chabbar — PMU Judge World Lash Championship Venezia 2021',
  },
  {
    id: 'turchia-judge',
    date: '2021',
    tag: 'congressi',
    geo: 'Turchia',
    title_it: 'Giudice Internazionale — Turchia',
    title_en: 'International Judge — Turkey',
    desc_it: '2021 — Giudice ufficiale nella competizione internazionale PMU in Turchia. Cinque paesi. Un metodo. Una firma riconosciuta ovunque.',
    desc_en: '2021 — Official judge at the international PMU competition in Turkey. Five countries. One method. A signature recognised everywhere.',
    image: '/la-scena/giudice-internazionale-pmu-turchia-cappadocia-2022.jpg',
    alt: 'Mouna Chabbar — Giudice Internazionale Turchia',
  },
  {
    id: 'romania-judge',
    date: '2022',
    tag: 'congressi',
    geo: 'Romania',
    title_it: 'Giudice Internazionale — Romania',
    title_en: 'International Judge — Romania',
    desc_it: '2022 — Membro di giuria alla competizione tecnica internazionale in Romania. Standard di valutazione portati dalla Lombardia all\'Europa dell\'Est.',
    desc_en: '2022 — Jury member at the international technical competition in Romania. Evaluation standards brought from Lombardy to Eastern Europe.',
    image: '/la-scena/giudice-internazionale-pmu-romania-dimostrazione-live.jpg',
    alt: 'Mouna Chabbar — Giudice Internazionale Romania',
  },
  {
    id: 'venezia-judge',
    date: '2022',
    tag: 'congressi',
    geo: 'Venezia',
    title_it: 'Giudice Internazionale — Venezia',
    title_en: 'International Judge — Venice',
    desc_it: '2022 — Giudice tecnico nella competizione internazionale di Venezia. Presenza costante nei palcoscenici più prestigiosi del settore PMU europeo.',
    desc_en: '2022 — Technical judge at the international competition in Venice. Consistent presence on the most prestigious stages of European PMU.',
    image: '/la-scena/giudice-internazionale-pmu-venezia-architettura-volto.jpg',
    alt: 'Mouna Chabbar — Giudice Internazionale Venezia',
  },
  {
    id: 'pmu-masters-2021',
    date: '2021',
    tag: 'eventi',
    geo: 'Internazionale',
    title_it: 'PMU Masters — Feature Mouna Chabbar',
    title_en: 'PMU Masters — Mouna Chabbar Feature',
    desc_it: '2021 — Mouna Chabbar protagonista su PMU Masters con il format "Why Microblading?" — riconoscimento internazionale del suo metodo e della sua visione tecnica.',
    desc_en: '2021 — Mouna Chabbar featured on PMU Masters with the "Why Microblading?" format — international recognition of her method and technical vision.',
    image: '/la-scena/pmu-masters-feature-mouna-chabbar-microblading-2021.jpg',
    alt: 'Mouna Chabbar — PMU Masters Feature Microblading 2021',
  },
  {
    id: 'torino-setup-2022',
    date: '2022',
    tag: 'formazione',
    geo: 'Torino',
    title_it: 'Residenza Formativa — Torino',
    title_en: 'Training Residency — Turin',
    desc_it: '2022 — Allestimento della residenza formativa Horus Academy a Torino. Postazioni individuali, kit personalizzati, massimo 4 corsiste. Il metodo Belle Femme nel dettaglio.',
    desc_en: '2022 — Training residency setup at Horus Academy Turin. Individual workstations, personalised kits, maximum 4 students. The Belle Femme method in detail.',
    image: '/la-scena/residenza-formativa-horus-academy-torino-2022.jpg',
    alt: 'Residenza formativa Belle Femme — Horus Academy Torino 2022',
  },
  {
    id: 'horus-torino',
    date: '2024',
    tag: 'formazione',
    geo: 'Torino',
    title_it: 'Residenza Formativa — Torino',
    title_en: 'Training Residency — Turin',
    desc_it: '2024 — Sessione di formazione professionale avanzata a Torino. Trasmissione diretta del metodo Belle Femme a una nuova generazione di artisti PMU.',
    desc_en: '2024 — Advanced professional training session in Turin. Direct transmission of the Belle Femme method to a new generation of PMU artists.',
    image: '/branding/bf-placeholder.jpg',
    alt: 'Belle Femme formazione Torino — Horus',
  },
  {
    id: 'calabria-corso-privato-2020',
    date: '2020',
    tag: 'formazione',
    geo: 'Calabria',
    title_it: 'Corso Privato — Calabria',
    title_en: 'Private Course — Calabria',
    desc_it: '2020 — Sessione di mentorship privata in Calabria. Supervisione diretta della tecnica blade su pelle sintetica — il trasferimento del metodo AcademyS nella sua forma più pura.',
    desc_en: '2020 — Private mentorship session in Calabria. Direct supervision of blade technique on synthetic skin — the transfer of the AcademyS method in its purest form.',
    image: '/la-scena/formazione-corso-privato-academys-calabria-2020.jpg',
    alt: 'Corso privato Belle Femme Academy — Calabria 2020',
  },
];

const FILTERS: { key: FilterTab; label_it: string; label_en: string }[] = [
  { key: 'tutti', label_it: 'Tutti', label_en: 'All' },
  { key: 'congressi', label_it: 'Congressi', label_en: 'Congresses' },
  { key: 'formazione', label_it: 'Formazione', label_en: 'Training' },
  { key: 'certificazioni', label_it: 'Certificazioni', label_en: 'Certifications' },
  { key: 'eventi', label_it: 'Eventi', label_en: 'Events' },
];

const LaScena = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterTab>('tutti');

  const filtered = activeFilter === 'tutti'
    ? SCENA_CARDS
    : SCENA_CARDS.filter(c => c.tag === activeFilter);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <StructuredData
        path="/la-scena"
        pageTitle="La Scena — Belle Femme · Congressi, Formazione, Certificazioni"
        pageDescription="La cronaca del metodo Belle Femme — congressi internazionali, residenze formative, certificazioni. Mouna Chabbar, giudice internazionale PMU."
      />
      <StickyHeader />

      {/* Hero */}
      <section className="relative" style={{ minHeight: '60svh', backgroundColor: 'hsl(0 0% 4%)' }}>
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6" style={{ minHeight: '60svh' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-5"
          >
            <p className="font-inter text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(212,175,55,0.75)' }}>
              Belle Femme · Moments
            </p>
            <h1 className="font-cormorant text-5xl md:text-7xl font-light tracking-[4px]" style={{ color: '#F5F5F5' }}>
              {language === 'it' ? 'La Scena' : 'The Scene'}
            </h1>
            <div className="h-px w-12 mx-auto" style={{ backgroundColor: 'rgba(212,175,55,0.5)' }} />
            <p className="font-cormorant italic text-xl md:text-2xl max-w-xl mx-auto" style={{ color: 'rgba(245,245,245,0.7)' }}>
              {language === 'it'
                ? 'La cronaca di un metodo che si misura sul campo — nei congressi internazionali, nelle residenze formative, nel momento in cui un attestato cambia mani.'
                : 'The chronicle of a method measured in the field — at international congresses, in training residencies, in the moment a certification changes hands.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section style={{ backgroundColor: '#000' }} className="py-6">
        <div className="max-w-5xl mx-auto px-6 flex gap-3 overflow-x-auto pb-2 justify-center flex-wrap">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className="flex-shrink-0 font-inter text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300"
              style={{
                color: activeFilter === f.key ? '#000' : 'rgba(212,175,55,0.75)',
                backgroundColor: activeFilter === f.key ? '#D4AF37' : 'transparent',
                border: '1px solid rgba(212,175,55,0.3)',
              }}
            >
              {language === 'it' ? f.label_it : f.label_en}
            </button>
          ))}
        </div>
      </section>

      {/* Cards feed */}
      <section style={{ backgroundColor: '#000' }} className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="space-y-12">
            {filtered.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                style={{ border: '1px solid rgba(212,175,55,0.12)' }}
              >
                {/* Image with tag + geo overlay */}
                <div className="relative" style={{ aspectRatio: '16/9' }}>
                  <img src={card.image} alt={card.alt} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />

                  {/* Tag + geo */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <span className="font-inter text-[9px] tracking-[0.2em] uppercase px-2 py-1" style={{ backgroundColor: 'rgba(212,175,55,0.9)', color: '#000' }}>
                      {language === 'it'
                        ? FILTERS.find(f => f.key === card.tag)?.label_it
                        : FILTERS.find(f => f.key === card.tag)?.label_en}
                    </span>
                    <span className="font-inter text-[9px] tracking-[0.15em] uppercase" style={{ color: 'rgba(245,245,245,0.7)' }}>
                      {card.geo}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3" style={{ backgroundColor: '#0A0A0A' }}>
                  <div className="h-px w-8" style={{ backgroundColor: 'rgba(212,175,55,0.3)' }} />
                  <h3 className="font-cormorant text-xl font-light" style={{ color: '#F5F5F5' }}>
                    {language === 'it' ? card.title_it : card.title_en}
                  </h3>
                  <p className="font-cormorant italic text-sm leading-relaxed" style={{ color: 'rgba(245,245,245,0.6)' }}>
                    {language === 'it' ? card.desc_it : card.desc_en}
                  </p>
                </div>
              </motion.div>
            ))}

            {filtered.length === 0 && (
              <p className="text-center font-cormorant italic text-lg" style={{ color: 'rgba(245,245,245,0.5)' }}>
                {language === 'it' ? 'Nessun contenuto in questa categoria.' : 'No content in this category.'}
              </p>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
      <CookieConsent />
    </div>
  );
};

export default LaScena;
