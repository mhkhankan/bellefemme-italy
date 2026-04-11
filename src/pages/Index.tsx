import { CinematicHero } from '@/components/CinematicHero';
import { TreatmentArchitecture } from '@/components/TreatmentArchitecture';
import { AcademySection } from '@/components/AcademySection';
import { SiteFooter } from '@/components/SiteFooter';
import { StickyHeader } from '@/components/StickyHeader';
import { CookieConsent } from '@/components/CookieConsent';
import { WhatsAppSticky } from '@/components/WhatsAppSticky';
import { StructuredData } from '@/components/StructuredData';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

window.history.scrollRestoration = 'manual';

const LaFirmaTeaser = () => {
  const { language } = useLanguage();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 md:py-32 relative" style={{ background: 'linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 5%) 50%, hsl(0 0% 0%) 100%)' }}>
      <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center space-y-8">
        <p className="font-inter text-[10px] tracking-[0.4em] uppercase text-primary/60">
          {language === 'it' ? 'La Firma' : 'The Signature'}
        </p>

        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground tracking-[3px]">
          Mouna Chabbar
        </h2>

        <div className="h-px w-12 mx-auto bg-primary/40" />

        <div className="space-y-4 max-w-xl mx-auto">
          <p className="font-cormorant italic text-xl text-primary/90">
            {language === 'it' ? 'Non applica pigmenti. Progetta armonie.' : 'She does not apply pigment. She engineers harmony.'}
          </p>

          <p className="text-sm text-foreground/60 leading-relaxed">
            {language === 'it' ? 'Forma i professionisti che diventeranno il punto di riferimento nel loro territorio.' : 'She trains the professionals who will become the reference point in their territory.'}
          </p>
        </div>

        <div className="space-y-1 text-[11px] tracking-[0.15em] uppercase text-foreground/40">
          <p>Laurea in Belle Arti — Comunicazioni Visive e Graphic Design</p>
          <p>Già Craft Master — AcademyS</p>
          <p>Master Assistant — PhiAcademy</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => scrollToSection('atelier')}
            className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-8 py-4 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            {language === 'it' ? 'Scopri i Trattamenti' : 'Discover Treatments'}
          </button>
          <button
            onClick={() => scrollToSection('academy')}
            className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-8 py-4 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            {language === 'it' ? "Scopri l'Accademia" : 'Discover the Academy'}
          </button>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background relative">
      <StructuredData pageDescription="Dermopigmentazione e Microblading — Master Trainer Mouna Chabbar. Trattamenti esclusivi e formazione professionale · Varese · Milano." />
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/branding/phi-grid-blueprint.svg)',
          backgroundSize: '800px 800px',
          backgroundRepeat: 'repeat',
          opacity: 0.03,
        }}
      />
      <div className="relative z-10">
        <StickyHeader />
        <CinematicHero />
        <TreatmentArchitecture />
        <LaFirmaTeaser />
        <AcademySection />
        <SiteFooter />
        <CookieConsent />
        <WhatsAppSticky />
      </div>
    </div>
  );
};

export default Index;
