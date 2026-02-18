import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - Oncle G Livraisons | Protection des Données</title>
        <meta name="description" content="Politique de confidentialité d'Oncle G Livraisons. Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée." />
        <meta name="keywords" content="politique de confidentialité, protection des données, vie privée, RGPD, Oncle G Livraisons, données personnelles" />
        <meta name="author" content="Oncle G Livraisons" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.oncleglivraisons.com/politique-confidentialite" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oncleglivraisons.com/politique-confidentialite" />
        <meta property="og:title" content="Politique de Confidentialité - Oncle G Livraisons" />
        <meta property="og:description" content="Découvrez comment Oncle G Livraisons protège vos données personnelles et respecte votre vie privée." />
        <meta property="og:image" content="https://www.oncleglivraisons.com/assets/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.oncleglivraisons.com/politique-confidentialite" />
        <meta property="twitter:title" content="Politique de Confidentialité - Oncle G Livraisons" />
        <meta property="twitter:description" content="Découvrez comment Oncle G Livraisons protège vos données personnelles." />
      </Helmet>

      <div className="bg-white min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8">Politique de Confidentialité</h1>
          <p className="text-gray-600 text-center mb-12">Dernière mise à jour : 18 février 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Oncle G Livraisons ("nous", "notre", "nos") s'engage à protéger votre vie privée et vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
                lorsque vous utilisez nos services de livraison express à Brazzaville.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Données que nous collectons</h2>
              <p className="text-gray-700 mb-4">Nous pouvons collecter les types de données suivants :</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Informations d'identification : nom, prénom, adresse</li>
                <li>Coordonnées : numéro de téléphone, adresse e-mail</li>
                <li>Informations de livraison : adresses de livraison, instructions spécifiques</li>
                <li>Données de paiement : informations nécessaires pour traiter vos commandes</li>
                <li>Données de navigation : informations sur votre utilisation de notre site web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">3. Utilisation des données</h2>
              <p className="text-gray-700 mb-4">Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Traiter et livrer vos commandes</li>
                <li>Communiquer avec vous concernant vos livraisons</li>
                <li>Améliorer nos services</li>
                <li>Vous envoyer des informations promotionnelles (avec votre consentement)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">4. Partage des données</h2>
              <p className="text-gray-700 mb-4">
                Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations avec :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Nos livreurs pour effectuer les livraisons</li>
                <li>Nos prestataires de services (hébergement, paiement)</li>
                <li>Les autorités légales si requis par la loi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">5. Sécurité des données</h2>
              <p className="text-gray-700 mb-4">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger 
                vos données contre l'accès non autorisé, la perte ou la divulgation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">6. Vos droits</h2>
              <p className="text-gray-700 mb-4">Vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pour exercer ces droits, contactez-nous à :{' '}
                <a href="mailto:contact@oncleglivraisons.com" className="text-primary hover:underline">
                  contact@oncleglivraisons.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez configurer 
                votre navigateur pour refuser les cookies, mais cela peut limiter certaines fonctionnalités.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Conservation des données</h2>
              <p className="text-gray-700 mb-4">
                Nous conservons vos données pendant la durée nécessaire aux finalités pour lesquelles 
                elles ont été collectées, conformément aux obligations légales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">9. Modifications</h2>
              <p className="text-gray-700 mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité. 
                Les changements seront publiés sur cette page avec une date de mise à jour.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">10. Contact</h2>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant cette politique, contactez-nous :
              </p>
              <address className="not-italic text-gray-700">
                <p><strong>Oncle G Livraisons</strong></p>
                <p>Téléphone : <a href="tel:+242066338224" className="text-primary hover:underline">+242-066-338-224</a></p>
                <p>Email : <a href="mailto:contact@oncleglivraisons.com" className="text-primary hover:underline">contact@oncleglivraisons.com</a></p>
                <p>Adresse : Brazzaville, Congo</p>
              </address>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
