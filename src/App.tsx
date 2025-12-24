import { useEffect, useState } from "react";
import { fetchJobs } from "./api/jobs.api";
import type { Job } from "./types/job.types";

const App = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetchJobs().then((data) => {
      console.log("Jobs fetched:", data);
      setJobs(data);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Swipe Frontend 🚀</h1>

      {jobs.map((job) => (
        <div key={job.id}>
          {job.title} — {job.company}
        </div>
      ))}
    </div>
  );
};

export default App;
