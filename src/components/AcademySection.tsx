import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCatalogCourses, type Course } from '@/Data/courses';
import { BookingSheet } from './BookingSheet';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';


const TESTIMONIALS_ACADEMY = [
  {
    quote_it: 'Concluso corso di Microblading e Microshading. Io ho scelto il corso individuale e sono davvero molto soddisfatta. Mouna è molto preparata, seria, attenta, paziente, precisa, disponibile e soprattutto tiene molto al suo lavoro, e cerca di trasmettere tutte le sue conoscenze ed esperienze. Corso completo, con tanta pratica, e si toccano tutti gli argomenti principali, dalla consulenza iniziale con la cliente, alle varie forme di sopracciglia, come preparare la postazione, rischi, ecc. Avevo già fatto anni fa un altro corso, ma non ci sono paragoni!!! Grazie mille per tutto.',
    quote_en: 'Completed the Microblading and Microshading course. I chose the individual course and I am truly very satisfied. Mouna is very well-prepared, serious, attentive, patient, precise, available and above all she cares deeply about her work and tries to pass on all her knowledge and experience. A complete course with a lot of practice, covering all the main topics from the initial client consultation to the various brow shapes, how to set up the workstation, risks, etc. I had done another course years ago, but there is no comparison!!! Thank you so much for everything.',
    name: 'Caterina M.',
    role_it: 'Corsista — Raw Stroke Master',
    role_en: 'Student — Raw Stroke Master',
  },
  {
    quote_it: 'Ho frequentato il corso Master Blueprint con Mouna e non avrei potuto scegliere meglio. Cinque giorni intensivi, ogni giornata strutturata come una vera residenza professionale. Sono uscita con un metodo completo, non solo con delle nozioni.',
    quote_en: 'I attended the Master Blueprint course with Mouna and I could not have chosen better. Five intensive days, each structured as a true professional residency. I left with a complete method, not just notions.',
    name: 'Giorgia C.',
    role_it: 'Corsista — Master Blueprint',
    role_en: 'Student — Master Blueprint',
  },
  {
    quote_it: 'Il corso Pigment Restauro è stato esattamente quello di cui avevo bisogno. Mouna insegna con una precisione che non ho trovato da nessun\'altra parte. Ogni caso reale, ogni protocollo spiegato con metodo. Sono tornata al lavoro con strumenti veri.',
    quote_en: 'The Pigment Restauro course was exactly what I needed. Mouna teaches with a precision I have not found anywhere else. Every real case, every protocol explained methodically. I returned to work with real tools.',
    name: 'Tatiana S.',
    role_it: 'Corsista — Pigment Restauro',
    role_en: 'Student — Pigment Restauro',
  },
];

