import { useLanguage } from '@/contexts/LanguageContext';
import { CourseCard } from './CourseCard';

export const Academy = () => {
  const { t } = useLanguage();

  return (
    <section id="academy" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="heading-luxury text-4xl md:text-5xl text-foreground">
              {t.courses.title}
            </h2>
            <div className="w-16 h-px bg-primary mx-auto" />
            <p className="text-lg text-foreground/60">
              {t.courses.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <CourseCard
              title={t.courses.pmu.title}
              duration={t.courses.pmu.duration}
              description={t.courses.pmu.description}
            />
            <CourseCard
              title={t.courses.microblading.title}
              duration={t.courses.microblading.duration}
              description={t.courses.microblading.description}
            />
            <CourseCard
              title={t.courses.masterclass.title}
              duration={t.courses.masterclass.duration}
              description={t.courses.masterclass.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
