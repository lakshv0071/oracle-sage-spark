import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface InquiryData {
  type: 'schedule' | 'contact';
  name: string;
  email: string;
  phone?: string;
  company: string;
  jobTitle?: string;
  service?: string;
  date?: string;
  time?: string;
  message?: string;
  services?: string[];
  timeline?: string;
  companySize?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: InquiryData = await req.json();
    console.log("Received inquiry data:", data);

    // Format the message for WhatsApp
    let message = `🔔 *New Inquiry - Paramanu Consulting*\n\n`;
    message += `*Type:* ${data.type === 'schedule' ? 'Schedule Request' : 'Contact Form'}\n`;
    message += `*Name:* ${data.name}\n`;
    message += `*Email:* ${data.email}\n`;
    
    if (data.phone) {
      message += `*Phone:* ${data.phone}\n`;
    }
    
    message += `*Company:* ${data.company}\n`;
    
    if (data.jobTitle) {
      message += `*Job Title:* ${data.jobTitle}\n`;
    }
    
    if (data.companySize) {
      message += `*Company Size:* ${data.companySize}\n`;
    }
    
    if (data.service) {
      message += `*Service:* ${data.service}\n`;
    }
    
    if (data.services && data.services.length > 0) {
      message += `*Services:* ${data.services.join(', ')}\n`;
    }
    
    if (data.date && data.time) {
      message += `*Preferred Date/Time:* ${data.date} at ${data.time}\n`;
    }
    
    if (data.timeline) {
      message += `*Timeline:* ${data.timeline}\n`;
    }
    
    if (data.message) {
      message += `\n*Message:*\n${data.message}\n`;
    }

    // WhatsApp number (with country code, no + sign)
    const phoneNumber = "918985048098";
    
    // Get the CallMeBot API key from secrets
    const apiKey = Deno.env.get('CALLMEBOT_API_KEY');
    
    if (!apiKey) {
      console.error("CALLMEBOT_API_KEY not configured");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "WhatsApp API key not configured. Please set up CallMeBot API key." 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Send WhatsApp message via CallMeBot API
    const whatsappUrl = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodedMessage}&apikey=${apiKey}`;
    
    console.log("Sending WhatsApp notification...");
    
    const whatsappResponse = await fetch(whatsappUrl);
    const responseText = await whatsappResponse.text();
    
    console.log("WhatsApp API response:", responseText);

    if (whatsappResponse.ok || responseText.includes("Message queued")) {
      return new Response(
        JSON.stringify({ success: true, message: "WhatsApp notification sent successfully" }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    } else {
      console.error("WhatsApp API error:", responseText);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to send WhatsApp notification" }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-whatsapp function:", error);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
