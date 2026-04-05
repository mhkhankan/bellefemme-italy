export const StructuredData = () => {
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
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};
