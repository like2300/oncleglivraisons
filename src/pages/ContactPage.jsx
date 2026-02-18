import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Teams from '../components/Teams';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi ici (ex: avec EmailJS ou une API)
    console.log("Formulaire envoyé");
    alert("Merci ! Votre message a bien été envoyé.");
  };

  return (
    <>
      <Helmet>
        <title>Contact - Oncle G Livraisons | Nous Joindre à Brazzaville</title>
        <meta name="description" content="Contactez Oncle G Livraisons facilement à Brazzaville. Numéros de téléphone, formulaire de contact et informations pour nous joindre rapidement. Service de livraison express avec un sourire." />
        <meta name="keywords" content="Oncle G Livraisons, contact, formulaire, coordonnées, nous joindre, support, Brazzaville, téléphone, service client, assistance, livraison express" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/contacts" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/contacts" />
        <meta property="og:title" content="Contact - Oncle G Livraisons | Nous Joindre à Brazzaville" />
        <meta property="og:description" content="Contactez Oncle G Livraisons facilement à Brazzaville. Numéros de téléphone, formulaire de contact et informations pour nous joindre rapidement. Service de livraison express avec un sourire." />
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
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/contacts" />
        <meta property="twitter:title" content="Contact - Oncle G Livraisons | Nous Joindre à Brazzaville" />
        <meta property="twitter:description" content="Contactez Oncle G Livraisons facilement à Brazzaville. Numéros de téléphone, formulaire de contact et informations pour nous joindre rapidement. Service de livraison express avec un sourire." />
        <meta property="twitter:image" content="https://www.oncleglivraisons.com/assets/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />
        
        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact - Oncle G Livraisons",
            "url": "https://www.oncleglivraisons.com/contacts",
            "description": "Contactez Oncle G Livraisons facilement à Brazzaville. Numéros de téléphone, formulaire de contact et informations pour nous joindre rapidement.",
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
                "name": "Contact",
                "item": "https://www.oncleglivraisons.com/contacts"
              }]
            }
          })}
        </script>
      </Helmet>
      <div className="bg-white min-h-screen flex flex-col">
        <Header />

        <ContactSection />
        <Teams />

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
