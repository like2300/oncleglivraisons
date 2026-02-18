import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';


const ProGPage = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMouseIn, setIsMouseIn] = useState(false);

  // 1. Gestion du curseur lumineux (Cursor Glow)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseEnter = () => setIsMouseIn(true);
    const handleMouseLeave = () => setIsMouseIn(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // 2. Gestion du Loader et de l'overflow du body
  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    // Fallback de sécurité : On cache le loader après 5s quoi qu'il arrive
    const timer = setTimeout(() => setShowLoader(false), 5000);
    return () => clearTimeout(timer);
  }, [showLoader]);

  const handleAnimationComplete = () => {
    // On peut ajouter un petit délai avant de masquer
    setTimeout(() => setShowLoader(false), 200);
  };

  return (
    <>
      <Helmet>
        <title>G-PRO Illimité - Oncle G Livraisons | Service Premium de Livraison à Brazzaville</title>
        <meta name="description" content="Découvrez le service G-PRO Illimité d'Oncle G Livraisons. Solution premium pour vos livraisons express à Brazzaville avec service illimité. Service de livraison express avec un sourire." />
        <meta name="keywords" content="Oncle G Livraisons, service G-PRO, livraison illimitée, service premium, Brazzaville, livraison express, service illimité, service de livraison, solution premium" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/services/pro-g" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/services/pro-g" />
        <meta property="og:title" content="G-PRO Illimité - Oncle G Livraisons | Service Premium de Livraison à Brazzaville" />
        <meta property="og:description" content="Découvrez le service G-PRO Illimité d'Oncle G Livraisons. Solution premium pour vos livraisons express à Brazzaville avec service illimité. Service de livraison express avec un sourire." />
        <meta property="og:image" content="https://www.oncleglivraisons.com/assets/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />
        <meta property="og:site_name" content="Oncle G Livraisons" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@OncleGLIVRAISONS" />
        <meta property="twitter:creator" content="@OncleGLIVRAISONS" />
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/services/pro-g" />
        <meta property="twitter:title" content="G-PRO Illimité - Oncle G Livraisons | Service Premium de Livraison à Brazzaville" />
        <meta property="twitter:description" content="Découvrez le service G-PRO Illimité d'Oncle G Livraisons. Solution premium pour vos livraisons express à Brazzaville avec service illimité. Service de livraison express avec un sourire." />
        <meta property="twitter:image" content="https://www.oncleglivraisons.com/assets/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />

        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "G-PRO Illimité - Oncle G Livraisons",
            "serviceType": "Livraison Express Premium",
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
            "description": "Solution premium pour vos livraisons express à Brazzaville avec service illimité.",
            "url": "https://www.oncleglivraisons.com/services/pro-g",
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
                "name": "G-PRO Illimité",
                "item": "https://www.oncleglivraisons.com/services/pro-g"
              }]
            }
          })}
        </script>
      </Helmet>

      {/* Cursor Glow */}
      <div
        id="cursor-glow"
        style={{
          position: 'fixed',
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: isMouseIn ? 1 : 0,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease'
        }}
        className="w-20 h-20 bg-yellow-500/20 blur-3xl rounded-full z-50"
      />

      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-90"
            style={{ backgroundImage: `url('/images/services/individuel/freepik__ultrarealistic-8k-photo-of-a-black-african-chef-mi__15790 2_11zon.jpg')` }}
          ></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="relative z-10 w-full h-screen flex items-end p-9 justify-center">
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

          <div className="flex flex-col items-center text-center max-w-3xl">
            <h1 className=" text-4xl font-bold text-gray-100">
              G – PRO
              <div className="bg-yellow-500 p-2 rotate-3 mt-2 inline-block">
                <p className="text-black font-black text-4xl leading-none tracking-tighter">ILLIMITÉ</p>
              </div>
            </h1>

            <span className="text-4xl mt-4 font-bold text-white leading-tight">
              Livraison sans contrainte, pensée pour les professionnels
            </span>

            <p className="mt-4 text-gray-100">
              Une moto et un livreur dédiés, entièrement gérés par <br />
              <strong className="text-yellow-500">ONCLE G Livraisons</strong>.
              Carburant, maintenance, remplacement et suivi inclus.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded-full bg-yellow-500 px-8 py-3 font-medium text-white shadow-sm transition-all hover:bg-white hover:text-yellow-500"
                href="https://wa.me/242066338224"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProGPage;
