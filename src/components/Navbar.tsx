import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import logo from "../assets/paupemage-logo.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const handleTrack = () => {
    if (!trackingNumber.trim()) {
      alert("Please enter a tracking number.");
      return;
    }
    // Call the global trackShipment function
    if (window.trackShipment) {
      window.trackShipment(trackingNumber);
    } else {
      alert(`Tracking shipment: ${trackingNumber}`);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm"}`}>
      <div className="container-main flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="PAUPEMAGE LOGISTICS logo" className="h-10 w-auto md:h-12" />
          <div className="flex items-center">
            <ArrowRight className="h-6 w-6 text-accent -mr-1" strokeWidth={3} />
            <ArrowRight className="h-6 w-6 text-primary -mr-1" strokeWidth={3} />
          </div>
          <span className="font-heading font-bold text-lg md:text-xl">
            <span className="text-accent">PAUPEMAGE</span>{" "}
            <span className="text-primary">LOGISTICS</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Track Package:</span>
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="e.g. PAU-9928374"
              className="px-3 py-1 border border-input rounded-md text-sm w-32"
            />
            <Button onClick={handleTrack} size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Track
            </Button>
          </div>
          <NavLink to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Get a Quote
            </Button>
          </NavLink>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t animate-fade-in">
          <div className="container-main py-4 flex flex-col gap-2">
            <div className="flex flex-col gap-2 p-4 border-b">
              <span className="text-sm text-muted-foreground">Enter your tracking number below to see your package status.</span>
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="e.g. PAU-9928374"
                className="px-3 py-2 border border-input rounded-md text-sm"
              />
              <Button onClick={handleTrack} size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Track Package
              </Button>
            </div>
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium ${
                    isActive ? "text-primary bg-primary/5" : "text-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/contact">
              <Button className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Get a Quote
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

