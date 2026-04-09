import { CinematicHero } from '@/components/CinematicHero';
import { TreatmentArchitecture } from '@/components/TreatmentArchitecture';
import { AcademySection } from '@/components/AcademySection';
import { SiteFooter } from '@/components/SiteFooter';
import { StickyHeader } from '@/components/StickyHeader';
import { CookieConsent } from '@/components/CookieConsent';
import { WhatsAppSticky } from '@/components/WhatsAppSticky';
import { StructuredData } from '@/components/StructuredData';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

window.history.scrollRestoration = 'manual';

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
        <AcademySection />
        <SiteFooter />
        <CookieConsent />
        <WhatsAppSticky />
      </div>
    </div>
  );
};

export default Index;
