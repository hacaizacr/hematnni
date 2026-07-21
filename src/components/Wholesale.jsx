import React from 'react';
import { ArrowRight, Briefcase, ShoppingCart, RefreshCcw, Tag } from 'lucide-react';

const Wholesale = () => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '593999227426';
  const defaultMessage = 'Hola Hematnni, tengo un negocio y quiero acceder a la lista de precios mayoristas en PDF.';

  const handleWholesaleClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="mayorista" className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-orange-500/30 overflow-hidden relative">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-500/10 blur-[100px] pointer-events-none rounded-b-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-semibold mb-6">
            <Briefcase className="w-4 h-4" /> B2B Partners
          </div>
          <img 
            src="/assets/brand/logo-hematnni.svg" 
            alt="Hematnni Logo" 
            width="112"
            height="112"
            loading="lazy"
            className="h-20 lg:h-24 w-auto mb-6 mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Haz crecer tu negocio con el catálogo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">alta gama.</span>
          </h2>
        </div>

        {/* Grid de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 border border-orange-500/30">
              <ShoppingCart className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Compra inteligente.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Añade productos al carrito y el sistema calcula tu margen al instante.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 border border-orange-500/30">
              <RefreshCcw className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Combina a tu gusto.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mezcla marcas y sabores libremente.
            </p>
          </div>

          {/* Card 3 (Destacada) */}
          <div className="bg-white/5 border border-transparent rounded-2xl p-6 hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(234,88,12,0.15)] flex flex-col">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 border border-orange-500/50">
              <Tag className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Escalas de descuento.</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Desbloquea mejores márgenes automáticamente:
            </p>
            <div className="relative flex justify-between items-start mt-auto px-2 sm:px-4 pb-2">
              {/* Línea conectora horizontal */}
              <div className="absolute left-8 right-8 top-1.5 h-[2px] bg-orange-500/20" />
              
              {/* Nodo 1 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] mb-2" />
                <span className="text-white font-bold text-sm">5+</span>
                <span className="text-[10px] text-gray-500">unidades</span>
              </div>
              
              {/* Nodo 2 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] mb-2" />
                <span className="text-white font-bold text-sm">10+</span>
                <span className="text-[10px] text-gray-500">unidades</span>
              </div>
              
              {/* Nodo 3 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] mb-2" />
                <span className="text-white font-bold text-sm">30+</span>
                <span className="text-[10px] text-gray-500">unidades</span>
              </div>
            </div>
          </div>

        </div>

        {/* Call to Action - PDF */}
        <div className="max-w-2xl mx-auto bg-slate-900/50 border border-orange-500/20 rounded-3xl p-8 text-center backdrop-blur-sm">
          <p className="text-gray-300 font-medium mb-6">
            ¿Prefieres revisar los márgenes detallados? Solicita nuestro catálogo en PDF vía WhatsApp.
          </p>
          <button 
            onClick={handleWholesaleClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-500 hover:to-yellow-400 transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:scale-[1.02] active:scale-95"
          >
            Solicitar Catálogo Mayorista
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Wholesale;
