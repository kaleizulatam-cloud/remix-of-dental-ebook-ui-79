import { ArrowRight, ShoppingCart, Users, ShoppingBag, X } from "lucide-react";
import { useState, useEffect } from "react";
import ebookCover from "@/assets/ebook-cover.png";
import dentalOfficeBg from "@/assets/dental-office-bg.jpg";

const cities = [
  "Buenos Aires", "Córdoba", "Ciudad de México", "Guadalajara",
  "Lima", "Arequipa", "Madrid", "Barcelona",
  "Santiago", "Valparaíso", "Bogotá", "Medellín"
];

const getRandomCity = () => cities[Math.floor(Math.random() * cities.length)];

const HeroSection = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [city, setCity] = useState(getRandomCity());

  const showNotification = () => {
    setCity(getRandomCity());
    setIsNotificationVisible(true);
    setTimeout(() => setIsNotificationVisible(false), 5000);
  };

  useEffect(() => {
    const initialTimeout = setTimeout(() => showNotification(), 3000);
    const interval = setInterval(() => showNotification(), 10 * 60 * 1000);
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative pt-12 pb-0 overflow-hidden min-h-[calc(100vh-220px)]">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{ backgroundImage: `url(${dentalOfficeBg})` }}
      />
      <div className="absolute inset-0 bg-black/75 -z-10" />
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      {/* Ebook Image - Positioned to span full height */}
      <div className="absolute right-[-2%] lg:right-[2%] xl:right-[8%] top-[-15%] bottom-0 w-[45%] hidden lg:flex items-end justify-center overflow-visible">
        <img
          src={ebookCover}
          alt="Guía Clínica de Emergencia - Edema Pulmonar"
          className="w-auto h-[80%] max-w-none object-contain object-bottom drop-shadow-2xl transition-transform duration-300 ease-out hover:scale-[1.03] cursor-pointer origin-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-[calc(100vh-320px)]">
          <div className="space-y-4 animate-fade-up bg-secondary/40 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-primary/20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white">
              EL MÉTODO DEFINITIVO QUE AUMENTA EN 248% LA SOBREVIDA DE PACIENTES CON EDEMA PULMONAR CARDIOGÉNICO
            </h1>
            <p className="text-base text-slate-200 max-w-lg">
              Domina el paso a paso para estabilizar en los primeros minutos — sin cometer errores fatales
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="group inline-flex items-center justify-center gap-2 h-12 px-8 text-base font-bold text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-primary to-orange-400">
                Quiero el Ebook
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Mobile ebook image */}
          <div className="lg:hidden flex justify-center">
            <img
              src={ebookCover}
              alt="Guía Clínica de Emergencia - Edema Pulmonar"
              className="max-w-[280px] w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Purchase Notification - Above Stats Bar */}
      {isNotificationVisible && (
        <div className="absolute bottom-24 md:bottom-20 right-4 md:right-6 z-30 animate-fade-in">
          <div className="bg-background/95 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-2xl shadow-black/20 max-w-[280px]">
            <button 
              onClick={() => setIsNotificationVisible(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={14} />
            </button>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary/20 rounded-full p-2 flex-shrink-0">
                <ShoppingBag size={18} className="text-primary" />
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-foreground font-bold text-base">
                  ¡Nueva compra!
                </span>
                <span className="text-muted-foreground text-sm">
                  Alguien desde <span className="text-primary font-medium">{city}</span> acaba de adquirir el ebook
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Bar - Full Width Section Divider */}
      <div className="w-full relative z-20 mt-2 -mb-4">
        <div className="flex justify-center items-center gap-8 md:gap-24 bg-white/5 border-y border-white/10 py-2 md:py-4 px-4 backdrop-blur-xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-primary/10 p-1.5 md:p-2 rounded-full text-primary">
              <ShoppingCart size={18} className="md:w-5 md:h-5" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-white uppercase leading-tight">
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
              <p className="text-[10px] md:text-xs text-white uppercase leading-tight">
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
