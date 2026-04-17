import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { StickyHeader } from '@/components/StickyHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { CookieConsent } from '@/components/CookieConsent';
import { StructuredData } from '@/components/StructuredData';


const JURIST_CITIES = ['Venezia', 'Turchia', 'Romania'];

interface CredentialItem {
  name_it: string;
  name_en: string;
  desc_it: string;
  desc_en: string;
  logo?: string;
  logoFilter?: string;
}

interface CredentialGroup {
  label_it: string;
  label_en: string;
  items: CredentialItem[];
}

const CREDENTIALS: CredentialGroup[] = [
  {
    label_it: 'Formazione Accademica',
    label_en: 'Academic Training',
    items: [
      {
        name_it: 'Laurea in Belle Arti · Comunicazioni Visive & Graphic Design',
        name_en: 'Bachelor of Fine Arts · Visual Communications & Graphic Design',
        desc_it: 'La radice del metodo — leggere un volto come composizione visiva prima di tracciare.',
        desc_en: 'The root of the method — reading a face as visual composition before tracing.',
      },
    ],
  },
  {
    label_it: 'Rango Istituzionale',
    label_en: 'Institutional Rank',
    items: [
      {
        name_it: 'Già Craft Master — AcademyS',
        name_en: 'Formerly Craft Master — AcademyS',
        desc_it: 'Microblading Basic & Master Class — educatrice internazionale.',
        desc_en: 'Microblading Basic & Master Class — international educator.',
        logo: '/branding/AcademyS_Craft_Master.png',
      },
      {
        name_it: 'Master Assistant — PhiAcademy',
        name_en: 'Master Assistant — PhiAcademy',
        desc_it: 'Assistente ufficiale ai PhiBrows Masters — PhiAcademy.',
        desc_en: 'Official assistant to PhiBrows Masters — PhiAcademy.',
        logo: '/branding/PhiBrows_Master_Assistant.png',
        logoFilter: 'invert(1) brightness(0.85) sepia(1) hue-rotate(5deg) saturate(3)',
      },
      {
        name_it: 'Royal Artist — PhiBrows',
        name_en: 'Royal Artist — PhiBrows',
        desc_it: 'Competenze superiori nella tecnica PhiBrows di Branko Babic.',
        desc_en: 'Superior skills in the PhiBrows technique by Branko Babic.',
        logo: '/branding/PhiBrows_Royal_Artist.jpeg',
        logoFilter: 'invert(1) brightness(0.85) sepia(1) hue-rotate(5deg) saturate(3)',
      },
    ],
  },
  {
    label_it: 'Pedigree Tecnico',
    label_en: 'Technical Pedigree',
    items: [
      {
        name_it: 'MasterClass Permanent Makeup',
        name_en: 'MasterClass Permanent Makeup',
        desc_it: 'Sopracciglia · Occhi · Labbra — AcademyS.',
        desc_en: 'Brows · Eyes · Lips — AcademyS.',
        logo: '/branding/AcademyS_Craft_Master.png',
      },
      {
        name_it: 'Sistema Kerafill Ciglia & Sopracciglia Master Instructor',
        name_en: 'Kerafill Lashes & Brows System Master Instructor',
        desc_it: 'Istruttrice certificata.',
        desc_en: 'Certified instructor.',
        logo: '/branding/Kerafill_Stamp_Master.png',
      },
      {
        name_it: 'MasterClass Long-Lasting Eyebrows — BIOTEK Italy',
        name_en: 'MasterClass Long-Lasting Eyebrows — BIOTEK Italy',
        desc_it: 'International PMU Academy, Milano · dal 1987.',
        desc_en: 'International PMU Academy, Milan · since 1987.',
      },
      {
        name_it: 'Specialista Rimozione Pigmenti — AcademyS',
        name_en: 'Pigment Removal Specialist — AcademyS',
        desc_it: 'Protocolli Correttivi Avanzati.',
        desc_en: 'Advanced Corrective Protocols.',
        logo: '/branding/AcademyS_Craft_Master.png',
      },
    ],
  },
  {
    label_it: 'Abilitazioni Italiane',
    label_en: 'Italian Licences',
    items: [
      {
        name_it: 'Operatore del Benessere',
        name_en: 'Operatore del Benessere',
        desc_it: 'Accreditata Regione Piemonte.',
        desc_en: 'Accredited by Regione Piemonte.',
      },
      {
        name_it: 'Tatuaggi & Piercing',
        name_en: 'Tattoo & Piercing',
        desc_it: 'Regione Lombardia — L.R. 19/07.',
        desc_en: 'Regione Lombardia — L.R. 19/07.',
      },
      {
        name_it: 'BCM Milano',
        name_en: 'BCM Milan',
        desc_it: 'Trucco Cromatico Semipermanente e Trucco Correttivo.',
        desc_en: 'Semi-Permanent and Corrective Make-Up.',
        logo: '/branding/BCM_Beauty_Centre_Milan.png',
        logoFilter: 'brightness(3)',
      },
    ],
  },
];

