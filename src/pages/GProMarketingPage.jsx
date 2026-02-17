import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const GProMarketingPage = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Gestion de l'effet "Cursor Glow"
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

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
        <title>G-PRO Marketing - Oncle G Livraisons | Solution E-commerce à Brazzaville</title>
        <meta name="description" content="Découvrez le service G-PRO Marketing d'Oncle G Livraisons. Solution e-commerce clé en main à Brazzaville. Zéro stocks, Zéro charges, 100% ventes. Service de livraison express avec un sourire." />
        <meta name="keywords" content="Oncle G Livraisons, service G-PRO Marketing, marketing, e-commerce, solution clé en main, Brazzaville, vente en ligne, logistique, service de livraison, solution marketing" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/services/g-promarketing" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/services/g-promarketing" />
        <meta property="og:title" content="G-PRO Marketing - Oncle G Livraisons | Solution E-commerce à Brazzaville" />
        <meta property="og:description" content="Découvrez le service G-PRO Marketing d'Oncle G Livraisons. Solution e-commerce clé en main à Brazzaville. Zéro stocks, Zéro charges, 100% ventes. Service de livraison express avec un sourire." />
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
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/services/g-promarketing" />
        <meta property="twitter:title" content="G-PRO Marketing - Oncle G Livraisons | Solution E-commerce à Brazzaville" />
        <meta property="twitter:description" content="Découvrez le service G-PRO Marketing d'Oncle G Livraisons. Solution e-commerce clé en main à Brazzaville. Zéro stocks, Zéro charges, 100% ventes. Service de livraison express avec un sourire." />
        <meta property="twitter:image" content="https://oncle-g.netlify.app/img/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />

        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "G-PRO Marketing - Oncle G Livraisons",
            "serviceType": "Solution E-commerce",
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
            "description": "Solution e-commerce clé en main à Brazzaville. Zéro stocks, Zéro charges, 100% ventes.",
            "url": "https://www.oncleglivraisons.com/services/g-promarketing",
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
                "name": "G-PRO Marketing",
                "item": "https://www.oncleglivraisons.com/services/g-promarketing"
              }]
            }
          })}
        </script>
      </Helmet>

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/services/individuel/freepik__photo-ultraraliste-en-8k-dune-dame-de-47-ans-habil__15793 2_11zon.jpg')" }}
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
          <h1 className=" text-4xl font-bold text-gray-100 flex flex-col items-center gap-2">
            G – PRO
            <div className="bg-yellow-500 p-2 rotate-3">
              <p className="text-black font-black text-4xl leading-none tracking-tighter">E-COMMERCE</p>
            </div>
          </h1>

          <span className="text-4xl mt-6 font-bold text-white leading-tight">
            Zéro stocks, Zéro Charges,<br /> 100% Ventes
          </span>

          <p className="mt-4 text-gray-100 text-lg">
            Solution clé en main qui permet aux marques et e-commerçants de vendre leurs produits sans gérer
            la logistique. <strong className="text-yellow-500">ONCLE G Livraisons</strong> prend en charge le stock,
            la vente, la distribution et la livraison finale.
          </p>

          <div className="mt-6 flex gap-4">
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
        style={{
          position: 'fixed',
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 9999,
          // Ajout du style pour que le glow soit visible (à adapter selon ton CSS original)
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(234,179,8,0.15) 0%, rgba(234,179,8,0) 70%)',
          borderRadius: '50%'
        }}
      ></div>
    </section>
  );
};

export default GProMarketingPage;
