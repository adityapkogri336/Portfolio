import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.3s ease",
      padding: "0 2rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        {/* Logo */}
        <button onClick={() => handleNav("#hero")} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 8,
          fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600,
          color: "var(--text-primary)",
        }}>
          <Zap size={18} fill="currentColor" color="var(--accent-cyan)" />
          {personalInfo.name.split(" ")[0]}
        </button>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => handleNav(l.href)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-display)", fontSize: 14,
              color: active === l.href ? "var(--accent-cyan)" : "var(--text-secondary)",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-cyan)")}
            onMouseLeave={e => (e.currentTarget.style.color = active === l.href ? "var(--accent-cyan)" : "var(--text-secondary)")}
            >
              {l.label}
            </button>
          ))}
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" style={{
            padding: "8px 18px",
            border: "1px solid var(--accent-cyan)",
            color: "var(--accent-cyan)",
            fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 500,
            borderRadius: 980, transition: "all 0.2s",
            background: "transparent",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent-cyan)"; (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)"; }}
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{
          background: "none", border: "none", cursor: "pointer",
          color: "var(--text-primary)", display: "none",
        }} className="mobile-toggle">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
          padding: "1rem 2rem 1.5rem",
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => handleNav(l.href)} style={{
              background: "none", border: "none", cursor: "pointer", textAlign: "left",
              fontFamily: "var(--font-display)", fontSize: 15,
              color: "var(--text-secondary)",
            }}>
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
