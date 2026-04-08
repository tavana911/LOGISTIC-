import { Link } from "react-router-dom";
import { Network, Truck, Globe, Warehouse, Factory, FlaskConical, HeartPulse, ShoppingCart, Car, Store, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import TestimonialSlider from "../components/TestimonialSlider";
import NewsletterSection from "../components/NewsletterSection";
import aboutTeam from "../assets/about-team.jpg";

const services = [
  { icon: Network, title: "Supply Chain Solutions", desc: "End-to-end supply chain management tailored to your needs" },
  { icon: Truck, title: "Transportation Management", desc: "Freight brokerage, carrier management, and route optimization" },
  { icon: Globe, title: "Global Logistics", desc: "International shipping, customs clearance, and documentation" },
  { icon: Warehouse, title: "Warehousing & Fulfillment", desc: "Storage, inventory management, and order fulfillment" },
];

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: FlaskConical, name: "Chemicals" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Car, name: "Automotive" },
  { icon: Store, name: "Retail" },
];

const Index = () => (
  <div>
    <HeroSection />

    {/* Services */}
    <section className="section-padding">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-lg border p-6 text-center hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-muted">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={aboutTeam} alt="Logistics team" className="rounded-lg shadow-lg" width={1920} height={1080} loading="lazy" />
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">A 21st Century Logistics Company</h2>
            <ul className="space-y-4 mb-8">
              {["99% On-time delivery rate","24/7 Customer support","Real-time shipment tracking","Competitive pricing"].map(t=>(
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/about"><Button variant="outline">Learn More About Us</Button></Link>
          </div>
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Industry Solutions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {industries.map((ind) => (
            <div key={ind.name} className="bg-card rounded-lg border p-6 text-center hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 group">
              <ind.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:text-accent transition-colors" />
              <p className="font-heading font-semibold text-sm">{ind.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <TestimonialSlider />
    <StatsSection />
    <NewsletterSection />
  </div>
);

export default Index;

