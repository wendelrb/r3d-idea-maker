import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <span className="text-primary">R3D</span> Soluções
              </h3>
              <p className="text-muted-foreground">
                Transformamos ideias em realidade com tecnologia 3D.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Links Rápidos</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
                <a href="#galeria" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfólio
                </a>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Redes Sociais</h4>
              <a 
                href="https://instagram.com/r3d_personalizados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @r3d_personalizados
              </a>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} R3D Soluções Personalizadas. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
