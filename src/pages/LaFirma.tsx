import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { StickyHeader } from '@/components/StickyHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { CookieConsent } from '@/components/CookieConsent';
import { StructuredData } from '@/components/StructuredData';

const JURIST_CITIES = ['MILANO', 'DUBAI', 'VENEZIA', 'TURCHIA', 'ROMANIA'];

const CREDENTIALS = {
  tier1: [
    {
      title_it: 'Già Official Master Assistant — PhiBrows · PhiAcademy',
      title_en: 'Formerly Official Master Assistant — PhiBrows · PhiAcademy',
      sub_it: 'Uno dei gradi istituzionali più alti assegnati a livello mondiale — autorizzata a fare da mentore, supervisionare e certificare la nuova generazione di artisti su scala globale.',
      sub_en: 'One of the highest institutional ranks assigned worldwide — authorised to mentor, supervise and certify the next generation of artists on a global scale.',
    },
    {
      title_it: 'Già Craft Master — AcademyS (PMU, Microblading, Removal)',
      title_en: 'Formerly Craft Master — AcademyS (PMU, Microblading, Removal)',
      sub_it: 'Educatrice internazionale autorizzata per la tecnica S-Brows — il benchmark globale per la pixelazione ad alta definizione e lo shading meccanico.',
      sub_en: 'Authorised international educator for the S-Brows technique — the global benchmark for high-definition pixelation and machine shading.',
    },
  ],
  tier2: [
    { title_it: 'Royal Artist — PhiBrows · Branko Babić Microblading Academy', title_en: 'Royal Artist — PhiBrows · Branko Babić Microblading Academy' },
    { title_it: 'Master Long-Lasting Eyebrow Tattooing — BIOTEK Italy', title_en: 'Master Long-Lasting Eyebrow Tattooing — BIOTEK Italy' },
    { title_it: 'Già Master Instructor — Kerafill Italy', title_en: 'Formerly Master Instructor — Kerafill Italy' },
    { title_it: 'Specialista Rimozione Pigmenti — Protocolli Correttivi Avanzati AcademyS', title_en: 'Pigment Removal Specialist — AcademyS Advanced Corrective Protocols' },
  ],
  tier3: [
    { title_it: 'Laurea in Belle Arti — Comunicazioni Visive e Graphic Design', title_en: 'Bachelor of Fine Arts — Visual Communications & Graphic Design' },
    { title_it: 'Operatore del Benessere EQF 3 — AFEA Formazione (accreditata Regione Piemonte)', title_en: 'Operatore del Benessere EQF 3 — AFEA Formazione (accredited by Regione Piemonte)' },
    { title_it: 'Attestato Tatuaggi & Piercing — Regione Lombardia', title_en: 'Tattoo & Piercing Licence — Regione Lombardia' },
    { title_it: 'Alumna BCM Milano — Trucco Semipermanente · 30/30', title_en: 'BCM Milan Alumna — Semi-Permanent Make-Up · 30/30' },
  ],
};

const TESTIMONIALS_CLIENT = [
  {
    quote_it: "Ci ho pensato 3 lunghi anni. Avevo sempre paura di farmi toccare. Mouna mi ha subito trasmesso fiducia e ha realizzato il mio sogno.",
    quote_en: "I thought about it for 3 long years. I was always afraid. Mouna immediately gave me confidence and made my dream come true.",
    name: 'Erika B.',
    date_it: 'Gennaio 2026',
    date_en: 'January 2026',
  },
  {
    quote_it: "Nonostante un vecchio microblading, hai eseguito un lavoro di copertura e correzione fantastico. Mi hai cambiato il viso in meglio.",
    quote_en: "Despite old microblading, you performed a fantastic cover and correction job. You changed my face for the better.",
    name: 'Sonia M.',
    date_it: 'Settembre 2022',
    date_en: 'September 2022',
  },
  {
    quote_it: "Precisa, molto attenta all'igiene. Mi ha spiegato tutto nei dettagli. Mi sveglio ogni giorno con le sopracciglia perfette.",
    quote_en: "Precise, very attentive to hygiene. She explained everything in detail. I wake up every day with perfect eyebrows.",
    name: 'Carmen M.',
    date_it: 'Agosto 2025',
    date_en: 'August 2025',
  },
];

