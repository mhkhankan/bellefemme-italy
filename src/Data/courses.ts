/**
 * BELLE FEMME ACADEMY — COURSE DATA FILE
 * ─────────────────────────────────────────────────────────────────
 * Location in repo: src/Data/courses.ts
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
  price_it?: string;
  price_en?: string;
  tagline_it?: string;
  tagline_en?: string;
  learn_sections_it?: { title: string; items: string[] }[];
  learn_sections_en?: { title: string; items: string[] }[];
  programme_it?: { time: string; title: string; body: string }[];
  programme_en?: { time: string; title: string; body: string }[];
  differentiator_it?: { title: string; stats: { value: string; label: string }[]; body: string };
  differentiator_en?: { title: string; stats: { value: string; label: string }[]; body: string };
  comparison_it?: { rows: { label: string; market: string; course: string }[] };
  details_it?: { key: string; value: string }[];
  details_en?: { key: string; value: string }[];
  sigillo_digitale?: boolean;
  after_course_it?: { label: string; desc: string }[];
  after_course_en?: { label: string; desc: string }[];
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
    description_it: 'Correggere un PMU sbagliato non vuol dire coprirlo. Vuol dire leggerlo, neutralizzarlo, ricostruirlo da capo — e farlo in modo che nessuno riconosca la correzione. Due giorni intensivi su casi reali: grigio virato, arancio residuo, rosso, migrazione. Non correggi. Azzeri e ricostruisci.',
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
    description_it: 'Il curriculum totale. Cinque giorni di residenza professionale per padroneggiare l\'architettura della dermopigmentazione: sopracciglia, labbra, eyeliner. Dalla teoria del colore alla modella reale. Non un corso — un trasferimento di metodo. Carriera su basi solide, non tutorial.',
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
          'Demo dal vivo della Craft Master',
          'Applicazione su prima modella reale',
          'Gestione del comfort e del dolore',
          'Protocollo post-trattamento',
        ],
        items_en: [
          'Live demonstration by Craft Master',
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
    description_it: 'Il microblading di precisione non è una formula — è una competenza che si costruisce colpo dopo colpo. Tre giorni in aula sui livelli progressivi: direzione del pelo, pressione blade, shading manuale. Si esce con modella reale eseguita e manualità corretta in tempo reale.',
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
    description_it: 'Labbra permanenti che sembrano naturali: è il risultato che il mercato cerca e che pochi consegnano con coerenza. Due giorni sulla neutralizzazione cromatica, la simmetria anatomica, Ombre Lips e Full Lips. Metodo prima della tecnica. Coerenza prima della velocità.',
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
    description_it: 'L\'eyeliner infraciliare è il servizio PMU più tecnico — e quello meno insegnato. Una giornata dedicata a chi vuole aggiungere al listino una voce ad alta marginalità: design della linea, controllo del polso, pigmento, pelli difficili. Pratica su modella reale.',
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
    description_it: 'Prima del pigmento, c\'è la mappa. Il Brow Blueprint è una masterclass di architettura pura: compasso, filo, Sezione Aurea applicati al volto reale. Struttura ossea, trazione muscolare, geometria del viso. Un\'arcata armoniosa in ogni espressione — qualunque tecnica venga dopo.',
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
    description_it: 'Il refill rapido ha una causa misurabile: la pressione di applicazione, non il collante. Volume che sembra naturale, non artificioso: una giornata su ventagli 2D-6D, lash mapping per forma dell\'occhio, tecniche di applicazione misurabili. Ciglia che durano il ciclo completo.',
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
    participants: 2,
    description_it: 'La laminazione ciglia fidelizza più di qualsiasi altro servizio non invasivo — se la cliente torna ogni sei settimane. Il metodo Belle Femme non ripete una sequenza: legge densità, direzione, resistenza di ogni ciglio. Max 2 corsiste in aula. Ogni occhio diverso. Ogni volta.',
    description_en: "Two students. One teacher. Nine hours to learn not to repeat a lamination — but to read every eye and adapt the treatment. Mouna Chabbar transfers years of specialised practice on the periocular area: density, direction, resistance. Every client different.",
    images: ['/courses/velvet-lift.jpg'],
    days: [
      {
        title_it: 'Masterclass — Velvet Lift',
        title_en: 'Masterclass — Velvet Lift',
        items_it: [
          "Analisi della struttura ciliare individuale: densità, direzione, resistenza, controindicazioni",
          "Permanente incurvante con gestione dei tempi di posa per ogni tipologia di ciglio",
          "Colorazione ad olio senza ammoniaca",
          "Applicazione del siero volumizzante a micro-proteine",
          "Liftaggio direzionale per ciglia ribelli, dritte o disordinate",
          "Architettura del sopracciglio: proporzioni auree, simmetria con compasso e filo",
          "Laminazione direzionale sopracciglia: riposizionamento nella direzione corretta",
          "Consulenza pre-trattamento, consenso informato, istruzioni post-trattamento",
          "Come posizionare e vendere il servizio nel proprio listino",
        ],
        items_en: [
          "Individual lash structure analysis: density, direction, resistance, contraindications",
          "Lifting perm with processing time management for each lash type",
          "Ammonia-free oil-based tinting",
          "Micro-protein volumising serum application",
          "Directional lifting for stubborn, straight or unruly lashes",
          "Brow architecture: golden proportions, symmetry with compass and thread",
          "Directional brow lamination: repositioning in the correct direction",
          "Pre-treatment consultation, informed consent, post-treatment instructions",
          "How to position and sell the service in your price list",
        ],
      },
    ],
    certificate_it: "Attestato di Frequenza Belle Femme Accademia con Sigillo Digitale QR verificabile. Rilasciato al termine del corso. Perfezionamento 2 ore incluso post-corso (in presenza o online). Assistenza WhatsApp senza limiti di tempo.",
    certificate_en: "Belle Femme Accademia Certificate of Attendance with verifiable Digital Seal QR. Issued at course end. 2-hour perfezionamento session included post-course (in person or online). Unlimited WhatsApp support.",
    price_it: "€450 a persona",
    price_en: "€450 per person",
    tagline_it: "Due corsiste · Non quattro, non dieci · Due",
    tagline_en: "Two students · Not four, not ten · Two",
    learn_sections_it: [
      { title: "Ciglia", items: ["Analisi della struttura ciliare: densità, direzione, resistenza, controindicazioni","Permanente incurvante con gestione dei tempi di posa per ogni tipologia","Colorazione ad olio senza ammoniaca","Applicazione siero volumizzante a micro-proteine","Liftaggio direzionale per ciglia ribelli, dritte o disordinate"] },
      { title: "Sopracciglia", items: ["Architettura del sopracciglio: proporzioni auree, simmetria con compasso e filo","Laminazione direzionale: riposizionamento nella direzione corretta","Ristrutturazione e colorazione per volume e definizione","Correzione visiva di asimmetrie naturali"] },
      { title: "Gestione professionale", items: ["Consulenza pre-trattamento e consenso informato","Istruzioni post-trattamento, tempistiche di mantenimento, rebooking","Come posizionare e vendere il servizio nel tuo listino"] },
    ],
    learn_sections_en: [
      { title: "Lashes", items: ["Individual lash structure analysis: density, direction, resistance, contraindications","Lifting perm with processing time management for each lash type","Ammonia-free oil-based tinting","Micro-protein volumising serum application","Directional lifting for stubborn, straight or unruly lashes"] },
      { title: "Brows", items: ["Brow architecture: golden proportions, symmetry with compass and thread","Directional brow lamination: repositioning in the correct direction","Restructuring and tinting for volume and definition","Visual correction of natural asymmetries"] },
      { title: "Professional management", items: ["Pre-treatment consultation and informed consent","Post-treatment instructions, maintenance timing, rebooking","How to position and sell the service in your price list"] },
    ],
    programme_it: [
      { time: "09:30 – 12:30", title: "Teoria e dimostrazione", body: "Anatomia di ciglia e sopracciglia. Comprensione di ogni prodotto nella sequenza applicativa. Architettura sopracciglia con compasso e filo. Analisi tipologie di occhio e ciglio. Dimostrazione dal vivo della docente." },
      { time: "12:30 – 13:00", title: "Pausa", body: "" },
      { time: "13:00 – 18:00", title: "Pratica su modella", body: "Progettazione sopracciglia sulla modella. Esecuzione completa laminazione ciglia e sopracciglia sotto guida individuale. Correzione in tempo reale di manualità, postura e tempi. Post-trattamento e simulazione consulenza cliente." },
    ],
    programme_en: [
      { time: "09:30 – 12:30", title: "Theory and demonstration", body: "Anatomy of lashes and brows. Understanding each product in the application sequence. Brow architecture with compass and thread. Eye and lash type analysis. Live demonstration by the teacher." },
      { time: "12:30 – 13:00", title: "Break", body: "" },
      { time: "13:00 – 18:00", title: "Practice on model", body: "Brow design on the model. Full lash and brow lamination under individual guidance. Real-time correction of technique, posture and timing. Post-treatment and client consultation simulation." },
    ],
    differentiator_it: { title: "Perché 2 Corsiste", stats: [ { value: "30", label: "min/ora di attenzione individuale" }, { value: "6", label: "min/ora in un corso standard da 10" } ], body: "Mouna osserva la tua presa sulla pinzetta, la pressione della tua mano sul pad, l'angolo del tuo polso durante il lifting. Corregge in tempo reale quello che un video o un corso affollato non possono correggere: la manualità fine." },
    differentiator_en: { title: "Why 2 Students", stats: [ { value: "30", label: "min/hour of individual attention" }, { value: "6", label: "min/hour in a standard class of 10" } ], body: "Mouna observes your tweezer grip, the pressure of your hand on the pad, the angle of your wrist during lifting. She corrects in real time what a video or a crowded course cannot correct: fine motor skill." },
    comparison_it: { rows: [ { label: "Corsiste/sessione", market: "5–15", course: "2" }, { label: "Durata", market: "5–7 ore", course: "9 ore" }, { label: "Ciglia + Sopracciglia", market: "Separati", course: "Integrato" }, { label: "Pratica supervisionata", market: "~30 min", course: "~2,5 ore" }, { label: "Perfezionamento", market: "Non incluso", course: "2h gratis" }, { label: "Assistenza post-corso", market: "Assente", course: "Illimitata" }, { label: "Sigillo Digitale QR", market: "No", course: "Sì" } ] },
    details_it: [ { key: "Durata", value: "1 giornata · 09:30–18:00" }, { key: "Partecipanti", value: "Max 2" }, { key: "Sede", value: "Varese" }, { key: "Quota", value: "€450 a persona" }, { key: "Modella", value: "Ogni corsista porta la propria" }, { key: "Materiale", value: "Dispensa" }, { key: "Perfezionamento", value: "2 ore gratuite · in presenza o online" }, { key: "Assistenza", value: "WhatsApp · senza limiti di tempo" }, { key: "Attestato", value: "Belle Femme · Sigillo Digitale" }, { key: "Livello", value: "Principianti e operatrici" } ],
    details_en: [ { key: "Duration", value: "1 day · 09:30–18:00" }, { key: "Participants", value: "Max 2" }, { key: "Location", value: "Varese" }, { key: "Fee", value: "€450 per person" }, { key: "Model", value: "Each student brings their own" }, { key: "Materials", value: "Course handout" }, { key: "Perfezionamento", value: "2 free hours · in person or online" }, { key: "Support", value: "WhatsApp · no time limit" }, { key: "Certificate", value: "Belle Femme · Digital Seal" }, { key: "Level", value: "Beginners and practitioners" } ],
    sigillo_digitale: true,
    after_course_it: [ { label: "Perfezionamento 2h incluso", desc: "Dopo 3–5 applicazioni in autonomia torni per 2 ore di pratica guidata one-to-one. In presenza o videochiamata." }, { label: "Assistenza senza scadenza", desc: "Mouna resta raggiungibile via WhatsApp per qualsiasi dubbio tecnico. Non per 30 giorni. Sempre." }, { label: "Sigillo Digitale · Attestato Belle Femme", desc: "Rilasciato al termine del corso con QR verificabile — credenziale nominale, fonte Belle Femme Accademia." } ],
    after_course_en: [ { label: "2h perfezionamento included", desc: "After 3–5 independent applications you return for 2 hours of guided one-to-one practice. In person or video call." }, { label: "Support without expiry", desc: "Mouna remains reachable via WhatsApp for any technical question. Not for 30 days. Always." }, { label: "Digital Seal · Belle Femme Certificate", desc: "Issued at course end with verifiable QR — nominal credential, source Belle Femme Accademia." } ],
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
