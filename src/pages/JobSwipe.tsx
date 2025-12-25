import { useEffect, useState } from "react";
import { fetchJobs } from "../api/jobs.api";
import type { Job } from "../types/job.types";

const JobSwipe = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  const currentJob = jobs[currentIndex];

  return (
    <div style={{ padding: "24px" }}>
      <h1>Job Swipe</h1>

      {!currentJob && <p>No more jobs 🎉</p>}

      {currentJob && (
        <div style={{ marginTop: "20px" }}>
          <h2>{currentJob.title}</h2>
          <p>{currentJob.company}</p>
        </div>
      )}
    </div>
  );
};

export default JobSwipe;
