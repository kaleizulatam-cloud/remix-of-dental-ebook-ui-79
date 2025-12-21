import { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';

const cities = [
  "Buenos Aires",
  "Córdoba",
  "Ciudad de México",
  "Guadalajara",
  "Lima",
  "Arequipa",
  "Madrid",
  "Barcelona",
  "Santiago",
  "Valparaíso",
  "Bogotá",
  "Medellín"
];

const getRandomCity = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

export const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [city, setCity] = useState(getRandomCity());

  const showNotification = () => {
    setCity(getRandomCity());
    setIsVisible(true);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  useEffect(() => {
    // Show on first load after a small delay
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 3000);

    // Show every 10 minutes
    const interval = setInterval(() => {
      showNotification();
    }, 10 * 60 * 1000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="bg-background/95 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-2xl shadow-black/20 max-w-[280px]">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={14} />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="bg-cyan-500/20 rounded-full p-2 flex-shrink-0">
            <ShoppingBag size={18} className="text-cyan-400" />
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-foreground font-bold text-base">
              ¡Nueva compra!
            </span>
            <span className="text-muted-foreground text-sm">
              Alguien desde <span className="text-cyan-400 font-medium">{city}</span> acaba de adquirir el ebook
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
