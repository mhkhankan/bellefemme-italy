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

  {
    id: 'pigment-restauro',
    slug: '/corso-correzione-pmu',
    featured: false,
    bf_name: 'PIGMENT RESTAURO',
    subtitle_it: 'Ombre Powder Brows · Cover Up · Camouflage',
    subtitle_en: 'Ombre Powder Brows · Cover Up · Camouflage',
    duration_it: '2 Giorni',
    duration_en: '2 Days',
    duration_days: 2,
    participants: 4,
    description_it: 'Il corso più richiesto da chi lavora già nel settore. In due giorni intensivi impari a leggere un PMU compromesso, a neutralizzare i viraggi cromatici e a progettare una copertura che nessuno riconosca come correzione. Protocolli AcademyS applicati su casi reali: grigio, arancio, rosso, migrazione. Non impari a correggere — impari a azzerare e ricostruire.',
    description_en: 'The most requested course for working professionals. In two intensive days you learn to read a compromised PMU, neutralise colour shifts, and design a cover-up that no one will recognise as a correction. AcademyS protocols applied to real cases: grey, orange, red, migration. You do not learn to correct — you learn to reset and rebuild.',
    images: ['/courses/pigment-restauro.jpg'],
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
    description_it: 'Il curriculum totale. Cinque giorni per padroneggiare l\'intera architettura della dermopigmentazione: sopracciglia, labbra ed eyeliner, dalla teoria del colore alla pratica su modella reale. Ogni giornata è strutturata come una residenza professionale — non un corso, un trasferimento di metodo. Per chi vuole costruire una carriera su basi solide, non su tutorial.',
    description_en: 'The complete curriculum. Five days to master the full architecture of dermopigmentation: brows, lips, and eyeliner, from colour theory to live model practice. Every day is structured as a professional residency — not a course, a method transfer. For those who want to build a career on solid foundations, not tutorials.',
    images: ['/courses/master-blueprint.jpg'],
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
    description_it: 'Tre giorni per portare il microblading al livello successivo. Il programma copre 14 livelli progressivi: direzione del pelo, pressione blade, pigmentazione e shading manuale su pelli reali. La metodologia PhiBrows applicata con liberta compositiva — perché il microblading di precisione non e una formula, e una competenza. Applicazione finale su modella reale inclusa.',
    description_en: 'Three days to take your microblading to the next level. The programme covers 14 progressive levels: hair direction, blade pressure, pigmentation, and manual shading on real skin. PhiBrows methodology applied with compositional freedom — because precision microblading is not a formula, it is a skill. Live model application included.',
    images: ['/courses/raw-stroke-master.jpg'],
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
        title_it: 'Giorno 02 — Livelli Avanzati (6-14)',
        title_en: 'Day 02 — Advanced Levels (6-14)',
        items_it: [
          'Progressione livelli 6-14 Freestyle',
          'Manual Shading avanzato',
          'Combinazioni microblading + shading',
          'Sessione di feedback e correzione',
        ],
        items_en: [
          'Freestyle progression levels 6-14',
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
    description_it: 'Labbra permanenti che sembrano naturali: questo e il risultato che il mercato chiede e che pochi sanno eseguire con coerenza. In due giorni affronti la teoria del colore applicata alle labbra, la neutralizzazione delle iperpigmentazioni, la simmetria anatomica e le tecniche Ombre Lips e Full Lips. Applicazione su modella reale nel secondo giorno. Esci con un metodo, non solo con una tecnica.',
    description_en: 'Permanent lips that look natural: this is what the market demands and what few can deliver consistently. Over two days you cover colour theory applied to lips, dark lip neutralisation, anatomical symmetry, and both Ombre Lips and Full Lips techniques. Live model application on day two. You leave with a method, not just a technique.',
    images: ['/courses/nude-lip-atelier.jpg'],
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
    description_it: 'Una giornata dedicata interamente all\'eyeliner permanente infraciliare — il servizio piu tecnico e meno insegnato della dermopigmentazione. Il programma copre design della linea, controllo della mano, scelta del pigmento e gestione delle pelli difficili. Pratica su modella reale inclusa.',
    description_en: 'One full day dedicated entirely to permanent infraciliary eyeliner — the most technical and least taught service in dermopigmentation. The programme covers line design, hand control, pigment selection, and managing difficult skin types. Live model practice included.',
    images: ['/courses/lash-line-precision.jpg'],
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
    description_it: 'Prima del pigmento, c\'e la mappa. Il Brow Blueprint e una masterclass di architettura sopraccigliare pura: compasso, filo e Sezione Aurea applicati al volto reale. Impari a leggere la struttura ossea, la trazione muscolare e la geometria facciale per progettare un\'arcata che rimanga armoniosa in ogni espressione.',
    description_en: 'Before pigment, there is the map. The Brow Blueprint is a pure brow architecture masterclass: compass, thread, and the Golden Ratio applied to the real face. You learn to read bone structure, muscular pull, and facial geometry to design an arch that remains harmonious in every expression.',
    images: ['/courses/brow-blueprint.jpg'],
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

  {
    id: 'volume-lash-design',
    slug: '/masterclass-extension-ciglia',
    featured: false,
    bf_name: 'VOLUME LASH DESIGN',
    subtitle_it: 'Extension Ciglia Volume 2D-6D',
    subtitle_en: 'Volume Eyelash Extension 2D-6D',
    duration_it: '1 Giorno',
    duration_en: '1 Day',
    duration_days: 1,
    participants: 4,
    description_it: 'La masterclass per chi vuole padroneggiare le extension ciglia volume con precisione e velocita. Il programma copre la costruzione di ventagli 2D-6D, il lash mapping personalizzato per forma dell\'occhio e geometria facciale, e le tecniche di applicazione avanzata.',
    description_en: 'The masterclass for professionals who want to master volume lash extensions with precision and speed. The programme covers 2D-6D fan construction, personalised lash mapping for eye shape and facial geometry, and advanced application techniques.',
    images: ['/courses/volume-lash-design.jpg'],
    days: [
      {
        title_it: 'Masterclass — Volume Lash Design',
        title_en: 'Masterclass — Volume Lash Design',
        items_it: [
          'Creazione ventagli da 2D a 6D',
          'Lash mapping e design personalizzato',
          'Tecniche di applicazione avanzata',
          'Gestione del timing e produttivita',
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
    description_it: 'Il trattamento piu richiesto nei centri estetici d\'elite, insegnato con la precisione di Belle Femme. In una giornata intensiva padroneggi la laminazione ciglia e sopracciglia con sistema professionale: lifting avanzato, nutrimento con cheratina e acido ialuronico, protocolli di sicurezza e aftercare.',
    description_en: 'The most requested treatment in elite aesthetic centres, taught with Belle Femme precision. In one intensive day you master lash and brow lamination with a professional system: advanced lifting, keratin and hyaluronic acid nourishment, safety protocols and aftercare.',
    images: ['/courses/velvet-lift.jpg'],
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
  COURSES.filter((c) => !c.featured);

export const getCourseBySlug = (slug: string): Course | undefined =>
  COURSES.find((c) => c.slug === slug);

export const getCourseById = (id: string): Course | undefined =>
  COURSES.find((c) => c.id === id);