const CourseImage = ({ course }: { course: Course }) => {
  const [failed, setFailed] = useState(false);
  const hasImage = course.images.length > 0 && !failed;

  if (hasImage) {
    return (
      <img
        src={course.images[0]}
        alt={course.bf_name}
        className="w-full object-cover"
        style={{ height: '240px' }}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="w-full flex items-center justify-center" style={{ height: '240px', background: '#1a1a1a' }}>
      <span className="font-cormorant text-4xl font-light text-primary/20">
        {course.id.charAt(0).toUpperCase()}
      </span>
    </div>
  );
};

export const AcademySection = () => {
  const { t, language } = useLanguage();
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedCourseName, setSelectedCourseName] = useState('');
  
  const [showChevron, setShowChevron] = useState(true);

  const catalog = getCatalogCourses();

  useEffect(() => {
    const el = document.getElementById('academy');
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowChevron(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const openCourseSheet = (courseName: string) => {
    setSelectedCourseName(courseName);
    setSheetOpen(true);
  };

  const handlePrivateCourseWhatsApp = () => {
    const msg = language === 'it'
      ? 'Salve, sono interessata a un corso privato 1 su 1 con la Craft Master. Vorrei ricevere informazioni.'
      : 'Hello, I am interested in a private 1-to-1 course with the Craft Master. I would like more information.';
    window.open(`https://wa.me/393924487530?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const toggleAccordion = (courseId: string) => {
    const next = expandedCourse === courseId ? null : courseId;
    setExpandedCourse(next);
    if (next) {
      setTimeout(() => {
        document.getElementById('course-' + courseId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
    }
  };

  const mentorshipCopy = language === 'it'
    ? 'Non un corso di massa. Un modello di mentorship 1%, dove ogni studente riceve attenzione individuale dalla Craft Master Mouna Chabbar. Massimo 4 partecipanti per sessione.'
    : 'Not a mass course. A 1% mentorship model where every student receives individual attention from Craft Master Mouna Chabbar. Maximum 4 participants per session.';

  const privateCourseNote = language === 'it'
    ? 'Ogni corso è disponibile anche in formato privato, 1 su 1 con la Craft Master. Su richiesta.'
    : 'Every course is also available in private format, 1 to 1 with the Craft Master. On request.';

  return (
    <>
      <section
        id="academy"
        className="relative"
      >
        {/* A8: Hero viewport with background image */}
        <div className="relative" style={{ minHeight: '100svh' }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/branding/academy-environment.jpg)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, hsla(0,0%,0%,0.25) 0%, hsla(0,0%,0%,0.50) 45%, hsla(0,0%,0%,0.92) 100%)',
            }}
          />

          <div
            className="relative z-10 flex flex-col justify-end px-6 md:px-12"
            style={{ minHeight: '100svh' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 mb-20 max-w-4xl mx-auto"
            >
              <p className="text-xs tracking-[0.4em] uppercase text-primary/60">Belle Femme Academy</p>
              <h2 className="font-cormorant text-3xl md:text-5xl font-light text-foreground tracking-[2px]">
                {t.academy.title}
              </h2>
              <div className="h-px w-16 bg-primary/40 mx-auto" />
              <p className="text-xl font-cormorant italic text-primary/90 tracking-wide">
                {t.academy.subtitle}
              </p>
              <p className="text-base text-foreground/60 leading-relaxed max-w-lg mx-auto">
                {mentorshipCopy}
              </p>
              <p className="font-cormorant italic text-base text-primary/70 text-center">
                {privateCourseNote}
              </p>
            </motion.div>

            {showChevron && (
              <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown className="w-5 h-5" style={{ color: 'hsl(43 76% 52% / 0.5)' }} />
              </motion.div>
            )}
          </div>
        </div>

        {/* Content below hero */}
        <div
          className="relative py-16 md:py-48"
          style={{
            background: 'linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 5%) 50%, hsl(0 0% 0%) 100%)',
          }}
        >
          <div className="relative container mx-auto px-6 md:px-12 max-w-4xl">

            {/* CORSO PRIVATO — Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-24 border border-primary/20 p-6 md:p-10 space-y-6"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">
                {language === 'it' ? 'Formato Esclusivo' : 'Exclusive Format'}
              </p>

              <div className="w-full flex items-center justify-center" style={{ height: '240px', background: '#1a1a1a' }}>
                <span className="font-cormorant text-5xl font-light text-primary/20">1·1</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-primary/60">1 · 1</span>
                <div>
                  <h3 className="font-inter font-bold text-[12px] tracking-[0.25em] uppercase text-foreground">
                    CORSO PRIVATO
                  </h3>
                  <p className="font-cormorant italic text-xl text-primary/90">
                    {language === 'it' ? 'Con Craft Master Mouna Chabbar' : 'With Craft Master Mouna Chabbar'}
                  </p>
                </div>
              </div>

              <p className="text-[10px] tracking-[0.2em] uppercase text-primary/60">
                {language === 'it' ? 'Su Richiesta · Solo tu + la Craft Master' : 'On Request · Just you + the Craft Master'}
              </p>

              <p className="text-sm text-foreground/60 leading-relaxed">
                {language === 'it'
                  ? 'Ogni corso del catalogo è disponibile in formato privato, 1 su 1 con la Craft Master. Attenzione totale. Nessun altro studente. Programma calibrato sul tuo livello.'
                  : 'Every course in the catalogue is available in private format, 1 to 1 with the Craft Master. Total attention. No other students. Programme tailored to your level.'}
              </p>

              <p className="font-cormorant italic text-sm text-primary/70">
                {language === 'it' ? 'Attenzione totale · Nessun altro studente' : 'Total attention · No other students'}
              </p>

              <button
                onClick={handlePrivateCourseWhatsApp}
                className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors"
              >
                {language === 'it' ? 'RICHIEDI INFORMAZIONI' : 'REQUEST INFORMATION'}
              </button>
            </motion.div>

            {/* Academy proof block */}
            <div className="mb-16 text-center space-y-4">
              <div className="h-px w-12 mx-auto" style={{ backgroundColor: 'rgba(212,175,55,0.4)' }} />
              <p className="font-cormorant italic text-xl text-primary/90 max-w-lg mx-auto">
                Ogni corsista esce con un metodo — non solo una tecnica.
              </p>
            </div>

            {/* COURSE CATALOGUE — Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-24 space-y-0"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60 mb-8 text-center">
                {language === 'it' ? 'Catalogo Completo — 8 Corsi' : 'Complete Catalogue — 8 Courses'}
              </p>

              {catalog.map((c, index) => {
                const isExpanded = expandedCourse === c.id;
                const number = String(index + 1).padStart(2, '0');

                return (
                  <div key={c.id} className="border-t border-primary/10" id={`course-${c.id}`}>
                    <button
                      onClick={() => toggleAccordion(c.id)}
                      className="w-full text-left py-6 px-4 flex items-center gap-4 md:gap-6 min-h-[48px] hover:bg-primary/5 transition-all duration-300"
                    >
                      <span className="font-cormorant text-2xl font-light text-primary/20 w-8 shrink-0">{number}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-inter font-bold text-[11px] tracking-[0.2em] uppercase text-foreground">
                          {c.bf_name}
                        </h4>
                        <p className="font-cormorant italic text-base text-primary/70 mt-1">
                          {language === 'it' ? c.subtitle_it : c.subtitle_en}
                        </p>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 text-[10px] tracking-[0.1em] uppercase text-foreground/50 shrink-0">
                        <span>{language === 'it' ? c.duration_it : c.duration_en}</span>
                        <span>Max {c.participants}</span>
                      </div>
                      <span className="text-primary/40 text-sm shrink-0">{isExpanded ? '−' : '+'}</span>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 space-y-6">
                            {/* A9: Full bleed image */}
                            <CourseImage course={c} />

                            <div className="space-y-4 px-4">
                              <div className="sm:hidden flex items-center gap-4 text-[10px] tracking-[0.1em] uppercase text-foreground/50">
                                <span>{language === 'it' ? c.duration_it : c.duration_en}</span>
                                <span>Max {c.participants}</span>
                              </div>

                              {(language === 'it' ? c.description_it : c.description_en) && (
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                  {language === 'it' ? c.description_it : c.description_en}
                                </p>
                              )}

                              <Link
                                to={c.slug}
                                className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase text-primary hover:text-primary/80 transition-colors inline-block min-h-[44px] flex items-center"
                              >
                                {language === 'it' ? 'Scopri il Corso →' : 'Discover the Course →'}
                              </Link>

                              <button
                                onClick={() => openCourseSheet(c.bf_name)}
                                className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors block"
                              >
                                {language === 'it' ? 'Richiedi Informazioni' : 'Request Information'}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <div className="border-t border-primary/10" />
            </motion.div>



            {/* ACADEMY TESTIMONIALS */}
            <div className="mt-24" style={{ backgroundColor: '#0A0A0A' }}>
              <div className="text-center space-y-4 mb-12">
                <p className="font-inter text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(212,175,55,0.6)' }}>
                  Belle Femme · Academy
                </p>
                <h3 className="font-cormorant text-2xl md:text-3xl font-light tracking-[2px]" style={{ color: '#F5F5F5' }}>
                  {language === 'it'
                    ? 'Dal Vivo — Le Corsiste Raccontano'
                    : 'Live — Students Speak'}
                </h3>
                <div className="h-px w-12 mx-auto" style={{ backgroundColor: 'rgba(212,175,55,0.4)' }} />
              </div>

              <div className="space-y-8">
                {TESTIMONIALS_ACADEMY.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    className="relative p-6 md:p-8"
                    style={{ backgroundColor: '#0A0A0A', borderTop: '3px solid #D4AF37', border: '1px solid rgba(212,175,55,0.12)', borderTopWidth: '3px', borderTopColor: '#D4AF37' }}
                  >
                    <span className="absolute font-cormorant pointer-events-none" style={{ fontSize: '56px', color: 'rgba(212,175,55,0.08)', top: '12px', left: '20px' }}>"</span>
                    <p className="font-cormorant italic" style={{ fontSize: '17px', color: 'rgba(245,245,245,0.85)', lineHeight: 1.75, marginTop: '28px' }}>
                      {language === 'it'
                        ? testimonial.quote_it
                        : testimonial.quote_en}
                    </p>
                    <div style={{ borderTop: '1px solid rgba(212,175,55,0.1)', marginTop: '18px', paddingTop: '14px' }}>
                      <p className="font-inter font-semibold text-[11px] uppercase" style={{ letterSpacing: '0.18em', color: '#D4AF37' }}>
                        {testimonial.name}
                      </p>
                      <a
                        href="https://www.instagram.com/bellefemme.pmu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter uppercase hover:opacity-80 transition-opacity"
                        style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(212,175,55,0.45)' }}
                      >
                        Fonte: Belle Femme Academy
                      </a>
                    </div>
                    <p className="font-inter text-[10px] tracking-[0.1em] uppercase mt-2" style={{ color: 'rgba(245,245,245,0.4)' }}>
                      {language === 'it'
                        ? testimonial.role_it
                        : testimonial.role_en}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a
                  href="https://www.instagram.com/bellefemme.pmu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter uppercase hover:opacity-80 transition-opacity"
                  style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(212,175,55,0.6)' }}
                >
                  {language === 'it'
                    ? 'Leggi tutte le recensioni → Instagram'
                    : 'Read all reviews → Instagram'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        mode="course"
        itemName={selectedCourseName}
      />
    </>
  );
};
