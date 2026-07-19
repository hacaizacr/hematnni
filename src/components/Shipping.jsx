import React from 'react';
import { MapPin, Navigation, Map, Truck } from 'lucide-react';

const Shipping = () => {
  return (
    <section id="envios" className="w-full py-16 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#070b14] to-[#0a0f1d] border-t border-b border-slate-800/50">
      {/* Fondo de Mapa */}
      <div className="absolute inset-0 bg-[url('/assets/quito-map.webp')] bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 flex flex-col items-center">
          <div className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest mb-4">
            COBERTURA ACTIVA
          </div>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent mb-6 tracking-tight pt-2 pb-4 leading-normal">
            Zonas de Entrega en Quito
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed font-medium">
            Coordinamos tu envío de forma rápida y segura directamente a tu ubicación.
          </p>
        </div>

        {/* Contenedor Minimalista con Gap */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-stretch gap-8 border-t border-gray-800/50 pt-8">
          
          {/* Zona Norte */}
          <div className="flex-1 flex items-center justify-between lg:flex-col lg:justify-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-default">
            <div className="flex items-center gap-4 lg:flex-col lg:gap-5">
              <MapPin className="w-6 h-6 lg:w-8 lg:h-8 text-orange-400 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-lg lg:text-xl font-bold text-white tracking-wide">Zona Norte</h3>
            </div>
            <div className="text-right lg:text-center mt-0 lg:mt-6">
              <span className="text-sm lg:text-base text-gray-400 font-medium">Consultar tarifa</span>
            </div>
          </div>

          {/* Zona Sur */}
          <div className="flex-1 flex items-center justify-between lg:flex-col lg:justify-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-default">
            <div className="flex items-center gap-4 lg:flex-col lg:gap-5">
              <Map className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-500 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-lg lg:text-xl font-bold text-white tracking-wide">Zona Sur</h3>
            </div>
            <div className="text-right lg:text-center mt-0 lg:mt-6">
              <span className="text-sm lg:text-base text-gray-400 font-medium">Consultar tarifa</span>
            </div>
          </div>

          {/* Zona Valles */}
          <div className="flex-1 flex items-center justify-between lg:flex-col lg:justify-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-default">
            <div className="flex items-center gap-4 lg:flex-col lg:gap-5">
              <Navigation className="w-6 h-6 lg:w-8 lg:h-8 text-blue-400 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-lg lg:text-xl font-bold text-white tracking-wide lg:text-center">Zona Valles</h3>
            </div>
            <div className="text-right lg:text-center mt-0 lg:mt-6">
              <span className="text-sm lg:text-base text-gray-400 font-medium">Consultar tarifa</span>
            </div>
          </div>

        </div>

        {/* Banner de Envíos Nacionales */}
        <div className="max-w-5xl mx-auto mt-8 p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left hover:bg-orange-500/10 transition-colors duration-300">
          <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-orange-400" strokeWidth={1.5} />
          </div>
          <p className="text-sm lg:text-base text-gray-300 font-medium">
            ¿No estás en Quito? <strong className="text-white">Realizamos envíos 100% seguros a todas las provincias</strong> del Ecuador a través de Servientrega.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Shipping;
