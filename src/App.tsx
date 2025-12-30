import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import OracleManagedServices from "./pages/services/OracleManagedServices";
import CloudTransformation from "./pages/services/CloudTransformation";
import DevOpsSRE from "./pages/services/DevOpsSRE";
import AIEnabledOperations from "./pages/services/AIEnabledOperations";
import ProductionSupport from "./pages/services/ProductionSupport";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Resources from "./pages/Resources";
import ClientPortal from "./pages/ClientPortal";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/oracle-managed-services" element={<OracleManagedServices />} />
          <Route path="/services/cloud-transformation" element={<CloudTransformation />} />
          <Route path="/services/devops-sre" element={<DevOpsSRE />} />
          <Route path="/services/ai-enabled-operations" element={<AIEnabledOperations />} />
          <Route path="/services/production-support" element={<ProductionSupport />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/client-portal" element={<ClientPortal />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
