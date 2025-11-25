import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const phone = "555493019191";
    const message = encodeURIComponent("Olá! Vim do site e gostaria de mais informações.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
};

export default WhatsAppButton;