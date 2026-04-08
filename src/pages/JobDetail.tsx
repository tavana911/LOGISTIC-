import { useParams, Link } from "react-router-dom";
import { MapPin, Briefcase, DollarSign, CheckCircle, ArrowLeft } from "lucide-react";
import { Truck, Package, BarChart3, ClipboardList, GitBranch, Users, Settings, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { jobs } from "../data/jobs";

const iconMap: Record<string, React.ElementType> = {
  truck: Truck, package: Package, chart: BarChart3, clipboard: ClipboardList,
  network: GitBranch, users: Users, cog: Settings, shield: Shield,
};

const JobDetail = () => {
  const { jobId } = useParams();
  const job = jobs.find(j => j.id === Number(jobId));

  if (!job) return (
    <div className="min-h-screen flex items-center justify-center mt-20">
      <div className="text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Job Not Found</h1>
        <Link to="/careers"><Button>Back to Careers</Button></Link>
      </div>
    </div>
  );

  const Icon = iconMap[job.icon] || Package;

  return (
    <div className="mt-16 md:mt-20">
      <section className="bg-primary py-16">
        <div className="container-main">
          <Link to="/careers" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Careers
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">{job.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/70 mt-1">
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{job.type}</span>
                <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" />{job.payRate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <div className="mb-10">
            <h2 className="font-heading font-bold text-xl mb-4">Job Description</h2>
            <p className="text-muted-foreground">{job.fullDescription}</p>
          </div>

          <div className="mb-10">
            <h2 className="font-heading font-bold text-xl mb-4">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map(r => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="font-heading font-bold text-xl mb-4">Benefits</h2>
            <div className="flex flex-wrap gap-3">
              {job.benefits.map(b => (
                <span key={b} className="px-4 py-2 rounded-full bg-primary/5 text-sm font-medium">{b}</span>
              ))}
            </div>
          </div>

          <Link to={`/careers/apply/${job.id}`}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">Apply Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JobDetail;

