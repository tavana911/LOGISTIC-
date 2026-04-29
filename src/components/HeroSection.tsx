import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import heroImg from "../assets/hero-logistics.jpg";

const HeroSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!trackingNumber.trim()) {
      alert("Please enter your shipment number.");
      return;
    }
    alert(`Tracking shipment number: ${trackingNumber}`);
  };

  return (
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
          </div>

          <form onSubmit={handleSubmit} className="mt-6 sm:max-w-xl">
            <label htmlFor="tracking-number" className="sr-only">
              Shipment number
            </label>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <Input
                id="tracking-number"
                value={trackingNumber}
                onChange={(event) => setTrackingNumber(event.target.value)}
                placeholder="Enter shipment number"
                aria-label="Shipment number"
              />
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Track Shipment
              </Button>
            </div>
            <p className="mt-3 text-sm text-primary-foreground/80">
              Enter your shipment number above and click Track Shipment.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

