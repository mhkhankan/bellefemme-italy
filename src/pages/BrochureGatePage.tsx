import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { getCourseBySlug } from '@/Data/courses';
import { motion } from 'framer-motion';

const BrochureGatePage = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const navigate = useNavigate();
  const lang = typeof navigator !== 'undefined' && navigator.language.startsWith('it') ? 'it' : 'en';

  const course = getCourseBySlug('/' + (courseSlug ?? ''));
  const courseName = course?.bf_name ?? (courseSlug ?? '').replace(/-/g, ' ').toUpperCase();

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async () => {
    setSubmitError('');
    if (name.trim().length === 0 || whatsapp.trim().length < 7) {
      setSubmitError(lang === 'it' ? 'Inserisci nome e WhatsApp per continuare.' : 'Please enter your name and WhatsApp.');
      return;
    }
    setSubmitting(true);
    const { error } = await supabase
      .from('brochure_leads')
      .insert({ name: name.trim(), whatsapp: whatsapp.trim(), course_slug: courseSlug ?? '' });
    if (error) {
      setSubmitError('Si è verificato un errore. Riprova.');
      setSubmitting(false);
      return;
    }
    const link = document.createElement('a');
    link.href = `/brochures/${courseSlug}.pdf`;
    link.download = `Belle-Femme-${courseSlug}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden" style={{ backgroundColor: '#000' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
          <svg width="100%" height="100%"><filter id="n2"><feTurbulence baseFrequency="0.65" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#n2)" /></svg>
        </div>
        <motion.div className="w-full max-w-sm relative z-10 text-center" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <div className="w-[32px] h-[32px] flex items-center justify-center mx-auto mb-4" style={{ border: '1px solid rgba(212,175,55,0.40)' }}>
            <div className="w-[10px] h-[10px]" style={{ backgroundColor: 'rgba(212,175,55,0.60)', transform: 'rotate(45deg)' }} />
          </div>
          <p className="font-cormorant italic text-[26px] font-light text-foreground mb-2">
            {lang === 'it' ? 'Il tuo PDF è in arrivo.' : 'Your PDF is on its way.'}
          </p>
          <p className="font-inter text-[12px] leading-[1.7]" style={{ color: 'rgba(245,245,245,0.45)' }}>
            {lang === 'it' ? 'Se il download non parte automaticamente, controlla i tuoi download.' : "If the download doesn't start automatically, check your downloads."}
          </p>
          <Link
            to={`/${courseSlug}`}
            className="font-inter text-[9px] tracking-[0.18em] uppercase transition-colors inline-block mt-6"
            style={{ color: 'rgba(245,245,245,0.25)' }}
          >
            {lang === 'it' ? '← Torna al corso' : '← Back to course'}
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden" style={{ backgroundColor: '#000' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
        <svg width="100%" height="100%"><filter id="n1"><feTurbulence baseFrequency="0.65" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#n1)" /></svg>
      </div>
      <div className="w-full max-w-sm relative z-10">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-center mb-6">
          <img src="/branding/BF_logo_wordmark_transparent.png" alt="Belle Femme" className="h-[36px] w-auto" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-6">
          <p className="font-inter text-[8px] tracking-[0.4em] uppercase mb-1" style={{ color: 'rgba(212,175,55,0.50)' }}>
            Belle Femme Accademia · Varese
          </p>
          <p className="font-cormorant italic text-[28px] font-light text-foreground leading-tight">
            {courseName}
          </p>
        </motion.div>

        <div className="w-[40px] h-px mx-auto mb-6" style={{ backgroundColor: 'rgba(212,175,55,0.30)' }} />

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-inter text-[12px] leading-[1.7] text-center mb-8" style={{ color: 'rgba(245,245,245,0.45)' }}>
          {lang === 'it'
            ? 'Lascia il tuo nome e il tuo numero WhatsApp. Il programma completo ti arriva istantaneamente.'
            : 'Leave your name and WhatsApp number. The full programme arrives instantly.'}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={lang === 'it' ? 'Il tuo nome' : 'Your name'}
            className="w-full bg-transparent py-3 px-0 font-inter text-[14px] text-foreground focus:outline-none transition-colors"
            style={{ borderBottom: '1px solid rgba(212,175,55,0.20)' }}
            onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(212,175,55,0.60)')}
            onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(212,175,55,0.20)')}
          />
          <input
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder={lang === 'it' ? 'WhatsApp (+39 392...)' : 'WhatsApp (+39 392...)'}
            className="w-full bg-transparent py-3 px-0 font-inter text-[14px] text-foreground focus:outline-none transition-colors mt-4"
            style={{ borderBottom: '1px solid rgba(212,175,55,0.20)' }}
            onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(212,175,55,0.60)')}
            onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(212,175,55,0.20)')}
          />
          {submitError && (
            <p className="mt-2 font-inter text-[11px] text-red-400">{submitError}</p>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8">
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full font-inter font-bold text-[10px] tracking-[0.22em] uppercase py-4 min-h-[48px] transition-all active:scale-[0.98]"
            style={{ backgroundColor: 'hsl(var(--primary))', color: '#000' }}
          >
            {submitting ? (
              <span className="inline-block w-4 h-4 rounded-full animate-spin" style={{ border: '2px solid rgba(0,0,0,0.30)', borderTopColor: '#000' }} />
            ) : (
              lang === 'it' ? 'Scarica il Programma' : 'Download Programme'
            )}
          </button>
        </motion.div>

        <p className="mt-4 text-center font-inter text-[10px] tracking-[0.05em]" style={{ color: 'rgba(245,245,245,0.20)' }}>
          {lang === 'it' ? 'Nessuno spam. Solo il tuo PDF.' : 'No spam. Just your PDF.'}
        </p>

        <div className="mt-6 text-center">
          <Link
            to={`/${courseSlug}`}
            className="font-inter text-[9px] tracking-[0.18em] uppercase transition-colors"
            style={{ color: 'rgba(245,245,245,0.25)' }}
          >
            {lang === 'it' ? '← Torna al corso' : '← Back to course'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrochureGatePage;
