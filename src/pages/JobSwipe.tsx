import { useEffect, useState } from "react";
import { fetchJobs } from "../api/jobs.api";
import type { Job } from "../types/job.types";
import JobCard from "../components/job/JobCard";
import ApplyConfirmation from "./ApplyConfirmation";
import JobDetailModal from "../components/job/JobDetailModal";
import { calculateATS } from "../utils/ats.mock";
import { AnimatePresence } from "framer-motion";

const JobSwipe = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [appliedJob, setAppliedJob] = useState<Job | null>(null);
  const [atsResult, setAtsResult] = useState<any>(null);

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

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
            padding: "48px 24px",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Section Header */}
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              marginBottom: "40px",
              textAlign: "center",
              fontFamily:
                "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            <h1
              style={{
                fontSize: "34px",
                fontWeight: 700,
                margin: 0,
                color: "#ffffff",
                letterSpacing: "-0.6px",
              }}
            >
              Discover Opportunities
            </h1>

            <p
              style={{
                marginTop: "10px",
                fontSize: "15px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.5,
              }}
            >
              Swipe to explore roles that match your skills and eligibility
            </p>
          </div>

          {/* Empty State */}
          {!currentJob && (
            <div
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "24px",
                padding: "40px 56px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                textAlign: "center",
                fontFamily:
                  "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                No more jobs available
              </p>
            </div>
          )}

          {/* Job Card */}
          <AnimatePresence mode="wait">
            {currentJob && (
              <JobCard
                key={currentJob.id}
                job={currentJob}
                onSkip={handleSkip}
                onInterested={handleInterested}
                onViewDetails={() => setSelectedJob(currentJob)}
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

      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
};

export default JobSwipe;
