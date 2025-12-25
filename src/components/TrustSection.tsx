import { motion } from "framer-motion";

const logos = [
  { name: "Oracle Partner", initials: "ORACLE" },
  { name: "AWS Partner", initials: "AWS" },
  { name: "Azure Partner", initials: "AZURE" },
  { name: "Google Cloud", initials: "GCP" },
  { name: "Red Hat", initials: "REDHAT" },
  { name: "VMware", initials: "VMWARE" },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-20 border-y border-border/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
            Trusted Technology Partners
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              className="text-muted-foreground/50 hover:text-primary transition-colors duration-300 font-bold text-xl md:text-2xl tracking-wider"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {logo.initials}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
