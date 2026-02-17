import React from 'react';
import { Helmet } from 'react-helmet-async';

import logo from '../assets/logo/Oncle G - Logo.svg';
import facebookIcon from '../assets/icone_social/webp/facebook_icones_white.webp';
import instagramIcon from '../assets/icone_social/webp/instagram_icones_white.webp';
import xIcon from '../assets/icone_social/webp/x_icones_white.webp';
import tiktokIcon from '../assets/icone_social/webp/tiktok_icones_white.webp';
import linkedIcon from '../assets/icone_social/webp/linked_icones_white.webp';

const Footer = () => {
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

      <div className="w-full relative">
        <footer className="bg-black w-full absolute -bottom-0 text-gray-400 py-8 px-6 z-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div  className="order-2 md:order-1 hover:text-white cursor-pointer transition">
               Conditions d'utilisation
            </div>

            <div className="order-1 md:order-2 flex gap-6 text-xl">
              <div className="social-icons flex gap-6">
                <a href="https://www.facebook.com/oncleglivraisons" className="social-btn text-white rounded-full flex justify-center items-center hover:scale-110 transition-all text-sm">
                  <img src={facebookIcon} className="h-10 w-10 object-contain" alt="facebook_icones" />
                </a>
                <a href="https://www.instagram.com/oncleglivraisons/" className="social-btn text-white rounded-full flex justify-center items-center hover:scale-110 transition-all text-sm">
                  <img src={instagramIcon} className="h-10 w-10 object-contain" alt="instagram_icones" />
                </a>
                <a href="https://x.com/OncleGLIVRAISON" className="social-btn text-white rounded-full flex justify-center items-center hover:scale-110 transition-all text-sm">
                  <img src={xIcon} className="h-10 w-10 object-contain" alt="x_icones" />
                </a>
                <a href="https://www.tiktok.com/@oncle.g.livraisons" className="social-btn text-white rounded-full flex justify-center items-center hover:scale-110 transition-all text-sm">
                  <img src={tiktokIcon} className="h-10 w-10 object-contain" alt="tiktok_icones" />
                </a>
                <a href="https://www.linkedin.com/in/oncle-g-livraisons-5272783a0/" className="social-btn text-white rounded-full flex justify-center items-center hover:scale-110 transition-all text-sm">
                  <img src={linkedIcon} className="h-10 w-10 object-contain" alt="linkedin_icones" />
                </a>
              </div>
            </div>

            <div className="order-3 md:order-3">
              All rights reserved by ONCLE G Livraisons
            </div>
          </div>
        </footer>

        {/* SVG Decoration (Juste en bas du footer, en noir) */}
        <div className="w-full overflow-hidden text-primary -mt-1 relative z-10">
          <svg className="w-full h-auto block svg-wave-animation" viewBox="0 0 1440 405" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
            </defs>
            <g className="wave-group">
              <path d="M852.735 236.416L853.308 353.544C853.371 366.3 843.913 376.641 832.27 376.73L832.255 376.73C820.612 376.819 811.053 366.623 810.99 353.868L810.417 236.739C810.355 223.983 819.813 213.642 831.456 213.553L831.472 213.553C843.115 213.464 852.673 223.66 852.735 236.416Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -5; 0 0" dur="4.5s" repeatCount="indefinite" begin="0s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M784.848 122.485L786.048 367.147C786.11 379.904 776.637 390.247 764.974 390.336L764.958 390.336C753.295 390.425 743.721 380.227 743.658 367.47L742.459 122.808C742.396 110.052 751.869 99.7095 763.532 99.6205L763.548 99.6204C775.212 99.5315 784.785 109.729 784.848 122.485Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -8; 0 0" dur="5.5s" repeatCount="indefinite" begin="0.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M638.068 206.7L639.268 451.362C639.331 464.118 629.858 474.462 618.194 474.551L618.179 474.551C606.515 474.64 596.941 464.442 596.879 451.685L595.679 207.023C595.616 194.267 605.089 183.924 616.753 183.835L616.768 183.835C628.432 183.746 638.005 193.944 638.068 206.7Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -6; 0 0" dur="6.5s" repeatCount="indefinite" begin="1s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M711.898 222.06L712.977 466.693C713.033 479.446 703.525 489.796 691.82 489.895L691.804 489.895C680.099 489.993 670.501 479.803 670.444 467.05L669.365 222.417C669.309 209.664 678.817 199.314 690.522 199.215L690.537 199.215C702.242 199.117 711.842 209.307 711.898 222.06Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -7; 0 0" dur="5s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M711.091 111.485L711.326 165.112C711.382 177.861 701.916 188.206 690.268 188.304L690.253 188.305C688.605 188.403 669.05 178.219 668.994 165.47L668.759 111.842C668.703 99.0934 678.168 88.7495 689.815 88.651L689.831 88.6508C701.478 88.5524 711.034 98.7356 711.091 111.485Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -4; 0 0" dur="6s" repeatCount="indefinite" begin="2s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M568.349 276.695L569.428 521.328C569.484 534.081 559.975 544.432 548.27 544.53L548.255 544.53C536.55 544.629 526.95 534.439 526.894 521.686L525.815 277.053C525.759 264.3 535.268 253.95 546.973 253.851L546.988 253.851C558.693 253.753 568.292 263.943 568.349 276.695Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -9; 0 0" dur="4s" repeatCount="indefinite" begin="2.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M567.593 178.699L567.758 216.448C567.814 229.196 558.352 239.539 546.709 239.638L546.694 239.638C535.051 239.736 525.499 229.554 525.443 216.806L525.278 179.057C525.222 166.31 534.684 155.967 546.327 155.869L546.342 155.869C557.803 155.772 567.238 165.636 567.583 178.104L567.593 178.699Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -5; 0 0" dur="5.3s" repeatCount="indefinite" begin="3s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M1380.07 148.7L1381.27 393.362C1381.33 406.118 1371.86 416.462 1360.19 416.551L1360.18 416.551C1348.51 416.64 1338.94 406.442 1338.88 393.685L1337.68 149.023C1337.62 136.267 1347.08 125.924 1358.72 125.835L1358.74 125.835C1370.38 125.746 1379.94 135.942 1380.07 148.7Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -6; 0 0" dur="5.7s" repeatCount="indefinite" begin="3.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M1453.9 164.06L1454.98 408.693C1455.03 421.446 1445.52 431.796 1433.82 431.895L1433.8 431.895C1422.1 431.993 1412.5 421.803 1412.44 409.05L1411.37 164.417C1411.31 151.664 1420.82 141.314 1432.52 141.215L1432.54 141.215C1444.24 141.117 1453.84 151.307 1453.9 164.06Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -7; 0 0" dur="4.7s" repeatCount="indefinite" begin="4s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M1453.09 53.4845L1453.33 107.112C1453.38 119.861 1443.92 130.206 1432.27 130.304L1432.25 130.305C1420.61 130.403 1411.05 120.219 1410.99 107.47L1410.76 53.8423C1410.7 41.0934 1420.17 30.7495 1431.82 30.651L1431.83 30.6508C1443.48 30.5524 1453.03 40.7356 1453.09 53.4845Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -4; 0 0" dur="6.5s" repeatCount="indefinite" begin="4.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M1310.35 218.695L1311.43 463.328C1311.48 476.081 1301.97 486.432 1290.27 486.53L1290.25 486.53C1278.55 486.629 1268.95 476.439 1268.89 463.686L1267.81 219.053C1267.76 206.3 1277.27 195.95 1288.97 195.851L1288.99 195.851C1300.69 195.753 1310.29 205.943 1310.35 218.695Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -8; 0 0" dur="4.3s" repeatCount="indefinite" begin="5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M1309.59 120.699L1309.76 158.448C1309.81 171.196 1300.35 181.539 1288.71 181.638L1288.69 181.638C1277.05 181.736 1267.5 171.554 1267.44 158.806L1267.28 121.057C1267.22 108.31 1276.68 97.9672 1288.33 97.8688L1288.34 97.8686C1299.8 97.7717 1309.24 107.636 1309.58 120.104L1309.59 120.699Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -5; 0 0" dur="6.3s" repeatCount="indefinite" begin="5.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M480.735 234.416L481.308 351.544C481.371 364.3 471.913 374.641 460.27 374.73L460.255 374.73C448.611 374.819 439.053 364.623 438.99 351.868L438.417 234.739C438.355 221.983 447.813 211.642 459.456 211.553L459.472 211.553C471.115 211.464 480.673 221.66 480.735 234.416Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -6; 0 0" dur="5.1s" repeatCount="indefinite" begin="6s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M412.848 120.485L414.048 365.147C414.11 377.904 404.637 388.247 392.974 388.336L392.958 388.336C381.295 388.425 371.721 378.227 371.658 365.47L370.458 120.808C370.396 108.052 379.869 97.7095 391.532 97.6205L391.548 97.6204C403.212 97.5315 412.785 107.729 412.848 120.485Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -7; 0 0" dur="5.9s" repeatCount="indefinite" begin="6.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M266.068 204.7L267.268 449.362C267.331 462.118 257.858 472.462 246.194 472.551L246.179 472.551C234.515 472.64 224.941 462.442 224.879 449.685L223.679 205.023C223.616 192.267 233.089 181.924 244.753 181.835L244.768 181.835C256.432 181.746 266.005 191.944 266.068 204.7Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -4; 0 0" dur="4.9s" repeatCount="indefinite" begin="7s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M339.898 220.06L340.977 464.693C341.033 477.446 331.525 487.796 319.82 487.895L319.804 487.895C308.099 487.993 298.501 477.803 298.444 465.05L297.365 220.417C297.309 207.664 306.817 197.314 318.522 197.215L318.537 197.215C330.242 197.117 339.842 207.307 339.898 220.06Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -8; 0 0" dur="4.1s" repeatCount="indefinite" begin="7.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M339.09 109.485L339.326 163.112C339.382 175.861 329.916 186.206 318.268 186.304L318.252 186.305C306.605 186.403 297.05 176.219 296.994 163.47L296.759 109.842C296.703 97.0934 306.168 86.7495 317.815 86.651L317.831 86.6508C329.478 86.5524 339.034 96.7356 339.09 109.485Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -5; 0 0" dur="6.1s" repeatCount="indefinite" begin="8s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M196.349 274.695L197.428 519.328C197.484 532.081 187.975 542.432 176.27 542.53L176.255 542.53C164.55 542.629 154.95 532.439 154.894 519.686L153.815 275.053C153.759 262.3 163.268 251.95 174.972 251.851L174.988 251.851C186.693 251.753 196.292 261.943 196.349 274.695Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -9; 0 0" dur="3.7s" repeatCount="indefinite" begin="8.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M195.593 176.699L195.758 214.448C195.814 227.196 186.352 237.539 174.709 237.638L174.694 237.638C163.051 237.736 153.499 227.554 153.443 214.806L153.278 177.057C153.222 164.31 162.684 153.967 174.326 153.869L174.342 153.869C185.803 153.772 195.238 163.636 195.583 176.104L195.593 176.699Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -6; 0 0" dur="5.3s" repeatCount="indefinite" begin="9s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M106.735 149.416L107.308 266.544C107.371 279.3 97.9132 289.641 86.2702 289.73L86.2546 289.73C74.6115 289.819 65.0527 279.623 64.9902 266.868L64.417 149.739C64.3547 136.983 73.813 126.642 85.4561 126.553L85.4717 126.553C97.1147 126.464 106.673 136.66 106.735 149.416Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -7; 0 0" dur="4.7s" repeatCount="indefinite" begin="9.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M38.8479 35.485L40.0478 280.147C40.1103 292.904 30.6374 303.247 18.9738 303.336L18.9582 303.336C7.29461 303.425 -2.2791 293.227 -2.34166 280.47L-3.54156 35.8082C-3.60391 23.0521 5.86898 12.7095 17.5324 12.6205L17.548 12.6204C29.2115 12.5315 38.7851 22.7289 38.8479 35.485Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -5; 0 0" dur="5.7s" repeatCount="indefinite" begin="10s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M1229.74 239.416L1230.31 356.544C1230.37 369.3 1220.91 379.641 1209.27 379.73L1209.25 379.73C1197.61 379.819 1188.05 369.623 1187.99 356.868L1187.42 239.739C1187.35 226.983 1196.81 216.642 1208.46 216.553L1208.47 216.553C1220.11 216.464 1229.67 226.66 1229.74 239.416Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -6; 0 0" dur="5.1s" repeatCount="indefinite" begin="10.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M1161.85 125.485L1163.05 370.147C1163.11 382.904 1153.64 393.247 1141.97 393.336L1141.96 393.336C1130.29 393.425 1120.72 383.227 1120.66 370.47L1119.46 125.808C1119.4 113.052 1128.87 102.709 1140.53 102.621L1140.55 102.62C1152.21 102.531 1161.79 112.729 1161.85 125.485Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -8; 0 0" dur="4.3s" repeatCount="indefinite" begin="11s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M1015.07 209.7L1016.27 454.362C1016.33 467.118 1006.86 477.462 995.194 477.551L995.178 477.551C983.515 477.64 973.941 467.442 973.879 454.685L972.679 210.023C972.616 197.267 982.089 186.924 993.753 186.835L993.768 186.835C1005.43 186.746 1015.01 196.944 1015.07 209.7Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -5; 0 0" dur="5.9s" repeatCount="indefinite" begin="11.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M1088.9 225.06L1089.98 469.693C1090.03 482.446 1080.52 492.796 1068.82 492.895L1068.8 492.895C1057.1 492.993 1047.5 482.803 1047.44 470.05L1046.37 225.417C1046.31 212.664 1055.82 202.314 1067.52 202.215L1067.54 202.215C1079.24 202.117 1088.84 212.307 1088.9 225.06Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -7; 0 0" dur="4.7s" repeatCount="indefinite" begin="12s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M1088.09 114.485L1088.33 168.112C1088.38 180.861 1078.92 191.206 1067.27 191.304L1067.25 191.305C1055.61 191.403 1046.05 181.219 1045.99 168.47L1045.76 114.842C1045.7 102.093 1055.17 91.7495 1066.82 91.651L1066.83 91.6508C1078.48 91.5524 1088.03 101.736 1088.09 114.485Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -4; 0 0" dur="6.3s" repeatCount="indefinite" begin="12.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M945.349 279.695L946.428 524.328C946.484 537.081 936.975 547.432 925.27 547.53L925.255 547.53C913.55 547.629 903.95 537.439 903.894 524.686L902.815 280.053C902.759 267.3 912.268 256.95 923.972 256.851L923.988 256.851C935.693 256.753 945.292 266.943 945.349 279.695Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -9; 0 0" dur="3.9s" repeatCount="indefinite" begin="13s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
              <path d="M944.593 181.699L944.758 219.448C944.814 232.196 935.352 242.539 923.709 242.638L923.694 242.638C912.051 242.736 902.499 232.554 902.443 219.806L902.278 182.057C902.222 169.31 911.684 158.967 923.326 158.869L923.342 158.869C934.803 158.772 944.238 168.636 944.583 181.104L944.593 181.699Z" stroke="black">
                <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -6; 0 0" dur="5.3s" repeatCount="indefinite" begin="13.5s" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
              </path>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Footer;
