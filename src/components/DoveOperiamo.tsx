import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookingSheet } from './BookingSheet';

const CENTRES = [
  { name: 'Poliambulatorio Elianto', addr: 'Viale Luigi Borri 75 · 21100 Varese' },
  { name: 'Centro Benessere Mi Amo', addr: 'Via Marconi 11 · 21026 Gavirate' },
];

export const DoveOperiamo = () => {
  const { language } = useLanguage();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <section
        id="atelier-in-residenza"
        className="py-16 md:py-24"
        style={{ backgroundColor: '#000' }}
      >
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center space-y-10">
          <div className="space-y-4">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-[2px]" style={{ color: '#F5F5F5' }}>
              {language === 'it' ? 'Atelier in Residenza' : 'Atelier in Residence'}
            </h2>
            <div className="h-px w-12 mx-auto" style={{ backgroundColor: 'rgba(212,175,55,0.5)' }} />
            <p className="text-sm leading-relaxed max-w-lg mx-auto" style={{ color: 'rgba(245,245,245,0.6)' }}>
              {language === 'it'
                ? 'Trattamenti su appuntamento in centri selezionati per standard clinici, ambiente e riservatezza — Provincia di Varese.'
                : 'Treatments by appointment at selected centres for clinical standards, environment and privacy — Province of Varese.'}
            </p>
          </div>

          <div className="space-y-6">
            {CENTRES.map((c) => (
              <div key={c.name} className="space-y-1">
                <p className="font-inter font-bold text-[13px] uppercase tracking-[0.1em]" style={{ color: '#F5F5F5' }}>
                  {c.name}
                </p>
                <p className="font-inter text-[12px]" style={{ color: '#D4AF37' }}>
                  {c.addr}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setSheetOpen(true)}
            className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase px-10 py-4 min-h-[48px] transition-colors"
            style={{ backgroundColor: '#D4AF37', color: '#000' }}
          >
            {language === 'it' ? 'Prenota la Consulenza' : 'Book a Consultation'}
          </button>

          <p className="font-cormorant italic text-sm" style={{ color: '#D4AF37' }}>
            {language === 'it'
              ? 'Prenotazione esclusivamente tramite Belle Femme'
              : 'Booking exclusively through Belle Femme'}
          </p>
        </div>
      </section>

      <BookingSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        mode="location"
      />
    </>
  );
};