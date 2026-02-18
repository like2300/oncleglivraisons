import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Composant SEO réutilisable pour toutes les pages
 * @param {Object} props
 * @param {string} props.title - Titre de la page
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Mots-clés
 * @param {string} props.canonical - URL canonique
 * @param {string} props.ogImage - Image pour les réseaux sociaux
 * @param {Object} props.schema - Schema.org JSON-LD
 * @param {boolean} props.isProductPage - Si c'est une page produit/service
 */
const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://www.oncleglivraisons.com/assets/og-image.jpg',
  schema,
  isProductPage = false
}) => {
  const baseUrl = 'https://www.oncleglivraisons.com';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  // Schema par défaut pour LocalBusiness
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oncle G Livraisons",
    "alternateName": ["Oncle G", "ONCLE G Livraisons", "Oncle G Brazzaville"],
    "url": baseUrl,
    "logo": `${baseUrl}/img/Oncle%20G%20-%20Logo.svg`,
    "image": ogImage,
    "description": description || "Oncle G Livraisons - Service de livraison express à Brazzaville. Livraison de colis, gaz, conciergerie et e-commerce.",
    "telephone": "+242-066-338-224",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CG",
      "addressRegion": "Brazzaville",
      "addressLocality": "Brazzaville"
    },
    "areaServed": {
      "@type": "City",
      "name": "Brazzaville"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -4.261063,
      "longitude": 15.279534
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "22:00"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/oncleglivraisons",
      "https://www.instagram.com/oncleglivraisons/",
      "https://x.com/OncleGLIVRAISON",
      "https://www.tiktok.com/@oncle.g.livraisons",
      "https://www.linkedin.com/in/oncle-g-livraisons-5272783a0/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247"
    },
    "review": {
      "@type": "Review",
      "reviewBody": "Service de livraison rapide et fiable",
      "author": {
        "@type": "Person",
        "name": "Client Satisfait"
      },
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Oncle G Livraisons"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  };

  const schemaToUse = schema || defaultSchema;

  return (
    <Helmet>
      {/* Balises de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Oncle G Livraisons" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Geo tags pour le SEO local */}
      <meta name="geo.region" content="CG" />
      <meta name="geo.placename" content="Brazzaville" />
      <meta name="geo.position" content="-4.261063;15.279534" />
      <meta name="ICBM" content="-4.261063, 15.279534" />

      {/* URL canonique */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isProductPage ? "product" : "website"} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Oncle G Livraisons - Service de livraison express à Brazzaville" />
      <meta property="og:site_name" content="Oncle G Livraisons" />
      <meta property="og:locale" content="fr_CG" />
      <meta property="og:country_name" content="Congo" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@OncleGLIVRAISON" />
      <meta property="twitter:creator" content="@OncleGLIVRAISON" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:image:alt" content="Oncle G Livraisons - Service de livraison express à Brazzaville" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaToUse)}
      </script>
    </Helmet>
  );
};

export default SEO;
