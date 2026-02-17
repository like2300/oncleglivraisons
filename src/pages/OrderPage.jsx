import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StepsSection from '../components/Commander';
import Teams from '../components/Teams';
const OrderPage = () => {
  return (
    <>
      <Helmet>
        <title>Commander - Oncle G Livraisons | Service de Livraison à Brazzaville</title>
        <meta name="description" content="Commandez facilement les services d'Oncle G Livraisons à Brazzaville. Processus simple et rapide pour bénéficier de nos solutions de livraison express. Service de livraison avec un sourire." />
        <meta name="keywords" content="Oncle G Livraisons, commander, commande, service, processus, livraison, service express, Brazzaville, livraison express, service de livraison, commande en ligne" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/commander" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/commander" />
        <meta property="og:title" content="Commander - Oncle G Livraisons | Service de Livraison à Brazzaville" />
        <meta property="og:description" content="Commandez facilement les services d'Oncle G Livraisons à Brazzaville. Processus simple et rapide pour bénéficier de nos solutions de livraison express. Service de livraison avec un sourire." />
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
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/commander" />
        <meta property="twitter:title" content="Commander - Oncle G Livraisons | Service de Livraison à Brazzaville" />
        <meta property="twitter:description" content="Commandez facilement les services d'Oncle G Livraisons à Brazzaville. Processus simple et rapide pour bénéficier de nos solutions de livraison express. Service de livraison avec un sourire." />
        <meta property="twitter:image" content="https://oncle-g.netlify.app/img/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />
        
        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CheckoutPage",
            "name": "Commander - Oncle G Livraisons",
            "url": "https://www.oncleglivraisons.com/commander",
            "description": "Commandez facilement les services d'Oncle G Livraisons à Brazzaville. Processus simple et rapide pour bénéficier de nos solutions de livraison express.",
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
                "name": "Commander",
                "item": "https://www.oncleglivraisons.com/commander"
              }]
            }
          })}
        </script>
      </Helmet>
      <div className="bg-white min-h-screen flex flex-col">
        <Header />

        <StepsSection />
          <Teams />
        <Footer />
      </div>
    </>
  );
};

export default OrderPage;
