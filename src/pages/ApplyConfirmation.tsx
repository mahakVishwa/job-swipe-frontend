import type { Job } from "../types/job.types";

interface ApplyConfirmationProps {
  job: Job;
  atsResult: {
    score: number;
    matchedKeywords: string[];
    missingKeywords: string[];
  };
  onContinue: () => void;
}

const ApplyConfirmation = ({
  job,
  atsResult,
  onContinue,
}: ApplyConfirmationProps) => {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Application Submitted 🎉</h1>

      <h2>{job.title}</h2>
      <p>{job.company}</p>

      <h3>ATS Score: {atsResult.score}%</h3>

      <p>Matched Keywords: {atsResult.matchedKeywords.join(", ")}</p>
      <p>Missing Keywords: {atsResult.missingKeywords.join(", ")}</p>

      <button onClick={onContinue} style={{ marginTop: "16px" }}>
        Continue
      </button>
    </div>
  );
};

export default ApplyConfirmation;
