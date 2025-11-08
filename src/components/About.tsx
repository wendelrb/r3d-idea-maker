import { Box, Lightbulb, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Box,
      title: "Tecnologia Avançada",
      description: "Equipamentos de última geração para resultados perfeitos"
    },
    {
      icon: Lightbulb,
      title: "Criatividade",
      description: "Transformamos ideias em realidade tangível"
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Cada detalhe importa em nossos projetos"
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Entrega rápida sem comprometer a qualidade"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30" id="sobre">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold text-lg tracking-wider uppercase">
              Sobre Nós
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Paixão por <span className="text-primary">Inovação</span>
            </h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              Somos apaixonados por transformar ideias em objetos reais. Na R3D, unimos tecnologia, 
              precisão e criatividade para entregar produtos únicos, funcionais e personalizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
