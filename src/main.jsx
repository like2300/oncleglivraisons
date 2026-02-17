import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

// Initialize Google Analytics
import ReactGA from 'react-ga4';

// Replace with your GA4 Measurement ID
const TRACKING_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your actual GA4 Measurement ID
ReactGA.initialize(TRACKING_ID);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
