import React from 'react';

const StepsSection = () => {
  const steps = [
    {
      id: "01",
      title: "SUIVI EN TEMPS RÉEL",
      subtitle: "Votre livraison Oncle G Livraisons, comme un conte en direct",
      description: "Vous voyez chaque étape de votre livraison Oncle G Livraisons, comme si vous suiviez un récit qui se déroule sous vos yeux. La transparence est notre manière de vous inclure dans l’histoire. Chez Oncle G Livraisons, nous croyons en la transparence totale de nos services.",
      image: "https://like2300.github.io/Oncle-g/optimized_gifs/optimized_gif_maps.gif",
      bgColor: "bg-white",
      textColor: "text-black",
      borderColor: "border-gray-200",
      stickyTop: "top-20",
      isReverse: false
    },
    {
      id: "02",
      title: "REMISE EN MAIN PROPRE",
      subtitle: "Un moment attendu, une promesse Oncle G Livraisons tenue",
      description: "Ǫuand ONCLE G Livraisons frappe à votre porte, c’est la conclusion heureuse de chaque récit. Une poignée de main, un sourire, et votre quotidien est simplifié. Chez Oncle G Livraisons, nous nous engageons à vous fournir un service de qualité avec une remise en main propre garantie.",
      image: "https://like2300.github.io/Oncle-g/optimized_gifs/optimized_gif__scene__202602011102.gif",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      borderColor: "border-zinc-700",
      stickyTop: "top-32",
      isReverse: true // Image à gauche sur PC
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-20">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`sticky ${step.stickyTop} z-10 ${step.bgColor} ${step.textColor} rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col ${step.isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} h-[550px] md:h-[500px] p-4 border-2 ${step.borderColor} transition-transform duration-500`}
        >
          {/* Zone Image / GIF */}
          <div className="md:w-1/2 h-2/5 md:h-full relative overflow-hidden rounded-[2rem]">
            <img
              src={step.image}
              alt={step.title}
              className={`absolute inset-0 w-full h-full object-cover ${step.id === "02" ? 'grayscale hover:grayscale-0 transition-all duration-700' : ''}`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className={`absolute bottom-6 ${step.isReverse ? 'right-6' : 'left-6'} ${step.id === "01" ? 'bg-black text-white' : 'bg-primary text-black'} text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full`}>
              Étape {step.id}
            </div>
          </div>

          {/* Zone Texte */}
          <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-16">
            <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase leading-none tracking-tighter">
              {step.title}
            </h3>
            <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
              {step.subtitle}
            </span>
            <p className={`${step.id === "01" ? 'text-gray-600' : 'text-gray-400'} text-sm md:text-base leading-relaxed font-light`}>
              {step.description}
            </p>
          </div>
        </div>
      ))}

      {/* CARTE FINALE : APPEL À L'ACTION (CTA) */}
      <div className="sticky top-44 z-20 bg-primary rounded-[2.5rem] shadow-2xl p-8 md:p-20 border-14 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-black text-black mb-6 uppercase tracking-tighter leading-[0.9]">
            Prêt à <span className="text-white">simplifier</span> <br /> votre vie avec <span className="text-white">Oncle G Livraisons</span> ?
          </h2>
          <p className="text-black/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
            Rejoignez la famille ONCLE G Livraisons aujourd'hui et découvrez comment un simple sourire peut transformer votre quotidien à Brazzaville.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+242066338224"
              className="group bg-black text-primary px-10 py-5 rounded-full text-xl font-black uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-xl w-full sm:w-auto justify-center"
            >
              <span>Appelez Oncle G Livraisons</span>
              <span className="material-symbols-outlined hidden lg:block group-hover:rotate-12 transition-transform">phone</span>
            </a>
            <a
              href="/contacts"
              className="bg-white/20 backdrop-blur-md border-2 border-black text-black px-10 py-5 rounded-full text-lg font-bold uppercase hover:bg-white transition-all w-full sm:w-auto"
            >
              Contactez-nous
            </a>
          </div>

          {/* Badges de réassurance
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-black font-black uppercase text-xs tracking-widest">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined">check_circle</span> Service 24/7 Oncle G Livraisons</div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined">check_circle</span> 100% Brazzaville</div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined">check_circle</span> Livraisons fiables</div>
            </div> */}
        </div>
      </div>
    </section>
  );
};
export default StepsSection;
