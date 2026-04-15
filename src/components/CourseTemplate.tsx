import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import type { Course } from '@/Data/courses';
import { BookingSheet } from './BookingSheet';
import { StickyHeader } from './StickyHeader';
import { SiteFooter } from './SiteFooter';
import { StructuredData } from './StructuredData';

import { QRCodeSVG } from 'qrcode.react';

interface CourseTemplateProps {
  course: Course;
}

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const GhostNumber = ({ n }: { n: string }) => (
  <span className="font-cormorant text-[48px] italic font-light leading-none mb-0" style={{ color: 'rgba(212,175,55,0.07)' }}>
    {n}
  </span>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-inter text-[9px] tracking-[0.32em] uppercase mb-3" style={{ color: 'rgba(212,175,55,0.55)' }}>
    {children}
  </p>
);

const DotItem = ({ text, index }: { text: string; index: number }) => (
  <motion.div
    className="flex gap-[10px] py-[9px]"
    style={{ borderBottom: '1px solid rgba(245,245,245,0.04)' }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
  >
    <div className="w-[4px] h-[4px] rounded-full mt-[8px] flex-shrink-0" style={{ backgroundColor: 'rgba(212,175,55,0.45)' }} />
    <span className="font-inter text-[12px] leading-[1.6]" style={{ color: 'rgba(245,245,245,0.65)' }}>{text}</span>
  </motion.div>
);

const QrMarkSvg = () => (
  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.45 }}>
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#D4AF37" strokeWidth="2" fill="none" />
    <rect x="8" y="8" width="8" height="8" rx="1" fill="#D4AF37" />
    <rect x="28" y="4" width="16" height="16" rx="2" stroke="#D4AF37" strokeWidth="2" fill="none" />
    <rect x="32" y="8" width="8" height="8" rx="1" fill="#D4AF37" />
    <rect x="4" y="28" width="16" height="16" rx="2" stroke="#D4AF37" strokeWidth="2" fill="none" />
    <rect x="8" y="32" width="8" height="8" rx="1" fill="#D4AF37" />
    <rect x="28" y="28" width="4" height="4" fill="#D4AF37" />
    <rect x="36" y="28" width="4" height="4" fill="#D4AF37" />
    <rect x="28" y="36" width="4" height="4" fill="#D4AF37" />
    <rect x="36" y="36" width="8" height="8" rx="1" fill="#D4AF37" />
  </svg>
);

