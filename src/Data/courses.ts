/**
 * BELLE FEMME ACADEMY — COURSE DATA FILE
 * ─────────────────────────────────────────────────────────────────
 * Location in repo: src/data/courses.ts
 *
 * HOW TO EDIT:
 * Edit this file directly in GitHub (or any text editor).
 * Push to main — changes deploy automatically via Lovable/Vercel.
 * You do NOT need to touch Lovable to update course content.
 *
 * WHAT YOU CAN SAFELY EDIT:
 * - description_it / description_en → course descriptions (add when ready)
 * - days → day-by-day syllabus items
 * - images → add real photo paths when Art Director delivers assets
 * - participants → update max participant count if it changes
 *
 * DO NOT EDIT:
 * - id → used for routing, Supabase, and URL slugs
 * - slug → the URL of the dedicated course page
 * - featured → only one course should be true at a time
 *
 * NO PRICING ANYWHERE IN THIS FILE — BY DESIGN
 * ─────────────────────────────────────────────────────────────────
 */

export interface CourseDay {
  title_it: string;
  title_en: string;
  items_it: string[];
  items_en: string[];
}

export interface Course {
  id: string;
  slug: string;
  featured: boolean;
  bf_name: string;
  subtitle_it: string;
  subtitle_en: string;
  duration_it: string;
  duration_en: string;
  duration_days: number;
  participants: number;
  description_it: string;
  description_en: string;
  images: string[];
  days: CourseDay[];
  certificate_it: string;
  certificate_en: string;
}

