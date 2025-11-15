import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Importar as imagens
import bonecoViolao from "@/assets/gallery/boneco-violao.png";
import chaveiros from "@/assets/gallery/chaveiros.png";
import engrenagens from "@/assets/gallery/engrenagens.png";
import letraLara from "@/assets/gallery/letra-lara.png";
import lorenzo from "@/assets/gallery/lorenzo.png";
import pecasAutomotivas from "@/assets/gallery/pecas-automotivas.png";

const Hero = () => {
  const carouselImages = [
    { src: bonecoViolao, alt: "Boneco com violão impresso em 3D" },
    { src: chaveiros, alt: "Chaveiros personalizados em 3D" },
    { src: engrenagens, alt: "Engrenagens impressas em 3D" },
    { src: letraLara, alt: "Letra Lara personalizada em 3D" },
    { src: lorenzo, alt: "Peça Lorenzo em 3D" },
    { src: pecasAutomotivas, alt: "Peças automotivas impressas em 3D" },
  ];
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,0,0,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
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
              className="w-full"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/50 backdrop-blur-sm border border-primary/20">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Conteúdo de Texto */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-1000">
            <div className="inline-block">
              <span className="text-primary font-bold text-lg tracking-wider uppercase">
                Tecnologia 3D
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-foreground">R3D </span>
              <span className="text-primary">Soluções</span>
              <br />
              <span className="text-primary">Personalizadas</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/90">
              Impressão 3D feita sob medida para você. Damos vida às suas ideias com tecnologia e criatividade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 group"
                onClick={scrollToContact}
              >
                Peça seu orçamento agora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-primary"
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
