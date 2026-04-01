import { motion } from 'framer-motion';
import { useRef } from 'react';

const WHATSAPP_BASE = 'https://wa.me/393516605507?text=';

const treatments = [
  {
    number: '01',
    title: 'Signature Architectural Brows',
    subtitle: "L'Architettura dello Sguardo",
    description: 'Precision mapping for mathematical symmetry. Each brow is designed using the golden ratio — compass-guided architecture that frames the face with structural perfection.',
    whatsappMsg: 'Ciao Mouna, vorrei informazioni sul trattamento Signature Architectural Brows.',
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
    whatsappMsg: 'Ciao Mouna, vorrei informazioni sul trattamento Velvet Lip Blush.',
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
    whatsappMsg: 'Ciao Mouna, vorrei informazioni sul trattamento Melanin Neutralization.',
    slides: [
      { label: 'Tone Analysis', icon: 'M50,15 L85,50 L50,85 L15,50 Z' },
      { label: 'Pigment Correction', icon: 'M30,30 L70,30 L70,70 L30,70 Z M40,40 L60,40 L60,60 L40,60 Z' },
      { label: 'Color Harmony', icon: 'M50,20 A30,30 0 1,1 50,80 A30,30 0 1,1 50,20' },
    ],
  },
];

const CarouselRow = ({ slides }: { slides: typeof treatments[0]['slides'] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible pb-2"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className="snap-center shrink-0 w-[200px] md:w-auto aspect-square border border-primary/10 flex flex-col items-center justify-center gap-4 p-6"
        >
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-primary/20">
            <path d={slide.icon} fill="none" stroke="currentColor" strokeWidth="0.8" />
          </svg>
          <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground text-center">{slide.label}</p>
        </div>
      ))}
    </div>
  );
};

export const TreatmentArchitecture = () => {
  return (
    <section className="py-32 md:py-48">
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
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-cormorant text-6xl md:text-7xl font-light text-primary/15">{t.number}</span>
                </div>

                {/* Content */}
                <div className="md:col-span-10 space-y-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-primary/50">{t.subtitle}</p>
                  <h3 className="font-cormorant text-2xl md:text-3xl font-light text-foreground tracking-[2px]">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                  <a
                    href={`${WHATSAPP_BASE}${encodeURIComponent(t.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-6 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                  >
                    Private Consultation
                  </a>
                </div>
              </div>

              {/* Swipe Carousel (mobile) / Grid (desktop) */}
              <CarouselRow slides={t.slides} />

              {/* Gold divider between treatments */}
              {i < treatments.length - 1 && (
                <div className="pt-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};
