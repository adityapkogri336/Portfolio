import { education, publications, certifications } from "../data/portfolio";
import { BookOpen, Award, FileText } from "lucide-react";

export default function Education() {
  return (
    <section id="education" style={{ padding: "100px 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ marginBottom: 60 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-cyan)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
          05. education & more
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
          Academic Background
        </h2>
        <div style={{ width: 48, height: 3, background: "var(--accent-cyan)", marginTop: 12, borderRadius: 2 }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }} className="edu-grid">
        {/* Left: Degrees */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <BookOpen size={18} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: 15, fontWeight: 600, fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
              Degrees
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {education.map((edu, i) => (
              <div key={i} style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12, padding: "24px",
                borderLeft: "3px solid var(--accent-cyan)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateX(4px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateX(0)")}
              >
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4, marginBottom: 6 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-cyan)" }}>
                    {edu.duration}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-green)" }}>
                    GPA: {edu.gpa}
                  </span>
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                  {edu.degree}
                </h4>
                <p style={{ fontSize: 13, color: "var(--accent-cyan)", marginBottom: 4, fontFamily: "var(--font-mono)" }}>
                  {edu.school} · {edu.location}
                </p>
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  Focus: {edu.focus}
                </p>
                {edu.thesis && (
                  <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4, fontStyle: "italic" }}>
                    Thesis: {edu.thesis}
                  </p>
                )}
                {edu.coursework.length > 0 && (
                  <div style={{ marginTop: 12 }}>
                    <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>
                      Relevant Coursework
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {edu.coursework.map((c) => (
                        <span key={c} style={{
                          padding: "2px 8px", borderRadius: 4,
                          background: "rgba(0,212,255,0.06)",
                          border: "1px solid rgba(0,212,255,0.15)",
                          fontFamily: "var(--font-mono)", fontSize: 10,
                          color: "var(--text-muted)",
                        }}>{c}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Publications + Certs */}
        <div>
          {/* Publications */}
          {publications.length > 0 && (
            <div style={{ marginBottom: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <FileText size={18} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: 15, fontWeight: 600, fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
                  Publications
                </h3>
              </div>
              {publications.map((pub, i) => (
                <a key={i} href={pub.link} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "block",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 10, padding: "20px",
                    marginBottom: 12, textDecoration: "none",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent-cyan)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <span style={{
                    fontSize: 10, fontFamily: "var(--font-mono)",
                    color: "var(--accent-green)", textTransform: "uppercase", letterSpacing: 1,
                  }}>{pub.type}</span>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", margin: "6px 0 4px" }}>
                    {pub.title}
                  </p>
                  <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{pub.venue}</p>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2, fontStyle: "italic" }}>{pub.authors}</p>
                </a>
              ))}
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <Award size={18} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: 15, fontWeight: 600, fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
                  Certifications
                </h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {certifications.map((cert, i) => (
                  <div key={i} style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 8, padding: "14px 18px",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{cert.name}</p>
                      <p style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{cert.issuer}</p>
                    </div>
                    <span style={{
                      fontSize: 11, fontFamily: "var(--font-mono)",
                      color: "var(--accent-cyan)",
                      border: "1px solid var(--border)",
                      padding: "2px 8px", borderRadius: 10,
                    }}>{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
