import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const PreviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(3);
  const [translateX, setTranslateX] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const pages = [
    { 
      id: 1, 
      type: 'cover', 
      src: 'https://placehold.co/400x560/06b6d4/0f172a?text=Capa+Tracción', 
      alt: 'Capa do Ebook' 
    },
    { 
      id: 2, 
      type: 'page', 
      src: 'https://placehold.co/400x560/ffffff/333333?text=Índice+Detallado', 
      alt: 'Índice' 
    },
    { 
      id: 3, 
      type: 'page', 
      src: 'https://placehold.co/400x560/ffffff/333333?text=Introducción+Clínica', 
      alt: 'Introdução' 
    },
    { 
      id: 4, 
      type: 'page', 
      src: 'https://placehold.co/400x560/ffffff/333333?text=Clasificación+Caninos', 
      alt: 'Conteúdo Interno' 
    },
    { 
      id: 5, 
      type: 'page', 
      src: 'https://placehold.co/400x560/ffffff/333333?text=Casos+Reales', 
      alt: 'Casos Reales' 
    },
    { 
      id: 6, 
      type: 'page', 
      src: 'https://placehold.co/400x560/ffffff/333333?text=Protocolos+Avanzados', 
      alt: 'Protocolos avanzados' 
    }
  ];

  useEffect(() => {
    const calculateTranslate = () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container || track.children.length < 2) return;

      const cards = Array.from(track.children) as HTMLElement[];
      const cardWidth = cards[0].offsetWidth;
      const gap = 24; // gap-6 = 24px
      const containerWidth = container.offsetWidth;
      const trackWidth = cards.length * cardWidth + (cards.length - 1) * gap;
      
      // Calcula o máximo de translate para alinhar o último card à direita
      const maxTranslate = trackWidth - containerWidth + 32; // 32px de padding
      
      // Calcula quantos slides são possíveis
      const stepSize = cardWidth + gap;
      const slides = Math.ceil(maxTranslate / stepSize);
      setMaxSlide(slides);

      // Calcula o translateX baseado no slide atual
      if (currentSlide === 0) {
        setTranslateX(0);
      } else if (currentSlide >= slides) {
        // Último slide - alinha o último card à direita
        setTranslateX(maxTranslate);
      } else {
        // Slides intermediários
        setTranslateX(currentSlide * stepSize);
      }
    };

    calculateTranslate();
    window.addEventListener('resize', calculateTranslate);
    return () => window.removeEventListener('resize', calculateTranslate);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide(curr => curr + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(curr => curr - 1);
    }
  };

  return (
    <section className="py-16 bg-[#0A1628] overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Preview del <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Ebook</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto font-light leading-relaxed">
            Explora las primeras páginas y descubre el contenido de alta calidad que te espera
          </p>
        </div>

        {/* Carrossel de Páginas */}
        <div className="relative mb-12 group" ref={containerRef}>
          
          {/* Container das Imagens */}
          <div className="overflow-hidden">
            <div 
              ref={trackRef}
              className="flex gap-6 transition-transform duration-500 ease-in-out will-change-transform pl-4 md:pl-8"
              style={{ transform: `translateX(-${translateX}px)` }}
            >
              {pages.map((page) => (
                <div 
                  key={page.id} 
                  className={`
                    flex-shrink-0 w-[280px] md:w-[320px] h-[390px] md:h-[450px] rounded-lg overflow-hidden shadow-2xl transition-all duration-300
                    ${page.type === 'cover' ? 'shadow-cyan-900/40' : 'shadow-black/50'}
                    hover:scale-[1.02] hover:shadow-[0_0_35px_hsl(var(--primary)/0.45)]
                  `}
                >
                  <img 
                    src={page.src} 
                    alt={page.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Botão de Navegação (Seta Esquerda) - só aparece quando currentSlide > 0 */}
          {currentSlide > 0 && (
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#0F172A] text-foreground p-2 rounded-full shadow-2xl border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-all duration-300 hidden md:flex items-center justify-center"
              aria-label="Ver páginas anteriores"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
          )}
 
          {/* Botão de Navegação (Seta Direita) */}
          {currentSlide < maxSlide && (
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#0F172A] text-foreground p-2 rounded-full shadow-2xl border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-all duration-300 hidden md:flex items-center justify-center"
              aria-label="Ver más páginas"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          )}

          {/* Gradiente de Fade na direita */}
          
        </div>

        {/* CTA Bottom */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold py-4 px-10 rounded-lg flex items-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95 w-full md:w-auto justify-center">
            Obtener Ebook Completo por USD 10 <ArrowRight size={20} strokeWidth={2.5} />
          </button>
          
          <p className="text-muted-foreground text-sm font-medium">
            40+ páginas de contenido profesional validado científicamente
          </p>
        </div>

      </div>
    </section>
  );
};

export default PreviewSection;
