import { StickyHeader } from '@/components/StickyHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { StructuredData } from '@/components/StructuredData';
import { Link } from 'react-router-dom';

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <StructuredData path="/privacy" pageTitle="Privacy & GDPR · Belle Femme" pageDescription="Informativa sulla privacy e GDPR — Belle Femme Atelier e Accademia, Varese." />
    <StickyHeader />
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl space-y-12">
        <h1 className="font-cormorant text-3xl md:text-5xl font-light text-foreground tracking-[2px] text-center">
          Privacy & GDPR
        </h1>
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60 text-center">
          Informativa sulla Privacy
        </p>
        <div className="h-px w-16 bg-primary/40 mx-auto" />

        <div className="space-y-10">
          <div className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">Titolare del Trattamento</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Belle Femme PMU Atelier & Academy — Mouna Chabbar<br />
              P.IVA 03794680128 · Master Studio: Varese, Italy<br />
              Contatto: tramite WhatsApp al +39 392 448 7530
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">Dati Raccolti</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Il sito raccoglie i seguenti dati forniti volontariamente dall'utente: nome e cognome, numero di telefono/WhatsApp, città di residenza, trattamento o corso di interesse. I dati vengono raccolti esclusivamente per finalità di gestione delle prenotazioni e della lista d'attesa.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">Cookie Tecnici</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non vengono utilizzati cookie di profilazione o di tracciamento di terze parti.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">Base Giuridica e Conservazione</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Il trattamento dei dati è basato sul consenso esplicito dell'utente (Art. 6 par. 1 lett. a GDPR). I dati vengono conservati per il tempo strettamente necessario e comunque non oltre 24 mesi dalla raccolta.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">Diritti dell'Interessato</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              L'utente ha diritto di accesso, rettifica, cancellazione, limitazione del trattamento, portabilità e opposizione ai sensi degli Artt. 15-22 GDPR. Contattare il Titolare tramite WhatsApp per esercitare tali diritti.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">Nota</h2>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              Questa informativa è da intendersi come documento provvisorio. Il testo definitivo sarà redatto e approvato da un legale specializzato prima della pubblicazione in produzione.
            </p>
          </div>
        </div>

        <div className="text-center pt-8">
          <Link
            to="/"
            className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase border border-primary/30 text-primary px-8 py-3 min-h-[44px] inline-flex items-center hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            ← Torna al Sito
          </Link>
        </div>
      </div>
    </div>
    <SiteFooter />
  </div>
);

export default Privacy;
