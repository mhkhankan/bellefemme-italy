import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Academy } from '@/components/Academy';
import { Treatments } from '@/components/Treatments';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Academy />
      <Treatments />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
