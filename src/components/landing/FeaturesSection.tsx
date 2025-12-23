import { Stethoscope, Zap, FileText, HeartPulse } from "lucide-react";

const features = [
  {
    title: "Diagnóstico Diferencial Seguro",
    description: "Reconoce en minutos si el cuadro es cardiogénico o pulmonar usando signos clínicos objetivos — sin depender de equipos costosos.",
    icon: Stethoscope,
  },
  {
    title: "Decisiones Rápidas y Sin Duda",
    description: "Protocolos clínicos que guían tu actuación paso a paso en los primeros minutos críticos — sin improvisar ni cometer errores fatales.",
    icon: Zap,
  },
  {
    title: "Casos Clínicos Reales",
    description: "Situaciones de urgencia documentadas con imágenes reales y resultados concretos para saber qué hacer en pacientes similares.",
    icon: FileText,
  },
  {
    title: "Protocolos de Estabilización Inmediata",
    description: "Conductas prácticas, simples y basadas en ciencia para estabilizar a tu paciente en crisis — con Tabla de Dosis incluida para medicar con seguridad.",
    icon: HeartPulse,
  },
];

const FeaturesSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Por Qué Este <span className="text-gradient">Ebook</span> Desarrolla
          </h2>
          <p className="mt-4 text-muted-foreground">
            Competencias clínicas reales para actuar con precisión en emergencias cardiopulmonares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card/50 p-6 rounded-xl border border-border hover:bg-card hover:border-primary/20 transition duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
