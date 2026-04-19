import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const SiteFooter = () => {
  const { t, language } = useLanguage();
  return (
    <footer className="border-t border-primary/10 py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-12">
          <div className="flex items-center gap-1">
            <img
              src="/branding/BF_logo_full_transparent.png"
              alt="Belle Femme Atelier e Accademia"
              width={56}
              height={56}
              className="h-14 w-auto"
              style={{ objectFit: 'contain' }}
            />
            <div>
              <p
                className="font-cormorant text-xl tracking-[0.15em]"
                style={{
                  background: 'linear-gradient(135deg, #F9EFA2, #EBCF73, #D4AC61, #BB9243, #89753D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Belle Femme
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-primary/60 mt-1">
                {t.footerLabels.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px mb-12" style={{ background: 'linear-gradient(to right, transparent, hsl(43 76% 52% / 0.3), transparent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-2">
            <a href="#atelier-in-residenza" className="text-xs tracking-[0.2em] uppercase text-primary/50 mb-3 hover:text-primary transition-colors block">
              {t.footerLabels.sedi}
            </a>
            <p className="text-sm text-foreground/70 tracking-wide">
              {t.footerLabels.province}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">
              {t.footerLabels.contatti}
            </p>
            <a
              href="https://wa.me/393924487530"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 hover:text-primary transition-colors tracking-wide block"
            >
              +39 392 448 7530
            </a>
            <a
              href="mailto:info@bellefemme.it"
              className="text-sm text-foreground/70 hover:text-primary transition-colors tracking-wide block"
            >
              info@bellefemme.it
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">
              {t.footerLabels.legale}
            </p>
            <Link
              to="/privacy"
              className="text-sm text-foreground/70 hover:text-primary transition-colors tracking-wide block"
            >
              Privacy · GDPR
            </Link>
            <Link
              to="/cookie-policy"
              className="text-sm text-foreground/70 hover:text-primary transition-colors tracking-wide block"
            >
              Cookie Policy
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('bf_cookie_consent');
                window.location.reload();
              }}
              className="text-sm text-foreground/70 hover:text-primary transition-colors tracking-wide block text-left"
            >
              {t.cookie.manageLabel}
            </button>
          </div>
        </div>

        <div className="h-px w-full bg-primary/15 mb-6" />

        <div className="flex flex-col items-center gap-1.5 md:gap-2 md:flex-row md:justify-between md:items-start">
          <p className="text-[11px] text-foreground/55 tracking-[0.15em] text-center md:text-left">© 2026 Belle Femme Atelier e Accademia</p>
          <p className="text-[11px] text-foreground/55 tracking-[0.15em] text-center">Belle Femme di Chabbar Mouna</p>
          <p className="text-[11px] text-foreground/55 tracking-[0.15em] text-center md:text-right">Sede Legale: Contrada Mulini 8, 21034 Cocquio-Trevisago (VA) · P.IVA 03794680128</p>
        </div>
      </div>
    </footer>
  );
};
