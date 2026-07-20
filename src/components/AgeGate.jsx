import React, { useState, useEffect } from 'react';

const AgeGate = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isVerified = false;
    try {
      isVerified = localStorage.getItem('hematnni_age_verified');
    } catch (error) {
      console.warn('ITP/Safari Storage Error ignorado:', error);
    }

    if (!isVerified) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleConfirm = () => {
    try {
      localStorage.setItem('hematnni_age_verified', 'true');
    } catch (error) {
      console.warn('ITP/Safari Storage Error ignorado:', error);
    }
    
    // El modal siempre debe cerrarse incluso si localStorage falló
    setIsVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleDeny = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-3xl"
      style={{ touchAction: 'none' }}
    >
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
          Verificación de Edad
        </h2>
        <p className="text-gray-300 mb-8">
          Debes ser mayor de edad para ingresar a este sitio. Al entrar, confirmas que tienes la edad legal para consumir productos de vapeo en tu país.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleConfirm}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-600 to-orange-500 text-white font-semibold hover:from-yellow-500 hover:to-orange-400 transition-all shadow-lg hover:shadow-orange-500/25"
          >
            Sí, soy mayor de edad
          </button>
          <button
            onClick={handleDeny}
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all"
          >
            No, salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeGate;
