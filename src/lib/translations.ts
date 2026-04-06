export type Language = 'it' | 'en' | 'ar';

export interface DaySyllabus {
  title: string;
  items: string[];
}

export interface CourseTranslation {
  title: string;
  duration: string;
  description: string;
  subtitle?: string;
  days?: DaySyllabus[];
  starterKit?: {
    title: string;
    items: string[];
  };
}

export interface TreatmentItem {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export const translations = {
  it: {
    hero: {
      title: "L'Architettura della Bellezza",
      subtitle: 'Prenota la tua consulenza privata con la Master Trainer Mouna Chabbar presso il tuo Atelier di preferenza.',
      viewCourses: 'Vedi Corsi',
      bookTreatment: 'Prenota Trattamento',
    },
    nav: {
      atelier: "L'Atelier",
      academy: "L'Accademia",
      firma: 'La Firma',
    },
    treatments: {
      title: 'Trattamenti',
      subtitle: 'Servizi estetici di alta qualità',
      microblading: 'Microblading',
      lipBlush: 'Lip Blush',
      plasmaPen: 'Plasma Pen Skin Lifting',
      checkAvailability: 'Verifica Disponibilità',
      spotsRemaining: 'posti disponibili',
      soldOut: 'Sold Out',
      waitlistOnly: 'Solo Lista d\'Attesa',
      items: [
        { number: '01', id: 'raw-stroke', title: 'RAW STROKE', subtitle: 'Iperrealismo Strutturale', description: 'Sopracciglia che sembrano reali. Non ricostruite — semplicemente tue. La tecnica Raw Stroke utilizza la nanotecnologia e la precisione blade-stroke della metodologia PhiBrows per deporre ogni singolo tratto seguendo la direzione naturale del pelo. Il risultato è un microblading realistico e impercettibile, calibrato sull\'anatomia unica del tuo viso. Sopracciglia naturali permanenti, senza che nessuno possa accorgersene.' },
        { number: '02', id: 'brow-blueprint', title: 'BROW ARCHITECTURE', subtitle: 'Visagismo Analitico', description: 'Prima ancora del pigmento, c\'è il progetto. La Brow Architecture è la mappatura sopracciglia più rigorosa disponibile: ogni arcata è calcolata sulla densità ossea orbitale, sulla trazione muscolare e sulla Sezione Aurea (1.618). Il risultato è un\'armonia facciale che rimane perfettamente bilanciata anche durante le espressioni facciali — perché non è estetica, è architettura. Il visagismo sopracciglia applicato alla sua massima espressione.' },
        { number: '03', id: 'shadow-layer', title: 'SHADOW LAYER', subtitle: 'Pixelation Avanzata', description: 'Una nebbia pixelata multidimensionale che conferisce densità aerea senza effetto blocco. La tecnica S-Brows/PhiShading rispetta la naturale traslucenza della pelle, creando gradienti soft-focus stratificati. Il risultato è un ombre brows di precisione — la profondità delle powder brows senza peso visivo, su misura per la struttura del tuo viso.' },
        { number: '04', id: 'pigment-restauro', title: 'PIGMENT RESTAURO', subtitle: 'Laboratorio Correttivo', description: 'Sopracciglia virate al grigio, all\'arancio o al rosso. Un lavoro precedente che non ti rappresenta più. Il Laboratorio Correttivo neutralizza e rimuove i pigmenti compromessi attraverso i protocolli avanzati AcademyS — il riferimento mondiale per la correzione PMU. La pelle viene preparata con precisione per accogliere una nuova progettazione armoniosa, per un risultato che reintegra l\'armonia, azzerando visivamente il passato.' },
        { number: '05', id: 'lip-vitality', title: 'NUDE-LIP INFUSION', subtitle: 'Vitalità Labiale Anatomica', description: 'Labbra ridefinite nel colore, nel profilo e nella simmetria — in modo permanente. La Nude-Lip Infusion va oltre il semplice colore: rivitalizza i tessuti in profondità, neutralizza le labbra scure o irregolari e ridisegna il profilo labiale con un finish naturale effetto acquerello. Per chi cerca labbra permanenti che sembrino semplicemente più belle, non truccate.' },
        { number: '06', id: 'eye-engineering', title: 'LASH-LINE ENGINEERING', subtitle: 'Evoluzione Profonda dello Sguardo', description: 'Niente più eyeliner tradizionale. La Lash-Line Engineering depone microscopici depositi di pigmento direttamente tra le ciglia, con una precisione che nessun kajal può replicare. Il risultato è un eyeliner permanente infraciliare invisibile come tecnica, definitivo come effetto: uno sguardo più profondo, più aperto, strutturalmente potenziato ogni giorno.' },
        { number: '07', id: 'lash-architecture', title: 'GAZE SCULPTING', subtitle: 'Design delle Ciglia su Misura', description: 'Ciglia visibilmente più lunghe, più curve e più dense — senza extensions, senza manutenzione quotidiana. Il Gaze Sculpting ristruttura le ciglia naturali dall\'interno attraverso un sistema professionale a base di cheratina e acido ialuronico. Il trattamento segue la geometria orbitale dell\'occhio per un risultato su misura, clinicamente preciso. Il lash lifting Varese ridefinito come ingegneria estetica.' },
        { number: '08', id: 'lash-sculpting', title: 'LASH SCULPTING', subtitle: 'Volumetria Ciglia su Misura', description: 'Extension ciglia su misura, progettate per sembrare tue. Ogni ciuffo è selezionato e posizionato seguendo il lash mapping personalizzato del tuo occhio — forma, peso e curvatura calibrati sulla tua geometria facciale. Il risultato è un volume naturale o drammatico, sempre su misura: ciglia che non si vedono, si sentono.' },
      ] as TreatmentItem[],
    },
    treatmentsPage: {
      heroTitle: "L'Arte del Viso",
      heroSubtitle: 'Trattamenti Estetici di Alta Gamma',
      cta: 'Richiedi Consulenza Privata',
      safety: 'REACH 2026 & ASL Varese Conforme',
      healedResults: 'Lavoro Guarito',
      beforeLabel: 'Prima',
      afterLabel: 'Dopo',
      brows: {
        name: 'Sopracciglia Architetturali',
        poetic: "L'Architettura dello Sguardo",
        description: 'Mappatura di precisione per simmetria matematica. Ogni sopracciglio è progettato usando la sezione aurea — architettura guidata dal compasso che incornicia il viso con perfezione strutturale.',
      },
      lips: {
        name: 'Velvet Lip Blush',
        poetic: 'Sinfonia di Colore',
        description: 'Restauro naturale di contorno e tinta. Una tecnica di sfumatura morbida che ricrea il gradiente delicato delle labbra giovani — dal blush sottile alla definizione scolpita.',
      },
      eyes: {
        name: 'Occhi',
        poetic: 'Sguardo Senza Tempo',
        description: 'Eyeliner permanente e valorizzazione dello sguardo per un\'eleganza duratura.',
      },
      paramedical: {
        name: 'Neutralizzazione Melanina',
        poetic: 'Rinascita Cromatica',
        description: 'Bilanciamento specializzato del colore per toni scuri o irregolari. Correzione avanzata del pigmento che armonizza i sottotoni e ripristina una pelle luminosa e uniforme.',
      },
    },
    gallery: {
      title: 'Galleria',
      subtitle: 'Il Nostro Lavoro',
      healed: 'Risultati Guariti',
      beforeLabel: 'Prima',
      afterLabel: 'Dopo',
    },
    contact: {
      title: 'Contattaci',
      location: 'Varese, Italia',
      whatsapp: 'Consulenza Diretta',
    },
    footer: {
      academy: 'Belle Femme Academy - Varese',
      reach: 'REACH 2026 Conforme',
      gdpr: 'Privacy GDPR',
    },
    about: {
      label: 'Belle Femme Academy',
      heroTitle: 'La Firma',
      bio1: 'Con una formazione in Graphic Design, Mouna ha portato un occhio unico per la precisione e la composizione nel mondo dell\'estetica. Ogni tratto è calcolato, ogni curva è intenzionale — l\'arte incontra la scienza sulla tela più delicata.',
      bio2: 'In qualità di Giudice Internazionale di PMU e Master Trainer certificata, ha formato centinaia di professionisti in tutto il Mediterraneo e il Medio Oriente, elevando gli standard del settore con la sua metodologia rigorosa.',
      bio3: 'Oggi, dal suo Master Studio a Varese, continua a perfezionare la sua arte e a formare la prossima generazione di artisti dell\'estetica, fondendo tradizione mediterranea e innovazione europea.',
      credentialsLabel: 'Traguardi Professionali',
      credentialsTitle: 'Credenziali & Maestria',
      credentials: {
        judge: 'Giudice Internazionale',
        judgeSub: 'Giudice ufficiale in competizioni internazionali di PMU',
        trainer: 'Master Trainer Certificata',
        trainerSub: 'Oltre 10 anni di formazione professionale internazionale',
        design: 'Esperta in Graphic Design',
        designSub: 'Precisione artistica dalla formazione in design grafico',
        specialist: 'Specialista Mediterranea & Araba',
        specialistSub: 'Expertise unica nell\'estetica mediterranea e araba',
      },
      backToAcademy: "Torna all'Accademia",
    },
    courses: {
      title: 'Corsi Professionali',
      subtitle: 'Formazione di eccellenza per professionisti del settore',
      viewDetails: 'Dettagli Corso',
      certNote: 'Tutti gli studenti ricevono certificato ufficiale Belle Femme Academy e supporto online diretto dalla Master Trainer Mouna Chabbar.',
      pmu: {
        title: 'PMU Completo',
        duration: '5 Giorni',
        description: 'Ombre Powder Brows, Cover Up, Ombre/Full Lips, Classic Eyeliner con Specialista Medico',
        subtitle: 'Teoria, Mapping, Pigmentologia · Live Demo · Pratica su pelle sintetica e Modella',
        days: [
          { title: 'Giorno 01 — Fondamenti & Teoria', items: ['Teoria del colore e pigmentologia', 'Anatomia del viso e mappatura', 'Igiene e sicurezza REACH 2026', 'Tecniche di disegno e simmetria', 'Introduzione Ombre Powder Brows'] },
          { title: 'Giorno 02 — Skin Focus & Cover Up', items: ['Formazione focalizzata sulla pelle con Specialista Medico', 'Tecniche di Cover Up / Camouflage', 'Pratica su pelle sintetica', 'Correzione e feedback personale'] },
          { title: 'Giorno 03 — Labbra & Eyeliner', items: ['Tecnica Ombre Lips e Full Lips', 'Classic Eyeliner infraciliare', 'Gestione del cliente e consulenza', 'Documentazione fotografica'] },
          { title: 'Giorno 04 — Live Demo & Modella', items: ['Demo dal vivo della Master Trainer', 'Applicazione su prima modella reale', 'Gestione del dolore e comfort', 'Protocollo post-trattamento'] },
          { title: 'Giorno 05 — Modella & Certificazione', items: ['Seconda sessione su modella', 'Revisione e rifinitura avanzata', 'Cerimonia di Certificazione Internazionale', 'Portfolio e supporto post-corso'] },
        ],
        starterKit: {
          title: 'Kit Professionale Incluso',
          items: ['Pigmenti certificati REACH 2026 (set completo)', 'Aghi e cartucce professionali', 'Dermografo digitale di precisione', 'Manuale tecnico esclusivo Belle Femme', 'Certificato Internazionale + Attestato ASL'],
        },
      },
      microblading: {
        title: 'Microblading Freestyle & Manual Shading',
        duration: '3 Giorni',
        description: 'Progressione strutturata a 14 Livelli: disegno sopracciglia, hair strokes e shading',
        subtitle: 'Hair-stroke patterns · 14 Livelli · Shading Manuale · Pratica su Modella',
        days: [
          { title: 'Giorno 01 — Hair-stroke & Fondamenti', items: ['Tecnica hair-stroke dal livello 1 al 5', 'Pattern naturali e direzione del pelo', 'Mappatura e simmetria freestyle', 'Brow design e armonia del viso', 'Pratica intensiva su pelle sintetica'] },
          { title: 'Giorno 02 — Livelli Avanzati (6–14)', items: ['Progressione livelli 6–14 Freestyle', 'Manual Shading avanzato', 'Combinazioni microblading + shading', 'Sessione di feedback e correzione'] },
          { title: 'Giorno 03 — Modella & Portfolio', items: ['Applicazione su modella reale', 'Protocollo touch-up e guarigione', 'Documentazione portfolio professionale', 'Certificazione Microblading Freestyle'] },
        ],
      },
      ombre_powder: {
        title: 'Ombre Powder Brows & Camouflage',
        duration: '2 Giorni',
        description: 'Tecniche di shading intensivo e correzione di lavori PMU precedenti',
        subtitle: 'Shading Avanzato · Tecniche Correttive · Cover Up · Pratica su Modella',
        days: [
          { title: 'Giorno 01 — Shading & Teoria', items: ['Tecnica Ombre Powder approfondita', 'Teoria del colore per correzione', 'Analisi lavori PMU precedenti', 'Tecniche di camouflage e cover up', 'Pratica intensiva su pelle sintetica'] },
          { title: 'Giorno 02 — Applicazione & Certificazione', items: ['Applicazione correttiva su modella reale', 'Protocollo di guarigione per cover up', 'Documentazione portfolio', 'Certificazione Ombre Powder & Camouflage'] },
        ],
      },
      ombre_lips: {
        title: 'Ombre Lips o Full Lips',
        duration: '2 Giorni',
        description: 'Soft shading o effetto rossetto, teoria del colore e applicazione pratica',
        subtitle: 'Soft Shading · Effetto Rossetto · Colorimetria · Pratica su Modella',
        days: [
          { title: 'Giorno 01 — Teoria & Tecnica', items: ['Tecnica Ombre Lips (soft shading)', 'Tecnica Full Lips (effetto rossetto)', 'Teoria del colore per labbra', 'Mappatura e design delle labbra', 'Pratica su pelle sintetica'] },
          { title: 'Giorno 02 — Applicazione & Certificazione', items: ['Applicazione su modella reale', 'Gestione del colore e saturazione', 'Protocollo post-trattamento labbra', 'Certificazione Lips PMU'] },
        ],
      },
      eyeliner: {
        title: 'Eyeliner Infraciliare Classico',
        duration: '1 Giorno',
        description: 'Design, movimenti della mano e tecniche di pigmentazione per eyeliner',
        subtitle: 'Design Eyeliner · Movimenti Precisi · Pigmentazione · Pratica',
        days: [
          { title: 'Giorno 01 — Tecnica Completa', items: ['Design dell\'eyeliner infraciliare', 'Movimenti della mano e postura', 'Tecniche di pigmentazione', 'Pratica su pelle sintetica e modella', 'Certificazione Eyeliner PMU'] },
        ],
      },
      masterclass_brows: {
        title: 'Architettura Sopraccigliare',
        duration: '1 Giorno',
        description: 'Mappatura avanzata con compasso e filo per simmetria impeccabile',
        subtitle: 'Compasso & Filo · Simmetria Avanzata · Brow Architecture',
        days: [
          { title: 'Masterclass — Architettura del Sopracciglio', items: ['Mappatura avanzata con compasso professionale', 'Tecnica del filo per simmetria perfetta', 'Analisi morfologica del viso', 'Creazione del design personalizzato', 'Attestato di partecipazione specializzata'] },
        ],
      },
      masterclass_lashes: {
        title: 'Extension Ciglia Volume',
        duration: '1 Giorno',
        description: 'Creazione ventagli 2D-6D e mappatura ciglia',
        subtitle: 'Ventagli 2D-6D · Lash Mapping · Volume Avanzato',
        days: [
          { title: 'Masterclass — Volume Lash Extension', items: ['Creazione ventagli da 2D a 6D', 'Lash mapping e design personalizzato', 'Tecniche di applicazione avanzata', 'Gestione del timing e produttività', 'Attestato di partecipazione specializzata'] },
        ],
      },
      masterclass_lamination: {
        title: 'Laminazione Ciglia & Sopracciglia',
        duration: '1 Giorno',
        description: 'Lifting avanzato e nutrimento con sistema Kerafill',
        subtitle: 'Lifting Avanzato · Sistema Kerafill · Lash & Brow Lamination',
        days: [
          { title: 'Masterclass — Laminazione Kerafill', items: ['Tecnica di lifting ciglia avanzata', 'Laminazione sopracciglia professionale', 'Sistema Kerafill: nutrimento e cura', 'Protocolli di sicurezza e aftercare', 'Attestato di partecipazione specializzata'] },
        ],
      },
    },
    coursePage: {
      reach: 'REACH 2026 Conforme',
      asl: 'Conforme ASL',
      backToAcademy: "Torna all'Accademia",
      bookCourse: 'Prenota il Corso',
      secureYourSeat: 'Prenota il tuo Posto',
      whatsapp: 'Consulenza Diretta',
      starterKitBadge: 'Kit Incluso',
      address: 'Studio Master — Via Varese, Italia',
      vat: 'P.IVA 03794680128',
      certTitle: 'Certificazione & Supporto',
      certText: 'Certificato ufficiale Belle Femme Academy e supporto online diretto dalla Master Trainer Mouna Chabbar.',
    },
    academy: {
      title: "L'Accademia",
      subtitle: 'Formazione d\'Eccellenza nella Permanent Makeup Artistry',
      description: 'Impara direttamente dalla Master Trainer Mouna Chabbar. Un percorso formativo esclusivo che combina scienza, arte e tecnica mediterranea.',
      waitlistTitle: 'Lista d\'Attesa Elite',
      waitlistCta: 'Richiedi Curriculum',
      namePlaceholder: 'Nome completo',
      phonePlaceholder: 'Telefono',
      cityPlaceholder: 'Città',
      successMessage: 'Richiesta inviata con successo!',
    },
    concierge: {
      selectAtelier: 'Seleziona il tuo Atelier',
      whereDesire: 'Dove desideri il tuo trattamento?',
      phantomLabel: 'Solo Lista d\'Attesa',
      phonePlaceholder: 'Il tuo numero di telefono',
      joinWaitlist: 'Entra in Lista d\'Attesa',
      waitlistSuccess: 'Iscrizione completata!',
    },
    cookie: {
      text: 'Questo sito utilizza Google Fonts per migliorare la tipografia. Accettando, consenti il caricamento dei font da server Google. Nessun cookie di profilazione.',
      accept: 'Accetta',
      reject: 'Rifiuta',
    },
  },
  en: {
    hero: {
      title: 'The Architecture of Beauty',
      subtitle: 'Secure your private consultation with Master Trainer Mouna Chabbar at your preferred Atelier.',
      viewCourses: 'View Courses',
      bookTreatment: 'Book Treatment',
    },
    nav: {
      atelier: 'The Atelier',
      academy: 'The Academy',
      firma: 'The Signature',
    },
    treatments: {
      title: 'Treatments',
      subtitle: 'High-quality aesthetic services',
      microblading: 'Microblading',
      lipBlush: 'Lip Blush',
      plasmaPen: 'Plasma Pen Skin Lifting',
      checkAvailability: 'Check Availability',
      spotsRemaining: 'spots remaining',
      soldOut: 'Sold Out',
      waitlistOnly: 'Waitlist Only',
      items: [
        { number: '01', id: 'raw-stroke', title: 'RAW STROKE', subtitle: 'Structural Hyper-Realism', description: 'Brows that look real. Not reconstructed — simply yours. The Raw Stroke technique uses nanotechnology and blade-stroke precision from the PhiBrows methodology to deposit every single stroke following the natural direction of the hair. The result is realistic, undetectable microblading, calibrated to the unique anatomy of your face. Permanent natural brows — without anyone ever knowing.' },
        { number: '02', id: 'brow-blueprint', title: 'BROW ARCHITECTURE', subtitle: 'Analytic Visagism', description: 'Before pigment, there is the blueprint. Brow Architecture is the most rigorous brow mapping available: every arch is calculated on orbital bone density, muscular pull, and the Golden Ratio (1.618). The result is facial harmony that holds perfectly — even through every expression — because this is not aesthetics, it is architecture.' },
        { number: '03', id: 'shadow-layer', title: 'SHADOW LAYER', subtitle: 'Advanced Pixelation', description: 'A multi-dimensional pixelated mist that delivers airy density without the solid block effect. The S-Brows/PhiShading technique respects the natural translucency of the skin, creating layered soft-focus gradients. Precision ombre brows — the depth of powder brows without visual weight, tailored to your face.' },
        { number: '04', id: 'pigment-restauro', title: 'PIGMENT RESTAURO', subtitle: 'Corrective Laboratory', description: 'Brows that have shifted to grey, orange, or red. A previous treatment that no longer represents you. The Corrective Laboratory neutralises and removes compromised pigments through advanced AcademyS protocols — the global reference for PMU correction. The skin is prepared with precision to receive a new harmonious design, restoring balance and visually resetting the past.' },
        { number: '05', id: 'lip-vitality', title: 'NUDE-LIP INFUSION', subtitle: 'Anatomical Lip Vitality', description: 'Lips redefined in colour, profile, and symmetry — permanently. The Nude-Lip Infusion goes beyond colour: it revitalises the tissues in depth, neutralises dark or uneven lips, and redraws the lip profile with a natural watercolour finish. Permanent lips that look more beautiful — not made up.' },
        { number: '06', id: 'eye-engineering', title: 'LASH-LINE ENGINEERING', subtitle: 'Deep Gaze Evolution', description: 'No more traditional eyeliner. Lash-Line Engineering deposits microscopic pigment precisely within the lash line, with a precision no kajal can replicate. Permanent infraciliary definition — invisible in technique, definitive in effect: a deeper, more open gaze, structurally enhanced every day.' },
        { number: '07', id: 'lash-architecture', title: 'GAZE SCULPTING', subtitle: 'Bespoke Lash Design', description: 'Visibly longer, more curved, and denser lashes — without extensions, without daily maintenance. Gaze Sculpting restructures the natural lashes from within through a professional keratin and hyaluronic acid system. The treatment follows the orbital geometry of the eye for a bespoke, clinically precise result. Lash lifting redefined as aesthetic engineering.' },
        { number: '08', id: 'lash-sculpting', title: 'LASH SCULPTING', subtitle: 'Bespoke Lash Volume', description: 'Bespoke lash extensions, designed to look like yours. Every cluster is selected and positioned following the personalised lash mapping of your eye — shape, weight, and curl calibrated to your facial geometry. Natural or dramatic volume, always tailored: extensions that enhance, never overpower.' },
      ] as TreatmentItem[],
    },
    treatmentsPage: {
      heroTitle: 'The Art of the Face',
      heroSubtitle: 'High-End Aesthetic Treatments',
      cta: 'Request Private Consultation',
      safety: 'REACH 2026 & ASL Varese Compliant',
      healedResults: 'Healed Results',
      beforeLabel: 'Before',
      afterLabel: 'After',
      brows: {
        name: 'Signature Architectural Brows',
        poetic: 'The Architecture of the Gaze',
        description: 'Precision mapping for mathematical symmetry. Each brow is designed using the golden ratio — compass-guided architecture that frames the face with structural perfection.',
      },
      lips: {
        name: 'Velvet Lip Blush',
        poetic: 'A Symphony of Color',
        description: 'Natural restoration of contour and tint. A soft-shading technique that recreates the delicate gradient of youthful lips — from subtle blush to sculpted definition.',
      },
      eyes: {
        name: 'Eyes',
        poetic: 'Timeless Elegance',
        description: 'Permanent eyeliner and gaze enhancement for lasting elegance that frames your eyes.',
      },
      paramedical: {
        name: 'Melanin Neutralization',
        poetic: 'Chromatic Rebirth',
        description: 'Specialized color balancing for dark or uneven tones. Advanced pigment correction that harmonizes undertones and restores luminous, even-toned skin.',
      },
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Our Work',
      healed: 'Healed Results',
      beforeLabel: 'Before',
      afterLabel: 'After',
    },
    contact: {
      title: 'Contact Us',
      location: 'Varese, Italy',
      whatsapp: 'Direct Consultation',
    },
    footer: {
      academy: 'Belle Femme Academy - Varese',
      reach: 'REACH 2026 Compliant',
      gdpr: 'GDPR Privacy',
    },
    about: {
      label: 'Belle Femme Academy',
      heroTitle: 'The Signature',
      bio1: 'With a foundation in Graphic Design, Mouna brought a unique eye for precision and composition to the world of aesthetics. Every stroke is calculated, every curve intentional — art meets science on the most delicate canvas.',
      bio2: 'As an International PMU Judge and Certified Master Trainer, she has trained hundreds of professionals across the Mediterranean and Middle East, elevating industry standards with her rigorous methodology.',
      bio3: 'Today, from her Master Studio in Varese, she continues to refine her craft and train the next generation of aesthetic artists, blending Mediterranean tradition with European innovation.',
      credentialsLabel: 'Professional Milestones',
      credentialsTitle: 'Credentials & Mastery',
      credentials: {
        judge: 'International Judge',
        judgeSub: 'Official judge at international PMU competitions',
        trainer: 'Certified Master Trainer',
        trainerSub: '10+ years of international professional training',
        design: 'Graphic Design Expert',
        designSub: 'Artistic precision from graphic design background',
        specialist: 'Mediterranean & Arab Specialist',
        specialistSub: 'Unique expertise in Mediterranean and Arab aesthetics',
      },
      backToAcademy: 'Back to Academy',
    },
    courses: {
      title: 'Professional Courses',
      subtitle: 'Excellence training for industry professionals',
      viewDetails: 'Course Details',
      certNote: 'All students receive an official Belle Femme Academy certificate and direct online support from Master Trainer Mouna Chabbar.',
      pmu: {
        title: 'Complete PMU',
        duration: '5 Days',
        description: 'Ombre Powder Brows, Cover Up, Ombre/Full Lips, Classic Eyeliner with Medical Specialist',
        subtitle: 'Theory, Mapping, Pigmentology · Live Demo · Synthetic Skin & Live Model Practice',
        days: [
          { title: 'Day 01 — Foundations & Theory', items: ['Colour theory and pigmentology', 'Facial anatomy and mapping', 'Hygiene and REACH 2026 safety', 'Drawing techniques and symmetry', 'Introduction to Ombre Powder Brows'] },
          { title: 'Day 02 — Skin Focus & Cover Up', items: ['Skin-focused training with Medical Specialist', 'Cover Up / Camouflage techniques', 'Practice on synthetic skin', 'Personal correction and feedback'] },
          { title: 'Day 03 — Lips & Eyeliner', items: ['Ombre Lips and Full Lips technique', 'Classic infraciliary eyeliner', 'Client management and consultation', 'Photographic documentation'] },
          { title: 'Day 04 — Live Demo & Model', items: ['Live demo by Master Trainer', 'Application on first real model', 'Pain management and comfort', 'Post-treatment protocol'] },
          { title: 'Day 05 — Model & Certification', items: ['Second model session', 'Advanced review and refinement', 'International Certification Ceremony', 'Portfolio and post-course support'] },
        ],
        starterKit: {
          title: 'Professional Starter Kit Included',
          items: ['REACH 2026 certified pigments (full set)', 'Professional needles and cartridges', 'Digital precision dermograph', 'Exclusive Belle Femme technical manual', 'International Certificate + ASL Attestation'],
        },
      },
      microblading: {
        title: 'Microblading Freestyle & Manual Shading',
        duration: '3 Days',
        description: 'Structured 14-level progression: brow design, hair strokes, and shading',
        subtitle: 'Hair-stroke patterns · 14 Levels · Manual Shading · Live Model',
        days: [
          { title: 'Day 01 — Hair-stroke & Foundations', items: ['Hair-stroke technique levels 1–5', 'Natural patterns and hair direction', 'Freestyle mapping and symmetry', 'Brow design and facial harmony', 'Intensive practice on synthetic skin'] },
          { title: 'Day 02 — Advanced Levels (6–14)', items: ['Freestyle levels 6–14 progression', 'Advanced manual shading', 'Microblading + shading combinations', 'Feedback and correction session'] },
          { title: 'Day 03 — Model & Portfolio', items: ['Application on real model', 'Touch-up and healing protocol', 'Professional portfolio documentation', 'Microblading Freestyle Certification'] },
        ],
      },
      ombre_powder: {
        title: 'Ombre Powder Brows & Camouflage',
        duration: '2 Days',
        description: 'Intensive shading and corrective techniques for previous PMU work',
        subtitle: 'Advanced Shading · Corrective Techniques · Cover Up · Live Model',
        days: [
          { title: 'Day 01 — Shading & Theory', items: ['In-depth Ombre Powder technique', 'Colour theory for correction', 'Analysis of previous PMU work', 'Camouflage and cover up techniques', 'Intensive practice on synthetic skin'] },
          { title: 'Day 02 — Application & Certification', items: ['Corrective application on real model', 'Healing protocol for cover up', 'Portfolio documentation', 'Ombre Powder & Camouflage Certification'] },
        ],
      },
      ombre_lips: {
        title: 'Ombre Lips or Full Lips',
        duration: '2 Days',
        description: 'Soft shading or lipstick effect, colour theory, and practical application',
        subtitle: 'Soft Shading · Lipstick Effect · Colour Theory · Live Model',
        days: [
          { title: 'Day 01 — Theory & Technique', items: ['Ombre Lips technique (soft shading)', 'Full Lips technique (lipstick effect)', 'Lip colour theory', 'Lip mapping and design', 'Practice on synthetic skin'] },
          { title: 'Day 02 — Application & Certification', items: ['Application on real model', 'Colour and saturation management', 'Lip post-treatment protocol', 'Lips PMU Certification'] },
        ],
      },
      eyeliner: {
        title: 'Classic Infraciliary Eyeliner',
        duration: '1 Day',
        description: 'Dedicated program for design, hand movements, and pigmentation techniques',
        subtitle: 'Eyeliner Design · Precise Movements · Pigmentation · Practice',
        days: [
          { title: 'Day 01 — Complete Technique', items: ['Infraciliary eyeliner design', 'Hand movements and posture', 'Pigmentation techniques', 'Practice on synthetic skin and model', 'Eyeliner PMU Certification'] },
        ],
      },
      masterclass_brows: {
        title: 'Eyebrow Architecture',
        duration: '1 Day',
        description: 'Advanced mapping with compass and thread for flawless symmetry',
        subtitle: 'Compass & Thread · Advanced Symmetry · Brow Architecture',
        days: [
          { title: 'Masterclass — Eyebrow Architecture', items: ['Advanced mapping with professional compass', 'Thread technique for perfect symmetry', 'Facial morphology analysis', 'Custom design creation', 'Certificate of specialized participation'] },
        ],
      },
      masterclass_lashes: {
        title: 'Volume Eyelash Extension',
        duration: '1 Day',
        description: 'Mastery of fan creation (2D-6D) and lash mapping',
        subtitle: '2D-6D Fans · Lash Mapping · Advanced Volume',
        days: [
          { title: 'Masterclass — Volume Lash Extension', items: ['Fan creation from 2D to 6D', 'Custom lash mapping and design', 'Advanced application techniques', 'Timing and productivity management', 'Certificate of specialized participation'] },
        ],
      },
      masterclass_lamination: {
        title: 'Lash & Brow Lamination',
        duration: '1 Day',
        description: 'Advanced lifting and nourishment using the Kerafill system',
        subtitle: 'Advanced Lifting · Kerafill System · Lash & Brow Lamination',
        days: [
          { title: 'Masterclass — Kerafill Lamination', items: ['Advanced lash lifting technique', 'Professional brow lamination', 'Kerafill system: nourishment and care', 'Safety protocols and aftercare', 'Certificate of specialized participation'] },
        ],
      },
    },
    coursePage: {
      reach: 'REACH 2026 Compliant',
      asl: 'ASL Compliant',
      backToAcademy: 'Back to Academy',
      bookCourse: 'Book this Course',
      secureYourSeat: 'Secure Your Seat',
      whatsapp: 'Direct Consultation',
      starterKitBadge: 'Kit Included',
      address: 'Master Studio — Varese, Italy',
      vat: 'VAT 03794680128',
      certTitle: 'Certification & Support',
      certText: 'Official Belle Femme Academy certificate and direct online support from Master Trainer Mouna Chabbar.',
    },
    academy: {
      title: 'The Academy',
      subtitle: 'Excellence Training in Permanent Makeup Artistry',
      description: 'Learn directly from Master Trainer Mouna Chabbar. An exclusive training path combining science, art, and Mediterranean technique.',
      waitlistTitle: 'Elite Waitlist',
      waitlistCta: 'Request Curriculum',
      namePlaceholder: 'Full name',
      phonePlaceholder: 'Phone number',
      cityPlaceholder: 'City',
      successMessage: 'Request submitted successfully!',
    },
    concierge: {
      selectAtelier: 'Select Your Atelier',
      whereDesire: 'Where do you desire your treatment?',
      phantomLabel: 'Waitlist Only',
      phonePlaceholder: 'Your phone number',
      joinWaitlist: 'Join Waitlist',
      waitlistSuccess: 'Successfully joined!',
    },
    cookie: {
      text: 'This site uses Google Fonts to enhance typography. By accepting, you allow fonts to load from Google servers. No profiling cookies.',
      accept: 'Accept',
      reject: 'Reject',
    },
  },
  ar: {
    hero: { title: '', subtitle: '', viewCourses: '', bookTreatment: '' },
    nav: { atelier: '', academy: '', firma: '' },
    treatments: {
      title: '', subtitle: '', microblading: '', lipBlush: '', plasmaPen: '',
      checkAvailability: '', spotsRemaining: '', soldOut: '', waitlistOnly: '',
      items: [] as TreatmentItem[],
    },
    treatmentsPage: {
      heroTitle: '', heroSubtitle: '', cta: '', safety: '', healedResults: '', beforeLabel: '', afterLabel: '',
      brows: { name: '', poetic: '', description: '' },
      lips: { name: '', poetic: '', description: '' },
      eyes: { name: '', poetic: '', description: '' },
      paramedical: { name: '', poetic: '', description: '' },
    },
    gallery: { title: '', subtitle: '', healed: '', beforeLabel: '', afterLabel: '' },
    contact: { title: '', location: '', whatsapp: '' },
    footer: { academy: '', reach: '', gdpr: '' },
    about: {
      label: '', heroTitle: '', bio1: '', bio2: '', bio3: '',
      credentialsLabel: '', credentialsTitle: '',
      credentials: { judge: '', judgeSub: '', trainer: '', trainerSub: '', design: '', designSub: '', specialist: '', specialistSub: '' },
      backToAcademy: '',
    },
    courses: {
      title: '', subtitle: '', viewDetails: '', certNote: '',
      pmu: { title: '', duration: '', description: '', subtitle: '', days: [], starterKit: { title: '', items: [] } },
      microblading: { title: '', duration: '', description: '', subtitle: '', days: [] },
      ombre_powder: { title: '', duration: '', description: '', subtitle: '', days: [] },
      ombre_lips: { title: '', duration: '', description: '', subtitle: '', days: [] },
      eyeliner: { title: '', duration: '', description: '', subtitle: '', days: [] },
      masterclass_brows: { title: '', duration: '', description: '', subtitle: '', days: [] },
      masterclass_lashes: { title: '', duration: '', description: '', subtitle: '', days: [] },
      masterclass_lamination: { title: '', duration: '', description: '', subtitle: '', days: [] },
    },
    coursePage: {
      reach: '', asl: '', backToAcademy: '', bookCourse: '', secureYourSeat: '',
      whatsapp: '', starterKitBadge: '', address: '', vat: '', certTitle: '', certText: '',
    },
    academy: { title: '', subtitle: '', description: '', waitlistTitle: '', waitlistCta: '', namePlaceholder: '', phonePlaceholder: '', cityPlaceholder: '', successMessage: '' },
    concierge: { selectAtelier: '', whereDesire: '', phantomLabel: '', phonePlaceholder: '', joinWaitlist: '', waitlistSuccess: '' },
    cookie: { text: '', accept: '', reject: '' },
  },
};

export function isRTL(lang: Language): boolean {
  return lang === 'ar';
}
