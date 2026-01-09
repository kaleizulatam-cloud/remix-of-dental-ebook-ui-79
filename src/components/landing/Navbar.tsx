import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-16">
          <div className="flex items-center">
            <span className="text-lg md:text-xl font-bold text-gradient">
              Instituto Kaleizu
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Beneficios
            </a>
            <a href="#contenido" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contenido
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#precio">
              <Button variant="cta" size="default">
                Obtener Ebook
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-up">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#beneficios"
              className="block px-3 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              Beneficios
            </a>
            <a
              href="#contenido"
              className="block px-3 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              Contenido
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              FAQ
            </a>
            <a href="#precio" className="w-full">
              <Button variant="cta" className="w-full mt-2">
                Obtener Ebook
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
