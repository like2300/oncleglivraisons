import React, { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';

    switch(name) {
      case 'nom':
        if (!value.trim()) {
          error = 'Le nom est requis.';
        } else if (value.length < 2) {
          error = 'Le nom doit contenir au moins 2 caractères.';
        } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value)) {
          error = 'Le nom ne doit contenir que des lettres, espaces, traits d\'union et apostrophes.';
        }
        break;
      case 'telephone':
        if (value && !/^\+?[0-9\s\-\(\)]+$/.test(value)) {
          error = 'Le numéro de téléphone ne doit contenir que des chiffres, espaces, tirets et parenthèses.';
        } else if (value && value.replace(/\D/g, '').length < 8) {
          error = 'Le numéro de téléphone doit contenir au moins 8 chiffres.';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Le message est requis.';
        } else if (value.length < 10) {
          error = 'Le message doit contenir au moins 10 caractères.';
        } else if (/[<>{}[\]\\]/.test(value)) {
          error = 'Le message contient des caractères non autorisés.';
        } else if (/(spam|http|www|script|javascript)/i.test(value)) {
          error = 'Le message contient des termes non autorisés.';
        }
        break;
      default:
        break;
    }

    return error;
  };

  // Gestion des animations Intersection Observer (remplace ton <script>)
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = sectionRef.current?.querySelectorAll('.reveal-element') || [];
    revealElements.forEach(el => observer.observe(el));

    return () => revealElements.forEach(el => observer.unobserve(el));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    // Validate the field and update errors
    const error = validateField(id, value);
    setErrors(prev => ({
      ...prev,
      [id]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Formatage pour WhatsApp
    const phoneNumber = '242066338224';
    const text = `*Nouveau message d'Oncle G*:\n\n*Nom:* ${encodeURIComponent(formData.nom)}\n*Tel:* ${encodeURIComponent(formData.telephone || 'Non fourni')}\n\n*Message:* ${encodeURIComponent(formData.message)}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div ref={sectionRef} className="bg-white text-black antialiased overflow-x-hidden font-['Halcom',_sans-serif]">

        <header className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-6 overflow-hidden">
            <div className="absolute top-10 left-0 w-full text-[18vw] md:text-[15vw] font-black uppercase select-none -z-10 leading-none tracking-tighter opacity-[0.03] text-center md:text-left reveal-element">
                contact
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 md:gap-12">
                <div className="relative z-10 w-full">
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-6 reveal-element delay-100">
                        Appelez<br />
                        <span className="relative inline-block">
                            l'Oncle.
                            <span className="absolute bottom-1 md:bottom-3 left-0 w-full h-2 md:h-4 bg-yellow-400 -z-10 opacity-60"></span>
                        </span>
                    </h1>
                </div>

                <div className="lg:max-w-md lg:mb-8 w-full reveal-element delay-200">
                    <div className="border-l-2 border-yellow-400 pl-6 py-2">
                        <p className="text-xl md:text-2xl font-light italic leading-relaxed text-gray-800">
                            "Le service n'est pas une fonction, c'est une attitude. Celle d'un proche qui veille sur vous."
                        </p>
                        <p className="mt-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
                            L'esprit de famille — Est. {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 border-t border-b border-gray-200 reveal-element delay-300">
                <div className="bg-white p-8 md:p-12 lg:p-20 flex flex-col justify-between group hover:bg-gray-50 transition-colors duration-500 min-h-[300px]">
                    <div>
                        <span className="text-yellow-600 font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2">
                            <span className="w-6 md:w-8 h-px bg-yellow-600 inline-block"></span>
                            Immédiat
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 md:mt-6 uppercase leading-tight">Des numéros,<br /> des solutions</h2>
                        <p className="font-light text-gray-500 mt-4 md:mt-8 text-lg md:text-xl leading-relaxed max-w-sm">
                            Un coup de fil suffit. Derrière la ligne, une voix rassurante qui prend en charge vos besoins.
                        </p>
                    </div>
                    <div className="mt-12 md:mt-20">
                      <a href="tel:+242066338224" className="block text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter hover:text-yellow-500 transition-colors break-words">
                          +242 06...
                      </a>
                      <a  href="tel:+242055600366" className="block text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter hover:text-yellow-500 transition-colors break-words">
                          +242 05...
                      </a>
                        <span className="text-xs text-gray-400 uppercase tracking-widest mt-2 block md:hidden">Touchez pour appeler</span>
                    </div>
                </div>

                <div className="bg-white p-8 md:p-12 lg:p-20 flex flex-col justify-between group hover:bg-gray-50 transition-colors duration-500 min-h-[300px]">
                    <div>
                        <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2">
                            <span className="w-6 md:w-8 h-px bg-gray-400 inline-block"></span>
                            ÉCRIVEZ-LUI !
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 md:mt-6 uppercase leading-tight">Chaque message est une lettre</h2>
                        <p className="font-light text-gray-500 mt-4 md:mt-8 text-lg md:text-xl leading-relaxed max-w-sm">
                            La réponse est toujours humaine, jamais automatique.
                        </p>
                    </div>
                    <div className="mt-12 md:mt-20">
                        <a href="mailto:contact@oncleglivraisons.com" className="group/btn inline-flex items-center gap-2 md:gap-4 text-lg md:text-xl font-bold uppercase tracking-widest">
                            <span className="border-b-2 border-black group-hover/btn:border-yellow-500 transition-all pb-1">Envoyer un mot</span>
                            <span className="material-symbols-outlined text-yellow-500 transition-transform group-hover/btn:translate-x-2">arrow_right_alt</span>
                        </a>
                    </div>
                </div>
            </div>

            <section className="mt-20 md:mt-32 max-w-3xl mx-auto">
                <div className="text-center mb-12 md:mb-16 reveal-element">
                    <span className="text-yellow-500 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold block mb-2">— Contact Privé</span>
                    <h3 className="text-3xl md:text-4xl font-light italic text-black">Laissez une trace.</h3>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12">
                        <div className="group relative reveal-element delay-100">
                            <input
                              type="text"
                              id="nom"
                              value={formData.nom}
                              onChange={handleChange}
                              className={`peer w-full bg-transparent border-b-2 ${errors.nom ? 'border-red-500' : 'border-gray-200'} py-3 outline-none text-lg md:text-xl font-bold text-black focus:border-yellow-500 transition-colors placeholder-transparent`}
                              placeholder="Votre Nom"
                              pattern="[a-zA-ZÀ-ÿ\s'-]*"
                              title="Seuls les lettres, espaces, traits d'union et apostrophes sont autorisés"
                            />
                            <label htmlFor="nom" className="absolute left-0 -top-3 text-gray-400 text-[10px] md:text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-yellow-600 peer-focus:text-[10px]">Nom Complet</label>
                            {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
                        </div>
                        <div className="group relative reveal-element delay-100">
                            <input
                              type="tel"
                              id="telephone"
                              value={formData.telephone}
                              onChange={handleChange}
                              className={`peer w-full bg-transparent border-b-2 ${errors.telephone ? 'border-red-500' : 'border-gray-200'} py-3 outline-none text-lg md:text-xl font-bold text-black focus:border-yellow-500 transition-colors placeholder-transparent`}
                              placeholder="Votre TéléPhone"
                              pattern="[0-9\s\-\+\(\)]*"
                              title="Seuls les chiffres, espaces, tirets, parenthèses et signe + sont autorisés"
                            />
                            <label htmlFor="telephone" className="absolute left-0 -top-3 text-gray-400 text-[10px] md:text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-yellow-600 peer-focus:text-[10px]">Téléphone</label>
                            {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
                        </div>
                        <div className="md:col-span-2 group relative mt-4 md:mt-8 reveal-element delay-200">
                            <textarea
                              id="message"
                              value={formData.message}
                              onChange={handleChange}
                              className={`peer w-full bg-transparent border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-200'} py-3 outline-none text-xl md:text-2xl font-light resize-none h-32 focus:border-yellow-500 transition-colors placeholder-transparent`}
                              placeholder="Votre Message"
                              maxLength="500"
                              title="Message limité à 500 caractères, sans balises HTML ni liens"
                            ></textarea>
                            <label htmlFor="message" className="absolute left-0 -top-3 text-gray-400 text-[10px] md:text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-yellow-600 peer-focus:text-[10px]">Votre message à l'Oncle...</label>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                        <div className="md:col-span-2 mt-8 flex justify-end reveal-element delay-300">
                            <button type="submit" className="w-full md:w-auto bg-black text-white px-12 py-5 md:py-6 text-base md:text-lg font-black uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-xl">
                                Envoyer
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </main>

        <div className="lg:hidden h-32"></div>
    </div>
  );
};

export default ContactSection;
