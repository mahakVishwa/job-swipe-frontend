import type { Job } from "../types/job.types";

const STORAGE_KEY = "applied_jobs";

export const getAppliedJobs = (): Job[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addAppliedJob = (job: Job) => {
  const existing = getAppliedJobs();
  if (existing.find((j) => j.id === job.id)) return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...existing, job])
  );
};
