import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Importar as imagens
// Carregar automaticamente todas as imagens da pasta gallery
const galleryModules = import.meta.glob("@/assets/gallery/*.{png,jpg,jpeg,webp}", { eager: true });

const Hero = () => {
  const carouselImages = Object.keys(galleryModules)
    .sort()
    .map((path) => {
      const mod = galleryModules[path] as { default: string };
      const filename = path.split("/").pop() || "imagem-3d";
      const alt = filename
        .replace(/\.[^.]+$/, "")
        .replace(/[-_]/g, " ")
        .trim();
      return { src: (mod as any).default, alt };
    });
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,hsl(0,0%,96%)_0%,hsl(0,0%,92%)_45%,hsl(0,0%,96%)_100%)] py-16 lg:py-0">
      {/* Realce suave em vermelho para identidade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_140%,rgba(255,0,0,0.08),transparent_60%)]" />
      {/* Vignette no topo para dar contraste ao header (mais escuro) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      {/* Vignette nas laterais superiores para reforçar contraste (mais escuro) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.28),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.28),transparent_55%)]" />
      
      <div className="container mx-auto px-4 py-4 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-3 sm:gap-12 items-center max-w-7xl mx-auto">
          {/* Carrossel de Imagens */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-1000">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full max-w-md mx-auto lg:max-w-none"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square max-h-[40vh] lg:max-h-none rounded-2xl overflow-hidden bg-secondary/50 backdrop-blur-sm border border-primary/20">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain sm:object-cover p-2 sm:p-0"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Conteúdo de Texto */}
          <div className="space-y-2 sm:space-y-8 animate-in fade-in slide-in-from-right-4 duration-1000">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm sm:text-lg tracking-wider uppercase">
                Tecnologia 3D
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-[hsl(0,0%,10%)]">R</span>
              <span className="text-primary">3D </span>
              <span className="text-[hsl(0,0%,10%)]">Soluções</span>
              {" "}
              <span className="text-[hsl(0,0%,10%)]">Personalizadas</span>
            </h1>
            
            <p className="text-xs sm:text-xl md:text-2xl text-foreground/90 leading-relaxed">
              Impressão 3D feita sob medida para você. Damos vida às suas ideias com tecnologia e criatividade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 pt-1 sm:pt-4">
              <Button 
                size="default"
                className="text-xs sm:text-lg px-4 py-3 sm:px-8 sm:py-6 group w-full sm:w-auto"
                onClick={scrollToContact}
              >
                Peça seu orçamento agora
                <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="default"
                variant="outline" 
                className="text-xs sm:text-lg px-4 py-3 sm:px-8 sm:py-6 border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-primary w-full sm:w-auto"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça nossos serviços
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;