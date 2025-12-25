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
        padding: "40px 24px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          padding: "40px",
          maxWidth: "550px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          animation: "fadeSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "32px",
            textAlign: "center",
            letterSpacing: "-0.5px",
          }}
        >
          Application Submitted 🎉
        </h1>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "32px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "8px",
              marginTop: 0,
            }}
          >
            {job.title}
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.8)",
              margin: 0,
              fontWeight: "500",
            }}
          >
            {job.company}
          </p>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "24px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "rgba(255, 255, 255, 0.9)",
              marginTop: 0,
              marginBottom: "8px",
            }}
          >
            ATS Score
          </h3>
          <div
            style={{
              fontSize: "48px",
              fontWeight: "800",
              color: "#ffffff",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            {atsResult.score}%
          </div>
        </div>

        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <h4
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "12px",
              marginTop: 0,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            ✅ Matched Keywords
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {atsResult.matchedKeywords.map((keyword) => (
              <span
                key={keyword}
                style={{
                  padding: "8px 14px",
                  fontSize: "13px",
                  fontWeight: "600",
                  background: "rgba(134, 239, 172, 0.3)",
                  color: "#ffffff",
                  borderRadius: "999px",
                  border: "1px solid rgba(134, 239, 172, 0.5)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            marginBottom: "32px",
          }}
        >
          <h4
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "12px",
              marginTop: 0,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            ⚠️ Missing Keywords
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {atsResult.missingKeywords.map((keyword) => (
              <span
                key={keyword}
                style={{
                  padding: "8px 14px",
                  fontSize: "13px",
                  fontWeight: "600",
                  background: "rgba(248, 113, 113, 0.3)",
                  color: "#ffffff",
                  borderRadius: "999px",
                  border: "1px solid rgba(248, 113, 113, 0.5)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={onContinue}
          style={{
            width: "100%",
            padding: "16px 24px",
            borderRadius: "16px",
            border: "none",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#ffffff",
            fontSize: "18px",
            fontWeight: "700",
            boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "pointer",
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
          Continue
        </button>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ApplyConfirmation;