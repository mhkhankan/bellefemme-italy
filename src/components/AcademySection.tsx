import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const AcademySection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !city.trim()) return;
    setSubmitting(true);
    try {
      await supabase.from('academy_waitlist').insert({
        name: name.trim(),
        phone: phone.trim(),
        city: city.trim(),
      });
      setSubmitted(true);
      toast({ title: t.academy.successMessage });
    } catch {
      // silently fail
    }
    setSubmitting(false);
  };

  return (
    <section
      id="academy"
      className="relative py-32 md:py-48"
      style={{
        background: 'linear-gradient(180deg, hsl(150 30% 7%) 0%, hsl(0 0% 10%) 50%, hsl(150 30% 7%) 100%)',
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A67C52' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto px-6 md:px-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">Belle Femme Academy</p>

          <h2 className="font-cormorant text-3xl md:text-5xl font-light text-foreground tracking-[2px]">
            {t.academy.title}
          </h2>

          <div className="h-px w-16 bg-primary/40 mx-auto" />

          <p className="text-lg font-cormorant italic text-primary/80 tracking-wide">
            {t.academy.subtitle}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            {t.academy.description}
          </p>

          {/* Placeholder for masterclass image */}
          <div className="aspect-[16/9] bg-card border border-primary/10 flex items-center justify-center mx-auto max-w-lg">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30">
              Masterclass Environment
            </span>
          </div>
        </motion.div>

        {/* Elite Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 max-w-sm mx-auto"
        >
          <p className="text-center font-cormorant text-xl text-primary/80 tracking-[2px] mb-8">
            {t.academy.waitlistTitle}
          </p>

          {submitted ? (
            <div className="text-center py-8">
              <p className="text-primary font-cormorant text-xl tracking-wide">{t.academy.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.academy.namePlaceholder}
                required
                maxLength={100}
                className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground min-h-[44px] focus:border-primary/50 outline-none transition-colors"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.academy.phonePlaceholder}
                required
                maxLength={20}
                className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground min-h-[44px] focus:border-primary/50 outline-none transition-colors"
              />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={t.academy.cityPlaceholder}
                required
                maxLength={100}
                className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground min-h-[44px] focus:border-primary/50 outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full font-inter font-bold text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 min-h-[44px] hover:bg-primary/90 transition-all duration-500 disabled:opacity-50"
              >
                {t.academy.waitlistCta}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
