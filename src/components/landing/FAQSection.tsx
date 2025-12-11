import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo recibiré el ebook después de la compra?",
    answer:
      "Inmediatamente después de completar tu pago, recibirás un correo electrónico con el enlace de descarga del ebook en formato PDF. El acceso es instantáneo y podrás descargarlo en todos tus dispositivos.",
  },
  {
    question: "¿En qué dispositivos puedo leer el ebook?",
    answer:
      "El ebook está en formato PDF universal, compatible con cualquier dispositivo: computadoras (Windows, Mac, Linux), tablets, smartphones (iOS, Android) y lectores de ebooks. Puedes leerlo con cualquier aplicación de PDF.",
  },
  {
    question: "¿El contenido está actualizado con las últimas técnicas?",
    answer:
      "Sí, todo el contenido está basado en las investigaciones más recientes y protocolos validados científicamente. Incluye técnicas modernas de diagnóstico con tomografía y los métodos de tracción más efectivos utilizados actualmente.",
  },
  {
    question: "¿Es adecuado para estudiantes de odontología?",
    answer:
      "Este ebook está diseñado tanto para estudiantes avanzados como para profesionales ya establecidos. El contenido progresivo permite que estudiantes comprendan los fundamentos mientras que los ortodoncistas experimentados pueden profundizar en técnicas especializadas.",
  },
  {
    question: "¿Hay algún costo adicional o suscripción?",
    answer:
      "No. El precio de USD 10 es un pago único que te da acceso completo y permanente al ebook. No hay costos ocultos, suscripciones mensuales ni cargos adicionales de ningún tipo.",
  },
  {
    question: "¿Puedo imprimir el ebook?",
    answer:
      "Sí, el archivo PDF te permite imprimirlo si lo prefieres. Puedes imprimir el documento completo o solo las secciones que necesites para tu consulta o estudio.",
  },
  {
    question: "¿Ofrecen garantía de devolución?",
    answer:
      "Sí, ofrecemos una garantía de 7 días. Si el contenido no cumple con tus expectativas profesionales, puedes solicitar un reembolso completo dentro de los primeros 7 días después de tu compra.",
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
