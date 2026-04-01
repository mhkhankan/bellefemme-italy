import { motion } from 'framer-motion';
import { useState } from 'react';
import { LocationSheet } from './LocationSheet';

export const Concierge = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <section id="concierge" className="py-32 md:py-48">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">Private Concierge</p>

            <h2 className="font-cormorant text-3xl md:text-5xl font-light text-foreground tracking-[2px]">
              Secure Your <span className="italic text-primary">Atelier</span> Appointment
            </h2>

            <div className="h-px w-16 bg-primary/40 mx-auto" />

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Begin a private consultation with Master Trainer Mouna at your preferred location.
            </p>

            <div className="pt-8">
              <button
                onClick={() => setSheetOpen(true)}
                className="inline-block text-[11px] tracking-[0.2em] uppercase border border-primary text-primary px-10 py-4 min-h-[44px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                Start a Private Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <LocationSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        treatmentName="a consultation"
      />
    </>
  );
};
