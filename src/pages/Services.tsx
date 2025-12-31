import { motion } from "framer-motion";
import { 
  Database, Settings, Cpu, Shield, Headphones, Users, Briefcase, Globe, BarChart3,
  CheckCircle2, ArrowRight, Clock, DollarSign, Target, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    id: "postgresql",
    icon: Database,
    title: "PostgreSQL Services",
    tagline: "Enterprise PostgreSQL Database Management",
    description: "Comprehensive PostgreSQL database services with high availability, performance optimization, and 24/7 expert support. Our certified PostgreSQL experts deliver enterprise-grade database administration, replication, and cloud migrations.",
    features: [
      {
        title: "PostgreSQL Administration",
        details: "Full lifecycle management including installation, configuration, patching, upgrades, and ongoing maintenance for all PostgreSQL versions."
      },
      {
        title: "High Availability & Replication",
        details: "Streaming replication, logical replication, Patroni clusters, and pgBouncer connection pooling for maximum uptime."
      },
      {
        title: "Performance Optimization",
        details: "Query optimization, indexing strategies, vacuum tuning, and pg_stat analysis for peak database performance."
      },
      {
        title: "Backup & Recovery",
        details: "pg_dump, pg_basebackup, Barman, and pgBackRest implementations with point-in-time recovery capabilities."
      },
      {
        title: "Cloud PostgreSQL",
        details: "AWS RDS, Azure Database, Google Cloud SQL, and managed PostgreSQL deployment and migration services."
      },
      {
        title: "Security & Compliance",
        details: "Row-level security, SSL/TLS encryption, audit logging, and regulatory compliance (SOX, HIPAA, PCI-DSS)."
      }
    ],
    benefits: ["99.99% uptime SLA", "24/7 global support", "Certified PostgreSQL experts", "Cost optimization"],
    technologies: ["PostgreSQL", "Patroni", "pgBouncer", "Barman", "pgBackRest", "TimescaleDB", "PostGIS"]
  },
  {
    id: "oracle",
    icon: Database,
    title: "Oracle Managed Services",
    tagline: "Complete Oracle Ecosystem Management",
    description: "End-to-end Oracle ecosystem management from E-Business Suite to Cloud Infrastructure with 24/7 enterprise support. Our certified Oracle experts deliver comprehensive database administration, performance optimization, and seamless cloud migrations.",
    features: [
      {
        title: "E-Business Suite (R12.1/R12.2)",
        details: "Full lifecycle management including patching, cloning, upgrades, and performance tuning for Oracle EBS environments."
      },
      {
        title: "Oracle Database (11g–23ai)",
        details: "Expert administration for all Oracle Database versions including RAC clustering, Data Guard disaster recovery, and GoldenGate replication."
      },
      {
        title: "RAC & Data Guard",
        details: "High availability and disaster recovery solutions with Real Application Clusters and Active Data Guard implementations."
      },
      {
        title: "Middleware & BI Analytics",
        details: "WebLogic Server, SOA Suite, Oracle BI, OBIEE, and Oracle Analytics Cloud management and optimization."
      },
      {
        title: "Oracle Cloud Infrastructure (OCI)",
        details: "OCI architecture design, migration planning, and ongoing management of cloud-native Oracle workloads."
      },
      {
        title: "Security & Compliance",
        details: "Database security assessments, TDE encryption, audit vault implementations, and regulatory compliance (SOX, HIPAA, PCI-DSS)."
      }
    ],
    benefits: ["99.99% uptime SLA", "24/7 global support", "Certified Oracle experts", "Cost optimization"],
    technologies: ["Oracle Database", "Oracle EBS", "OCI", "Exadata", "RAC", "Data Guard", "GoldenGate"]
  },
  {
    id: "devops",
    icon: Settings,
    title: "DevOps Services",
    tagline: "Accelerate Delivery with Modern Practices",
    description: "Transform your software delivery with modern DevOps practices. We implement CI/CD pipelines, infrastructure as code, and cloud-native architectures that enable rapid, reliable deployments across multi-cloud environments.",
    features: [
      {
        title: "CI/CD Pipelines",
        details: "End-to-end pipeline implementation with Jenkins, GitHub Actions, GitLab CI, Azure DevOps, and AWS CodePipeline."
      },
      {
        title: "Infrastructure as Code (IaC)",
        details: "Terraform, Ansible, Pulumi, and CloudFormation for reproducible, version-controlled infrastructure deployments."
      },
      {
        title: "Cloud Architecture & Migration",
        details: "Multi-cloud strategy and migration expertise across AWS, Azure, GCP, and Oracle Cloud Infrastructure."
      },
      {
        title: "Docker & Kubernetes",
        details: "Container orchestration with Kubernetes (EKS, AKS, GKE), Helm charts, service mesh (Istio), and container security."
      },
      {
        title: "GitOps & ArgoCD",
        details: "Declarative deployments with GitOps workflows using ArgoCD, Flux, and progressive delivery strategies."
      },
      {
        title: "Pipeline Security (DevSecOps)",
        details: "Security scanning integration with SonarQube, Trivy, Snyk, and OWASP tools throughout the CI/CD pipeline."
      }
    ],
    benefits: ["50% faster deployments", "Zero-downtime releases", "Automated testing", "Infrastructure versioning"],
    technologies: ["Jenkins", "GitHub Actions", "Terraform", "Ansible", "Kubernetes", "Docker", "ArgoCD"]
  },
  {
    id: "sre",
    icon: BarChart3,
    title: "SRE Services",
    tagline: "Site Reliability Engineering Excellence",
    description: "Implement Site Reliability Engineering practices that ensure your systems are scalable, reliable, and efficient. Our SRE team brings Google-style reliability engineering to your enterprise infrastructure.",
    features: [
      {
        title: "Observability Stack",
        details: "Full observability with Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), Datadog, and New Relic."
      },
      {
        title: "Incident Management",
        details: "PagerDuty and OpsGenie integration with automated escalation, on-call scheduling, and incident response playbooks."
      },
      {
        title: "SLAs, SLOs & Error Budgets",
        details: "Define and monitor Service Level Objectives with error budget policies that balance reliability with velocity."
      },
      {
        title: "Chaos Engineering",
        details: "Proactive reliability testing with Chaos Monkey, Gremlin, and Litmus to identify weaknesses before they cause outages."
      },
      {
        title: "Capacity Planning",
        details: "Predictive scaling, resource optimization, and capacity modeling to handle traffic spikes efficiently."
      },
      {
        title: "Post-Incident Analysis",
        details: "Blameless postmortems, root cause analysis, and continuous improvement processes to prevent recurring issues."
      }
    ],
    benefits: ["99.99% availability targets", "MTTR < 15 minutes", "Proactive issue detection", "Reduced toil"],
    technologies: ["Prometheus", "Grafana", "Datadog", "PagerDuty", "ELK Stack", "Gremlin", "Jaeger"]
  },
  {
    id: "automation",
    icon: Cpu,
    title: "Automation & AI-Enabled Services",
    tagline: "Intelligent Infrastructure Operations",
    description: "Leverage intelligent automation and AI-powered operations to reduce manual toil, predict issues before they occur, and enable self-healing infrastructure that maintains itself.",
    features: [
      {
        title: "Automated Monitoring & Remediation",
        details: "Self-healing systems with automated runbooks that detect and resolve common issues without human intervention."
      },
      {
        title: "Predictive Alerting",
        details: "Machine learning-based anomaly detection that identifies potential issues before they impact users."
      },
      {
        title: "Custom Scripting",
        details: "Python, Bash, and PowerShell automation for complex operational tasks, data processing, and integrations."
      },
      {
        title: "Automated Backups & Recovery",
        details: "Scheduled backups with automated verification, cross-region replication, and point-in-time recovery capabilities."
      },
      {
        title: "Auto-Scaling & Health Checks",
        details: "Dynamic scaling based on metrics, custom health checks, and intelligent load balancing configurations."
      },
      {
        title: "AIOps & ChatOps",
        details: "AI-powered operations with Slack/Teams integration for conversational incident management and automation."
      }
    ],
    benefits: ["80% reduction in manual tasks", "Faster issue resolution", "Predictive maintenance", "24/7 automation"],
    technologies: ["Python", "Ansible", "Terraform", "AWS Lambda", "Azure Functions", "ServiceNow", "Rundeck"]
  },
  {
    id: "production-support",
    icon: Headphones,
    title: "Production Support",
    tagline: "24x7 Mission-Critical Support",
    description: "Round-the-clock L2/L3/L4 production support with global delivery from our India and US operations centers. Our dedicated teams ensure your mission-critical systems run smoothly with rapid response SLAs.",
    features: [
      {
        title: "24x7 L2/L3/L4 Support",
        details: "Multi-tier support structure with escalation paths for complex issues requiring deep technical expertise."
      },
      {
        title: "Global Delivery Model",
        details: "Follow-the-sun support from operations centers in India and United States ensuring continuous coverage."
      },
      {
        title: "Mission-Critical Systems",
        details: "Specialized support for business-critical applications with guaranteed uptime and priority response."
      },
      {
        title: "Rapid Response SLAs",
        details: "Guaranteed response times: P1 < 15 min, P2 < 30 min, P3 < 2 hours with defined resolution targets."
      },
      {
        title: "Proactive Monitoring",
        details: "Continuous health monitoring with alerting and escalation before issues impact business operations."
      },
      {
        title: "Knowledge Management",
        details: "Comprehensive documentation, runbooks, and knowledge bases that enable faster resolution and onboarding."
      }
    ],
    benefits: ["< 15 min P1 response", "Follow-the-sun coverage", "Dedicated support teams", "99.9% SLA compliance"],
    technologies: ["ServiceNow", "Jira", "PagerDuty", "Confluence", "Slack", "Teams", "Zendesk"]
  },
  {
    id: "sap",
    icon: Shield,
    title: "SAP Services",
    tagline: "Comprehensive SAP Basis & Beyond",
    description: "Full-spectrum SAP services including Basis administration, system upgrades, S/4HANA migrations, and production support. Our SAP-certified consultants deliver enterprise-grade SAP solutions.",
    features: [
      {
        title: "SAP Basis Administration",
        details: "Complete Basis support including user management, transport management, system monitoring, and performance optimization."
      },
      {
        title: "S/4HANA Migrations",
        details: "End-to-end S/4HANA conversion projects including assessment, planning, execution, and hypercare support."
      },
      {
        title: "System Upgrades & Patches",
        details: "Support pack stacks, kernel upgrades, enhancement package implementations, and Unicode conversions."
      },
      {
        title: "Integration Services",
        details: "SAP PI/PO, CPI integration, RFC/BAPI configurations, and third-party system integrations."
      },
      {
        title: "HANA Database Management",
        details: "SAP HANA administration, performance tuning, backup/recovery, and system replication setup."
      },
      {
        title: "Production Support",
        details: "24x7 SAP application and Basis support with defined SLAs and dedicated support teams."
      }
    ],
    benefits: ["SAP-certified experts", "S/4HANA migration specialists", "End-to-end lifecycle support", "Cost optimization"],
    technologies: ["SAP ECC", "S/4HANA", "SAP HANA", "SAP PI/PO", "SAP BW", "SAP Fiori", "Solution Manager"]
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Development",
    tagline: "Enterprise-Grade Web Solutions",
    description: "Enterprise-grade web development including corporate websites, internal portals, custom dashboards, and modern web applications built with cutting-edge technologies and best practices.",
    features: [
      {
        title: "Enterprise Websites",
        details: "Professional corporate websites with modern design, SEO optimization, and content management systems."
      },
      {
        title: "Internal Portals",
        details: "Employee portals, knowledge bases, and collaboration platforms with SSO and role-based access control."
      },
      {
        title: "Custom Dashboards",
        details: "Real-time business intelligence dashboards with data visualization, reporting, and analytics integration."
      },
      {
        title: "Web Applications",
        details: "Full-stack web application development with React, Vue, Angular, Node.js, and cloud-native architectures."
      },
      {
        title: "API Development",
        details: "RESTful and GraphQL API design, development, and documentation with security best practices."
      },
      {
        title: "Modern UI/UX",
        details: "User-centered design with responsive layouts, accessibility compliance, and performance optimization."
      }
    ],
    benefits: ["Mobile-responsive designs", "SEO optimized", "Fast load times", "Accessible (WCAG 2.1)"],
    technologies: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "PostgreSQL", "AWS/Azure"]
  },
  {
    id: "hr-staffing",
    icon: Users,
    title: "HR & Staffing Services",
    tagline: "IT Talent Solutions at Scale",
    description: "Strategic IT staffing and workforce solutions with specialized talent in Oracle, SAP, DevOps, and cloud technologies. Scale your teams quickly with pre-vetted, experienced professionals.",
    features: [
      {
        title: "IT Staffing Solutions",
        details: "Contract, contract-to-hire, and permanent placement services for technical roles across all levels."
      },
      {
        title: "Workforce Scaling",
        details: "Rapid team augmentation for project surges, new initiatives, or ongoing operational needs."
      },
      {
        title: "Oracle Talent",
        details: "Certified Oracle DBAs, EBS developers, Cloud architects, and Fusion Middleware specialists."
      },
      {
        title: "SAP Talent",
        details: "SAP Basis administrators, ABAP developers, S/4HANA consultants, and functional experts."
      },
      {
        title: "DevOps Engineers",
        details: "Cloud engineers, SREs, Kubernetes specialists, and CI/CD pipeline experts."
      },
      {
        title: "Managed Teams",
        details: "Dedicated offshore/nearshore teams with project management and quality assurance."
      }
    ],
    benefits: ["Pre-vetted candidates", "Fast placement (< 2 weeks)", "Flexible engagement models", "Global talent pool"],
    technologies: ["Oracle", "SAP", "AWS", "Azure", "Kubernetes", "Terraform", "Python"]
  },
  {
    id: "consulting",
    icon: Briefcase,
    title: "Business Consulting",
    tagline: "Strategic Technology Transformation",
    description: "Strategic consulting for revenue recovery, process optimization, and technology-driven transformation. Our consultants combine deep technical expertise with business acumen to deliver measurable results.",
    features: [
      {
        title: "Revenue Recovery",
        details: "Identify and recover lost revenue through system optimizations, process improvements, and automation."
      },
      {
        title: "Process Optimization",
        details: "Business process analysis, workflow automation, and operational efficiency improvements."
      },
      {
        title: "Digital Transformation",
        details: "Strategic roadmaps for cloud adoption, application modernization, and digital initiatives."
      },
      {
        title: "Technology Strategy",
        details: "IT strategy development, technology assessments, and architecture recommendations."
      },
      {
        title: "Cost Optimization",
        details: "Infrastructure right-sizing, license optimization, and cloud cost management strategies."
      },
      {
        title: "Change Management",
        details: "Organizational change support, training programs, and adoption strategies for new technologies."
      }
    ],
    benefits: ["ROI-focused approach", "Industry expertise", "Actionable recommendations", "Executive alignment"],
    technologies: ["Strategy", "Process Automation", "Cloud", "Analytics", "Change Management"]
  }
];

