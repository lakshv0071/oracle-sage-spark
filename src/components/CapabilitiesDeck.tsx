import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Download, FileText, Mail, Building2, User, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface CapabilitiesDeckProps {
  isOpen: boolean;
  onClose: () => void;
}

const deckContents = [
  "Company Overview & History",
  "Service Portfolio Details",
  "Technical Expertise",
  "Case Studies & Success Metrics",
  "Engagement Models & Pricing",
  "Security & Compliance",
  "Global Delivery Centers",
  "Client Testimonials",
];

const CapabilitiesDeck = ({ isOpen, onClose }: CapabilitiesDeckProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDownload = () => {
    // Simulate download
    toast.success("Capabilities deck sent to your email!");
    setIsSubmitted(true);
    
    // Create a simple PDF download simulation
    const content = `
ENTERPRISE TECHNOLOGY ADVISORS
Capabilities Deck 2024

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ABOUT US
20+ Years of Enterprise Excellence
Industry-Leading Expertise
24/7 Global Support

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OUR SERVICES
• PostgreSQL Services - Enterprise DB Management
• Oracle Managed Services - $50-60/hr
• DevOps Services - Custom pricing
• SRE Services - 24/7 support
• Automation & AI-Enabled Services
• Production Support - $30/hr
• SAP Services
• Website Development
• HR & Staffing Services
• Business Consulting

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY CHOOSE US
✓ 20+ Years Enterprise Experience
✓ 24/7 Global Support Teams
✓ Dedicated Expert Teams
✓ Flexible Engagement Models
✓ Enterprise Security Standards
✓ Proven Track Record

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ENGAGEMENT MODELS
• Hourly: $50-60/hr
• Monthly Managed: Custom
• Fixed Price: Project-based
• Outcome Based: ROI-focused

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT US
Email: info@paramanuconsulting.com
Phone: +91 7989359581
Web: www.paramanuconsulting.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Enterprise_Tech_Advisors_Capabilities_2024.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", company: "" });
    onClose();
  };

  const canSubmit = formData.name && formData.email && formData.company;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            Download Capabilities Deck
          </DialogTitle>
          <DialogDescription>
            Get our comprehensive overview of services, case studies, and engagement models
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* What's included */}
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                What's Included
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {deckContents.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deck-name" className="flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name *
                </Label>
                <Input
                  id="deck-name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deck-email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Business Email *
                </Label>
                <Input
                  id="deck-email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deck-company" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" /> Company *
                </Label>
                <Input
                  id="deck-company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                />
              </div>
            </div>

            <Button
              onClick={handleDownload}
              disabled={!canSubmit}
              variant="hero"
              className="w-full"
              size="lg"
            >
              <Download className="w-5 h-5" />
              Download Now
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By downloading, you agree to receive occasional updates about our services.
              You can unsubscribe at any time.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-4"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Download Started!</h3>
            <p className="text-muted-foreground">
              The capabilities deck has been downloaded. We've also sent a copy to{" "}
              <span className="text-foreground font-medium">{formData.email}</span>
            </p>
            <Button onClick={handleClose} variant="outline">
              Close
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CapabilitiesDeck;
