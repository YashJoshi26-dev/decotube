// ============================================================
//  DECOTUBE — Shared UI Components
// ============================================================
import { useState, useEffect, useRef } from "react";
import { COLORS } from "../data/constants";

// ── Video Background (Netflix-style — raw, no overlay) ────
export function VideoBackground({ src }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

// ── Scroll-reveal wrapper ──────────────────────────────────
export function Reveal({ children, delay = 0, className = "", style = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ${delay}s ease, transform 0.75s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── Animated counter ───────────────────────────────────────
export function AnimCounter({ target, suffix = "", duration = 2000 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let cur = 0;
          const step = target / (duration / 16);
          const t = setInterval(() => {
            cur += step;
            if (cur >= target) { setVal(target); clearInterval(t); }
            else setVal(Math.floor(cur));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ── SVG Pipe icon ──────────────────────────────────────────
export function PipeIcon({ size = 48, color = COLORS.steel }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="12" rx="17" ry="6" stroke={color} strokeWidth="1.5" />
      <line x1="7" y1="12" x2="7" y2="36" stroke={color} strokeWidth="1.5" />
      <line x1="41" y1="12" x2="41" y2="36" stroke={color} strokeWidth="1.5" />
      <ellipse cx="24" cy="36" rx="17" ry="6" stroke={color} strokeWidth="1.5" />
      <ellipse cx="24" cy="12" rx="10" ry="3.5" stroke={color} strokeWidth="0.7" opacity="0.35" />
      <line x1="7" y1="12" x2="7" y2="36" stroke="url(#sheen)" strokeWidth="4" opacity="0.15" />
    </svg>
  );
}

// ── Section label badge ────────────────────────────────────
export function SectionLabel({ text, theme = "dark" }) {
  const isLight = theme === "light";
  return (
    <div style={{
      display: "inline-block",
      background: isLight ? "rgba(0,0,0,0.06)" : COLORS.surfaceLight,
      border: isLight ? "none" : `1px solid ${COLORS.border}`,
      borderRadius: "180px",
      padding: "4px 16px",
      fontSize: 11,
      letterSpacing: 3,
      color: isLight ? "#000000" : COLORS.accent,
      marginBottom: 16,
      fontWeight: isLight ? 800 : 400,
    }}>
      {text}
    </div>
  );
}

// ── Section heading ────────────────────────────────────────
export function SectionHeading({ label, title, subtitle, center = false, theme = "dark" }) {
  const isLight = theme === "light";
  return (
    <Reveal>
      <div style={{ textAlign: center ? "center" : "left", marginBottom: 40 }}>
        {label && <SectionLabel text={label} theme={theme} />}
        <h2 style={{
          fontSize: "clamp(28px, 3.5vw, 46px)",
          fontWeight: 800,
          color: isLight ? "#111111" : COLORS.steelBright,
          lineHeight: 1.1,
          letterSpacing: -0.5,
          margin: "0 0 12px",
        }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: 15, color: isLight ? "#555555" : COLORS.textDim, maxWidth: center ? 560 : "100%", margin: center ? "0 auto" : 0, lineHeight: 1.8 }}>
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}

// ── Section wrapper ────────────────────────────────────────
export function Section({ id, children, style = {}, maxWidth = 1200 }) {
  return (
    <section
      id={id}
      style={{
        padding: "80px clamp(16px, 6vw, 80px)",
        position: "relative",
        zIndex: 1,
        ...style,
      }}
    >
      <div style={{ maxWidth, margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
}

// ── Animated Pipe Canvas (Hero) ────────────────────────────
export function PipeCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId, t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const pipes = Array.from({ length: 8 }, (_, i) => ({
      x: 50 + i * 75,
      r: 16 + i * 1.8,
      len: 160 + i * 22,
      phase: i * 0.45,
      speed: 0.007 + i * 0.001,
    }));

    function drawPipe({ x, r, len, phase, speed }) {
      const cx = x + Math.sin(t * speed + phase) * 14;
      const topY = 55 + Math.sin(t * 0.6 + phase) * 10;
      const btmY = topY + len;

      // top ellipse
      ctx.beginPath();
      ctx.ellipse(cx, topY, r, r * 0.27, 0, 0, Math.PI * 2);
      const tg = ctx.createLinearGradient(cx - r, 0, cx + r, 0);
      tg.addColorStop(0, "rgba(25,45,75,0.7)");
      tg.addColorStop(0.45, "rgba(150,190,230,0.9)");
      tg.addColorStop(1, "rgba(18,35,65,0.6)");
      ctx.fillStyle = tg;
      ctx.fill();
      ctx.strokeStyle = "rgba(170,205,240,0.5)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // body
      ctx.save();
      ctx.beginPath();
      ctx.rect(cx - r, topY, r * 2, btmY - topY);
      ctx.clip();
      const bg = ctx.createLinearGradient(cx - r, 0, cx + r, 0);
      bg.addColorStop(0, "rgba(18,38,68,0.85)");
      bg.addColorStop(0.22, "rgba(65,105,155,0.9)");
      bg.addColorStop(0.5, "rgba(185,215,240,0.97)");
      bg.addColorStop(0.78, "rgba(55,95,145,0.88)");
      bg.addColorStop(1, "rgba(14,28,55,0.8)");
      ctx.fillStyle = bg;
      ctx.fillRect(cx - r, topY, r * 2, btmY - topY);
      // highlight streak
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      ctx.fillRect(cx + r * 0.28, topY, r * 0.13, btmY - topY);
      ctx.restore();

      // bottom ellipse
      ctx.beginPath();
      ctx.ellipse(cx, btmY, r, r * 0.27, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(22,42,72,0.85)";
      ctx.fill();
      ctx.strokeStyle = "rgba(130,170,215,0.45)";
      ctx.stroke();
    }

    function frame() {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const rg = ctx.createRadialGradient(w * 0.5, h * 0.35, 0, w * 0.5, h * 0.35, w * 0.55);
      rg.addColorStop(0, "rgba(40,80,150,0.07)");
      rg.addColorStop(1, "rgba(5,10,18,0)");
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, w, h);
      pipes.forEach(p => drawPipe(p));
      t++;
      animId = requestAnimationFrame(frame);
    }
    frame();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

// ── Floating particle network background ──────────────────
export function ParticleBg() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.4 + 0.3,
    }));

    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(90,150,215,0.32)";
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(frame);
    }
    frame();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 0, opacity: 0.65 }}
    />
  );
}

// ── CTA Button ─────────────────────────────────────────────
export function CTAButton({ children, onClick, variant = "primary", style = {} }) {
  const base = {
    border: "none",
    borderRadius: 8,
    padding: "13px 30px",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: 2,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "opacity 0.2s, transform 0.2s",
    display: "inline-block",
    textDecoration: "none",
    ...style,
  };
  const variants = {
    primary: {
      background: "#ffffff",
      color: "#0f0f0f",
      fontWeight: 700,
      boxShadow: `0 4px 15px rgba(255, 255, 255, 0.1)`,
      border: "1px solid #ffffff",
    },
    outline: {
      background: "transparent",
      border: `1px solid rgba(255,255,255,0.25)`,
      color: "#ffffff",
    },
    ghost: {
      background: "transparent",
      border: `1px solid transparent`,
      color: "rgba(255,255,255,0.7)",
    },
  };
  return (
    <button
      style={{ ...base, ...variants[variant] }}
      onClick={onClick}
      onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {children}
    </button>
  );
}

// ── Info card ──────────────────────────────────────────────
export function InfoCard({ icon, image, video, title, desc, accent = false, style = {} }) {
  const [hover, setHover] = useState(false);
  return (
    <div 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        height: "100%",
        position: "relative",
        borderRadius: 14,
        padding: "1.5px", // Thickness of the animated border
        overflow: "hidden",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hover ? "0 10px 40px rgba(0, 0, 0, 0.8)" : "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
        ...style,
      }}
    >
      {/* Spinning border layer */}
      <div 
        style={{
          position: "absolute",
          top: "-50%", left: "-50%", width: "200%", height: "200%",
          background: "conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.9) 100%)",
          opacity: hover ? 1 : 0,
          transition: "opacity 0.3s ease",
          animation: "spin-border 1.2s linear infinite",
          zIndex: 0,
        }}
      />
      {/* Base border layer when not hovering */}
      <div 
        style={{
          position: "absolute", inset: 0,
          border: `1px solid ${accent ? "rgba(255,255,255,0.15)" : COLORS.border}`,
          borderRadius: 14,
          opacity: hover ? 0 : 1,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      />
      {/* Content wrapper */}
      <div style={{
        position: "relative",
        zIndex: 2,
        background: accent ? COLORS.surfaceLight : COLORS.surface,
        borderRadius: 13, /* slightly less to fit inside padding */
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
        {(image || video) && (
          <div style={{ width: "100%", height: video ? "auto" : 180, position: "relative", flexShrink: 0 }}>
            {video ? (
              <video src={video} autoPlay muted loop playsInline style={{ width: "100%", display: "block" }} />
            ) : (
              <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            )}
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${accent ? COLORS.surfaceLight : COLORS.surface} 2%, transparent 70%)`, zIndex: 1, pointerEvents: "none" }} />
          </div>
        )}
        <div style={{ padding: (image || video) ? "16px 28px 28px" : 28, position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column" }}>
          {icon && <div style={{ fontSize: 30, marginBottom: 14, marginTop: (image || video) ? -32 : 0, filter: (image || video) ? "drop-shadow(0 2px 8px rgba(0,0,0,0.8))" : "none" }}>{icon}</div>}
          <div style={{ fontWeight: 700, fontSize: 15, color: COLORS.steelBright, marginBottom: 8 }}>{title}</div>
          <div style={{ fontSize: 13, color: COLORS.textDim, lineHeight: 1.75 }}>{desc}</div>
        </div>
      </div>
    </div>
  );
}
