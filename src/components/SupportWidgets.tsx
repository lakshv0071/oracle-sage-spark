import { useEffect } from "react";
import { MessageCircle } from "lucide-react";

// TODO: Replace with your Tawk.to Property ID and Widget ID
const TAWKTO_PROPERTY_ID = "XXXXXXXXXXXXXXXXXXXXXXXX";
const TAWKTO_WIDGET_ID = "default";

// TODO: Replace with actual WhatsApp number
const WHATSAPP_NUMBER = "917989359581";

interface SupportWidgetsProps {
  userName?: string;
  userEmail?: string;
}

const SupportWidgets = ({ userName, userEmail }: SupportWidgetsProps) => {
  useEffect(() => {
    // Inject Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWKTO_PROPERTY_ID}/${TAWKTO_WIDGET_ID}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    // Pre-fill user info if available
    if (userName || userEmail) {
      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_API.visitor = {
        name: userName || "",
        email: userEmail || "",
      };
    }

    return () => {
      // Cleanup on unmount
      try {
        document.head.removeChild(script);
      } catch {
        // ignore
      }
    };
  }, [userName, userEmail]);

  return (
    <>
      {/* WhatsApp Floating Button — positioned above Tawk.to widget */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        className="fixed bottom-24 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 group"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-card text-foreground text-xs px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border/50">
          Chat with us on WhatsApp
        </span>
      </a>
    </>
  );
};

export default SupportWidgets;
