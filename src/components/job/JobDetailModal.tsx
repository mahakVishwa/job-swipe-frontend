import type { Job } from "../../types/job.types";

interface JobDetailModalProps {
  job: Job;
  onClose: () => void;
}

const JobDetailModal = ({ job, onClose }: JobDetailModalProps) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          padding: "32px",
          width: "90%",
          maxWidth: "520px",
          color: "#fff",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ marginBottom: "8px" }}>{job.title}</h2>
        <p style={{ opacity: 0.85 }}>{job.company}</p>

        {/* Eligibility */}
        <div style={{ marginTop: "20px" }}>
          <h4 style={{ marginBottom: "8px" }}>Eligibility</h4>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <span style={badgeStyle}>
              Min CGPA: {job.eligibility.minCgpa}
            </span>

            {job.eligibility.branches.map((branch) => (
              <span key={branch} style={badgeStyle}>
                {branch}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div style={{ marginTop: "24px" }}>
          <h4 style={{ marginBottom: "8px" }}>Job Description</h4>
          <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
            {job.description}
          </p>
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: "28px",
            width: "100%",
            padding: "14px",
            borderRadius: "14px",
            border: "none",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "#fff",
            fontWeight: 700,
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const badgeStyle = {
  padding: "8px 14px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.25)",
  border: "1px solid rgba(255,255,255,0.3)",
  fontSize: "13px",
  fontWeight: 600,
};

export default JobDetailModal;
