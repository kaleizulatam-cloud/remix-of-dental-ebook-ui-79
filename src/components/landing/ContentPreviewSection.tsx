import { CheckCircle } from "lucide-react";
import bookPreview from "@/assets/book-preview.png";

const contentBlocks = [
  {
    title: "Fundamentos y Evaluación Clínica",
    items: [
      "Definición práctica del edema pulmonar cardiogénico",
      "Signos clínicos clave para diferenciar de un cuadro respiratorio",
      "Principales errores que aumentan el riesgo de muerte",
    ],
  },
  {
    title: "Clasificación Hemodinámica y Decisión Rápida",
    items: [
      "Cómo identificar el perfil clínico-hemodinámico en minutos",
      "Qué hacer en cada perfil: húmedo-cálido, húmedo-frío, etc.",
      "Indicadores objetivos para saber si tu paciente está respondiendo",
    ],
  },
  {
    title: "Protocolo de Estabilización Paso a Paso",
    items: [
      "ABC de emergencia y soporte inicial al paciente en crisis",
      "Oxigenoterapia y manejo del estrés respiratorio",
      "Uso correcto de diuréticos, vasodilatadores y otros fármacos",
      "Errores comunes al usar furosemida, y cómo evitarlos",
    ],
  },
  {
    title: "Casos Clínicos y Guías Visuales",
    items: [
      "Casos reales con evolución y resolución documentada",
      "Diagramas anatómicos para entender la fisiopatología",
      "Tablas rápidas de conducta y checklist de estabilización",
    ],
  },
];

const ContentPreviewSection = () => {
  return (
    <section id="contenido" className="py-20 bg-background-subtle relative overflow-hidden">
      {/* Efeitos de luz fosca nos cantos */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-primary/[0.015] rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header centralizado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contenido del <span className="text-gradient">Ebook</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acceso completo a protocolos de emergencia cardiopulmonar validados y aplicables con los recursos de tu clínica
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
