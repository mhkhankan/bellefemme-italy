import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Lock } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary py-16 border-t border-accent/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="heading-editorial-bold text-sm tracking-[0.2em] text-foreground">
              BELLE FEMME ACADEMY
            </h3>
            <p className="text-xs text-foreground/30 tracking-wider">Varese, Italia</p>
            <p className="text-xs text-foreground/20 tracking-wider">P.IVA: 03794680128</p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs text-foreground/30 tracking-[0.15em] uppercase">WhatsApp</p>
            <a
              href="https://wa.me/393516605507"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent/70 hover:text-accent transition-colors tracking-wider"
            >
              +39 351 660 5507
            </a>
          </div>

          {/* Legal */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs text-foreground/30">
              <Shield className="w-3 h-3 text-accent/50" />
              <span className="tracking-wider">{t.footer.reach}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/30">
              <Lock className="w-3 h-3 text-accent/50" />
              <button className="hover:text-accent transition-colors tracking-wider">
                {t.footer.gdpr}
              </button>
            </div>
          </div>
        </div>

        <div className="divider-gold mt-12 mb-6" />
        <p className="text-[10px] text-foreground/20 tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} {t.footer.academy}
        </p>
      </div>
    </footer>
  );
};
