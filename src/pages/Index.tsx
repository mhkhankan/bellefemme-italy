import { CinematicHero } from '@/components/CinematicHero';
import { TreatmentArchitecture } from '@/components/TreatmentArchitecture';
import { AcademySection } from '@/components/AcademySection';
import { SiteFooter } from '@/components/SiteFooter';
import { WhatsAppSticky } from '@/components/WhatsAppSticky';
import { StickyHeader } from '@/components/StickyHeader';
import { CookieConsent } from '@/components/CookieConsent';
import { StructuredData } from '@/components/StructuredData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <StructuredData />
      {/* Phi Grid Blueprint — fixed at 3% opacity */}
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
        <WhatsAppSticky />
        <CookieConsent />
      </div>
    </div>
  );
};

export default Index;
