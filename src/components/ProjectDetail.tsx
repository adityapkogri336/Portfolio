import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, GitFork, ExternalLink, ChevronRight } from "lucide-react";
import type { Project } from "./Projects";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

function Reveal({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal" style={style}>
      {children}
    </div>
  );
}

const sectionHeadingStyle: CSSProperties = {
  fontSize: 18, fontWeight: 700, color: "var(--text-primary)",
  marginBottom: 20, fontFamily: "var(--font-mono)",
};

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      if (panelRef.current) panelRef.current.scrollTop = 0;
    }
  }, [project]);

  useEffect(() => {
    if (project) {
      window.history.pushState({ projectDetail: true }, "");
      pushedRef.current = true;
    }
  }, [project?.id]);

  useEffect(() => {
    const handlePopState = () => {
      pushedRef.current = false;
      onClose();
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [onClose]);

  const handleClose = () => {
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back();
    } else {
      onClose();
    }
  };

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  return (
    <AnimatePresence onExitComplete={() => { document.body.style.overflow = ""; }}>
      {project && (
        <motion.div
          key="project-detail"
          ref={panelRef}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 32 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "var(--bg-primary)",
            overflowY: "auto",
          }}
        >
          <button
            onClick={handleClose}
            style={{
              position: "fixed",
              top: 24,
              left: 24,
              zIndex: 201,
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 18px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              color: "var(--text-secondary)",
              fontFamily: "var(--font-mono)", fontSize: 13,
              cursor: "pointer", transition: "border-color 0.2s, color 0.2s",
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
            <ArrowLeft size={16} /> Back to Projects
          </button>

          <div style={{ maxWidth: 900, margin: "0 auto", padding: "120px 2rem 100px" }}>
            {/* Header */}
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: 12,
              color: "var(--accent-cyan)", textTransform: "uppercase", letterSpacing: 3,
              marginBottom: 12,
            }}>
              {project.category} · {project.year}
            </p>
            <motion.h1
              layoutId={`project-title-${project.id}`}
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700,
                lineHeight: 1.1, marginBottom: 20,
                background: "linear-gradient(135deg, #e8f4f8 40%, var(--accent-cyan))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
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

              {/* Overview */}
              <Reveal style={{ marginBottom: 56 }}>
                <h2 style={sectionHeadingStyle}>Overview</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.8 }}>
                  {project.description}
                </p>
              </Reveal>

              {/* Problem Statement */}
              <Reveal style={{ marginBottom: 56 }}>
                <h2 style={sectionHeadingStyle}>Problem Statement</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.8 }}>
                  {project.problem}
                </p>
              </Reveal>

              {/* Approach */}
              <Reveal style={{ marginBottom: 56 }}>
                <h2 style={sectionHeadingStyle}>Approach</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.8 }}>
                  {project.approach}
                </p>
              </Reveal>

              {/* Workflow */}
              <Reveal style={{ marginBottom: 56 }}>
                <h2 style={{ ...sectionHeadingStyle, marginBottom: 28 }}>Workflow</h2>
                <div>
                  {project.workflow.map((w, i) => (
                    <div key={w.step} style={{ display: "flex", gap: 20 }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: "50%",
                          border: "1px solid var(--accent-green)",
                          background: "rgba(0,255,136,0.08)",
                          color: "var(--accent-green)",
                          fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                        }}>
                          {i + 1}
                        </div>
                        {i < project.workflow.length - 1 && (
                          <div style={{
                            width: 2, flex: 1,
                            minHeight: 32,
                            background: "linear-gradient(var(--accent-green), var(--border))",
                            marginTop: 4, marginBottom: 4,
                          }} />
                        )}
                      </div>
                      <div style={{ paddingBottom: i < project.workflow.length - 1 ? 28 : 0 }}>
                        <p style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>
                          {w.step}
                        </p>
                        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                          {w.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Tools & Technologies */}
              <Reveal style={{ marginBottom: 56 }}>
                <h2 style={sectionHeadingStyle}>Tools &amp; Technologies</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="tools-grid">
                  {project.toolsUsed.map((tool) => (
                    <div key={tool.name} style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: 10, padding: "16px 18px",
                    }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "var(--accent-cyan)", marginBottom: 4, fontFamily: "var(--font-mono)" }}>
                        {tool.name}
                      </p>
                      <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        {tool.purpose}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Results */}
              <Reveal style={{ marginBottom: 56 }}>
                <h2 style={sectionHeadingStyle}>Results</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[...project.highlights, ...project.results].map((h) => (
                    <div key={h} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: 8, padding: "14px 18px",
                    }}>
                      <ChevronRight size={14} color="var(--accent-green)" />
                      <span style={{ fontSize: 13, color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>{h}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Challenges & Solutions */}
              <Reveal style={{ marginBottom: 56 }}>
                <h2 style={sectionHeadingStyle}>Challenges &amp; Solutions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {project.challenges.map((c) => (
                    <div key={c.challenge} style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderLeft: "3px solid var(--accent-purple)",
                      borderRadius: 8, padding: "18px 20px",
                    }}>
                      <p style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--accent-purple)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                        Challenge
                      </p>
                      <p style={{ fontSize: 14, color: "var(--text-primary)", lineHeight: 1.7, marginBottom: 14 }}>
                        {c.challenge}
                      </p>
                      <p style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--accent-green)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                        Solution
                      </p>
                      <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                        {c.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Key Learnings */}
              <Reveal style={{ marginBottom: 56 }}>
                <h2 style={sectionHeadingStyle}>Key Learnings</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {project.learnings.map((l) => (
                    <div key={l} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <ChevronRight size={14} color="var(--accent-cyan)" style={{ marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>{l}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Links */}
              {(project.github || project.demo) && (
                <Reveal style={{ display: "flex", gap: 12 }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                      display: "flex", alignItems: "center", gap: 8,
                      padding: "10px 20px",
                      background: "transparent",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 500,
                      textDecoration: "none", transition: "border-color 0.2s",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent-cyan)")}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
                    >
                      <GitFork size={16} /> View Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                      display: "flex", alignItems: "center", gap: 8,
                      padding: "10px 20px",
                      background: "var(--accent-cyan)",
                      border: "1px solid var(--accent-cyan)",
                      borderRadius: 8,
                      color: "var(--bg-primary)",
                      fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                      textDecoration: "none",
                    }}>
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </Reveal>
              )}
            </motion.div>
          </div>

          <style>{`
            @media (max-width: 640px) {
              .tools-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
