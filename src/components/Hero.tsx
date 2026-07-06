import { Link2, Mail, ChevronDown } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" style={{
      position: "relative", minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
      background: "radial-gradient(ellipse at center, var(--bg-secondary) 0%, var(--bg-primary) 70%)",
    }}>
      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1, textAlign: "center",
        padding: "2rem", maxWidth: 820,
      }}>
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: 13,
          color: "var(--accent-cyan)", marginBottom: 24,
          letterSpacing: 3, textTransform: "uppercase",
        }}>
          {personalInfo.tagline}
        </p>

        <h1 style={{
          fontSize: "clamp(3rem, 9vw, 6.5rem)", fontWeight: 600,
          lineHeight: 1.05, marginBottom: 20, letterSpacing: "-0.03em",
          background: "linear-gradient(135deg, #1d1d1f 40%, #86868b)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          {personalInfo.name}
        </h1>

        <h2 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 400,
          color: "var(--text-secondary)", marginBottom: 28,
          letterSpacing: "-0.01em",
        }}>
          {personalInfo.title} @ {personalInfo.university}
        </h2>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 16px", marginBottom: 28,
          border: "1px solid var(--border)",
          borderRadius: 980,
          background: "rgba(52,199,89,0.08)",
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "var(--accent-green)",
            boxShadow: "0 0 8px var(--accent-green)",
          }} />
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 12,
            color: "var(--accent-green)", letterSpacing: 0.5,
          }}>
            {personalInfo.availability}
          </span>
        </div>

        <p style={{
          fontSize: 19, color: "var(--text-secondary)",
          marginBottom: 44, maxWidth: 600, margin: "0 auto 44px",
          lineHeight: 1.5,
        }}>
          {personalInfo.bio}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 52 }}>
          <button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "13px 30px",
              background: "var(--accent-cyan)", color: "#ffffff",
              border: "none", borderRadius: 980, fontWeight: 500,
              fontFamily: "var(--font-display)", fontSize: 16,
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            View Projects
          </button>
          <a href={`mailto:${personalInfo.email}`}
            style={{
              padding: "13px 30px",
              background: "transparent", color: "var(--accent-cyan)",
              border: "1px solid var(--border)", borderRadius: 980,
              fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500,
              cursor: "pointer", transition: "all 0.2s", display: "inline-block",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-cyan)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
          {[
            { icon: <Link2 size={20} />, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              title={s.label}
              style={{
                color: "var(--text-muted)", transition: "color 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollDown} style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        background: "none", border: "none", cursor: "pointer",
        color: "var(--text-muted)", animation: "bounce 2s infinite",
      }}>
        <ChevronDown size={24} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
