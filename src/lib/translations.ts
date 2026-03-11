export type Language = 'it' | 'en' | 'fr' | 'ar';

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

export const translations = {
  it: {
    hero: {
      title: 'Eleganza. Precisione. Maestria.',
      subtitle: 'Master Trainer Internazionale specializzata in Estetica Mediterranea & Araba',
      viewCourses: 'Vedi Corsi',
      bookTreatment: 'Prenota Trattamento',
    },
    nav: {
      academy: 'Academy',
      treatments: 'Trattamenti',
      about: 'Chi Sono',
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
    treatments: {
      title: 'Trattamenti',
      subtitle: 'Servizi estetici di alta qualità',
      microblading: 'Microblading',
      lipBlush: 'Lip Blush',
      plasmaPen: 'Plasma Pen Skin Lifting',
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
        name: 'Sopracciglia',
        poetic: "L'Architettura dello Sguardo",
        description: 'Microblading, Powder Brows e tecniche ibride per sopracciglia perfettamente scolpite, studiate sulla morfologia unica del tuo viso.',
      },
      lips: {
        name: 'Labbra',
        poetic: 'Sinfonia di Colore',
        description: 'Lip Blush e definizione labbra per un colore naturale e armonioso che esalta la bellezza del tuo sorriso.',
      },
      eyes: {
        name: 'Occhi',
        poetic: 'Sguardo Senza Tempo',
        description: 'Eyeliner permanente e valorizzazione dello sguardo per un\'eleganza duratura che incornicia i tuoi occhi.',
      },
      paramedical: {
        name: 'Paramedicale',
        poetic: 'Rinascita',
        description: 'Trattamenti di camouflage e ricostruzione estetica per restituire fiducia e bellezza naturale.',
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
      whatsapp: 'Contatta su WhatsApp',
    },
    footer: {
      academy: 'Belle Femme Academy - Varese',
      reach: 'REACH 2026 Conforme',
      gdpr: 'Privacy GDPR',
    },
    about: {
      label: 'Belle Femme Academy',
      heroTitle: 'Eccellenza Europea',
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
      backToAcademy: 'Torna all\'Academy',
    },
    coursePage: {
      reach: 'REACH 2026 Conforme',
      asl: 'Conforme ASL',
      backToAcademy: 'Torna all\'Academy',
      bookCourse: 'Prenota il Corso',
      secureYourSeat: 'Prenota il tuo Posto',
      whatsapp: 'Info su WhatsApp',
      starterKitBadge: 'Kit Incluso',
      address: 'Studio Master — Via Varese, Italia',
      vat: 'P.IVA 03794680128',
      certTitle: 'Certificazione & Supporto',
      certText: 'Certificato ufficiale Belle Femme Academy e supporto online diretto dalla Master Trainer Mouna Chabbar.',
    },
  },
  en: {
    hero: {
      title: 'Elegance. Precision. Artistry.',
      subtitle: 'International Master Trainer specialized in Mediterranean & Arab Aesthetics',
      viewCourses: 'View Courses',
      bookTreatment: 'Book Treatment',
    },
    nav: {
      academy: 'Academy',
      treatments: 'Treatments',
      about: 'About',
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
    treatments: {
      title: 'Treatments',
      subtitle: 'High-quality aesthetic services',
      microblading: 'Microblading',
      lipBlush: 'Lip Blush',
      plasmaPen: 'Plasma Pen Skin Lifting',
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
        name: 'Brows',
        poetic: 'The Architecture of the Gaze',
        description: 'Microblading, Powder Brows and hybrid techniques for perfectly sculpted brows, designed around your unique facial morphology.',
      },
      lips: {
        name: 'Lips',
        poetic: 'A Symphony of Color',
        description: 'Lip Blush and lip definition for a natural, harmonious color that enhances the beauty of your smile.',
      },
      eyes: {
        name: 'Eyes',
        poetic: 'Timeless Elegance',
        description: 'Permanent eyeliner and gaze enhancement for lasting elegance that frames your eyes.',
      },
      paramedical: {
        name: 'Paramedical',
        poetic: 'Rebirth',
        description: 'Camouflage and aesthetic reconstruction treatments to restore confidence and natural beauty.',
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
      whatsapp: 'Contact on WhatsApp',
    },
    footer: {
      academy: 'Belle Femme Academy - Varese',
      reach: 'REACH 2026 Compliant',
      gdpr: 'GDPR Privacy',
    },
    about: {
      label: 'Belle Femme Academy',
      heroTitle: 'European Excellence',
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
    coursePage: {
      reach: 'REACH 2026 Compliant',
      asl: 'ASL Compliant',
      backToAcademy: 'Back to Academy',
      bookCourse: 'Book this Course',
      secureYourSeat: 'Secure Your Seat',
      whatsapp: 'Info on WhatsApp',
      starterKitBadge: 'Kit Included',
      address: 'Master Studio — Varese, Italy',
      vat: 'VAT 03794680128',
      certTitle: 'Certification & Support',
      certText: 'Official Belle Femme Academy certificate and direct online support from Master Trainer Mouna Chabbar.',
    },
  },
  fr: {
    hero: {
      title: 'Élégance. Précision. Art.',
      subtitle: 'Master Trainer International spécialisée en Esthétique Méditerranéenne & Arabe',
      viewCourses: 'Voir les Cours',
      bookTreatment: 'Réserver un Traitement',
    },
    nav: {
      academy: 'Académie',
      treatments: 'Traitements',
      about: 'À Propos',
    },
    courses: {
      title: 'Cours Professionnels',
      subtitle: 'Formation d\'excellence pour professionnels',
      viewDetails: 'Détails du Cours',
      certNote: 'Tous les étudiants reçoivent un certificat officiel Belle Femme Academy et un support en ligne direct de la Master Trainer Mouna Chabbar.',
      pmu: {
        title: 'PMU Complet',
        duration: '5 Jours',
        description: 'Ombre Powder Brows, Cover Up, Ombre/Full Lips, Classic Eyeliner avec Spécialiste Médical',
        subtitle: 'Théorie, Mapping, Pigmentologie · Démo Live · Peau Synthétique & Modèle',
        days: [
          { title: 'Jour 01 — Fondements & Théorie', items: ['Théorie des couleurs et pigmentologie', 'Anatomie faciale et cartographie', 'Hygiène et sécurité REACH 2026', 'Techniques de dessin et symétrie', 'Introduction Ombre Powder Brows'] },
          { title: 'Jour 02 — Focus Peau & Cover Up', items: ['Formation peau avec Spécialiste Médical', 'Techniques de Cover Up / Camouflage', 'Pratique sur peau synthétique', 'Correction personnalisée et retours'] },
          { title: 'Jour 03 — Lèvres & Eyeliner', items: ['Technique Ombre Lips et Full Lips', 'Eyeliner infraciliaire classique', 'Gestion client et consultation', 'Documentation photographique'] },
          { title: 'Jour 04 — Démo Live & Modèle', items: ['Démo en direct de la Master Trainer', 'Application sur premier modèle réel', 'Gestion de la douleur et confort', 'Protocole post-traitement'] },
          { title: 'Jour 05 — Modèle & Certification', items: ['Deuxième session sur modèle', 'Révision et perfectionnement avancé', 'Cérémonie de Certification Internationale', 'Portfolio et support post-cours'] },
        ],
        starterKit: {
          title: 'Kit Professionnel Inclus',
          items: ['Pigments certifiés REACH 2026 (set complet)', 'Aiguilles et cartouches professionnelles', 'Dermographe numérique de précision', 'Manuel technique exclusif Belle Femme', 'Certificat International + Attestation ASL'],
        },
      },
      microblading: {
        title: 'Microblading Freestyle & Shading Manuel',
        duration: '3 Jours',
        description: 'Progression structurée à 14 niveaux: design sourcils, hair strokes et shading',
        subtitle: 'Hair-stroke patterns · 14 Niveaux · Shading Manuel · Modèle Réel',
        days: [
          { title: 'Jour 01 — Hair-stroke & Fondements', items: ['Technique hair-stroke niveaux 1–5', 'Patterns naturels et direction des poils', 'Mapping et symétrie freestyle', 'Design sourcils et harmonie faciale', 'Pratique intensive sur peau synthétique'] },
          { title: 'Jour 02 — Niveaux Avancés (6–14)', items: ['Progression freestyle niveaux 6–14', 'Shading manuel avancé', 'Combinaisons microblading + shading', 'Session de feedback et correction'] },
          { title: 'Jour 03 — Modèle & Portfolio', items: ['Application sur modèle réel', 'Protocole retouche et cicatrisation', 'Documentation portfolio professionnel', 'Certification Microblading Freestyle'] },
        ],
      },
      ombre_powder: {
        title: 'Ombre Powder Brows & Camouflage',
        duration: '2 Jours',
        description: 'Techniques de shading intensif et correction de travaux PMU antérieurs',
        subtitle: 'Shading Avancé · Techniques Correctives · Cover Up · Modèle Réel',
        days: [
          { title: 'Jour 01 — Shading & Théorie', items: ['Technique Ombre Powder approfondie', 'Théorie des couleurs pour correction', 'Analyse de travaux PMU antérieurs', 'Techniques de camouflage et cover up', 'Pratique intensive sur peau synthétique'] },
          { title: 'Jour 02 — Application & Certification', items: ['Application corrective sur modèle réel', 'Protocole de cicatrisation pour cover up', 'Documentation portfolio', 'Certification Ombre Powder & Camouflage'] },
        ],
      },
      ombre_lips: {
        title: 'Ombre Lips ou Full Lips',
        duration: '2 Jours',
        description: 'Shading doux ou effet rouge à lèvres, théorie des couleurs et application pratique',
        subtitle: 'Shading Doux · Effet Rouge à Lèvres · Colorimétrie · Modèle Réel',
        days: [
          { title: 'Jour 01 — Théorie & Technique', items: ['Technique Ombre Lips (shading doux)', 'Technique Full Lips (effet rouge à lèvres)', 'Théorie des couleurs pour lèvres', 'Mapping et design des lèvres', 'Pratique sur peau synthétique'] },
          { title: 'Jour 02 — Application & Certification', items: ['Application sur modèle réel', 'Gestion de la couleur et saturation', 'Protocole post-traitement lèvres', 'Certification Lips PMU'] },
        ],
      },
      eyeliner: {
        title: 'Eyeliner Infraciliaire Classique',
        duration: '1 Jour',
        description: 'Programme dédié au design, mouvements de la main et techniques de pigmentation',
        subtitle: 'Design Eyeliner · Mouvements Précis · Pigmentation · Pratique',
        days: [
          { title: 'Jour 01 — Technique Complète', items: ['Design de l\'eyeliner infraciliaire', 'Mouvements de la main et posture', 'Techniques de pigmentation', 'Pratique sur peau synthétique et modèle', 'Certification Eyeliner PMU'] },
        ],
      },
      masterclass_brows: {
        title: 'Architecture du Sourcil',
        duration: '1 Jour',
        description: 'Cartographie avancée avec compas et fil pour une symétrie impeccable',
        subtitle: 'Compas & Fil · Symétrie Avancée · Architecture du Sourcil',
        days: [
          { title: 'Masterclass — Architecture du Sourcil', items: ['Cartographie avancée avec compas professionnel', 'Technique du fil pour symétrie parfaite', 'Analyse morphologique du visage', 'Création de design personnalisé', 'Attestation de participation spécialisée'] },
        ],
      },
      masterclass_lashes: {
        title: 'Extension de Cils Volume',
        duration: '1 Jour',
        description: 'Maîtrise de la création d\'éventails (2D-6D) et mapping des cils',
        subtitle: 'Éventails 2D-6D · Lash Mapping · Volume Avancé',
        days: [
          { title: 'Masterclass — Extension de Cils Volume', items: ['Création d\'éventails de 2D à 6D', 'Mapping des cils et design personnalisé', 'Techniques d\'application avancées', 'Gestion du timing et productivité', 'Attestation de participation spécialisée'] },
        ],
      },
      masterclass_lamination: {
        title: 'Lamination Cils & Sourcils',
        duration: '1 Jour',
        description: 'Lifting avancé et nutrition avec le système Kerafill',
        subtitle: 'Lifting Avancé · Système Kerafill · Lamination Cils & Sourcils',
        days: [
          { title: 'Masterclass — Lamination Kerafill', items: ['Technique de lifting cils avancée', 'Lamination sourcils professionnelle', 'Système Kerafill: nutrition et soin', 'Protocoles de sécurité et aftercare', 'Attestation de participation spécialisée'] },
        ],
      },
    },
    treatments: {
      title: 'Traitements',
      subtitle: 'Services esthétiques de haute qualité',
      microblading: 'Microblading',
      lipBlush: 'Lip Blush',
      plasmaPen: 'Lifting Cutané au Plasma Pen',
    },
    treatmentsPage: {
      heroTitle: "L'Art du Visage",
      heroSubtitle: 'Traitements Esthétiques Haut de Gamme',
      cta: 'Demander une Consultation',
      safety: 'Conforme REACH 2026 & ASL Varese',
      healedResults: 'Résultats Cicatrisés',
      beforeLabel: 'Avant',
      afterLabel: 'Après',
      brows: {
        name: 'Sourcils',
        poetic: "L'Architecture du Regard",
        description: 'Microblading, Powder Brows et techniques hybrides pour des sourcils parfaitement sculptés, conçus selon la morphologie unique de votre visage.',
      },
      lips: {
        name: 'Lèvres',
        poetic: 'Symphonie de Couleurs',
        description: 'Lip Blush et définition des lèvres pour une couleur naturelle et harmonieuse qui sublime la beauté de votre sourire.',
      },
      eyes: {
        name: 'Yeux',
        poetic: 'Élégance Intemporelle',
        description: 'Eyeliner permanent et sublimation du regard pour une élégance durable qui encadre vos yeux.',
      },
      paramedical: {
        name: 'Paramédical',
        poetic: 'Renaissance',
        description: 'Traitements de camouflage et reconstruction esthétique pour redonner confiance et beauté naturelle.',
      },
    },
    gallery: {
      title: 'Galerie',
      subtitle: 'Notre Travail',
      healed: 'Résultats Cicatrisés',
      beforeLabel: 'Avant',
      afterLabel: 'Après',
    },
    contact: {
      title: 'Contactez-nous',
      location: 'Varese, Italie',
      whatsapp: 'Contacter sur WhatsApp',
    },
    footer: {
      academy: 'Belle Femme Academy - Varese',
      reach: 'Conforme REACH 2026',
      gdpr: 'Confidentialité RGPD',
    },
    about: {
      label: 'Belle Femme Academy',
      heroTitle: 'Excellence Européenne',
      bio1: 'Avec une formation en Graphic Design, Mouna a apporté un œil unique pour la précision et la composition dans le monde de l\'esthétique. Chaque trait est calculé, chaque courbe intentionnelle — l\'art rencontre la science sur la toile la plus délicate.',
      bio2: 'En tant que Juge International de PMU et Master Trainer certifiée, elle a formé des centaines de professionnels à travers la Méditerranée et le Moyen-Orient, élevant les standards de l\'industrie avec sa méthodologie rigoureuse.',
      bio3: 'Aujourd\'hui, depuis son Master Studio à Varese, elle continue de perfectionner son art et de former la prochaine génération d\'artistes esthétiques, alliant tradition méditerranéenne et innovation européenne.',
      credentialsLabel: 'Jalons Professionnels',
      credentialsTitle: 'Références & Maîtrise',
      credentials: {
        judge: 'Juge International',
        judgeSub: 'Juge officielle aux compétitions internationales de PMU',
        trainer: 'Master Trainer Certifiée',
        trainerSub: 'Plus de 10 ans de formation professionnelle internationale',
        design: 'Experte en Graphic Design',
        designSub: 'Précision artistique issue de la formation en design graphique',
        specialist: 'Spécialiste Méditerranéenne & Arabe',
        specialistSub: 'Expertise unique en esthétique méditerranéenne et arabe',
      },
      backToAcademy: 'Retour à l\'Académie',
    },
    coursePage: {
      reach: 'Conforme REACH 2026',
      asl: 'Conforme ASL',
      backToAcademy: 'Retour à l\'Académie',
      bookCourse: 'Réserver ce Cours',
      secureYourSeat: 'Réservez votre Place',
      whatsapp: 'Info sur WhatsApp',
      starterKitBadge: 'Kit Inclus',
      address: 'Master Studio — Varese, Italie',
      vat: 'TVA 03794680128',
      certTitle: 'Certification & Support',
      certText: 'Certificat officiel Belle Femme Academy et support en ligne direct de la Master Trainer Mouna Chabbar.',
    },
  },
  ar: {
    hero: {
      title: 'أناقة. دقة. فن.',
      subtitle: 'مدربة دولية رئيسية متخصصة في الجماليات المتوسطية والعربية',
      viewCourses: 'عرض الدورات',
      bookTreatment: 'حجز موعد',
    },
    nav: {
      academy: 'الأكاديمية',
      treatments: 'العلاجات',
      about: 'عن منى',
    },
    courses: {
      title: 'الدورات المهنية',
      subtitle: 'تدريب متميز للمحترفين',
      viewDetails: 'تفاصيل الدورة',
      certNote: 'يحصل جميع الطلاب على شهادة رسمية من Belle Femme Academy ودعم مباشر عبر الإنترنت من المدربة الرئيسية منى شبار.',
      pmu: {
        title: 'PMU الكامل',
        duration: '٥ أيام',
        description: 'أومبري باودر براوز، كفر أب، أومبري/فل ليبس، آيلاينر كلاسيكي مع أخصائي طبي',
        subtitle: 'النظرية، الرسم، علم الأصباغ · عرض مباشر · بشرة صناعية وموديل حي',
        days: [
          { title: 'اليوم ٠١ — الأسس والنظرية', items: ['نظرية الألوان وعلم الأصباغ', 'تشريح الوجه والرسم', 'النظافة وسلامة REACH 2026', 'تقنيات الرسم والتناسق', 'مقدمة أومبري باودر براوز'] },
          { title: 'اليوم ٠٢ — التركيز على البشرة وكفر أب', items: ['تدريب مركز على البشرة مع أخصائي طبي', 'تقنيات كفر أب / تمويه', 'التطبيق على بشرة صناعية', 'التصحيح الشخصي والتغذية الراجعة'] },
          { title: 'اليوم ٠٣ — الشفاه والآيلاينر', items: ['تقنية أومبري ليبس وفل ليبس', 'آيلاينر تحت الرمش الكلاسيكي', 'إدارة العميل والاستشارة', 'التوثيق الفوتوغرافي'] },
          { title: 'اليوم ٠٤ — العرض المباشر والموديل', items: ['عرض مباشر من المدربة الرئيسية', 'التطبيق على أول موديل حقيقي', 'إدارة الألم والراحة', 'بروتوكول ما بعد العلاج'] },
          { title: 'اليوم ٠٥ — الموديل والشهادة', items: ['جلسة الموديل الثانية', 'المراجعة والتحسين المتقدم', 'حفل الشهادة الدولية', 'الحقيبة والدعم بعد الدورة'] },
        ],
        starterKit: {
          title: 'طقم احترافي مشمول',
          items: ['أصباغ معتمدة REACH 2026 (طقم كامل)', 'إبر وخراطيش احترافية', 'قلم رقمي دقيق للجلد', 'دليل تقني حصري Belle Femme', 'شهادة دولية + اعتماد ASL'],
        },
      },
      microblading: {
        title: 'مايكروبليدنج حر وتظليل يدوي',
        duration: '٣ أيام',
        description: 'تقدم منظم في ١٤ مستوى: تصميم الحواجب، خطوط الشعر والتظليل',
        subtitle: 'أنماط شعر · ١٤ مستوى · تظليل يدوي · موديل حقيقي',
        days: [
          { title: 'اليوم ٠١ — شعرة والأسس', items: ['تقنية شعرة من المستوى ١ إلى ٥', 'الأنماط الطبيعية واتجاه الشعر', 'الرسم الحر والتناسق', 'تصميم الحاجب وتناغم الوجه', 'تطبيق مكثف على بشرة صناعية'] },
          { title: 'اليوم ٠٢ — المستويات المتقدمة (٦–١٤)', items: ['تقدم المستويات ٦–١٤ الحرة', 'تظليل يدوي متقدم', 'مجموعات مايكروبليدنج + تظليل', 'جلسة تغذية راجعة وتصحيح'] },
          { title: 'اليوم ٠٣ — الموديل والحقيبة', items: ['التطبيق على موديل حقيقي', 'بروتوكول اللمسات والشفاء', 'توثيق حقيبة احترافية', 'شهادة مايكروبليدنج الحر'] },
        ],
      },
      ombre_powder: {
        title: 'أومبري باودر براوز والتمويه',
        duration: 'يومان',
        description: 'تقنيات تظليل مكثف وتصحيح أعمال PMU سابقة',
        subtitle: 'تظليل متقدم · تقنيات تصحيحية · كفر أب · موديل حقيقي',
        days: [
          { title: 'اليوم ٠١ — التظليل والنظرية', items: ['تقنية أومبري باودر معمقة', 'نظرية الألوان للتصحيح', 'تحليل أعمال PMU سابقة', 'تقنيات التمويه والكفر أب', 'تطبيق مكثف على بشرة صناعية'] },
          { title: 'اليوم ٠٢ — التطبيق والشهادة', items: ['تطبيق تصحيحي على موديل حقيقي', 'بروتوكول الشفاء للكفر أب', 'توثيق الحقيبة', 'شهادة أومبري باودر والتمويه'] },
        ],
      },
      ombre_lips: {
        title: 'أومبري ليبس أو فل ليبس',
        duration: 'يومان',
        description: 'تظليل ناعم أو تأثير أحمر الشفاه، نظرية الألوان والتطبيق العملي',
        subtitle: 'تظليل ناعم · تأثير أحمر الشفاه · نظرية الألوان · موديل حقيقي',
        days: [
          { title: 'اليوم ٠١ — النظرية والتقنية', items: ['تقنية أومبري ليبس (تظليل ناعم)', 'تقنية فل ليبس (تأثير أحمر الشفاه)', 'نظرية ألوان الشفاه', 'رسم وتصميم الشفاه', 'التطبيق على بشرة صناعية'] },
          { title: 'اليوم ٠٢ — التطبيق والشهادة', items: ['التطبيق على موديل حقيقي', 'إدارة اللون والتشبع', 'بروتوكول ما بعد علاج الشفاه', 'شهادة PMU الشفاه'] },
        ],
      },
      eyeliner: {
        title: 'آيلاينر تحت الرمش الكلاسيكي',
        duration: 'يوم واحد',
        description: 'برنامج مخصص للتصميم، حركات اليد وتقنيات التصبيغ',
        subtitle: 'تصميم آيلاينر · حركات دقيقة · تصبيغ · تطبيق',
        days: [
          { title: 'اليوم ٠١ — التقنية الكاملة', items: ['تصميم آيلاينر تحت الرمش', 'حركات اليد والوضعية', 'تقنيات التصبيغ', 'التطبيق على بشرة صناعية وموديل', 'شهادة آيلاينر PMU'] },
        ],
      },
      masterclass_brows: {
        title: 'هندسة الحواجب',
        duration: 'يوم واحد',
        description: 'رسم متقدم بالبوصلة والخيط لتناسق مثالي',
        subtitle: 'بوصلة وخيط · تناسق متقدم · هندسة الحواجب',
        days: [
          { title: 'ماستركلاس — هندسة الحواجب', items: ['رسم متقدم ببوصلة احترافية', 'تقنية الخيط لتناسق مثالي', 'تحليل شكل الوجه', 'إنشاء تصميم مخصص', 'شهادة مشاركة متخصصة'] },
        ],
      },
      masterclass_lashes: {
        title: 'إكستنشن رموش فوليوم',
        duration: 'يوم واحد',
        description: 'إتقان صنع المراوح (2D-6D) ورسم الرموش',
        subtitle: 'مراوح 2D-6D · رسم الرموش · فوليوم متقدم',
        days: [
          { title: 'ماستركلاس — إكستنشن رموش فوليوم', items: ['صنع مراوح من 2D إلى 6D', 'رسم رموش وتصميم مخصص', 'تقنيات تطبيق متقدمة', 'إدارة الوقت والإنتاجية', 'شهادة مشاركة متخصصة'] },
        ],
      },
      masterclass_lamination: {
        title: 'تغليف الرموش والحواجب',
        duration: 'يوم واحد',
        description: 'رفع متقدم وتغذية باستخدام نظام Kerafill',
        subtitle: 'رفع متقدم · نظام Kerafill · تغليف الرموش والحواجب',
        days: [
          { title: 'ماستركلاس — تغليف Kerafill', items: ['تقنية رفع الرموش المتقدمة', 'تغليف الحواجب الاحترافي', 'نظام Kerafill: التغذية والعناية', 'بروتوكولات السلامة والعناية اللاحقة', 'شهادة مشاركة متخصصة'] },
        ],
      },
    },
    treatments: {
      title: 'العلاجات',
      subtitle: 'خدمات جمالية عالية الجودة',
      microblading: 'مايكروبليدنج',
      lipBlush: 'أحمر الشفاه',
      plasmaPen: 'شد الجلد بقلم البلازما',
    },
    treatmentsPage: {
      heroTitle: 'فن الوجه',
      heroSubtitle: 'علاجات تجميلية فاخرة',
      cta: 'طلب استشارة خاصة',
      safety: 'متوافق مع REACH 2026 & ASL Varese',
      healedResults: 'نتائج بعد الشفاء',
      beforeLabel: 'قبل',
      afterLabel: 'بعد',
      brows: {
        name: 'الحواجب',
        poetic: 'هندسة النظرة',
        description: 'مايكروبليدنج، باودر براوز وتقنيات هجينة لحواجب منحوتة بشكل مثالي، مصممة حسب شكل وجهك الفريد.',
      },
      lips: {
        name: 'الشفاه',
        poetic: 'سيمفونية الألوان',
        description: 'ليب بلاش وتحديد الشفاه للحصول على لون طبيعي ومتناغم يعزز جمال ابتسامتك.',
      },
      eyes: {
        name: 'العيون',
        poetic: 'نظرة خالدة',
        description: 'آيلاينر دائم وتعزيز النظرة لأناقة دائمة تؤطر عينيك.',
      },
      paramedical: {
        name: 'الطبي التجميلي',
        poetic: 'ولادة جديدة',
        description: 'علاجات التمويه وإعادة البناء التجميلي لاستعادة الثقة والجمال الطبيعي.',
      },
    },
    gallery: {
      title: 'المعرض',
      subtitle: 'أعمالنا',
      healed: 'نتائج بعد الشفاء',
      beforeLabel: 'قبل',
      afterLabel: 'بعد',
    },
    contact: {
      title: 'اتصل بنا',
      location: 'فاريزي، إيطاليا',
      whatsapp: 'تواصل عبر واتساب',
    },
    footer: {
      academy: 'Belle Femme Academy - فاريزي',
      reach: 'متوافق مع REACH 2026',
      gdpr: 'خصوصية GDPR',
    },
    about: {
      label: 'Belle Femme Academy',
      heroTitle: 'التميز الأوروبي',
      bio1: 'بخلفية في التصميم الجرافيكي، جلبت منى نظرة فريدة للدقة والتكوين إلى عالم التجميل. كل ضربة محسوبة، كل منحنى مقصود — الفن يلتقي بالعلم على أرق لوحة.',
      bio2: 'بصفتها حكمة دولية في PMU ومدربة رئيسية معتمدة، قامت بتدريب مئات المحترفين عبر البحر الأبيض المتوسط والشرق الأوسط، مرتقية بمعايير الصناعة بمنهجيتها الصارمة.',
      bio3: 'اليوم، من استوديوها الرئيسي في فاريزي، تواصل صقل فنها وتدريب الجيل القادم من فناني التجميل، مازجة بين التقاليد المتوسطية والابتكار الأوروبي.',
      credentialsLabel: 'الإنجازات المهنية',
      credentialsTitle: 'المؤهلات والإتقان',
      credentials: {
        judge: 'حكمة دولية',
        judgeSub: 'حكمة رسمية في مسابقات PMU الدولية',
        trainer: 'مدربة رئيسية معتمدة',
        trainerSub: 'أكثر من ١٠ سنوات من التدريب المهني الدولي',
        design: 'خبيرة تصميم جرافيكي',
        designSub: 'دقة فنية من خلفية التصميم الجرافيكي',
        specialist: 'متخصصة في الجماليات المتوسطية والعربية',
        specialistSub: 'خبرة فريدة في الجماليات المتوسطية والعربية',
      },
      backToAcademy: 'العودة إلى الأكاديمية',
    },
    coursePage: {
      reach: 'متوافق مع REACH 2026',
      asl: 'متوافق مع ASL',
      backToAcademy: 'العودة إلى الأكاديمية',
      bookCourse: 'احجز هذه الدورة',
      secureYourSeat: 'احجز مقعدك',
      whatsapp: 'معلومات عبر واتساب',
      starterKitBadge: 'الطقم مشمول',
      address: 'الاستوديو الرئيسي — فاريزي، إيطاليا',
      vat: 'P.IVA 03794680128',
      certTitle: 'الشهادة والدعم',
      certText: 'شهادة رسمية من Belle Femme Academy ودعم مباشر عبر الإنترنت من المدربة الرئيسية منى شبار.',
    },
  },
};

export const isRTL = (lang: Language) => lang === 'ar';
