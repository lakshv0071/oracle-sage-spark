// Netlify serverless function to proxy registration to Supabase
// This avoids direct browser-to-Supabase connections that may be blocked by ISPs/firewalls

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const payload = JSON.parse(event.body);

    // Validate required fields
    if (!payload.full_name || !payload.email || !payload.phone) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing required fields: full_name, email, phone" }),
      };
    }

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://xgewdtcmklbenboverlo.supabase.co";
    const SUPABASE_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZXdkdGNta2xiZW5ib3ZlcmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwNjU3MzAsImV4cCI6MjA4MjY0MTczMH0.AzMbYqoytfjU2ggKQAz2k68KvwRb1u7sTYPYOIiE0DI";

    console.log("Proxying registration to Supabase...");

    const response = await fetch(`${SUPABASE_URL}/rest/v1/registrations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        full_name: payload.full_name,
        email: payload.email,
        phone: payload.phone,
        whatsapp_number: payload.whatsapp_number || null,
        college_name: payload.college_name || "",
        year_of_study: payload.year_of_study || "",
        heard_from: payload.heard_from || null,
        consent: payload.consent || false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Supabase error:", response.status, errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: `Database error: ${errorText}` }),
      };
    }

    console.log("Registration saved successfully via proxy");
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({ success: true, message: "Registration saved successfully" }),
    };
  } catch (error) {
    console.error("Proxy function error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
