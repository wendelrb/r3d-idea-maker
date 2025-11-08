import letraLara from "@/assets/gallery/letra-lara.png";
import lorenzo from "@/assets/gallery/lorenzo.png";
import bonecoViolao from "@/assets/gallery/boneco-violao.png";
import pecasAutomotivas from "@/assets/gallery/pecas-automotivas.png";
import engrenagens from "@/assets/gallery/engrenagens.png";
import chaveiros from "@/assets/gallery/chaveiros.png";

const Gallery = () => {
  const images = [
    {
      src: letraLara,
      alt: "Letra L roxa personalizada com nome Lara - Impressão 3D",
      title: "Letreiros 3D"
    },
    {
      src: lorenzo,
      alt: "Nome Lorenzo impresso em 3D branco - Decoração personalizada",
      title: "Nomes Personalizados"
    },
    {
      src: bonecoViolao,
      alt: "Boneco articulado tocando violão - Figura 3D personalizada",
      title: "Figuras Articuladas"
    },
    {
      src: pecasAutomotivas,
      alt: "Peças automotivas impressas em 3D - Buchas e componentes",
      title: "Peças Automotivas"
    },
    {
      src: engrenagens,
      alt: "Engrenagens mecânicas amarelas e pretas impressas em 3D",
      title: "Peças Técnicas"
    },
    {
      src: chaveiros,
      alt: "Chaveiros de halteres coloridos impressos em 3D",
      title: "Chaveiros Criativos"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30" id="galeria">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold text-lg tracking-wider uppercase">
              Portfólio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nossos <span className="text-primary">Trabalhos</span>
            </h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos com paixão e tecnologia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-foreground mb-2">{image.title}</h3>
                    <div className="w-12 h-1 bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
