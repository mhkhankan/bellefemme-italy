import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import sealImage from '@/assets/seal.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const StickyHeader = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <header
      className="fixed top-0 w-full z-50 border-b border-primary/10"
      style={{
        backgroundColor: 'hsla(150, 30%, 7%, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="container mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        {/* Logo → always links to Home */}
        <Link to="/" className="flex items-center gap-3">
          <img src={sealImage} alt="Belle Femme" className="w-8 h-8 object-contain" />
          <span className="font-cormorant text-sm tracking-[0.3em] uppercase text-primary hidden sm:inline">
            Belle Femme
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10">
          <button
            onClick={() => scrollToSection('atelier')}
            className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 hover:text-primary transition-colors duration-500"
          >
            {t.nav.atelier}
          </button>
          <button
            onClick={() => scrollToSection('academy')}
            className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 hover:text-primary transition-colors duration-500"
          >
            {t.nav.academy}
          </button>
          <Link
            to="/la-firma"
            className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 hover:text-primary transition-colors duration-500"
          >
            {t.nav.firma}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-foreground/60"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className="md:hidden border-t border-primary/10 px-6 py-6 flex flex-col gap-4"
          style={{ backgroundColor: 'hsla(150, 30%, 7%, 0.95)' }}
        >
          <button
            onClick={() => scrollToSection('atelier')}
            className="text-left text-[11px] tracking-[0.25em] uppercase text-foreground/50 hover:text-primary transition-colors min-h-[44px]"
          >
            {t.nav.atelier}
          </button>
          <button
            onClick={() => scrollToSection('academy')}
            className="text-left text-[11px] tracking-[0.25em] uppercase text-foreground/50 hover:text-primary transition-colors min-h-[44px]"
          >
            {t.nav.academy}
          </button>
          <Link
            to="/la-firma"
            onClick={() => setMenuOpen(false)}
            className="text-[11px] tracking-[0.25em] uppercase text-foreground/50 hover:text-primary transition-colors min-h-[44px] flex items-center"
          >
            {t.nav.firma}
          </Link>
        </nav>
      )}
    </header>
  );
};
