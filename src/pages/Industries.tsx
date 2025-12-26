import { motion } from "framer-motion";
import { 
  Building2, Heart, Landmark, Factory, ShoppingCart, Plane, 
  GraduationCap, Zap, Truck, ArrowRight, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const industries = [
  {
    id: "financial-services",
    icon: Landmark,
    title: "Financial Services",
    description: "Banking, insurance, and capital markets solutions with regulatory compliance, real-time processing, and security at the core.",
    challenges: [
      "Regulatory compliance (SOX, PCI-DSS, GDPR)",
      "Legacy core banking modernization",
      "Real-time fraud detection",
      "24/7 system availability requirements"
    ],
    solutions: [
      "Oracle EBS and Fusion Financials implementation",
      "Core banking system migrations",
      "SOC-compliant managed services",
      "High-availability disaster recovery"
    ],
    stats: { clients: "50+", uptime: "99.99%", compliance: "100%" },
    clients: ["Regional Banks", "Insurance Providers", "Investment Firms", "Credit Unions"]
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant solutions for hospitals, pharmaceutical companies, and medical device manufacturers with a focus on data security.",
    challenges: [
      "HIPAA and FDA compliance",
      "EHR/EMR system integrations",
      "Clinical data management",
      "Medical device connectivity"
    ],
    solutions: [
      "HIPAA-compliant cloud hosting",
      "Oracle Health Sciences implementations",
      "Healthcare analytics and BI",
      "Secure data exchange platforms"
    ],
    stats: { clients: "30+", hipaaAudits: "Zero findings", dataProtected: "10M+ records" },
    clients: ["Hospital Systems", "Pharma Companies", "Medical Device Manufacturers", "Clinical Labs"]
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description: "Smart manufacturing and Industry 4.0 solutions for discrete and process manufacturers with ERP optimization and supply chain visibility.",
    challenges: [
      "Supply chain disruptions",
      "Legacy MES/ERP systems",
      "Shop floor connectivity",
      "Global operations coordination"
    ],
    solutions: [
      "Oracle EBS Manufacturing optimization",
      "SAP S/4HANA migrations",
      "IoT and edge computing",
      "Supply chain analytics"
    ],
    stats: { efficiency: "40% improvement", downtime: "60% reduction", clients: "45+" },
    clients: ["Automotive Suppliers", "Industrial Equipment", "Consumer Goods", "Aerospace"]
  },
  {
    id: "retail",
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    description: "Omnichannel retail solutions with real-time inventory, unified commerce platforms, and customer analytics.",
    challenges: [
      "Omnichannel integration",
      "Real-time inventory visibility",
      "Peak season scalability",
      "Customer experience optimization"
    ],
    solutions: [
      "Commerce platform implementations",
      "Inventory management systems",
      "Customer data platforms",
      "Cloud-native e-commerce"
    ],
    stats: { peakTraffic: "10x capacity", inventory: "99.5% accuracy", clients: "35+" },
    clients: ["National Retailers", "E-commerce Platforms", "Grocery Chains", "Specialty Stores"]
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Transportation & Logistics",
    description: "Supply chain visibility, fleet management, and logistics optimization for carriers, 3PLs, and shippers.",
    challenges: [
      "End-to-end supply chain visibility",
      "Fleet optimization",
      "Multi-carrier integration",
      "Last-mile delivery challenges"
    ],
    solutions: [
      "Oracle Transportation Management",
      "Warehouse management systems",
      "Real-time tracking platforms",
      "Route optimization"
    ],
    stats: { deliveryImprovement: "25%", costReduction: "30%", clients: "40+" },
    clients: ["3PL Providers", "Freight Carriers", "Parcel Shippers", "Cold Chain Logistics"]
  },
  {
    id: "government",
    icon: Building2,
    title: "Government & Public Sector",
    description: "FedRAMP and StateRAMP compliant solutions for federal, state, and local government agencies with security-first approach.",
    challenges: [
      "FedRAMP/StateRAMP compliance",
      "Legacy system modernization",
      "Citizen service delivery",
      "Budget constraints"
    ],
    solutions: [
      "FedRAMP-authorized cloud services",
      "Legacy application modernization",
      "Citizen-facing portals",
      "Data analytics platforms"
    ],
    stats: { agencies: "25+", compliance: "FedRAMP Ready", savings: "35% avg" },
    clients: ["Federal Agencies", "State Governments", "Municipal Authorities", "Defense Contractors"]
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energy & Utilities",
    description: "SCADA integration, grid modernization, and operational technology solutions for power, oil & gas, and renewables.",
    challenges: [
      "IT/OT convergence",
      "Grid modernization",
      "Regulatory compliance",
      "Asset lifecycle management"
    ],
    solutions: [
      "SCADA and IoT integration",
      "Asset performance management",
      "Predictive maintenance",
      "Oracle Utilities implementations"
    ],
    stats: { uptime: "99.99%", assetLife: "+20% extended", clients: "20+" },
    clients: ["Power Utilities", "Oil & Gas Companies", "Renewable Energy", "Pipeline Operators"]
  },
  {
    id: "travel",
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Reservation systems, loyalty platforms, and guest experience solutions for airlines, hotels, and travel companies.",
    challenges: [
      "Legacy reservation systems",
      "Guest experience personalization",
      "Seasonal demand fluctuations",
      "Multi-property management"
    ],
    solutions: [
      "Property management systems",
      "Loyalty program platforms",
      "Revenue management optimization",
      "Cloud migration services"
    ],
    stats: { bookingSpeed: "3x faster", guestSatisfaction: "+25%", clients: "15+" },
    clients: ["Hotel Chains", "Airlines", "Cruise Lines", "Travel Agencies"]
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Higher Education",
    description: "Student information systems, campus IT, and digital learning platforms for universities and colleges.",
    challenges: [
      "Student system modernization",
      "Campus network security",
      "Research computing needs",
      "Budget optimization"
    ],
    solutions: [
      "Oracle PeopleSoft implementations",
      "Learning management systems",
      "Campus security solutions",
      "Research cloud computing"
    ],
    stats: { institutions: "20+", students: "500K+ served", uptime: "99.9%" },
    clients: ["Research Universities", "Community Colleges", "Online Learning Platforms", "K-12 Districts"]
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

const Industries = () => {
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
              Industry Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Deep Expertise Across <span className="text-gradient-primary">Industries</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We understand your industry's unique challenges. Our specialized teams bring sector-specific 
              knowledge to every engagement, ensuring solutions that truly fit your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industries.map((industry) => (
              <motion.div 
                key={industry.id}
                id={industry.id}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold">{industry.title}</h2>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Key Stats */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.entries(industry.stats).slice(0, 3).map(([key, value]) => (
                    <span 
                      key={key}
                      className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                    >
                      {value}
                    </span>
                  ))}
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Challenges We Solve</p>
                  <ul className="space-y-1.5">
                    {industry.challenges.slice(0, 3).map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clients */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Clients include:</span> {industry.clients.join(", ")}
                  </p>
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
              Don't See Your <span className="text-gradient-primary">Industry?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our expertise extends beyond these sectors. Contact us to discuss how we can 
              address your specific industry challenges.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Contact Our Team <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
