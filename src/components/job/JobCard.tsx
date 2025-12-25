import type { Job } from "../../types/job.types";
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

interface JobCardProps {
  job: Job;
  onSkip: () => void;
  onInterested: () => void;
}

const JobCard = ({ job, onSkip, onInterested }: JobCardProps) => {
  const x = useMotionValue(0);

  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const likeOpacity = useTransform(x, [60, 120], [0, 1]);
  const skipOpacity = useTransform(x, [-120, -60], [1, 0]);

  return (
    <motion.div
      drag="x"
      style={{
        x,
        rotate,
        position: "relative",
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "24px",
        padding: "32px",
        maxWidth: "450px",
        margin: "0 auto",
        boxShadow:
          "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
      whileDrag={{ scale: 1.05 }}
      onDragEnd={(event, info) => {
        if (info.offset.x > 120) {
          onInterested();
        } else if (info.offset.x < -120) {
          onSkip();
        }
      }}
      exit={{
        x: x.get() > 0 ? 300 : -300,
        opacity: 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* LIKE hint */}
      <motion.div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "8px 16px",
          borderRadius: "12px",
          background: "rgba(34, 197, 94, 0.9)",
          color: "#fff",
          fontWeight: 800,
          fontSize: "14px",
          letterSpacing: "1px",
          opacity: likeOpacity,
        }}
      >
        LIKE
      </motion.div>

      {/* SKIP hint */}
      <motion.div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "8px 16px",
          borderRadius: "12px",
          background: "rgba(239, 68, 68, 0.9)",
          color: "#fff",
          fontWeight: 800,
          fontSize: "14px",
          letterSpacing: "1px",
          opacity: skipOpacity,
        }}
      >
        SKIP
      </motion.div>

      <h2
        style={{
          marginBottom: "8px",
          fontSize: "28px",
          fontWeight: "700",
          color: "#ffffff",
          letterSpacing: "-0.5px",
        }}
      >
        {job.title}
      </h2>

      <p
        style={{
          marginTop: 0,
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        {job.company}
      </p>

      <div
        style={{
          marginTop: "24px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
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
            background:
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "700",
          }}
        >
          ✅ Interested
        </button>
      </div>
    </motion.div>
  );
};

export default JobCard;
