import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { COURSES, getFeaturedCourse, getCatalogCourses } from '@/Data/courses';
import { CourseLocationSheet } from './CourseLocationSheet';
import { Link } from 'react-router-dom';
import type { Course } from '@/Data/courses';

const TESTIMONIALS_ACADEMY = [
  {
    quote_it: 'Mi hai da subito trasmesso sicurezza nel lavoro che stavo eseguendo. In 5 giorni mi sono portata a casa un percorso completo.',
    quote_en: 'You immediately gave me confidence in the work I was doing. In 5 days I brought home a complete course.',
    name: 'Giorgia C.',
    role_it: 'Corsista — Master Blueprint',
    role_en: 'Student — Master Blueprint',
  },
  {
    quote_it: 'Ottima insegnante, molto attenta e presente anche dopo il corso. Sempre disponibile.',
    quote_en: 'Excellent teacher, very attentive and present even after the course. Always available.',
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
        className="w-full aspect-[16/9] object-cover"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="w-full aspect-[16/9] shimmer-venetian flex items-center justify-center">
      <span className="font-cormorant text-4xl font-light text-primary/20">
        {course.id.charAt(0).toUpperCase()}
      </span>
    </div>
  );
};

export const AcademySection = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [course, setCourse] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedCourseName, setSelectedCourseName] = useState('');

  const featured = getFeaturedCourse();
  const catalog = getCatalogCourses();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !city.trim()) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from('academy_waitlist').insert({
        name: name.trim(),
        phone: phone.trim(),
        city: city.trim(),
        course: course || null,
      } as any);
      if (error) throw error;
      setSubmitted(true);
      toast({ title: language === 'it' ? 'RICHIESTA PRESA IN CARICO' : 'REQUEST RECEIVED' });
    } catch {
      const msg = encodeURIComponent(
        `Ciao, vorrei iscrivermi alla lista d'attesa Academy.\n\nNome: ${name.trim()}\nTelefono: ${phone.trim()}\nCittà: ${city.trim()}${course ? `\nCorso: ${course}` : ''}`
      );
      window.open(`https://wa.me/393516605507?text=${msg}`, '_blank');
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const openCourseSheet = (courseName: string) => {
    setSelectedCourseName(courseName);
    setSheetOpen(true);
  };

  const mentorshipCopy = language === 'it'
    ? 'Non un corso di massa. Un modello di mentorship 1%, dove ogni studente riceve attenzione individuale dalla Master Trainer Mouna Chabbar. Massimo 4 partecipanti per sessione.'
    : 'Not a mass course. A 1% mentorship model where every student receives individual attention from Master Trainer Mouna Chabbar. Maximum 4 participants per session.';

  return (
    <>
      <section
        id="academy"
        className="relative py-32 md:py-48"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 5%) 50%, hsl(0 0% 0%) 100%)',
        }}
      >
        <div className="relative container mx-auto px-6 md:px-12 max-w-4xl">
          {/* SECTION HEADER — 1% Mentorship Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 mb-24"
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
          </motion.div>

          {/* ACADEMY ENVIRONMENT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="w-full aspect-[16/9] shimmer-venetian flex items-center justify-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30">
                Masterclass Environment
              </span>
            </div>
          </motion.div>

          {/* FEATURED COURSE BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 border border-primary/20 p-6 md:p-10 space-y-6"
            id={`course-${featured.id}`}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">
              {language === 'it' ? 'Corso in Evidenza' : 'Featured Course'}
            </p>
            <CourseImage course={featured} />
            <h3 className="font-inter font-bold text-[12px] tracking-[0.25em] uppercase text-foreground">
              {featured.bf_name}
            </h3>
            <p className="font-cormorant italic text-xl text-primary/90">
              {language === 'it' ? featured.subtitle_it : featured.subtitle_en}
            </p>
            <div className="flex flex-wrap gap-4 text-xs tracking-[0.15em] uppercase text-foreground/50">
              <span>{language === 'it' ? featured.duration_it : featured.duration_en}</span>
              <span>·</span>
              <span>Max {featured.participants} {language === 'it' ? 'partecipanti' : 'participants'}</span>
            </div>
            {(language === 'it' ? featured.description_it : featured.description_en) && (
              <p className="text-base text-foreground/60 leading-relaxed">
                {language === 'it' ? featured.description_it : featured.description_en}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => openCourseSheet(featured.bf_name)}
                className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors"
              >
                {language === 'it' ? 'Richiedi Informazioni' : 'Request Information'}
              </button>
              <Link
                to={featured.slug}
                className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-8 py-4 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500 text-center flex items-center justify-center"
              >
                {language === 'it' ? 'Scopri il Corso' : 'Discover the Course'}
              </Link>
            </div>
          </motion.div>

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
                  {/* Collapsed header */}
                  <button
                    onClick={() => setExpandedCourse(isExpanded ? null : c.id)}
                    className="w-full text-left py-6 px-4 flex items-center gap-4 md:gap-6 min-h-[48px] hover:bg-primary/5 transition-all duration-300"
                  >
                    <span className="font-cormorant text-2xl font-light text-primary/20 w-8 shrink-0">{number}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-inter font-bold text-[11px] tracking-[0.2em] uppercase text-foreground">
                        {c.bf_name}
                      </h4>
                      <p className="font-cormorant italic text-base text-primary/70 mt-1 truncate">
                        {language === 'it' ? c.subtitle_it : c.subtitle_en}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-[10px] tracking-[0.1em] uppercase text-foreground/50 shrink-0">
                      <span>{language === 'it' ? c.duration_it : c.duration_en}</span>
                      <span>Max {c.participants}</span>
                    </div>
                    <span className="text-primary/40 text-sm shrink-0">{isExpanded ? '−' : '+'}</span>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-8 space-y-6">
                          {/* Course image — full width */}
                          <CourseImage course={c} />

                          <div className="space-y-4">
                            <div className="sm:hidden flex items-center gap-4 text-[10px] tracking-[0.1em] uppercase text-foreground/50">
                              <span>{language === 'it' ? c.duration_it : c.duration_en}</span>
                              <span>Max {c.participants}</span>
                            </div>

                            {(language === 'it' ? c.description_it : c.description_en) && (
                               <p className="text-base text-foreground/60 leading-relaxed">
                                {language === 'it' ? c.description_it : c.description_en}
                              </p>
                            )}

                            <Link
                              to={c.slug}
                              className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase text-primary hover:text-primary/80 transition-colors inline-block min-h-[44px] flex items-center"
                            >
                              {language === 'it' ? 'Scopri il Corso \u2192' : 'Discover the Course \u2192'}
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

          {/* WAITLIST TOGGLE + FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-sm mx-auto text-center"
          >
            {!showWaitlist && !submitted && (
              <button
                onClick={() => setShowWaitlist(true)}
                className="font-inter font-bold text-[11px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-10 py-4 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                {language === 'it' ? "Lista d'Attesa Elite" : 'Elite Waitlist'}
              </button>
            )}

            {showWaitlist && !submitted && (
              <div className="space-y-6">
                <p className="font-cormorant text-xl text-primary/90 tracking-[2px]">
                  {t.academy.waitlistTitle}
                </p>
                <form onSubmit={(e) => { handleSubmit(e).then(() => { if (submitted) setShowWaitlist(false); }); }} className="space-y-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'it' ? 'Nome e Cognome' : 'Full Name'}
                    required
                    maxLength={100}
                    className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 min-h-[48px] focus:border-primary/50 outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={language === 'it' ? 'WhatsApp / Telefono' : 'WhatsApp / Phone'}
                    required
                    maxLength={20}
                    className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 min-h-[48px] focus:border-primary/50 outline-none transition-colors"
                  />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={language === 'it' ? 'Città e Paese' : 'City and Country'}
                    required
                    maxLength={100}
                    className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 min-h-[48px] focus:border-primary/50 outline-none transition-colors"
                  />
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground min-h-[48px] focus:border-primary/50 outline-none transition-colors"
                  >
                    <option value="">{language === 'it' ? 'Corso di interesse (opzionale)' : 'Course of interest (optional)'}</option>
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.bf_name}>{c.bf_name}</option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full font-inter font-bold text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-all duration-500 disabled:opacity-50"
                  >
                    {t.academy.waitlistCta}
                  </button>
                </form>
              </div>
            )}

            {submitted && (
              <div className="py-8 space-y-4">
                <p className="font-inter font-bold text-[11px] tracking-[0.2em] uppercase text-primary">
                  {language === 'it' ? 'RICHIESTA PRESA IN CARICO' : 'REQUEST RECEIVED'}
                </p>
                <p className="text-base text-foreground/60 leading-relaxed">
                  {language === 'it'
                    ? "Il tuo profilo è ora in lista d'attesa prioritaria."
                    : 'Your profile is now on the priority waitlist.'}
                </p>
              </div>
            )}
          </motion.div>

          {/* ACADEMY TESTIMONIALS */}
          <div className="mt-24 text-center space-y-12">
            <h3 className="font-cormorant text-2xl md:text-3xl font-light text-foreground tracking-[2px]">
              {language === 'it' ? 'Voci delle Corsiste' : 'Student Voices'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS_ACADEMY.map((testimonial, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15 }} className="space-y-4 text-left">
                  <p className="font-cormorant italic text-base text-foreground/80 leading-relaxed">
                    "{language === 'it' ? testimonial.quote_it : testimonial.quote_en}"
                  </p>
                  <div>
                    <p className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground tracking-wide">
                      {language === 'it' ? testimonial.role_it : testimonial.role_en}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <a
              href="https://www.instagram.com/bellefemme.pmu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.15em] uppercase text-primary/60 hover:text-primary transition-colors inline-block"
            >
              {language === 'it'
                ? 'Leggi tutte le recensioni \u2192 Instagram'
                : 'Read all reviews \u2192 Instagram'}
            </a>
          </div>
        </div>
      </section>

      <CourseLocationSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        courseName={selectedCourseName}
      />
    </>
  );
};
