import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Los dispositivos son 100% originales?",
    answer: <>Absolutamente. Todos nuestros equipos como <span translate="no" className="notranslate font-semibold text-white">Pyne Pod</span> o <span translate="no" className="notranslate font-semibold text-white">Nevux</span> vienen sellados de fábrica y cuentan con códigos QR de verificación que puedes escanear para comprobar su autenticidad.</>
  },
  {
    question: "¿Cuánto tiempo tarda la entrega en Quito?",
    answer: "Garantizamos la entrega el mismo día de tu compra para todo Quito (Norte, Sur y Valles), sujeto al horario de confirmación de tu pedido."
  },
  {
    question: "¿Realizan envíos a provincias?",
    answer: "Sí, despachamos a nivel nacional de forma 100% segura mediante Servientrega. Recibirás tu pedido en la puerta de tu casa u oficina (aplica un pequeño recargo de envío)."
  },
  {
    question: "¿Cuáles son los métodos de pago?",
    answer: "Aceptamos pagos en efectivo al momento de recibir tu pedido (contra entrega) y transferencias bancarias directas (Banco del Pichincha y Banco de Guayaquil)."
  },
  {
    question: "¿Los equipos tienen garantía?",
    answer: "Sí, ofrecemos garantía por defectos de fábrica (como fallos en la batería interna antes de agotar los puffs o problemas de encendido). No cubre daños físicos por caídas o mal uso."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0f1d] to-[#070b14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start">
          
          {/* Columna Izquierda: Título y Subtítulo Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 z-10">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent mb-6 tracking-tight">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-medium">
              Resolvemos tus dudas para que disfrutes de la mejor experiencia de vapeo sin interrupciones.
            </p>
          </div>

          {/* Columna Derecha: Acordeón */}
          <div className="lg:col-span-8 z-10">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div 
                    key={index} 
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-colors hover:bg-white/10"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-yellow-400' : 'text-white'}`}>
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 text-gray-400 ${isOpen ? 'rotate-180 text-yellow-400' : 'rotate-0'}`} 
                      />
                    </button>
                    
                    {/* Contenedor Animado de la Respuesta */}
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;
