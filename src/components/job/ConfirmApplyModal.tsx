import type { Job } from "../../types/job.types";

interface ConfirmApplyModalProps {
  job: Job;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmApplyModal = ({
  job,
  onConfirm,
  onCancel,
}: ConfirmApplyModalProps) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        padding: "24px",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "28px",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 800,
            color: "#ffffff",
            marginTop: 0,
            marginBottom: "8px",
            letterSpacing: "-0.4px",
          }}
        >
          Confirm Application
        </h2>

        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.75)",
            marginBottom: "20px",
            lineHeight: 1.5,
          }}
        >
          You’re about to apply for the following position:
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            borderRadius: "14px",
            padding: "16px",
            marginBottom: "24px",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "16px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            {job.title}
          </p>
          <p
            style={{
              margin: "4px 0 0 0",
              fontSize: "14px",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {job.company}
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={onCancel}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.1)",
              color: "#ffffff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              background:
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "#ffffff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Confirm Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmApplyModal;
