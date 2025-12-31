import { motion } from "framer-motion";
import { 
  Cloud, Database, Shield, Zap, RefreshCw, TrendingUp, 
  Server, Lock, BarChart3, Users, Cog, ArrowRight, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const solutions = [
  {
    id: "cloud-transformation",
    icon: Cloud,
    title: "Cloud Transformation",
    tagline: "Accelerate Your Journey to the Cloud",
    description: "Strategic cloud migrations and modernization for AWS, Azure, Google Cloud, and Oracle Cloud Infrastructure. We help enterprises move from legacy systems to cloud-native architectures with minimal disruption.",
    capabilities: [
      "Multi-cloud strategy and architecture design",
      "Lift-and-shift, re-platform, and refactor migrations",
      "Cloud-native application development",
      "FinOps and cost optimization",
      "Hybrid cloud implementations",
      "Cloud security and compliance"
    ],
    outcomes: ["40% infrastructure cost reduction", "99.99% availability", "3x faster deployments"],
    caseStudy: {
      company: "Fortune 100 Logistics Company",
      result: "Migrated 200+ Oracle databases to OCI, achieving 45% cost savings and 60% performance improvement."
    }
  },
  {
    id: "enterprise-applications",
    icon: Database,
    title: "Enterprise Application Management",
    tagline: "Maximize Your ERP Investment",
    description: "Comprehensive management of Oracle EBS, SAP, and other enterprise applications. From upgrades to integrations, we ensure your business-critical applications run at peak performance.",
    capabilities: [
      "Oracle EBS R12.1/R12.2 lifecycle management",
      "SAP S/4HANA migrations and support",
      "Application performance optimization",
      "Custom development and integrations",
      "Patch management and upgrades",
      "24/7 production support"
    ],
    outcomes: ["50% reduction in downtime", "30% faster month-end close", "Zero failed patches"],
    caseStudy: {
      company: "Global Industrial Manufacturer",
      result: "Rolled out Oracle EBS across 49 countries with centralized managed services, reducing IT costs by 35%."
    }
  },
  {
    id: "infrastructure-modernization",
    icon: Server,
    title: "Infrastructure Modernization",
    tagline: "Transform Your Technology Foundation",
    description: "Modernize legacy infrastructure with containerization, microservices, and infrastructure as code. Enable agility while reducing technical debt.",
    capabilities: [
      "Containerization with Docker and Kubernetes",
      "Microservices architecture design",
      "Infrastructure as Code (Terraform, Ansible)",
      "Legacy system decommissioning",
      "Data center consolidation",
      "Edge computing solutions"
    ],
    outcomes: ["70% faster provisioning", "80% reduction in manual tasks", "50% lower maintenance costs"],
    caseStudy: {
      company: "Major Healthcare Provider",
      result: "Containerized 150+ applications, reducing deployment time from weeks to hours."
    }
  },
  {
    id: "security-compliance",
    icon: Shield,
    title: "Security & Compliance",
    tagline: "Protect What Matters Most",
    description: "Enterprise security solutions including SOC services, identity management, and compliance frameworks for HIPAA, SOX, PCI-DSS, and more.",
    capabilities: [
      "Security Operations Center (SOC) services",
      "Identity and Access Management (IAM)",
      "Vulnerability management and penetration testing",
      "Compliance audits (SOX, HIPAA, PCI-DSS)",
      "Zero-trust architecture implementation",
      "Incident response and forensics"
    ],
    outcomes: ["100% audit pass rate", "90% reduction in security incidents", "24/7 threat monitoring"],
    caseStudy: {
      company: "Regional Financial Institution",
      result: "Achieved SOX and PCI-DSS compliance in 6 months with zero audit findings."
    }
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data & Analytics",
    tagline: "Turn Data into Decisions",
    description: "Business intelligence, data warehousing, and advanced analytics solutions. From Oracle BI to modern data lakes, we help you unlock insights from your data.",
    capabilities: [
      "Data warehouse design and implementation",
      "Business intelligence (OBIEE, Power BI, Tableau)",
      "Real-time analytics and dashboards",
      "Data lake architecture",
      "Machine learning and AI integration",
      "Data governance and quality"
    ],
    outcomes: ["60% faster reporting", "Real-time business insights", "Single source of truth"],
    caseStudy: {
      company: "Retail Chain (500+ stores)",
      result: "Implemented real-time inventory analytics, reducing stockouts by 40% and improving margins by 15%."
    }
  },
  {
    id: "automation-ai",
    icon: Zap,
    title: "Intelligent Automation",
    tagline: "Automate Everything Possible",
    description: "AIOps, robotic process automation, and intelligent workflows that reduce manual effort and accelerate operations across your enterprise.",
    capabilities: [
      "AIOps and predictive monitoring",
      "Robotic Process Automation (RPA)",
      "Workflow automation and orchestration",
      "Self-healing infrastructure",
      "ChatOps and conversational AI",
      "Process mining and optimization"
    ],
    outcomes: ["80% reduction in manual tasks", "50% faster incident resolution", "24/7 automated operations"],
    caseStudy: {
      company: "Insurance Provider",
      result: "Automated 200+ manual processes, saving 15,000 hours annually and reducing errors by 95%."
    }
  },
  {
    id: "disaster-recovery",
    icon: RefreshCw,
    title: "Business Continuity & DR",
    tagline: "Ensure Always-On Operations",
    description: "Disaster recovery, backup solutions, and business continuity planning that protect your operations and minimize downtime.",
    capabilities: [
      "Disaster recovery as a service (DRaaS)",
      "Multi-region failover architectures",
      "Backup and recovery automation",
      "Business continuity planning",
      "RTO/RPO optimization",
      "DR testing and validation"
    ],
    outcomes: ["RTO < 15 minutes", "RPO < 1 minute", "99.999% data durability"],
    caseStudy: {
      company: "E-commerce Platform",
      result: "Implemented cross-region DR with automatic failover, achieving zero data loss during regional outage."
    }
  },
  {
    id: "devops-transformation",
    icon: Cog,
    title: "DevOps Transformation",
    tagline: "Accelerate Software Delivery",
    description: "End-to-end DevOps implementation including CI/CD pipelines, GitOps, and platform engineering that enables rapid, reliable software delivery.",
    capabilities: [
      "CI/CD pipeline implementation",
      "GitOps with ArgoCD and Flux",
      "Platform engineering and developer portals",
      "Test automation frameworks",
      "DevSecOps and security scanning",
      "Release management and feature flags"
    ],
    outcomes: ["10x deployment frequency", "50% faster time-to-market", "Zero-downtime releases"],
    caseStudy: {
      company: "FinTech Startup",
      result: "Reduced release cycle from monthly to daily with 99.9% deployment success rate."
    }
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
  }
};

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              Enterprise Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Technology Solutions for <span className="text-gradient-primary">Modern Enterprises</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Proven solutions that transform operations, accelerate growth, and deliver measurable business outcomes.
              Built on 20+ years of enterprise expertise.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Talk to an Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="space-y-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => (
              <motion.div 
                key={solution.id}
                id={solution.id}
                variants={itemVariants}
                className="glass-card rounded-2xl p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-10">
                  {/* Left Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                        <solution.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold">{solution.title}</h2>
                        <p className="text-primary font-medium">{solution.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Outcomes */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {solution.outcomes.map((outcome) => (
                        <span 
                          key={outcome}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {outcome}
                        </span>
                      ))}
                    </div>

                    {/* Case Study */}
                    <div className="bg-secondary/50 rounded-xl p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Case Study</p>
                      <p className="font-semibold mb-1">{solution.caseStudy.company}</p>
                      <p className="text-sm text-muted-foreground">{solution.caseStudy.result}</p>
                    </div>
                  </div>

                  {/* Right - Capabilities */}
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Key Capabilities</h3>
                    <ul className="space-y-3">
                      {solution.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{capability}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <Button variant="outline" className="gap-2">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient-primary">Business?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss which solutions are right for your organization. 
              Our experts will help you build a roadmap to success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download Solution Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
