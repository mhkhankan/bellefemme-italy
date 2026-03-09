import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-gold/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="heading-luxury-bold text-xl tracking-tight">
            Belle Femme Academy
          </h1>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection('academy')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {t.nav.academy}
            </button>
            <button
              onClick={() => scrollToSection('treatments')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {t.nav.treatments}
            </button>
          </nav>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
};
