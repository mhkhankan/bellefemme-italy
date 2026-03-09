import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Instagram, Facebook } from 'lucide-react';

const reviews = [
  {
    name: 'Giulia R.',
    platform: 'instagram' as const,
    it: 'Mouna è un\'artista incredibile. Il microblading è perfetto, sembra naturale al 100%!',
    en: 'Mouna is an incredible artist. The microblading is perfect, looks 100% natural!',
    fr: 'Mouna est une artiste incroyable. Le microblading est parfait, il a l\'air 100% naturel!',
    ar: 'منى فنانة مذهلة. المايكروبليدنج مثالي، يبدو طبيعياً ١٠٠٪!',
    rating: 5,
  },
  {
    name: 'Sara M.',
    platform: 'facebook' as const,
    it: 'Ho fatto il lip blush e sono rimasta senza parole. Professionalità e risultati eccezionali.',
    en: 'I had the lip blush done and was speechless. Exceptional professionalism and results.',
    fr: 'J\'ai fait le lip blush et je suis restée sans voix. Professionnalisme et résultats exceptionnels.',
    ar: 'قمت بعمل ليب بلاش وبقيت بلا كلام. احترافية ونتائج استثنائية.',
    rating: 5,
  },
  {
    name: 'Leila K.',
    platform: 'instagram' as const,
    it: 'La formazione alla Belle Femme Academy è stata un\'esperienza trasformativa. Mouna è una maestra.',
    en: 'The training at Belle Femme Academy was a transformative experience. Mouna is a true master.',
    fr: 'La formation à la Belle Femme Academy a été une expérience transformatrice. Mouna est une maîtresse.',
    ar: 'التدريب في Belle Femme Academy كان تجربة تحويلية. منى معلمة حقيقية.',
    rating: 5,
  },
];

const sectionTitle = {
  it: 'Cosa Dicono di Noi',
  en: 'What They Say About Us',
  fr: 'Ce Qu\'on Dit de Nous',
  ar: 'ماذا يقولون عنا',
};

const sectionSub = {
  it: 'Fiducia Sociale',
  en: 'Social Trust',
  fr: 'Confiance Sociale',
  ar: 'الثقة الاجتماعية',
};

export const SocialTrust = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] leading-none whitespace-nowrap pointer-events-none select-none z-0">
        TRUST
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="divider-gold w-16 mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-accent/50 mb-3">
            {sectionSub[language]}
          </p>
          <h2 className="heading-editorial text-3xl md:text-5xl text-foreground">
            {sectionTitle[language]}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card p-8 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }, (_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                {review.platform === 'instagram' ? (
                  <Instagram className="w-4 h-4 text-accent/40" />
                ) : (
                  <Facebook className="w-4 h-4 text-accent/40" />
                )}
              </div>
              <p className="text-sm text-foreground/50 leading-relaxed font-light tracking-wide italic">
                "{review[language]}"
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-accent/60">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
