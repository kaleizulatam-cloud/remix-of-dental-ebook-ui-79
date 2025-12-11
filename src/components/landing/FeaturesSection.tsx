import { CheckCircle, TrendingUp, BookOpen, Shield } from "lucide-react";

const features = [
  {
    title: "Diagnóstico Preciso",
    description: "Protocolos validados científicamente que incrementan el pronóstico y resultados clínicos.",
    icon: CheckCircle,
  },
  {
    title: "Mejora tu Tasa de Éxito",
    description: "Técnicas probadas que aumentan significativamente tus resultados en cada paciente.",
    icon: TrendingUp,
  },
  {
    title: "Casos Reales",
    description: "Aprende de casos clínicos documentados con resultados verificables.",
    icon: BookOpen,
  },
  {
    title: "Biomecánica Segura",
    description: "Principios biomecánicos seguros para tratamientos predecibles.",
    icon: Shield,
  },
];

const FeaturesSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Por Qué Este <span className="text-gradient">Ebook</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Desarrolla competencias clínicas avanzadas con protocolos validados.
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
