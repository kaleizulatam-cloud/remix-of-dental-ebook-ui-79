import { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Impresionante la cantidad de información útil en 200 páginas. Las técnicas de interceptación temprana que aprendí ya las estoy aplicando con excelentes resultados en mi consulta.",
    name: "Dra. Ana Martínez",
    role: "Ortodoncista Certificada",
    location: "Ciudad de México, México"
  },
  {
    id: 2,
    text: "Material muy completo y actualizado. Las imágenes radiográficas y tomográficas son de excelente calidad. Perfecto para ortodoncistas que quieren dominar este tema.",
    name: "Dr. Roberto Silva",
    role: "Ortodoncista",
    location: "São Paulo, Brasil"
  },
  {
    id: 3,
    text: "La mejor inversión que he hecho en mi desarrollo profesional este año. Los protocolos son claros, validados científicamente y muy fáciles de implementar.",
    name: "Dra. Carmen Rodríguez",
    role: "Especialista en Ortodoncia",
    location: "Santiago, Chile"
  },
  {
    id: 4,
    text: "Los casos clínicos documentados son increíbles. Finalmente encontré un recurso que explica la biomecánica de tracción de forma clara y práctica. Vale cada centavo.",
    name: "Dr. Carlos Mendoza",
    role: "Especialista en Ortodoncia",
    location: "Buenos Aires, Argentina"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  return (
    <section className="py-24 bg-[#050B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Lo Que Dicen <span className="text-gradient drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Los Profesionales</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Más de 500 ortodoncistas ya están aplicando estos protocolos en su práctica clínica
          </p>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {getVisibleTestimonials().map((item) => (
            <div 
              key={item.id} 
              className="bg-[#0B1221] border border-border/60 p-8 rounded-2xl shadow-xl flex flex-col justify-between h-full min-h-[320px] transition-all duration-300 hover:border-primary/20"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
                  ))}
                </div>
                {/* Testimonial Text */}
                <p className="text-foreground/90 text-[15px] leading-relaxed mb-8 font-light">
                  "{item.text}"
                </p>
              </div>
              
              {/* Author */}
              <div className="mt-auto">
                <h4 className="font-bold text-foreground text-base">{item.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.role}</p>
                <p className="text-xs text-muted-foreground/70">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <button 
            onClick={prevSlide}
            className="group p-3 rounded-full border border-border bg-transparent hover:bg-secondary hover:border-primary/50 transition-all duration-300 focus:outline-none"
            aria-label="Anterior"
          >
            <ArrowLeft size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="group p-3 rounded-full border border-border bg-transparent hover:bg-secondary hover:border-primary/50 transition-all duration-300 focus:outline-none"
            aria-label="Próximo"
          >
            <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-muted-foreground font-light text-base md:text-lg">
            Únete a cientos de profesionales que ya están transformando su práctica clínica
          </p>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
