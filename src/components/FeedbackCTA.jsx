import React from 'react';
import { MessageCircle } from 'lucide-react';

const FeedbackCTA = () => {
  const phoneNumber = import.meta.env.VITE_FEEDBACK_WHATSAPP || '593962696545';
  const defaultMessage = 'Hola! Me encantó la página web y quiero dejarles un comentario.';
  
  const handleFeedbackClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="w-full py-12 px-4 bg-[#070b14] relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle ambient light to keep visual consistency with spotlights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none z-0" />
          
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl text-white font-semibold mb-2">
              ¿Te gusta nuestra plataforma?
            </h2>
            
            <p className="text-slate-400 text-sm md:text-base mb-6 max-w-lg mx-auto leading-relaxed">
              Tu opinión nos ayuda a mejorar. Si tienes dudas, sugerencias o simplemente quieres saludarnos, escríbenos directamente.
            </p>
            
            <button 
              onClick={handleFeedbackClick}
              className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 mr-3 shrink-0" />
              Escríbenos por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCTA;
