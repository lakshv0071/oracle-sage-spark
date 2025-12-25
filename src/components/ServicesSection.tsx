import { motion } from "framer-motion";
import { Database, Cloud, Settings, Cpu, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Oracle Ecosystem",
    description: "End-to-end Oracle Database, Fusion Middleware, E-Business Suite & Cloud Applications management with 24/7 global support.",
    features: ["Database Administration", "Performance Tuning", "RAC & Data Guard", "Exadata Management"]
  },
  {
    icon: Cloud,
    title: "Cloud Transformation",
    description: "Strategic cloud migrations to AWS, Azure, OCI with hybrid architecture design and cost optimization.",
    features: ["Multi-Cloud Strategy", "Migration Planning", "FinOps & Optimization", "Cloud Security"]
  },
  {
    icon: Settings,
    title: "DevOps & SRE",
    description: "Accelerate delivery with CI/CD pipelines, infrastructure as code, and site reliability engineering practices.",
    features: ["CI/CD Automation", "Kubernetes & Containers", "Observability Stack", "Incident Management"]
  },
  {
    icon: Cpu,
    title: "AI-Enabled Services",
    description: "Intelligent automation, predictive analytics, and AI-powered operations for smarter infrastructure.",
    features: ["AIOps & MLOps", "Predictive Monitoring", "Intelligent Automation", "ChatOps Integration"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Comprehensive security operations, compliance management, and zero-trust architecture implementation.",
    features: ["SOC Services", "Compliance & Audit", "Identity Management", "Threat Detection"]
  },
  {
    icon: Zap,
    title: "Managed Services",
    description: "24/7 production support, proactive monitoring, and dedicated teams for mission-critical systems.",
    features: ["24/7 NOC Support", "SLA Management", "Capacity Planning", "Disaster Recovery"]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
  }
};

const ServicesSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive managed services designed for Fortune 500 enterprises. 
            From Oracle to Cloud to AI-driven operations.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full transition-all duration-500 hover:shadow-elevated hover:border-primary/30 hover:-translate-y-1">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
