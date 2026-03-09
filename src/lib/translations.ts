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
      pmu: {
        title: 'PMU Completo',
        duration: '5 Giorni',
        description: 'Corso completo con collaborazione di Specialisti Medici',
        subtitle: 'Teoria, Mapping, Pigmentologia · Live Demo · Pratica su Modella',
        days: [
          { title: 'Giorno 01 — Fondamenti & Teoria', items: ['Teoria del colore e pigmentologia', 'Anatomia del viso e mappatura', 'Igiene e sicurezza REACH 2026', 'Tecniche di disegno e simmetria'] },
          { title: 'Giorno 02 — Mapping & Tecnica', items: ['Mapping avanzato del sopracciglio', 'Introduzione all\'ago e movimento', 'Pratica su pelle artificiale', 'Correzione e feedback personale'] },
          { title: 'Giorno 03 — Applicazione & Stile', items: ['Stile Ombré e Powder Brows', 'Combinazioni di tecniche miste', 'Gestione del cliente e consulenza', 'Documentazione fotografica'] },
          { title: 'Giorno 04 — Live Demo & Modella', items: ['Demo dal vivo della Master Trainer', 'Applicazione su prima modella reale', 'Gestione del dolore e comfort', 'Protocollo post-trattamento'] },
          { title: 'Giorno 05 — Gala & Certificazione', items: ['Seconda sessione su modella', 'Revisione e rifinitura avanzata', 'Cerimonia di Certificazione Internazionale', 'Gala di chiusura con portfolio'] },
        ],
        starterKit: {
          title: 'Kit Professionale Incluso',
          items: ['Pigmenti certificati REACH 2026 (set completo)', 'Aghi e cartucce professionali', 'Dermografo digitale di precisione', 'Manuale tecnico esclusivo Belle Femme', 'Certificato Internazionale + Attestato ASL'],
        },
      },
      microblading: {
        title: 'Microblading Freestyle',
        duration: '3 Giorni',
        description: 'Progressione a 14 Livelli',
        subtitle: 'Hair-stroke patterns · 14 Livelli · Shading Avanzato · Pratica su Modella',
        days: [
          { title: 'Giorno 01 — Hair-stroke & Fondamenti', items: ['Tecnica hair-stroke dal livello 1 al 5', 'Pattern naturali e direzione del pelo', 'Mappatura e simmetria freestyle', 'Pratica intensiva su pelle artificiale'] },
          { title: 'Giorno 02 — Livelli Avanzati (6–14)', items: ['Progressione livelli 6–14 Freestyle', 'Tecniche di shading misto', 'Combinazioni microblading + powder', 'Sessione di feedback e correzione'] },
          { title: 'Giorno 03 — Modella & Portfolio', items: ['Applicazione su modella reale', 'Protocollo touch-up e guarigione', 'Documentazione portfolio professionale', 'Certificazione Microblading Freestyle'] },
        ],
      },
      masterclass: {
        title: 'Masterclass Specializzate',
        duration: '1 Giorno',
        description: 'Labbra, Eyeliner, Laminazione Kerafill',
        subtitle: 'Tecnica Avanzata · Hands-on Intensivo · Watch & Learn',
        days: [
          { title: 'Masterclass — Tecnica Avanzata', items: ['Focus tecnica specializzata (Lip Blush / Eyeliner / Kerafill)', 'Demo avanzata dalla Master Trainer', 'Sessione hands-on guidata', 'Watch & Learn: casi clinici reali', 'Attestato di partecipazione specializzata'] },
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
      whatsapp: 'Info su WhatsApp',
      starterKitBadge: 'Kit Incluso',
      address: 'Studio Master — Via Varese, Italia',
      vat: 'P.IVA 03794680128',
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
      pmu: {
        title: 'Complete PMU',
        duration: '5 Days',
        description: 'Complete course featuring Medical Specialist collaboration',
        subtitle: 'Theory, Mapping, Pigmentology · Live Demo · Live Model Practice',
        days: [
          { title: 'Day 01 — Foundations & Theory', items: ['Colour theory and pigmentology', 'Facial anatomy and mapping', 'Hygiene and REACH 2026 safety', 'Drawing techniques and symmetry'] },
          { title: 'Day 02 — Mapping & Technique', items: ['Advanced eyebrow mapping', 'Needle introduction and movement', 'Practice on artificial skin', 'Personal correction and feedback'] },
          { title: 'Day 03 — Application & Style', items: ['Ombré and Powder Brow styles', 'Mixed technique combinations', 'Client management and consultation', 'Photographic documentation'] },
          { title: 'Day 04 — Live Demo & Model', items: ['Live demo by Master Trainer', 'Application on first real model', 'Pain management and comfort', 'Post-treatment protocol'] },
          { title: 'Day 05 — Gala & Certification', items: ['Second model session', 'Advanced review and refinement', 'International Certification Ceremony', 'Closing Gala with portfolio'] },
        ],
        starterKit: {
          title: 'Professional Starter Kit Included',
          items: ['REACH 2026 certified pigments (full set)', 'Professional needles and cartridges', 'Digital precision dermograph', 'Exclusive Belle Femme technical manual', 'International Certificate + ASL Attestation'],
        },
      },
      microblading: {
        title: 'Microblading Freestyle',
        duration: '3 Days',
        description: '14 Level Progression',
        subtitle: 'Hair-stroke patterns · 14 Levels · Advanced Shading · Live Model',
        days: [
          { title: 'Day 01 — Hair-stroke & Foundations', items: ['Hair-stroke technique levels 1–5', 'Natural patterns and hair direction', 'Freestyle mapping and symmetry', 'Intensive practice on artificial skin'] },
          { title: 'Day 02 — Advanced Levels (6–14)', items: ['Freestyle levels 6–14 progression', 'Mixed shading techniques', 'Microblading + powder combinations', 'Feedback and correction session'] },
          { title: 'Day 03 — Model & Portfolio', items: ['Application on real model', 'Touch-up and healing protocol', 'Professional portfolio documentation', 'Microblading Freestyle Certification'] },
        ],
      },
      masterclass: {
        title: 'Specialized Masterclasses',
        duration: '1 Day',
        description: 'Lips, Eyeliner, Kerafill Lamination',
        subtitle: 'Advanced Technique · Intensive Hands-on · Watch & Learn',
        days: [
          { title: 'Masterclass — Advanced Technique', items: ['Specialized technique focus (Lip Blush / Eyeliner / Kerafill)', 'Advanced demo by Master Trainer', 'Guided hands-on session', 'Watch & Learn: real clinical cases', 'Certificate of specialized participation'] },
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
      whatsapp: 'Info on WhatsApp',
      starterKitBadge: 'Kit Included',
      address: 'Master Studio — Varese, Italy',
      vat: 'VAT 03794680128',
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
      pmu: {
        title: 'PMU Complet',
        duration: '5 Jours',
        description: 'Cours complet avec collaboration de Spécialistes Médicaux',
        subtitle: 'Théorie, Mapping, Pigmentologie · Démo Live · Pratique sur Modèle',
        days: [
          { title: 'Jour 01 — Fondements & Théorie', items: ['Théorie des couleurs et pigmentologie', 'Anatomie faciale et cartographie', 'Hygiène et sécurité REACH 2026', 'Techniques de dessin et symétrie'] },
          { title: 'Jour 02 — Mapping & Technique', items: ['Cartographie avancée du sourcil', 'Introduction à l\'aiguille et au mouvement', 'Pratique sur peau artificielle', 'Correction personnalisée et retours'] },
          { title: 'Jour 03 — Application & Style', items: ['Styles Ombré et Powder Brows', 'Combinaisons de techniques mixtes', 'Gestion client et consultation', 'Documentation photographique'] },
          { title: 'Jour 04 — Démo Live & Modèle', items: ['Démo en direct de la Master Trainer', 'Application sur premier modèle réel', 'Gestion de la douleur et confort', 'Protocole post-traitement'] },
          { title: 'Jour 05 — Gala & Certification', items: ['Deuxième session sur modèle', 'Révision et perfectionnement avancé', 'Cérémonie de Certification Internationale', 'Gala de clôture avec portfolio'] },
        ],
        starterKit: {
          title: 'Kit Professionnel Inclus',
          items: ['Pigments certifiés REACH 2026 (set complet)', 'Aiguilles et cartouches professionnelles', 'Dermographe numérique de précision', 'Manuel technique exclusif Belle Femme', 'Certificat International + Attestation ASL'],
        },
      },
      microblading: {
        title: 'Microblading Freestyle',
        duration: '3 Jours',
        description: 'Progression à 14 Niveaux',
        subtitle: 'Hair-stroke patterns · 14 Niveaux · Shading Avancé · Modèle Réel',
        days: [
          { title: 'Jour 01 — Hair-stroke & Fondements', items: ['Technique hair-stroke niveaux 1–5', 'Patterns naturels et direction des poils', 'Mapping et symétrie freestyle', 'Pratique intensive sur peau artificielle'] },
          { title: 'Jour 02 — Niveaux Avancés (6–14)', items: ['Progression freestyle niveaux 6–14', 'Techniques de shading mixte', 'Combinaisons microblading + powder', 'Session de feedback et correction'] },
          { title: 'Jour 03 — Modèle & Portfolio', items: ['Application sur modèle réel', 'Protocole retouche et cicatrisation', 'Documentation portfolio professionnel', 'Certification Microblading Freestyle'] },
        ],
      },
      masterclass: {
        title: 'Masterclasses Spécialisées',
        duration: '1 Jour',
        description: 'Lèvres, Eyeliner, Lamination Kerafill',
        subtitle: 'Technique Avancée · Hands-on Intensif · Watch & Learn',
        days: [
          { title: 'Masterclass — Technique Avancée', items: ['Focus technique spécialisée (Lip Blush / Eyeliner / Kerafill)', 'Démo avancée par la Master Trainer', 'Session hands-on guidée', 'Watch & Learn : cas cliniques réels', 'Attestation de participation spécialisée'] },
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
      whatsapp: 'Info sur WhatsApp',
      starterKitBadge: 'Kit Inclus',
      address: 'Master Studio — Varese, Italie',
      vat: 'TVA 03794680128',
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
      pmu: {
        title: 'PMU الكامل',
        duration: '٥ أيام',
        description: 'دورة كاملة بالتعاون مع أخصائيين طبيين',
        subtitle: 'النظرية، الرسم، علم الأصباغ · عرض مباشر · تطبيق على موديل',
        days: [
          { title: 'اليوم ٠١ — الأسس والنظرية', items: ['نظرية الألوان وعلم الأصباغ', 'تشريح الوجه والرسم', 'النظافة وسلامة REACH 2026', 'تقنيات الرسم والتناسق'] },
          { title: 'اليوم ٠٢ — الرسم والتقنية', items: ['رسم الحاجب المتقدم', 'مقدمة الإبرة والحركة', 'التطبيق على بشرة اصطناعية', 'التصحيح الشخصي والتغذية الراجعة'] },
          { title: 'اليوم ٠٣ — التطبيق والأسلوب', items: ['أسلوب أومبري وباودر براوز', 'مجموعات التقنيات المختلطة', 'إدارة العميل والاستشارة', 'التوثيق الفوتوغرافي'] },
          { title: 'اليوم ٠٤ — العرض المباشر والموديل', items: ['عرض مباشر من المدربة الرئيسية', 'التطبيق على أول موديل حقيقي', 'إدارة الألم والراحة', 'بروتوكول ما بعد العلاج'] },
          { title: 'اليوم ٠٥ — الحفل والشهادة', items: ['جلسة الموديل الثانية', 'المراجعة والتحسين المتقدم', 'حفل الشهادة الدولية', 'حفل الختام مع الحقيبة'] },
        ],
        starterKit: {
          title: 'طقم احترافي مشمول',
          items: ['أصباغ معتمدة REACH 2026 (طقم كامل)', 'إبر وخراطيش احترافية', 'قلم رقمي دقيق للجلد', 'دليل تقني حصري Belle Femme', 'شهادة دولية + اعتماد ASL'],
        },
      },
      microblading: {
        title: 'مايكروبليدنج حر',
        duration: '٣ أيام',
        description: 'تقدم ١٤ مستوى',
        subtitle: 'أنماط شعر · ١٤ مستوى · تظليل متقدم · موديل حقيقي',
        days: [
          { title: 'اليوم ٠١ — شعرة والأسس', items: ['تقنية شعرة من المستوى ١ إلى ٥', 'الأنماط الطبيعية واتجاه الشعر', 'الرسم الحر والتناسق', 'تطبيق مكثف على بشرة اصطناعية'] },
          { title: 'اليوم ٠٢ — المستويات المتقدمة (٦–١٤)', items: ['تقدم المستويات ٦–١٤ الحرة', 'تقنيات التظليل المختلطة', 'مجموعات مايكروبليدنج + باودر', 'جلسة تغذية راجعة وتصحيح'] },
          { title: 'اليوم ٠٣ — الموديل والحقيبة', items: ['التطبيق على موديل حقيقي', 'بروتوكول اللمسات والشفاء', 'توثيق حقيبة احترافية', 'شهادة مايكروبليدنج الحر'] },
        ],
      },
      masterclass: {
        title: 'دورات متخصصة',
        duration: 'يوم واحد',
        description: 'الشفاه، الآيلاينر، ترطيب كيرافيل',
        subtitle: 'تقنية متقدمة · تطبيق مكثف · مشاهدة وتعلم',
        days: [
          { title: 'ماستركلاس — تقنية متقدمة', items: ['تركيز التقنية المتخصصة (Lip Blush / Eyeliner / Kerafill)', 'عرض متقدم من المدربة الرئيسية', 'جلسة تطبيق موجهة', 'مشاهدة وتعلم: حالات سريرية حقيقية', 'شهادة مشاركة متخصصة'] },
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
      whatsapp: 'معلومات عبر واتساب',
      starterKitBadge: 'الطقم مشمول',
      address: 'الاستوديو الرئيسي — فاريزي، إيطاليا',
      vat: 'P.IVA 03794680128',
    },
  },
};

export const isRTL = (lang: Language) => lang === 'ar';
