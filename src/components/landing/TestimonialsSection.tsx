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
    text: "Contenido claro y aplicable. El protocolo me ayudó a actuar rápido en un caso de disnea severa que antes me habría bloqueado. Identifiqué edema cardiogénico en minutos y estabilicé con confianza. Muy recomendable.",
    name: "Dra. Mariana López",
    role: "Veterinário",
    location: "Santiago, Chile"
  },
  {
    id: 2,
    text: "Excelente guía clínica. Aprendí a clasificar el perfil hemodinámico y aplicar el tratamiento correcto sin improvisar. Ya la usé en dos pacientes con muy buenos resultados. Una inversión que se justifica sola.",
    name: "Dr. Carlos Quispe",
    role: "Veterinário",
    location: "Lima, Perú"
  },
  {
    id: 3,
    text: "Antes derivaba todos los casos con sospecha cardíaca. Ahora tengo los pasos claros para estabilizar primero y referir solo cuando es necesario. El cambio en mi práctica fue inmediato. Lo recomiendo sin duda.",
    name: "Dra. Lucía Fernández",
    role: "Veterinário",
    location: "Bogotá, Colombia"
  },
  {
    id: 4,
    text: "Por fin un material que explica cómo actuar en los primeros minutos críticos del edema pulmonar. Lo apliqué esta semana y el paciente mejoró en menos de 30 minutos. Recurso imprescindible para cualquier clínico.",
    name: "Dr. Alejandro Rivas",
    role: "Veterinário",
    location: "Ciudad de México, México"
  },
  {
    id: 5,
    text: "El protocolo paso a paso me dio seguridad para actuar sin esperar la ecocardiografía. Y los diagramas clínicos ayudan muchísimo a entender la fisiopatología. Excelente para quien trabaja bajo presión.",
    name: "Dra. Camila Torres",
    role: "Veterinário",
    location: "Buenos Aires, Argentina"
  },
  {
    id: 6,
    text: "Guía muy completa y visual. Las ilustraciones anatómicas y esquemas de conducta son de gran ayuda. Ideal para veterinarios que buscan tomar decisiones rápidas con base científica.",
    name: "Dr. Juan Pablo Moreno",
    role: "Veterinário",
    location: "Madrid, España"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="pt-8 pb-24 bg-[#050B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Lo Que Dicen <span className="text-gradient drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Los Profesionales</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Más de 500 veterinários ya están aplicando estos protocolos en su práctica clínica
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
