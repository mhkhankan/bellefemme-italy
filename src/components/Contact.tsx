import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="divider-gold w-16 mb-6" />
          <h2 className="heading-editorial text-4xl md:text-6xl text-foreground">
            {t.contact.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 text-foreground/50 mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm tracking-[0.15em] uppercase">{t.contact.location}</span>
          </div>

          <div className="aspect-video w-full overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44721.04839736831!2d8.776959!3d45.8205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868559c92eb84b%3A0x407708a0488b0a0!2sVarese%2C%20Italy!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.4) sepia(0.3)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Varese Location"
            />
            {/* Gold accent overlay */}
            <div className="absolute inset-0 pointer-events-none mix-blend-color" style={{ backgroundColor: 'hsl(38 49% 57% / 0.08)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
