import { useLanguage } from '@/contexts/LanguageContext';
import { CourseCard } from './CourseCard';
import { motion } from 'framer-motion';

export const Academy = () => {
  const { t } = useLanguage();

  return (
    <section id="academy" className="relative py-32 overflow-hidden">
      {/* Watermark */}
      <div className="watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] whitespace-nowrap">
        ACADEMY
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Asymmetric header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <div className="divider-gold w-16 mb-6" />
          <h2 className="heading-editorial text-4xl md:text-6xl text-foreground mb-4">
            {t.courses.title}
          </h2>
          <p className="text-lg text-foreground/40 font-light tracking-wide">
            {t.courses.subtitle}
          </p>
        </motion.div>

        {/* Staggered asymmetric grid */}
        <div className="grid md:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <CourseCard
              href="/course/pmu"
              title={t.courses.pmu.title}
              duration={t.courses.pmu.duration}
              description={t.courses.pmu.description}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-4 md:mt-16"
          >
            <CourseCard
              title={t.courses.microblading.title}
              duration={t.courses.microblading.duration}
              description={t.courses.microblading.description}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-3 md:mt-32"
          >
            <CourseCard
              title={t.courses.masterclass.title}
              duration={t.courses.masterclass.duration}
              description={t.courses.masterclass.description}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
