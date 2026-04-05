import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import type { Course } from '@/Data/courses';
import { CourseLocationSheet } from './CourseLocationSheet';
import { StickyHeader } from './StickyHeader';
import { SiteFooter } from './SiteFooter';
import { WhatsAppSticky } from './WhatsAppSticky';
import { StructuredData } from './StructuredData';

interface CourseTemplateProps {
  course: Course;
}

export const CourseTemplate = ({ course }: CourseTemplateProps) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const subtitle = language === 'it' ? course.subtitle_it : course.subtitle_en;
  const duration = language === 'it' ? course.duration_it : course.duration_en;
  const description = language === 'it' ? course.description_it : course.description_en;
  const certificate = language === 'it' ? course.certificate_it : course.certificate_en;
  const heroImage = course.images.length > 0 ? course.images[0] : null;

  return (
    <div className="min-h-screen bg-background">
      <StructuredData
        path={course.slug}
        pageTitle={`${course.bf_name} — Belle Femme Academy`}
      />
      <StickyHeader />

      {/* Back navigation */}
      <div className="pt-28 pb-4 container mx-auto px-6 md:px-12 max-w-5xl">
        <button
          onClick={() => navigate('/#academy')}
          className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-foreground/40 hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          {language === 'it' ? "Torna all'Accademia" : 'Back to Academy'}
        </button>
      </div>

      {/* Hero */}
      <div className="relative w-full aspect-[16/9] max-h-[60vh] overflow-hidden">
        {heroImage && !imgFailed ? (
          <img
            src={heroImage}
            alt={course.bf_name}
            className="w-full h-full object-cover"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full shimmer-venetian" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 px-6 md:px-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60 mb-3">Belle Femme Academy</p>
            <h1 className="font-inter font-bold text-[14px] md:text-[18px] tracking-[0.25em] uppercase text-foreground mb-2">
              {course.bf_name}
            </h1>
            <p className="font-cormorant italic text-xl md:text-2xl text-primary/80 mb-4">{subtitle}</p>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
              <span>{duration}</span>
              <span className="text-primary/30">·</span>
              <span>Max {course.participants} {language === 'it' ? 'partecipanti' : 'participants'}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 max-w-3xl py-16 space-y-12">
        {description && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-base text-muted-foreground leading-[2] tracking-wide">{description}</p>
          </motion.div>
        )}

        <div className="border-t border-primary/10 pt-8 space-y-4">
          <p className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase text-foreground/60">
            {language === 'it' ? 'Certificazione' : 'Certification'}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">{certificate}</p>
        </div>

        <div className="pt-4">
          <button
            onClick={() => setSheetOpen(true)}
            className="w-full md:w-auto font-inter font-bold text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-12 py-4 min-h-[48px] hover:bg-primary/90 transition-colors"
          >
            {language === 'it' ? 'Richiedi Informazioni' : 'Request Information'}
          </button>
        </div>
      </div>

      <CourseLocationSheet open={sheetOpen} onOpenChange={setSheetOpen} courseName={course.bf_name} />
      <SiteFooter />
      <WhatsAppSticky />
    </div>
  );
};