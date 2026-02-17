import React from 'react';

const CallSection = () => {
  return (
    <header className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 md:gap-12">
        <div className="relative z-10 w-full">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-6 reveal-element delay-100">
            Appelez<br/>
            <span className="relative inline-block">
              l'Oncle.
              <span className="absolute bottom-1 md:bottom-3 left-0 w-full h-2 md:h-4 bg-yellow-400 -z-10 opacity-60"></span>
            </span>
          </h1>
        </div>

        <div className="lg:max-w-md lg:mb-8 w-full reveal-element delay-200">
          <div className="border-l-2 border-yellow-400 pl-6 py-2">
            <p className="text-xl md:text-2xl font-light italic leading-relaxed text-gray-800">
              "Le service n'est pas une fonction, c'est une attitude. Celle d'un proche qui veille sur vous."
            </p>
            <p className="mt-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
              L'esprit de famille — Est. <script> document.write( new Date().getFullYear() ) </script>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CallSection;