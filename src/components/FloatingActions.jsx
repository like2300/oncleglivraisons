import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  X,
  ArrowUp,
  Send,
  MessageSquare,
  Phone,
  ExternalLink,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Bonjour ! Je suis <strong>Oncle G</strong>. Comment puis-je t'aider aujourd'hui ?" }
  ]);
  const [lastQuestionIdx, setLastQuestionIdx] = useState(null);
  const [expandedService, setExpandedService] = useState(null);
  const chatEndRef = useRef(null);

  const SERVICES = [
    { name: "G-PRO E-commerce", desc: "Livraison rapide en moins de 1h", icon: " " },
    { name: "ALLÔ'Gaz", desc: "Commande de gaz à domicile", icon: " " },
    { name: "G-PRO Illimité", desc: "Solutions professionnelles", icon: "" },
    { name: "CONCIERGERIE Express", desc: "Services du quotidien", icon: "" }
  ];

  const FAQS = [
    { q: "Tarifs", r: "Nos tarifs varient entre <strong>1000 XAF et 3000 XAF</strong> selon la distance à Brazzaville." },
    { q: "Zone de livraison", r: "Nous couvrons tout <strong>Brazzaville</strong> et bientôt <strong>Pointe-Noire</strong> sur demande." },
    { q: "Commander", r: "Appelez l'Oncle au <a href='tel:+242066338224' class='text-yellow-600 font-bold underline'>+242 06 633 82 24</a>." }
  ];

  const toggleService = (serviceName) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.pageYOffset > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAsk = (faq) => {
    setMessages(prev => [...prev, { role: 'user', content: faq.q }]);
    setTimeout(() => {
      setMessages(prev => {
        const newIdx = prev.length;
        setLastQuestionIdx(newIdx);
        return [...prev, {
          role: 'bot',
          content: faq.q === "Explore nos services" ? "services" : faq.r,
          showFeedback: true,
          feedbackText: "Ai-je bien répondu à ta question, mon neveu/nièce ?"
        }];
      });
    }, 600);
  };

  const handleExploreServices = () => {
    setMessages(prev => [...prev, { role: 'user', content: "Explore nos services" }]);
    setTimeout(() => {
      setMessages(prev => {
        const newIdx = prev.length;
        setLastQuestionIdx(newIdx);
        return [...prev, {
          role: 'bot',
          content: "services",
          showFeedback: true,
          feedbackText: "Ai-je bien répondu à ta question, mon neveu/nièce ?"
        }];
      });
    }, 600);
  };

  const handleFeedback = (isPositive) => {
    if (isPositive) {
      setMessages(prev => [...prev, {
        role: 'user',
        content: "Oui"
      }]);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: 'bot',
          content: "Ravi que ton oncle t'ait aidé ! 💛"
        }]);
      }, 600);
    } else {
      setMessages(prev => [...prev, {
        role: 'user',
        content: "Non"
      }]);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: 'bot',
          content: "Je te recommande de visiter le site, il y a plus de détails et une explication complète. 🌐"
        }]);
      }, 600);
    }
    setLastQuestionIdx(null);
  };

  return (
    <>
      {/* BOUTONS FLOTTANTS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[9999] items-end">

        {/* Scroll Top - Animé */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-white/80 backdrop-blur-md text-black shadow-lg rounded-full flex items-center justify-center hover:bg-white transition-all border border-gray-200"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Bouton Chat Principal */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 ${
            isChatOpen ? 'bg-black text-white rotate-90' : 'bg-yellow-500 text-black'
          }`}
        >
          {isChatOpen ? <X size={28} /> : <MessageCircle size={28} />}
          {!isChatOpen && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[8px] text-white items-center justify-center font-bold">1</span>
            </span>
          )}
        </button>
      </div>

      {/* FENETRE DE CHAT */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:w-[380px] h-[70vh] sm:h-[550px] bg-white rounded-[2rem] shadow-2xl z-[9998] flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header épuré */}
            <div className="bg-primary border-b border-gray-50 p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">

                <div>
                  <h4 className="text-sm font-bold text-black tracking-tight">Oncle G Bot</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-white uppercase font-medium tracking-wider">En ligne</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corps du Chat */}
            <div className="flex-grow p-4 overflow-y-auto   backdrop-blur-sm backdrop-filter backdrop-opacity-50 space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={idx}
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm ${
                      msg.role === 'bot'
                        ? 'bg-white text-gray-700 rounded-2xl rounded-tl-none border border-gray-100'
                        : 'bg-black text-white rounded-2xl rounded-tr-none'
                    }`}
                  >
                    {msg.content === "services" ? (
                      <div className="space-y-2">
                        <p className="text-gray-600 mb-3">Nos services :</p>
                        {SERVICES.map((service) => (
                          <div key={service.name} className="w-full">
                            <button
                              onClick={() => toggleService(service.name)}
                              className="w-full flex items-center justify-between p-3 rounded-xl bg-primary text-white font-bold text-xs hover:bg-yellow-600 transition-all transform hover:scale-[1.02]"
                            >
                              <span className="flex items-center gap-2">
                                <span className="text-lg">{service.icon}</span>
                                {service.name}
                              </span>
                              <span className="text-lg">{expandedService === service.name ? '−' : '+'}</span>
                            </button>
                            {expandedService === service.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-2 ml-2 p-3 bg-gray-50 rounded-lg border border-gray-200"
                              >
                                <p className="text-gray-700 text-xs">{service.desc}</p>
                                <a
                                  href="https://wa.me/242066338224"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 mt-2 text-xs text-green-600 font-semibold hover:underline"
                                >
                                  Commander <ExternalLink size={10} />
                                </a>
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: msg.content }} />
                    )}
                    {msg.role === 'bot' && msg.showFeedback && lastQuestionIdx === idx && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs text-gray-600 mb-2 italic">{msg.feedbackText}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleFeedback(true)}
                            className="flex items-center gap-1 text-xs bg-primary text-white px-3 py-1.5 rounded-full font-bold hover:bg-yellow-600 transition-all"
                          >
                            <ThumbsUp size={12} /> Oui
                          </button>
                          <button
                            onClick={() => handleFeedback(false)}
                            className="flex items-center gap-1 text-xs bg-black text-white px-3 py-1.5 rounded-full font-bold hover:bg-gray-800 transition-all"
                          >
                            <ThumbsDown size={12} /> Non
                          </button>
                        </div>
                      </div>
                    )}
                    {msg.role === 'bot' && msg.content !== "services" && (
                      <div className="mt-3 pt-3 border-t border-gray-50 flex items-center gap-2">
                        <a
                          href="https://wa.me/242066338224"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] flex items-center gap-1 text-green-600 font-semibold hover:opacity-80 transition-opacity"
                        >
                          WhatsApp <ExternalLink size={10} />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestions de questions */}
            <div className="p-4 bg-white border-t border-gray-50">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleExploreServices}
                  className="text-[11px] bg-primary text-white hover:bg-yellow-600 transition-all px-3 py-2 rounded-full font-bold"
                >
                  Explore nos services
                </button>
                {FAQS.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => handleAsk(faq)}
                    className="text-[11px] bg-primary text-white hover:bg-yellow-600 transition-all px-3 py-2 rounded-full font-bold"
                  >
                    {faq.q}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-black border-t border-gray-50 text-center">
              <p className="text-[9px] text-white font-medium tracking-widest uppercase">
                Oncle G Livraisons
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default FloatingActions;
