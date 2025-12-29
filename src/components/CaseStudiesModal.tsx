import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { TrendingUp, Clock, DollarSign, Users, ArrowRight, Building2, Server, Cloud, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const caseStudies = [
  {
    id: 1,
    client: "Fortune 100 Financial Institution",
    industry: "Banking & Finance",
    service: "Oracle Managed Services",
    icon: Building2,
    challenge: "Legacy Oracle infrastructure causing frequent downtime and compliance risks",
    solution: "Complete Oracle cloud migration with 24/7 managed services",
    results: [
      { label: "Uptime Improvement", value: "99.99%", icon: Clock },
      { label: "Cost Reduction", value: "45%", icon: DollarSign },
      { label: "Performance Boost", value: "3x", icon: TrendingUp },
    ],
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    id: 2,
    client: "Global Healthcare Provider",
    industry: "Healthcare",
    service: "DevOps & SRE Services",
    icon: Server,
    challenge: "Manual deployments taking 2 weeks with high failure rates",
    solution: "Implemented CI/CD pipelines with automated testing and monitoring",
    results: [
      { label: "Deployment Time", value: "-95%", icon: Clock },
      { label: "Release Frequency", value: "10x", icon: TrendingUp },
      { label: "Incident Reduction", value: "80%", icon: Users },
    ],
    color: "from-green-500/20 to-green-600/20",
  },
  {
    id: 3,
    client: "Multinational Retail Corporation",
    industry: "Retail & E-commerce",
    service: "Cloud Migration",
    icon: Cloud,
    challenge: "On-premise infrastructure unable to handle seasonal traffic spikes",
    solution: "Hybrid cloud architecture with auto-scaling capabilities",
    results: [
      { label: "Scalability", value: "∞", icon: TrendingUp },
      { label: "Black Friday Uptime", value: "100%", icon: Clock },
      { label: "Infrastructure Cost", value: "-35%", icon: DollarSign },
    ],
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    id: 4,
    client: "Leading Manufacturing Company",
    industry: "Manufacturing",
    service: "SAP & Automation Services",
    icon: Cpu,
    challenge: "Siloed SAP systems causing data inconsistencies and inefficiencies",
    solution: "SAP S/4HANA migration with AI-powered process automation",
    results: [
      { label: "Process Efficiency", value: "+65%", icon: TrendingUp },
      { label: "Data Accuracy", value: "99.9%", icon: Users },
      { label: "ROI Achievement", value: "18mo", icon: DollarSign },
    ],
    color: "from-orange-500/20 to-orange-600/20",
  },
];

const CaseStudiesModal = ({ isOpen, onClose }: CaseStudiesModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Client Success Stories
          </DialogTitle>
          <DialogDescription>
            See how we've helped Fortune 500 companies transform their IT infrastructure
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 mt-4">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-xl border border-border bg-gradient-to-br ${study.color} p-6 overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left side - Info */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <study.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{study.client}</h3>
                      <p className="text-sm text-muted-foreground">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    {study.service}
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-foreground">Challenge:</span> <span className="text-muted-foreground">{study.challenge}</span></p>
                    <p><span className="font-semibold text-foreground">Solution:</span> <span className="text-muted-foreground">{study.solution}</span></p>
                  </div>
                </div>

                {/* Right side - Results */}
                <div className="md:w-64 flex flex-row md:flex-col gap-3">
                  {study.results.map((result, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-background/50 backdrop-blur-sm rounded-lg p-3 text-center"
                    >
                      <result.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                      <div className="text-xl font-bold text-primary">{result.value}</div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-border mt-4">
          <p className="text-sm text-muted-foreground">
            Want to see more detailed case studies?
          </p>
          <Link to="/resources" onClick={onClose}>
            <Button variant="hero">
              View All Resources
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudiesModal;
