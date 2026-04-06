import { useEffect } from 'react';

interface StructuredDataProps {
  path?: string;
  pageTitle?: string;
  pageDescription?: string;
}

const SERVICES = [
  { name: 'Raw Stroke — Microblading Iperrealismo', description: 'Stratificazione di pigmenti biocompatibili che mima la direzione naturale del pelo.' },
  { name: 'Pigment Restauro — Laboratorio Correttivo', description: 'Gestione viraggi cromatici e migrazioni. Neutralizzazione e ripristino toni naturali.' },
  { name: 'Shadow Layer — Pixelation Avanzata', description: 'Sfumatura tecnica che crea profondità senza saturazione eccessiva.' },
  { name: 'Nude-Lip Infusion — Vitalità Labiale', description: 'Definizione contorni e saturazione velata per labbra sane e rinvigorite.' },
  { name: 'Lash-Line Engineering — Eyeliner Permanente', description: 'Linea ultra-sottile tra le ciglia per eleganza invisibile.' },
  { name: 'Gaze Sculpting — Design Ciglia su Misura', description: 'Estensione basata sulla biomeccanica dell\'occhio con mappature personalizzate.' },
  { name: 'Brow Architecture — Visagismo Analitico', description: 'Progetto totale del volto con la Sezione Aurea.' },
];

export const StructuredData = ({ path = '/', pageTitle, pageDescription }: StructuredDataProps) => {
  useEffect(() => {
    const canonicalUrl = `https://bellefemme.it${path}`;

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = canonicalUrl;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // og:url
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (el) el.content = content;
    };
    setMeta('meta[property="og:url"]', canonicalUrl);

    if (pageTitle) {
      document.title = pageTitle;
      setMeta('meta[property="og:title"]', pageTitle);
      setMeta('meta[name="twitter:title"]', pageTitle);
    }

    if (pageDescription) {
      setMeta('meta[name="description"]', pageDescription);
      setMeta('meta[property="og:description"]', pageDescription);
      setMeta('meta[name="twitter:description"]', pageDescription);
    }
  }, [path, pageTitle, pageDescription]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BeautySalon",
        "@id": "https://bellefemme.it/#business",
        "name": "Belle Femme Atelier",
        "description": "Trattamenti esclusivi di Dermopigmentazione e Microblading firmati Mouna Chabbar, Grand Master PhiAcademy. Atelier a Varese, Milano, Roma.",
        "url": "https://bellefemme.it",
        "telephone": "+393516605507",
        "email": "info@bellefemme.it",
        "address": { "@type": "PostalAddress", "addressLocality": "Varese", "addressRegion": "Lombardia", "addressCountry": "IT" },
        "areaServed": ["Varese", "Milano", "Roma"],
        "priceRange": "€€€€"
      },
      {
        "@type": "Person",
        "@id": "https://bellefemme.it/#mouna",
        "name": "Mouna Chabbar",
        "jobTitle": "Master Trainer Dermopigmentazione",
        "description": "Grand Master PhiAcademy, già Craft Master AcademyS. Giudice internazionale in Dubai, Milano, Venezia, Romania e Turchia.",
        "worksFor": { "@id": "https://bellefemme.it/#business" },
        "hasCredential": [
          "Official Master Assistant PhiBrows — PhiAcademy",
          "Craft Master MicrobladingS — AcademyS",
          "Master Tatuaggio Sopracciglia Lunga Durata — BIOTEK Italy",
          "Master Lash Lifting & Filler — Kerafill Italy",
          "Laurea in Graphic Design",
          "Operatore del Benessere EQF 3 — Regione Piemonte",
          "Attestato di Competenza Tatuaggi — Regione Lombardia"
        ]
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://bellefemme.it/#academy",
        "name": "Belle Femme Academy",
        "description": "Formazione professionale in Dermopigmentazione e PMU. Corsi dal vivo con Master Trainer Mouna Chabbar a Varese, Milano e Roma.",
        "url": "https://bellefemme.it/#academy",
        "address": { "@type": "PostalAddress", "addressLocality": "Varese", "addressRegion": "Lombardia", "addressCountry": "IT" }
      },
      ...SERVICES.map(s => ({
        "@type": "Service",
        "provider": { "@id": "https://bellefemme.it/#business" },
        "name": s.name,
        "description": s.description,
        "areaServed": ["Varese", "Milano", "Roma"],
      })),
      ...(path !== '/' && pageTitle && pageDescription ? [{
        "@type": "Course",
        "name": pageTitle,
        "description": pageDescription,
        "provider": { "@id": "https://bellefemme.it/#academy" },
        "url": `https://bellefemme.it${path}`,
      }] : []),
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};