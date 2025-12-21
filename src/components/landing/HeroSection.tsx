import { ArrowRight, ShoppingCart, Users } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";
import dentalOfficeBg from "@/assets/dental-office-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-0 overflow-visible">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{ backgroundImage: `url(${dentalOfficeBg})` }}
      />
      <div className="absolute inset-0 bg-black/75 -z-10" />
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              EL MÉTODO DEFINITIVO PARA PREVENIR TRATAMIENTOS INDEFINIDOS
            </h1>
            <p className="text-lg text-slate-300 max-w-lg">
              Diagnóstico preciso, prevención efectiva y tracción segura, paso a
              paso para tener resultados desde tu próximo paciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center justify-center gap-2 h-14 px-10 text-base font-bold text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-cyan-600 to-cyan-400">
                Quiero el Ebook
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
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
      </div>

      {/* Stats Bar - Full Width Section Divider */}
      <div className="w-full relative z-20 mt-6 -mb-4">
        <div className="flex justify-center gap-6 md:gap-24 bg-white/5 border-y border-white/10 py-3 md:py-6 px-4 backdrop-blur-xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-primary/10 p-1.5 md:p-2 rounded-full text-primary">
              <ShoppingCart size={18} className="md:w-5 md:h-5" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-slate-400 uppercase leading-tight">
                Ventas Totales
              </p>
              <p className="text-base md:text-xl font-bold text-white">705</p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-primary/10 p-1.5 md:p-2 rounded-full text-primary">
              <Users size={18} className="md:w-5 md:h-5" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-slate-400 uppercase leading-tight">
                Profesionales Activos
              </p>
              <p className="text-base md:text-xl font-bold text-white">500+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
