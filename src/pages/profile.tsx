import { getAppliedJobs } from "../utils/savedJobs";

const Profile = () => {
  return (
    <div style={{ padding: "40px", color: "#fff" }}>
      
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h2>My Profile</h2>
        <p style={{ opacity: 0.7 }}>Student Dashboard</p>
      </div>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "24px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "16px",
        }}
      >
        <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #66eabcff, #582481ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "700",
            }}>ME</div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div style={{ marginTop: "20px" }}>
            <p><b>Name:</b> Mahak Vishwakarma</p>
            <p><b>Contact:</b> +91 XXXXXXXX10</p>
            <p><b>College:</b> International Institute of Professional Studies, DAVV</p>
            <p><b>Course:</b> MTech - IT</p>
            <p><b>Year:</b> 2nd Year</p>
            <p><b>CGPA:</b> 9.59</p>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <p>
            <b>Applied Jobs:</b>{" "}
            {getAppliedJobs().length}
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <p style={{ fontWeight: 600 }}>Skills</p>
          <p style={{ opacity: 0.8 }}>React, TypeScript, CSS, PowerBI, MS Excel, Git, Data Visualisation</p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <p style={{ fontWeight: 600 }}>Experience</p>
          <p style={{ opacity: 0.8 }}>Built multiple full stack projects and internship applications using React and Node.js</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
