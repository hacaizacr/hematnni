import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-yellow-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-orange-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Mobile: flex-col, Desktop: lg:flex-row */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Text Content (Arriba en móvil) */}
          <div className="flex-1 text-center lg:text-left z-10 w-full lg:pt-24">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 lg:mb-6">
              <span className="block text-white">Elevamos tu</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">
                Experiencia.
              </span>
              <span className="block text-white">Premium Vaping.</span>
            </h1>
            <p className="mt-4 text-base md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-8 leading-relaxed">
              Descubre la auténtica Cloud Culture con Hematnni. Dispositivos de última generación, máxima duración y garantía de originalidad en cada calada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto px-4 sm:px-0">
              <a href="#catalogo" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-400 transition-all shadow-lg hover:shadow-orange-500/25 w-full sm:w-auto">
                Ver Catálogo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image/Visual Content (Abajo en móvil) */}
          <div className="flex-1 relative z-10 flex justify-center items-center h-[300px] sm:h-[400px] lg:h-[600px] w-full mt-4 lg:mt-0">
            {/* Resplandor (Glow) intenso detrás de la imagen */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 bg-orange-500/30 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Imagen Principal con Animación de Levitación */}
            <style>
              {`
                @keyframes float-hero {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
                .animate-float-hero {
                  animation: float-hero 6s ease-in-out infinite;
                }
              `}
            </style>
            <img 
              src="/assets/vapes/hero-trio.webp" 
              alt="Hematnni Premium Vapes"
              className="relative z-10 w-full max-w-md lg:max-w-xl object-contain drop-shadow-[0_0_30px_rgba(249,115,22,0.3)] animate-float-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
