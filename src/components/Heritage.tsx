import { motion } from 'framer-motion';

export const Heritage = () => {
  return (
    <section id="heritage" className="py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary/60">Heritage</p>

          <h2 className="font-cormorant text-3xl md:text-5xl font-light text-foreground leading-[1.3] tracking-wide">
            20 Years of <span className="italic text-primary">Precision</span>
          </h2>

          <div className="h-px w-16 bg-primary/40 mx-auto" />

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            The Belle Femme Method is where architectural science meets elite permanent makeup artistry. 
            Two decades of refinement, innovation, and an unwavering commitment to excellence — 
            led by Master Trainer <span className="text-primary">Mouna Chabbar</span>.
          </p>

          <p className="text-sm text-muted-foreground/60 leading-relaxed max-w-lg mx-auto">
            From Milan to international stages, every technique we teach and every treatment we perform 
            carries the weight of thousands of perfected procedures. This is not beauty — this is architecture.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mt-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};
