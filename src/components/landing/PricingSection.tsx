import { useState, useEffect } from 'react';
import { CreditCard, Clock, Check, Shield, Download, CheckCircle2 } from 'lucide-react';

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 32, s: 54 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  const benefits = [
    "Guía completa en formato PDF (30+ páginas)",
    "Protocolos con imágenes y esquemas anatómicos",
    "Conductas listas para aplicar en emergencias reales",
    "Compatible con todos los dispositivos"
  ];

  return (
    <section id="precio" className="py-20 bg-background-alt flex flex-col items-center relative overflow-hidden">
      {/* Efeitos de luz fosca nos cantos */}
      <div className="absolute top-32 right-16 w-56 h-56 bg-primary/[0.025] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Headline */}
      <div className="text-center mb-12 px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Inversión en Tu <span className="text-gradient drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Desarrollo Profesional</span>
        </h1>
        <h2 className="text-lg md:text-xl text-muted-foreground">
          Acceso completo de por vida, con un solo pago
        </h2>
      </div>

      <div className="w-full max-w-[420px] bg-card border border-border/50 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden mx-4">
        
        {/* Efeito de brilho no topo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary/20 blur-xl"></div>

        {/* Header do Card */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CreditCard size={18} />
            <span className="font-medium text-sm">Guía Digital</span>
          </div>
          <div className="bg-secondary border border-border text-muted-foreground text-xs px-3 py-1 rounded-full font-medium">
            Oferta Especial
          </div>
        </div>

        {/* Preço */}
        <div className="mb-6">
          <p className="text-muted-foreground/60 line-through text-lg font-medium mb-0">USD 60</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-6xl font-bold text-primary tracking-tight drop-shadow-[0_0_15px_hsl(var(--primary)/0.25)]">
              USD 10
            </h2>
            <span className="text-muted-foreground font-medium">Pago único</span>
          </div>
        </div>

        {/* Timer */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 mb-6 flex items-center justify-center gap-2">
          <Clock size={16} className="text-destructive" />
          <span className="text-muted-foreground text-sm">Oferta termina en:</span>
          <span className="text-destructive font-bold font-mono text-sm">
            {formatTime(timeLeft.h)}:{formatTime(timeLeft.m)}:{formatTime(timeLeft.s)}
          </span>
        </div>

        {/* Botão CTA */}
        <a 
          href="https://pay.hotmart.com/Y102274065O?off=ru1z268a&checkoutMode=10&bid=1767982708052"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 mb-8 transition-transform hover:scale-[1.02] shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
        >
          Comprar Ahora por USD 10
          <CreditCard size={20} />
        </a>

        {/* Lista de Benefícios */}
        <div className="space-y-4 mb-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-0.5 text-primary shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <span className="text-foreground/90 text-sm font-light leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {/* Divisor Garantias */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-border flex-1"></div>
          <span className="text-muted-foreground text-xs uppercase tracking-wider">Garantías incluidas</span>
          <div className="h-px bg-border flex-1"></div>
        </div>

        {/* Rodapé do Card */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Shield size={18} className="text-primary" />
            <span>Pago seguro</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Download size={18} className="text-primary" />
            <span>Descarga instantánea</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Check size={18} className="text-primary" />
            <span>Garantía de calidad</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
