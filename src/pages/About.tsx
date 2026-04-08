import { Target, Eye, Heart, Shield, Zap } from "lucide-react";
import aboutTeam from "../assets/about-team.jpg";
import careersHero from "../assets/careers-hero.jpg";

const values = [
  { icon: Target, title: "Excellence", desc: "Striving for the highest standards in every shipment" },
  { icon: Shield, title: "Integrity", desc: "Transparent and honest in all business dealings" },
  { icon: Zap, title: "Innovation", desc: "Leveraging technology to optimize logistics" },
  { icon: Heart, title: "Customer Focus", desc: "Your success is our top priority" },
];

const team = [
  { name: "James Morrison", role: "Chief Executive Officer" },
  { name: "Lisa Chen", role: "Chief Operations Officer" },
  { name: "Robert Williams", role: "VP of Global Logistics" },
  { name: "Maria Garcia", role: "VP of Technology" },
];

const About = () => (
  <div>
    <section className="relative bg-primary py-24 mt-16 md:mt-20">
      <div className="container-main">
        <p className="text-primary-foreground/60 text-sm mb-2">Home &gt; About</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">About Us</h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded with a vision to revolutionize the logistics industry, PAUPEMAGE LOGISTICS has grown into a trusted global partner for businesses of all sizes. We combine cutting-edge technology with deep industry expertise to deliver fast, reliable logistics solutions.
            </p>
            <p className="text-muted-foreground">
              Today, we serve thousands of clients across 50+ countries, handling over 15,000 shipments with a 99% on-time delivery rate.
            </p>
          </div>
          <img src={aboutTeam} alt="Our warehouse" className="rounded-lg shadow-lg" width={1920} height={1080} loading="lazy" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-primary/5 rounded-lg p-8">
            <Eye className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-heading font-bold text-xl mb-3">Our Mission</h3>
            <p className="text-muted-foreground">To provide innovative, reliable, and cost-effective logistics solutions that empower businesses to thrive in a global economy.</p>
          </div>
          <div className="bg-accent/5 rounded-lg p-8">
            <Target className="h-8 w-8 text-accent mb-4" />
            <h3 className="font-heading font-bold text-xl mb-3">Our Vision</h3>
            <p className="text-muted-foreground">To be the world's most trusted logistics partner, known for speed, reliability, and innovation in every shipment we handle.</p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map(v => (
            <div key={v.title} className="text-center p-6 rounded-lg border hover:shadow-[var(--shadow-card-hover)] transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Our Leadership</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {team.map(t => (
            <div key={t.name} className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-heading font-bold text-primary">{t.name.split(" ").map(n=>n[0]).join("")}</span>
              </div>
              <h3 className="font-heading font-semibold">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold mb-8">Certifications & Partnerships</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["ISO 9001:2015","C-TPAT Certified","SmartWay Partner","IATA Member"].map(c=>(
              <div key={c} className="px-6 py-3 rounded-full border font-medium text-sm">{c}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;