const LaFirma = () => {
  const { language } = useLanguage();

  const waMsg = encodeURIComponent(
    language === 'it'
      ? 'Buongiorno Mouna, vorrei prenotare una consulenza privata.'
      : 'Hello Mouna, I would like to book a private consultation.'
  );

  const juristLabel = language === 'it' ? 'GIUDICE INTERNAZIONALE' : 'INTERNATIONAL JUDGE';

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <StructuredData
        path="/la-firma"
        pageTitle="La Firma — Mouna Chabbar · Belle Femme Atelier"
        pageDescription="Mouna Chabbar, già Official Master Assistant PhiAcademy e già Craft Master AcademyS. Giudice internazionale PMU. Fondatrice di Belle Femme Atelier, Varese."
      />
      <StickyHeader />

      {/* Blueprint background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ opacity: 0.03 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="firma-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="0" stroke="hsl(43 76% 52%)" strokeWidth="0.5" />
              <line x1="0" y1="0" x2="0" y2="100" stroke="hsl(43 76% 52%)" strokeWidth="0.5" />
              <line x1="0" y1="61.8" x2="100" y2="61.8" stroke="hsl(43 76% 52%)" strokeWidth="0.3" strokeDasharray="4 4" />
              <line x1="61.8" y1="0" x2="61.8" y2="100" stroke="hsl(43 76% 52%)" strokeWidth="0.3" strokeDasharray="4 4" />
              <line x1="0" y1="38.2" x2="100" y2="38.2" stroke="hsl(43 76% 52%)" strokeWidth="0.2" strokeDasharray="2 6" />
              <line x1="38.2" y1="0" x2="38.2" y2="100" stroke="hsl(43 76% 52%)" strokeWidth="0.2" strokeDasharray="2 6" />
              <circle cx="61.8" cy="61.8" r="1" fill="hsl(43 76% 52%)" fillOpacity="0.4" />
              <circle cx="38.2" cy="38.2" r="0.5" fill="hsl(43 76% 52%)" fillOpacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#firma-grid)" />
        </svg>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60 mb-6">
              {language === 'it' ? 'Belle Femme · La Firma' : 'Belle Femme · The Signature'}
            </p>
            <h1 className="font-cormorant text-5xl md:text-7xl font-light text-foreground tracking-[4px] mb-6">
              Mouna Chabbar
            </h1>
            <div className="h-px w-24 bg-primary/40 mx-auto mb-8" />
            <p className="font-cormorant italic text-xl md:text-2xl text-primary/80 tracking-wide max-w-xl mx-auto">
              {language === 'it'
                ? "L'armonia non si improvvisa. Si progetta."
                : 'Harmony is not improvised. It is engineered.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — PORTRAIT + BIO + CREDENTIALS */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Portrait */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img
                src="/branding/mouna-la-firma.jpg"
                alt="Mouna Chabbar — Fondatrice Belle Femme Atelier, Master Trainer PMU Varese"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </motion.div>

            {/* Right column */}
            <div className="space-y-12">
              {/* BIO */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <h2 className="font-cormorant text-3xl md:text-4xl font-light text-foreground tracking-[2px] mb-6">
                  {language === 'it' ? "L'Architetto dello Sguardo" : 'The Architect of the Gaze'}
                </h2>
                <p className="text-sm text-muted-foreground leading-[2] mb-4">
                  {language === 'it'
                    ? "Una laurea in Belle Arti e Comunicazioni Visive (Graphic Designer). Un decennio di competizione internazionale. Mouna Chabbar ha costruito un metodo dove la bellezza è il risultato di una progettazione rigorosa — non di un'interpretazione."
                    : "A degree in Fine Arts and Visual Communications (Graphic Designer). A decade of international competition. Mouna Chabbar built a method where beauty is the result of rigorous engineering — not interpretation."}
                </p>
                <p className="text-sm text-muted-foreground leading-[2]">
                  {language === 'it'
                    ? "Dal suo studio a Varese, forma la prossima generazione di artisti PMU con la stessa esigenza che ha definito la sua carriera internazionale: ogni tratto è calcolato, ogni risultato è progettato."
                    : "From her studio in Varese, she trains the next generation of PMU artists with the same standard that defined her international career: every stroke is calculated, every result is engineered."}
                </p>
              </motion.div>

              {/* CREDENTIALS */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary/60">
                  {language === 'it' ? 'Credenziali' : 'Credentials'}
                </p>

                {/* Tier 1 */}
                <div className="space-y-6">
                  {CREDENTIALS.tier1.map((c, i) => (
                    <div key={i} className="space-y-2">
                      <p className="font-inter font-bold text-[11px] tracking-[0.15em] uppercase text-foreground">
                        {language === 'it' ? c.title_it : c.title_en}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {language === 'it' ? c.sub_it : c.sub_en}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tier 2 */}
                <div className="space-y-2 pt-2 border-t border-primary/10">
                  {CREDENTIALS.tier2.map((c, i) => (
                    <p key={i} className="text-[10px] tracking-[0.1em] uppercase text-foreground/70">
                      {language === 'it' ? c.title_it : c.title_en}
                    </p>
                  ))}
                </div>

                {/* Tier 3 */}
                <div className="space-y-2">
                  {CREDENTIALS.tier3.map((c, i) => (
                    <p key={i} className="text-[10px] tracking-[0.1em] text-muted-foreground">
                      {language === 'it' ? c.title_it : c.title_en}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CLIENT TESTIMONIALS */}
      <section className="relative z-10 py-24 md:py-32" style={{ background: 'linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 4%) 50%, hsl(0 0% 0%) 100%)' }}>
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-foreground tracking-[2px] text-center mb-16">
            {language === 'it' ? 'Voci delle Clienti' : 'Client Voices'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_CLIENT.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15 }} className="space-y-4">
                <p className="font-cormorant italic text-base text-foreground/80 leading-relaxed">
                  &ldquo;{language === 'it' ? t.quote_it : t.quote_en}&rdquo;
                </p>
                <div>
                  <p className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase text-primary">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground tracking-wide">
                    {language === 'it' ? t.date_it : t.date_en}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://www.facebook.com/bellefemme.varese/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.15em] uppercase text-primary/60 hover:text-primary transition-colors"
            >
              {language === 'it' ? 'Leggi tutte le recensioni \u2192 Facebook' : 'Read all reviews \u2192 Facebook'}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 — JURIST POWER-BAR */}
      <section className="relative z-10 py-16 border-y border-primary/10 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl mb-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center">
            {language === 'it'
              ? 'Giudice ufficiale in competizioni internazionali di dermopigmentazione'
              : 'Official judge at international dermopigmentation competitions'}
          </p>
        </div>
        <div className="relative overflow-hidden whitespace-nowrap">
          <div className="inline-flex animate-[ticker_20s_linear_infinite]">
            {[...Array(4)].map((_, rep) => (
              <span key={rep} className="inline-flex items-center gap-4 mx-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary/60">
                  {juristLabel}:
                </span>
                {JURIST_CITIES.map((city, i) => (
                  <span key={i} className="inline-flex items-center gap-2">
                    <span className="text-primary/30">•</span>
                    <span className="text-[11px] tracking-[0.15em] uppercase text-foreground/60">
                      {city}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — STATS BAR PLACEHOLDER */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          {/* Stats bar will be added here when content is confirmed */}
        </div>
      </section>

      {/* SECTION 6 — SIGNATURE CLIMAX */}
      <section className="relative z-10 py-24 md:py-32 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
          <div className="w-16 h-16 mx-auto mb-8 rounded-full border border-primary/30 flex items-center justify-center">
            <span className="font-cormorant text-xl text-primary/60">Seal</span>
          </div>
          <p className="font-cormorant text-4xl md:text-5xl font-light text-foreground tracking-[4px] mb-4">
            Mouna Chabbar
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground max-w-md mx-auto">
            {language === 'it'
              ? 'Master Trainer · Formatrice Internazionale · Giudice in 5 Paesi'
              : 'Master Trainer · International Trainer · Judge in 5 Countries'}
          </p>
        </motion.div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="relative z-10 py-24 md:py-32 border-t border-primary/10">
        <div className="container mx-auto px-6 md:px-12 max-w-md text-center">
          <div className="space-y-4">
            <a
              href={`https://wa.me/393516605507?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors"
            >
              {language === 'it' ? 'Prenota una Consulenza Privata' : 'Book a Private Consultation'}
            </a>
            <a
              href="/#academy"
              className="block font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-8 py-4 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              {language === 'it' ? "Scopri L'Accademia" : 'Discover The Academy'}
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-8 leading-relaxed">
            {language === 'it'
              ? 'La consulenza è gratuita e senza impegno. Il primo passo è una conversazione.'
              : 'The consultation is free and without obligation. The first step is a conversation.'}
          </p>
        </div>
      </section>

      <div className="relative z-10">
        <SiteFooter />
      </div>
      <CookieConsent />
    </div>
  );
};

export default LaFirma;
