import type { Job } from "../../types/job.types";

interface JobCardProps {
  job: Job;
  onSkip: () => void;
  onInterested: () => void;
}

const JobCard = ({ job, onSkip, onInterested }: JobCardProps) => {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "24px",
        padding: "32px",
        maxWidth: "450px",
        margin: "0 auto",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <h2 style={{ 
        marginBottom: "8px",
        fontSize: "28px",
        fontWeight: "700",
        color: "#ffffff",
        letterSpacing: "-0.5px"
      }}>
        {job.title}
      </h2>
      <p style={{ 
        marginTop: 0, 
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: "16px",
        fontWeight: "500"
      }}>
        {job.company}
      </p>

      <div style={{ 
        marginTop: "24px", 
        display: "flex", 
        gap: "10px", 
        flexWrap: "wrap" 
      }}>
        {job.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: "600",
              background: "rgba(255, 255, 255, 0.25)",
              color: "#ffffff",
              borderRadius: "999px",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        style={{
          marginTop: "32px",
          display: "flex",
          gap: "16px",
        }}
      >
        <button
          onClick={onSkip}
          style={{
            flex: 1,
            padding: "16px 24px",
            borderRadius: "16px",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            background: "rgba(255, 255, 255, 0.1)",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "700",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
          }}
        >
          ❌ Skip
        </button>

        <button
          onClick={onInterested}
          style={{
            flex: 1,
            padding: "16px 24px",
            borderRadius: "16px",
            border: "none",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "700",
            boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 12px 28px rgba(102, 126, 234, 0.5)";
            e.currentTarget.style.filter = "brightness(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.4)";
            e.currentTarget.style.filter = "brightness(1)";
          }}
        >
          ✅ Interested
        </button>
      </div>
    </div>
  );
};

export default JobCard;