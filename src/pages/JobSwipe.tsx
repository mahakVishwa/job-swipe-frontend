import { useEffect, useState } from "react";
import { fetchJobs } from "../api/jobs.api";
import type { Job } from "../types/job.types";
import JobCard from "../components/job/JobCard";
import ApplyConfirmation from "./ApplyConfirmation";
import { calculateATS } from "../utils/ats.mock";

const JobSwipe = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [appliedJob, setAppliedJob] = useState<Job | null>(null);
  const [atsResult, setAtsResult] = useState<any>(null);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  const currentJob = jobs[currentIndex];

  const handleSkip = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleInterested = () => {
    if (!currentJob) return;

    const ats = calculateATS(
      "react javascript css html git",
      currentJob.atsKeywords
    );

    setAppliedJob(currentJob);
    setAtsResult(ats);
  };

  const handleContinue = () => {
    setAppliedJob(null);
    setAtsResult(null);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div>
      {!appliedJob && (
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
      )}

      {appliedJob && atsResult && (
        <ApplyConfirmation
          job={appliedJob}
          atsResult={atsResult}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default JobSwipe;
