import { getAppliedJobs } from "../utils/savedJobs";
import JobCard from "../components/job/JobCard";

const AppliedJobs = () => {
  const jobs = getAppliedJobs();

  return (
    <div style={{ padding: "40px", color: "#fff" }}>
      <h2
        style={{
          marginBottom: "24px",
          textAlign: "center",
        }}>Applied Jobs</h2>

      {jobs.length === 0 && (<p style={{ opacity: 0.7, textAlign: "center" }}>No jobs applied yet.</p>)}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "28px",
          justifyItems: "center",
          marginTop: "32px",
        }}>
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            readOnly
            onViewDetails={() => {}}
          />))}
      </div>
    </div>
  );
};

export default AppliedJobs;
