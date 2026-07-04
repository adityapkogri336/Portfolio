import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer style={{
      padding: "24px 2rem",
      borderTop: "1px solid var(--border)",
      background: "var(--bg-primary)",
      textAlign: "center",
    }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>
        Designed & Built by{" "}
        <span style={{ color: "var(--accent-cyan)" }}>{personalInfo.name}</span>
        {" "}·{" "}
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
