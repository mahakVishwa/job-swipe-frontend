import { useEffect, useState } from "react";
import { fetchJobs } from "../api/jobs.api";
import type { Job } from "../types/job.types";
import JobCard from "../components/job/JobCard";
import ApplyConfirmation from "./ApplyConfirmation";
import JobDetailModal from "../components/job/JobDetailModal";
import ConfirmApplyModal from "../components/job/ConfirmApplyModal";
import { calculateATS } from "../utils/ats.mock";
import { AnimatePresence } from "framer-motion";

const JobSwipe = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [appliedJob, setAppliedJob] = useState<Job | null>(null);
  const [atsResult, setAtsResult] = useState<any>(null);

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [pendingJob, setPendingJob] = useState<Job | null>(null);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  const currentJob = jobs[currentIndex];

  const handleSkip = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // 🔁 Instead of applying directly, open confirm modal
  const handleInterested = () => {
    if (!currentJob) return;
    setPendingJob(currentJob);
  };

  const confirmApply = () => {
    if (!pendingJob) return;

    const ats = calculateATS(
      "react javascript css html git python django api backend docker data cloud ml",
      currentJob.atsKeywords
  );


    setAppliedJob(pendingJob);
    setAtsResult(ats);
    setPendingJob(null);
  };

  const cancelApply = () => {
    setPendingJob(null);
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
                You’ve reached the end — check back later for new roles ✨
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

      {/* Apply Confirmation */}
      {appliedJob && atsResult && (
        <ApplyConfirmation
          job={appliedJob}
          atsResult={atsResult}
          onContinue={handleContinue}
        />
      )}

      {/* Job Detail Modal */}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

      {/* Confirm Apply Modal */}
      {pendingJob && (
        <ConfirmApplyModal
          job={pendingJob}
          onConfirm={confirmApply}
          onCancel={cancelApply}
        />
      )}
    </div>
  );
};

export default JobSwipe;
