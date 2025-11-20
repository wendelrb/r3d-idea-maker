import { Box, Layers, Palette, Cog, Home, User, Lightbulb, Type, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import engrenagens from "@/assets/gallery/engrenagens.png";
import letraLara from "@/assets/gallery/letra-lara.png";
import pecasAutomotivas from "@/assets/gallery/pecas-automotivas.png";
import bonecosefiguras from "@/assets/gallery/bonecosefiguras.jpg";
import decoracoesNatal from "@/assets/gallery/decoracoes-natal.jpg";
import utilitariosStar from "@/assets/gallery/utilitarios.jpg";
import coposTermicos from "@/assets/gallery/copos-termicos.jpg";
import decoracoesVariadas from "@/assets/gallery/decoracoes-variadas.jpg";
import personalizacaodeprodutos from "@/assets/gallery/personalizacao-de-produtos.jpg";
import impressoes3dsobmedida from "@/assets/gallery/impressoes-3d-sob-medida.jpg";
import criacaoemodelagem from "@/assets/gallery/criacao-e-modelagem.jpg";
import maquete from "@/assets/gallery/maquete.jpg";

const Services = () => {
  const services = [
    {
      icon: Box,
      title: "Impressão 3D sob medida",
      description: "Qualquer projeto, do mais simples ao mais complexo",
      image: impressoes3dsobmedida
    },
    {
      icon: Layers,
      title: "Criação e modelagem",
      description: "Protótipos profissionais para seus projetos",
      image: criacaoemodelagem
    },
    {
      icon: Palette,
      title: "Personalização de produtos",
      description: "Deixe sua marca em cada peça",
      image: personalizacaodeprodutos
    },
    {
      icon: Cog,
      title: "Peças técnicas e automotivas",
      description: "Substituição e customização de peças",
      image: pecasAutomotivas
    },
    {
      icon: Home,
      title: "Maquetes arquitetônicas",
      description: "Visualize seus projetos em 3D",
      image: maquete
    },
    {
      icon: User,
      title: "Bonecos e figuras",
      description: "Colecionáveis personalizados",
      image: bonecosefiguras
    },
    {
      icon: Lightbulb,
      title: "Decorações e luminárias",
      description: "Peças únicas para seu ambiente",
      image: decoracoesNatal
    },
    {
      icon: Type,
      title: "Letreiros personalizados",
      description: "Identidade visual em 3D",
      image: letraLara
    },
    {
      icon: Coffee,
      title: "Copos térmicos e brindes",
      description: "Presentes exclusivos e funcionais",
      image: coposTermicos
    }
  ];

  return (
    <section className="py-24 bg-background" id="servicos">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold text-lg tracking-wider uppercase">
              Nossos Serviços
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              O que <span className="text-primary">fazemos</span>
            </h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              Do protótipo ao produto final, criamos, personalizamos e inovamos com impressão 3D
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-muted/50">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`absolute inset-0 w-full h-full object-center transition-transform duration-300 ${
                        service.title === "Impressão 3D sob medida"
                          ? "object-contain p-2 group-hover:scale-105"
                          : service.title === "Maquetes arquitetônicas"
                          ? "object-cover group-hover:scale-105"
                          : "object-cover group-hover:scale-110"
                      }`}
                    />
                  </div>
                  <p className="text-foreground/80">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
