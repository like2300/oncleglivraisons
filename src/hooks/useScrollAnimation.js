import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all elements with the reveal-element class
    const elements = document.querySelectorAll('.reveal-element');
    elements.forEach(el => observer.observe(el));

    // Initial check in case elements are already in view
    elements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight && el.getBoundingClientRect().bottom >= 0) {
        el.classList.add('visible');
      }
    });

    // Clean up
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
};

export default useScrollAnimation;