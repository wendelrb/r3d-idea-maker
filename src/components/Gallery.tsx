// Carregar dinamicamente todas as imagens que existem hoje na pasta gallery
const galleryModules = import.meta.glob("@/assets/gallery/*.{png,jpg,jpeg,webp}", { eager: true });

const Gallery = () => {
  const priorityOrder = [
    "impressoes-3d-sob-medida.jpg",
    "criacao-em-modelagem.jpg",
    "silo-em-maquete.jpg",
  ];

  const images = Object.keys(galleryModules)
    .filter((path) => {
      const filename = (path.split("/").pop() || "").toLowerCase();
      // Excluir fotos brutas de WhatsApp/telefone que começam com IMG-
      // e ocultar especificamente bonecosefiguras.jpg, maquete.jpg e personalizacao-de-produtos.jpg
      return (
        !/^img-/i.test(filename) &&
        filename !== "bonecosefiguras.jpg" &&
        filename !== "maquete.jpg" &&
        filename !== "personalizacao-de-produtos.jpg"
      );
    })
    .sort((a, b) => {
      const nameA = (a.split("/").pop() || "").toLowerCase();
      const nameB = (b.split("/").pop() || "").toLowerCase();
      const idxA = priorityOrder.indexOf(nameA);
      const idxB = priorityOrder.indexOf(nameB);
      const rankA = idxA === -1 ? Infinity : idxA;
      const rankB = idxB === -1 ? Infinity : idxB;
      if (rankA !== rankB) return rankA - rankB;
      return a.localeCompare(b);
    })
    .map((path) => {
      const mod = galleryModules[path] as any;
      const src = mod && typeof mod === "object" && "default" in mod ? (mod as { default: string }).default : (mod as string);
      const filename = path.split("/").pop() || "imagem-3d";
      const base = filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ").trim();
      const title = base.charAt(0).toUpperCase() + base.slice(1);
      return { src, alt: base, title };
    });

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
