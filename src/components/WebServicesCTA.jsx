import React from 'react';
import { Rocket } from 'lucide-react';

const WebServicesCTA = () => {
  const phoneNumber = import.meta.env.VITE_DEV_SERVICES_WHATSAPP || '593962696545';
  const defaultMessage = 'Hola! Vi la página de Hematnni y me gustaría cotizar una página web para mi negocio.';
  
  const handleQuoteClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="w-full py-14 px-4 bg-[#070b14] relative z-10 border-t border-slate-800/50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:bg-slate-900/50 transition-colors duration-500">
          
          {/* Subtle ambient light behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none z-0 group-hover:bg-orange-500/10 transition-colors duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl text-white font-semibold mb-3 tracking-wide">
              ¿Te gustaría una página web como esta para tu negocio?
            </h2>
            
            <p className="text-slate-400 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Desarrollamos plataformas de alta gama, e-commerce escalables y catálogos digitales optimizados con tecnología de última generación. Impulsa tu marca con un diseño exclusivo, rápido y adaptado a tus necesidades.
            </p>
            
            <button 
              onClick={handleQuoteClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-500 hover:to-yellow-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] active:scale-95"
            >
              <Rocket className="w-5 h-5 mr-3 shrink-0" />
              Cotizar mi Página Web
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebServicesCTA;
