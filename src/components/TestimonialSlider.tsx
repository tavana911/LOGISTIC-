import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { text: "PAUPEMAGE LOGISTICS transformed our supply chain. Delivery times cut by 40%!", author: "John Smith", role: "Operations Director at TechCorp" },
  { text: "Reliable, professional, and always on time. Highly recommended!", author: "Sarah Johnson", role: "Logistics Manager at RetailPlus" },
  { text: "Their global reach and local expertise made all the difference for our expansion.", author: "Michael Chen", role: "VP Supply Chain at GlobalMfg" },
];

const TestimonialSlider = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="section-padding bg-muted">
      <div className="container-main max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-12">What Our Clients Say</h2>
        <div className="relative">
          <Quote className="h-10 w-10 text-primary/20 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground italic mb-6">"{testimonials[idx].text}"</p>
          <p className="font-heading font-semibold">{testimonials[idx].author}</p>
          <p className="text-sm text-muted-foreground">{testimonials[idx].role}</p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

