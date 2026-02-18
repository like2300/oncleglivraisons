import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "G-PRO Illimité",
      description: "Service de livraison professionnelle par Oncle G Livraisons",
      image: "/images/services/illimite_4_11zon.webp",
      path: '/services/pro-g',
      alt: "G-PRO Illimité - Service de livraison professionnelle par Oncle G Livraisons"
    },
    {
      id: 2,
      title: "G-PRO Marketing",
      description: "Solution e-commerce clé en main par Oncle G Livraisons",
      image: "/images/services/e-commerce.webp",
      path: '/services/g-promarketing',
      alt: "G-PRO Marketing - Solution e-commerce clé en main par Oncle G Livraisons"
    },
    {
      id: 3,
      title: "Conciergerie Express",
      description: "Service de conciergerie à domicile par Oncle G Livraisons",
      image: "/images/services/conciergerie.webp",
      path: '/services/conciergerie-express',
      alt: "Conciergerie Express - Service de conciergerie à domicile par Oncle G Livraisons"
    },
    {
      id: 4,
      title: "Allô'Gaz",
      description: "Service de livraison de gaz à domicile par Oncle G Livraisons",
      image: "/images/services/gaz_3_11zon.webp",
      path: '/services/allo-gaz',
      alt: "Allô'Gaz - Service de livraison de gaz à domicile par Oncle G Livraisons"
    }
  ];

  useEffect(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Correction ici : is-visible au lieu de visible
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      }, observerOptions);

      // On récupère les éléments de la section
      const revealElements = sectionRef.current?.querySelectorAll('.reveal-element') || [];

      revealElements.forEach(el => observer.observe(el));

      return () => {
        revealElements.forEach(el => observer.unobserve(el));
      };
    }, []);

    return (
      <>
        <Helmet>
          <title>Services - Oncle G Livraisons | Solutions de Livraison à Brazzaville</title>
          <meta name="description" content="Découvrez tous les services d'Oncle G Livraisons à Brazzaville. G-PRO Illimité, G-PRO Marketing, Conciergerie Express, Allô'Gaz et plus encore. Service de livraison express avec un sourire." />
          <meta name="keywords" content="Oncle G Livraisons, services, G-PRO, G-PRO Marketing, Conciergerie Express, Allô'Gaz, livraison express, Brazzaville, service de livraison, solutions de livraison, service fiable" />
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
          <meta property="og:description" content="Découvrez tous les services d'Oncle G Livraisons à Brazzaville. G-PRO Illimité, G-PRO Marketing, Conciergerie Express, Allô'Gaz et plus encore. Service de livraison express avec un sourire." />
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
          <meta property="twitter:url" content="https://www.oncleglivraisons.com/services" />
          <meta property="twitter:title" content="Services - Oncle G Livraisons | Solutions de Livraison à Brazzaville" />
          <meta property="twitter:description" content="Découvrez tous les services d'Oncle G Livraisons à Brazzaville. G-PRO Illimité, G-PRO Marketing, Conciergerie Express, Allô'Gaz et plus encore. Service de livraison express avec un sourire." />
          <meta property="twitter:image" content="https://www.oncleglivraisons.com/assets/og-image.jpg" />
          <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />
          
          {/* Structured Data / Schema Markup */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Services - Oncle G Livraisons",
              "description": "Liste des services d'Oncle G Livraisons à Brazzaville",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "G-PRO Illimité",
                  "description": "Service de livraison professionnelle par Oncle G Livraisons"
                },
                {
                  "@type": "Service",
                  "name": "G-PRO Marketing",
                  "description": "Solution e-commerce clé en main par Oncle G Livraisons"
                },
                {
                  "@type": "Service",
                  "name": "Conciergerie Express",
                  "description": "Service de conciergerie à domicile par Oncle G Livraisons"
                },
                {
                  "@type": "Service",
                  "name": "Allô'Gaz",
                  "description": "Service de livraison de gaz à domicile par Oncle G Livraisons"
                }
              ],
              "url": "https://www.oncleglivraisons.com/services",
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
        
        <section ref={sectionRef} className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">

          {/* Colonne Gauche */}
          <div className="flex flex-col gap-6 md:gap-10 w-full md:w-1/2">
            {services.slice(0, 2).map((service, index) => (
              <div
                key={service.id}
                className={`reveal-element ${index === 0 ? 'delay-100' : 'delay-200'} group overflow-visible`}
              >
                <img
                  onClick={() => navigate(service.path)}
                  className="cursor-pointer w-full h-auto object-contain rounded-2xl  transition-all duration-300"
                  src={service.image}
                  alt={service.alt}
                />
              </div>
            ))}
          </div>

          {/* Colonne Droite */}
          <div className="flex flex-col gap-6 md:gap-10 w-full md:w-1/2 md:mt-20">
            {services.slice(2).map((service, index) => (
              <div
                key={service.id}
                className={`reveal-element ${index === 0 ? 'delay-300' : 'delay-400'} group overflow-hidden`}
              >
                <img
                  onClick={() => navigate(service.path)}
                  className="cursor-pointer w-full h-auto object-contain rounded-2xl   transition-all duration-300"
                  src={service.image}
                  alt={service.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
