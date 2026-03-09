import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { BeforeAfterSlider } from './BeforeAfterSlider';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=600',
    alt: 'Belle Femme Academy — Precision work',
  },
  {
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600',
    alt: 'PMU eyeliner artistry',
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600',
    alt: 'Luxury beauty treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=600',
    alt: 'Academy professional atmosphere',
  },
  {
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600',
    alt: 'Lip blush precision',
  },
  {
    src: 'https://images.unsplash.com/photo-1584116831154-50b52d7b49bc?q=80&w=600',
    alt: 'Microblading masterwork',
  },
];

const beforeAfterPairs = [
  {
    before: '/brow-before.jpg',
    after: '/brow-after.jpg',
    label: 'Microblading',
  },
  {
    before: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800',
    after: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800',
    label: 'Lip Blush',
  },
];

export const Gallery = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="divider-gold w-24 mb-6" />
          <h2 className="heading-editorial text-4xl md:text-5xl text-foreground mb-3">
            {t.gallery.title}
          </h2>
          <p className="text-xs tracking-[0.3em] uppercase text-foreground/30">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4 mb-24">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="break-inside-avoid mb-3 md:mb-4 overflow-hidden group relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500 pointer-events-none" />
              {/* Gold accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Before / After sliders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <div className="divider-gold w-16 mb-5" />
          <h3 className="heading-editorial text-2xl md:text-3xl text-foreground">
            {t.gallery.healed}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {beforeAfterPairs.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-xs tracking-[0.25em] uppercase text-accent/60 mb-4">
                {pair.label}
              </p>
              <BeforeAfterSlider
                beforeSrc={pair.before}
                afterSrc={pair.after}
                beforeLabel={t.gallery.beforeLabel}
                afterLabel={t.gallery.afterLabel}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
