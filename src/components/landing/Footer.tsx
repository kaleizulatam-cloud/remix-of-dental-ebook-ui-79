const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-bold text-foreground mb-4">
            Instituto Kaleizu
          </h3>
          <p className="text-muted-foreground max-w-xs">
            Formación clínica de excelencia en cardiología veterinaria para profesionales comprometidos con salvar vidas.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a href="#contenido" className="hover:text-primary transition-colors">
                Contenido
              </a>
            </li>
            <li>
              <a href="#precio" className="hover:text-primary transition-colors">
                Precio
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-4">Contacto</h4>
          <p className="text-muted-foreground">kaleizulatam@gmail.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-border text-center text-muted-foreground">
        © 2025 Instituto Kaleizu — Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
