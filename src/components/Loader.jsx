import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/loader/animation.json'; // Adjust path to your animation file  /assets/loader/animation.json

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Disable scrolling while loader is visible
    document.body.style.overflow = 'hidden';

    // Set a timeout to hide the loader after animation completes
    const timer = setTimeout(() => {
      setShowLoader(false);
      // Re-enable scrolling after loader disappears
      document.body.style.overflow = 'auto';
    }, 3000); // Adjust based on your animation duration

    // Clean up the timer if component unmounts early
    return () => {
      clearTimeout(timer);
      // Ensure scrolling is enabled when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!showLoader) {
    return null;
  }

  return (
    <div
      id="loader-overlay"
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
    >
      <div className="w-64 h-64 md:w-80 md:h-80"> {/* Adjust size as needed */}
        <Lottie
          animationData={animationData}
          loop={false}
          autoplay={true}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Loader;
