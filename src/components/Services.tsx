import { Box, Layers, Palette, Cog, Home, User, Lightbulb, Type, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Box,
      title: "Impressão 3D sob medida",
      description: "Qualquer projeto, do mais simples ao mais complexo"
    },
    {
      icon: Layers,
      title: "Criação e modelagem",
      description: "Protótipos profissionais para seus projetos"
    },
    {
      icon: Palette,
      title: "Personalização de produtos",
      description: "Deixe sua marca em cada peça"
    },
    {
      icon: Cog,
      title: "Peças técnicas e automotivas",
      description: "Substituição e customização de peças"
    },
    {
      icon: Home,
      title: "Maquetes arquitetônicas",
      description: "Visualize seus projetos em 3D"
    },
    {
      icon: User,
      title: "Bonecos e figuras",
      description: "Colecionáveis personalizados"
    },
    {
      icon: Lightbulb,
      title: "Decorações e luminárias",
      description: "Peças únicas para seu ambiente"
    },
    {
      icon: Type,
      title: "Letreiros personalizados",
      description: "Identidade visual em 3D"
    },
    {
      icon: Coffee,
      title: "Copos térmicos e brindes",
      description: "Presentes exclusivos e funcionais"
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
            <h2 className="text-4xl md:text-5xl font-bold">
              O que <span className="text-primary">fazemos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Do protótipo ao produto final, criamos, personalizamos e inovamos com impressão 3D
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
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
