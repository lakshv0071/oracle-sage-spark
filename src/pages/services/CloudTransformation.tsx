import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Cloud, Zap, TrendingUp, Lock, CheckCircle, ArrowRight } from "lucide-react";

const phases = [
  {
    step: "01",
    title: "Assessment",
    description: "Comprehensive analysis of your current infrastructure and cloud readiness.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Custom cloud migration roadmap aligned with your business objectives.",
  },
  {
    step: "03",
    title: "Migration",
    description: "Zero-downtime migration with rigorous testing and validation.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous improvement and cost optimization post-migration.",
  },
];

const cloudServices = [
  {
    icon: Cloud,
    title: "Multi-Cloud Strategy",
    description: "Design and implement hybrid and multi-cloud architectures using AWS, Azure, GCP, and Oracle Cloud.",
  },
  {
    icon: Zap,
    title: "Application Modernization",
    description: "Transform legacy applications into cloud-native microservices for improved scalability.",
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description: "FinOps practices to reduce cloud spend by up to 40% while maintaining performance.",
  },
  {
    icon: Lock,
    title: "Cloud Security",
    description: "Enterprise-grade security with zero-trust architecture and compliance frameworks.",
  },
];

const CloudTransformation = () => {
  const cloudSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cloud Transformation Services',
    description: 'Strategic cloud migration and modernization services for AWS, Azure, GCP, and Oracle Cloud.',
    provider: {
      '@type': 'Organization',
      name: 'Paramanu Consulting',
    },
    serviceType: 'Cloud Migration',
    areaServed: 'Worldwide',
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cloud Transformation - AWS, Azure, GCP Migration Services"
        description="Expert cloud migration and transformation services. Multi-cloud strategy for AWS, Azure, GCP, Oracle Cloud. Application modernization, cost optimization, and zero-downtime migrations."
        keywords="cloud migration services, AWS migration, Azure cloud services, GCP migration, Oracle Cloud Infrastructure, cloud transformation, application modernization, multi-cloud strategy, cloud cost optimization, FinOps, hybrid cloud, cloud security"
        url="https://www.paramanuconsulting.com/services/cloud-transformation"
        structuredData={cloudSchema}
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
              <Cloud className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Cloud Experts</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud <span className="text-gradient-primary">Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Accelerate your digital transformation with strategic cloud migration and 
              modernization services that deliver measurable business outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/get-started">Start Your Journey <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resources">Download Cloud Guide</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Migration Phases */}
      <section className="py-20 border-t border-border/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Proven Migration Methodology
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach that minimizes risk and maximizes value at every stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 rounded-xl h-full">
                  <span className="text-5xl font-bold text-primary/20">{phase.step}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end cloud solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-xl flex gap-6"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Move to the Cloud?</h2>
            <p className="text-muted-foreground mb-8">
              Get a free cloud readiness assessment and personalized migration roadmap.
            </p>
            <Button size="lg" asChild>
              <a href="/get-started">Schedule Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudTransformation;
