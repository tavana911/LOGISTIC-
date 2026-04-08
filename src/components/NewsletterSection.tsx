import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setEmail("");
  };

  return (
    <section className="bg-primary py-16">
      <div className="container-main text-center max-w-xl">
        <Mail className="h-10 w-10 text-primary-foreground/60 mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">Stay Updated</h2>
        <p className="text-primary-foreground/70 mb-8">Get the latest logistics news and updates</p>
        {done ? (
          <p className="text-primary-foreground font-semibold">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-1"
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shrink-0">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;

