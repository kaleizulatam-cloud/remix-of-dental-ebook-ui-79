import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
  return (
    <section className="pt-20 pb-24 bg-[#050B14] relative">
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

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
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
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-12 mb-10">
            <CarouselPrevious 
              className="static translate-y-0 bg-transparent border-border hover:bg-secondary hover:border-primary/50 text-muted-foreground hover:text-primary"
            />
            <CarouselNext 
              className="static translate-y-0 bg-transparent border-border hover:bg-secondary hover:border-primary/50 text-muted-foreground hover:text-primary"
            />
          </div>
        </Carousel>

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
