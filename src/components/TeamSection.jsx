import React, { useState } from 'react';

const TeamSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);


  const teamMembers = [
    {
      id: 1,
      name: "Alsie Davih NKAKOU MAKOSSO",
      description: "Habitué aux environnements exigeants, je pilote les opérations avec calme, précision et sens des responsabilités. Mon sens de l’organisation et ma constance permettent à l’équipe d’avancer efficacement, même sous pression.",
      image: "/images/team/WhatsApp Image 2026-02-09 at 13.17.34.jpeg",
      shortDescription: "Habitué aux environnements   ..."
    },
    {
      id: 2,
      image: "/images/team/WhatsApp Image 2026-02-09 at 11.25.24.jpeg",
      name: "Christy Noëlly GALOY",
      description: "De la médecine à l’écriture, mon parcours atypique a façonné mon sens du détail. Alors je sais que excellence rime avec exigence. Mais bien que l’équipe m’ait surnommée l’IA, j’humanise nos services avec ma voix et ma plume. Et, je mets du coeur à traduire l’énergie Oncle G Livraisons en expériences clients fiables et mémorables. Pour moi, la réussite se mesure plus à ce que l’on devient, qu’à ce que l’on obtient.",
      shortDescription: " Actuellement chez Oncle ,..."
    },



    {
      id: 3,
      name: "Melchi Colombe BAILLET",
      description: " J’aime quand tout roule, mais je garde toujours un œil ouvert pour trouver la meilleure solution quand un imprévu se glisse. Pour moi, chaque livraison réussie est une petite victoire, et je me sens fier quand les clients repartent satisfaits.",
      image: "/images/team/PHOTO-2026-02-15-10-09-55.jpg",
      shortDescription: "Spécialiste de la relation client..."
    },

   {
      id: 4,
      name: "Noël MIYOUNA ",
      description: "Je ne suis pas bavard, mais j’écoute les moteurs et ils me disent tout.Pour moi chaque moto Oncle G LIVRAISONS remise sur la route, est une victoire car chaque  client satisfait est une preuve que mon travail compte.",
      image: "/images/team/WhatsApp Image 2026-02-09 at 12.37.32(1).jpeg",
      shortDescription: "Je ne suis pas bavard, mais ..."
    },



    {
      id: 5,
      image: "/images/team/WhatsApp Image 2026-02-09 at 12.49.21.jpeg",
      name: "Arnaël Ruben KODIA",
      description: " Actuellement chez Oncle G LIVRAISONS, je façonne la logistique à l’ère du numérique en transformant des chaînes complexes en trajectoires fluides et des données en leviers de croissance. Logisticien par expérience, Directeur Financier par vision, je relie la rigueur des chiffres à la créativité des idées pour bâtir des solutions audacieuses et durables.",
      shortDescription: " Actuellement chez Oncle  ..."

    },
    {
      id: 6,
      name: "SéraphinOFOULAKOUA MABOUBA  Joan ",
      description: " J’ai forgé ma fibre commerciale en transformant la vente en une véritable analyse stratégique des besoins clients. Comprendre l’organisation et le suivi de portefeuille de la prospection à la clôture, allier la stratégie commerciale et l’efficacité de la logistique pour maximiser la chaîne de la valeur du service.",
      image: "/images/team/WhatsApp Image 2026-02-09 at 11.25.23.jpeg",
      shortDescription: "J’ai forgé ma fibre commercial..."
    },
    {
      id: 7,
      name: "Van NDALLA",
      description: "  Toujours matinal, et prêt avant que la journée ne commence. J’aime que les choses soient faites correctement et dans les temps  Pour moi, être fiable, c’est plus qu’une qualité : c’est une façon de travailler avec sérieux et respect pour les autres. Chaque livraison réussie me rappelle que la confiance se construit au quotidien.",
      image: "/images/team/PHOTO-2026-02-15-19-07-02.jpg",
      shortDescription: "Habitué aux environnements   ..."
    },
    {
      id: 8,
      name: "TYLER MBOUMBA PAMBOU",
      description: " J’aime écouter, comprendre et accompagner les autres dans leur quotidien. Mon rôle me permet de créer un environnement où chacun se sent soutenu et valorisé. Je crois que le succès d’une équipe vient autant de la bienveillance que de l’organisation, et je prends soin que chaque personne trouve sa place et puisse donner le meilleur d’elle-même.",
      image: "/images/team/PHOTO-2026-02-17-13-12-21.jpg",
      shortDescription: " J’aime écouter, comprendre et ..."
    },
    {
      id: 9,
      name: "Rodolphe NONO",
      description: "Je réfléchis avant d’agir, j’analyse avant de décider. J’aime transformer des intuitions en plans concrets et tracer des chemins qui tiennent dans le temps. Pour moi, la stratégie n’est pas une théorie : c’est ce qui permet aux idées d’atteindre leur vraie portée.",
      image: "/images/team/PHOTO-2026-02-17-12-57-25.jpg",
      shortDescription: "Je réfléchis avant d’agir, j’analyse..."
    }

    ];
  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = 'auto'; // Enable scrolling again
  };

  // Handle Escape key press
  React.useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  return (
    <section className=" px-6 py-20 bg-white" id="equipe">
      <div className="mb-16 text-start">
        <h2 className="text-5xl md:text-7xl font-black text-neutral-900 uppercase italic leading-none tracking-tighter">
          L'ÉQUIPE <br /> <span className="uppercase italic text-primary">Oncle G LIVRAISONS</span>
        </h2>
        <div className="w-24 h-2 mt-4 bg-primary"></div>
        <p className="text-gray-500 mt-6 uppercase text-lg italic font-medium border-l-4 pl-4 border-gray-100">
          Nos visages, une seule mission : <strong className="text-black">livrer votre sourire à Brazzaville.</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            onClick={() => openModal(member)}
            className={`${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''} relative group overflow-hidden rounded-[40px] cursor-pointer shadow-2xl aspect-[9/16] sm:aspect-auto`}
          >
            <img
              src={member.image}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={member.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-4xl font-bold italic">{member.name.split(' ')[0]}</h3>
              <p className="text-gray-200 mt-3 line-clamp-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 italic">
                {member.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-neutral-950/95 backdrop-blur-md transition-all duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-6xl bg-white sm:rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-[0_0_40px_rgba(246,210,58,0.3)] animate-slideUp"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-primary hover:text-black transition-colors duration-300 shadow-lg border-2 border-white/20"
              aria-label="Fermer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full h-[55%] md:w-[45%] md:h-auto shrink-0 bg-neutral-900 group">
              <img
                src={selectedMember.image}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-90"
                alt={selectedMember.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 md:opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-primary"></div>
              <div className="absolute bottom-2 left-0 w-2/3 h-1 bg-primary"></div>
            </div>

            <div className="relative flex-1 bg-white flex flex-col justify-center p-6 md:p-12 overflow-y-auto">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-black italic text-neutral-100 select-none overflow-hidden leading-none pointer-events-none -mr-10">
                OG
              </div>

              <div className="relative z-10 flex flex-col mt-7 md:mt-0 items-start">
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-900 uppercase italic leading-[0.9] tracking-tighter mb-6 drop-shadow-sm">
                  {selectedMember.name.split(' ')[0]}<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500">{selectedMember.name.split(' ').slice(1).join(' ')}</span>
                </h3>

                <div className="w-24 h-2 bg-primary mb-6 transform -skew-x-12"></div>

                <p className="text-neutral-600 text-sm md:text-lg font-medium leading-relaxed max-w-lg mb-8">
                  {selectedMember.description}
                </p>

                <button
                  onClick={closeModal}
                  className="group relative py-4 px-10 bg-transparent overflow-hidden border-2 border-black text-black font-black uppercase tracking-widest text-sm hover:text-white transition-colors duration-300"
                >
                  <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out skew-x-12 origin-left"></span>
                  <span className="relative z-10">Fermer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default TeamSection;
