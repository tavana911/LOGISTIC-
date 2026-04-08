import { Network, Truck, Globe, Warehouse, Ship, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const services = [
  {
    icon: Network, title: "Supply Chain Solutions",
    desc: "Our end-to-end supply chain management services are designed to optimize every step of your logistics process.",
    features: ["Demand planning & forecasting", "Vendor management", "Procurement optimization", "Inventory management", "Supply chain analytics"]
  },
  {
    icon: Truck, title: "Transportation Management",
    desc: "Comprehensive transportation solutions including freight brokerage, carrier management, and route optimization.",
    features: ["Full Truckload (FTL)", "Less Than Truckload (LTL)", "Intermodal transportation", "Route optimization", "Carrier management"]
  },
  {
    icon: Globe, title: "Global Logistics",
    desc: "Navigate international shipping with our expertise in customs clearance, documentation, and compliance.",
    features: ["International shipping", "Customs brokerage", "Trade compliance", "Documentation management", "Cross-border solutions"]
  },
  {
    icon: Warehouse, title: "Warehousing & Fulfillment",
    desc: "State-of-the-art warehousing facilities with advanced inventory management and order fulfillment capabilities.",
    features: ["Warehouse management", "Order fulfillment", "Inventory optimization", "Pick and pack services", "Returns management"]
  },
  {
    icon: Ship, title: "Ocean Freight",
    desc: "Reliable ocean freight services for your international shipping needs, with competitive rates and flexible solutions.",
    features: ["FCL & LCL services", "Port-to-port & door-to-door", "Container tracking", "Consolidation services", "Project cargo"]
  },
  {
    icon: PackageCheck, title: "Last Mile Delivery",
    desc: "Efficient last-mile delivery solutions ensuring your packages reach customers quickly and reliably.",
    features: ["Same-day delivery", "Next-day delivery", "Proof of delivery", "Real-time tracking", "White-glove services"]
  },
];

const Services = () => (
  <div>
    <section className="relative bg-primary py-24 mt-16 md:mt-20">
      <div className="container-main">
        <p className="text-primary-foreground/60 text-sm mb-2">Home &gt; Services</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">Our Services</h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main max-w-4xl">
        <Accordion type="multiple" className="space-y-4">
          {services.map((s, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-heading font-bold text-lg text-left">{s.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <p className="text-muted-foreground mb-4">{s.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact"><Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Request Quote</Button></Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </div>
);

export default Services;