const engagementModels = [
  {
    icon: Clock,
    title: "Hourly",
    description: "Flexible hourly engagements for ad-hoc support and consulting needs.",
    rate: "$50-60/hr",
    rateDetail: "Senior / Specialized"
  },
  {
    icon: DollarSign,
    title: "Monthly Managed Services",
    description: "Predictable monthly pricing for ongoing managed services and support.",
    rate: "Custom Pricing",
    rateDetail: "Based on scope"
  },
  {
    icon: Target,
    title: "Fixed Price",
    description: "Fixed-price projects with defined scope, timeline, and deliverables.",
    rate: "Project-based",
    rateDetail: "Defined milestones"
  },
  {
    icon: Zap,
    title: "Outcome Based",
    description: "Pay for results with outcome-based pricing tied to business metrics.",
    rate: "Performance-tied",
    rateDetail: "Shared success"
  }
];

const whyChooseUs = [
  {
    title: "Enterprise-Focused",
    description: "Built for Fortune 500 complexity. We understand enterprise requirements, compliance needs, and scale challenges."
  },
  {
    title: "Automation-First",
    description: "We automate everything possible to reduce costs, eliminate errors, and accelerate delivery."
  },
  {
    title: "Security & Compliance Aligned",
    description: "SOC 2, HIPAA, PCI-DSS, and SOX compliance expertise built into every engagement."
  },
  {
    title: "Built for Scale",
    description: "Our processes and teams scale with your needs, from startup projects to global enterprise deployments."
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

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise-Grade <span className="text-gradient-primary">Managed Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive technology services designed for Fortune 500 enterprises. 
              From Oracle and SAP to DevOps and AI-driven operations, we deliver excellence at scale.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                      <p className="text-primary font-medium">{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <span 
                        key={benefit}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features Side */}
                <div className={`glass-card rounded-2xl p-6 md:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-lg font-semibold mb-6">Key Capabilities</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                        <h4 className="font-medium mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              Flexible Options
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engagement <span className="text-gradient-primary">Models</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the engagement model that best fits your needs. From hourly consulting to outcome-based partnerships.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {engagementModels.map((model) => (
              <motion.div 
                key={model.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <model.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{model.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xl font-bold text-primary">{model.rate}</p>
                  <p className="text-xs text-muted-foreground">{model.rateDetail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Support & Automation:</span> Starting at $30/hr
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              Our Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient-primary">ApexTech</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={item.title}
                variants={itemVariants}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
              Ready to Transform Your <span className="text-gradient-primary">Operations?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our enterprise services can help you achieve your technology goals. 
              Schedule a free consultation with our solutions team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Schedule Free Consultation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
