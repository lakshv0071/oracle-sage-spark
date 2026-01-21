import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "Leadership Team",
    role: "Executive Leadership",
    bio: "Our leadership team brings together decades of experience in enterprise IT, Oracle technologies, cloud transformation, and managed services. We are committed to delivering excellence and driving innovation for our clients.",
    expertise: ["Strategic Planning", "Enterprise Architecture", "Client Success"],
  },
  {
    name: "Technical Advisory Board",
    role: "Technology Excellence",
    bio: "Our technical advisory board comprises industry veterans and thought leaders who guide our technology strategy and ensure we stay at the forefront of enterprise IT innovation.",
    expertise: ["Oracle Technologies", "Cloud Platforms", "AI/ML"],
  },
  {
    name: "Operations Team",
    role: "Delivery Excellence",
    bio: "Our operations leaders ensure seamless delivery of services across our global delivery centers, maintaining the highest standards of quality and client satisfaction.",
    expertise: ["24/7 Operations", "Global Delivery", "Quality Assurance"],
  },
];

const values = [
  {
    title: "Client-First Approach",
    description: "Every decision we make is guided by what's best for our clients' success.",
  },
  {
    title: "Technical Excellence",
    description: "We maintain the highest standards of technical expertise and continuous learning.",
  },
  {
    title: "Integrity & Trust",
    description: "We build lasting partnerships through transparency and ethical practices.",
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and methodologies to deliver cutting-edge solutions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Leadership = () => {
  const leadershipSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Leadership - Paramanu Consulting",
    description: "Meet the leadership team driving enterprise IT excellence at Paramanu Consulting.",
    url: "https://paramanu.com/leadership",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Leadership"
        description="Meet the leadership team at Paramanu Consulting driving enterprise IT excellence and innovation."
        url="https://paramanu.com/leadership"
        structuredData={leadershipSchema}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">Leadership</span> Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Experienced professionals driving enterprise IT excellence and innovation for our clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-primary">
                    {leader.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{leader.role}</p>
                <p className="text-muted-foreground text-sm mb-6">{leader.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/30">
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our leadership and shape our culture.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-background border border-border/50 text-center"
              >
                <h3 className="font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to <span className="text-gradient-primary">Join Our Team?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented professionals to join our growing team.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;
