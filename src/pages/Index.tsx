import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Clients from "@/components/landing/Clients";
import Services from "@/components/landing/Services";
import RecentWork from "@/components/landing/RecentWork";
import WhyUs from "@/components/landing/WhyUs";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <RecentWork />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
