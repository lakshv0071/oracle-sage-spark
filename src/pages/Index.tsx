import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import CoursesSection from "@/components/CoursesSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Paramanu Consulting - Enterprise IT Managed Services',
    description: 'Tier-1 Enterprise IT Consulting with 20+ years of Oracle, Cloud, DevOps, SRE, and AI-enabled Managed Services for Fortune 500 organizations.',
    url: 'https://paramanu.com',
    mainEntity: {
      '@type': 'Organization',
      name: 'Paramanu Consulting',
      url: 'https://paramanu.com',
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        url="https://paramanu.com"
        structuredData={homeStructuredData}
      />
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <CoursesSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
