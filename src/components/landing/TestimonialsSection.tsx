import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Carlos Mendoza",
    role: "Ortodoncista, Argentina",
    initials: "CM",
    text: "Excelente material didáctico. Los protocolos paso a paso me ayudaron a mejorar significativamente mi tasa de éxito en casos de caninos retenidos.",
  },
  {
    name: "Dra. María González",
    role: "Ortodoncista, México",
    initials: "MG",
    text: "Increíble recurso para cualquier profesional. Las ilustraciones y casos clínicos son exactamente lo que necesitaba para perfeccionar mi técnica.",
  },
  {
    name: "Dr. Roberto Silva",
    role: "Ortodoncista, Chile",
    initials: "RS",
    text: "Un ebook que realmente marca la diferencia. La información es práctica, actualizada y fácil de aplicar en la clínica desde el primer día.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Lo Que Dicen <span className="text-gradient">Los Profesionales</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Más de 500 ortodonciastas ya están aplicando estos protocolos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary/30 transition duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-xs font-bold text-foreground">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
