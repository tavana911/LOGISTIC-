import { Link } from "react-router-dom";
import { Truck, Package, BarChart3, ClipboardList, GitBranch, Users, Settings, Shield, MapPin, Briefcase, DollarSign } from "lucide-react";
import { Button } from "../components/ui/button";
import type { Job } from "../data/jobs";

const iconMap: Record<string, React.ElementType> = {
  truck: Truck, package: Package, chart: BarChart3, clipboard: ClipboardList,
  network: GitBranch, users: Users, cog: Settings, shield: Shield,
};

const JobCard = ({ job }: { job: Job }) => {
  const Icon = iconMap[job.icon] || Package;

  return (
    <div className="bg-card rounded-lg border p-6 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 flex flex-col h-full">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-heading font-bold text-lg mb-2 text-card-foreground">{job.title}</h3>
      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
        <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{job.type}</span>
      </div>
      <p className="flex items-center gap-1 text-accent font-bold text-base mb-3">
        <DollarSign className="h-4 w-4" />{job.payRate}
      </p>
      <p className="text-sm text-muted-foreground mb-6 flex-1">{job.shortDescription}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to={`/careers/${job.id}`} className="flex-1">
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
        <Link to={`/careers/apply/${job.id}`} className="flex-1">
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Apply Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;

