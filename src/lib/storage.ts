export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  resumeFileName?: string;
  jobPreferences?: string[];
}

export interface SavedApplication {
  jobId: number;
  jobTitle: string;
  dateApplied: string;
  status: string;
}

const PROFILE_KEY = "paupemage_profile";
const APPLICATIONS_KEY = "paupemage_applications";
const SAVED_JOBS_KEY = "paupemage_saved_jobs";

export const saveProfile = (data: UserProfile) => {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(data));
};

export const getProfile = (): UserProfile | null => {
  const d = localStorage.getItem(PROFILE_KEY);
  return d ? JSON.parse(d) : null;
};

export const saveApplication = (jobId: number, jobTitle: string) => {
  const apps = getApplications();
  apps.push({ jobId, jobTitle, dateApplied: new Date().toISOString(), status: "Submitted" });
  localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(apps));
};

export const getApplications = (): SavedApplication[] => {
  return JSON.parse(localStorage.getItem(APPLICATIONS_KEY) || "[]");
};

export const toggleSavedJob = (jobId: number) => {
  const saved = getSavedJobs();
  const idx = saved.indexOf(jobId);
  if (idx >= 0) saved.splice(idx, 1);
  else saved.push(jobId);
  localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(saved));
};

export const getSavedJobs = (): number[] => {
  return JSON.parse(localStorage.getItem(SAVED_JOBS_KEY) || "[]");
};

