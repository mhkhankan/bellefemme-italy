import { motion } from 'framer-motion';

const WHATSAPP_BASE = 'https://wa.me/393516605507?text=';

const treatments = [
  {
    number: '01',
    title: 'Signature Architectural Brows',
    subtitle: 'L\'Architettura dello Sguardo',
    description: 'Precision mapping for mathematical symmetry. Each brow is designed using the golden ratio — compass-guided architecture that frames the face with structural perfection.',
    whatsappMsg: 'Ciao Mouna, vorrei informazioni sul trattamento Signature Architectural Brows.',
  },
  {
    number: '02',
    title: 'Velvet Lip Blush',
    subtitle: 'Sinfonia di Colore',
    description: 'Natural restoration of contour and tint. A soft-shading technique that recreates the delicate gradient of youthful lips — from subtle blush to sculpted definition.',
    whatsappMsg: 'Ciao Mouna, vorrei informazioni sul trattamento Velvet Lip Blush.',
  },
  {
    number: '03',
    title: 'Melanin Neutralization',
    subtitle: 'Rinascita Cromatica',
    description: 'Specialized color balancing for dark or uneven tones. Advanced pigment correction that harmonizes undertones and restores luminous, even-toned skin.',
    whatsappMsg: 'Ciao Mouna, vorrei informazioni sul trattamento Melanin Neutralization.',
  },
];

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
          <h2 className="font-cormorant text-3xl md:text-5xl font-light text-foreground tracking-wide">
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
              className="grid md:grid-cols-12 gap-8 md:gap-12 items-start"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="font-cormorant text-6xl md:text-7xl font-light text-primary/15">{t.number}</span>
              </div>

              {/* Content */}
              <div className="md:col-span-6 space-y-4">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary/50">{t.subtitle}</p>
                <h3 className="font-cormorant text-2xl md:text-3xl font-light text-foreground">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(t.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-6 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                >
                  Book Consultation
                </a>
              </div>

              {/* Geometric placeholder */}
              <div className="md:col-span-4 flex items-center justify-center">
                <div className="w-full aspect-square max-w-[200px] border border-primary/10 flex items-center justify-center relative">
                  <div className="absolute inset-4 border border-primary/5" />
                  <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary/15">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.3" />
                    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.3" />
                    <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};
