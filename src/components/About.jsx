import React, { useEffect, useRef } from 'react';

const timelineData = [
  {
    id: "01",
    title: "NOTRE HISTOIRE",
    subtitle: "Un service de livraison né d’une idée simple : servir comme un oncle.",
    description: "ONCLE G Livraisons est né de l'envie de transformer la livraison en un geste de famille. Ici, pas de distance froide : chaque trajet est une preuve d'attention, chaque client est un proche. Chez Oncle G Livraisons, nous pensons que chaque livraison est une opportunité de créer un lien humain.",
    reverse: true
  },
  {
    id: "02",
    title: "NOS VALEURS",
    subtitle: "Proximité, fiabilité, fierté locale.",
    description: "Ces trois piliers guident chaque pas d’Oncle G Livraisons. Nous croyons que la livraison n’est pas seulement logistique, mais un acte de confiance et de fierté pour Brazzaville. Chez Oncle G Livraisons, nous mettons l'humain au cœur de chaque service.",
    reverse: false
  },
  {
    id: "03",
    title: "NOTRE ÉQUIPE",
    subtitle: "Une famille de Livreurs, unie par le cœur.",
    description: "Derrière Oncle G Livraisons, une équipe soudée qui connaît Brazzaville comme sa poche. Chaque livreur est un ambassadeur de proximité, portant la même mission : servir avec du cœur. Chez Oncle G Livraisons, nous sommes fiers de notre équipe de professionnels dévoués.",
    reverse: true
  }
];

export default function About() {
  const sectionRef = useRef(null);

  const Gotwhatsapp = () => {
    return (
      window.location.href = "https://wa.me/+242066338224"
    );
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          // --- VIBRATION MOBILE ---
          if ("vibrate" in navigator) {
            navigator.vibrate(20); // Petite vibration moteur quand un point est atteint
          }
          // Ajout classe vibration visuelle
          entry.target.classList.add('moto-vibration');
          setTimeout(() => entry.target.classList.remove('moto-vibration'), 300);

        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.2 });

    const revealElements = sectionRef.current.querySelectorAll('.reveal-element');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden bg-white">
      <div className="lg:hidden block px-6 relative">

        {/* LA LIGNE DE MOTO (La route) */}
        <div className="timeline-path hidden md:block md:left-1/2"></div>
        <div className="timeline-path left-[26px] md:hidden"></div>

        <div className="relative mt-12 max-w-6xl mx-auto">
          {timelineData.map((item) => (
            <div
              key={item.id}
              className={`relative mb-32 flex items-center justify-between w-full flex-col md:flex-row${item.reverse ? '-reverse' : ''} reveal-element`}
            >
              {/* Point de passage (Le pneu) */}
              <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-400 rounded-full border-[3px] border-black z-20 reveal-element delay-200"></div>

              <div className="hidden md:block w-5/12"></div>

              <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${item.reverse ? 'md:text-right' : 'md:text-left'}`}>
                <span className="text-4xl font-black text-gray-200 mb-2 block reveal-element delay-100 font-mono tracking-tighter">
                    {item.id}
                </span>
                <h3 className="text-2xl text-black font-black mb-2 uppercase italic reveal-element delay-200">
                    {item.title}
                </h3>
                <p className="text-primary font-bold text-sm mb-4 reveal-element delay-300">
                    {item.subtitle}
                </p>
                <p className="text-gray-500 leading-relaxed reveal-element delay-400 text-sm antialiased">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-10 text-center reveal-element">
          <div className="inline-block border-2 border-black p-8 rounded-[2rem] bg-yellow-400/5 group">
            <p className="text-[10px] uppercase font-black tracking-widest text-black/40">Prêt pour la route ?</p>
            <button onClick={Gotwhatsapp} className="mt-4 px-10 py-4 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-yellow-400 hover:text-black transition-all shadow-[0_10px_0_rgb(0,0,0,0.2)] active:shadow-none active:translate-y-1">
              Commander une livraison
            </button>
          </div>
        </footer>
        <div className="h-24"></div>
      </div>

      <div className="hidden lg:block w-full">
         <object data="/assets/section/PROPOS.svg" type="image/svg+xml" className="w-full h-auto">
           <img src="/assets/section/PROPOS.svg" alt="Oncle G Propos" className="w-full h-auto" />
         </object>
      </div>
    </div>
  );
}
