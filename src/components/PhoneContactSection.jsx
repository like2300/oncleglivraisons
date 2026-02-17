import React from 'react';

const PhoneContactSection = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 border-t border-b border-gray-200 reveal-element delay-300">
        <div className="bg-white p-8 md:p-12 lg:p-20 flex flex-col justify-between group hover:bg-gray-50 transition-colors duration-500 min-h-[300px]">
          <div>
            <span className="text-yellow-600 font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2">
              <span className="w-6 md:w-8 h-px bg-yellow-600 inline-block"></span>
              Immédiat
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 md:mt-6 uppercase leading-tight">Des numéros,<br /> des solutions</h2>
            <p className="font-light text-gray-500 mt-4 md:mt-8 text-lg md:text-xl leading-relaxed max-w-sm">
              Un coup de fil suffit. Derrière la ligne, une voix rassurante qui prend en charge vos besoins. Déjà, <br /> Oncle G Livraisons est en route.
            </p>
          </div>
          <div className="mt-12 md:mt-20">
            <a href="tel:+242066338224" className="block text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter hover:text-primary transition-colors break-words">
              +242 066 33 82 24
            </a>
            <a href="tel:+242055600366" className="block text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter hover:text-primary transition-colors break-words">
              +242 055 60 03 66
            </a>
            <span className="text-xs text-gray-400 uppercase tracking-widest mt-2 block md:hidden">Touchez pour appeler</span>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 lg:p-20 flex flex-col justify-between group hover:bg-gray-50 transition-colors duration-500 min-h-[300px]">
          <div>
            <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2">
              <span className="w-6 md:w-8 h-px bg-gray-400 inline-block"></span>
              ÉCRIVEZ-LUI !
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 md:mt-6 uppercase leading-tight">Chaque message est une lettre d'un proche</h2>
            <p className="font-light text-gray-500 mt-4 md:mt-8 text-lg md:text-xl leading-relaxed max-w-sm">
              Nous lisons vos mots avec soin, comme si vous écriviez à un membre de la famille. La réponse est toujours humaine, jamais automatique.
            </p>
          </div>
          <div className="mt-12 md:mt-20">
            <a href="mailto:contact@oncleg.com" className="group/btn inline-flex items-center gap-2 md:gap-4 text-lg md:text-xl font-bold uppercase tracking-widest">
              <span className="border-b-2 border-black group-hover/btn:border-primary transition-all pb-1">Envoyer un mot</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-2 transition-transform text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 border-b border-gray-200 reveal-element">
        <div>
          <h2 className="text-xl md:text-2xl font-black uppercase">REJOIGNEZ-LE !</h2>
          <span className="text-gray-500 text-xs md:text-sm italic mt-1">Chaque contact est une rencontre</span>
          <p className="font-light text-gray-500 italic mt-1">ONCLE G Livraisons n'est pas seulement un service, c'est une communauté.<br /> En nous écrivant, vous entrez dans une famille qui grandit avec vous.</p>
        </div>
        <a href="https://whatsapp.com/channel/0029Vb6g9OgLdQeVgMM2q80X" className="w-full md:w-auto text-center px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-colors duration-300 shadow-lg">
          Nous rejoindre
        </a>
      </div>
    </main>
  );
};

export default PhoneContactSection;