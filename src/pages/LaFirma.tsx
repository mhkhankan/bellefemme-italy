import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { StickyHeader } from '@/components/StickyHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { WhatsAppSticky } from '@/components/WhatsAppSticky';
import { CookieConsent } from '@/components/CookieConsent';

const JURIST_CITIES = ['MILANO', 'DUBAI', 'VENEZIA', 'TURCHIA', 'ROMANIA'];

const CREDENTIALS = {
  tier1: [
    {
      title_it: 'Official Master Assistant — PhiBrows · PhiAcademy',
      title_en: 'Official Master Assistant — PhiBrows · PhiAcademy',
      sub_it: 'Uno dei gradi istituzionali più alti assegnati a livello mondiale — autorizzata a fare da mentore, supervisionare e certificare la nuova generazione di artisti su scala globale.',
      sub_en: 'One of the highest institutional ranks assigned worldwide — authorised to mentor, supervise and certify the next generation of artists on a global scale.',
    },
    {
      title_it: 'Craft Master — MicrobladingS · AcademyS',
      title_en: 'Craft Master — MicrobladingS · AcademyS',
      sub_it: 'Educatrice internazionale autorizzata per la tecnica S-Brows — il benchmark globale per la pixelazione ad alta definizione e lo shading meccanico.',
      sub_en: 'Authorised international educator for the S-Brows technique — the global benchmark for high-definition pixelation and machine shading.',
    },
  ],
  tier2: [
    {
      title_it: 'Master Long-Lasting Eyebrow Tattooing — BIOTEK Italy',
      title_en: 'Master Long-Lasting Eyebrow Tattooing — BIOTEK Italy',
    },
    {
      title_it: 'Master Lash Lifting & Filler — Kerafill Italy',
      title_en: 'Master Lash Lifting & Filler — Kerafill Italy',
    },
    {
      title_it: 'Specialista Rimozione Pigmenti — Protocolli Correttivi Avanzati',
      title_en: 'Pigment Removal Specialist — Advanced Corrective Protocols',
    },
  ],
  tier3: [
    { title_it: 'Laurea in Graphic Design', title_en: "Bachelor's Degree in Graphic Design" },
    { title_it: 'Operatore del Benessere EQF 3 — Regione Piemonte', title_en: 'Wellness Operator EQF 3 — Regione Piemonte' },
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
    <div className="min-h-screen bg-background">
      <StickyHeader />

      {/* Blueprint background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="61.8" fill="none" stroke="hsl(30, 33%, 48%)" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="38.2" fill="none" stroke="hsl(30, 33%, 48%)" strokeWidth="0.3" />
              <line x1="0" y1="76.4" x2="200" y2="76.4" stroke="hsl(30, 33%, 48%)" strokeWidth="0.3" />
              <line x1="0" y1="123.6" x2="200" y2="123.6" stroke="hsl(30, 33%, 48%)" strokeWidth="0.3" />
              <line x1="76.4" y1="0" x2="76.4" y2="200" stroke="hsl(30, 33%, 48%)" strokeWidth="0.3" />
              <line x1="123.6" y1="0" x2="123.6" y2="200" stroke="hsl(30, 33%, 48%)" strokeWidth="0.3" />
              <line x1="0" y1="0" x2="200" y2="200" stroke="hsl(30, 33%, 48%)" strokeWidth="0.2" />
              <line x1="200" y1="0" x2="0" y2="200" stroke="hsl(30, 33%, 48%)" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">
              {language === 'it' ? 'Belle Femme · La Firma' : 'Belle Femme · The Signature'}
            </p>
            <h1 className="font-cormorant text-4xl md:text-6xl font-light text-foreground tracking-[3px]">
              Mouna Chabbar
            </h1>
            <div className="h-px w-16 bg-primary/40 mx-auto" />
            <p className="font-cormorant italic text-lg md:text-xl text-primary/80 tracking-wide">
              {language === 'it'
                ? "L'armonia non si improvvisa. Si progetta."
                : 'Harmony is not improvised. It is engineered.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — PORTRAIT + BIO + CREDENTIALS */}
      <section className="relative z-10 pb-16 md:pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">

            {/* Portrait */}
            <div className="md:w-[58%] md:self-start md:sticky md:top-28">
              <div className="aspect-[3/4] bg-card border border-primary/10 flex items-center justify-center">
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30">
                  Portrait of the Master
                </span>
              </div>
            </div>

            {/* Right column */}
            <div className="md:w-[42%] space-y-12">

              {/* BIO */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6">
                <h2 className="font-cormorant text-2xl md:text-3xl font-light text-foreground tracking-[2px]">
                  {language === 'it' ? "L'Architetto dello Sguardo" : 'The Architect of the Gaze'}
                </h2>
                <p className="text-base text-muted-foreground leading-[2] tracking-wide">
                  {language === 'it'
                    ? "Una laurea in Graphic Design. Un decennio di competizione internazionale. Mouna Chabbar ha costruito un metodo dove la bellezza è il risultato di una progettazione rigorosa — non di un'interpretazione."
                    : "A degree in Graphic Design. A decade of international competition. Mouna Chabbar built a method where beauty is the result of rigorous engineering — not interpretation."}
                </p>
                <p className="text-base text-muted-foreground leading-[2] tracking-wide">
                  {language === 'it'
                    ? "Il suo Metodo Blueprint applica la Sezione Aurea non come decorazione, ma come protocollo strutturale. Ogni arcata progettata. Ogni proporzione calcolata. Zero improvvisazione."
                    : "Her Blueprint Method applies the Golden Ratio not as decoration, but as a structural protocol. Every arch engineered. Every proportion calculated. Zero improvisation."}
                </p>
              </motion.div>

              {/* CREDENTIALS */}
              <div className="border-t border-primary/10 pt-12 space-y-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">
                  {language === 'it' ? 'Credenziali & Maestria' : 'Credentials & Mastery'}
                </p>

                {/* Tier 1 */}
                <div className="space-y-6">
                  {CREDENTIALS.tier1.map((c, i) => (
                    <div key={i} className="space-y-2">
                      <p className="font-cormorant text-lg text-foreground tracking-wide">
                        {language === 'it' ? c.title_it : c.title_en}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {language === 'it' ? c.sub_it : c.sub_en}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tier 2 */}
                <div className="space-y-3 border-t border-primary/5 pt-6">
                  {CREDENTIALS.tier2.map((c, i) => (
                    <p key={i} className="font-cormorant text-base text-foreground/80 tracking-wide">
                      {language === 'it' ? c.title_it : c.title_en}
                    </p>
                  ))}
                </div>

                {/* Tier 3 */}
                <div className="space-y-2 border-t border-primary/5 pt-6">
                  {CREDENTIALS.tier3.map((c, i) => (
                    <p key={i} className="text-xs text-muted-foreground">
                      {language === 'it' ? c.title_it : c.title_en}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CLIENT TESTIMONIALS */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h3 className="font-cormorant text-2xl md:text-3xl font-light text-foreground tracking-[2px] text-center mb-12">
            {language === 'it' ? 'Voci delle Clienti' : 'Client Voices'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_CLIENT.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15 }} className="space-y-4">
                <p className="font-cormorant italic text-base text-foreground/80 leading-relaxed">
                  "{language === 'it' ? t.quote_it : t.quote_en}"
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
          <div className="text-center mt-12">
            <a
              href="https://www.facebook.com/bellefemmepmu/reviews"
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
      <section className="relative z-10 border-y border-primary/20 overflow-hidden">
        <div className="py-6 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-4">
            {language === 'it'
              ? 'Giudice ufficiale in competizioni internazionali di dermopigmentazione'
              : 'Official judge at international dermopigmentation competitions'}
          </p>
        </div>
        <div className="py-3 overflow-hidden">
          <div className="flex animate-[ticker_20s_linear_infinite] whitespace-nowrap">
            {[...Array(4)].map((_, rep) => (
              <span key={rep} className="flex items-center">
                <span className="text-[11px] md:text-[13px] tracking-[0.3em] uppercase font-inter font-bold" style={{ color: 'hsl(30, 33%, 48%)' }}>
                  {juristLabel}:
                </span>
                {JURIST_CITIES.map((city, i) => (
                  <span key={`${rep}-${i}`} className="flex items-center">
                    <span className="mx-3 text-primary/30">•</span>
                    <span className="text-[11px] md:text-[13px] tracking-[0.3em] uppercase font-inter font-bold" style={{ color: 'hsl(30, 33%, 48%)' }}>
                      {city}
                    </span>
                  </span>
                ))}
                <span className="mx-8" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — STATS BAR PLACEHOLDER */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          {/* Stats bar will be added here when content is confirmed */}
        </div>
      </section>

      {/* SECTION 6 — SIGNATURE CLIMAX */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-6 md:px-12 text-center" style={{ paddingBottom: '150px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="w-1/2 md:w-[30%] max-w-xs aspect-square shimmer-venetian mx-auto flex items-center justify-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30">Seal</span>
            </div>
            <p className="font-cormorant text-xl md:text-2xl italic tracking-[3px]" style={{ color: 'hsl(30, 33%, 48%)' }}>
              Mouna Chabbar
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40">
              {language === 'it'
                ? 'Grand Master · Formatrice Internazionale · Giudice in 5 Paesi'
                : 'Grand Master · International Trainer · Judge in 5 Countries'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <div className="relative z-10 text-center pb-16 px-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href={`https://wa.me/393516605507?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-3 min-h-[44px] inline-flex items-center hover:bg-primary/90 transition-colors"
          >
            {language === 'it' ? 'Prenota una Consulenza Privata' : 'Book a Private Consultation'}
          </a>
          <a
            href="/#academy"
            className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-8 py-3 min-h-[44px] inline-flex items-center hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            {language === 'it' ? "Scopri L'Accademia" : 'Discover The Academy'}
          </a>
        </div>
        <p className="font-cormorant italic text-sm text-primary/50">
          {language === 'it'
            ? 'La consulenza è gratuita e senza impegno. Il primo passo è una conversazione.'
            : 'The consultation is free and without obligation. The first step is a conversation.'}
        </p>
      </div>

      <div className="relative z-10">
        <SiteFooter />
      </div>
      <WhatsAppSticky />
      <CookieConsent />
    </div>
  );
};

export default LaFirma;
