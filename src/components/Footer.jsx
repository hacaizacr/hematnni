import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer id="contacto" className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black relative overflow-hidden text-gray-300">
      
      {/* Esferas de luz ambientales */}
      <div className="bg-orange-500/5 blur-[120px] rounded-full w-96 h-96 absolute -top-20 -left-20 z-0 pointer-events-none" />
      <div className="bg-purple-600/5 blur-[120px] rounded-full w-96 h-96 absolute -bottom-20 -right-20 z-0 pointer-events-none" />

      {/* Borde Superior Iluminado */}
      <div className="relative z-10 h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* Main Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">

          {/* Columna Izquierda (Marca Masiva) */}
          <div className="lg:col-span-5 space-y-6 relative z-10">
            {/* Marca de Agua confinada */}
            <div className="absolute top-0 left-0 text-5xl md:text-7xl font-black text-white/5 opacity-5 pointer-events-none select-none whitespace-nowrap z-0 -translate-y-4 md:-translate-y-8 -translate-x-2">
              CLOUD CULTURE
            </div>
            
            <img 
              src="/assets/brand/logo-h.svg" 
              alt="Hematnni Logo" 
              width="200"
              height="50"
              loading="lazy"
              className="h-20 lg:h-24 w-auto relative z-10 mb-2 drop-shadow-sm" 
            />
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm relative z-10">
              La cúspide de la cultura del vapeo. Dispositivos de última generación, autenticidad garantizada y entregas inmediatas en la capital.
            </p>
            <div className="flex space-x-5 pt-2 relative z-10">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Columna Central (Navegación y Colección) */}
          <div className="lg:col-span-3 relative z-10 grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:space-y-10 lg:gap-0 lg:px-4">
            <div>
              <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Enlaces</h2>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Inicio</a></li>
                <li><a href="#catalogo" className="hover:text-yellow-500 transition-colors">Catálogo</a></li>
                <li><a href="#envios" className="hover:text-yellow-500 transition-colors">Zonas de Envío</a></li>
                <li><a href="#contacto" className="hover:text-yellow-500 transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Marcas</h2>
              <ul className="space-y-2 text-sm text-gray-400">
                <li translate="no" className="notranslate">Pyne Pod</li>
                <li translate="no" className="notranslate">WeFume</li>
                <li translate="no" className="notranslate">Solobar</li>
                <li translate="no" className="notranslate">Nevux</li>
              </ul>
            </div>
          </div>

          {/* Columna Derecha (Logística) - Alineación izquierda corregida */}
          <div className="lg:col-span-4 relative z-10 flex flex-col items-start text-left">
            <h2 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Contacto y Logística</h2>
            
            <ul className="space-y-5 text-sm w-full">
              <li>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0 text-yellow-500" />
                  <a href="https://wa.me/593999227426" className="hover:text-white transition-colors text-lg font-medium">
                    +593 99 922 7426
                  </a>
                </div>
              </li>
              
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 text-yellow-500 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-gray-300 font-medium pt-0.5">Entregas en Quito y Envíos a Provincias</p>
                  </div>
                </div>
              </li>
            </ul>

            {/* Glowing Badge movido debajo de logística para balancear */}
            <div className="relative mt-8 w-full max-w-[200px] group mx-auto lg:mx-0">
              <div className="absolute -inset-1 bg-orange-500/30 blur-2xl rounded-full transition-all duration-300 group-hover:bg-orange-500/40" />
              <div className="relative bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md text-center shadow-lg">
                <p className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Hasta 40,000 Puffs
                </p>
                <p className="text-xs font-semibold text-white/70 mt-1 uppercase tracking-widest">
                  100% Originales
                </p>
              </div>
            </div>

          </div>
          
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="mt-16 lg:mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="text-center md:text-left">
            © 2026 Hematnni. Todos los derechos reservados.
          </p>
          <div className="space-x-6 relative z-10">
            <a href="#" className="hover:text-gray-300 transition-colors">Términos</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>

      {/* Franja de Advertencia Sanitaria */}
      <div className="w-full bg-black py-4 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-widest leading-relaxed px-2">
            ADVERTENCIA LEGAL: Este producto contiene nicotina. La nicotina es una sustancia química altamente adictiva. Prohibida su venta y distribución a menores de 18 años.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
