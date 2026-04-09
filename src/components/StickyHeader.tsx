import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

export const StickyHeader = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const mobileOverlay = menuOpen
    ? createPortal(
        <nav
          className="md:hidden flex flex-col"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'hsla(0, 0%, 2%, 0.98)',
            overflowY: 'auto',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center text-foreground/60 z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center justify-center pt-16 pb-8">
            <img
              src="/branding/BF_logo_wordmark_transparent.png"
              alt="Belle Femme Atelier e Accademia"
              style={{ height: '80px', width: 'auto', objectFit: 'contain' }}
            />
            <p
              className="font-cormorant text-xl tracking-[0.15em] mt-3"
              style={{
                background: 'linear-gradient(135deg, #F9EFA2, #EBCF73, #D4AC61, #BB9243, #89753D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Belle Femme
            </p>
            <p className="font-inter text-[9px] tracking-[0.2em] uppercase text-foreground/40 mt-1">
              Atelier e Accademia
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 px-6 flex-1">
            <button
              onClick={() => scrollToSection('atelier')}
              className="font-cormorant text-3xl font-light text-foreground/70 hover:text-primary transition-colors min-h-[56px] flex items-center justify-center tracking-[0.1em]"
            >
              {t.nav.atelier}
            </button>
            <button
              onClick={() => scrollToSection('academy')}
              className="font-cormorant text-3xl font-light text-foreground/70 hover:text-primary transition-colors min-h-[56px] flex items-center justify-center tracking-[0.1em]"
            >
              {t.nav.academy}
            </button>
            <Link
              to="/la-firma"
              onClick={() => setMenuOpen(false)}
              className="font-cormorant text-3xl font-light text-foreground/70 hover:text-primary transition-colors min-h-[56px] flex items-center justify-center tracking-[0.1em]"
            >
              {t.nav.firma}
            </Link>
          </div>

          <div className="px-6 pb-12 pt-6 flex flex-col items-center gap-6 border-t border-primary/10 mt-auto">
            <a
              href="https://wa.me/393516605507"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full font-inter font-bold text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors text-center"
            >
              PRENOTA UNA CONSULENZA
            </a>
            <LanguageSwitcher />
          </div>
        </nav>,
        document.body
      )
    : null;

  return (
    <>
      <header
        className="fixed top-0 w-full z-[70] border-b border-primary/10"
        style={{
          backgroundColor: scrolled ? 'hsla(0, 0%, 0%, 0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background-color 0.6s ease, backdrop-filter 0.6s ease',
        }}
      >
        <div className="container mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-0.5 ml-1 md:ml-0">
            <img
              src="/branding/BF_logo_wordmark_transparent.png"
              alt="Belle Femme Atelier"
              className="h-12 md:h-14 w-auto"
              style={{ objectFit: 'contain' }}
            />
            <span
              className="font-cormorant text-lg md:text-xl tracking-[0.12em] hidden sm:inline"
              style={{
                background: 'linear-gradient(135deg, #F9EFA2, #EBCF73, #D4AC61, #BB9243, #89753D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Belle Femme
            </span>
          </Link>

          <nav className="hidden md:flex gap-10">
            <button
              onClick={() => scrollToSection('atelier')}
              className="text-[11px] tracking-[0.25em] uppercase text-foreground/70 hover:text-primary transition-colors duration-500"
            >
              {t.nav.atelier}
            </button>
            <button
              onClick={() => scrollToSection('academy')}
              className="text-[11px] tracking-[0.25em] uppercase text-foreground/70 hover:text-primary transition-colors duration-500"
            >
              {t.nav.academy}
            </button>
            <Link
              to="/la-firma"
              className="text-[11px] tracking-[0.25em] uppercase text-foreground/70 hover:text-primary transition-colors duration-500"
            >
              {t.nav.firma}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block"><LanguageSwitcher /></div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-foreground/60"
              style={{ position: 'relative', zIndex: 10000 }}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
      {mobileOverlay}
    </>
  );
};
