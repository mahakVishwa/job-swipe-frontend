import jobs from "../data/jobs.mock.json";
import type { Job } from "../types/job.types";

export const fetchJobs = async (): Promise<Job[]> => {
  // simulate API delay
  await new Promise((res) => setTimeout(res, 300));
  return jobs as Job[];
};
