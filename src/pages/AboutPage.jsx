import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Teams from '../components/Teams';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Oncle G Livraisons - Qui Sommes-Nous ? | Notre Histoire et Nos Valeurs</title>
        <meta name="description" content="Découvrez l'histoire d'Oncle G Livraisons, notre mission, nos valeurs et notre engagement envers l'excellence à Brazzaville. Service de livraison express avec un sourire." />
        <meta name="keywords" content="Oncle G Livraisons, à propos, entreprise, histoire, mission, valeurs, équipe, Brazzaville, service de livraison, culture d'entreprise, vision, engagement" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/a-propos" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/a-propos" />
        <meta property="og:title" content="Oncle G Livraisons - Qui Sommes-Nous ? | Notre Histoire et Nos Valeurs" />
        <meta property="og:description" content="Découvrez l'histoire d'Oncle G Livraisons, notre mission, nos valeurs et notre engagement envers l'excellence à Brazzaville. Service de livraison express avec un sourire." />
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
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/a-propos" />
        <meta property="twitter:title" content="Oncle G Livraisons - Qui Sommes-Nous ? | Notre Histoire et Nos Valeurs" />
        <meta property="twitter:description" content="Découvrez l'histoire d'Oncle G Livraisons, notre mission, nos valeurs et notre engagement envers l'excellence à Brazzaville. Service de livraison express avec un sourire." />
        <meta property="twitter:image" content="https://oncle-g.netlify.app/img/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />
        
        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Oncle G Livraisons",
            "url": "https://www.oncleglivraisons.com",
            "logo": "https://www.oncleglivraisons.com/img/Oncle%20G%20-%20Logo.svg",
            "description": "Service de livraison express à Brazzaville. Un sourire, c'est déjà une livraison réussie.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CG",
              "addressRegion": "Brazzaville"
            },
            "areaServed": {
              "@type": "City",
              "name": "Brazzaville"
            },
            "founder": {
              "@type": "Person",
              "name": "David Mbala"
            },
            "knowsAbout": ["livraison express", "service de livraison", "Brazzaville", "conciergerie", "e-commerce"],
            "sameAs": [
              "https://www.facebook.com/oncleglivraisons",
              "https://www.instagram.com/oncleglivraisons/",
              "https://x.com/OncleGLIVRAISON",
              "https://www.tiktok.com/@oncle.g.livraisons",
              "https://www.linkedin.com/in/oncle-g-livraisons-5272783a0/"
            ]
          })}
        </script>
      </Helmet>
      <div className="bg-white min-h-screen flex flex-col">
        <Header />

        <About />
        <Teams />

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
