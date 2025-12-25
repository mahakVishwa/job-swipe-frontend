import { useEffect, useState } from "react";
import { fetchJobs } from "../api/jobs.api";
import type { Job } from "../types/job.types";

const JobSwipe = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <h1>Job Swipe</h1>

      <div style={{ marginTop: "16px" }}>
        {jobs.map((job) => (
          <div key={job.id} style={{ marginBottom: "12px" }}>
            <strong>{job.title}</strong> — {job.company}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSwipe;
