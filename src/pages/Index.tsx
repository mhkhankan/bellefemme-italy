import { SplitHero } from '@/components/SplitHero';
import { TreatmentArchitecture } from '@/components/TreatmentArchitecture';
import { Heritage } from '@/components/Heritage';
import { Concierge } from '@/components/Concierge';
import { SiteFooter } from '@/components/SiteFooter';
import { WhatsAppSticky } from '@/components/WhatsAppSticky';
import { StickyHeader } from '@/components/StickyHeader';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <SplitHero />
      <TreatmentArchitecture />
      <Heritage />
      <Concierge />
      <SiteFooter />
      <WhatsAppSticky />
    </div>
  );
};

export default Index;
