import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';

const Wholesale = () => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '593999227426';
  const defaultMessage = 'Hola Hematnni, tengo un negocio y quiero acceder a la lista de precios mayoristas.';

  const handleWholesaleClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="mayorista" className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-orange-500/30 overflow-hidden relative">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-500/10 blur-[100px] pointer-events-none rounded-b-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-semibold mb-4">
              <Briefcase className="w-4 h-4" /> B2B Partners
            </div>
            <img 
              src="/assets/brand/logo-hematnni.svg" 
              alt="Hematnni Logo" 
              width="112"
              height="112"
              loading="lazy"
              className="h-24 lg:h-28 w-auto mb-4 mx-auto lg:mx-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
            />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 lg:mb-6 tracking-tight leading-tight">
              Haz crecer tu negocio<br /> con el catálogo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">alta gama.</span>
            </h2>
            <div className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium space-y-2 mb-6 lg:mb-0">
              <p className="font-bold text-white">Comprar al por mayor ahora es automático.</p>
              <p>
                Olvídate de cotizaciones lentas. Simplemente añade los dispositivos que desees a tu carrito de compras. Nuestro sistema inteligente detectará al instante cuando acumules <strong className="text-white">5, 10 o 30 unidades</strong> (puedes combinar marcas y sabores) y aplicará automáticamente tus márgenes de ganancia y descuentos exclusivos antes de pagar.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <button 
              onClick={handleWholesaleClick}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-5 text-lg font-bold rounded-full text-white bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-500 hover:to-yellow-400 transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:scale-[1.02] active:scale-95"
            >
              Solicitar Catálogo Mayorista
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Wholesale;
