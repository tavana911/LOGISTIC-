import { TrendingUp, Heart, Laptop } from "lucide-react";
import { jobs } from "../data/jobs";
import JobCard from "../components/JobCard";
import careersHero from "../assets/careers-hero.jpg";

const perks = [
  { icon: TrendingUp, title: "Growth Opportunities", desc: "Advance your career with training and promotion paths" },
  { icon: Heart, title: "Competitive Benefits", desc: "Health insurance, 401k, paid time off, and more" },
  { icon: Laptop, title: "Remote Work", desc: "Flexible remote positions available" },
];

const Careers = () => (
  <div>
    <section className="relative min-h-[350px] md:min-h-[400px] flex items-center mt-16 md:mt-20">
      <img src={careersHero} alt="PAUPEMAGE LOGISTICS team" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-main relative z-10 py-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">Join the PAUPEMAGE LOGISTICS Team</h1>
        <p className="text-lg text-primary-foreground/80 max-w-xl">Build your career in logistics with a fast-growing global company</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Why Work Here</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {perks.map(p => (
            <div key={p.title} className="bg-card rounded-lg border p-8 text-center hover:shadow-[var(--shadow-card-hover)] transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <p.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">Current Openings</h2>
        <p className="text-center text-muted-foreground mb-12">All Remote Positions</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {jobs.map(j => <JobCard key={j.id} job={j} />)}
        </div>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h3 className="font-heading font-bold text-lg mb-3">Equal Opportunity Employer</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-4">
            PAUPEMAGE LOGISTICS is an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or veteran status.
          </p>
          <p className="text-sm font-medium">Contact: recruiter@paupemagelogistics.com</p>
        </div>
      </div>
    </section>
  </div>
);

export default Careers;

