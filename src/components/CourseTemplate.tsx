import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, CheckCircle, MapPin, Phone, ArrowLeft, Package, Play, Pause, Award } from 'lucide-react';

interface DaySyllabus {
  title: string;
  items: string[];
}

interface StarterKit {
  title: string;
  items: string[];
}

type CourseKey = 'pmu' | 'microblading' | 'masterclass' | 'ombre_powder' | 'ombre_lips' | 'eyeliner' | 'masterclass_brows' | 'masterclass_lashes' | 'masterclass_lamination';

interface CourseTemplateProps {
  courseKey: CourseKey;
  videoSrc?: string;
  posterSrc?: string;
  technique?: string;
}

export const CourseTemplate = ({ courseKey, videoSrc, posterSrc, technique }: CourseTemplateProps) => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);

  const course = t.courses[courseKey] as {
    title: string;
    duration: string;
    description: string;
    subtitle?: string;
    days?: DaySyllabus[];
    starterKit?: StarterKit;
  };

  const cp = t.coursePage;
  const days = course.days ?? [];
  const dayCount = days.length;
  const hasStarterKit = !!course.starterKit;

  const whatsappMsg = encodeURIComponent(`Ciao Mouna, vorrei informazioni sul corso ${course.title} a Varese`);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && videoSrc) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && videoSrc) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* ── Back Navigation ── */}
      <div className="sticky top-0 z-50 border-b border-accent/10 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground/40 hover:text-accent transition-colors duration-300 group"
          >
            <ArrowLeft className={`w-3 h-3 transition-transform group-hover:-translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
            {cp.backToAcademy}
          </button>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-accent/70 border border-accent/20 px-3 py-1">
              <Shield className="w-2.5 h-2.5" />
              {cp.reach}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-foreground/40 border border-foreground/10 px-3 py-1">
              <CheckCircle className="w-2.5 h-2.5" />
              {cp.asl}
            </span>
          </div>
        </div>
      </div>

      {/* ── Hero Header ── */}
      <section
        className="relative overflow-hidden cursor-pointer group"
        style={{ minHeight: '60svh' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={togglePlay}
      >
        {posterSrc ? (
          <img
            src={posterSrc}
            alt={course.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-onyx via-background to-muted" />
        )}

        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            muted
            playsInline
            poster={posterSrc}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

        <div className="watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] whitespace-nowrap">
          {technique ?? course.title}
        </div>

        {videoSrc && (
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="glass-card p-4 rounded-full border border-accent/30">
              {isPlaying ? <Pause className="w-6 h-6 text-accent" /> : <Play className="w-6 h-6 text-accent" />}
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 md:px-12 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.25em] uppercase text-accent/70 border border-accent/20 px-3 py-1">
                {course.duration}
              </span>
              {hasStarterKit && (
                <span className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-foreground/50 border border-foreground/15 px-3 py-1">
                  <Package className="w-2.5 h-2.5" />
                  {cp.starterKitBadge}
                </span>
              )}
            </div>
            <div className="divider-gold w-16 mb-5" />
            <h1 className="heading-editorial text-4xl md:text-6xl lg:text-7xl text-foreground mb-4">
              {course.title}
            </h1>
            {course.subtitle && (
              <p className="text-sm md:text-base text-foreground/40 font-light tracking-widest max-w-2xl">
                {course.subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left: Day Selector + Syllabus */}
          <div className="md:col-span-7">
            {dayCount > 1 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: dayCount }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedDay(i)}
                      className={`w-12 h-12 text-sm tracking-[0.1em] border transition-all duration-300 ${
                        selectedDay === i
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-foreground/15 text-foreground/30 hover:border-accent/40 hover:text-foreground/60'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {days.length > 0 && (
                <motion.div
                  key={selectedDay}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-8"
                >
                  <h2 className="heading-editorial text-xl md:text-2xl text-accent mb-6">
                    {days[selectedDay]?.title}
                  </h2>
                  <div className="divider-gold w-full mb-6" />
                  <ul className="space-y-4">
                    {days[selectedDay]?.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className="flex items-start gap-3 text-sm text-foreground/60 leading-relaxed tracking-wide font-light"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Starter Kit + Cert + CTA */}
          <div className="md:col-span-5 space-y-6">
            {hasStarterKit && course.starterKit && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="glass-card p-8 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2 mb-5">
                  <Package className="w-4 h-4 text-accent" />
                  <span className="text-xs tracking-[0.2em] uppercase text-accent/80">{course.starterKit.title}</span>
                </div>
                <div className="divider-gold w-full mb-5" />
                <ul className="space-y-3">
                  {course.starterKit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/50 tracking-wide font-light">
                      <CheckCircle className="w-3.5 h-3.5 text-accent/60 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Certification Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="glass-card p-6 flex items-start gap-3"
            >
              <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-accent/80 mb-2">{cp.certTitle}</p>
                <p className="text-xs text-foreground/40 tracking-wide leading-relaxed">{cp.certText}</p>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="glass-card p-8 space-y-5"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-accent/60">
                  <Shield className="w-3 h-3" />
                  {cp.reach}
                </div>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-foreground/30">
                  <CheckCircle className="w-3 h-3" />
                  {cp.asl}
                </div>
              </div>
              <div className="divider-gold w-full" />

              {/* Secure Your Seat — Gold Ghost Button */}
              <a
                href={`https://wa.me/393516605507?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury flex items-center justify-center gap-2 w-full py-4 text-xs tracking-[0.25em] uppercase border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-500"
              >
                {cp.secureYourSeat}
              </a>

              {/* WhatsApp Info */}
              <a
                href={`https://wa.me/393516605507?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury flex items-center justify-center gap-2 w-full py-4 text-xs tracking-[0.25em] uppercase border border-accent/30 text-foreground/60 hover:text-accent hover:border-accent/60 transition-all duration-500"
              >
                <Phone className="w-3.5 h-3.5" />
                {cp.whatsapp}
              </a>

              <div className="space-y-1.5 pt-2 border-t border-foreground/10">
                <div className="flex items-center gap-2 text-[10px] text-foreground/30 tracking-wide">
                  <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
                  {cp.address}
                </div>
                <p className="text-[10px] text-foreground/20 tracking-wide ps-4">{cp.vat}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-accent/10 py-8 mt-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase">
            <span className="text-accent/60">{t.footer.academy}</span>
            <span className="text-foreground/20">{cp.vat}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-accent/50">
              <Shield className="w-2.5 h-2.5" />
              {t.footer.reach}
            </span>
            <span className="text-[10px] text-foreground/20 tracking-widest uppercase">{t.footer.gdpr}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
