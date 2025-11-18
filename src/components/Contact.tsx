import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Instagram, MapPin, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "555493019191"; // Número para wa.me (sem + e sem espaços)
  const addressString = "Avenida Júlio Borella, 565, Marau, Rio Grande do Sul, Brazil 99150-000";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const composed = `Olá! Meu nome é ${name}.\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(composed)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 bg-background" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <span className="text-primary font-bold text-lg tracking-wider uppercase">
              Entre em Contato
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tem uma <span className="text-primary">ideia</span> em mente?
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Nós a tornamos realidade com impressão 3D de alta qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Formulário à esquerda */}
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold text-foreground">Envie sua mensagem</h3>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" type="tel" placeholder="(00) 00000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Descreva sua ideia..." rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                  <Button type="submit" className="w-full">
                    <MessageCircle className="mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Mapa + Informações à direita */}
            <div className="space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Localização</h3>
                  </div>
                  <div className="w-full h-64 rounded-2xl overflow-hidden border border-border/50">
                    <iframe
                      title="Mapa - R3D Soluções"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(addressString)}&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-foreground text-sm md:text-base">{addressString}</p>
                    <a
                      href={`https://www.google.com/maps?q=${encodeURIComponent(addressString)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      Abrir no Google Maps
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="p-6 space-y-5">
                  <h3 className="font-bold text-lg text-foreground">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-foreground/90">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href="mailto:contato@r3dsolucoes.com" className="hover:underline">contato@r3dsolucoes.com</a>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/90">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:underline">(54) 93019-191</a>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/90">
                      <Instagram className="w-5 h-5 text-primary" />
                      <a href="https://www.instagram.com/r3d_personalizados/" target="_blank" rel="noopener noreferrer" className="hover:underline">@r3d_personalizados</a>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/90">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{addressString}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/90">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>Segunda a Sexta: 9h às 18h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
