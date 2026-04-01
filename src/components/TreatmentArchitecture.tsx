import { motion } from 'framer-motion';
import { useState } from 'react';
import { LocationSheet } from './LocationSheet';
import { useLanguage } from '@/contexts/LanguageContext';

const treatments = [
  {
    number: '01',
    titleKey: 'brows' as const,
  },
  {
    number: '02',
    titleKey: 'lips' as const,
  },
  {
    number: '03',
    titleKey: 'paramedical' as const,
  },
];

export const TreatmentArchitecture = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const { t } = useLanguage();

  const openConsultation = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    setSheetOpen(true);
  };

  return (
    <>
      <section id="atelier" className="py-0">
        {/* Section header */}
        <div className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60 mb-4">Treatment Architecture</p>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light text-foreground tracking-[2px]">
              {t.nav.atelier}
            </h2>
          </motion.div>
        </div>

        {/* Full-viewport scroll-snap treatment blocks on mobile */}
        <div className="md:hidden snap-y snap-mandatory">
          {treatments.map((item) => {
            const data = t.treatmentsPage[item.titleKey];
            return (
              <div
                key={item.number}
                className="snap-start flex flex-col justify-end px-6 pb-8 pt-16 border-t border-primary/10"
                style={{ minHeight: '100svh' }}
              >
                {/* Placeholder for high-end photography */}
                <div className="flex-1 flex items-center justify-center mb-8">
                  <div className="w-full aspect-[4/5] bg-card border border-primary/10 flex items-center justify-center">
                    <span className="font-cormorant text-6xl font-light text-primary/10">{item.number}</span>
                  </div>
                </div>

                {/* Content in thumb zone (bottom 30%) */}
                <div className="space-y-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-primary/50">{data.poetic}</p>
                  <h3 className="font-cormorant text-2xl font-light text-foreground tracking-[2px]">{data.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
                  <button
                    onClick={() => openConsultation(data.name)}
                    className="w-full font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[44px] hover:bg-primary/90 transition-all duration-500 mt-4"
                  >
                    {t.treatments.checkAvailability}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="space-y-40 max-w-4xl mx-auto px-12">
            {treatments.map((item, i) => {
              const data = t.treatmentsPage[item.titleKey];
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-12 gap-12 items-start">
                    <div className="col-span-2">
                      <span className="font-cormorant text-7xl font-light text-primary/15">{item.number}</span>
                    </div>
                    <div className="col-span-10 space-y-4">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-primary/50">{data.poetic}</p>
                      <h3 className="font-cormorant text-3xl font-light text-foreground tracking-[2px]">{data.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
                    </div>
                  </div>

                  {/* High-end photo placeholder */}
                  <div className="aspect-[16/9] bg-card border border-primary/10 flex items-center justify-center">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30">
                      High-Resolution Photography
                    </span>
                  </div>

                  {/* Director's Rule: dedicated CTA per block */}
                  <div className="text-center">
                    <button
                      onClick={() => openConsultation(data.name)}
                      className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-10 py-4 min-h-[44px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                    >
                      {t.treatments.checkAvailability}
                    </button>
                  </div>

                  {/* Gold divider */}
                  {i < treatments.length - 1 && (
                    <div className="pt-8">
                      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    </div>
                  )}
                </motion.div>
              );
            })}
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
