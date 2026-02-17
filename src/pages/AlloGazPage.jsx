import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const AlloGazPage = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMouseVisible, setIsMouseVisible] = useState(false);

  // Logique du curseur lumineux
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseEnter = () => setIsMouseVisible(true);
    const handleMouseLeave = () => setIsMouseVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <Helmet>
        <title>Allô'Gaz - Oncle G Livraisons | Livraison de Gaz à Brazzaville</title>
        <meta name="description" content="Service de livraison de bouteilles de gaz Allô'Gaz par Oncle G Livraisons. Rapide, fiable et sécurisé à Brazzaville. Service de livraison express avec un sourire." />
        <meta name="keywords" content="Oncle G Livraisons, Allô'Gaz, livraison gaz, bouteille de gaz, service gaz, Brazzaville, livraison rapide, service fiable, livraison de gaz, service de livraison" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/services/allo-gaz" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/services/allo-gaz" />
        <meta property="og:title" content="Allô'Gaz - Oncle G Livraisons | Livraison de Gaz à Brazzaville" />
        <meta property="og:description" content="Service de livraison de bouteilles de gaz Allô'Gaz par Oncle G Livraisons. Rapide, fiable et sécurisé à Brazzaville. Service de livraison express avec un sourire." />
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
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/services/allo-gaz" />
        <meta property="twitter:title" content="Allô'Gaz - Oncle G Livraisons | Livraison de Gaz à Brazzaville" />
        <meta property="twitter:description" content="Service de livraison de bouteilles de gaz Allô'Gaz par Oncle G Livraisons. Rapide, fiable et sécurisé à Brazzaville. Service de livraison express avec un sourire." />
        <meta property="twitter:image" content="https://oncle-g.netlify.app/img/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />

        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Allô'Gaz - Oncle G Livraisons",
            "serviceType": "Livraison de Gaz",
            "provider": {
              "@type": "Organization",
              "name": "Oncle G Livraisons"
            },
            "areaServed": {
              "@type": "City",
              "name": "Brazzaville"
            },
            "offers": {
              "@type": "Offer",
              "price": "Sur devis",
              "priceCurrency": "XAF",
              "availability": "https://schema.org/InStock"
            },
            "description": "Service de livraison de bouteilles de gaz rapide, fiable et sécurisé à Brazzaville.",
            "url": "https://www.oncleglivraisons.com/services/allo-gaz",
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
              }, {
                "@type": "ListItem",
                "position": 3,
                "name": "Allô'Gaz",
                "item": "https://www.oncleglivraisons.com/services/allo-gaz"
              }]
            }
          })}
        </script>
      </Helmet>

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/services/individuel/freepik__ultrarealistic-8k-photo-of-a-black-african-deliver__15783 2_11zon.jpg')" }}
        ></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 w-screen h-screen flex items-end p-9 justify-center">
        {/* Bouton Retour */}
        <div className="absolute top-4 left-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full shadow-md transition-colors duration-300"
          >
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            Retour
          </button>
        </div>

        <div className="flex w-full text-center flex-col items-center justify-center max-w-4xl">
          <h1 className=" text-4xl font-bold text-gray-100">
            ALLÔ'
            <div className="bg-yellow-500 p-2 rotate-3 mt-2 inline-block">
              <p className="text-black font-black text-4xl leading-none tracking-tighter">GAZ</p>
            </div>
          </h1>

          <span className="text-2xl lg:text-4xl mt-4 font-bold text-white leading-tight">
            Votre bouteille de Gaz transportée, installée et testée
          </span>

          <p className="mt-4 text-gray-100 text-lg">
            Plus besoin de vous déplacer, d'attendre ou de vous salir. <br />
            <strong className="text-yellow-500">ONCLE G Livraisons</strong> vous livre votre bouteille de gaz rapidement et en toute sécurité,
            directement dans votre cuisine, avec un sourire en plus.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded-full bg-yellow-500 px-8 py-3 font-bold text-white shadow-sm transition-all hover:bg-white hover:text-yellow-500"
              href="https://wa.me/242066338224"
            >
              CONTACTEZ-NOUS
            </a>
          </div>
        </div>
      </div>

      {/* Cursor glow element */}
      <div
        style={{
          position: 'fixed',
          left: cursorPos.x,
          top: cursorPos.y,
          opacity: isMouseVisible ? 1 : 0,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease',
          zIndex: 9999,
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(234, 179, 8, 0.3) 0%, transparent 70%)',
          borderRadius: '50%'
        }}
      />
    </section>
  );
};

export default AlloGazPage;
