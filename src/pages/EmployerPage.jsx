import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';
import Teams from '../components/Teams';
const EmployerPage = () => {
  return (
    <>
      <Helmet>
        <title>Emploi - Oncle G Livraisons | Rejoignez Notre Équipe à Brazzaville</title>
        <meta name="description" content="Découvrez les opportunités d'emploi chez Oncle G Livraisons à Brazzaville. Postulez aux offres d'emploi et rejoignez notre équipe dynamique. Service de livraison express avec un sourire." />
        <meta name="keywords" content="Oncle G Livraisons, emploi, carrière, travail, recrutement, équipe, offres d'emploi, Brazzaville, livraison express, service client, transport, logistique" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/emplois" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/emplois" />
        <meta property="og:title" content="Emploi - Oncle G Livraisons | Rejoignez Notre Équipe à Brazzaville" />
        <meta property="og:description" content="Découvrez les opportunités d'emploi chez Oncle G Livraisons à Brazzaville. Postulez aux offres d'emploi et rejoignez notre équipe dynamique. Service de livraison express avec un sourire." />
        <meta property="og:image" content="https://www.oncleglivraisons.com/assets/og-image.jpg" />
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
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/emplois" />
        <meta property="twitter:title" content="Emploi - Oncle G Livraisons | Rejoignez Notre Équipe à Brazzaville" />
        <meta property="twitter:description" content="Découvrez les opportunités d'emploi chez Oncle G Livraisons à Brazzaville. Postulez aux offres d'emploi et rejoignez notre équipe dynamique. Service de livraison express avec un sourire." />
        <meta property="twitter:image" content="https://www.oncleglivraisons.com/assets/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />
        
        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CareerPage",
            "name": "Emploi - Oncle G Livraisons",
            "url": "https://www.oncleglivraisons.com/emplois",
            "description": "Découvrez les opportunités d'emploi chez Oncle G Livraisons à Brazzaville. Postulez aux offres d'emploi et rejoignez notre équipe dynamique.",
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
                "name": "Emploi",
                "item": "https://www.oncleglivraisons.com/emplois"
              }]
            }
          })}
        </script>
      </Helmet>
      <div className="bg-white min-h-screen flex flex-col">
        <Header />

        {/* Team Section */}
        <TeamSection />
        <Teams />


        <Footer />
      </div>
    </>
  );
};

export default EmployerPage;
