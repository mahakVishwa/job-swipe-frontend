import { useEffect, useState } from "react";
import { fetchJobs } from "../api/jobs.api";
import type { Job } from "../types/job.types";
import JobCard from "../components/job/JobCard";

const JobSwipe = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  const currentJob = jobs[currentIndex];

  const handleSkip = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleInterested = () => {
    console.log("Interested in:", currentJob);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Job Swipe</h1>

      {!currentJob && <p>No more jobs 🎉</p>}

      {currentJob && (
        <JobCard
          job={currentJob}
          onSkip={handleSkip}
          onInterested={handleInterested}
        />
      )}
    </div>
  );
};

export default JobSwipe;
