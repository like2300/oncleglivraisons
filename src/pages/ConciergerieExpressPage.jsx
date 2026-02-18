import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ConciergerieExpressPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Gestion de l'effet "Cursor Glow"
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

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
        <title>Conciergerie Express - Oncle G Livraisons | Service de Conciergerie à Brazzaville</title>
        <meta name="description" content="Découvrez le service de Conciergerie Express d'Oncle G Livraisons. Services de conciergerie rapides et fiables à Brazzaville. Juste un coup de fil et l'Oncle frappe à votre porte. Service de livraison express avec un sourire." />
        <meta name="keywords" content="Oncle G Livraisons, conciergerie express, service concierge, courses express, services à domicile, Brazzaville, service de conciergerie, service rapide, courses urgentes, service fiable" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/services/conciergerie-express" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/services/conciergerie-express" />
        <meta property="og:title" content="Conciergerie Express - Oncle G Livraisons | Service de Conciergerie à Brazzaville" />
        <meta property="og:description" content="Découvrez le service de Conciergerie Express d'Oncle G Livraisons. Services de conciergerie rapides et fiables à Brazzaville. Juste un coup de fil et l'Oncle frappe à votre porte. Service de livraison express avec un sourire." />
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
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/services/conciergerie-express" />
        <meta property="twitter:title" content="Conciergerie Express - Oncle G Livraisons | Service de Conciergerie à Brazzaville" />
        <meta property="twitter:description" content="Découvrez le service de Conciergerie Express d'Oncle G Livraisons. Services de conciergerie rapides et fiables à Brazzaville. Juste un coup de fil et l'Oncle frappe à votre porte. Service de livraison express avec un sourire." />
        <meta property="twitter:image" content="https://www.oncleglivraisons.com/assets/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />

        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Conciergerie Express - Oncle G Livraisons",
            "serviceType": "Service de Conciergerie",
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
            "description": "Services de conciergerie rapides et fiables à Brazzaville. Juste un coup de fil et l'Oncle frappe à votre porte.",
            "url": "https://www.oncleglivraisons.com/services/conciergerie-express",
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
                "name": "Conciergerie Express",
                "item": "https://www.oncleglivraisons.com/services/conciergerie-express"
              }]
            }
          })}
        </script>
      </Helmet>

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-80 bg-loading"
          style={{ backgroundImage: `url('/images/services/individuel/freepik__photo-ultraraliste-en-8k-dun-homme-noir-noir-afric__15799 2_11zon.jpg')` }}
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

        <div className="flex w-full text-center flex-col items-center justify-center">
          <h1 className=" text-4xl font-bold text-gray-100">
            CONCIERGERIE
            <div className="bg-yellow-500 p-2 rotate-3 mt-2 inline-block">
              <p className="text-black font-black text-4xl leading-none tracking-tighter">EXPRESS</p>
            </div>
          </h1>

          <span className="lg:text-4xl text-2xl mt-4 font-bold text-white max-w-2xl">
            Juste un coup de fil et l'Oncle frappe à votre porte
          </span>

          <p className="mt-4 text-gray-100 max-w-xl text-center">
            Courses urgentes, dépôts, retraits ou démarches rapides :<br />
            <strong className="text-yellow-500">ONCLE G Livraisons</strong> s'occupe de tout, en un temps record.
            Un service flexible, rapide et fiable pour gérer les imprévus du quotidien.
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
        id="cursor-glow"
        className="fixed pointer-events-none transition-opacity duration-300 z-50"
        style={{
          left: position.x,
          top: position.y,
          opacity: isHovering ? 1 : 0,
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(234, 179, 8, 0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(10px)'
        }}
      />
    </section>
  );
};

export default ConciergerieExpressPage;
