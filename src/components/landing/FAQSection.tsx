import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo recibiré el ebook después de la compra?",
    answer:
      "Inmediatamente después de completar tu pago, recibirás un correo electrónico con el enlace de descarga directa en formato PDF. El acceso es de por vida.",
  },
  {
    question: "¿En qué dispositivos puedo leer el ebook?",
    answer:
      "El ebook está en formato PDF, por lo que puedes leerlo en cualquier dispositivo: computadora, tablet, smartphone o e-reader que soporte PDF.",
  },
  {
    question: "¿El contenido está actualizado?",
    answer:
      "Sí, el contenido está actualizado con las últimas técnicas y protocolos validados científicamente en ortodonacia.",
  },
  {
    question: "¿Hay algún costo adicional?",
    answer:
      "No, el pago único de USD 10 incluye todo el contenido del ebook sin costos adicionales ni suscripciones.",
  },
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Preguntas <span className="text-gradient">Frecuentes</span>
        </h2>

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
                {openFaq === idx ? (
                  <ChevronDown className="text-primary shrink-0" />
                ) : (
                  <ChevronRight className="text-muted-foreground shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
