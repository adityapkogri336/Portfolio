import { personalInfo, education } from "../data/portfolio";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

export default function About() {
  const grad = education[0];

  return (
    <section id="about" style={{ padding: "100px 2rem", maxWidth: 1100, margin: "0 auto" }}>
      {/* Section header */}
      <div style={{ marginBottom: 60 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-cyan)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
          01. about
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text-primary)" }}>
          Who I Am
        </h2>
        <div style={{ width: 48, height: 3, background: "var(--accent-cyan)", marginTop: 12, borderRadius: 2 }} />
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 60, alignItems: "start",
      }} className="about-grid">

        {/* Left: bio */}
        <div>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: 16, marginBottom: 24 }}>
            {personalInfo.bio}
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: 16, marginBottom: 32 }}>
            I'm currently pursuing my master's degree with a focus on {grad.focus}. My work lives at the intersection of analog hardware and digital systems - I care deeply about understanding signals all the way from the physical layer up to the algorithm.
          </p>

          {/* Quick info pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: <MapPin size={14} />, text: personalInfo.location },
              { icon: <GraduationCap size={14} />, text: `${grad.degree} - ${grad.school}` },
              { icon: <Calendar size={14} />, text: `Expected Graduation: ${personalInfo.graduationYear}` },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "var(--accent-cyan)" }}>{item.icon}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-secondary)" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: stats cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { label: "GPA", value: grad.gpa, sub: "Current standing" },
            { label: "Projects", value: "6", sub: "Academic & personal" },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 8, padding: "24px 20px",
              textAlign: "center",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent-cyan)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginTop: 4 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
