import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";

import JobSwipe from "./pages/JobSwipe";
import AppliedJobs from "./pages/appliedJobs";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<JobSwipe />} />
          <Route path="/applications" element={<AppliedJobs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
