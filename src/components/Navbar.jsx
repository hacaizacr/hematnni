import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Inicio
              </a>
              <a href="#catalogo" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Catálogo
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Nosotros
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
