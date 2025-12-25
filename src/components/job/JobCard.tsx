import type { Job } from "../../types/job.types";

interface JobCardProps {
  job: Job;
  onSkip: () => void;
  onInterested: () => void;
}

const JobCard = ({ job, onSkip, onInterested }: JobCardProps) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{job.title}</h2>
      <p>{job.company}</p>

      <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
        <button onClick={onSkip}>❌ Skip</button>
        <button onClick={onInterested}>✅ Interested</button>
      </div>
    </div>
  );
};

export default JobCard;
