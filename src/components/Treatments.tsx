import { useLanguage } from '@/contexts/LanguageContext';

export const Treatments = () => {
  const { t } = useLanguage();

  const treatments = [
    t.treatments.microblading,
    t.treatments.lipBlush,
    t.treatments.plasmaPen,
  ];

  return (
    <section id="treatments" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="heading-luxury text-4xl md:text-5xl text-foreground">
              {t.treatments.title}
            </h2>
            <div className="w-16 h-px bg-primary mx-auto" />
            <p className="text-lg text-foreground/60">
              {t.treatments.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-card border-l-2 border-primary pl-8 py-6 hover:bg-secondary/50 transition-all duration-300"
              >
                <h3 className="heading-luxury text-xl text-foreground">
                  {treatment}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
