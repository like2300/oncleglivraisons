import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderSection from '../components/OrderSection';
import Teams from '../components/Teams';

const CommunityPage = () => {

  return (
    <>
      <Helmet>
        <title>Communauté - Oncle G Livraisons | Rejoignez Notre Communauté à Brazzaville</title>
        <meta name="description" content="Rejoignez la communauté Oncle G Livraisons à Brazzaville. Partagez vos expériences et découvrez les témoignages de nos clients satisfaits. Service de livraison express avec un sourire." />
        <meta name="keywords" content="Oncle G Livraisons, communauté, clients, témoignages, expérience, partage, Brazzaville, avis clients, satisfaction, service de livraison, livraison express" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/communaute" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/communaute" />
        <meta property="og:title" content="Communauté - Oncle G Livraisons | Rejoignez Notre Communauté à Brazzaville" />
        <meta property="og:description" content="Rejoignez la communauté Oncle G Livraisons à Brazzaville. Partagez vos expériences et découvrez les témoignages de nos clients satisfaits. Service de livraison express avec un sourire." />
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
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/communaute" />
        <meta property="twitter:title" content="Communauté - Oncle G Livraisons | Rejoignez Notre Communauté à Brazzaville" />
        <meta property="twitter:description" content="Rejoignez la communauté Oncle G Livraisons à Brazzaville. Partagez vos expériences et découvrez les témoignages de nos clients satisfaits. Service de livraison express avec un sourire." />
        <meta property="twitter:image" content="https://oncle-g.netlify.app/img/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />
        
        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SocialMediaPosting",
            "name": "Communauté - Oncle G Livraisons",
            "url": "https://www.oncleglivraisons.com/communaute",
            "description": "Rejoignez la communauté Oncle G Livraisons à Brazzaville. Partagez vos expériences et découvrez les témoignages de nos clients satisfaits.",
            "articleSection": "Communauté",
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
                "name": "Communauté",
                "item": "https://www.oncleglivraisons.com/communaute"
              }]
            }
          })}
        </script>
      </Helmet>
      <div>
        <Header />
        <OrderSection />
        <Teams />
        <Footer />
      </div>
    </>
  );
};

export default CommunityPage;