const TESTIMONIALS_CLIENT = [
  {
    quote_it: 'dopo 2 anni di indecisione se fare o meno questo trattamento...per caso ho conosciuto Mouna....che dire oltre ad essere una persona splendida e dolcissima..super professionale su di me ha fatto un capolavoro...le mie sopracciglia sono perfette...se volete fare questo trattamento senza dubbio affidatevi a lei una vera professionista',
    quote_en: 'after 2 years of indecision about whether to have this treatment...I met Mouna by chance...what can I say, besides being a wonderful and very sweet person...super professional, on me she worked a masterpiece...my eyebrows are perfect...if you want this treatment without doubt trust her, a true professional',
    name: 'Stefania R.',
    source_it: 'Fonte: Recensione Facebook · 8 di 39',
    source_en: 'Source: Facebook Review · 8 of 39',
  },
  {
    quote_it: 'Grazie Mouna per la gentilezza e la professionalità. Con la tua abilità mi hai risolto un problema estetico importante.',
    quote_en: 'Thank you Mouna for your kindness and professionalism. With your skill you resolved an important aesthetic problem for me.',
    name: 'Leila M.',
    source_it: 'Fonte: Recensione Facebook · 9 di 39',
    source_en: 'Source: Facebook Review · 9 of 39',
  },
];

