import { ArrowRight, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ebookCover from "@/assets/ebook-cover.png";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              EL MÉTODO DEFINITIVO PARA{" "}
              <span className="text-gradient">
                PREVENIR TRATAMIENTOS INDEFINIDOS
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Diagnóstico preciso, prevención efectiva y tracción segura, paso a
              paso para tener resultados desde tu próximo paciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" className="group">
                Quiero el Ebook
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>

          <div className="relative group animate-scale-in">
            <div className="relative z-10 transform transition duration-500 group-hover:scale-105 animate-float">
              <img
                src={ebookCover}
                alt="Ebook Tracción de Dientes Retenidos"
                className="rounded-xl shadow-2xl mx-auto max-w-[400px] w-full glow-primary"
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <Download size={20} />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">705</p>
              <p className="text-xs text-muted-foreground uppercase">
                Ventas Totales
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <User size={20} />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">500+</p>
              <p className="text-xs text-muted-foreground uppercase">
                Profesionales Activos
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 hidden md:flex">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <Download size={20} />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">98%</p>
              <p className="text-xs text-muted-foreground uppercase">
                Satisfacción
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 hidden md:flex">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <User size={20} />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">15+</p>
              <p className="text-xs text-muted-foreground uppercase">
                Países
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
