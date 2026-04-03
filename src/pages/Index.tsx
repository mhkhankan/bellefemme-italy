import { CinematicHero } from '@/components/CinematicHero';
import { TreatmentArchitecture } from '@/components/TreatmentArchitecture';
import { AcademySection } from '@/components/AcademySection';
import { SiteFooter } from '@/components/SiteFooter';
import { WhatsAppSticky } from '@/components/WhatsAppSticky';
import { StickyHeader } from '@/components/StickyHeader';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Phi Grid Blueprint — fixed at 5% opacity */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/branding/phi-grid-blueprint.svg)',
          backgroundSize: '800px 800px',
          backgroundRepeat: 'repeat',
          opacity: 0.05,
        }}
      />
      <div className="relative z-10">
        <StickyHeader />
        <CinematicHero />
        <TreatmentArchitecture />
        <AcademySection />
        <SiteFooter />
        <WhatsAppSticky />
      </div>
    </div>
  );
};

export default Index;
