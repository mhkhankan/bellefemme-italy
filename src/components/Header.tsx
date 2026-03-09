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
    <header className="fixed top-0 w-full z-50 glass-card border-b border-accent/10 border-t-0 border-x-0">
      <div className="container mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h1 className="heading-editorial-bold text-base tracking-[0.15em] text-foreground">
            BELLE FEMME
          </h1>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('academy')}
              className="border-draw text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-accent transition-colors pb-1"
            >
              {t.nav.academy}
            </button>
            <button
              onClick={() => scrollToSection('treatments')}
              className="border-draw text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-accent transition-colors pb-1"
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
