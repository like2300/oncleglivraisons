import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import EmployerPage from './pages/EmployerPage';
import CommunityPage from './pages/CommunityPage';
import OrderPage from './pages/OrderPage';
import ProGPage from './pages/ProGPage';
import GProMarketingPage from './pages/GProMarketingPage';
import ConciergerieExpressPage from './pages/ConciergerieExpressPage';
import AlloGazPage from './pages/AlloGazPage';
import PremiumPopup from './components/PremiumPopup';
import AudioPlayer from './components/AudioPlayer';
import Loader from './components/Loader';
import FloatingActions from './components/FloatingActions';
import ReactGA from 'react-ga4';

// Component to track page views
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ 
      hitType: 'pageview',
      page: location.pathname + location.search 
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <Helmet>
        <title>Oncle G Livraisons - Service de Livraison Express à Brazzaville | Oncle G</title>
        <meta name="description" content="Oncle G Livraisons - Leader de la livraison express à Brazzaville. Oncle G propose livraison de colis, gaz, conciergerie et e-commerce. Service rapide et fiable." />
        <meta name="keywords" content="oncle g livraisons, oncle g, livraison express brazzaville, service livraison congo, oncle g prix, livraison colis, coursier brazzaville, oncleglivraisons" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta property="og:title" content="Oncle G Livraisons - Service de Livraison Express à Brazzaville | Oncle G" />
        <meta property="og:description" content="Oncle G Livraisons - Leader de la livraison express à Brazzaville. Livraison de colis, gaz, conciergerie et e-commerce." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/" />
      </Helmet>
      <AnalyticsTracker />
      <div className="App">
        <Loader />
        <PremiumPopup />
        <AudioPlayer />
        <FloatingActions />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/emplois" element={<EmployerPage />} />
          <Route path="/communaute" element={<CommunityPage />} />
          <Route path="/commander" element={<OrderPage />} />
          <Route path="/services/pro-g" element={<ProGPage />} />
          <Route path="/services/g-promarketing" element={<GProMarketingPage />} />
          <Route path="/services/conciergerie-express" element={<ConciergerieExpressPage />} />
          <Route path="/services/allo-gaz" element={<AlloGazPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
