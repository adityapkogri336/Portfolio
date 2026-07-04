import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { GitFork, ExternalLink, ChevronRight } from "lucide-react";

export type Project = (typeof projects)[number];

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section id="projects" style={{ padding: "100px 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ marginBottom: 48 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-cyan)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
          03. projects
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
          What I've Built
        </h2>
        <div style={{ width: 48, height: 3, background: "var(--accent-cyan)", marginTop: 12, borderRadius: 2 }} />
      </div>

      {/* Project cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 24 }} className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} onClick={() => onSelectProject(project)} style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 12, padding: 28,
            display: "flex", flexDirection: "column",
            transition: "border-color 0.2s, transform 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-cyan)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
          >
            {/* Card header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "var(--accent-cyan)", textTransform: "uppercase", letterSpacing: 2,
                }}>
                  {project.category}
                </span>
                <motion.h3 layoutId={`project-title-${project.id}`} style={{ fontSize: 18, fontWeight: 700, marginTop: 4, color: "var(--text-primary)" }}>
                  {project.title}
                </motion.h3>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-cyan)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <GitFork size={18} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-cyan)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
              {project.description}
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: 20 }}>
              {project.highlights.map((h) => (
                <div key={h} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <ChevronRight size={12} color="var(--accent-green)" />
                  <span style={{ fontSize: 13, color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>{h}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  padding: "3px 10px",
                  background: "rgba(0,212,255,0.06)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  borderRadius: 4,
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "var(--text-muted)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