export const COURSES: Course[] = [

  // ─────────────────────────────────────────────────────────────
  // FEATURED — PIGMENT RESTAURO
  // Ombre Powder Brows · Cover Up · Camouflage
  // ─────────────────────────────────────────────────────────────
  {
    id: 'pigment-restauro',
    slug: '/corso-correzione-pmu',
    featured: true,
    bf_name: 'PIGMENT RESTAURO',
    subtitle_it: 'Ombre Powder Brows · Cover Up · Camouflage',
    subtitle_en: 'Ombre Powder Brows · Cover Up · Camouflage',
    duration_it: '2 Giorni',
    duration_en: '2 Days',
    duration_days: 2,
    participants: 4,
    description_it: '',
    description_en: '',
    images: [
      // Add real image paths here when Art Director delivers
      // Example: '/courses/pigment-restauro-01.jpg'
    ],
    days: [
      {
        title_it: 'Giorno 01 — Shading & Teoria',
        title_en: 'Day 01 — Shading & Theory',
        items_it: [
          'Tecnica Ombre Powder Brows approfondita',
          'Teoria del colore per correzione e neutralizzazione',
          'Analisi e diagnosi di lavori PMU precedenti',
          'Tecniche di camouflage e cover up',
          'Pratica intensiva su pelle sintetica',
        ],
        items_en: [
          'In-depth Ombre Powder Brows technique',
          'Colour theory for correction and neutralisation',
          'Analysis and diagnosis of previous PMU work',
          'Camouflage and cover up techniques',
          'Intensive practice on synthetic skin',
        ],
      },
      {
        title_it: 'Giorno 02 — Applicazione & Certificazione',
        title_en: 'Day 02 — Application & Certification',
        items_it: [
          'Applicazione correttiva su modella reale',
          'Protocollo di guarigione per cover up',
          'Documentazione portfolio professionale',
          'Certificazione Pigment Restauro — Belle Femme Academy',
        ],
        items_en: [
          'Corrective application on live model',
          'Healing protocol for cover up work',
          'Professional portfolio documentation',
          'Pigment Restauro Certification — Belle Femme Academy',
        ],
      },
    ],
    certificate_it: 'Certificato Ufficiale Belle Femme Academy + 3 mesi di supporto a distanza',
    certificate_en: 'Official Belle Femme Academy Certificate + 3 months remote support',
  },

  // ─────────────────────────────────────────────────────────────
  // MASTER BLUEPRINT — PMU Completo 5 giorni
  // ─────────────────────────────────────────────────────────────
  {
    id: 'master-blueprint',
    slug: '/corso-pmu-completo',
    featured: false,
    bf_name: 'MASTER BLUEPRINT',
    subtitle_it: 'Corso Completo di Dermopigmentazione',
    subtitle_en: 'Complete Dermopigmentation Course',
    duration_it: '5 Giorni',
    duration_en: '5 Days',
    duration_days: 5,
    participants: 4,
    description_it: '',
    description_en: '',
    images: [],
    days: [
      {
        title_it: 'Giorno 01 — Fondamenti & Teoria',
        title_en: 'Day 01 — Foundations & Theory',
        items_it: [
          'Teoria del colore e pigmentologia',
          'Anatomia del viso e mappatura',
          'Igiene e sicurezza',
          'Tecniche di disegno e simmetria',
          'Introduzione Ombre Powder Brows',
        ],
        items_en: [
          'Colour theory and pigmentology',
          'Facial anatomy and mapping',
          'Hygiene and safety',
          'Drawing techniques and symmetry',
          'Introduction to Ombre Powder Brows',
        ],
      },
      {
        title_it: 'Giorno 02 — Skin Focus & Cover Up',
        title_en: 'Day 02 — Skin Focus & Cover Up',
        items_it: [
          'Formazione sulla pelle con Specialista Medico',
          'Tecniche di Cover Up e Camouflage',
          'Pratica su pelle sintetica',
          'Correzione e feedback personale',
        ],
        items_en: [
          'Skin-focused training with Medical Specialist',
          'Cover Up and Camouflage techniques',
          'Practice on synthetic skin',
          'Personal correction and feedback',
        ],
      },
      {
        title_it: 'Giorno 03 — Labbra & Eyeliner',
        title_en: 'Day 03 — Lips & Eyeliner',
        items_it: [
          'Tecnica Ombre Lips e Full Lips',
          'Eyeliner infraciliare classico',
          'Gestione del cliente e consulenza',
          'Documentazione fotografica',
        ],
        items_en: [
          'Ombre Lips and Full Lips technique',
          'Classic infraciliary eyeliner',
          'Client management and consultation',
          'Photographic documentation',
        ],
      },
      {
        title_it: 'Giorno 04 — Live Demo & Modella',
        title_en: 'Day 04 — Live Demo & Model',
        items_it: [
          'Demo dal vivo della Master Trainer',
          'Applicazione su prima modella reale',
          'Gestione del comfort e del dolore',
          'Protocollo post-trattamento',
        ],
        items_en: [
          'Live demonstration by Master Trainer',
          'Application on first live model',
          'Comfort and pain management',
          'Post-treatment protocol',
        ],
      },
      {
        title_it: 'Giorno 05 — Modella & Certificazione',
        title_en: 'Day 05 — Model & Certification',
        items_it: [
          'Seconda sessione su modella reale',
          'Revisione e rifinitura avanzata',
          'Cerimonia di Certificazione Belle Femme Academy',
          'Portfolio e supporto post-corso',
        ],
        items_en: [
          'Second live model session',
          'Advanced review and refinement',
          'Belle Femme Academy Certification Ceremony',
          'Portfolio and post-course support',
        ],
      },
    ],
    certificate_it: 'Certificato Ufficiale Belle Femme Academy + 3 mesi di supporto a distanza',
    certificate_en: 'Official Belle Femme Academy Certificate + 3 months remote support',
  },

  // ─────────────────────────────────────────────────────────────
  // RAW STROKE MASTER — Microblading Freestyle 3 giorni
  // ─────────────────────────────────────────────────────────────
  {
    id: 'raw-stroke-master',
    slug: '/corso-microblading',
    featured: false,
    bf_name: 'RAW STROKE MASTER',
    subtitle_it: 'Microblading Freestyle & Shading Manuale',
    subtitle_en: 'Microblading Freestyle & Manual Shading',
    duration_it: '3 Giorni',
    duration_en: '3 Days',
    duration_days: 3,
    participants: 4,
    description_it: '',
    description_en: '',
    images: [],
    days: [
      {
        title_it: 'Giorno 01 — Hair-stroke & Fondamenti',
        title_en: 'Day 01 — Hair-stroke & Foundations',
        items_it: [
          'Tecnica hair-stroke dal livello 1 al 5',
          'Pattern naturali e direzione del pelo',
          'Mappatura e simmetria freestyle',
          'Brow design e armonia del viso',
          'Pratica intensiva su pelle sintetica',
        ],
        items_en: [
          'Hair-stroke technique from level 1 to 5',
          'Natural patterns and hair direction',
          'Freestyle mapping and symmetry',
          'Brow design and facial harmony',
          'Intensive practice on synthetic skin',
        ],
      },
      {
        title_it: 'Giorno 02 — Livelli Avanzati (6–14)',
        title_en: 'Day 02 — Advanced Levels (6–14)',
        items_it: [
          'Progressione livelli 6–14 Freestyle',
          'Manual Shading avanzato',
          'Combinazioni microblading + shading',
          'Sessione di feedback e correzione',
        ],
        items_en: [
          'Freestyle progression levels 6–14',
          'Advanced Manual Shading',
          'Microblading + shading combinations',
          'Feedback and correction session',
        ],
      },
      {
        title_it: 'Giorno 03 — Modella & Portfolio',
        title_en: 'Day 03 — Model & Portfolio',
        items_it: [
          'Applicazione su modella reale',
          'Protocollo touch-up e guarigione',
          'Documentazione portfolio professionale',
          'Certificazione Raw Stroke Master — Belle Femme Academy',
        ],
        items_en: [
          'Application on live model',
          'Touch-up and healing protocol',
          'Professional portfolio documentation',
          'Raw Stroke Master Certification — Belle Femme Academy',
        ],
      },
    ],
    certificate_it: 'Certificato Ufficiale Belle Femme Academy + 3 mesi di supporto a distanza',
    certificate_en: 'Official Belle Femme Academy Certificate + 3 months remote support',
  },

  // ─────────────────────────────────────────────────────────────
  // NUDE LIP ATELIER — Ombre Lips / Full Lips 2 giorni
  // ─────────────────────────────────────────────────────────────
  {
    id: 'nude-lip-atelier',
    slug: '/corso-ombre-lips',
    featured: false,
    bf_name: 'NUDE LIP ATELIER',
    subtitle_it: 'Labbra Permanenti — Ombre & Full Lips',
    subtitle_en: 'Permanent Lips — Ombre & Full Lips',
    duration_it: '2 Giorni',
    duration_en: '2 Days',
    duration_days: 2,
    participants: 4,
    description_it: '',
    description_en: '',
    images: [],
    days: [
      {
        title_it: 'Giorno 01 — Teoria & Tecnica',
        title_en: 'Day 01 — Theory & Technique',
        items_it: [
          'Tecnica Ombre Lips (soft shading)',
          'Tecnica Full Lips (effetto rossetto)',
          'Teoria del colore per labbra',
          'Mappatura e design delle labbra',
          'Pratica su pelle sintetica',
        ],
        items_en: [
          'Ombre Lips technique (soft shading)',
          'Full Lips technique (lipstick effect)',
          'Colour theory for lips',
          'Lip mapping and design',
          'Practice on synthetic skin',
        ],
      },
      {
        title_it: 'Giorno 02 — Applicazione & Certificazione',
        title_en: 'Day 02 — Application & Certification',
        items_it: [
          'Applicazione su modella reale',
          'Gestione del colore e saturazione',
          'Protocollo post-trattamento labbra',
          'Certificazione Nude Lip Atelier — Belle Femme Academy',
        ],
        items_en: [
          'Application on live model',
          'Colour and saturation management',
          'Lips post-treatment protocol',
          'Nude Lip Atelier Certification — Belle Femme Academy',
        ],
      },
    ],
    certificate_it: 'Certificato Ufficiale Belle Femme Academy + 3 mesi di supporto a distanza',
    certificate_en: 'Official Belle Femme Academy Certificate + 3 months remote support',
  },

  // ─────────────────────────────────────────────────────────────
  // LASH LINE PRECISION — Eyeliner Infraciliare 1 giorno
  // ─────────────────────────────────────────────────────────────
  {
    id: 'lash-line-precision',
    slug: '/corso-eyeliner-permanente',
    featured: false,
    bf_name: 'LASH LINE PRECISION',
    subtitle_it: 'Eyeliner Permanente Infraciliare Classico',
    subtitle_en: 'Classic Infraciliary Permanent Eyeliner',
    duration_it: '1 Giorno',
    duration_en: '1 Day',
    duration_days: 1,
    participants: 4,
    description_it: '',
    description_en: '',
    images: [],
    days: [
      {
        title_it: 'Giorno 01 — Tecnica Completa',
        title_en: 'Day 01 — Complete Technique',
        items_it: [
          'Design dell\'eyeliner infraciliare',
          'Movimenti della mano e postura',
          'Tecniche di pigmentazione',
          'Pratica su pelle sintetica e modella',
          'Certificazione Lash Line Precision — Belle Femme Academy',
        ],
        items_en: [
          'Infraciliary eyeliner design',
          'Hand movements and posture',
          'Pigmentation techniques',
          'Practice on synthetic skin and live model',
          'Lash Line Precision Certification — Belle Femme Academy',
        ],
      },
    ],
    certificate_it: 'Certificato Ufficiale Belle Femme Academy + 3 mesi di supporto a distanza',
    certificate_en: 'Official Belle Femme Academy Certificate + 3 months remote support',
  },

  // ─────────────────────────────────────────────────────────────
  // BROW BLUEPRINT — Architettura Sopraccigliare 1 giorno
  // ─────────────────────────────────────────────────────────────
  {
    id: 'brow-blueprint',
    slug: '/masterclass-architettura-sopracciglia',
    featured: false,
    bf_name: 'BROW BLUEPRINT',
    subtitle_it: 'Architettura Sopraccigliare — Compasso & Filo',
    subtitle_en: 'Brow Architecture — Compass & Thread',
    duration_it: '1 Giorno',
    duration_en: '1 Day',
    duration_days: 1,
    participants: 4,
    description_it: '',
    description_en: '',
    images: [],
    days: [
      {
        title_it: 'Masterclass — Architettura del Sopracciglio',
        title_en: 'Masterclass — Brow Architecture',
        items_it: [
          'Mappatura avanzata con compasso professionale',
          'Tecnica del filo per simmetria perfetta',
          'Analisi morfologica del viso',
          'Creazione del design personalizzato',
          'Pratica su modella reale',
          'Attestato di partecipazione — Belle Femme Academy',
        ],
        items_en: [
          'Advanced mapping with professional compass',
          'Thread technique for perfect symmetry',
          'Facial morphological analysis',
          'Creation of personalised design',
          'Practice on live model',
          'Attendance certificate — Belle Femme Academy',
        ],
      },
    ],
    certificate_it: 'Attestato di Partecipazione Belle Femme Academy + 3 mesi di supporto a distanza',
    certificate_en: 'Belle Femme Academy Attendance Certificate + 3 months remote support',
  },

  // ─────────────────────────────────────────────────────────────
  // VOLUME LASH DESIGN — Extension Ciglia Volume 1 giorno
  // ─────────────────────────────────────────────────────────────
  {
    id: 'volume-lash-design',
    slug: '/masterclass-extension-ciglia',
    featured: false,
    bf_name: 'VOLUME LASH DESIGN',
    subtitle_it: 'Extension Ciglia Volume 2D–6D',
    subtitle_en: 'Volume Eyelash Extension 2D–6D',
    duration_it: '1 Giorno',
    duration_en: '1 Day',
    duration_days: 1,
    participants: 4,
    description_it: '',
    description_en: '',
    images: [],
    days: [
      {
        title_it: 'Masterclass — Volume Lash Design',
        title_en: 'Masterclass — Volume Lash Design',
        items_it: [
          'Creazione ventagli da 2D a 6D',
          'Lash mapping e design personalizzato',
          'Tecniche di applicazione avanzata',
          'Gestione del timing e produttività',
          'Pratica su modella reale',
          'Attestato di partecipazione — Belle Femme Academy',
        ],
        items_en: [
          'Fan creation from 2D to 6D',
          'Lash mapping and personalised design',
          'Advanced application techniques',
          'Timing management and productivity',
          'Practice on live model',
          'Attendance certificate — Belle Femme Academy',
        ],
      },
    ],
    certificate_it: 'Attestato di Partecipazione Belle Femme Academy + 3 mesi di supporto a distanza',
    certificate_en: 'Belle Femme Academy Attendance Certificate + 3 months remote support',
  },

  // ─────────────────────────────────────────────────────────────
  // VELVET LIFT — Laminazione Ciglia & Sopracciglia 1 giorno
  // ─────────────────────────────────────────────────────────────
  {
    id: 'velvet-lift',
    slug: '/masterclass-laminazione-ciglia',
    featured: false,
    bf_name: 'VELVET LIFT',
    subtitle_it: 'Laminazione Ciglia & Sopracciglia',
    subtitle_en: 'Lash and Brow Lamination',
    duration_it: '1 Giorno',
    duration_en: '1 Day',
    duration_days: 1,
    participants: 4,
    description_it: '',
    description_en: '',
    images: [],
    days: [
      {
        title_it: 'Masterclass — Velvet Lift',
        title_en: 'Masterclass — Velvet Lift',
        items_it: [
          'Tecnica di lifting ciglia avanzata',
          'Laminazione sopracciglia professionale',
          'Nutrimento e cura con sistema professionale',
          'Protocolli di sicurezza e aftercare',
          'Pratica su modella reale',
          'Attestato di partecipazione — Belle Femme Academy',
        ],
        items_en: [
          'Advanced lash lifting technique',
          'Professional brow lamination',
          'Nourishment and care with professional system',
          'Safety protocols and aftercare',
          'Practice on live model',
          'Attendance certificate — Belle Femme Academy',
        ],
      },
    ],
    certificate_it: 'Attestato di Partecipazione Belle Femme Academy + 3 mesi di supporto a distanza',
    certificate_en: 'Belle Femme Academy Attendance Certificate + 3 months remote support',
  },

];

// ─────────────────────────────────────────────────────────────
// HELPERS — used by components, do not edit
// ─────────────────────────────────────────────────────────────

export const getFeaturedCourse = (): Course =>
  COURSES.find((c) => c.featured) ?? COURSES[0];

export const getCatalogCourses = (): Course[] =>
  COURSES; // all 8 shown in catalogue including featured

export const getCourseBySlug = (slug: string): Course | undefined =>
  COURSES.find((c) => c.slug === slug);

export const getCourseById = (id: string): Course | undefined =>
  COURSES.find((c) => c.id === id);
