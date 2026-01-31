import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918888888888"; // India country code + number

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your services.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
