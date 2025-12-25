import Navbar from "./Navbar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      }}
    >
      <Navbar />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
