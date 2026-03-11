import { useLanguage } from '@/contexts/LanguageContext';
import { CourseCard } from './CourseCard';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const courseKeys = [
  { key: 'pmu', href: '/course/pmu', span: 'md:col-span-6' },
  { key: 'microblading', href: '/course/microblading', span: 'md:col-span-6' },
  { key: 'ombre_powder', href: '/course/ombre-powder', span: 'md:col-span-4' },
  { key: 'ombre_lips', href: '/course/ombre-lips', span: 'md:col-span-4' },
  { key: 'eyeliner', href: '/course/eyeliner', span: 'md:col-span-4' },
  { key: 'masterclass_brows', href: '/course/masterclass-brows', span: 'md:col-span-4' },
  { key: 'masterclass_lashes', href: '/course/masterclass-lashes', span: 'md:col-span-4' },
  { key: 'masterclass_lamination', href: '/course/masterclass-lamination', span: 'md:col-span-4' },
] as const;

export const Academy = () => {
  const { t } = useLanguage();

  return (
    <section id="academy" className="relative py-32 overflow-hidden">
      {/* Watermark */}
      <div className="watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] whitespace-nowrap">
        ACADEMY
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
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

        {/* Course Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {courseKeys.map(({ key, href, span }, i) => {
            const course = t.courses[key] as { title: string; duration: string; description: string };
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={span}
              >
                <CourseCard
                  href={href}
                  title={course.title}
                  duration={course.duration}
                  description={course.description}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Certification Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex items-start gap-3 glass-card p-6 max-w-2xl"
        >
          <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <p className="text-xs text-foreground/50 tracking-wide leading-relaxed">
            {t.courses.certNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
