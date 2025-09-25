import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after button appears
      setTimeout(() => setShowTooltip(true), 1000);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 6000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "5531998394531";
  const message = "Olá! Gostaria de agendar um horário na BarberBeer.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 bg-white text-black p-3 rounded-lg shadow-lg max-w-xs animate-bounce">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700"
            >
              <X size={12} />
            </button>
            <p className="text-sm font-semibold mb-1">Precisa de ajuda?</p>
            <p className="text-xs text-gray-600">
              Clique aqui para falar conosco via WhatsApp!
            </p>
            <div className="absolute bottom-0 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={28} />
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            1
          </div>
        </a>
      </div>

      {/* Mobile Bottom Bar Alternative (Hidden on this design but available) */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white p-4 z-40 md:hidden" style={{ display: 'none' }}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 font-semibold"
        >
          <MessageCircle size={20} />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;