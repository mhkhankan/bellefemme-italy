import { motion } from 'framer-motion';
import { useState } from 'react';
import { LocationSheet } from './LocationSheet';

const treatments = [
  {
    number: '01',
    title: 'Signature Architectural Brows',
    subtitle: "L'Architettura dello Sguardo",
    description: 'Precision mapping for mathematical symmetry. Each brow is designed using the golden ratio — compass-guided architecture that frames the face with structural perfection.',
    slides: [
      { label: 'Golden Ratio Mapping', icon: 'M20,50 L50,20 L80,50 L50,80 Z' },
      { label: 'Symmetry Analysis', icon: 'M50,10 L50,90 M10,50 L90,50' },
      { label: 'Architectural Strokes', icon: 'M20,30 Q50,10 80,30 M20,70 Q50,90 80,70' },
    ],
  },
  {
    number: '02',
    title: 'Velvet Lip Blush',
    subtitle: 'Sinfonia di Colore',
    description: 'Natural restoration of contour and tint. A soft-shading technique that recreates the delicate gradient of youthful lips — from subtle blush to sculpted definition.',
    slides: [
      { label: 'Contour Design', icon: 'M20,50 Q50,20 80,50 Q50,80 20,50 Z' },
      { label: 'Color Gradient', icon: 'M30,40 L70,40 L70,60 L30,60 Z' },
      { label: 'Soft Shading', icon: 'M25,50 Q50,25 75,50 Q50,75 25,50' },
    ],
  },
  {
    number: '03',
    title: 'Melanin Neutralization',
    subtitle: 'Rinascita Cromatica',
    description: 'Specialized color balancing for dark or uneven tones. Advanced pigment correction that harmonizes undertones and restores luminous, even-toned skin.',
    slides: [
      { label: 'Tone Analysis', icon: 'M50,15 L85,50 L50,85 L15,50 Z' },
      { label: 'Pigment Correction', icon: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,40 L60,60 L40,60 Z' },
      { label: 'Color Harmony', icon: 'M50,20 A30,30 0 1,1 50,80 A30,30 0 1,1 50,20' },
    ],
  },
];

export const TreatmentArchitecture = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');

  const openConsultation = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    setSheetOpen(true);
  };

  return (
    <>
      <section id="atelier" className="py-32 md:py-48">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 md:mb-32"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60 mb-4">Treatment Architecture</p>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light text-foreground tracking-[2px]">
              The <span className="italic text-primary">Atelier</span> Collection
            </h2>
          </motion.div>

          {/* Treatments */}
          <div className="space-y-24 md:space-y-40 max-w-4xl mx-auto">
            {treatments.map((t, i) => (
              <motion.div
                key={t.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                  <div className="md:col-span-2">
                    <span className="font-cormorant text-6xl md:text-7xl font-light text-primary/15">{t.number}</span>
                  </div>
                  <div className="md:col-span-10 space-y-4">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-primary/50">{t.subtitle}</p>
                    <h3 className="font-cormorant text-2xl md:text-3xl font-light text-foreground tracking-[2px]">{t.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                  </div>
                </div>

                {/* Geometric placeholders */}
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible pb-2">
                  {t.slides.map((slide, j) => (
                    <div
                      key={j}
                      className="snap-center shrink-0 w-[200px] md:w-auto aspect-square border border-primary/10 flex flex-col items-center justify-center gap-4 p-6"
                    >
                      <svg viewBox="0 0 100 100" className="w-12 h-12 text-primary/20">
                        <path d={slide.icon} fill="none" stroke="currentColor" strokeWidth="0.8" />
                      </svg>
                      <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground text-center">{slide.label}</p>
                    </div>
                  ))}
                </div>

                {/* Private Consultation button — Director's Rule */}
                <div className="text-center md:text-left md:pl-[calc(16.666%+1rem)]">
                  <button
                    onClick={() => openConsultation(t.title)}
                    className="text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-8 py-3 min-h-[44px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                  >
                    Private Consultation
                  </button>
                </div>

                {/* Gold divider */}
                {i < treatments.length - 1 && (
                  <div className="pt-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  </div>
                )}
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
