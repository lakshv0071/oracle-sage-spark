import { motion } from "framer-motion";
import { 
  FileText, BookOpen, Video, Mic, Calendar, Download,
  ArrowRight, Clock, Tag, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const featuredResources = [
  {
    type: "Whitepaper",
    icon: FileText,
    title: "2024 State of Enterprise Cloud Migration",
    description: "Comprehensive analysis of cloud adoption trends, challenges, and best practices from 500+ enterprise migrations.",
    readTime: "15 min read",
    tags: ["Cloud", "Migration", "Strategy"]
  },
  {
    type: "E-Book",
    icon: BookOpen,
    title: "The Complete Guide to Oracle EBS Optimization",
    description: "Expert strategies for maximizing performance, reducing costs, and extending the life of your Oracle E-Business Suite investment.",
    readTime: "45 min read",
    tags: ["Oracle", "EBS", "Optimization"]
  },
  {
    type: "Webinar",
    icon: Video,
    title: "DevOps Transformation: From Zero to Hero",
    description: "Watch our CTO discuss how enterprises have successfully implemented DevOps at scale.",
    readTime: "60 min",
    tags: ["DevOps", "CI/CD", "Transformation"]
  }
];

const caseStudies = [
  {
    industry: "Financial Services",
    title: "Global Bank Achieves 99.99% Uptime with Oracle RAC",
    result: "45% cost reduction, zero unplanned downtime",
    tags: ["Oracle", "High Availability", "Banking"]
  },
  {
    industry: "Healthcare",
    title: "Hospital Network Migrates to HIPAA-Compliant Cloud",
    result: "60% faster deployments, 100% HIPAA compliance",
    tags: ["Healthcare", "Cloud", "Compliance"]
  },
  {
    industry: "Manufacturing",
    title: "Industrial Manufacturer Implements Global EBS",
    result: "35% IT cost savings across 49 countries",
    tags: ["Oracle EBS", "Manufacturing", "Global"]
  },
  {
    industry: "Retail",
    title: "E-commerce Platform Scales for 10x Peak Traffic",
    result: "Zero downtime during Black Friday, 40% infrastructure savings",
    tags: ["E-commerce", "Kubernetes", "Scaling"]
  },
  {
    industry: "Logistics",
    title: "3PL Provider Implements Real-Time Visibility",
    result: "25% delivery improvement, 30% cost reduction",
    tags: ["Logistics", "Oracle TMS", "Analytics"]
  },
  {
    industry: "Government",
    title: "State Agency Modernizes Legacy Systems",
    result: "FedRAMP compliance, 50% faster citizen services",
    tags: ["Government", "Modernization", "Compliance"]
  }
];

const blogPosts = [
  {
    date: "Dec 20, 2024",
    title: "AI-Powered AIOps: The Future of IT Operations",
    excerpt: "How artificial intelligence is transforming IT operations with predictive alerting and automated remediation.",
    readTime: "8 min read",
    category: "AIOps"
  },
  {
    date: "Dec 15, 2024",
    title: "Kubernetes Best Practices for Enterprise Workloads",
    excerpt: "Essential patterns and anti-patterns for running production workloads on Kubernetes at scale.",
    readTime: "12 min read",
    category: "DevOps"
  },
  {
    date: "Dec 10, 2024",
    title: "Oracle 23ai: What DBAs Need to Know",
    excerpt: "Deep dive into the new features and capabilities of Oracle Database 23ai for enterprise environments.",
    readTime: "10 min read",
    category: "Oracle"
  },
  {
    date: "Dec 5, 2024",
    title: "SAP S/4HANA Migration Checklist",
    excerpt: "Step-by-step guide to planning and executing a successful S/4HANA conversion project.",
    readTime: "15 min read",
    category: "SAP"
  },
  {
    date: "Nov 28, 2024",
    title: "Zero-Trust Security for Cloud Environments",
    excerpt: "Implementing zero-trust architecture across multi-cloud enterprise environments.",
    readTime: "9 min read",
    category: "Security"
  },
  {
    date: "Nov 20, 2024",
    title: "Terraform vs. Pulumi: IaC Comparison for 2024",
    excerpt: "Detailed comparison of Infrastructure as Code tools for modern enterprise deployments.",
    readTime: "11 min read",
    category: "DevOps"
  }
];

const upcomingEvents = [
  {
    date: "Jan 15, 2025",
    type: "Webinar",
    title: "Oracle Cloud Infrastructure: Migration Strategies for 2025",
    time: "11:00 AM EST"
  },
  {
    date: "Jan 22, 2025",
    type: "Workshop",
    title: "Hands-on Kubernetes Security Workshop",
    time: "2:00 PM EST"
  },
  {
    date: "Feb 5, 2025",
    type: "Conference",
    title: "Enterprise DevOps Summit 2025",
    time: "All Day"
  },
  {
    date: "Feb 18, 2025",
    type: "Webinar",
    title: "SAP S/4HANA: Lessons from 100+ Migrations",
    time: "10:00 AM EST"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
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

const Resources = () => {
  const resourcesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Paramanu Consulting Resources',
    description: 'Whitepapers, case studies, webinars, and expert insights for enterprise IT.',
    url: 'https://www.paramanuconsulting.com/resources',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: featuredResources.map((resource, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: resource.title,
          description: resource.description,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Resources - Whitepapers, Case Studies & Expert Insights"
        description="Free enterprise IT resources: whitepapers on cloud migration, Oracle optimization guides, DevOps webinars, case studies, and industry best practices."
        keywords="IT whitepapers, cloud migration guide, Oracle EBS optimization, DevOps webinars, enterprise case studies, IT best practices, technology resources, digital transformation guide"
        url="https://www.paramanuconsulting.com/resources"
        structuredData={resourcesSchema}
      />
      <Header />

      {/* Breadcrumbs */}
      <div className="container pt-28 pb-4">
        <Breadcrumbs />
      </div>
      
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
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights & <span className="text-gradient-primary">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whitepapers, case studies, webinars, and expert insights to help you navigate 
              enterprise technology challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">Featured Resources</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredResources.map((resource) => (
              <motion.div 
                key={resource.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <resource.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{resource.type}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {resource.readTime}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-secondary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="mt-4 gap-1 p-0">
                  Download <Download className="w-3.5 h-3.5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div 
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">Case Studies</h2>
            <Button variant="outline" size="sm" className="gap-1">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {caseStudies.map((study) => (
              <motion.div 
                key={study.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                  {study.industry}
                </p>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong className="text-foreground">Result:</strong> {study.result}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-secondary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">Latest Insights</h2>
            <Button variant="outline" size="sm" className="gap-1">
              View Blog <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.map((post) => (
              <motion.div 
                key={post.title}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded">{post.category}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div 
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">Upcoming Events</h2>
            <Button variant="outline" size="sm" className="gap-1">
              View Calendar <Calendar className="w-3.5 h-3.5" />
            </Button>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {upcomingEvents.map((event) => (
              <motion.div 
                key={event.title}
                variants={itemVariants}
                className="flex gap-6 glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 text-center">
                  <p className="text-2xl font-bold text-primary">{event.date.split(" ")[1]}</p>
                  <p className="text-xs text-muted-foreground uppercase">{event.date.split(" ")[0]}</p>
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded mb-2">
                    {event.type}
                  </span>
                  <h3 className="font-bold mb-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="max-w-2xl mx-auto text-center glass-card rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Mic className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay <span className="text-gradient-primary">Informed</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest insights, case studies, and industry trends 
              delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
