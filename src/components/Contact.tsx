import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5554999999999"; // Adicione o número real aqui
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da R3D Soluções Personalizadas.");

  return (
    <section className="py-24 bg-background" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold text-lg tracking-wider uppercase">
              Entre em Contato
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Tem uma <span className="text-primary">ideia</span> em mente?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nós a tornamos realidade com impressão 3D de alta qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg">Localização</h3>
                <p className="text-muted-foreground text-sm">
                  Avenida Júlio Borella, 565<br />
                  Marau, Rio Grande do Sul
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
                  <Instagram className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg">Instagram</h3>
                <a 
                  href="https://instagram.com/r3d_personalizados" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  @r3d_personalizados
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">
                  Resposta rápida<br />
                  para orçamentos
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 group"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
              Fale conosco pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
