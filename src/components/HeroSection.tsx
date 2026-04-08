import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import heroImg from "../assets/hero-logistics.jpg";

const HeroSection = () => (
  <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
    <img src={heroImg} alt="Logistics operations" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="hero-overlay absolute inset-0" />
    <div className="container-main relative z-10 py-24 md:py-32">
      <div className="max-w-2xl animate-fade-up">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
          Global Logistics Solutions That Move Your Business Forward
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
          Fast, reliable shipping and supply chain management worldwide
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8">
              Get a Quote
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8">
            Track Shipment
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

