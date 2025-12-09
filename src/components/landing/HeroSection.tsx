import { ArrowRight, ShoppingCart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ebookCover from "@/assets/ebook-cover.png";
const HeroSection = () => {
  return <div className="relative min-h-screen bg-[#020617] font-sans text-foreground selection:bg-primary selection:text-white overflow-hidden">
      
      {/* Background with clinic image */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" alt="Clinic Background" className="w-full h-full object-cover opacity-20 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/95 to-[#0B1525]/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl px-4 sm:px-6 pt-32 pb-32 lg:pt-40 lg:pb-40 py-[70px] lg:px-0 my-0 mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text with Glass Effect */}
          <div className="relative animate-fade-up">
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 lg:p-10 backdrop-blur-[2px]">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-[1.1] uppercase tracking-tight mb-6">
                El método definitivo para{" "}
                <span className="text-gradient">
                  prevenir tratamientos indefinidos
                </span>{" "}
                y tener resultados desde tu próximo paciente.
              </h1>
              
              <p className="text-lg text-muted-foreground font-light mb-8 max-w-xl leading-relaxed">
                Diagnóstico preciso, prevención efectiva y tracción segura, paso a paso.
              </p>
              
              <Button variant="hero" size="xl" className="group">
                Quiero el Ebook
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Side: Ebook Image */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in">
            {/* Glow effect behind the book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px]"></div>
            
            <img src={ebookCover} alt="Manual Tracción de Dientes" className="relative z-10 w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl rotate-[-5deg] hover:rotate-0 transition duration-500 animate-float" />
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 w-full bg-[#0B1525]/90 border-t border-white/10 backdrop-blur-md z-20">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-center gap-16 md:gap-32">
          
          {/* Sales */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#162032] flex items-center justify-center text-primary border border-white/5">
              <ShoppingCart size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Ventas totales</span>
              <span className="text-2xl font-bold text-foreground">504</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-10 w-px bg-white/10 hidden md:block"></div>

          {/* Professionals */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#162032] flex items-center justify-center text-primary border border-white/5">
              <Users size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Profesionales activos</span>
              <span className="text-2xl font-bold text-foreground">500+</span>
            </div>
          </div>

        </div>
      </div>

    </div>;
};
export default HeroSection;