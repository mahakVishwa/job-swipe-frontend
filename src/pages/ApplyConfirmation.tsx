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
    <div
      style={{
        padding: "32px 20px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          padding: "28px",
          boxShadow:
            "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.4px",
            }}
          >
            Application Submitted 🎉
          </h1>
          <p
            style={{
              marginTop: "6px",
              fontSize: "14px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Your application has been successfully recorded
          </p>
        </div>

        {/* Job Info */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            padding: "18px",
            marginBottom: "20px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 6px 0",
            }}
          >
            {job.title}
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.8)",
              margin: 0,
            }}
          >
            {job.company}
          </p>
        </div>

        {/* ATS Section */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(102,126,234,0.3), rgba(118,75,162,0.3))",
            borderRadius: "16px",
            padding: "18px",
            marginBottom: "20px",
            border: "1px solid rgba(255,255,255,0.25)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              margin: 0,
            }}
          >
            ATS Match Score
          </p>
          <div
            style={{
              fontSize: "40px",
              fontWeight: 800,
              color: "#ffffff",
              marginTop: "4px",
            }}
          >
            {atsResult.score}%
          </div>
        </div>

        {/* Keywords */}
        <div style={{ marginBottom: "20px" }}>
          <KeywordGroup
            title="Matched Keywords"
            items={atsResult.matchedKeywords}
            type="success"
          />
        </div>

        <div style={{ marginBottom: "28px" }}>
          <KeywordGroup
            title="Missing Keywords"
            items={atsResult.missingKeywords}
            type="danger"
          />
        </div>

        {/* CTA */}
        <button
          onClick={onContinue}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "14px",
            border: "none",
            background:
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Continue Browsing
        </button>
      </div>
    </div>
  );
};

const KeywordGroup = ({
  title,
  items,
  type,
}: {
  title: string;
  items: string[];
  type: "success" | "danger";
}) => {
  const colors =
    type === "success"
      ? {
          bg: "rgba(134,239,172,0.25)",
          border: "rgba(134,239,172,0.5)",
        }
      : {
          bg: "rgba(248,113,113,0.25)",
          border: "rgba(248,113,113,0.5)",
        };

  return (
    <>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.6px",
        }}
      >
        {title}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {items.map((item) => (
          <span
            key={item}
            style={{
              padding: "6px 12px",
              fontSize: "12px",
              fontWeight: 600,
              background: colors.bg,
              border: `1px solid ${colors.border}`,
              borderRadius: "999px",
              color: "#ffffff",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );
};

export default ApplyConfirmation;
