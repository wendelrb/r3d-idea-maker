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
import decoracoesVariadas from "@/assets/gallery/decoracoes-variadas.jpg";
import animaisMarinhos from "@/assets/gallery/animais-marinhos.jpg";
import batman from "@/assets/gallery/batman.jpg";
import colecaoPrateleira from "@/assets/gallery/colecao-prateleira.jpg";
import personagensVariados from "@/assets/gallery/personagens-variados.jpg";
import bonecosArticulados from "@/assets/gallery/bonecos-articulados.jpg";
import personagensFofinhos from "@/assets/gallery/personagens-fofinhos.jpg";
import utilitariosStar from "@/assets/gallery/utilitarios-star.jpg";
import decoracoesNatal from "@/assets/gallery/decoracoes-natal.jpg";

const Hero = () => {
  const carouselImages = [
    { src: bonecoViolao, alt: "Boneco com violão impresso em 3D" },
    { src: chaveiros, alt: "Chaveiros personalizados em 3D" },
    { src: engrenagens, alt: "Engrenagens impressas em 3D" },
    { src: letraLara, alt: "Letra Lara personalizada em 3D" },
    { src: lorenzo, alt: "Peça Lorenzo em 3D" },
    { src: pecasAutomotivas, alt: "Peças automotivas impressas em 3D" },
    { src: decoracoesVariadas, alt: "Decorações variadas impressas em 3D" },
    { src: animaisMarinhos, alt: "Animais marinhos impressos em 3D" },
    { src: batman, alt: "Action figure Batman impresso em 3D" },
    { src: colecaoPrateleira, alt: "Coleção de peças 3D em prateleira" },
    { src: personagensVariados, alt: "Personagens variados impressos em 3D" },
    { src: bonecosArticulados, alt: "Bonecos articulados impressos em 3D" },
    { src: personagensFofinhos, alt: "Personagens fofinhos impressos em 3D" },
    { src: utilitariosStar, alt: "Utilitários e decorações em 3D" },
    { src: decoracoesNatal, alt: "Decorações de Natal impressas em 3D" },
  ];
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,hsl(0,0%,96%)_0%,hsl(0,0%,92%)_45%,hsl(0,0%,96%)_100%)]">
      {/* Realce suave em vermelho para identidade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_140%,rgba(255,0,0,0.08),transparent_60%)]" />
      {/* Vignette no topo para dar contraste ao header (mais escuro) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      {/* Vignette nas laterais superiores para reforçar contraste (mais escuro) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.28),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.28),transparent_55%)]" />
      
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
              <span className="text-[hsl(0,0%,10%)]">R</span>
              <span className="text-primary">3D </span>
              <span className="text-[hsl(0,0%,10%)]">Soluções</span>
              <br />
              <span className="text-[hsl(0,0%,10%)]">Personalizadas</span>
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
