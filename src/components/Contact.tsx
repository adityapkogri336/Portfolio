import { personalInfo } from "../data/portfolio";
import { Mail, Link2, FileDown, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: "140px 2rem",
      background: "var(--bg-secondary)",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-cyan)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
          06. contact
        </p>
        <h2 style={{ fontSize: "clamp(2.4rem, 6vw, 3.6rem)", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 20 }}>
          Let's Build Together
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.8, marginBottom: 48, maxWidth: 520, margin: "0 auto 48px" }}>
          I'm actively looking for full-time EE roles and open to research collaborations. Whether you have a position, a project, or just want to talk circuits - my inbox is open.
        </p>

        {/* Email CTA */}
        <a href={`mailto:${personalInfo.email}`} style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "14px 32px",
          background: "var(--accent-cyan)", color: "#ffffff",
          borderRadius: 980, fontWeight: 500, fontSize: 16,
          marginBottom: 48, transition: "all 0.2s",
          textDecoration: "none",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
        >
          <Send size={16} />
          Say Hello
        </a>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>or find me at</span>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>

        {/* Social + Resume */}
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
          {[
            { icon: <Link2 size={20} />, label: "LinkedIn", href: personalInfo.linkedin },
            { icon: <Mail size={20} />, label: "Email", href: `mailto:${personalInfo.email}` },
            { icon: <FileDown size={20} />, label: "Resume", href: personalInfo.resumeUrl },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 20px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 980, color: "var(--text-secondary)",
                fontFamily: "var(--font-display)", fontSize: 14,
                transition: "all 0.2s", textDecoration: "none",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-cyan)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              }}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
