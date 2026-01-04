import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Lock, Mail, Eye, EyeOff, ArrowRight, Shield, 
  Clock, Headphones, FileText, BarChart3, Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const portalFeatures = [
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description: "Monitor your infrastructure health, SLA performance, and key metrics in real-time."
  },
  {
    icon: Headphones,
    title: "Support Tickets",
    description: "Create, track, and manage support tickets with full visibility into resolution progress."
  },
  {
    icon: FileText,
    title: "Reports & Analytics",
    description: "Access monthly reports, trend analysis, and customized analytics on demand."
  },
  {
    icon: Bell,
    title: "Alerts & Notifications",
    description: "Configure custom alerts and receive notifications for critical events."
  },
  {
    icon: Clock,
    title: "Service History",
    description: "Complete audit trail of all service activities, changes, and communications."
  },
  {
    icon: Shield,
    title: "Secure Access",
    description: "Enterprise-grade security with SSO, MFA, and role-based access control."
  }
];

const ClientPortal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login attempt:", { email });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl p-8 md:p-10 max-w-md mx-auto lg:mx-0">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">Client Portal</h1>
                  <p className="text-muted-foreground">Sign in to access your dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full pl-10 pr-12 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <a href="#" className="text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <Button type="submit" className="w-full gap-2" size="lg">
                    Sign In <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground mb-4">Or sign in with</p>
                  <div className="flex gap-3 justify-center">
                    <Button variant="outline" size="sm">
                      Microsoft SSO
                    </Button>
                    <Button variant="outline" size="sm">
                      Okta SSO
                    </Button>
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Need access?{" "}
                  <a href="/get-started" className="text-primary hover:underline">
                    Contact your account manager
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Right - Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                Client Access
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Complete <span className="text-gradient-primary">Service Hub</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access real-time dashboards, manage support tickets, download reports, 
                and stay informed about your managed services—all in one secure portal.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {portalFeatures.slice(0, 4).map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3 text-left">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Portal <span className="text-gradient-primary">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to manage your services and stay informed about your infrastructure.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {portalFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Headphones className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need <span className="text-gradient-primary">Support?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our 24/7 support team is always here to help. Reach out via phone, email, or chat.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="gap-2">
                <Headphones className="w-4 h-4" />
                Call Support: +1 (888) 555-0123
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-4 h-4" />
                Email: support@paramanu.com
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientPortal;
