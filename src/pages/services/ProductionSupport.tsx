import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Headphones, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

const supportTiers = [
  {
    tier: "Standard",
    response: "4 hours",
    availability: "Business Hours",
    features: ["Email & ticket support", "Monthly reporting", "Knowledge base access"],
  },
  {
    tier: "Premium",
    response: "1 hour",
    availability: "24/7",
    features: ["Phone & chat support", "Weekly health checks", "Dedicated account manager"],
    highlighted: true,
  },
  {
    tier: "Enterprise",
    response: "15 minutes",
    availability: "24/7/365",
    features: ["Dedicated support team", "Real-time monitoring", "Custom SLAs"],
  },
];

const capabilities = [
  {
    icon: Clock,
    title: "Round-the-Clock Monitoring",
    description: "Continuous monitoring of your production systems with immediate incident response.",
  },
  {
    icon: Shield,
    title: "Proactive Maintenance",
    description: "Regular health checks and preventive measures to avoid downtime.",
  },
  {
    icon: Headphones,
    title: "Expert Support Team",
    description: "Access to certified engineers with deep expertise in your technology stack.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Management",
    description: "Structured incident response with clear escalation paths and post-mortems.",
  },
];

const metrics = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "<15min", label: "Response Time" },
  { value: "24/7", label: "Availability" },
  { value: "500+", label: "Issues Resolved/Month" },
];

const ProductionSupport = () => {
  const supportSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '24/7 Production Support',
    description: 'Enterprise-grade 24/7 production support with 99.99% uptime SLA and expert engineers.',
    provider: {
      '@type': 'Organization',
      name: 'Paramanu Consulting',
    },
    serviceType: 'IT Support',
    areaServed: 'Worldwide',
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="24/7 Production Support - Enterprise IT Support Services"
        description="Enterprise 24/7 production support with 99.99% uptime SLA. L2/L3/L4 support, 15-minute response time, proactive monitoring, incident management, and dedicated support teams."
        keywords="24/7 IT support, production support services, enterprise IT support, L2 L3 support, managed IT services, incident management, proactive monitoring, SLA support, dedicated support team, IT helpdesk"
        url="https://paramanu.com/services/production-support"
        structuredData={supportSchema}
      />
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
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Always On</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              24/7 <span className="text-gradient-primary">Production Support</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Enterprise-grade production support that keeps your systems running smoothly. 
              Expert engineers available around the clock to resolve issues fast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/get-started">Get Support Now <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resources">View SLA Details</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-t border-border/50">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Support Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the support level that matches your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 rounded-xl ${tier.highlighted ? 'ring-2 ring-primary' : ''}`}
              >
                {tier.highlighted && (
                  <div className="text-xs font-medium text-primary mb-4">MOST POPULAR</div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">{tier.response}</span>
                  <span className="text-sm text-muted-foreground">response</span>
                </div>
                <div className="text-sm text-muted-foreground mb-6">{tier.availability}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={tier.highlighted ? "default" : "outline"} asChild>
                  <a href="/get-started">Get Started</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Deliver
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services that ensure your production environment runs flawlessly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-xl flex gap-6"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <capability.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductionSupport;
