import React, { useState, useEffect, useRef } from 'react'; // Ajout des hooks
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import MainCarousel from '../components/MainCarousel';
import ServicesSection from '../components/ServicesSection';
import OrderSection from '../components/OrderSection';
import CallSection from '../components/CallSection';
import PhoneContactSection from '../components/PhoneContactSection';
import ContactSection from '../components/ContactSection';
import Teams from '../components/Teams';
import Footer from '../components/Footer';
import About from '../components/About';
import StepsSection from '../components/Commander.jsx';

const HomePage = () => {

  return (
    <>
      <Helmet>
        <title>Oncle G Livraisons - Service de Livraison Express à Brazzaville | Oncle G</title>
        <meta name="description" content="Oncle G Livraisons - Leader de la livraison express à Brazzaville. Oncle G propose livraison de colis, gaz, conciergerie et e-commerce. Service rapide et fiable. Un sourire, c'est déjà une livraison réussie." />
        <meta name="keywords" content="oncle g livraisons, oncle g, livraison express brazzaville, service livraison congo, oncle g prix, livraison colis, coursier brazzaville, oncleglivraisons, livraison gaz brazzaville, conciergerie express, g-pro, livraison domicile" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/" />
        <meta property="og:title" content="Oncle G Livraisons - Service de Livraison Express à Brazzaville | Oncle G" />
        <meta property="og:description" content="Oncle G Livraisons - Leader de la livraison express à Brazzaville. Livraison de colis, gaz, conciergerie et e-commerce. Service rapide et fiable." />
        <meta property="og:image" content="https://www.oncleglivraisons.com/img/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Oncle G Livraisons - Service de livraison express à Brazzaville" />
        <meta property="og:site_name" content="Oncle G Livraisons" />
        <meta property="og:locale" content="fr_CG" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@OncleGLIVRAISON" />
        <meta property="twitter:creator" content="@OncleGLIVRAISON" />
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/" />
        <meta property="twitter:title" content="Oncle G Livraisons - Service de Livraison Express à Brazzaville | Oncle G" />
        <meta property="twitter:description" content="Oncle G Livraisons - Leader de la livraison express à Brazzaville. Livraison de colis, gaz, conciergerie et e-commerce." />
        <meta property="twitter:image" content="https://www.oncleglivraisons.com/img/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G Livraisons - Service de livraison express à Brazzaville" />

        {/* Structured Data / Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Oncle G Livraisons",
            "alternateName": "Oncle G",
            "url": "https://www.oncleglivraisons.com",
            "description": "Oncle G Livraisons - Service de livraison express à Brazzaville. Un sourire, c'est déjà une livraison réussie.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.oncleglivraisons.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-white w-full ">
        <Header />

        <main className="w-full relative">
          <MainCarousel />
        </main>


      {/* Section des services */}
      <section className="relative flex justify-center items-center h-screen w-full overflow-hidden bg-white pt-20">

          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white"></div>


          <div className="side-panel absolute -right-20 md:-right-1 md:top-1/8 top-80 transform -translate-y-1/2 flex flex-col gap-3 opacity-40 md:opacity-90 scale-50 z-0 md:scale-100 transition-all duration-300 translate-x-10 md:translate-x-0">
              <div className="flex justify-end">
                  <div className="bar bar-anim w-16 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-2">
                  <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-3">
                  <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-4 relative -left-8">
                  <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-3">
                  <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end">
                  <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end">
                  <div className="bar bar-anim w-28 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-4 relative -left-8">
                  <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-2">
                  <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-2">
                  <div className="bar bar-anim w-32 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end">
                  <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end">
                  <div className="bar bar-anim w-14 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
          </div>


          <div className="text-center flex items-center justify-center flex-col gap-2 w-full md:w-2/4 px-6 z-10 fade-in">
              <h2 className="text-4xl md:text-5xl lg:flex  font-bold uppercase tracking-wide mb-4">NOS SERVICES
                  <div className="bg-primary p-2  rotate-3">
                      <p className="text-primary-contrast font-black text-4xl leading-none text-white tracking-tighter">EXPRESS</p>
                  </div>
              </h2>

              <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4">Ǫuand l'urgence devient tranquillité</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-md mx-auto">
                  Un document à remettre, un stock à gérer, une course à effectuer ou encore une bouteille de gaz à livrer ?
              <br />
              ONCLE G Livraisons traverse la ville comme un souffle. Sa rapidité n'est pas une course, mais une mission :
              transformer votre stress en soulagement.
              </p>
          </div>

          <div className="side-panel absolute -left-8 md:-left-1 md:top-1/2 -bottom-80 rotate-180 transform -translate-y-1/2 flex flex-col gap-3 opacity-40 md:opacity-90 scale-50 z-0 md:scale-100 transition-all duration-300 -translate-x-10 md:translate-x-0">
              <div className="flex justify-end">
                  <div className="bar bar-anim w-16 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-2">
                  <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-3">
                  <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-4 relative -left-8">
                  <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-3">
                  <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end">
                  <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end">
                  <div className="bar bar-anim w-28 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-4 relative -left-8">
                  <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-2">
                  <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end gap-2">
                  <div className="bar bar-anim w-32 h-4 bg-black rounded-full animate-bar-anim"></div>
                  <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end">
                  <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
              <div className="flex justify-end">
                  <div className="bar bar-anim w-14 h-4 bg-black rounded-full animate-bar-anim"></div>
              </div>
          </div>

      </section>

      <ServicesSection />

      {/* Section "Commandez en un geste" */}
      <section className="relative flex justify-center items-center h-screen w-full overflow-hidden bg-white pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white"></div>

        {/* Right Side Animated Bars */}


                  <div className="side-panel absolute -right-20 md:-right-1 md:top-1/8 top-80 transform -translate-y-1/2 flex flex-col gap-3 opacity-40 md:opacity-90 scale-50 z-0 md:scale-100 transition-all duration-300 translate-x-10 md:translate-x-0">
                      <div className="flex justify-end">
                          <div className="bar bar-anim w-16 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                      <div className="flex justify-end gap-2">
                          <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                      <div className="flex justify-end gap-3">
                          <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                          <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                      <div className="flex justify-end gap-4 relative -left-8">
                          <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                          <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                          <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                      <div className="flex justify-end gap-3">
                          <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                          <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                      <div className="flex justify-end">
                          <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                      <div className="flex justify-end">
                          <div className="bar bar-anim w-28 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                      <div className="flex justify-end gap-4 relative -left-8">
                          <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                          <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                          <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                      <div className="flex justify-end gap-2">
                          <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                      <div className="flex justify-end gap-2">
                          <div className="bar bar-anim w-32 h-4 bg-black rounded-full animate-bar-anim"></div>
                          <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                      <div className="flex justify-end">
                          <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                      <div className="flex justify-end">
                          <div className="bar bar-anim w-14 h-4 bg-black rounded-full animate-bar-anim"></div>
                      </div>
                  </div>

        {/* Center Content */}
        <div className="text-center w-full md:w-2/4 px-6 z-10 fade-in">
          <h2 className="text-4xl lg:flex flex-col items-center justify-center md:text-5xl font-bold uppercase tracking-wide mb-4">
            <div className="bg-primary p-2 rotate-3">
              <p className="text-primary-contrast font-black text-4xl leading-none text-white tracking-tighter">COMMANDEZ </p>
            </div>
            EN UN GESTE
          </h2>

          <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4">
            Un appel, et l'histoire commence
          </h2>

          <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto">
            Pas besoin de complications. Vous commandez, ONCLE G Livraisons écoute, et déjà la magie opère. Simple, direct,
            humain : c'est ainsi que nous écrivons chacune de vos
            livraisons.
          </p>
        </div>

        {/* Left Side Animated Bars */}


        <div className="side-panel absolute -left-8 md:-left-1 md:top-1/2 -bottom-80 rotate-180 transform -translate-y-1/2 flex flex-col gap-3 opacity-40 md:opacity-90 scale-50 z-0 md:scale-100 transition-all duration-300 -translate-x-10 md:translate-x-0">
            <div className="flex justify-end">
                <div className="bar bar-anim w-16 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-3">
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-4 relative -left-8">
                <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-3">
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-28 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-4 relative -left-8">
                <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-32 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-14 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
        </div>

      </section>

      {/* Section with Steps - Increased height to allow for proper stacking effect */}
      <StepsSection />

      {/* Section "À propos" */}
      <section className="relative flex justify-center items-center h-screen w-full overflow-hidden bg-white pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white"></div>

        {/* Right Side Animated Bars */}
        <div className="side-panel absolute -right-20 md:-right-1 md:top-1/8 top-80 transform -translate-y-1/2 flex flex-col gap-3 opacity-40 md:opacity-90 scale-50 z-0 md:scale-100 transition-all duration-300 translate-x-10 md:translate-x-0">
            <div className="flex justify-end">
                <div className="bar bar-anim w-16 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-3">
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-4 relative -left-8">
                <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-3">
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-28 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-4 relative -left-8">
                <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-32 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-14 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
        </div>



        {/* Center Content */}
        <div className="text-center w-full md:w-2/4 px-6 z-10 fade-in">
          <header className="mb-24 text-center">
            <h2 className="text-4xl lg:flex items-center justify-center lg:text-6xl font-bold uppercase tracking-wide mb-4"> À
              <div className="bg-primary p-2 rotate-3">
                <p className="text-primary-contrast font-black text-4xl lg:text-6xl leading-none text-white tracking-tighter">PROPOS</p>
              </div>
            </h2>

            <h1 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">L'Esprit Oncle G</h1>
          </header>
        </div>

        {/* Left Side Animated Bars */}

        <div className="side-panel absolute -left-8 md:-left-1 md:top-1/2 -bottom-80 rotate-180 transform -translate-y-1/2 flex flex-col gap-3 opacity-40 md:opacity-90 scale-50 z-0 md:scale-100 transition-all duration-300 -translate-x-10 md:translate-x-0">
            <div className="flex justify-end">
                <div className="bar bar-anim w-16 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-3">
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-4 relative -left-8">
                <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-3">
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-28 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-4 relative -left-8">
                <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-32 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-14 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
        </div>

      </section>

      <About />

      {/* Section "Communauté" */}
      <section className="relative flex justify-center items-center h-screen w-full overflow-hidden bg-white pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white"></div>

        {/* Right Side Animated Bars */}
        <div className="side-panel absolute -right-20 md:-right-1 md:top-1/8 top-80 transform -translate-y-1/2 flex flex-col gap-3 opacity-40 md:opacity-90 scale-50 z-0 md:scale-100 transition-all duration-300 translate-x-10 md:translate-x-0">
            <div className="flex justify-end">
                <div className="bar bar-anim w-16 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-3">
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-4 relative -left-8">
                <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-3">
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-28 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-4 relative -left-8">
                <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-32 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-14 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
        </div>



        {/* Center Content */}
        <div className="text-center w-full md:w-2/4 px-6 z-10 fade-in">
          <h2 className="text-4xl lg:flex items-center justify-center lg:text-6xl font-bold uppercase tracking-wide mb-4"> la
            <div className="bg-primary p-2 rotate-3">
              <p className="text-primary-contrast font-black lg:text-6xl leading-none text-white tracking-tighter">Communauté</p>
            </div>
          </h2>

          <h1 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4"> Histoires de Clients</h1>
        </div>

        {/* Left Side Animated Bars */}

        <div className="side-panel absolute -left-8 md:-left-1 md:top-1/2 -bottom-80 rotate-180 transform -translate-y-1/2 flex flex-col gap-3 opacity-40 md:opacity-90 scale-50 z-0 md:scale-100 transition-all duration-300 -translate-x-10 md:translate-x-0">
            <div className="flex justify-end">
                <div className="bar bar-anim w-16 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-3">
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-4 relative -left-8">
                <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-3">
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-20 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-28 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-4 relative -left-8">
                <div className="bar bar-anim w-10 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-40 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-6 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end gap-2">
                <div className="bar bar-anim w-32 h-4 bg-black rounded-full animate-bar-anim"></div>
                <div className="bar bar-anim w-8 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-24 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
            <div className="flex justify-end">
                <div className="bar bar-anim w-14 h-4 bg-black rounded-full animate-bar-anim"></div>
            </div>
        </div>
      </section>

       <OrderSection />

      <ContactSection />
      <Teams />
      <Footer />
    </div>
    </>
  );
};

export default HomePage;
