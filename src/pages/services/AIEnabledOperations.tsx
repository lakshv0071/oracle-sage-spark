import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, LineChart, Bot, CheckCircle, ArrowRight } from "lucide-react";

const aiCapabilities = [
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "AI-powered forecasting that predicts issues before they impact your business.",
  },
  {
    icon: Sparkles,
    title: "AIOps Integration",
    description: "Intelligent automation that correlates events and reduces alert fatigue.",
  },
  {
    icon: LineChart,
    title: "Anomaly Detection",
    description: "Machine learning models that identify unusual patterns in real-time.",
  },
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: "Self-healing systems that automatically remediate common issues.",
  },
];

const useCases = [
  {
    title: "Capacity Planning",
    description: "AI-driven resource forecasting for optimal infrastructure sizing.",
  },
  {
    title: "Root Cause Analysis",
    description: "Automated diagnosis that reduces MTTR by up to 80%.",
  },
  {
    title: "Cost Optimization",
    description: "Smart recommendations for cloud spend reduction.",
  },
  {
    title: "Security Monitoring",
    description: "ML-powered threat detection and response.",
  },
];

const stats = [
  { value: "80%", label: "Reduction in MTTR" },
  { value: "90%", label: "Alert Noise Reduction" },
  { value: "60%", label: "Fewer Incidents" },
  { value: "3x", label: "Faster Resolution" },
];

const AIEnabledOperations = () => {
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
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Enabled <span className="text-gradient-primary">Operations</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Harness the power of artificial intelligence to transform your IT operations 
              with predictive insights, intelligent automation, and self-healing systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/get-started">Explore AI Solutions <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resources">See AI in Action</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-t border-border/50">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Powered Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leverage cutting-edge AI and machine learning to revolutionize your operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real-World Applications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how AI transforms everyday operations across your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready for AI-Driven Operations?</h2>
            <p className="text-muted-foreground mb-8">
              Discover how AI can transform your IT operations with a personalized demo.
            </p>
            <Button size="lg" asChild>
              <a href="/get-started">Request AI Demo</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIEnabledOperations;
