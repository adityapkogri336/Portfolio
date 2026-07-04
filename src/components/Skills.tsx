import { skills } from "../data/portfolio";
import { Cpu, Code2, Wrench, Layers } from "lucide-react";

const categories = [
  { key: "hardware" as const, label: "Hardware & EE", icon: <Cpu size={18} />, color: "var(--accent-cyan)" },
  { key: "software" as const, label: "Software & Programming", icon: <Code2 size={18} />, color: "var(--accent-green)" },
  { key: "tools" as const, label: "Tools & Platforms", icon: <Wrench size={18} />, color: "#a78bfa" },
  { key: "domains" as const, label: "Domains", icon: <Layers size={18} />, color: "#fb923c" },
];

function SkillTag({ text, color }: { text: string; color: string }) {
  return (
    <span style={{
      padding: "6px 14px",
      border: `1px solid ${color}33`,
      borderRadius: 20,
      fontFamily: "var(--font-mono)", fontSize: 12,
      color: color,
      background: `${color}0d`,
      transition: "all 0.2s", display: "inline-block", cursor: "default",
      whiteSpace: "nowrap",
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.background = `${color}22`;
      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.background = `${color}0d`;
      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
    }}
    >
      {text}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: "100px 2rem",
      background: "var(--bg-secondary)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 60 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-cyan)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
            02. skills
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
            Technical Arsenal
          </h2>
          <div style={{ width: 48, height: 3, background: "var(--accent-cyan)", marginTop: 12, borderRadius: 2 }} />
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }} className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.key} style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12, padding: "28px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = cat.color)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span style={{ color: cat.color }}>{cat.icon}</span>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>
                  {cat.label}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills[cat.key].map((skill) => (
                  <SkillTag key={skill} text={skill} color={cat.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
