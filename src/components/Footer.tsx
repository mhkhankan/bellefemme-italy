import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Lock } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12 border-t border-gold/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h3 className="heading-luxury-bold text-2xl">
              Belle Femme Academy
            </h3>
            <p className="text-background/70">Varese, Italia</p>
            <p className="text-sm text-background/60">P.IVA: 03794680128</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-background/10">
            <div className="flex items-center gap-2 text-sm text-background/80">
              <Shield className="w-4 h-4 text-primary" />
              <span>{t.footer.reach}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-background/80">
              <Lock className="w-4 h-4 text-primary" />
              <button className="hover:text-primary transition-colors">
                {t.footer.gdpr}
              </button>
            </div>
          </div>

          <div className="text-center text-xs text-background/50 pt-6">
            © {new Date().getFullYear()} {t.footer.academy}
          </div>
        </div>
      </div>
    </footer>
  );
};
