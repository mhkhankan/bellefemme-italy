import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { COURSES, getFeaturedCourse, getCatalogCourses } from '@/Data/courses';
import { LocationSheet } from './LocationSheet';
import type { Course } from '@/Data/courses';

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
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedCourseName, setSelectedCourseName] = useState('');

  const featured = getFeaturedCourse();
  const catalog = getCatalogCourses();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !city.trim()) return;
    setSubmitting(true);
    try {
      await supabase.from('academy_waitlist').insert({
        name: name.trim(),
        phone: phone.trim(),
        city: city.trim(),
        course: course || null,
      } as any);
      setSubmitted(true);
      toast({ title: language === 'it' ? 'RICHIESTA PRESA IN CARICO' : 'REQUEST RECEIVED' });
    } catch {
      toast({
        title: language === 'it' ? 'Errore di connessione.' : 'Connection error.',
        description: language === 'it' ? 'Scrivici su WhatsApp per iscriverti.' : 'Please contact us on WhatsApp to register.',
      });
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
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">Belle Femme Academy</p>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light text-foreground tracking-[2px]">
              {t.academy.title}
            </h2>
            <div className="h-px w-16 bg-primary/40 mx-auto" />
            <p className="text-lg font-cormorant italic text-primary/80 tracking-wide">
              {t.academy.subtitle}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
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
            <p className="font-cormorant italic text-xl text-primary/80">
              {language === 'it' ? featured.subtitle_it : featured.subtitle_en}
            </p>
            <div className="flex flex-wrap gap-4 text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
              <span>{language === 'it' ? featured.duration_it : featured.duration_en}</span>
              <span>·</span>
              <span>Max {featured.participants} {language === 'it' ? 'partecipanti' : 'participants'}</span>
            </div>
            {featured.description_it && (
              <p className="text-sm text-muted-foreground leading-relaxed">
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
              <a
                href={`#course-${featured.id}`}
                className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-8 py-4 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500 text-center flex items-center justify-center"
              >
                {language === 'it' ? 'Scopri il Corso' : 'Discover the Course'}
              </a>
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
                      <p className="font-cormorant italic text-sm text-primary/60 mt-1 truncate">
                        {language === 'it' ? c.subtitle_it : c.subtitle_en}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-[9px] tracking-[0.1em] uppercase text-muted-foreground shrink-0">
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
                        <div className="px-4 pb-8 space-y-6 ml-12 md:ml-14">
                          <div className="sm:hidden flex items-center gap-4 text-[9px] tracking-[0.1em] uppercase text-muted-foreground">
                            <span>{language === 'it' ? c.duration_it : c.duration_en}</span>
                            <span>Max {c.participants}</span>
                          </div>

                          <CourseImage course={c} />

                          {(language === 'it' ? c.description_it : c.description_en) && (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {language === 'it' ? c.description_it : c.description_en}
                            </p>
                          )}

                          {/* Day syllabus */}
                          {c.days.map((day, di) => (
                            <div key={di} className="space-y-2">
                              <p className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase text-foreground/80">
                                {language === 'it' ? day.title_it : day.title_en}
                              </p>
                              <ul className="space-y-1">
                                {(language === 'it' ? day.items_it : day.items_en).map((item, ii) => (
                                  <li key={ii} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                                    <span className="text-primary/40 mt-1">·</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          <button
                            onClick={() => openCourseSheet(c.bf_name)}
                            className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors"
                          >
                            {language === 'it' ? 'Richiedi Informazioni' : 'Request Information'}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <div className="border-t border-primary/10" />
          </motion.div>

          {/* WAITLIST FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-sm mx-auto"
          >
            <p className="text-center font-cormorant text-xl text-primary/80 tracking-[2px] mb-8">
              {t.academy.waitlistTitle}
            </p>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <p className="font-inter font-bold text-[11px] tracking-[0.2em] uppercase text-primary">
                  {language === 'it' ? 'RICHIESTA PRESA IN CARICO' : 'REQUEST RECEIVED'}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === 'it'
                    ? "Il tuo profilo è ora in lista d'attesa prioritaria."
                    : 'Your profile is now on the priority waitlist.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'it' ? 'Nome e Cognome' : 'Full Name'}
                  required
                  maxLength={100}
                  className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground min-h-[48px] focus:border-primary/50 outline-none transition-colors"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={language === 'it' ? 'WhatsApp / Telefono' : 'WhatsApp / Phone'}
                  required
                  maxLength={20}
                  className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground min-h-[48px] focus:border-primary/50 outline-none transition-colors"
                />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={language === 'it' ? 'Città e Paese' : 'City and Country'}
                  required
                  maxLength={100}
                  className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground min-h-[48px] focus:border-primary/50 outline-none transition-colors"
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
            )}
          </motion.div>
        </div>
      </section>

      <LocationSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        treatmentName={selectedCourseName}
        mode="course"
      />
    </>
  );
};
