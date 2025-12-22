import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo recibiré el ebook después de la compra?",
    answer:
      "Inmediatamente después de completar tu pago, recibirás un correo electrónico con el enlace de descarga del Guía en formato PDF. El acceso es instantáneo y podrás abrirlo en todos tus dispositivos.",
  },
  {
    question: "¿En qué dispositivos puedo leer el ebook?",
    answer:
      "El archivo está en formato PDF universal, compatible con cualquier dispositivo: computadoras (Windows, Mac, Linux), tablets, smartphones (iOS, Android) y lectores de ebooks. No necesitas ningún programa especial.",
  },
  {
    question: "¿El contenido está actualizado con las últimas técnicas?",
    answer:
      "Sí. Todo el contenido está basado en protocolos clínicos actualizados y validados científicamente. Incluye clasificación hemodinámica, estabilización paso a paso, y manejo farmacológico según los estándares más recientes.",
  },
  {
    question: "¿Es adecuado para estudiantes o veterinarios recién graduados?",
    answer:
      "Sí. El Guía está diseñado para que cualquier clínico —desde principiantes hasta profesionales con experiencia— pueda aplicar los protocolos con seguridad. Incluso si no tienes ecocardiógrafo, podrás actuar desde el examen físico.",
  },
  {
    question: "¿Hay algún costo adicional o suscripción?",
    answer:
      "No. El pago de USD 10 es único y te da acceso completo y vitalicio al Guía. Sin suscripciones mensuales, sin cargos ocultos, sin letra pequeña.",
  },
  {
    question: "¿Puedo imprimir el ebook?",
    answer:
      "Claro. El PDF está listo para impresión. Puedes imprimirlo completo o solo las secciones que quieras tener a mano en tu consultorio o clínica.",
  },
  {
    question: "¿Ofrecen garantía de devolución?",
    answer:
      "Sí. Tienes una garantía de 7 días. Si consideras que el contenido no aporta valor real a tu práctica clínica, te devolvemos el 100% de tu inversión. Sin preguntas. Sin burocracia.",
  },
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background-subtle">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Respuestas a las dudas más comunes sobre el ebook
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-card rounded-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`shrink-0 transition-transform duration-300 ease-out ${
                    openFaq === idx ? "text-primary rotate-180" : "text-muted-foreground rotate-0"
                  }`}
                />
              </button>
              <div 
                className={`grid transition-all duration-300 ease-out ${
                  openFaq === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
