import React from 'react';
import { ShoppingCart, Plus } from 'lucide-react';
import useCartStore from '../store/useCartStore';

const ProductCard = ({ product }) => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '593999227426';
  const addToCart = useCartStore((state) => state.addToCart);
  
  const handleBuyBase = () => {
    addToCart(product, 1);
    const message = `Hola Hematnni, quiero pedir el ${product.name}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleBuyWithEssence = () => {
    addToCart({ id: 'flavor-refill', name: 'Recarga de Sabor', price: 8 }, 1);
    
    // Si el equipo base está agotado, cambiamos el mensaje dinámicamente
    const isEquipoDisp = product.isEquipoDisponible !== undefined ? product.isEquipoDisponible : !product.isAgotado;
    const message = !isEquipoDisp 
      ? `Hola, me interesa comprar solo el cartucho de esencia para el ${product.name}.`
      : `Hola Hematnni, quiero pedir una recarga de sabor para mi dispositivo modular.`;
      
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  // Función auxiliar requerida
  const isModular = product.type === "Modular (Base)";
  const getGradientClass = (placeholder) => {
    const gradientMap = {
      "gradient-blue-red": "bg-gradient-to-br from-blue-500 to-red-500",
      "gradient-black-blue": "bg-gradient-to-br from-gray-900 to-blue-800",
      "gradient-pink-purple": "bg-gradient-to-br from-pink-500 to-purple-500",
      "gradient-black-red": "bg-gradient-to-br from-gray-900 to-red-600",
      "gradient-purple-blue": "bg-gradient-to-br from-purple-500 to-blue-500",
      "gradient-yellow-pink": "bg-gradient-to-br from-yellow-400 to-pink-500",
      "gradient-cyan-black": "bg-gradient-to-br from-cyan-400 to-gray-900",
      "gradient-green-yellow": "bg-gradient-to-br from-emerald-400 to-yellow-400",
      "gradient-black-orange": "bg-gradient-to-br from-gray-900 to-orange-500",
      "gradient-orange-white": "bg-gradient-to-br from-orange-500 to-gray-200",
      "gradient-white-green": "bg-gradient-to-br from-gray-200 to-emerald-500",
      "gradient-purple-orange": "bg-gradient-to-br from-purple-600 to-orange-500",
      "gradient-purple-white": "bg-gradient-to-br from-purple-500 to-gray-200",
      "gradient-rainbow": "bg-gradient-to-br from-yellow-400 via-pink-500 to-cyan-400",
      "gradient-teal-black": "bg-gradient-to-br from-teal-400 to-slate-900",
      "gradient-violet-dark": "bg-gradient-to-br from-violet-600 to-gray-900",
    };
    return gradientMap[placeholder] || "bg-gradient-to-br from-blue-500 to-purple-500";
  };

  // Para el texto del badge, seguimos usando text-transparent bg-clip-text si se quiere, 
  // o pasamos a usar una clase base. Como el text gradient necesita from/to, usaremos la lógica previa
  // pero ya que la pediste aislada, la mantendremos simple para el badge.
  const gradientMapForText = {
    "gradient-blue-red": "from-blue-500 to-red-500",
    "gradient-black-blue": "from-slate-800 to-blue-600",
    "gradient-pink-purple": "from-pink-500 to-purple-500",
    "gradient-black-red": "from-slate-900 to-red-600",
    "gradient-purple-blue": "from-purple-500 to-blue-500",
    "gradient-yellow-pink": "from-yellow-400 to-pink-500",
    "gradient-cyan-black": "from-cyan-400 to-slate-900",
    "gradient-green-yellow": "from-emerald-400 to-yellow-400",
    "gradient-black-orange": "from-slate-900 to-orange-500",
    "gradient-orange-white": "from-orange-500 to-gray-200",
    "gradient-white-green": "from-gray-200 to-emerald-500",
    "gradient-purple-orange": "from-purple-600 to-orange-500",
    "gradient-purple-white": "from-purple-500 to-gray-200",
    "gradient-rainbow": "from-yellow-400 via-pink-500 to-cyan-400",
    "gradient-teal-black": "from-teal-400 to-slate-900",
    "gradient-violet-dark": "from-violet-500 to-indigo-500",
  };
  const badgeGradientClasses = gradientMapForText[product.imagePlaceholder] || "from-blue-500 to-purple-500";
  const isEquipoDisponible = product.isEquipoDisponible !== undefined ? product.isEquipoDisponible : !product.isAgotado;
  const isEsenciaDisponible = product.isEsenciaDisponible !== undefined ? product.isEsenciaDisponible : true;
  
  // Un producto solo se ve completamente agotado (blur y opacidad) si no tiene equipo disponible,
  // Y además no es modular, o siéndolo, tampoco tiene esencia disponible.
  const isVisualmenteAgotado = !isEquipoDisponible && (!isModular || !isEsenciaDisponible);

  return (
    <div className={`relative group w-[85vw] sm:w-80 flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-300 flex flex-col min-h-[460px] ${isVisualmenteAgotado ? 'opacity-50' : 'hover:bg-white/10'}`}>
      
      {/* Badge de Puffs */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg bg-gradient-to-r ${badgeGradientClasses}`}>
          {product.puffs}
        </span>
      </div>

      {/* Type Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold text-gray-300 bg-black/40 backdrop-blur-md border border-white/10">
          {product.type}
        </span>
      </div>

      {/* Image Container with Dynamic Gradient */}
      <div className={`relative h-48 mt-8 mb-6 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 shadow-lg group-hover:border-white/20 transition-all shrink-0 ${getGradientClass(product.imagePlaceholder)}`}>
        
        {/* Si hay imagen, la renderizamos, si no, mostramos el placeholder de texto */}
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            width="200"
            height="200"
            loading="lazy"
            className="h-full w-auto object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" 
          />
        ) : (
          <div className="relative z-10 flex items-center justify-center h-full w-full">
             <span translate="no" className="text-white/90 text-xs font-bold -rotate-90 whitespace-nowrap drop-shadow-md notranslate">
               {product.name}
             </span>
          </div>
        )}

        {/* Overlay y Badge de Agotado visual total */}
        {isVisualmenteAgotado && (
          <>
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[3px] z-20" />
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <span className="bg-neutral-900/80 border border-white/10 rounded-full px-4 py-1.5 text-xs font-bold text-white tracking-widest uppercase">
                Agotado
              </span>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 translate="no" className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 transition-all notranslate">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-white/80 mt-1 mb-2">
          {product.shortDescription}
        </p>
        <p className="text-sm text-gray-400 line-clamp-3 mb-4">
          {product.description}
        </p>
        
        <div className="mb-6">
          <span className="text-3xl font-black text-white">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Action Buttons (Pushed to bottom) */}
        <div className="mt-auto flex flex-col gap-2">
          <button 
            onClick={handleBuyBase}
            disabled={!isEquipoDisponible}
            className={`w-full flex items-center justify-center py-3 rounded-xl font-bold shadow-lg transition-all ${
              !isEquipoDisponible 
                ? 'bg-neutral-800 text-neutral-500 border-none cursor-not-allowed pointer-events-none'
                : 'bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-400 text-white hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-95'
            }`}
          >
            <ShoppingCart className="w-5 h-5 mr-2 shrink-0" />
            <span>{!isEquipoDisponible ? 'Equipo Agotado' : 'Comprar Equipo'}</span>
          </button>
          
          {isModular && (
            <button 
              onClick={handleBuyWithEssence}
              disabled={!isEsenciaDisponible}
              className={`w-full flex items-center justify-center py-2.5 rounded-xl text-sm font-medium border transition-all ${
                !isEsenciaDisponible
                  ? 'bg-neutral-800/50 text-neutral-500 border-transparent cursor-not-allowed pointer-events-none'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:scale-[1.02] active:scale-95'
              }`}
            >
              <Plus className="w-4 h-4 mr-2 shrink-0" />
              Añadir Esencia (+$8.00)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
