import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export const Treatments = () => {
  const { t } = useLanguage();

  const treatments = [
    t.treatments.microblading,
    t.treatments.lipBlush,
    t.treatments.plasmaPen,
  ];

  return (
    <section id="treatments" className="relative py-32 overflow-hidden">
      {/* Watermark */}
      <div className="watermark absolute top-1/2 right-0 text-[12vw] leading-none -translate-y-1/2 translate-x-[20%]">
        BEAUTY
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Right-aligned heading for asymmetry */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 md:col-start-8 text-right"
          >
            <div className="divider-gold w-16 ml-auto mb-6" />
            <h2 className="heading-editorial text-4xl md:text-6xl text-foreground mb-4">
              {t.treatments.title}
            </h2>
            <p className="text-lg text-foreground/40 font-light tracking-wide">
              {t.treatments.subtitle}
            </p>
          </motion.div>

          {/* Treatment items - left column */}
          <div className="md:col-span-7 md:row-start-1 md:col-start-1 space-y-4">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="glass-card group cursor-default"
              >
                <div className="p-8 flex items-center justify-between">
                  <h3 className="heading-editorial text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors duration-500">
                    {treatment}
                  </h3>
                  <div className="w-8 h-px bg-accent/30 group-hover:w-16 group-hover:bg-accent transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
