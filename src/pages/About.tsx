import { motion } from "framer-motion";
import { 
  Award, Users, Globe, Target, Heart, Zap,
  CheckCircle2, ArrowRight, Building2, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "1000+", label: "Projects Delivered" },
  { value: "99.9%", label: "Client Satisfaction" }
];

const values = [
  {
    icon: Target,
    title: "Client Success",
    description: "Your success is our success. We measure ourselves by the outcomes we deliver for your business."
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

const certifications = [
  { name: "Oracle Platinum Partner", category: "Enterprise Applications" },
  { name: "SAP Gold Partner", category: "Enterprise Applications" },
  { name: "AWS Advanced Consulting Partner", category: "Cloud" },
  { name: "Microsoft Azure Expert MSP", category: "Cloud" },
  { name: "Google Cloud Partner", category: "Cloud" },
  { name: "ISO 27001 Certified", category: "Security" },
  { name: "SOC 2 Type II Compliant", category: "Security" },
  { name: "CMMI Level 5", category: "Quality" }
];

const leadership = [
  {
    name: "Michael Chen",
    role: "Chief Executive Officer",
    bio: "25+ years leading enterprise technology transformations. Former VP at Oracle and Accenture."
  },
  {
    name: "Sarah Williams",
    role: "Chief Technology Officer",
    bio: "Former AWS Principal Architect. Expert in cloud-native architectures and DevOps transformation."
  },
  {
    name: "Rajesh Patel",
    role: "Chief Operations Officer",
    bio: "20+ years in IT operations. Built and scaled global delivery centers across 3 continents."
  },
  {
    name: "Jennifer Martinez",
    role: "Chief Revenue Officer",
    bio: "Former Gartner analyst. Deep expertise in enterprise software and managed services markets."
  },
  {
    name: "David Kim",
    role: "VP, Oracle Practice",
    bio: "Oracle ACE Director. 15+ years implementing Oracle EBS, Cloud, and Database solutions."
  },
  {
    name: "Lisa Thompson",
    role: "VP, Cloud & DevOps",
    bio: "Kubernetes and cloud-native expert. Led 100+ cloud migration projects across Fortune 500."
  }
];

const locations = [
  { city: "San Francisco", country: "USA", type: "Headquarters" },
  { city: "New York", country: "USA", type: "Regional Office" },
  { city: "Dallas", country: "USA", type: "Regional Office" },
  { city: "Bangalore", country: "India", type: "Delivery Center" },
  { city: "Hyderabad", country: "India", type: "Delivery Center" },
  { city: "Pune", country: "India", type: "Delivery Center" }
];

const timeline = [
  { year: "2009", event: "Founded in San Francisco with focus on Oracle consulting" },
  { year: "2012", event: "Achieved Oracle Platinum Partner status" },
  { year: "2014", event: "Opened first delivery center in Bangalore, India" },
  { year: "2016", event: "Expanded to SAP and cloud services" },
  { year: "2018", event: "Launched DevOps and SRE practices" },
  { year: "2020", event: "Achieved AWS Advanced Partner status" },
  { year: "2022", event: "Expanded to 500+ enterprise clients" },
  { year: "2024", event: "Launched AI-enabled managed services" }
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Trusted <span className="text-gradient-primary">Technology Partner</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over 15 years, we've helped enterprises transform their technology operations. 
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
                  ApexTech was founded in 2009 by a team of Oracle veterans who saw a gap in the market: 
                  enterprises needed a partner who could deliver both deep technical expertise and genuine 
                  business understanding.
                </p>
                <p>
                  Starting with Oracle E-Business Suite consulting, we quickly expanded to cover the full 
                  enterprise technology stack. Today, we serve over 500 clients across 30+ countries, 
                  from mid-market companies to Fortune 100 enterprises.
                </p>
                <p>
                  Our secret? We hire the best talent, invest in continuous learning, and measure our 
                  success by client outcomes—not billable hours. When you succeed, we succeed.
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

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leadership <span className="text-gradient-primary">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced executives who have led technology transformations at the world's largest enterprises.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leadership.map((leader) => (
              <motion.div 
                key={leader.name}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{leader.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{leader.role}</p>
                <p className="text-sm text-muted-foreground">{leader.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & <span className="text-gradient-primary">Partnerships</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognized by leading technology vendors for our expertise and delivery excellence.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div 
                key={cert.name}
                variants={itemVariants}
                className="glass-card rounded-xl p-4 text-center"
              >
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium text-sm">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global <span className="text-gradient-primary">Presence</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Offices and delivery centers strategically located to serve clients worldwide.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {locations.map((location) => (
              <motion.div 
                key={location.city}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50"
              >
                <Globe className="w-10 h-10 text-primary" />
                <div>
                  <p className="font-bold">{location.city}</p>
                  <p className="text-sm text-muted-foreground">{location.country} • {location.type}</p>
                </div>
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
              Ready to Partner <span className="text-gradient-primary">With Us?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join 500+ enterprises who trust ApexTech for their mission-critical technology needs.
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
