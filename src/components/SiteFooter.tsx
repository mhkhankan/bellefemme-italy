import { Link } from 'react-router-dom';

export const SiteFooter = () => {
  return (
    <footer className="border-t border-primary/10 py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        {/* Top row — Logo + Wordmark + Tagline */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-12">
          <div className="flex items-center gap-4">
            <img
              src="/branding/BF_logo_full_transparent.png"
              alt="Belle Femme Logo"
              className="h-14 w-auto"
              style={{ objectFit: 'contain' }}
            />
            <div>
              <p className="font-cormorant text-xl tracking-[0.15em] text-foreground">
                Belle Femme
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-primary/60 mt-1">
                Advanced Facial Engineering | Analytic Visagism
              </p>
            </div>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Locations */}
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">
              Locations
            </p>
            <p className="text-sm text-foreground/70 tracking-wide">Varese · Milano</p>
            <p className="text-xs text-foreground/40 tracking-wider mt-2">P.IVA 03794680128</p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">
              Contact
            </p>
            <a
              href="https://wa.me/393516605507"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 hover:text-primary transition-colors tracking-wide block"
            >
              +39 351 660 5507
            </a>
            <a
              href="mailto:info@bellefemme.it"
              className="text-sm text-foreground/70 hover:text-primary transition-colors tracking-wide block"
            >
              info@bellefemme.it
            </a>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">
              Legal
            </p>
            <Link
              to="/privacy"
              className="text-sm text-foreground/70 hover:text-primary transition-colors tracking-wide block"
            >
              Privacy · GDPR
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-primary/15 mb-6" />

        {/* Copyright */}
        <p className="text-[11px] text-foreground/30 tracking-[0.15em] text-center md:text-left">
          © 2026 Belle Femme
        </p>
      </div>
    </footer>
  );
};
