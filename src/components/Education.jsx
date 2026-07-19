import React from 'react';
import { Puzzle, ArrowRight, Zap } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent mb-4 lg:mb-6 tracking-tight pt-2 pb-4 leading-normal">
            Elige tu Experiencia
          </h2>
          <p className="text-base lg:text-lg text-gray-400 font-medium">
            Ingeniería de vaporización adaptada a tu estilo de vida. Dos arquitecturas, un mismo estándar de calidad.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-12">
          
          {/* Feature 1: Formato All-in-One (Alineado Izquierda, Visual Derecha) */}
          <div className="flex flex-col lg:flex-row bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl lg:rounded-[2rem] overflow-hidden group hover:bg-white/10 transition-colors duration-500">
            {/* Contenido (Primero en móvil) */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative z-10 order-1 lg:order-none">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-7 h-7 lg:w-8 lg:h-8 text-orange-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 lg:mb-6">
                Formato All-in-One
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                Diseñado para la acción. Desempaqueta y disfruta al instante con un equipo sellado que no requiere configuraciones.
              </p>
              
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex items-start lg:items-center text-gray-400 text-sm lg:text-base">
                  <ArrowRight className="w-5 h-5 text-orange-500 mr-3 lg:mr-4 shrink-0 mt-0.5 lg:mt-0" />
                  Listo para usarse desde el primer segundo.
                </li>
                <li className="flex items-start lg:items-center text-gray-400 text-sm lg:text-base">
                  <ArrowRight className="w-5 h-5 text-orange-500 mr-3 lg:mr-4 shrink-0 mt-0.5 lg:mt-0" />
                  Cero mantenimiento requerido.
                </li>
                <li className="flex items-start lg:items-center text-gray-400 text-sm lg:text-base">
                  <ArrowRight className="w-5 h-5 text-orange-500 mr-3 lg:mr-4 shrink-0 mt-0.5 lg:mt-0" />
                  Máxima practicidad para el día a día.
                </li>
              </ul>
            </div>
            
            {/* Visual (Debajo en móvil) */}
            <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative overflow-hidden bg-gradient-to-br from-slate-900 to-black border-t lg:border-t-0 lg:border-l border-white/5 order-2 lg:order-none min-h-[350px] pb-8 lg:pb-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)] group-hover:opacity-100 opacity-50 transition-opacity duration-700 ease-out" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                 
                 <style>
                   {`
                     @keyframes fade-in-badge {
                       from { opacity: 0; transform: translateY(15px); }
                       to { opacity: 1; transform: translateY(0); }
                     }
                     .animate-badge-1 {
                       animation: fade-in-badge 0.8s ease-out forwards;
                     }
                     .animate-badge-2 {
                       animation: fade-in-badge 0.8s ease-out 0.3s forwards;
                     }
                   `}
                 </style>

                 {/* Contenedor de Imagen y Badges */}
                 <div className="relative flex items-center justify-center w-full max-w-[280px] group-hover:scale-105 transition-transform duration-500 z-10">
                   <img 
                     src="/assets/vapes/wefume.webp" 
                     alt="WeFume All-in-One" 
                     className="w-full object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.4)] relative z-10" 
                   />
                   
                   {/* Badge: Ready to Vape */}
                   <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-orange-500/50 text-orange-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)] opacity-0 animate-badge-1 whitespace-nowrap z-20">
                     Ready to Vape
                   </div>
                   
                   {/* Badge: 30K Puffs */}
                   <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-orange-500/50 text-orange-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center gap-1.5 opacity-0 animate-badge-2 whitespace-nowrap z-20">
                     <Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                     30K Puffs
                   </div>
                 </div>

              </div>
            </div>
          </div>

          {/* Feature 2: Ecosistema Modular */}
          <div className="flex flex-col lg:flex-row-reverse bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl lg:rounded-[2rem] overflow-hidden group hover:bg-white/10 transition-colors duration-500">
            {/* Contenido (Primero en móvil) */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative z-10 order-1 lg:order-none">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-500">
                <Puzzle className="w-7 h-7 lg:w-8 lg:h-8 text-orange-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 lg:mb-6">
                Ecosistema Modular
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                Lleva tu setup al siguiente nivel. Conserva el núcleo de alto rendimiento y renueva únicamente el cartucho de sabor. Inteligente y económico.
              </p>
              
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex items-start lg:items-center text-gray-400 text-sm lg:text-base">
                  <ArrowRight className="w-5 h-5 text-yellow-500 mr-3 lg:mr-4 shrink-0 mt-0.5 lg:mt-0" />
                  Conserva la batería y cambia solo la esencia.
                </li>
                <li className="flex items-start lg:items-center text-gray-400 text-sm lg:text-base">
                  <ArrowRight className="w-5 h-5 text-yellow-500 mr-3 lg:mr-4 shrink-0 mt-0.5 lg:mt-0" />
                  Mayor ahorro a largo plazo.
                </li>
                <li className="flex items-start lg:items-center text-gray-400 text-sm lg:text-base">
                  <ArrowRight className="w-5 h-5 text-yellow-500 mr-3 lg:mr-4 shrink-0 mt-0.5 lg:mt-0" />
                  Flexibilidad para intercambiar sabores.
                </li>
              </ul>
            </div>
            
            {/* Visual (Debajo en móvil, a la izquierda en desktop) */}
            <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative overflow-hidden bg-gradient-to-bl from-slate-900 to-black border-t lg:border-t-0 lg:border-r border-white/5 order-2 lg:order-none min-h-[400px] pb-8 lg:pb-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1),transparent_70%)] group-hover:opacity-100 opacity-50 transition-opacity duration-700 ease-out" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                 
                 {/* Contenedor de Imágenes y Badges centrado verticalmente */}
                 <div className="relative flex items-center justify-center gap-4 sm:gap-6 w-full max-w-[320px] mx-auto group-hover:scale-105 transition-transform duration-500 z-10">
                   
                   {/* Resplandor (Glow) detrás de ambas imágenes */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/30 rounded-full blur-[80px] pointer-events-none" />

                   {/* Contenedor Individual 1: Esencia */}
                   <div className="relative z-10 w-1/2 flex flex-col items-center">
                     {/* Badge flotante (overlap con margen negativo) */}
                     <div className="relative z-20 -mb-4 bg-black/60 backdrop-blur-md border border-orange-500/50 text-orange-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)] opacity-0 animate-badge-1 whitespace-nowrap">
                       Intercambiable
                     </div>
                     <img 
                       src="/assets/vapes/esencia-solo-bar.webp" 
                       alt="Esencia Intercambiable" 
                       className="w-full object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.4)] relative z-10" 
                     />
                   </div>

                   {/* Contenedor Individual 2: Base (Core Engine) */}
                   <div className="relative z-10 w-1/2 flex flex-col items-center mt-8">
                     <img 
                       src="/assets/vapes/solo-bar.webp" 
                       alt="Base Core Engine" 
                       className="w-full object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.4)] relative z-10" 
                     />
                     {/* Badge flotante (overlap con margen negativo) */}
                     <div className="relative z-20 -mt-4 bg-black/60 backdrop-blur-md border border-orange-500/50 text-orange-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)] opacity-0 animate-badge-2 whitespace-nowrap">
                       Core Engine
                     </div>
                   </div>

                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
