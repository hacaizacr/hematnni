import React from 'react';
import { ShieldCheck, RefreshCw, Zap } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
      title: "100% Originales",
      subtitle: "Equipos sellados con QR de verificación."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-orange-400" />,
      title: "Garantía Cero Riesgo",
      subtitle: "¿Falla de fábrica? Te lo cambiamos inmediatamente por otro nuevo."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Entrega Inmediata",
      subtitle: "Cobertura express en zonas preferenciales."
    }
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {badges.map((badge, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:bg-white/10 transition-colors shadow-2xl">
            <div className="flex-shrink-0 mt-1">
              {badge.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{badge.title}</h3>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                {badge.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;
