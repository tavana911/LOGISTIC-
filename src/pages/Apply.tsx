import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { jobs } from "../data/jobs";
import { saveApplication } from "../lib/storage";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("9v5jU6jh75T6V8t59");

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const Apply = () => {
  const { jobId } = useParams();
  const job = jobs.find(j => j.id === Number(jobId));
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!job) return (
    <div className="min-h-screen flex items-center justify-center mt-20">
      <div className="text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Job Not Found</h1>
        <Link to="/careers"><Button>Back to Careers</Button></Link>
      </div>
    </div>
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission started");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      position: job.title,
      location: job.location,
      type: job.type,
      pay_rate: job.payRate,
      name: `${formData.get("first_name") ?? ""} ${formData.get("last_name") ?? ""}`,
      email: formData.get("email") ?? "",
      phone: formData.get("phone") ?? "",
      company: formData.get("company") ?? "",
      address: `${formData.get("address") ?? ""}${formData.get("city") ? `, ${formData.get("city")}` : ""}${formData.get("state") ? `, ${formData.get("state")}` : ""}${formData.get("zip") ? ` ${formData.get("zip")}` : ""}`,
      start_date: formData.get("start_date") ?? "",
      salary_expectations: formData.get("salary_expectations") ?? "",
      work_auth: formData.get("work_auth") ?? "",
      cover_letter: formData.get("cover_letter") ?? "",
    };

    console.log("Sending email with params:", templateParams);

    emailjs
      .send(
        "service_9lbgxts",
        "template_z7fkqgn",
        templateParams
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        saveApplication(job.id, job.title);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("EmailJS send error:", error);
        alert("Failed to send application. Please try again or contact us directly.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (submitted) return (
    <div className="min-h-screen flex items-center justify-center mt-20">
      <div className="max-w-lg text-center p-8">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <svg className="h-8 w-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="font-heading font-bold text-2xl mb-4">Application Submitted!</h2>
        <p className="text-muted-foreground mb-6">
          Thank you for your application! We have received your submission for the <strong>{job.title}</strong> position. Our hiring team will review your application and contact you if your qualifications match our needs.
        </p>
        <p className="text-sm text-muted-foreground mb-8">Applications are sent to: recruiter@paupemagelogistics.com</p>
        <div className="flex gap-4 justify-center">
          <Link to="/careers"><Button variant="outline">View More Jobs</Button></Link>
          <Link to="/profile"><Button className="bg-primary">View Profile</Button></Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-16 md:mt-20">
      <section className="bg-primary py-12">
        <div className="container-main">
          <Link to={`/careers/${job.id}`} className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-3">
            <ArrowLeft className="h-4 w-4" /> Back to Job Details
          </Link>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">Apply: {job.title}</h1>
          <p className="text-primary-foreground/70 text-sm mt-1">{job.location} · {job.type} · {job.payRate}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="position" value={job.title} />
            <input type="hidden" name="pay_rate" value={job.payRate} />
            <input type="hidden" name="work_type" value={job.type} />

            <fieldset>
              <legend className="font-heading font-bold text-lg mb-4">Personal Information</legend>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium mb-1 block">First Name *</label><Input required name="first_name" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Last Name *</label><Input required name="last_name" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium mb-1 block">Email *</label><Input required type="email" name="email" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Phone *</label><Input required name="phone" type="tel" /></div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-heading font-bold text-lg mb-4">Address</legend>
              <div className="space-y-4">
                <div><label className="text-sm font-medium mb-1 block">Street Address *</label><Input required name="address" /></div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div><label className="text-sm font-medium mb-1 block">City *</label><Input required name="city" /></div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">State *</label>
                    <select name="state" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Select State</option>
                      {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div><label className="text-sm font-medium mb-1 block">ZIP Code *</label><Input required name="zip" pattern="[0-9]{5}" /></div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-heading font-bold text-lg mb-4">Professional Information</legend>
              <div className="space-y-4">
                <div><label className="text-sm font-medium mb-1 block">Cover Letter</label><Textarea name="cover_letter" rows={4} /></div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium mb-1 block">Earliest Start Date *</label><Input required type="date" name="start_date" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Salary Expectations</label><Input name="salary_expectations" placeholder="e.g. $30/hour" /></div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Are you legally authorized to work in the United States? *</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2"><input type="radio" name="work_auth" value="Yes" required className="accent-primary" />Yes</label>
                    <label className="flex items-center gap-2"><input type="radio" name="work_auth" value="No" required className="accent-primary" />No</label>
                  </div>
                </div>
              </div>
            </fieldset>

            <div>
              <label className="flex items-start gap-2">
                <input type="checkbox" required className="mt-1 accent-primary" />
                <span className="text-sm">I certify that all information provided is accurate and complete. *</span>
              </label>
            </div>

            <Button type="submit" disabled={loading} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Apply;

