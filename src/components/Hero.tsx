import { useEffect, useRef } from "react";
import { Link2, Mail, ChevronDown } from "lucide-react";
import { personalInfo } from "../data/portfolio";

function CircuitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes: { x: number; y: number; vx: number; vy: number; pulse: number }[] = [];
    const COUNT = 60;
    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            // Draw right-angle circuit path
            ctx.lineTo(nodes[i].x, nodes[j].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const glow = 0.4 + 0.4 * Math.sin(n.pulse);
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${glow})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${glow * 0.1})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, opacity: 0.6 }} />;
}

export default function Hero() {
  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" style={{
      position: "relative", minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      <CircuitCanvas />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, var(--bg-primary) 80%)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1, textAlign: "center",
        padding: "2rem", maxWidth: 800,
      }}>
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: 13,
          color: "var(--accent-cyan)", marginBottom: 20,
          letterSpacing: 3, textTransform: "uppercase",
        }}>
          {personalInfo.tagline}
        </p>

        <h1 style={{
          fontSize: "clamp(2.8rem, 8vw, 5.5rem)", fontWeight: 700,
          lineHeight: 1.05, marginBottom: 16,
          background: "linear-gradient(135deg, #e8f4f8 40%, var(--accent-cyan))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          {personalInfo.name}
        </h1>

        <h2 style={{
          fontSize: "clamp(1.1rem, 3vw, 1.5rem)", fontWeight: 400,
          color: "var(--text-secondary)", marginBottom: 12,
          fontFamily: "var(--font-mono)",
        }}>
          <span style={{ color: "var(--accent-green)" }}>&gt; </span>
          {personalInfo.title} @ {personalInfo.university}
        </h2>

        <p style={{
          fontSize: 16, color: "var(--text-secondary)",
          marginBottom: 40, maxWidth: 560, margin: "0 auto 40px",
        }}>
          {personalInfo.bio}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          <button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "12px 28px",
              background: "var(--accent-cyan)", color: "var(--bg-primary)",
              border: "none", borderRadius: 6, fontWeight: 700,
              fontFamily: "var(--font-display)", fontSize: 14,
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
          >
            View Projects
          </button>
          <a href={`mailto:${personalInfo.email}`}
            style={{
              padding: "12px 28px",
              background: "transparent", color: "var(--text-primary)",
              border: "1px solid var(--border)", borderRadius: 6,
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 500,
              cursor: "pointer", transition: "all 0.2s", display: "inline-block",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-cyan)"; (e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
          {[
            { icon: <Link2 size={20} />, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              title={s.label}
              style={{
                color: "var(--text-muted)", transition: "color 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollDown} style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        background: "none", border: "none", cursor: "pointer",
        color: "var(--text-muted)", animation: "bounce 2s infinite",
      }}>
        <ChevronDown size={24} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