const LaFirma = () => {
  const { language } = useLanguage();
  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowChevron(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waMsg = encodeURIComponent(
    language === 'it'
      ? 'Salve, vorrei prenotare una consulenza privata.'
      : 'Hello, I would like to book a private consultation.'
  );

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <StructuredData
        path="/la-firma"
        pageTitle="La Firma — Mouna Chabbar · Belle Femme Atelier"
        pageDescription="Mouna Chabbar, Master Assistant PhiAcademy e già Craft Master AcademyS. Giudice internazionale PMU. Fondatrice di Belle Femme Atelier, Varese."
      />
      <StickyHeader />

      {/* S1 - Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '100svh', backgroundColor: 'hsl(0 0% 4%)' }}>
        <img
          src="/branding/mouna-la-firma.jpg"
          alt="Mouna Chabbar — Fondatrice Belle Femme Atelier"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '55% top' }}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, hsla(0,0%,0%,0.15) 0%, hsla(0,0%,0%,0.55) 50%, hsla(0,0%,0%,0.85) 100%)',
          }}
        />

        <div className="relative z-10 flex flex-col justify-end items-center text-center px-6" style={{ minHeight: '100svh' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-5 mb-24"
          >
            <p className="font-inter text-[10px] tracking-[0.4em] uppercase" style={{ color: '#D4AF37' }}>
              BELLE FEMME · LA FIRMA
            </p>
            <div className="h-px w-12 mx-auto" style={{ backgroundColor: 'rgba(212, 175, 55, 0.5)' }} />
            <h1 className="font-cormorant text-5xl md:text-7xl font-light text-[#F5F5F5] tracking-[4px]">
              Mouna Chabbar
            </h1>
            <p className="font-inter text-[11px] tracking-[0.25em] uppercase" style={{ color: 'rgba(245, 245, 245, 0.7)' }}>
              {language === 'it' ? 'Craft Master · Giudice Internazionale' : 'Craft Master · International Judge'}
            </p>
            <div className="h-px w-12 mx-auto" style={{ backgroundColor: 'rgba(212, 175, 55, 0.5)' }} />
            <p className="font-cormorant italic text-xl md:text-2xl max-w-xl mx-auto" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>
              {language === 'it'
                ? "L'armonia non si improvvisa. Si progetta."
                : 'Harmony is not improvised. It is engineered.'}
            </p>
          </motion.div>

          {showChevron && (
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-5 h-5" style={{ color: 'rgba(212, 175, 55, 0.5)' }} />
            </motion.div>
          )}
        </div>
      </section>

      {/* S2 - Bio & Credentials */}
      <section style={{ backgroundColor: '#000000', padding: '64px 24px' }}>
        <div className="max-w-[680px] mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-inter text-[10px] tracking-[0.4em] uppercase" style={{ color: '#D4AF37' }}>
              {language === 'it' ? 'La Firma · Mouna Chabbar' : 'The Signature · Mouna Chabbar'}
            </p>
            <h2 className="font-cormorant text-[28px] font-light" style={{ color: '#F5F5F5' }}>
              {language === 'it' ? "L'Architetto dello Sguardo" : 'The Architect of the Gaze'}
            </h2>
            <div className="h-px w-12" style={{ backgroundColor: 'rgba(212, 175, 55, 0.5)' }} />
            <p className="text-[16px] leading-[1.7]" style={{ color: 'rgba(245, 245, 245, 0.7)' }}>
              {language === 'it'
                ? "Una laurea in Belle Arti e Comunicazioni Visive. Un decennio di competizione internazionale. Mouna Chabbar ha costruito un metodo dove la bellezza è il risultato di una progettazione rigorosa — non di un'interpretazione."
                : "A degree in Fine Arts and Visual Communications. A decade of international competition. Mouna Chabbar built a method where beauty is the result of rigorous engineering — not interpretation."}
            </p>
            <p className="text-[16px] leading-[1.7]" style={{ color: 'rgba(245, 245, 245, 0.7)' }}>
              {language === 'it'
                ? "Da Varese, forma la prossima generazione di artisti PMU con la stessa esigenza che ha definito la sua carriera: ogni tratto è calcolato, ogni risultato è progettato."
                : "From Varese, she trains the next generation of PMU artists with the same standard that defined her career: every stroke is calculated, every result is engineered."}
            </p>
          </motion.div>

          <div className="h-px w-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }} />

          {CREDENTIALS.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="space-y-4"
            >
              {gi > 0 && (
                <div className="h-px w-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }} />
              )}
              <p className="font-inter text-[11px] tracking-[0.25em] uppercase" style={{ color: '#D4AF37' }}>
                {language === 'it' ? group.label_it : group.label_en}
              </p>

              <div className="space-y-0">
                {group.items.map((item, ii) => (
                  <div key={ii}>
                    {item.logo ? (
                      <div className="flex items-start gap-4 py-3">
                        <div
                          className="w-12 h-12 flex-shrink-0 flex items-center justify-center"
                          style={{ border: '1px solid rgba(212,175,55,0.25)', backgroundColor: '#111' }}
                        >
                          <img
                            src={item.logo}
                            alt={language === 'it' ? item.name_it : item.name_en}
                            className="max-w-[40px] max-h-[40px] object-contain"
                            style={item.logoFilter ? { filter: item.logoFilter } : {}}
                          />
                        </div>
                        <div>
                          <p className="text-[15px] font-medium leading-snug" style={{ color: '#F5F5F5' }}>
                            {language === 'it' ? item.name_it : item.name_en}
                          </p>
                          <p className="font-cormorant italic text-[13px] leading-relaxed" style={{ color: 'rgba(245, 245, 245, 0.60)' }}>
                            {language === 'it' ? item.desc_it : item.desc_en}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 py-3">
                        <p className="text-[15px] font-medium leading-snug" style={{ color: '#F5F5F5' }}>
                          {language === 'it' ? item.name_it : item.name_en}
                        </p>
                        <p className="font-cormorant italic text-[13px] leading-relaxed" style={{ color: 'rgba(245, 245, 245, 0.60)' }}>
                          {language === 'it' ? item.desc_it : item.desc_en}
                        </p>
                      </div>
                    )}
                    {ii < group.items.length - 1 && (
                      <div className="h-px" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* S3 - Client Testimonials */}
      {/* Treatment testimonials — placeholder pending GDPR consent */}
      {/* Erika B., Sonia M., Carmen M. — do not publish until WhatsApp consent confirmed */}

      <section className="py-12 md:py-16" style={{ background: 'linear-gradient(180deg, #000 0%, #0A0A0A 50%, #000 100%)' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-4 mb-12">
            <p className="font-inter text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(212,175,55,0.75)' }}>
              Belle Femme · Atelier
            </p>
            <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-[2px]" style={{ color: '#F5F5F5' }}>
              {language === 'it'
                ? 'Hanno Esitato. Poi Hanno Prenotato.'
                : 'They Hesitated. Then They Booked.'}
            </h2>
            <div className="h-px w-12 mx-auto" style={{ backgroundColor: 'rgba(212,175,55,0.4)' }} />
          </div>

          <div className="space-y-8">
            {TESTIMONIALS_CLIENT.map((t, i) => (
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
                ? 'Leggi le recensioni su Facebook →'
                : 'Read reviews on Facebook →'}
            </a>
          </div>
        </div>
      </section>

      {/* S4 - Judge Cities */}
      <section className="py-8" style={{ backgroundColor: '#000' }}>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="font-inter text-[12px] tracking-[0.25em] uppercase" style={{ color: '#D4AF37' }}>
            {language === 'it' ? 'GIUDICE INTERNAZIONALE' : 'INTERNATIONAL JUDGE'}
          </p>
          <div className="overflow-hidden">
            <p className="font-cormorant text-2xl md:text-4xl font-light" style={{ color: '#F5F5F5' }}>
              {JURIST_CITIES.join(' · ')}
            </p>
          </div>
          <div className="h-px w-12 mx-auto" style={{ backgroundColor: 'rgba(212, 175, 55, 0.5)' }} />
        </div>
      </section>

      {/* S6 - CTA */}
      <section style={{ backgroundColor: '#000000', padding: '64px 24px' }}>
        <div className="max-w-md mx-auto text-center space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href={`https://wa.me/393924487530?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 font-inter font-bold text-[10px] tracking-[0.2em] uppercase px-8 py-4 min-h-[48px] transition-colors text-center flex items-center justify-center"
              style={{ backgroundColor: '#D4AF37', color: '#000000' }}
            >
              {language === 'it' ? 'PRENOTA UNA CONSULENZA PRIVATA' : 'BOOK A PRIVATE CONSULTATION'}
            </a>
            <Link
              to="/"
              state={{ scrollTo: 'academy' }}
              className="flex-1 font-inter font-bold text-[10px] tracking-[0.2em] uppercase px-8 py-4 min-h-[48px] transition-all duration-500 text-center flex items-center justify-center"
              style={{ backgroundColor: 'transparent', border: '1px solid #D4AF37', color: '#D4AF37' }}
            >
              {language === 'it' ? "SCOPRI L'ACCADEMIA" : 'DISCOVER THE ACADEMY'}
            </Link>
          </div>
          <p className="font-cormorant italic text-xs" style={{ color: 'rgba(245, 245, 245, 0.5)' }}>
            {language === 'it'
              ? 'La consulenza è gratuita e senza impegno.'
              : 'The consultation is free and without obligation.'}
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
