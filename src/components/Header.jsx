import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import des assets basés sur ton "ls"
import NavigationMenu from './NavigationMenu';
import logo from '../assets/logo/Oncle G - Logo.svg';
import facebookIcon from '../assets/icone_social/webp/facebook_icones.webp';
import instagramIcon from '../assets/icone_social/webp/instagram_icones.webp';
import xIcon from '../assets/icone_social/webp/x_icones.webp';
import tiktokIcon from '../assets/icone_social/webp/tiktok_icones.webp';
import linkedIcon from '../assets/icone_social/webp/linked_icones.webp';
import { Helmet } from 'react-helmet-async';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Fonction pour la navigation (remplace window.location pour rester dans l'univers React)
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleMenuTrigger = () => {
    setIsMenuOpen(true);
  };

  const handleMobileMenu = () => {
    if(isMenuOpen) {
      setIsMenuOpen(false); // Close the menu if it's already open
    } else {
      setIsMenuOpen(true); // Open the menu if it's closed
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Détermine le texte du bouton en fonction de la page actuelle
  const getPageTitle = () => {
    switch(location.pathname) {
      case '/':
        return "LE SOURIRE DE L'ONCLE";
      case '/a-propos':
        return "À PROPOS";
      case '/contacts':
        return "CONTACTS";
      case '/services':
        return "NOS SERVICES EXPRESS";
      case '/emplois':
        return "L'EQUIPE";
      case '/communaute':
        return "COMMUNAUTÉ";
      case '/commander':
        return "COMMANDER UN GESTE";
      case '/services/pro-g':
        return "SERVICE PRO-G";
      case '/services/g-promarketing':
        return "SERVICE G-PROMARKETING";
      case '/services/conciergerie-express':
        return "CONCIERGERIE EXPRESS";
      case '/services/allo-gaz':
        return "ALLÔ'GAZ";
      default:
        return "LE SOURIRE DE L'ONCLE";
    }
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Oncle G Livraisons - Service de livraison express à Brazzaville. Découvrez nos services innovants : livraison express, livraison de gaz, conciergerie, e-commerce et plus encore. Un sourire, c'est déjà une livraison réussie." />
        <meta name="keywords" content="livraison express, oncle g, brazzaville, service de livraison, livraison de gaz, conciergerie, e-commerce, g-pro, oncleg, livraisons brazzaville, service fiable, livraison domicile" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="CG" />
        <meta name="geo.placename" content="Brazzaville" />
        <meta name="geo.position" content="-4.261063;15.279534" />
        <meta name="ICBM" content="-4.261063, 15.279534" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/" />
        <meta property="og:description" content="Oncle G Livraisons - Service de livraison express à Brazzaville. Découvrez nos services innovants : livraison express, livraison de gaz, conciergerie, e-commerce et plus encore. Un sourire, c'est déjà une livraison réussie." />
        <meta property="og:image" content="https://oncle-g.netlify.app/img/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />
        <meta property="og:site_name" content="Oncle G Livraisons" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@OncleGLIVRAISON" />
        <meta property="twitter:creator" content="@OncleGLIVRAISON" />
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/" />
        <meta property="twitter:description" content="Oncle G Livraisons - Service de livraison express à Brazzaville. Découvrez nos services innovants : livraison express, livraison de gaz, conciergerie, e-commerce et plus encore. Un sourire, c'est déjà une livraison réussie." />
        <meta property="twitter:image" content="https://oncle-g.netlify.app/img/og-image.jpg" />
        <meta property="twitter:image:alt" content="Oncle G - Service de livraison express à Brazzaville" />
      </Helmet>

      <header className="flex justify-between items-center px-8 py-5 relative z-50">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="logo flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Oncle G - Service de livraison à Brazzaville"
            className="h-16"
            loading="eager"
          />
        </div>

        {/* Bouton Menu Desktop */}
        <button
          id="menuTriggerBtn"
          className="nav-link hidden md:flex text-sm text-neutral-500 items-center gap-2 hover:text-primary justify-center transition-colors font-medium"
          onClick={handleMenuTrigger}
        >
          {getPageTitle()}
          <span className="material-symbols-outlined text-primary rotate-45">arrow_forward</span>
        </button>

        {/* Mobile button for slide-in menu */}
        <button
          id="mobileMenuBtn"
          className="md:hidden text-neutral-500 flex items-center hover:text-yellow-500 transition-all duration-300 p-2 z-[70]"
          onClick={handleMobileMenu}
        >
          <span className={`material-symbols-outlined transition-transform duration-300 ${isMenuOpen ? 'scale-125' : 'scale-100'}`}>menu</span>
        </button>

        {/* Social Icons */}
        <div className="social-icons hidden md:flex gap-6">
          <a href="https://www.facebook.com/oncleglivraisons" target="_blank" rel="noreferrer" className="social-btn text-white rounded-full flex justify-center items-center hover:scale-110 transition-all text-sm">
            <img src={facebookIcon} className="h-10 w-10 object-contain" alt="facebook" loading="lazy" width="40" height="40" />
          </a>
          <a href="https://www.instagram.com/oncleglivraisons/" target="_blank" rel="noreferrer" className="social-btn text-white rounded-full flex justify-center items-center hover:scale-110 transition-all text-sm">
            <img src={instagramIcon} className="h-10 w-10 object-contain" alt="instagram" loading="lazy" width="40" height="40" />
          </a>
          <a href="https://x.com/OncleGLIVRAISON" target="_blank" rel="noreferrer" className="social-btn text-white rounded-full flex justify-center items-center hover:scale-110 transition-all text-sm">
            <img src={xIcon} className="h-10 w-10 object-contain" alt="x" loading="lazy" width="40" height="40" />
          </a>
          <a href="https://www.tiktok.com/@oncle.g.livraisons" target="_blank" rel="noreferrer" className="social-btn text-white rounded-full flex justify-center items-center hover:scale-110 transition-all text-sm">
            <img src={tiktokIcon} className="h-10 w-10 object-contain" alt="tiktok" loading="lazy" width="40" height="40" />
          </a>
          <a href="https://www.linkedin.com/in/oncle-g-livraisons-5272783a0/" target="_blank" rel="noreferrer" className="social-btn text-white rounded-full flex justify-center items-center hover:scale-110 transition-all text-sm">
            <img src={linkedIcon} className="h-10 w-10 object-contain" alt="linkedin" loading="lazy" width="40" height="40" />
          </a>
        </div>
      </header>

      {/* Navigation Menu Component */}
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </>
  );
};

export default Header;
