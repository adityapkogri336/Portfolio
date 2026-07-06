import { experience } from "../data/portfolio";
import { Briefcase, FlaskConical } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: "140px 2rem",
      background: "var(--bg-secondary)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: 60 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-cyan)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
            04. experience
          </p>
          <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
            Where I've Worked
          </h2>
          <div style={{ width: 48, height: 3, background: "var(--accent-cyan)", marginTop: 12, borderRadius: 2 }} />
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 20, top: 8, bottom: 8,
            width: 1, background: "var(--border)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {experience.map((exp) => (
              <div key={exp.id} style={{ display: "flex", gap: 28, position: "relative" }}>
                {/* Dot */}
                <div style={{
                  width: 40, height: 40, flexShrink: 0,
                  background: "var(--bg-primary)",
                  border: "2px solid var(--accent-cyan)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent-cyan)", zIndex: 1,
                }}>
                  {exp.type === "Research"
                    ? <FlaskConical size={16} />
                    : <Briefcase size={16} />
                  }
                </div>

                {/* Content */}
                <div style={{
                  flex: 1,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12, padding: "24px 28px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent-cyan)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                        {exp.role}
                      </h3>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent-cyan)" }}>
                        {exp.company}
                      </p>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 11,
                      color: "var(--text-muted)",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      padding: "4px 10px", borderRadius: 20,
                      whiteSpace: "nowrap",
                    }}>
                      {exp.duration}
                    </span>
                  </div>

                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 16 }}>
                    {exp.description}
                  </p>

                  <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {exp.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "var(--accent-green)", marginTop: 2, flexShrink: 0, fontFamily: "var(--font-mono)" }}>▸</span>
                        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
