import { CinematicHero } from '@/components/CinematicHero';
import { TreatmentArchitecture } from '@/components/TreatmentArchitectureEmbla';
import { AcademySection } from '@/components/AcademySection';
import { DoveOperiamo } from '@/components/DoveOperiamo';
import { SiteFooter } from '@/components/SiteFooter';
import { StickyHeader } from '@/components/StickyHeader';
import { CookieConsent } from '@/components/CookieConsent';
import { StructuredData } from '@/components/StructuredData';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

window.history.scrollRestoration = 'manual';

const HOME_CLOSING_TESTIMONIALS = [
  {
    quote_it: 'Ho fatto una vita con delle sopracciglia disastrose, fini e senza una forma ma poi, per caso, ho trovato Mouna e anche se un po\' incerta (vista la mia inesperienza nel settore), ho voluto provare a fare una consulenza. Lei è stata gentilissima e molto professionale. Mi ha trasmesso subito fiducia e ha saputo darmi ciò che chiedevo. Sopracciglia perfette. Una mano delicata ma molto precisa. Sono molto soddisfatta del suo lavoro. È una persona eccezionale e non solo professionalmente. La consiglio vivamente!',
    quote_en: 'I spent my whole life with disastrous eyebrows, thin and shapeless, but then by chance I found Mouna and even though I was a little uncertain (given my inexperience in the field), I decided to try a consultation. She was extremely kind and very professional. She immediately inspired confidence and gave me exactly what I asked for. Perfect brows. A delicate but very precise touch. I am very satisfied with her work. She is an exceptional person, not only professionally. Highly recommended!',
    name: 'Amanda C.',
    source_it: 'Fonte: Recensione Facebook · 5 di 39',
    source_en: 'Source: Facebook Review · 5 of 39',
  },
  {
    quote_it: 'Sono qui in Italia da 7 anni, e volevo davvero farmi le sopracciglia, ma non riuscivo a trovare un professionista che soddisfacesse le mie aspettative. Quando ho trovato Mouna, ho pensato subito di sì. Mouna ha conquistato la mia fiducia, il suo lavoro è perfetto, è bravissima e gentile, è molto precisa e attenta. Sono davvero felice con il risultato. Grazie Mouna',
    quote_en: 'I have been here in Italy for 7 years, and I really wanted to have my eyebrows done, but I could not find a professional who met my expectations. When I found Mouna, I immediately thought yes. Mouna earned my trust, her work is perfect, she is very skilled and kind, very precise and attentive. I am truly happy with the result. Thank you Mouna',
    name: 'Nilda M.',
    source_it: 'Fonte: Recensione Facebook · 6 di 39',
    source_en: 'Source: Facebook Review · 6 of 39',
  },
  {
    quote_it: 'Professionalità, efficienza, precisione, bravissima Mouna, super risultato sia con microblading sopracciglia che con eyeliner semipermanente occhi, risultato eccellente.',
    quote_en: 'Professionalism, efficiency, precision — excellent Mouna, superb result both with eyebrow microblading and permanent eyeliner, excellent outcome.',
    name: 'Sonia M.',
    source_it: 'Fonte: Recensione Facebook · 7 di 39',
    source_en: 'Source: Facebook Review · 7 of 39',
  },
];

const HomeClosingTestimonials = () => {
  const { language } = useLanguage();
  return (
    <section style={{ backgroundColor: '#0A0A0A' }} className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-12">
          <p className="font-inter text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(212,175,55,0.75)' }}>
            Belle Femme · Atelier
          </p>
          <h3 className="font-cormorant text-2xl md:text-3xl font-light tracking-[2px]" style={{ color: '#F5F5F5' }}>
            {language === 'it' ? 'Le Loro Parole' : 'Their Words'}
          </h3>
          <div className="h-px w-12 mx-auto" style={{ backgroundColor: 'rgba(212,175,55,0.4)' }} />
        </div>
        <div className="space-y-8">
          {HOME_CLOSING_TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative p-6 md:p-8"
              style={{ backgroundColor: '#0A0A0A', borderLeft: '3px solid #D4AF37', border: '1px solid rgba(212,175,55,0.12)', borderLeftWidth: '3px', borderLeftColor: '#D4AF37' }}
            >
              <span className="absolute font-cormorant pointer-events-none" style={{ fontSize: '56px', color: 'rgba(212,175,55,0.08)', top: '12px', left: '20px' }}>"</span>
              <p className="font-cormorant italic" style={{ fontSize: '17px', color: 'rgba(245,245,245,0.85)', lineHeight: 1.75, marginTop: '28px' }}>
                {language === 'it' ? t.quote_it : t.quote_en}
              </p>
              <div style={{ borderTop: '1px solid rgba(212,175,55,0.1)', marginTop: '18px', paddingTop: '14px' }}>
                <p className="font-inter font-semibold text-[11px] uppercase" style={{ letterSpacing: '0.18em', color: '#D4AF37' }}>
                  {t.name}
                </p>
                <a
                  href="https://www.facebook.com/bellefemme.varese/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter uppercase hover:opacity-80 transition-opacity"
                  style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(212,175,55,0.45)' }}
                >
                  {language === 'it' ? t.source_it : t.source_en}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/bellefemme.varese/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter uppercase hover:opacity-80 transition-opacity"
            style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(212,175,55,0.75)' }}
          >
            {language === 'it'
              ? 'Leggi tutte le recensioni su Facebook →'
              : 'Read all reviews on Facebook →'}
          </a>
        </div>
      </div>
    </section>
  );
};

const LaFirmaTeaser = () => {
  const { language } = useLanguage();

  return (
    <section className="py-10 md:py-14 relative" style={{ background: 'linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 5%) 50%, hsl(0 0% 0%) 100%)' }}>
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

        {/* Giorgia M. pull-quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto space-y-3 pt-4"
        >
          <p className="font-cormorant italic text-lg text-foreground/70 leading-relaxed">
            "{language === 'it'
              ? 'Mouna è una vera professionista, onesta e disponibile. Davanti alla mia indecisione non ha insistito, dicendomi di valutare bene perché ovviamente interventi sul volto sono molto importanti. Il risultato è stato ECCEZIONALE!'
              : 'Mouna is a true professional, honest and available. Faced with my indecision she did not insist, telling me to think it over carefully because facial treatments are obviously very important. The result was EXCEPTIONAL!'
            }"
          </p>
          <p className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase" style={{ color: '#D4AF37' }}>
            Giorgia M.
          </p>
          <p className="font-inter text-[9px] tracking-[0.1em] uppercase text-foreground/40">
            {language === 'it'
              ? 'Fonte: Recensione Facebook · 4 di 39'
              : 'Source: Facebook Review · 4 of 39'}
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/la-firma"
            className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-all duration-500 text-center flex items-center justify-center"
          >
            {language === 'it' ? 'LA FIRMA DI MOUNA →' : 'THE SIGNATURE →'}
          </Link>
          <button
            onClick={() => { const el = document.getElementById('academy'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
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
        <DoveOperiamo />
        <HomeClosingTestimonials />
        <SiteFooter />
        <CookieConsent />
      </div>
    </div>
  );
};

export default Index;
