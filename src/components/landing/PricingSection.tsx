import { useState, useEffect } from "react";
import { Clock, Shield, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 7,
    seconds: 27,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer for demo purposes
          return { hours: 2, minutes: 7, seconds: 27 };
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  const includedFeatures = [
    "Ebook completo en formato PDF",
    "Acceso inmediato",
    "Protocolos paso a paso",
    "Garantía de calidad",
  ];

  return (
    <section id="precio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Inversión en Tu <span className="text-gradient">Desarrollo Profesional</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Acceso completo de por vida, con un solo pago
          </p>
        </div>

        <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-card p-4 text-center border-b border-border">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Oferta Especial Limitada
            </span>
          </div>

          <div className="p-8 md:p-12 flex flex-col items-center text-center">
            <p className="text-muted-foreground mb-2 line-through text-lg">
              USD 60
            </p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl font-extrabold text-foreground">USD 10</span>
              <span className="text-muted-foreground">/Pago único</span>
            </div>

            <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 mb-8 border border-destructive/20 animate-pulse-glow">
              <Clock size={16} />
              Oferta termina en: {formatTime(timeLeft.hours)}:
              {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </div>

            <Button variant="hero" size="xl" className="w-full md:w-auto min-w-[300px] mb-8">
              Comprar Ahora por USD 10
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-left w-full max-w-lg">
              {includedFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border w-full flex flex-col items-center">
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wide">
                Garantías Incluidas
              </p>
              <div className="flex gap-6 text-muted-foreground">
                <div className="flex items-center gap-1 text-xs">
                  <Shield size={14} className="text-primary" /> Pago Seguro
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <Download size={14} className="text-primary" /> Descarga Instantánea
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
