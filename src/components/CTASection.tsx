import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20">
            Start Today
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="text-gradient-primary">Enterprise IT?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Partner with seasoned architects and engineers who understand mission-critical 
            enterprise environments. Get a custom assessment today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Download Capabilities Deck
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a href="tel:+1-800-555-0123" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>1-800-555-0123</span>
            </a>
            <a href="mailto:enterprise@techadvisors.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>enterprise@techadvisors.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
