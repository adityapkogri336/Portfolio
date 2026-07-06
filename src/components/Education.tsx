import { education, publications, certifications } from "../data/portfolio";
import { FileText, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" style={{ padding: "140px 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ marginBottom: 60 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-cyan)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
          05. education
        </p>
        <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
          Education
        </h2>
        <div style={{ width: 48, height: 3, background: "var(--accent-cyan)", marginTop: 12, borderRadius: 2 }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {education.map((edu, i) => (
          <div key={i} style={{
            paddingBottom: i < education.length - 1 ? 40 : 0,
            borderBottom: i < education.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            {/* Header row: school + location */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>
                {edu.school}
              </h3>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-secondary)" }}>
                {edu.location}
              </span>
            </div>

            {/* Sub-row: degree + dates */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
              <p style={{ fontSize: 15, color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>
                {edu.degree}
              </p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>
                {edu.duration}
              </span>
            </div>

            {/* GPA */}
            <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 8, fontFamily: "var(--font-mono)" }}>
              GPA: {edu.gpa}
            </p>

            {(edu.focus || edu.thesis) && (
              <div style={{ marginTop: 8 }}>
                {edu.focus && (
                  <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
                    Focus: {edu.focus}
                  </p>
                )}
                {edu.thesis && (
                  <p style={{ fontSize: 13, color: "var(--text-muted)", fontStyle: "italic", marginTop: 2 }}>
                    Thesis: {edu.thesis}
                  </p>
                )}
              </div>
            )}

            {/* Coursework */}
            {edu.coursework.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
                  Relevant Coursework
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {edu.coursework.map((c) => (
                    <span key={c} style={{
                      padding: "3px 10px",
                      background: "rgba(0,0,0,0.035)",
                      border: "1px solid rgba(0,0,0,0.12)",
                      borderRadius: 4,
                      fontFamily: "var(--font-mono)", fontSize: 11,
                      color: "var(--text-muted)",
                    }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Publications + Certifications (only render if data exists) */}
      {(publications.length > 0 || certifications.length > 0) && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 56 }} className="edu-extras-grid">
          {publications.length > 0 && (
            <div>
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
      )}

      <style>{`
        @media (max-width: 768px) {
          .edu-extras-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
