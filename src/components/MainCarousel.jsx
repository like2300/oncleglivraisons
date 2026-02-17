
import React, { useState, useEffect, useRef } from 'react';

/**
 * Données du Carousel avec Images Unsplash
 */

 const SLIDES_DATA = [
   {
     id: 1,
     title: (
       <>
         Un sourire, <br />
         c'est déjà une <br />
         <span className="text-primary">livraison réussie</span>
       </>
     ),
     description: (
       <>
         Avant même d'arriver à votre porte, <br />
         <strong className="text-primary">ONCLE G Livraisons</strong> vous offre
         un sourire. C'est sa manière de dire que chaque trajet est une promesse
         tenue. Dans une ville où le rythme est parfois effréné, ce sourire
         devient un repère, une certitude que votre quotidien sera allégé.
       </>
     ),
     fullText: "Un sourire, c'est déjà une livraison réussie.\n ONCLE G Livraisons vous offre un service fiable et attentionné. Avant même d'arriver à votre porte, ONCLE G Livraisons vous offre un sourire. C'est sa manière de dire que chaque trajet est une promesse tenue. Dans une ville où le rythme est parfois effréné, ce sourire devient un repère, une certitude que votre quotidien sera allégé. Chez Oncle G Livraisons, nous croyons que chaque livraison est une opportunité de créer un lien humain.",
     img: "/images/services/individuel/freepik__ultrarealistic-8k-photo-of-a-black-african-chef-mi__15790 2_11zon.jpg",
     overlayTitle: "Service Oncle G",
     style: { width: '65%', top: '0px', zIndex: 1 }
   },
   {
     id: 2,
     title: (
       <>
         Vos rues sont <br />
         <span className="text-primary">nos racines</span>
       </>
     ),
     description: (
       <>
         <strong className="text-primary">ONCLE G Livraisons</strong> est né dans
         les ruelles de Brazzaville. Des collines de NGANGA-LINGOLO aux marchés de
         NDJIRI, nous connaissons chaque détour, chaque ambiance. Ce n'est pas
         seulement un service : c'est une déclaration d'amour à la ville et à ses
         habitants
       </>
     ),
     fullText: "ONCLE G Livraisons est né dans les ruelles de Brazzaville. Des marchés de Poto-Poto aux avenues de Bacongo, nous connaissons chaque détour, chaque ambiance. Ce n'est pas seulement un service : c'est une déclaration d'amour à la ville et à ses habitants.",
   img: "/images/services/individuel/freepik__ultrarealistic-8k-photo-of-a-black-african-deliver__15783 2_11zon.jpg",
     overlayTitle: "Nos Racines",
     style: { width: '82.5%', top: '40px', zIndex: 2 }
   },
   {
     id: 3,
     title: (
       <>
         Moins de soucis,
         <br />
         <span className="text-primary">plus de vie</span>
       </>
     ),
     description: (
       <>
         Chaque minute compte. <br />
         <strong className="text-primary">ONCLE G Livraisons </strong> transforme
         vos besoins en instants de sérénité. Plus besoin de courir, de jongler
         avec les imprévus : nous faisons le chemin pour vous, afin que vous
         puissiez profiter pleinement de vos journées.
       </>
     ),
     fullText: "Chaque minute compte. ONCLE G Livraisons transforme vos besoins en instants de sérénité. Plus besoin de courir, de jongler avec les imprévus : nous faisons le chemin pour vous, afin que vous puissiez profiter pleinement de vos journées.",
     img: "/images/services/individuel/freepik__photo-ultraraliste-en-8k-dune-dame-de-47-ans-habil__15793 2_11zon.jpg",
     overlayTitle: "Sérénité",
     style: { width: '100%', top: '80px', zIndex: 3 }
   },
   {
     id: 4,
     title: "",
     description: "",
     fullText: "",
     img: "https://like2300.github.io/Oncle-g/img/optimized/background.webp",
     overlayTitle: "",
     style: { width: '100%', top: '80px', zIndex: 4 }
   }
 ];

const MainCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(3); // Commence au slide 4 (index 3)
  const [overlayOpen, setOverlayOpen] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const autoSlideRef = useRef(null);
  const overlayTimeoutRef = useRef(null);

  // Gestion du chargement des images
  useEffect(() => {
    SLIDES_DATA.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, slide.id]));
      };
    });
  }, []);

  // Logique de l'auto-slide
  const startAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      if (overlayOpen === null) {
        nextSlide();
      }
    }, 8000);
  };

  const pauseAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };

  const resumeAutoSlide = () => {
    if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
    overlayTimeoutRef.current = setTimeout(() => {
      if (!autoSlideRef.current) {
        startAutoSlide();
      }
    }, 5000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startAutoSlide();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (overlayOpen !== null) {
      pauseAutoSlide();
    } else {
      resumeAutoSlide();
    }
    return () => {
        if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
    };
  }, [overlayOpen]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);

  const goToSlide = (index) => {
    pauseAutoSlide();
    setCurrentSlide(index);
    resumeAutoSlide();
  };

  const toggleOverlay = (index, isOpen) => {
    setOverlayOpen(isOpen ? index : null);
  };

  // Styles dynamiques avec alignement centré corrigé
  const getSlideStyle = (index) => {
    const total = SLIDES_DATA.length;
    const isActive = index === currentSlide;
    const isPrev = index === (currentSlide - 1 + total) % total;
    const isPrev2 = index === (currentSlide - 2 + total) % total;

    // Base styles
    let style = {
      transition: 'all 0.5s ease-in-out',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(63, 55, 0, 0.4)), url('${SLIDES_DATA[index].img}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // Correction de l'alignement horizontal
      left: '50%',
      transform: 'translateX(-50%)',
      marginLeft: '0', // Pour éviter tout conflit avec les classes Tailwind
    };

    if (isActive) {
      return { ...style, width: '100%', top: '80px', zIndex: 4, display: 'block' };
    } else if (isPrev) {
      const gradient = index === 2 ? 'linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.4))' : 'linear-gradient(rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.4))';
      return { ...style, width: '86.6%', top: '53px', zIndex: 3, display: 'block', backgroundImage: `${gradient}, url('${SLIDES_DATA[index].img}')` };
    } else if (isPrev2) {
      return { ...style, width: '73.3%', top: '26px', zIndex: 2, display: 'block' };
    } else {
      return { ...style, width: '60%', top: '0px', zIndex: 1, display: 'block' };
    }
  };

  return (
    <>
      {/* Lien pour les icônes Material Symbols */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <style>{`
        /* Définition de la couleur primaire si non configurée dans Tailwind */
        .text-primary {
          color: #FACC15; /* Jaune-400 Tailwind */
        }

        /* Masquer la scrollbar */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Blur pour le chargement */
        .blur-up {
          filter: blur(10px);
          transform: translateX(-50%) scale(0.98); /* Garde l'alignement pendant le blur */
          transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        .blur-up.loaded {
          filter: blur(0);
          transform: translateX(-50%) scale(1);
        }
        .bg-loading {
          background-color: #1f2937; /* Gris foncé pour le fond de chargement */
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .main-slider-container { width: 90vw; height: 70vh; }
          .slide-content-text { max-width: 60%; }
        }

        @media (max-width: 768px) {
          .main-slider-container { width: 95vw; height: 60vh; border-radius: 24px; }
          .slide-content-text { max-width: 100%; }
          .slide-title { font-size: 1.8rem; }
          .slide-description { font-size: 0.9rem; }
        }

        @media (max-width: 480px) {

          .card-stack { height: 60vh !important; }
          .main-slider-container { width: 100vw; height: 60vh; border-radius: 20px; }
          .slide-title { font-size: 1.5rem; }
          .slide-description { font-size: 0.8rem; }
        }

        @media (max-width: 360px) {
          .card-stack { height: 65vh !important; }
          .main-slider-container { height: 65vh !important; }
        }
      `}</style>

      <main className="flex-grow relative w-full flex items-center justify-center ">
        {/* CONTAINER DU SLIDER */}
        <div className="card-stack main-slider-container relative w-full h-[750px] sm:h-[800px] md:h-[750px] lg:h-[800px] max-w-[1600px] mx-auto mt-4 overflow-visible p-2 sm:p-4">

          {/* LISTE DES CARTES */}
          {/* h-[121%] permet d'afficher les cartes qui "montent" (top: 0, 26, 53, 80) */}
          <ul className="relative w-full h-[121%] md:h-full">
            {SLIDES_DATA.map((slide, index) => {
              const isActive = index === currentSlide;
              const styles = getSlideStyle(index);
              const isLoaded = loadedImages.has(slide.id);
              const isOverlayOpen = overlayOpen === index;

              return (
                <li
                  key={slide.id}
                  // Retiré 'left-0 right-0 mx-auto' ici car géré par style inline pour plus de précision
                  className={`carousel-slide group absolute list-none rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden h-full cursor-default bg-cover bg-center bg-no-repeat ${isLoaded ? 'blur-up loaded' : 'blur-up bg-loading'}`}
                  style={styles}
                >
                  {/* Overlay de dégradé */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  {/* POPUP OVERLAY */}
                  <div
                    className={`hover-overlay absolute inset-0 bg-black/95 flex flex-col items-center justify-center z-50 px-8 transition-opacity duration-300 ${
                      isOverlayOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="text-content text-center w-full max-w-3xl max-h-full overflow-y-auto no-scrollbar py-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 uppercase">{slide.overlayTitle}</h2>
                      <p className="text-sm text-gray-200 leading-relaxed text-justify whitespace-pre-line">
                        {slide.fullText}
                      </p>
                      <button
                        onClick={() => toggleOverlay(index, false)}
                        className="mt-8 px-6 py-2 bg-primary text-black font-bold uppercase rounded-full hover:bg-yellow-400 transition-colors"
                        style={{backgroundColor: '#FACC15'}} // Force la couleur de fond si bg-primary n'est pas définie
                      >
                        <span className="material-symbols-outlined mr-2 inline align-middle">close</span> Fermer
                      </button>
                    </div>
                  </div>

                  {/* CONTENU TEXTE */}
                  <div className="absolute inset-0 flex flex-col justify-end md:justify-between items-start px-4 sm:px-6 md:px-8 pb-24 sm:pb-28 md:pb-16 z-10 pointer-events-none">
                    <div className="w-full md:w-auto transition-all duration-500 text-left mb-4 md:mb-0 md:mt-10 md:ml-12">
                      <h1 className={`text-xl italic sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold uppercase tracking-wider leading-tight drop-shadow-xl mb-4 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        {slide.title}
                      </h1>
                    </div>

                    <div className={`max-w-xs sm:max-w-sm md:max-w-md text-gray-200 text-sm sm:text-base md:text-lg font-light leading-relaxed drop-shadow-md text-left lg:text-right md:text-left lg:ml-auto mb-6 transition-all duration-500 ${isActive ? 'block' : 'hidden'}`}>
                      <p className="text-start italic lg:text-right md:text-left line-clamp-3 mb-6 sm:line-clamp-3 md:line-clamp-none">
                        {slide.description}
                      </p>
                      {slide.id !== 4 && (
                      <button
                        onClick={() => toggleOverlay(index, true)}
                        className="lire-plus-btn mt-2 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center pointer-events-auto lg:hidden md:text-right"
                      >
                        Lire la suite
                        <span className="material-symbols-outlined text-primary rotate-45 align-middle ml-1">arrow_forward</span>
                      </button>
                      )}
                    </div>
                  </div>

                  {/* CONTROLES */}
                  {slide.id !== 4 && (
                  <div className="controls-overlay absolute bottom-6 left-0 w-full px-6 md:px-12 flex justify-between items-center pointer-events-none z-50">
                    <div className="dots flex items-center gap-4 pointer-events-auto pl-4">
                        {SLIDES_DATA.map((_, dotIndex) => (
                            <div
                                key={dotIndex}
                                onClick={() => goToSlide(dotIndex)}
                                className={`cursor-pointer transition-all duration-300 hover:scale-125 border-2 rounded-full ${
                                    dotIndex === currentSlide
                                    ? 'bg-black border-yellow-400 w-6 h-3'
                                    : 'bg-transparent border-white/40 w-3 h-3'
                                }`}
                                style={dotIndex === currentSlide ? {borderColor: '#FACC15'} : {}}
                            />
                        ))}
                    </div>
                    <div className="nav-controls flex items-center bg-black/70 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full gap-5 pointer-events-auto shadow-2xl hover:bg-black/90 transition-colors">
                      <button
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="arrow-btn-prev w-9 h-9 border border-white/30 text-white rounded-full flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition-all"
                        style={{':hover': {borderColor: '#FACC15', color: '#FACC15'}}}
                      >
                        <span className="material-symbols-outlined text-base align-middle">arrow_back_ios_new</span>
                      </button>
                      <span className="counter text-white font-bold font-mono text-sm md:text-base tracking-widest">
                        {currentSlide + 1}/{SLIDES_DATA.length}
                      </span>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="arrow-btn-next w-9 h-9 border border-white/30 text-white rounded-full flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition-all"
                      >
                        <span className="material-symbols-outlined text-base align-middle">arrow_forward_ios</span>
                      </button>
                    </div>
                  </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default MainCarousel;
