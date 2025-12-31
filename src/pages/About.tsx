import { motion } from "framer-motion";
import { 
  Award, Users, Globe, Target, Heart, Zap,
  CheckCircle2, ArrowRight, Building2, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "1000+", label: "Projects Delivered" },
  { value: "50+", label: "Expert Team Members" },
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

const leadership = [
  {
    name: "Michael Chen",
    role: "Chief Executive Officer",
    bio: "25+ years leading enterprise technology transformations with deep expertise in Oracle and cloud solutions."
  },
  {
    name: "Sarah Williams",
    role: "Chief Technology Officer",
    bio: "Expert in cloud-native architectures and DevOps transformation with 20+ years in enterprise IT."
  },
  {
    name: "Rajesh Patel",
    role: "Chief Operations Officer",
    bio: "20+ years in IT operations. Built and scaled global delivery centers across 3 continents."
  },
  {
    name: "Jennifer Martinez",
    role: "Chief Revenue Officer",
    bio: "Deep expertise in enterprise software and managed services markets with 15+ years experience."
  },
  {
    name: "David Kim",
    role: "VP, Oracle Practice",
    bio: "15+ years implementing Oracle EBS, Cloud, and Database solutions for enterprise organizations."
  },
  {
    name: "Lisa Thompson",
    role: "VP, Cloud & DevOps",
    bio: "Kubernetes and cloud-native expert. Led 100+ cloud migration projects across industries."
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
  { year: "2004", event: "Founded with focus on Oracle consulting and database services" },
  { year: "2008", event: "Expanded to include SAP and ERP services" },
  { year: "2012", event: "Opened first delivery center in India" },
  { year: "2016", event: "Launched cloud transformation and migration services" },
  { year: "2018", event: "Added DevOps and SRE practices" },
  { year: "2020", event: "Expanded PostgreSQL managed services" },
  { year: "2022", event: "Grew team to 50+ enterprise experts" },
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
                  ApexTech was founded in 2004 by a team of database experts who saw a gap in the market: 
                  enterprises needed a partner who could deliver both deep technical expertise and genuine 
                  business understanding.
                </p>
                <p>
                  Starting with Oracle and PostgreSQL consulting, we quickly expanded to cover the full 
                  enterprise technology stack. Today, our team of 50+ experts serves organizations across 
                  multiple industries and geographies.
                </p>
                <p>
                  Our secret? We hire the best talent, invest in continuous learning, and measure our 
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

      {/* Expertise */}
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
