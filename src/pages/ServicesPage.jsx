import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Teams from '../components/Teams';

const ServicesPage = () => {
  useScrollAnimation(); // Initialize scroll animations

  return (
    <>
      <Helmet>
        <title>Services - Oncle G Livraisons | Solutions de Livraison à Brazzaville</title>
        <meta name="description" content="Découvrez tous les services d'Oncle G Livraisons à Brazzaville. Livraisons express, livraison de gaz, conciergerie, e-commerce et plus encore. Service de livraison express avec un sourire." />
        <meta name="keywords" content="Oncle G Livraisons, services, prestations, livraison express, courses, documents, colis, solutions rapides, Brazzaville, livraison de gaz, conciergerie, e-commerce, G-PRO, Allô'Gaz" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/services" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/services" />
        <meta property="og:title" content="Services - Oncle G Livraisons | Solutions de Livraison à Brazzaville" />
        <meta property="og:description" content="Découvrez tous les services d'Oncle G Livraisons à Brazzaville. Livraisons express, livraison de gaz, conciergerie, e-commerce et plus encore. Service de livraison express avec un sourire." />
        <meta property="og:image" content="https://oncle-g.netlify.app/img/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />
        <meta property="og:site_name" content="Oncle G Livraisons" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@OncleGLIVRAISON" />
        <meta property="twitter:creator" content="@OncleGLIVRAISON" />
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/services" />
        <meta property="twitter:title" content="Services - Oncle G Livraisons | Solutions de Livraison à Brazzaville" />
        <meta property="twitter:description" content="Découvrez tous les services d'Oncle G Livraisons à Brazzaville. Livraisons express, livraison de gaz, conciergerie, e-commerce et plus encore. Service de livraison express avec un sourire." />
        <meta property="twitter:image" content="https://oncle-g.netlify.app/img/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />
        
        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Services - Oncle G Livraisons",
            "url": "https://www.oncleglivraisons.com/services",
            "description": "Découvrez tous les services d'Oncle G Livraisons à Brazzaville. Livraisons express, livraison de gaz, conciergerie, e-commerce et plus encore.",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Livraison Express",
                  "description": "Service de livraison rapide pour vos colis, documents et courses à Brazzaville"
                },
                {
                  "@type": "Service",
                  "name": "Allô'Gaz",
                  "description": "Service de livraison de bouteilles de gaz à domicile"
                },
                {
                  "@type": "Service",
                  "name": "Conciergerie Express",
                  "description": "Service de conciergerie à domicile pour vos tâches quotidiennes"
                },
                {
                  "@type": "Service",
                  "name": "G-PRO Marketing",
                  "description": "Solution e-commerce clé en main pour votre business"
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.oncleglivraisons.com/"
              }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.oncleglivraisons.com/services"
              }]
            }
          })}
        </script>
      </Helmet>
      <div className="bg-white min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <ServicesSection />
        </main>
        <Teams />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
