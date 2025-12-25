import { useEffect, useState } from "react";
import { fetchJobs } from "../api/jobs.api";
import type { Job } from "../types/job.types";
import JobCard from "../components/job/JobCard";
import ApplyConfirmation from "./ApplyConfirmation";
import { calculateATS } from "../utils/ats.mock";
import { AnimatePresence } from "framer-motion";

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
        <div
          style={{
            padding: "40px 24px",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "800",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "48px",
              letterSpacing: "-1px",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              background:
                "linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Job Swipe
          </h1>

          {!currentJob && (
            <div
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "24px",
                padding: "48px 64px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                No more jobs 🎉
              </p>
            </div>
          )}

          <AnimatePresence mode="wait">
            {currentJob && (
              <JobCard
                key={currentJob.id}
                job={currentJob}
                onSkip={handleSkip}
                onInterested={handleInterested}
              />
            )}
          </AnimatePresence>
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
