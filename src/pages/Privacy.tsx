import { StickyHeader } from '@/components/StickyHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { StructuredData } from '@/components/StructuredData';
import { Link } from 'react-router-dom';

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <StructuredData
      path="/privacy"
      pageTitle="Privacy Policy · Belle Femme"
      pageDescription="Informativa Privacy ai sensi degli Artt. 13–14 Reg. UE 2016/679 — Belle Femme di Chabbar Mouna."
    />
    <StickyHeader />
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl space-y-12">
        <h1 className="font-cormorant text-3xl md:text-5xl font-light text-foreground tracking-[2px] text-center">
          Privacy Policy
        </h1>
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60 text-center">
          Informativa ai sensi degli Artt. 13–14 Reg. UE 2016/679
        </p>
        <div className="h-px w-16 bg-primary/40 mx-auto" />

        <div className="space-y-10">
          <section className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">1. Titolare del Trattamento</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Belle Femme di Chabbar Mouna · Ditta Individuale<br />
              Sede Legale: Contrada Mulini 8, 21034 Cocquio-Trevisago (VA)<br />
              P.IVA 03794680128<br />
              E-mail Privacy: privacy@bellefemme.it<br />
              PEC: mhkhankan@pec.it<br />
              WhatsApp Servizio Clienti: +39 392 448 7530
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">2. Dati Trattati, Basi Giuridiche e Conservazione</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-muted-foreground border border-primary/15">
                <thead className="bg-primary/5 text-foreground/80">
                  <tr>
                    <th className="text-left p-2 border-b border-primary/15">Attività</th>
                    <th className="text-left p-2 border-b border-primary/15">Dati</th>
                    <th className="text-left p-2 border-b border-primary/15">Base Giuridica</th>
                    <th className="text-left p-2 border-b border-primary/15">Conservazione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary/10">
                    <td className="p-2">Brochure Gate + Waitlist</td>
                    <td className="p-2">Nome, WhatsApp</td>
                    <td className="p-2">Consenso Art. 6(1)(a) / Precontrattuale Art. 6(1)(b)</td>
                    <td className="p-2">Max 24 mesi inattività</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-2">Marketing WhatsApp</td>
                    <td className="p-2">N. WhatsApp</td>
                    <td className="p-2">Consenso esplicito Art. 6(1)(a) — Double Opt-In</td>
                    <td className="p-2">24 mesi da raccolta/rinnovo</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-2">Sicurezza Anti-Bot</td>
                    <td className="p-2">IP, TLS fingerprint</td>
                    <td className="p-2">Legittimo Interesse Art. 6(1)(f) — Cons. 49</td>
                    <td className="p-2">21 giorni → cancellazione automatica</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-2">Dermopigmentazione (PMU)</td>
                    <td className="p-2">Dati anagrafici, dati salute</td>
                    <td className="p-2">Consenso esplicito Art. 9(2)(a)</td>
                    <td className="p-2">10 anni (tutela civile)</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-2">Certificazioni Accademia</td>
                    <td className="p-2">Nome, Corso, Data</td>
                    <td className="p-2">Legittimo Interesse Art. 6(1)(f)</td>
                    <td className="p-2">Indefinita</td>
                  </tr>
                  <tr>
                    <td className="p-2">Registro Violazioni</td>
                    <td className="p-2">Dettagli breach</td>
                    <td className="p-2">Obbligo di Legge Art. 6(1)(c)</td>
                    <td className="p-2">10 anni</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">3. Dati Sanitari (Art. 9 GDPR)</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Il sito web non raccoglie dati relativi alla salute. Le informazioni anamnestiche necessarie per i trattamenti PMU vengono raccolte esclusivamente in sede fisica, tramite separata informativa e modulo cartaceo di consenso informato, nel rispetto della L.R. Lombardia 13/2021.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">4. Sedi Operative e Partner</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I trattamenti PMU possono essere erogati, oltre che nella sede di Varese, presso strutture partner a Milano e Roma. In tali casi, le strutture partner mettono a disposizione esclusivamente lo spazio fisico. Tutti i dati personali del cliente sono raccolti, trattati e conservati esclusivamente da Belle Femme. I centri partner non accedono ad alcun dato personale e non si configurano come Responsabili (Art. 28) né Contitolari (Art. 26 GDPR).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">5. Responsabili del Trattamento e Trasferimenti</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-muted-foreground border border-primary/15">
                <thead className="bg-primary/5 text-foreground/80">
                  <tr>
                    <th className="text-left p-2 border-b border-primary/15">Fornitore</th>
                    <th className="text-left p-2 border-b border-primary/15">Ruolo</th>
                    <th className="text-left p-2 border-b border-primary/15">Sede</th>
                    <th className="text-left p-2 border-b border-primary/15">Garanzia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary/10">
                    <td className="p-2">Vercel Inc.</td>
                    <td className="p-2">Responsabile Art. 28</td>
                    <td className="p-2">USA</td>
                    <td className="p-2">Data Privacy Framework (DPF)</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-2">Supabase</td>
                    <td className="p-2">Responsabile Art. 28</td>
                    <td className="p-2">EU (server fisici UE)</td>
                    <td className="p-2">Nessun trasferimento extra-UE</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-2">Cloudflare (Turnstile)</td>
                    <td className="p-2">Responsabile Art. 28</td>
                    <td className="p-2">USA</td>
                    <td className="p-2">DPF / SCC</td>
                  </tr>
                  <tr>
                    <td className="p-2">Meta Platforms Ireland</td>
                    <td className="p-2">Responsabile Art. 28</td>
                    <td className="p-2">UE/Irlanda</td>
                    <td className="p-2">Marketing WhatsApp — Double Opt-In</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">6. Diritti degli Interessati</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ai sensi degli Artt. 15–22 GDPR: accesso, rettifica, cancellazione (oblio), limitazione, portabilità e opposizione. Il consenso marketing è revocabile inviando STOP al numero WhatsApp. Richieste a privacy@bellefemme.it — risposta entro 30 giorni. Diritto di reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-cormorant text-xl text-foreground tracking-[2px]">7. Lingua di Riferimento</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La versione in lingua italiana del presente documento costituisce la versione ufficiale e prevale in caso di qualsiasi discrepanza con traduzioni in altre lingue, fornite esclusivamente a scopo informativo.
            </p>
          </section>
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
