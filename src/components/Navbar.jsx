import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import useCartStore from '../store/useCartStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, toggleCart } = useCartStore();
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img 
              src="/assets/brand/logo-horizontal.svg" 
              alt="Hematnni Logo" 
              width="160"
              height="40"
              className="h-12 lg:h-16 w-auto" 
              fetchpriority="high" 
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Inicio
              </a>
              <a href="#catalogo" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Catálogo
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Nosotros
              </a>
              
              <button 
                onClick={toggleCart}
                className="relative text-gray-300 hover:text-white p-2 transition-colors focus:outline-none"
                aria-label="Abrir carrito"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute 0 top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-[10px] font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/4 bg-orange-500 rounded-full shadow-lg">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Right Section (Cart + Menu) */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleCart}
              className="relative text-gray-300 hover:text-white p-2 transition-colors focus:outline-none"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute 0 top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-orange-500 rounded-full shadow-lg">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium">Inicio</a>
            <a href="#catalogo" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium">Catálogo</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium">Nosotros</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
