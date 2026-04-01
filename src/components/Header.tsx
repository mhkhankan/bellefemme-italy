import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-accent/10 border-t-0 border-x-0">
      <div className="container mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="heading-editorial-bold text-base tracking-[0.15em] text-foreground hover:text-accent transition-colors">
            BELLE FEMME
          </Link>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('atelier')}
              className="border-draw text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-accent transition-colors pb-1"
            >
              {t.nav.atelier}
            </button>
            <button
              onClick={() => scrollToSection('academy')}
              className="border-draw text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-accent transition-colors pb-1"
            >
              {t.nav.academy}
            </button>
            <Link
              to="/la-firma"
              className="border-draw text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-accent transition-colors pb-1"
            >
              {t.nav.firma}
            </Link>
          </nav>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
};
