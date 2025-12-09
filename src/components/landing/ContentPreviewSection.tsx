import { CheckCircle } from "lucide-react";
import bookPreview from "@/assets/book-preview.png";

const contentItems = [
  {
    title: "Fundamentos y Diagnóstico",
    description: "Técnicas detalladas e ilustraciones para un diagnóstico preciso.",
  },
  {
    title: "Técnicas de Evaluación",
    description: "Métodos de evaluación clínica y radiográfica avanzados.",
  },
  {
    title: "Protocolos de Tratamiento",
    description: "Guías paso a paso para cada tipo de retención.",
  },
  {
    title: "Estudios de caso completos",
    description: "Casos clínicos documentados con seguimiento completo.",
  },
];

const ContentPreviewSection = () => {
  return (
    <section id="contenido" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <img
              src={bookPreview}
              className="rounded-xl shadow-lg border border-border w-full"
              alt="Book Preview"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Lo que te espera
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-6">
              Contenido del <span className="text-gradient">Ebook</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Acceso completo a protocolos clínicos validados y casos
              documentados paso a paso.
            </p>

            <div className="space-y-4">
              {contentItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="mt-1 text-primary shrink-0">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreviewSection;
