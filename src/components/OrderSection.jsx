import React, { useEffect, useRef, useState } from 'react';

const OrderSection = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);

  // Logique d'animation au scroll
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = sectionRef.current?.querySelectorAll('.reveal-element') || [];
    revealElements.forEach(el => observer.observe(el));

    return () => revealElements.forEach(el => observer.unobserve(el));
  }, []);

  // Gestion de la visibilité du bouton précédent
  const handleScroll = () => {
    if (sliderRef.current) {
      setShowPrev(sliderRef.current.scrollLeft > 100);
    }
  };

  // Fonction de scroll manuel
  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  return (
    <div ref={sectionRef} className="w-full py-10 md:py-20 bg-black relative overflow-hidden">

      {/* Bouton de navigation gauche */}
      {showPrev && (
        <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-24 md:w-40 z-20 flex items-center justify-start pl-4 md:pl-10">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <button
            onClick={scrollPrev}
            className="relative w-14 h-14 bg-yellow-400/10 backdrop-blur-xl border border-yellow-400/30 rounded-full flex items-center justify-center shadow-2xl pointer-events-auto hover:bg-yellow-400 hover:scale-110 transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 group-hover:text-black transition-colors rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      )}

      {/* Slider Horizontal */}
      <div
        id="slider"
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex overflow-x-scroll space-x-6 px-6 md:px-20 no-scrollbar snap-x snap-mandatory"
      >

        {/* CARTE 01 */}
        <div className="flex-shrink-0 w-[85%] md:w-3/4 lg:w-2/3 relative group overflow-hidden rounded-[2.5rem] reveal-element snap-start">
          <img
            src="/images/temoignages/output_reduced.gif"
            alt="Témoignages communauté"
            className="w-full md:h-[700px] h-[580px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-10 left-6 md:left-10 right-6 md:right-10">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest block mb-2">Chapitre 01</span>
            <h4 className="text-3xl md:text-5xl font-black text-white uppercase leading-none mb-4">
                Chaque livraison <br/><span className="text-yellow-400">est un chapitre</span>
            </h4>
            <p className="text-gray-300 max-w-lg text-sm md:text-base leading-relaxed font-light">
              Une maman qui reçoit son panier à temps, un étudiant qui obtient ses documents... Ces récits sont la preuve vivante de notre mission.
            </p>
          </div>
        </div>

        {/* CARTE 02 */}
        <div className="flex-shrink-0 w-[85%] md:w-3/4 lg:w-2/3 relative group overflow-hidden rounded-[2.5rem] reveal-element delay-200 snap-start">
          <img
            src="/images/temoignages/gpt-image-1.5-high-fidelity_a_retire_le_texte_oncl.png"
            alt="Partenariats locaux"
            className="w-full md:h-[700px] h-[580px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-10 left-6 md:left-10 right-6 md:right-10">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest block mb-2">La Voix des Quartiers</span>
            <h4 className="text-3xl md:text-5xl font-black text-white uppercase leading-none mb-4">
                Brazzaville raconte <br/><span className="text-yellow-400">Oncle G</span>
            </h4>
            <p className="text-gray-300 max-w-sm text-sm md:text-base leading-relaxed font-light">
              De Bacongo à Moungali, les habitants témoignent. Chaque quartier a sa voix, chaque voix raconte comment Oncle G simplifie la vie.
            </p>
          </div>
        </div>

        {/* CARTE 03 (CTA) */}
        <div className="flex-shrink-0 w-[85%] md:w-3/4 lg:w-2/3 relative group overflow-hidden rounded-[2.5rem] border-2 border-dashed border-zinc-800 reveal-element delay-400 snap-start">
          <img
            src="/images/temoignages/gpt-image-1.5-high-fidelity_a_mes_le_au_forma_inst.png"
            alt="Engagement communauté"
            className="w-full md:h-[700px] h-[580px] object-cover opacity-30 transition-opacity"
          />
          <div className="absolute bottom-10 left-6 md:left-10 right-6 md:right-10">
            <h4 className="text-4xl md:text-7xl font-black text-white uppercase leading-none mb-6">
                Partagez <br/><span className="text-yellow-400">votre histoire</span>
            </h4>
            <p className="text-gray-400 max-w-md mb-8 font-light italic">
              Vous aussi, écrivez votre chapitre. Chaque témoignage enrichit le grand livre d'ONCLE G Livraisons.
            </p>
            <a href="https://wa.me/242066338224" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black font-black uppercase tracking-widest px-8 py-4 rounded-full hover:bg-yellow-400 transition-all active:scale-95">
                Écrire à l'Oncle
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Bouton de navigation droite */}
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-24 md:w-40 z-20 flex items-center justify-end pr-4 md:pr-10">
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent"></div>
        <button
          className="relative w-14 h-14 bg-yellow-400/10 backdrop-blur-xl border border-yellow-400/30 rounded-full flex items-center justify-center shadow-2xl pointer-events-auto hover:bg-yellow-400 hover:scale-110 transition-all group"
          onClick={scrollNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default OrderSection;
