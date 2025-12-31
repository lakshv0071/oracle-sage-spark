import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Database, Shield, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Database Administration",
    description: "Expert management of Oracle databases including patching, tuning, and optimization for peak performance.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Comprehensive security management ensuring your Oracle environment meets industry compliance standards.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock monitoring and alerting to detect and resolve issues before they impact your business.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Access to experienced Oracle DBAs and architects dedicated to your environment's success.",
  },
];

const benefits = [
  "99.99% uptime SLA guarantee",
  "50% reduction in operational costs",
  "Proactive performance optimization",
  "Rapid incident response times",
  "Seamless Oracle Cloud integration",
  "Comprehensive backup & recovery",
];

const OracleManagedServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Database className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Enterprise Oracle Expertise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Oracle <span className="text-gradient-primary">Managed Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Enterprise-grade Oracle database management and support from experienced experts. 
              Focus on your business while we handle the complexity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/get-started">Schedule Assessment <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resources">View Case Studies</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 border-t border-border/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Oracle Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced Oracle specialists deliver end-to-end database management services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Oracle Services?
              </h2>
              <p className="text-muted-foreground mb-8">
                With over 15 years of Oracle expertise, we deliver measurable results 
                that drive your business forward.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize?</h3>
              <p className="text-muted-foreground mb-6">
                Get a free Oracle environment assessment and discover how we can 
                improve your database performance.
              </p>
              <Button className="w-full" size="lg" asChild>
                <a href="/get-started">Get Free Assessment</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OracleManagedServices;
