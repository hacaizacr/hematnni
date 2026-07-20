import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import useCartStore from '../store/useCartStore';

const ProductCarousel = () => {
  const { products, fetchProducts, isLoading } = useCartStore();

  useEffect(() => {
    // [TODO: Arquitectura Backend]
    // Esta llamada asíncrona simulada se reemplazará por la conexión
    // directa al servicio de backend definitivo (ej. FastAPI o Go).
    // fetchProducts() en el store ejecutará un fetch a la API REST.
    fetchProducts();
  }, [fetchProducts]);

  const displayProducts = products.filter(p => p.type !== "Repuesto");

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
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 px-4 md:px-16 lg:px-24 pb-8 w-full max-w-7xl mx-auto">
        {displayProducts.map((product) => (
          <div key={product.id} className="flex justify-center w-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
