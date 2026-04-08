import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { getProfile, saveProfile, getApplications, getSavedJobs, type UserProfile, type SavedApplication } from "../lib/storage";
import { jobs } from "../data/jobs";
import { User, FileText, Bookmark, Edit2 } from "lucide-react";

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [apps, setApps] = useState<SavedApplication[]>([]);
  const [saved, setSaved] = useState<number[]>([]);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<UserProfile>({ firstName: "", lastName: "", email: "", phone: "", street: "", city: "", state: "", zip: "" });

  useEffect(() => {
    const p = getProfile();
    if (p) { setProfile(p); setForm(p); }
    else setEditing(true);
    setApps(getApplications());
    setSaved(getSavedJobs());
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveProfile(form);
    setProfile(form);
    setEditing(false);
  };

  const update = (k: keyof UserProfile, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div className="mt-16 md:mt-20">
      <section className="bg-primary py-12">
        <div className="container-main flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
              {profile ? `Welcome, ${profile.firstName}!` : "Set Up Your Profile"}
            </h1>
          </div>
          {profile && !editing && (
            <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setEditing(true)}>
              <Edit2 className="h-4 w-4 mr-1" /> Edit Profile
            </Button>
          )}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          {editing ? (
            <form onSubmit={handleSave} className="space-y-6 mb-12">
              <h2 className="font-heading font-bold text-xl flex items-center gap-2"><User className="h-5 w-5" /> Personal Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-sm font-medium mb-1 block">First Name</label><Input value={form.firstName} onChange={e => update("firstName", e.target.value)} required /></div>
                <div><label className="text-sm font-medium mb-1 block">Last Name</label><Input value={form.lastName} onChange={e => update("lastName", e.target.value)} required /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-sm font-medium mb-1 block">Email</label><Input type="email" value={form.email} onChange={e => update("email", e.target.value)} required /></div>
                <div><label className="text-sm font-medium mb-1 block">Phone</label><Input value={form.phone} onChange={e => update("phone", e.target.value)} /></div>
              </div>
              <div><label className="text-sm font-medium mb-1 block">Street</label><Input value={form.street} onChange={e => update("street", e.target.value)} /></div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div><label className="text-sm font-medium mb-1 block">City</label><Input value={form.city} onChange={e => update("city", e.target.value)} /></div>
                <div><label className="text-sm font-medium mb-1 block">State</label><Input value={form.state} onChange={e => update("state", e.target.value)} /></div>
                <div><label className="text-sm font-medium mb-1 block">ZIP</label><Input value={form.zip} onChange={e => update("zip", e.target.value)} /></div>
              </div>
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Save Profile</Button>
            </form>
          ) : profile && (
            <div className="mb-12">
              <h2 className="font-heading font-bold text-xl flex items-center gap-2 mb-4"><User className="h-5 w-5" /> Personal Information</h2>
              <div className="bg-card border rounded-lg p-6 grid sm:grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Name:</span> {profile.firstName} {profile.lastName}</div>
                <div><span className="text-muted-foreground">Email:</span> {profile.email}</div>
                <div><span className="text-muted-foreground">Phone:</span> {profile.phone || "—"}</div>
                <div><span className="text-muted-foreground">Address:</span> {[profile.street, profile.city, profile.state, profile.zip].filter(Boolean).join(", ") || "—"}</div>
              </div>
            </div>
          )}

          <div className="mb-12">
            <h2 className="font-heading font-bold text-xl flex items-center gap-2 mb-4"><FileText className="h-5 w-5" /> My Applications</h2>
            {apps.length === 0 ? (
              <p className="text-muted-foreground text-sm">No applications yet. <Link to="/careers" className="text-primary hover:underline">Browse open positions</Link></p>
            ) : (
              <div className="bg-card border rounded-lg overflow-hidden">
                <div className="hidden md:block">
                  <table className="w-full text-sm">
                    <thead className="bg-muted"><tr><th className="text-left p-3 font-medium">Position</th><th className="text-left p-3 font-medium">Date Applied</th><th className="text-left p-3 font-medium">Status</th></tr></thead>
                    <tbody>
                      {apps.map((a, i) => (
                        <tr key={i} className="border-t">
                          <td className="p-3 font-medium">{a.jobTitle}</td>
                          <td className="p-3 text-muted-foreground">{new Date(a.dateApplied).toLocaleDateString()}</td>
                          <td className="p-3"><span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">{a.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="md:hidden space-y-4 p-4">
                  {apps.map((a, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <div className="font-medium mb-2">{a.jobTitle}</div>
                      <div className="text-sm text-muted-foreground mb-2">{new Date(a.dateApplied).toLocaleDateString()}</div>
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">{a.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl flex items-center gap-2 mb-4"><Bookmark className="h-5 w-5" /> Saved Jobs</h2>
            {saved.length === 0 ? (
              <p className="text-muted-foreground text-sm">No saved jobs yet.</p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {saved.map(id => {
                  const j = jobs.find(x => x.id === id);
                  return j ? (
                    <Link key={id} to={`/careers/${id}`} className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-heading font-semibold">{j.title}</h4>
                      <p className="text-sm text-muted-foreground">{j.payRate}</p>
                    </Link>
                  ) : null;
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;

