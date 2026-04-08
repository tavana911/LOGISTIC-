import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  return (
    <div>
      <section className="relative bg-primary py-24 mt-16 md:mt-20">
        <div className="container-main">
          <p className="text-primary-foreground/60 text-sm mb-2">Home &gt; Contact</p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">Contact Us</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-success/10 border border-success/20 rounded-lg p-8 text-center">
                  <h3 className="font-heading font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="text-sm font-medium mb-1 block">Full Name *</label><Input required name="name" /></div>
                    <div><label className="text-sm font-medium mb-1 block">Email *</label><Input required type="email" name="email" /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="text-sm font-medium mb-1 block">Phone</label><Input name="phone" /></div>
                    <div><label className="text-sm font-medium mb-1 block">Company</label><Input name="company" /></div>
                  </div>
                  <div><label className="text-sm font-medium mb-1 block">Message *</label><Textarea required name="message" rows={5} /></div>
                  <Button type="submit" disabled={loading} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Address", text: "New Oxford, PA. 17350" },
                { icon: Phone, title: "Phone", text: "(765)407-3456" },
                { icon: Mail, title: "Email", text: "info@paupemagelogistics.com" },
                { icon: Clock, title: "Business Hours", text: "Mon-Fri 8AM-6PM EST" },
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm">{item.title}</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-lg overflow-hidden border">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