export const CourseTemplate = ({ course }: CourseTemplateProps) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const t = (it: string | undefined, en: string | undefined) => (language === 'it' ? it : en) ?? '';
  const subtitle = t(course.subtitle_it, course.subtitle_en);
  const duration = t(course.duration_it, course.duration_en);
  const description = t(course.description_it, course.description_en);
  const certificate = t(course.certificate_it, course.certificate_en);
  const heroImage = course.images.length > 0 ? course.images[0] : null;
  const price = t(course.price_it, course.price_en);
  const tagline = t(course.tagline_it, course.tagline_en);
  const learnSections = language === 'it' ? course.learn_sections_it : course.learn_sections_en;
  const programme = language === 'it' ? course.programme_it : course.programme_en;
  const diff = language === 'it' ? course.differentiator_it : course.differentiator_en;
  const comparison = course.comparison_it;
  const details = language === 'it' ? course.details_it : course.details_en;
  const afterCourse = language === 'it' ? course.after_course_it : course.after_course_en;
  const allDayItems = course.days.flatMap(d => language === 'it' ? d.items_it : d.items_en);

  const renderDescriptionWithEmDash = (text: string) => {
    const idx = text.indexOf(' — ');
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx + 3)}
        <span style={{ color: 'rgba(212,175,55,0.80)' }}>{text.slice(idx + 3)}</span>
      </>
    );
  };

  let sectionCounter = 0;
  const nextSection = () => {
    sectionCounter++;
    return String(sectionCounter).padStart(2, '0');
  };

  return (
    <div className="min-h-screen bg-background">
      <StructuredData
        path={course.slug}
        pageTitle={`${course.bf_name} — Belle Femme Academy`}
        pageDescription={description}
      />
      <StickyHeader />

      {/* B. Back navigation */}
      <div className="pt-28 pb-4 container mx-auto px-6 max-w-5xl">
        <button
          onClick={() => navigate('/#academy')}
          className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-foreground/40 hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          {language === 'it' ? "Torna all'Accademia" : 'Back to Academy'}
        </button>
      </div>

      {/* C. Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: 'calc(55vh - 48px)' }}>
        {heroImage && !imgFailed ? (
          <img src={heroImage} alt={course.bf_name} className="w-full h-full object-cover" onError={() => setImgFailed(true)} />
        ) : (
          <div className="w-full h-full shimmer-venetian" />
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #000000 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-inter text-[8px] tracking-[0.4em] uppercase" style={{ color: 'rgba(212,175,55,0.55)' }}>
              Belle Femme Academy · Varese
            </p>
            <h1 className="font-inter font-bold text-[13px] tracking-[0.28em] uppercase text-foreground mt-1">
              {course.bf_name}
            </h1>
            <p className="font-cormorant italic text-[26px] font-light leading-tight mt-1" style={{ color: 'rgba(212,175,55,0.88)' }}>
              {subtitle}
            </p>
            <div className="flex items-center gap-2 mt-2 font-inter text-[9px] tracking-[0.15em] uppercase text-foreground/40">
              <span>{duration}</span>
              <span style={{ color: 'rgba(212,175,55,0.30)' }}>·</span>
              {price ? (
                <>
                  <span>{price}</span>
                  <span style={{ color: 'rgba(212,175,55,0.30)' }}>·</span>
                  <span>Varese</span>
                </>
              ) : (
                <>
                  <span>Max {course.participants} {language === 'it' ? 'partecipanti' : 'participants'}</span>
                  <span style={{ color: 'rgba(212,175,55,0.30)' }}>·</span>
                  <span>Varese</span>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* D. Tagline strip */}
      {tagline && (
        <div
          className="flex items-center gap-[10px] px-5"
          style={{ backgroundColor: 'rgba(212,175,55,0.07)', borderTop: '1px solid rgba(212,175,55,0.15)', borderBottom: '1px solid rgba(212,175,55,0.15)', padding: '11px 20px' }}
        >
          <div className="w-[6px] h-[6px] flex-shrink-0" style={{ backgroundColor: 'hsl(var(--primary))', transform: 'rotate(45deg)' }} />
          <span className="font-inter text-[9px] tracking-[0.18em] uppercase" style={{ color: 'rgba(212,175,55,0.75)' }}>
            {tagline}
          </span>
        </div>
      )}

      {/* E. Sigillo strip */}
      {course.sigillo_digitale && (
        <div
          className="flex items-center justify-between px-5"
          style={{ backgroundColor: 'rgba(212,175,55,0.07)', borderBottom: '1px solid rgba(212,175,55,0.15)', padding: '11px 20px' }}
        >
          <div className="flex items-center gap-2">
            <span className="font-inter text-[10px] font-semibold tracking-[0.25em] uppercase" style={{ color: 'rgba(212,175,55,0.90)' }}>
              SIGILLO DIGITALE
            </span>
            <div className="h-[10px]" style={{ width: '1px', backgroundColor: 'rgba(212,175,55,0.25)' }} />
            <span className="font-cormorant italic text-[13px]" style={{ color: 'rgba(212,175,55,0.50)' }}>
              {language === 'it' ? 'Attestato verificabile con QR' : 'Verifiable certificate with QR'}
            </span>
          </div>
          <QrMarkSvg />
        </div>
      )}

      {/* F. Main content */}
      <div className="container mx-auto px-6 max-w-3xl py-10 space-y-0">

        {/* F1. Il Metodo */}
        <motion.div {...reveal}>
          <GhostNumber n={nextSection()} />
          <SectionLabel>{language === 'it' ? 'Il Metodo' : 'The Method'}</SectionLabel>
          <p className="font-cormorant text-[17px] leading-[1.85] font-light" style={{ color: 'rgba(245,245,245,0.62)' }}>
            {renderDescriptionWithEmDash(description)}
          </p>
        </motion.div>

        {/* F2. A Chi È Rivolto */}
        {allDayItems.length > 0 && (
          <motion.div {...reveal} className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(212,175,55,0.10)' }}>
            <GhostNumber n={nextSection()} />
            <SectionLabel>{language === 'it' ? 'A Chi È Rivolto' : 'Who It\'s For'}</SectionLabel>
            {allDayItems.slice(0, 3).map((item, i) => (
              <DotItem key={i} text={item} index={i} />
            ))}
          </motion.div>
        )}

        {/* F3. Cosa Imparerai */}
        {learnSections ? (
          <motion.div {...reveal} className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(212,175,55,0.10)' }}>
            <GhostNumber n={nextSection()} />
            <SectionLabel>{language === 'it' ? 'Cosa Imparerai' : 'What You\'ll Learn'}</SectionLabel>
            {learnSections.map((section, si) => (
              <div key={si}>
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase mt-4 mb-2" style={{ color: 'rgba(245,245,245,0.30)' }}>
                  {section.title}
                </p>
                {section.items.map((item, i) => (
                  <DotItem key={i} text={item} index={i} />
                ))}
              </div>
            ))}
          </motion.div>
        ) : allDayItems.length > 3 && (
          <motion.div {...reveal} className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(212,175,55,0.10)' }}>
            <GhostNumber n={nextSection()} />
            <SectionLabel>{language === 'it' ? 'Cosa Imparerai' : 'What You\'ll Learn'}</SectionLabel>
            {course.days.map((day, di) => (
              <div key={di}>
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase mt-4 mb-2" style={{ color: 'rgba(245,245,245,0.30)' }}>
                  {language === 'it' ? day.title_it : day.title_en}
                </p>
                {(language === 'it' ? day.items_it : day.items_en).map((item, i) => (
                  <DotItem key={i} text={item} index={i} />
                ))}
              </div>
            ))}
          </motion.div>
        )}

        {/* F4. Programma */}
        {programme && (
          <motion.div {...reveal} className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(212,175,55,0.10)' }}>
            <GhostNumber n={nextSection()} />
            <SectionLabel>{language === 'it' ? 'Programma della Giornata' : 'Day Programme'}</SectionLabel>
            {programme.map((block, i) => (
              <div key={i} className="mb-4 pl-3" style={{ borderLeft: '2px solid rgba(212,175,55,0.25)' }}>
                <p className="font-inter text-[9px] tracking-[0.2em] uppercase text-primary mb-1">{block.time}</p>
                <p className="font-cormorant text-[15px] font-semibold tracking-[0.08em] mb-1" style={{ color: 'rgba(245,245,245,0.80)' }}>
                  {block.title}
                </p>
                {block.body && (
                  <p className="font-inter text-[11px] leading-[1.65]" style={{ color: 'rgba(245,245,245,0.42)' }}>{block.body}</p>
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* F5. Differentiator */}
        {diff && (
          <motion.div {...reveal} className="mt-8 p-6" style={{ border: '1px solid rgba(212,175,55,0.18)', borderTopWidth: '3px', borderTopColor: 'hsl(var(--primary))', backgroundColor: '#050505' }}>
            <p className="font-inter text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(212,175,55,0.45)' }}>
              {diff.title}
            </p>
            {diff.stats.map((stat, i) => (
              <div key={i} className={`flex items-center pb-3 mb-3 ${i < diff.stats.length - 1 ? '' : ''}`} style={i < diff.stats.length - 1 ? { borderBottom: '1px solid rgba(212,175,55,0.06)' } : undefined}>
                <span className="font-cormorant text-[64px] italic font-light leading-none min-w-[90px]" style={{ color: i === 0 ? 'rgba(212,175,55,0.90)' : 'rgba(245,245,245,0.20)' }}>
                  {stat.value}
                </span>
                <span className="font-inter text-[10px] tracking-[0.1em] uppercase leading-[1.4] pl-[10px]" style={{ color: i === 0 ? 'rgba(245,245,245,0.40)' : 'rgba(245,245,245,0.25)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
            <p className="font-inter text-[11px] leading-[1.7] mt-3" style={{ color: 'rgba(245,245,245,0.45)' }}>{diff.body}</p>
          </motion.div>
        )}

        {/* F6. Comparison table */}
        {comparison && (
          <motion.div {...reveal} className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(212,175,55,0.10)' }}>
            <SectionLabel>
              {language === 'it' ? 'Velvet Lift vs Corsi Tipici a Varese' : 'Velvet Lift vs Typical Courses in Varese'}
            </SectionLabel>
            <table className="w-full border-collapse table-fixed mt-4">
              <thead>
                <tr>
                  <th className="font-inter text-[9px] tracking-[0.15em] uppercase text-left pb-2" style={{ color: 'rgba(212,175,55,0.55)', borderBottom: '1px solid rgba(212,175,55,0.15)' }}>&nbsp;</th>
                  <th className="font-inter text-[9px] tracking-[0.15em] uppercase text-left pb-2" style={{ color: 'rgba(212,175,55,0.55)', borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
                    {language === 'it' ? 'Mercato' : 'Market'}
                  </th>
                  <th className="font-inter text-[9px] tracking-[0.15em] uppercase text-right pb-2" style={{ color: 'rgba(212,175,55,0.55)', borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
                    Velvet Lift
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, i) => (
                  <tr key={i}>
                    <td className="font-inter text-[10px] py-3 leading-[1.5]" style={{ color: 'rgba(245,245,245,0.50)', borderBottom: '1px solid rgba(245,245,245,0.04)' }}>{row.label}</td>
                    <td className="font-inter text-[10px] py-3 leading-[1.5]" style={{ color: 'rgba(245,245,245,0.50)', borderBottom: '1px solid rgba(245,245,245,0.04)' }}>{row.market}</td>
                    <td className="font-inter text-[10px] py-3 leading-[1.5] font-semibold text-right pl-2 text-primary" style={{ borderBottom: '1px solid rgba(245,245,245,0.04)', borderLeft: '2px solid rgba(212,175,55,0.20)' }}>{row.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* F7. Details */}
        {details && (
          <motion.div {...reveal} className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(212,175,55,0.10)' }}>
            <GhostNumber n="06" />
            <SectionLabel>{language === 'it' ? 'Dettagli' : 'Details'}</SectionLabel>
            {details.map((row, i) => (
              <div key={i} className="flex justify-between items-baseline py-[11px]" style={{ borderBottom: '1px solid rgba(245,245,245,0.05)' }}>
                <span className="font-inter text-[9px] tracking-[0.18em] uppercase w-[42%]" style={{ color: 'rgba(245,245,245,0.30)' }}>
                  {row.key}
                </span>
                <span
                  className={`text-right w-[55%] leading-[1.5] ${(row.key === 'Quota' || row.key === 'Fee') ? 'font-cormorant italic text-[18px] font-light text-primary' : 'font-inter text-[11px]'}`}
                  style={(row.key === 'Quota' || row.key === 'Fee') ? undefined : { color: 'rgba(245,245,245,0.75)' }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {/* F8. Brochure download */}
        {course.sigillo_digitale && (
          <motion.div {...reveal} className="mt-8 p-6 relative overflow-hidden" style={{ border: '1px solid rgba(212,175,55,0.15)', backgroundColor: '#030303' }}>
            <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03 }}>
              <svg width="100%" height="100%"><filter id="n"><feTurbulence baseFrequency="0.65" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#n)" /></svg>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-[5px] h-[5px]" style={{ backgroundColor: 'rgba(212,175,55,0.60)', transform: 'rotate(45deg)' }} />
                <span className="font-inter text-[8px] tracking-[0.35em] uppercase" style={{ color: 'rgba(212,175,55,0.60)' }}>
                  {language === 'it' ? 'Scarica il Programma Completo' : 'Download the Full Programme'}
                </span>
              </div>
              <p className="font-cormorant italic text-[22px] font-light text-foreground mb-2">
                {language === 'it' ? 'Il corso in un documento.' : 'The course in one document.'}
              </p>
              <p className="font-inter text-[12px] leading-[1.7] mb-5" style={{ color: 'rgba(245,245,245,0.45)' }}>
                {language === 'it'
                  ? 'Programma completo, dettagli, docente e condizioni. Lascia il tuo nome e WhatsApp — ricevi il PDF istantaneamente.'
                  : 'Full programme, details, teacher and conditions. Leave your name and WhatsApp — receive the PDF instantly.'}
              </p>
              <div className="flex items-center gap-5">
                <QRCodeSVG
                  value={`https://bellefemme.it/brochure/${course.slug.replace('/', '')}`}
                  size={72}
                  bgColor="transparent"
                  fgColor="#D4AF37"
                  style={{ opacity: 0.7 }}
                />
                <div className="flex flex-col gap-2">
                  <span className="font-inter text-[9px] tracking-[0.15em] uppercase" style={{ color: 'rgba(245,245,245,0.25)' }}>
                    {language === 'it' ? 'Scansiona · oppure' : 'Scan · or'}
                  </span>
                  <button
                    onClick={() => navigate(`/brochure/${course.slug.replace('/', '')}`)}
                    className="font-inter font-bold text-[10px] tracking-[0.22em] uppercase px-6 py-3 min-h-[44px] transition-colors"
                    style={{ backgroundColor: 'hsl(var(--primary))', color: '#000' }}
                  >
                    {language === 'it' ? 'Scarica il PDF' : 'Download PDF'}
                  </button>
                </div>
              </div>
              <p className="font-inter text-[9px] mt-4" style={{ color: 'rgba(245,245,245,0.20)' }}>
                {language === 'it' ? 'Nessuno spam. Solo il tuo PDF.' : 'No spam. Just your PDF.'}
              </p>
            </div>
          </motion.div>
        )}

        {/* F9. Sigillo Digitale block */}
        {course.sigillo_digitale && (
          <motion.div {...reveal} className="mt-8" style={{ border: '1px solid rgba(212,175,55,0.20)', borderTopWidth: '3px', borderTopColor: 'hsl(var(--primary))', backgroundColor: '#050505', padding: '22px' }}>
            <p className="font-inter text-[10px] font-semibold tracking-[0.25em] uppercase mb-2" style={{ color: 'rgba(212,175,55,0.90)' }}>
              Sigillo Digitale
            </p>
            <p className="font-cormorant italic text-[24px] font-light text-foreground mb-2 leading-tight">
              {language === 'it' ? 'Il tuo attestato risponde.' : 'Your certificate answers.'}
            </p>
            <p className="font-inter text-[12px] leading-[1.75] mb-4" style={{ color: 'rgba(245,245,245,0.50)' }}>
              {language === 'it'
                ? 'Ogni cliente può verificarlo in 3 secondi. Scansiona il QR — vede il tuo nome, il corso, la data. Non un PDF. Una credenziale che lavora per te.'
                : 'Any client can verify it in 3 seconds. Scan the QR — they see your name, the course, the date. Not a PDF. A credential that works for you.'}
            </p>
            <Link
              to="/sigillo-digitale"
              className="font-inter font-bold text-[9px] tracking-[0.2em] uppercase inline-flex items-center min-h-[44px] px-4 py-[11px] transition-colors"
              style={{ color: 'rgba(212,175,55,0.80)', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              {language === 'it' ? 'Scopri il Sigillo Digitale →' : 'Discover the Digital Seal →'}
            </Link>
          </motion.div>
        )}

        {/* F10. La Docente */}
        <motion.div {...reveal} className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(212,175,55,0.10)' }}>
          <GhostNumber n="07" />
          <SectionLabel>{language === 'it' ? 'La Docente' : 'The Teacher'}</SectionLabel>
          <p className="font-cormorant italic text-[28px] font-light text-foreground mb-1">Mouna Chabbar</p>
          <p className="font-inter text-[9px] tracking-[0.28em] uppercase mb-3" style={{ color: 'rgba(212,175,55,0.55)' }}>
            {language === 'it' ? 'Craft Master · Giudice Internazionale' : 'Craft Master · International Judge'}
          </p>
          <p className="font-inter text-[11px] leading-[1.7] mb-3" style={{ color: 'rgba(245,245,245,0.42)' }}>
            {language === 'it'
              ? 'Dermopigmentista clinica con oltre un decennio di pratica sull\'area perioculare. Insegna la laminazione con la stessa profondità anatomica con cui lavora ogni giorno sulle sopracciglia dei suoi clienti.'
              : 'Clinical dermopigmentation specialist with over a decade of periocular practice. She teaches lamination with the same anatomical depth she brings to her daily client work.'}
          </p>
          <Link
            to="/la-firma"
            className="font-inter font-bold text-[9px] tracking-[0.2em] uppercase inline-flex items-center min-h-[44px] px-[14px] py-[10px] transition-colors"
            style={{ color: 'rgba(212,175,55,0.75)', border: '1px solid rgba(212,175,55,0.22)' }}
          >
            {language === 'it' ? 'Scopri la Docente → La Firma' : 'Meet the Teacher → La Firma'}
          </Link>
        </motion.div>

        {/* F11. Dopo il Corso */}
        {afterCourse && (
          <motion.div {...reveal} className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(212,175,55,0.10)' }}>
            <GhostNumber n="08" />
            <SectionLabel>{language === 'it' ? 'Dopo il Corso' : 'After the Course'}</SectionLabel>
            {afterCourse.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-4">
                <div className="w-[28px] h-[28px] flex items-center justify-center flex-shrink-0" style={{ border: '1px solid rgba(212,175,55,0.30)' }}>
                  <div className="w-[6px] h-[6px]" style={{ backgroundColor: 'rgba(212,175,55,0.50)', transform: 'rotate(45deg)' }} />
                </div>
                <div>
                  <p className="font-inter font-semibold text-[11px] tracking-[0.1em] uppercase mb-[3px]" style={{ color: 'rgba(245,245,245,0.70)' }}>
                    {item.label}
                  </p>
                  <p className="font-inter text-[11px] leading-[1.55]" style={{ color: 'rgba(245,245,245,0.38)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Certification fallback for courses without new fields */}
        {!course.sigillo_digitale && certificate && (
          <motion.div {...reveal} className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(212,175,55,0.10)' }}>
            <GhostNumber n={nextSection()} />
            <SectionLabel>{language === 'it' ? 'Certificazione' : 'Certification'}</SectionLabel>
            <p className="font-inter text-[12px] leading-relaxed" style={{ color: 'rgba(245,245,245,0.60)' }}>{certificate}</p>
          </motion.div>
        )}
      </div>

      {/* G. Contact strip */}
      <div className="px-6 py-6" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(212,175,55,0.10)' }}>
        <p className="font-inter text-[9px] tracking-[0.35em] uppercase mb-3" style={{ color: 'rgba(212,175,55,0.45)' }}>
          {language === 'it' ? 'Contatti' : 'Contact'}
        </p>
        {['+39 392 448 7530 · WhatsApp', 'info@bellefemme.it', 'bellefemme.it'].map((line, i) => (
          <div key={i} className="flex items-center gap-[10px] mb-2">
            <div className="w-[6px] h-[6px] flex-shrink-0" style={{ backgroundColor: 'rgba(212,175,55,0.40)', transform: 'rotate(45deg)' }} />
            <span className="font-inter text-[12px]" style={{ color: 'rgba(245,245,245,0.60)' }}>{line}</span>
          </div>
        ))}
      </div>

      {/* H. CTA block */}
      <div className="px-6 py-6 flex flex-col gap-[10px]">
        <button
          onClick={() => setSheetOpen(true)}
          className="w-full font-inter font-bold text-[10px] tracking-[0.22em] uppercase text-center py-4 min-h-[48px] transition-colors"
          style={{ backgroundColor: 'hsl(var(--primary))', color: '#000' }}
        >
          {language === 'it' ? 'Richiedi Informazioni' : 'Request Information'}
        </button>
        <button
          onClick={() => navigate('/#academy')}
          className="w-full font-inter text-[9px] tracking-[0.2em] uppercase text-center py-[13px] min-h-[44px] transition-colors"
          style={{ color: 'rgba(212,175,55,0.65)', border: '1px solid rgba(212,175,55,0.22)', backgroundColor: 'transparent' }}
        >
          {language === 'it' ? '← Torna all\'Accademia' : '← Back to Academy'}
        </button>
      </div>

      <BookingSheet open={sheetOpen} onOpenChange={setSheetOpen} mode="course" itemName={course.bf_name} />
      <SiteFooter />
    </div>
  );
};
