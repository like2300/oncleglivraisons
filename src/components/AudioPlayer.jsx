import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDownloadBtn, setShowDownloadBtn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // 1. Initialisation de l'audio
    audioRef.current = new Audio('/assets/audio/Oncle-G.mp3');
    audioRef.current.preload = 'auto';
    audioRef.current.loop = true;

    // 2. Tentative de lecture automatique (Autoplay)
    const tryPlayAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay bloqué, attente interaction...");
        const enableAudio = () => {
          if (audioRef.current && audioRef.current.paused) {
            audioRef.current.play()
              .then(() => setIsPlaying(true))
              .catch(e => console.error(e));
          }
          window.removeEventListener('click', enableAudio);
          window.removeEventListener('scroll', enableAudio);
          window.removeEventListener('touchstart', enableAudio);
        };
        window.addEventListener('click', enableAudio);
        window.addEventListener('scroll', enableAudio);
        window.addEventListener('touchstart', enableAudio);
      }
    };

    const timer = setTimeout(() => {
      tryPlayAudio();
    }, 1000);

    // 3. LOGIQUE D'INTERVALLE POUR LE BOUTON TÉLÉCHARGEMENT
    // Fonction pour montrer le bouton pendant 7s
    const triggerDownloadBtn = () => {
      setShowDownloadBtn(true); // Faire apparaitre
      setTimeout(() => {
        setShowDownloadBtn(false); // Faire disparaitre après 7s
      }, 7000);
    };

    // Premier déclenchement après 5 secondes
    const initialDownloadTimer = setTimeout(triggerDownloadBtn, 5000);

    // Répétition toutes les 30 secondes
    const intervalId = setInterval(triggerDownloadBtn, 30000);

    // Nettoyage
    return () => {
      clearTimeout(timer);
      clearTimeout(initialDownloadTimer);
      clearInterval(intervalId);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* --- FLOATING AUDIO PLAYER (BAS GAUCHE) --- */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => {
            if (audioRef.current) {
              if (audioRef.current.paused) {
                audioRef.current.play()
                  .then(() => setIsPlaying(true))
                  .catch(e => console.log("Audio play failed:", e));
              } else {
                // QUAND ON MET PAUSE
                audioRef.current.pause();
                setIsPlaying(false);
                setShowDownloadBtn(false); // <--- AJOUT : Cache le bouton téléchargement immédiatement
              }
            }
          }}
          className={`
            relative group flex items-center justify-center w-14 h-14 rounded-full
            transition-all duration-500 ease-out shadow-2xl border border-white/20
            ${isPlaying
              ? 'bg-[#facc15] text-black scale-110 rotate-0'
              : 'bg-black/30 backdrop-blur-md text-white hover:bg-black/50 hover:scale-105'
            }
          `}
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          {isPlaying && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#facc15] opacity-75 animate-ping"></span>
              <span className="absolute inset-0 rounded-full bg-[#facc15] opacity-40 animate-pulse delay-75 duration-1000 scale-125"></span>
            </>
          )}

          <div className="relative z-10 transition-transform duration-300">
            {isPlaying ? (
              <div className="flex gap-1 h-5 items-center justify-center">
                <span className="w-1.5 h-full bg-black rounded-full animate-[bounce_1s_infinite]"></span>
                <span className="w-1.5 h-3/4 bg-black rounded-full animate-[bounce_1.2s_infinite]"></span>
                <span className="w-1.5 h-full bg-black rounded-full animate-[bounce_0.8s_infinite]"></span>
              </div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* --- BOUTON TÉLÉCHARGEMENT (CENTRÉ EN BAS) --- */}
      {/* Ne s'affiche QUE si le timer est actif ET que la musique joue */}
      <a
        href="/assets/audio/Oncle-G.mp3"
        download="Oncle-G-Soundtrack.mp3"
        className={`
          fixed bottom-10 left-0 right-0 mx-auto w-fit z-50
          flex items-center gap-2 px-4 mt-1 py-3
          bg-black text-white rounded-full shadow-2xl
          transform transition-all duration-700 ease-in-out border border-gray-800
          hover:bg-[#facc15] hover:text-black hover:scale-105
          ${showDownloadBtn && isPlaying
            ? 'translate-y-0 opacity-100'     /* Visible uniquement si joue */
            : 'translate-y-[150%] opacity-0'  /* Caché sinon */
          }
        `}
      >
        <span className="font-bold tracking-wide">Télécharger le Son</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </a>
    </>
  );
};

export default AudioPlayer;