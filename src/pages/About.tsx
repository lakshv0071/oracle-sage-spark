import { motion } from "framer-motion";
import { 
  Award, Users, Globe, Target, Heart, Zap,
  CheckCircle2, ArrowRight, Building2, TrendingUp,
  Laptop, MapPin, Clock, Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const stats = [
  { value: "15+", label: "Expert Team Members" },
  { value: "50+", label: "Projects Delivered" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "24/7", label: "Global Support" }
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new technologies and methodologies to deliver cutting-edge solutions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, fostering open communication and shared goals."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We do what's right, even when no one is watching. Transparency guides every interaction."
  }
];

const expertise = [
  { name: "PostgreSQL & Oracle", category: "Database" },
  { name: "AWS, Azure, GCP", category: "Cloud" },
  { name: "DevOps & SRE", category: "Operations" },
  { name: "AI & Automation", category: "Innovation" },
  { name: "SAP & ERP", category: "Enterprise" },
  { name: "Security & Compliance", category: "Security" },
  { name: "24/7 Production Support", category: "Support" },
  { name: "Enterprise Architecture", category: "Strategy" }
];


const timeline = [
  { year: "Dec 2025", event: "Founded with focus on AI-enabled managed services and enterprise consulting" },
  { year: "Q1 2026", event: "Launched Oracle and PostgreSQL managed services" },
  { year: "Q2 2026", event: "Expanded DevOps and SRE practice offerings" },
  { year: "2026", event: "Growing team of enterprise technology experts" }
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

const About = () => {
  const aboutSchema = {
    '@context': 'https://schema.org',
      '@type': 'AboutPage',
    name: 'About Paramanu Consulting',
    url: 'https://www.paramanuconsulting.com/about',
    description: 'Learn about Paramanu Consulting - your trusted enterprise technology partner with expertise in Oracle, cloud, DevOps, and AI-enabled operations.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Paramanu Consulting',
      url: 'https://www.paramanuconsulting.com',
      foundingDate: '2025-12',
      numberOfEmployees: '15+',
      knowsAbout: expertise.map(e => e.name),
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us"
        description="Paramanu Consulting - Founded by enterprise technology veterans with 20+ years experience. 100% remote-first company delivering Oracle, Cloud, DevOps, and AI-enabled managed services."
        keywords="about Paramanu Consulting, enterprise IT consulting, remote IT company, Oracle experts, DevOps team, technology partner"
        url="https://www.paramanuconsulting.com/about"
        structuredData={aboutSchema}
      />
      <Header />
      
      {/* Breadcrumbs */}
      <div className="container pt-28 pb-4">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Trusted <span className="text-gradient-primary">Technology Partner</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded by industry veterans, we bring decades of combined expertise to help enterprises transform their technology operations. 
              From Oracle and SAP to cloud and DevOps, we deliver excellence at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border/50">
        <div className="container">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Paramanu Consulting was founded in December 2025 by a team of enterprise technology veterans who saw a gap in the market: 
                  enterprises needed a partner who could deliver both deep technical expertise and genuine 
                  business understanding with AI-first approach.
                </p>
                <p>
                  Our founding team brings decades of combined experience in Oracle, PostgreSQL, cloud infrastructure, 
                  and DevOps. We're building a company focused on delivering excellence from day one.
                </p>
                <p>
                  Our approach? We hire the best talent, invest in continuous learning, and measure our 
                  success by project outcomes. When you succeed, we succeed.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Our Journey</h3>
              <div className="space-y-4">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-sm font-bold text-primary">{item.year}</div>
                    <div className="text-sm text-muted-foreground">{item.event}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-primary">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every interaction we have.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div 
                key={value.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Policies - Remote First */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Company <span className="text-gradient-primary">Policies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We believe in creating the best environment for our team to thrive.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                <Laptop className="w-10 h-10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">100% Remote-First Company</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                At Paramanu Consulting, we exclusively offer remote positions. We believe that talented professionals 
                can deliver exceptional results from anywhere in the world. Our remote-first culture enables us to 
                attract the best talent globally while providing our team members with the flexibility they deserve.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">Work From Anywhere</h4>
                  <p className="text-sm text-muted-foreground">No office commute, work from your preferred location</p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <Clock className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">Flexible Hours</h4>
                  <p className="text-sm text-muted-foreground">We focus on results, not hours spent online</p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <Briefcase className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">Global Opportunities</h4>
                  <p className="text-sm text-muted-foreground">Access to opportunities regardless of your location</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Deep technical knowledge across the enterprise technology stack.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {expertise.map((item) => (
              <motion.div 
                key={item.name}
                variants={itemVariants}
                className="glass-card rounded-xl p-4 text-center"
              >
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work <span className="text-gradient-primary">With Us?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let our team of experts help you with your mission-critical technology needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
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

export default About;
