import { skills } from "../data/portfolio";
import { Cpu, Code2, Wrench, Layers } from "lucide-react";

const categories = [
  { key: "hardware" as const, label: "Hardware & EE", icon: <Cpu size={18} />, color: "#1d1d1f" },
  { key: "software" as const, label: "Software & Programming", icon: <Code2 size={18} />, color: "#424245" },
  { key: "tools" as const, label: "Tools & Platforms", icon: <Wrench size={18} />, color: "#6e6e73" },
  { key: "domains" as const, label: "Domains", icon: <Layers size={18} />, color: "#86868b" },
];

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: "140px 2rem",
      background: "var(--bg-secondary)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 60 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-cyan)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
            02. skills
          </p>
          <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
            Technical Arsenal
          </h2>
          <div style={{ width: 48, height: 3, background: "var(--accent-cyan)", marginTop: 12, borderRadius: 2 }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {categories.map((cat, i) => (
            <div key={cat.key} className="skill-row" style={{
              display: "flex", gap: 32,
              padding: "28px 0",
              borderTop: i === 0 ? "1px solid var(--border)" : "none",
              borderBottom: "1px solid var(--border)",
            }}>
              {/* Label column */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, width: 220, flexShrink: 0 }} className="skill-row-label">
                <span style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: 40, height: 40, borderRadius: 10,
                  background: `${cat.color}1a`,
                  color: cat.color, flexShrink: 0,
                }}>
                  {cat.icon}
                </span>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>
                  {cat.label}
                </h3>
              </div>

              {/* Skill badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignContent: "flex-start", flex: 1 }}>
                {skills[cat.key].map((skill) => (
                  <span key={skill} style={{
                    padding: "6px 14px",
                    borderRadius: 20,
                    border: `1px solid ${cat.color}55`,
                    background: "transparent",
                    color: cat.color,
                    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600,
                    whiteSpace: "nowrap",
                    transition: "background 0.15s, border-color 0.15s",
                    display: "inline-block",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = `${cat.color}1a`;
                    (e.currentTarget as HTMLElement).style.borderColor = cat.color;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}55`;
                  }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skill-row { flex-direction: column !important; gap: 16px !important; }
          .skill-row-label { width: auto !important; }
        }
      `}</style>
    </section>
  );
}
