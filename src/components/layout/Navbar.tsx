import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        height: "64px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Brand */}
      <div
        style={{
          fontSize: "20px",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-0.5px",
        }}
      >
        InterWeU
      </div>

      {/* Desktop Nav */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
        }}
        className="nav-links"
      >
        <NavItem label="Jobs" active />
        <NavItem label="Applications" />
        <NavItem label="Profile" />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "22px",
          cursor: "pointer",
          display: "none",
        }}
        className="hamburger"
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            right: "16px",
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(12px)",
            borderRadius: "12px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          className="mobile-menu"
        >
          <NavItem label="Jobs" active />
          <NavItem label="Applications" />
          <NavItem label="Profile" />
        </div>
      )}

      {/* Responsive helpers */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

const NavItem = ({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) => {
  return (
    <span
      style={{
        color: active ? "#ffffff" : "rgba(255,255,255,0.7)",
        fontWeight: active ? 700 : 500,
        cursor: "pointer",
        position: "relative",
      }}
    >
      {label}
      {active && (
        <span
          style={{
            position: "absolute",
            left: 0,
            bottom: "-6px",
            width: "100%",
            height: "2px",
            background: "linear-gradient(90deg, #667eea, #764ba2)",
            borderRadius: "2px",
          }}
        />
      )}
    </span>
  );
};

export default Navbar;
