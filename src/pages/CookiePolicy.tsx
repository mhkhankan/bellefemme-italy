import { StickyHeader } from '@/components/StickyHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { StructuredData } from '@/components/StructuredData';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CookiePolicy = () => {
  const { t } = useLanguage();
  const c = t.cookiePolicy;

  return (
    <div className="min-h-screen bg-background">
      <StructuredData
        path="/cookie-policy"
        pageTitle="Cookie Policy · Belle Femme"
        pageDescription="Cookie policy — Belle Femme Atelier e Accademia. Nessun cookie di profilazione."
      />
      <StickyHeader />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl space-y-12">
          <h1 className="font-cormorant text-3xl md:text-5xl font-light text-foreground tracking-[2px] text-center">
            {c.title}
          </h1>
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60 text-center">
            {c.subtitle}
          </p>
          <div className="h-px w-16 bg-primary/40 mx-auto" />

          <div className="space-y-10">
            <section className="space-y-3">
              <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">
                {c.noTracking}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.noTrackingBody}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">
                {c.necessary}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="border-b border-primary/30">
                      <th className="font-inter font-bold tracking-[0.15em] uppercase text-primary/80 py-3 pr-4">
                        {c.tableName}
                      </th>
                      <th className="font-inter font-bold tracking-[0.15em] uppercase text-primary/80 py-3 pr-4">
                        {c.tableType}
                      </th>
                      <th className="font-inter font-bold tracking-[0.15em] uppercase text-primary/80 py-3 pr-4">
                        {c.tablePurpose}
                      </th>
                      <th className="font-inter font-bold tracking-[0.15em] uppercase text-primary/80 py-3">
                        {c.tableDuration}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-primary/10">
                      <td className="py-3 pr-4 font-mono">bf_cookie_consent</td>
                      <td className="py-3 pr-4">localStorage</td>
                      <td className="py-3 pr-4">{c.consentPurpose}</td>
                      <td className="py-3">{c.consentDuration}</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono">sb-*-auth-token</td>
                      <td className="py-3 pr-4">localStorage</td>
                      <td className="py-3 pr-4">{c.authPurpose}</td>
                      <td className="py-3">{c.authDuration}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">
                {c.fonts}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.fontsBody}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">
                {c.security}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.securityBody}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">
                {c.contact}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.contactBody}{' '}
                <a
                  href="mailto:privacy@bellefemme.it"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  privacy@bellefemme.it
                </a>
              </p>
            </section>
          </div>

          <div className="text-center pt-8">
            <Link
              to="/"
              className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-8 py-3 min-h-[44px] inline-flex items-center hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              {c.back}
            </Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default CookiePolicy;
