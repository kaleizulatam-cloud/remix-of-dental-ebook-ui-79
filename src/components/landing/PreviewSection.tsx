import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import indiceImage from '@/assets/indice-ebook.png';

const PreviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(3);
  const [translateX, setTranslateX] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Touch/swipe handling
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  
  // Mouse drag handling
  const isDragging = useRef<boolean>(false);
  const dragStartX = useRef<number>(0);
  const dragStartTranslate = useRef<number>(0);

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
      src: indiceImage, 
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
      const gap = 16; // gap-4 = 16px
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

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe left -> next slide
        nextSlide();
      } else {
        // Swipe right -> prev slide
        prevSlide();
      }
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartTranslate.current = translateX;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const diff = dragStartX.current - e.clientX;
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const cardWidth = cards[0]?.offsetWidth || 280;
    const gap = 16;
    const containerWidth = container.offsetWidth;
    const trackWidth = cards.length * cardWidth + (cards.length - 1) * gap;
    const maxTranslate = Math.max(0, trackWidth - containerWidth + 32);

    let newTranslate = dragStartTranslate.current + diff;
    newTranslate = Math.max(0, Math.min(newTranslate, maxTranslate));
    setTranslateX(newTranslate);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
    
    // Snap to nearest slide
    const track = trackRef.current;
    if (!track || track.children.length < 2) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const cardWidth = cards[0].offsetWidth;
    const gap = 16;
    const stepSize = cardWidth + gap;
    const nearestSlide = Math.round(translateX / stepSize);
    setCurrentSlide(Math.max(0, Math.min(nearestSlide, maxSlide)));
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleMouseUp();
    }
  };

  // Toggle arrows on touch/click (mobile)
  const handleCarouselTap = () => {
    if (!isDragging.current) {
      setShowArrows(prev => !prev);
    }
  };

  // Hide arrows after 3 seconds
  useEffect(() => {
    if (showArrows) {
      const timer = setTimeout(() => setShowArrows(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showArrows]);

  return (
    <section className="py-16 bg-[#0A1628] overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Preview del <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300 drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">Ebook</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto font-light leading-relaxed">
            Explora las primeras páginas y descubre el contenido de alta calidad que te espera
          </p>
        </div>

        {/* Carrossel de Páginas */}
        <div 
          className="relative mb-12 group cursor-grab select-none" 
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onClick={handleCarouselTap}
        >
          
          {/* Container das Imagens */}
          <div className="overflow-hidden">
            <div 
              ref={trackRef}
              className="flex gap-4 transition-transform duration-500 ease-in-out will-change-transform pl-4 md:pl-8"
              style={{ transform: `translateX(-${translateX}px)` }}
            >
              {pages.map((page) => (
                <div 
                  key={page.id} 
                  className={`
                    flex-shrink-0 w-[240px] md:w-[280px] h-[336px] md:h-[392px] rounded-lg overflow-hidden shadow-2xl transition-all duration-300
                    ${page.type === 'cover' ? 'shadow-primary/40' : 'shadow-black/50'}
                    hover:scale-[1.02] hover:shadow-[0_0_35px_hsl(var(--primary)/0.45)]
                  `}
                >
                  <img 
                    src={page.src} 
                    alt={page.alt} 
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Botão de Navegação (Seta Esquerda) - desktop sempre visível, mobile só quando showArrows */}
          {currentSlide > 0 && (
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#0F172A] text-foreground p-2 rounded-full shadow-2xl border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-all duration-300 items-center justify-center
                ${showArrows ? 'flex' : 'hidden'} md:flex
              `}
              aria-label="Ver páginas anteriores"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
          )}
 
          {/* Botão de Navegação (Seta Direita) - desktop sempre visível, mobile só quando showArrows */}
          {currentSlide < maxSlide && (
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#0F172A] text-foreground p-2 rounded-full shadow-2xl border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-all duration-300 items-center justify-center
                ${showArrows ? 'flex' : 'hidden'} md:flex
              `}
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
          
          <p className="text-muted-foreground text-sm font-medium text-center">
            40+ páginas de contenido profesional validado científicamente
          </p>
        </div>

      </div>
    </section>
  );
};

export default PreviewSection;
