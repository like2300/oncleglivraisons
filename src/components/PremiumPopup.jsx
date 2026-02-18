import { useState, useEffect, useRef } from 'react';

const PremiumPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Preload the audio when component mounts
    audioRef.current = new Audio('/assets/audio/Oncle-G.mp3');
    audioRef.current.preload = 'auto';

    // Set attributes to help with autoplay policies
    audioRef.current.setAttribute('playsinline', 'true');

    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('hasSeenPremiumPopup');

    // Show popup only if user hasn't seen it before
    if (!hasSeenPopup) {
      // Small delay to ensure page loads first
      const timer = setTimeout(() => {
        setIsVisible(true);
        document.body.classList.add('popup-open'); // Lock scroll when popup is visible

        // Play the audio when popup is shown
        if (audioRef.current) {
          // Modern browsers require user interaction for autoplay, so we'll play it when the popup appears
          const playPromise = audioRef.current.play();

          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
                // Ensure volume is not muted
                audioRef.current.volume = 1.0;
              })
              .catch(error => {
                console.log("Audio play failed (this is expected in some browsers):", error);
                // In some browsers, we might not be able to autoplay, user will need to click the button
              });
          }
        }
      }, 500);

      return () => {
        clearTimeout(timer);
        document.body.classList.remove('popup-open'); // Clean up on unmount
      };
    }
  }, []);

  const handleClose = () => {
    // Mark that user has seen the popup
    localStorage.setItem('hasSeenPremiumPopup', 'true');
    setIsVisible(false);
    document.body.classList.remove('popup-open'); // Unlock scroll

    // Stop/pause the audio when popup is closed
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to beginning
    }
  };

  const handleExplore = () => {
    // Mark that user has seen the popup
    localStorage.setItem('hasSeenPremiumPopup', 'true');
    setIsVisible(false);
    document.body.classList.remove('popup-open'); // Unlock scroll

    // Stop/pause the audio when user clicks Explore
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to beginning
    }
  };

  // Handle Escape key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isVisible) {
        handleClose();
      }
    };

    if (isVisible) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-primary bg-opacity-90 z-[9999] flex items-center justify-center p-4">
      <div className={`popup-content rounded-2xl max-w-md w-full overflow-hidden transform transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <div className="relative">
          {/* Close Button (X) */}
          <button
            onClick={handleClose}

            className="absolute hidden top-4 right-4 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-red-600 transition-colors"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 384 512" fill="currentColor">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
          </button>

          {/* Centered Image */}
          <div className="image-container relative overflow-hidden">
            <img
              src="/assets/IMG_4160.PNG"
              alt="Livreur"
              className="w-full h-[380px] object-contain popup-image"
            />
            {/* Music Control Button - Top Left */}
            {/* Music Control Button - Top Left */}
            <div className="absolute top-4 left-4 z-20">
              <button
                onClick={() => {
                  if (audioRef.current) {
                    if (audioRef.current.paused) {
                      audioRef.current.play()
                        .then(() => setIsPlaying(true))
                        .catch(e => console.log("Audio play failed:", e));
                    } else {
                      audioRef.current.pause();
                      setIsPlaying(false);
                    }
                  }
                }}
                className={`
                  relative group flex items-center justify-center w-14 h-14 rounded-full
                  transition-all duration-500 ease-out shadow-2xl border border-white/20
                  ${isPlaying
                    ? 'bg-[#facc15] text-black scale-110 rotate-0' // Style quand ça joue (Jaune vif)
                    : 'bg-black/30 backdrop-blur-md text-white hover:bg-black/50 hover:scale-105' // Style pause (Verre sombre)
                  }
                `}
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
              >
                {/* Onde de choc (Animation Rythmique) - Visible seulement si lecture */}
                {isPlaying && (
                  <>
                    <span className="absolute inset-0 rounded-full bg-[#facc15] opacity-75 animate-ping"></span>
                    <span className="absolute inset-0 rounded-full bg-[#facc15] opacity-40 animate-pulse delay-75 duration-1000 scale-125"></span>
                  </>
                )}

                {/* Icône */}
                <div className="relative z-10 transition-transform duration-300">
                  {isPlaying ? (
                    // Icône PAUSE (Barres animées façon égaliseur)
                    <div className="flex gap-1 h-5 items-center justify-center">
                      <span className="w-1.5 h-full bg-black rounded-full animate-[bounce_1s_infinite]"></span>
                      <span className="w-1.5 h-3/4 bg-black rounded-full animate-[bounce_1.2s_infinite]"></span>
                      <span className="w-1.5 h-full bg-black rounded-full animate-[bounce_0.8s_infinite]"></span>
                    </div>
                  ) : (
                    // Icône PLAY (Triangle moderne)
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-3 popup-title">
              Bienvenue Chez <br />
              <span className="text-black text-3xl">Oncle G Livraisons</span>
            </h2>
            <p className="text-gray-600 mb-6 popup-text">
              Découvrez notre expérience premium unique et nos services exceptionnels qui vous attendent.
            </p>

            {/* Centered Button */}
            <button
              onClick={handleExplore}
              className="bg-black hover:bg-primary hover:border-2 hover:border-black text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 popup-button"
            >
              Explorer Maintenant
            </button>
          </div>
        </div>

        {/* Kinetic light effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="kinetic-light-1"></div>
          <div className="kinetic-light-2"></div>
          <div className="kinetic-light-3"></div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPopup;
