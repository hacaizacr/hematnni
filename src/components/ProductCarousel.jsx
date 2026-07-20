import React, { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import useCartStore from '../store/useCartStore';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { products, fetchProducts, isLoading } = useCartStore();

  useEffect(() => {
    // [TODO: Arquitectura Backend]
    // Esta llamada asíncrona simulada se reemplazará por la conexión
    // directa al servicio de backend definitivo (ej. FastAPI o Go).
    // fetchProducts() en el store ejecutará un fetch a la API REST.
    fetchProducts();
  }, [fetchProducts]);

  const displayProducts = products.filter(p => p.type !== "Repuesto");

  const handleScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollPosition = container.scrollLeft;
      const center = scrollPosition + container.clientWidth / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;

      // Iteramos sobre los hijos directos del contenedor flex
      Array.from(container.children).forEach((child, index) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(center - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      
      setActiveIndex(closestIndex);
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="catalogo" className="py-24 relative overflow-hidden min-h-[600px]">
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#0F172A]/80 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Nuestra Colección
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl">
              Explora nuestra cuidada selección de dispositivos de alta gama. Calidad y rendimiento garantizados.
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-yellow-400 transition-colors focus:outline-none"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-yellow-400 transition-colors focus:outline-none"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto px-8 md:px-16 lg:px-24 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth gap-6 items-stretch"
        >
          {displayProducts.map((product) => (
            <div 
              key={product.id} 
              className="snap-center min-w-[80vw] md:min-w-[350px] shrink-0 flex justify-center"
            >
              <div className="w-full flex justify-center">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-8 left-0 w-8 md:w-24 bg-gradient-to-r from-[#0F172A] to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-8 right-0 w-8 md:w-24 bg-gradient-to-l from-[#0F172A] to-transparent pointer-events-none" />
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-1 md:gap-2 mt-6 flex-wrap px-4">
        {displayProducts.map((_, index) => (
          <button 
            key={index}
            onClick={() => {
              // Permite clickear los puntos para navegar
              if(carouselRef.current) {
                const child = carouselRef.current.children[index];
                if(child) {
                  const scrollLeft = child.offsetLeft - (carouselRef.current.clientWidth / 2) + (child.clientWidth / 2);
                  carouselRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                }
              }
            }}
            aria-label={`Ir al producto ${index + 1}`}
            className="p-1.5 md:p-2 focus:outline-none group cursor-pointer"
          >
            <div className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'w-5 md:w-8 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]' 
                : 'bg-white/20 group-hover:bg-white/40'
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
