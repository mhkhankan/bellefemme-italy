import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="heading-luxury text-4xl md:text-5xl text-foreground">
              {t.contact.title}
            </h2>
            <div className="w-16 h-px bg-primary mx-auto" />
          </div>

          <div className="bg-secondary/20 border border-gold/20 p-8 rounded-sm">
            <div className="flex items-center justify-center gap-2 text-foreground/70 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{t.contact.location}</span>
            </div>
            
            <div className="aspect-video w-full bg-muted rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44721.04839736831!2d8.776959!3d45.8205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868559c92eb84b%3A0x407708a0488b0a0!2sVarese%2C%20Italy!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Varese Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
