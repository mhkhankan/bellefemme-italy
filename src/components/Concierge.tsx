import { motion } from 'framer-motion';

const WHATSAPP_BASE = 'https://wa.me/393516605507?text=';

const locations = [
  { city: 'Milan', msg: 'Ciao Mouna, vorrei prenotare un appuntamento a Milano.' },
  { city: 'Rome', msg: 'Ciao Mouna, vorrei prenotare un appuntamento a Roma.' },
  { city: 'Naples', msg: 'Ciao Mouna, vorrei prenotare un appuntamento a Napoli.' },
  { city: 'Florence', msg: 'Ciao Mouna, vorrei prenotare un appuntamento a Firenze.' },
];

export const Concierge = () => {
  return (
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
            Select your preferred location to begin a private consultation with Master Trainer Mouna.
          </p>

          {/* Location links */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-4">
            {locations.map((loc, i) => (
              <motion.a
                key={loc.city}
                href={`${WHATSAPP_BASE}${encodeURIComponent(loc.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="font-cormorant text-xl md:text-2xl text-foreground/60 hover:text-primary transition-colors duration-500 relative group"
              >
                {loc.city}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Main CTA */}
          <div className="pt-8">
            <a
              href={`${WHATSAPP_BASE}${encodeURIComponent('Ciao Mouna, vorrei iniziare una consulenza privata con Belle Femme.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] tracking-[0.2em] uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Start a Private Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
