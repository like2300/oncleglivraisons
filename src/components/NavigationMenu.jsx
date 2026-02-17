import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Prevent background scrolling when menu is open
      document.body.style.overflow = 'hidden';

      // Add event listener to close menu when Escape key is pressed
      const handleEscKey = (event) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscKey);

      // Return cleanup function
      return () => {
        document.removeEventListener('keydown', handleEscKey);
        document.body.style.overflow = 'auto';
      };
    } else {
      // Restore scrolling when menu closes
      document.body.style.overflow = 'auto';
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const menuItems = [
    { id: 1, title: "LE SOURIRE DE L'ONCLE", path: "/" },
    { id: 2, title: "NOS SERVICES EXPRESS", path: "/services" },
    { id: 3, title: "COMMANDEZ EN UN GESTE", path: "/commander" },
    { id: 4, title: "L'EQUIPE", path: "/emplois" },
    { id: 5, title: "À PROPOS", path: "/a-propos" },
    { id: 6, title: "COMMUNAUTÉ", path: "/communaute" },
    { id: 7, title: "CONTACTS", path: "/contacts" },
  ];

  if (!isOpen && !isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/90 overflow-y-auto p-6 md:p-12 lg:p-24 transition-opacity duration-500 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={onClose} // Close menu when clicking on the backdrop
    >
      <div
        className={`flex flex-col min-h-full transform transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from bubbling up
      >
        <header className="mb-12 md:mb-20">
          {/* <h2 className="text-4xl md:block hidden md:text-5xl lg:text-7xl font-bold tracking-tight text-white">Menu</h2>*/}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-12 flex-grow">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group border-b border-gray-800 pb-4 hover:border-primary transition text-white"
              onClick={onClose}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm uppercase tracking-widest text-gray-500">{`0${item.id}`}</span>
                <h3 className="text-xl md:text-2xl group-hover:text-primary">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-5 w-[50px] h-[50px] bg-primary flex items-center justify-center text-white self-start"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 384 512" fill="currentColor">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavigationMenu;
