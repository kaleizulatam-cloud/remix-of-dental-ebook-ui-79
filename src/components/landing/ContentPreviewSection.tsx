import { CheckCircle } from "lucide-react";
import bookPreview from "@/assets/book-preview.png";

const contentBlocks = [
  {
    title: "Fundamentos y Diagnóstico",
    items: [
      "Definición y tiempo ideal de erupción",
      "Importancia del diagnóstico precoz",
      "Prevención de secuelas",
      "Evaluación del pronóstico",
    ],
  },
  {
    title: "Técnicas de Evaluación",
    items: [
      "Uso de radiografías en diagnóstico",
      "Aplicación de tomografía computarizada",
      "Interpretación de imágenes",
      "Interceptación temprana de caninos",
    ],
  },
  {
    title: "Protocolos de Tratamiento",
    items: [
      "Espacio necesario para erupción",
      "Técnicas de tracción ortodóncica",
      "Biomecánica segura y controlada",
      "Tratamiento de caninos impactados",
    ],
  },
  {
    title: "Además, obtendrás acceso a:",
    items: [
      "Decisiones según pronóstico: mantener, traccionar o extraer",
      "Estudios de caso con documentación fotográfica completa",
      "Resumen de protocolos de prevención e interceptación",
      "Guías paso a paso para cada procedimiento clínico",
    ],
  },
];

const ContentPreviewSection = () => {
  return (
    <section id="contenido" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header centralizado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contenido del <span className="text-gradient">Ebook</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acceso completo a protocolos clínicos validados y casos documentados paso a paso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Blocos de conteúdo */}
          <div className="space-y-6">
            {contentBlocks.map((block, index) => (
              <div
                key={index}
                className="bg-card p-5 rounded-lg border border-border hover:border-primary/20 transition-colors"
              >
                <h4 className="font-semibold text-foreground text-lg mb-3">{block.title}</h4>
                <ul className="space-y-2">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-end gap-6">
            <img
              src={bookPreview}
              className="rounded-xl shadow-lg border border-border w-full max-w-md"
              alt="Book Preview"
            />
            {/* Placeholder para nova imagem */}
            <div className="w-full max-w-md h-64 rounded-xl border-2 border-dashed border-border/50 bg-card/30 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Espaço para imagem</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreviewSection;
