import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="heading-luxury text-5xl md:text-7xl leading-tight text-foreground">
            {t.hero.title}
          </h2>
          
          <div className="w-24 h-px bg-primary mx-auto" />
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('academy')}
              className="px-8 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t.hero.viewCourses}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('treatments')}
              className="px-8 py-6 text-base border-primary text-foreground hover:bg-primary/5"
            >
              {t.hero.bookTreatment}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
