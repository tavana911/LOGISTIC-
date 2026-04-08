import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container-main py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <ArrowRight className="h-5 w-5 text-accent" strokeWidth={3} />
            <span className="font-heading font-bold text-lg">
              <span className="text-accent">PAUPEMAGE</span> LOGISTICS
            </span>
          </Link>
          <p className="text-secondary-foreground/70 text-sm mb-4">Fast. Reliable. Global.</p>
          <div className="space-y-2 text-sm text-secondary-foreground/70">
            <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />New Oxford, PA. 17350</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" />(765)407-3456</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" />info@paupemagelogistics.com</div>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            {[["Home","/"],["Services","/services"],["About Us","/about"],["Careers","/careers"],["Contact","/contact"]].map(([l,h])=>(
              <li key={h}><Link to={h} className="hover:text-accent transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            {["Supply Chain","Transportation","Global Logistics","Warehousing"].map(s=>(
              <li key={s}><Link to="/services" className="hover:text-accent transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Connect</h4>
          <div className="flex gap-3">
            {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/10">
      <div className="container-main py-6 text-center text-sm text-secondary-foreground/50">
        © 2024 PAUPEMAGE LOGISTICS. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

