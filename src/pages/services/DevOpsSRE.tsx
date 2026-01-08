import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { GitBranch, Gauge, RefreshCw, Terminal, CheckCircle, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Design",
    description: "Automated build, test, and deployment pipelines that accelerate your release cycles.",
  },
  {
    icon: Gauge,
    title: "Observability & Monitoring",
    description: "Full-stack visibility with metrics, logs, and traces for proactive issue detection.",
  },
  {
    icon: RefreshCw,
    title: "Infrastructure as Code",
    description: "Version-controlled, repeatable infrastructure using Terraform, Ansible, and Pulumi.",
  },
  {
    icon: Terminal,
    title: "Platform Engineering",
    description: "Internal developer platforms that boost productivity and standardize deployments.",
  },
];

const metrics = [
  { value: "10x", label: "Faster Deployments" },
  { value: "70%", label: "Fewer Incidents" },
  { value: "99.99%", label: "Uptime Achieved" },
  { value: "50%", label: "Cost Reduction" },
];

const practices = [
  "GitOps workflow implementation",
  "Kubernetes orchestration",
  "Chaos engineering",
  "Incident management automation",
  "SLO/SLI definition & tracking",
  "On-call optimization",
];

const DevOpsSRE = () => {
  const devopsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'DevOps & SRE Services',
    description: 'Modern DevOps and Site Reliability Engineering services for enterprise systems.',
    provider: {
      '@type': 'Organization',
      name: 'Paramanu Consulting',
    },
    serviceType: 'DevOps Consulting',
    areaServed: 'Worldwide',
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="DevOps & SRE Services - CI/CD, Kubernetes, Infrastructure as Code"
        description="Enterprise DevOps and SRE consulting. CI/CD pipeline design, Kubernetes orchestration, Terraform IaC, GitOps, observability, and platform engineering for 10x faster deployments."
        keywords="DevOps services, SRE consulting, CI/CD pipeline, Kubernetes consulting, Terraform, infrastructure as code, GitOps, platform engineering, observability, Prometheus, Grafana, Jenkins, GitHub Actions, site reliability engineering"
        url="https://paramanu.com/services/devops-sre"
        structuredData={devopsSchema}
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
              <GitBranch className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Engineering Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DevOps & <span className="text-gradient-primary">SRE Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build resilient, scalable systems with modern DevOps practices and 
              Site Reliability Engineering principles that drive operational excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/get-started">Assess Your Maturity <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resources">View Success Stories</a>
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

      {/* Capabilities */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform your software delivery with industry-leading DevOps and SRE practices.
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

      {/* Practices */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Modern Practices for Reliable Systems
              </h2>
              <p className="text-muted-foreground mb-8">
                We implement proven SRE practices that ensure your systems are reliable, 
                scalable, and maintainable.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {practices.map((practice, index) => (
                  <motion.div
                    key={practice}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{practice}</span>
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
              <h3 className="text-2xl font-bold mb-4">DevOps Maturity Assessment</h3>
              <p className="text-muted-foreground mb-6">
                Discover your current DevOps maturity level and get a roadmap for 
                improvement with our free assessment.
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

export default DevOpsSRE;
