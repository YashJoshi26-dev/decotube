// ============================================================
//  DECOTUBE — Home Page
// ============================================================
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { COLORS, STATS, WHY_CHOOSE, SERVICES } from "../data/constants";
import {
  Reveal, AnimCounter, SectionHeading,
  Section, PipeCanvas, CTAButton, InfoCard, VideoBackground,
} from "../componenet/UI";
import "./WhyChooseUs.css";

// ── Hero Section ──────────────────────────────────────────
function HeroSection() {
  const navigate = useNavigate();
  return (
    <section style={{
      height: "100vh", position: "relative",
      display: "flex", alignItems: "center", overflow: "hidden",
      background: "#111",
    }}>
      <VideoBackground src="/videos/Hero_section.mp4" />
      <div style={{
        position: "relative", zIndex: 1, maxWidth: 680,
        padding: "0 clamp(16px, 6vw, 80px)", paddingTop: "160px",
      }}>
        <Reveal>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)",
            borderRadius: 20, padding: "5px 10px", marginBottom: 16, marginTop: 32,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
            <span style={{ fontSize: 10, letterSpacing: 2.5, color: "rgba(255,255,255,0.8)" }}>
              SS MANUFACTURER · INDORE, MADHYA PRADESH
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 78px)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 24px", letterSpacing: -1 }}>
            <span style={{ display: "block", color: "#ffffff" }}>Engineering</span>
            <span style={{ display: "block", color: "#ffffff" }}>Steel Precision</span>
            <span style={{ display: "block", color: "rgba(255,255,255,0.55)", fontWeight: 300, fontSize: "0.6em", letterSpacing: 3 }}>FOR THE WORLD</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(255,255,255,0.72)", maxWidth: 500, marginBottom: 40 }}>
            Manufacturer &amp; supplier of premium stainless steel welded pipes, RHS, SHS tubes — and comprehensive engineering consultancy for Tube &amp; Pipe manufacturing units.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <CTAButton onClick={() => navigate("/contact")} variant="primary">GET A ENQUIRY →</CTAButton>
            <CTAButton onClick={() => navigate("/products")} style={{ border: `1px solid rgba(255,255,255,0.4)`, color: "#ffffff", background: "rgba(255,255,255,0.1)" }}>VIEW PRODUCTS</CTAButton>
            <CTAButton onClick={() => navigate("/downloads")} style={{ border: `1px solid rgba(255,255,255,0.2)`, color: "rgba(255,255,255,0.8)", background: "transparent" }}>📄 CATALOG</CTAButton>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div style={{ display: "flex", gap: 36, marginTop: 48, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.18)", flexWrap: "wrap" }}>
            {[["200+", "Products"], ["API/ISO", "Certified"], ["ASTM", "Standards"], ["3+", "Yrs Active"]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#ffffff", letterSpacing: 0.5 }}>{val}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

    </section>
  );
}

// ── Stats Banner ──────────────────────────────────────────
function StatsBanner() {
  return (
    <section style={{
      padding: "35px clamp(16px, 6vw, 80px)", background: COLORS.surface,
      borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}`,
      position: "relative", zIndex: 1,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        {STATS.map(({ label, val, suffix }, i) => (
          <Reveal key={label} delay={i * 0.07}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 900, color: COLORS.accentBright, letterSpacing: -1 }}>
                <AnimCounter target={val} suffix={suffix} />
              </div>
              <div style={{ fontSize: 10, letterSpacing: 3, color: COLORS.textMuted, marginTop: 4 }}>
                {label.toUpperCase()}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Services Preview ──────────────────────────────────────
function ServicesPreview() {
  const navigate = useNavigate();
  return (
    <Section id="services-preview" style={{ background: "#FFFFFF", paddingBottom: "24px" }}>
      <SectionHeading
        label="WHAT WE DO"
        title="Engineering Excellence"
        subtitle="From SS pipe manufacturing to full project consultancy — comprehensive industrial services tailored to your needs."
        center
        theme="light"
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 18, marginBottom: 40 }}>
        {SERVICES.slice(0, 8).map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 0.08}>
            <InfoCard icon={s.icon} image={s.image} title={s.title} desc={s.short} />
          </Reveal>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <CTAButton onClick={() => navigate("/services")} variant="outline">VIEW ALL 12 SERVICES →</CTAButton>
      </div>
    </Section>
  );
}

// ── Why Choose Us — TRUE Pinned Stacking Cards ────────────────
//
//  ARCHITECTURE (guaranteed to work):
//  ┌─ outerDiv  [position:relative, height: N×100vh] ─────┐
//  │  Creates the scroll distance (600vh for 6 cards)      │
//  │                                                        │
//  │  ┌─ pinDiv  [position:sticky, top:0, h:100vh] ──────┐ │
//  │  │  This entire block LOCKS to screen while outer    │ │
//  │  │  div scrolls.                                     │ │
//  │  │                                                   │ │
//  │  │  Heading (always visible)                         │ │
//  │  │                                                   │ │
//  │  │  ┌─ stackDiv [position:relative, h:420px] ──────┐ │ │
//  │  │  │  card[0]  [position:absolute, inset:0]        │ │ │
//  │  │  │  card[1]  ← slides in from bottom on scroll   │ │ │
//  │  │  │  card[N]  ...                                 │ │ │
//  │  │  └───────────────────────────────────────────────┘ │ │
//  │  │                                                   │ │
//  │  │  Progress dots                                    │ │
//  │  └───────────────────────────────────────────────────┘ │
//  └───────────────────────────────────────────────────────────┘
//
//  KEY FIXES vs previous attempts:
//  1. overflow-x:hidden removed from body (it breaks sticky!)
//  2. Structural styles are INLINE — no CSS file interference
//  3. getBoundingClientRect on outerDiv — always accurate
//
const CARD_H = 420; // px

function WhyChooseUs() {
  const outerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const total = WHY_CHOOSE.length;

  useEffect(() => {
    function onScroll() {
      const el = outerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      // -top = how many px we've scrolled INTO this element
      const scrolled = -top;
      // Total distance we can scroll inside before it ends
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      setActiveIdx(Math.min(total - 1, Math.floor(progress * total)));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [total]);

  return (
    // ── OUTER: creates vertical scroll space ─────────────────
    <div
      id="why-us"
      ref={outerRef}
      style={{
        position: "relative",
        height: `${total * 50}vh`,   // 50vh per card — snappy, one scroll per card
        background: "#FFFFFF",
        zIndex: 2, /* Place above HomeCTA to prevent shadow cut-off */
      }}
    >
      {/* ── PIN: stays locked to screen ──
           NO overflow on pin — incoming card must be VISIBLE
           sliding up from the bottom of the viewport           ── */}
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        paddingTop: "90px",   /* clears the fixed navbar so heading is fully visible */
        marginBottom: "15vh", /* Unstick 15vh early to add bottom padding before next section */
        boxSizing: "border-box",
        /* overflow intentionally NOT set — cards must be visible entering from bottom */
      }}>

        {/* Heading — always visible in the pin */}
        <div style={{ textAlign: "center", marginBottom: 20, flexShrink: 0 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(0,0,0,0.06)",
            color: "#000000",
            padding: "6px 16px",
            borderRadius: "180px",
            fontSize: 10,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 8,
            fontWeight: 800
          }}>
            OUR EDGE
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, color: "#111111", margin: "0 0 12px", letterSpacing: -1.5, lineHeight: 1.05 }}>
            Why Choose Decotube
          </h2>
          <p style={{ fontSize: 15, color: "#555555", lineHeight: 1.65, maxWidth: 480, margin: "0 auto" }}>
            Industry expertise combined with a commitment to global quality standards.
          </p>
        </div>

        {/* ── CARD STACK ────────────────────────────────────────────
            NO overflow:hidden here — incoming card slides visibly
            from BELOW the stack, just like the reference effect.
            Each past card gets:
              • scale(1 - depth*0.04)  →  slightly smaller per layer
              • dark overlay rgba(0,0,0, depth*0.28)  → darkens per layer
        ─────────────────────────────────────────────────────────── */}
        <div style={{
          position: "relative",
          width: "min(1000px, 94vw)",
          height: CARD_H,
          flexShrink: 0,
        }}>
          {WHY_CHOOSE.map((item, i) => {
            const isActive = i === activeIdx;
            const isPast = i < activeIdx;
            // How many cards are stacked ON TOP of this card
            const depth = isPast ? activeIdx - i : 0;
            // Scale shrinks slightly with depth (max 3 levels visible)
            const scale = isPast ? Math.max(0.88, 1 - depth * 0.04) : 1;
            // Overlay darkens with depth (25% per level, max 70%)
            const overlay = isPast ? Math.min(0.70, depth * 0.28) : 0;

            return (
              <div
                key={item.title}
                className="wcu-card-wrapper"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 24,
                  // ── TRANSFORM ──────────────────────────────────────
                  // active  → full size at position
                  // past    → scaled down (depth-based), stays at position
                  // future  → full size but starts 110% below — slides UP
                  opacity: isActive || isPast ? 1 : 0,
                  transform: isActive
                    ? `translateY(0) scale(1)`
                    : isPast
                      ? `translateY(0) scale(${scale})`
                      : `translateY(110%)`,
                  transition: [
                    "opacity 0.55s cubic-bezier(0.22,1,0.36,1)",
                    "transform 0.65s cubic-bezier(0.22,1,0.36,1)",
                  ].join(", "),
                  zIndex: isActive ? total + 1 : isPast ? i + 1 : 0,
                  pointerEvents: isActive ? "auto" : "none",
                  transformOrigin: "top center",  /* scale from top so cards appear to sink */
                }}
              >
                <div className="wcu-card-border-fallback" />
                <div className="wcu-card-inner">
                  {/* LEFT: visual panel */}
                  <div className="wcu-card-visual">
                    {item.image && (
                      <img src={item.image} alt={item.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
                    )}
                    {!item.image && (
                      <div className="wcu-icon-wrap">
                        {item.icon}
                      </div>
                    )}
                  </div>

                  {/* RIGHT: text panel */}
                  <div className="wcu-card-body">
                    <div className="wcu-card-eyebrow">OUR EDGE</div>
                    <h3 className="wcu-card-title">{item.title}</h3>
                    <div className="wcu-card-divider" />
                    <p className="wcu-card-desc">{item.desc}</p>
                  </div>
                </div>

                {/* ── OVERLAY — appears over past cards as they get buried ── */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `rgba(0,0,0,${overlay})`,
                  borderRadius: 24,
                  transition: "background 0.65s cubic-bezier(0.22,1,0.36,1)",
                  pointerEvents: "none",
                  zIndex: 20,   /* sits on top of card content */
                }} />
              </div>
            );
          })}
        </div>



      </div>
    </div>
  );
}


// ── Home CTA Banner ───────────────────────────────────────
function HomeCTA() {
  const navigate = useNavigate();
  return (
    <Section id="cta" style={{ background: "#FFFFFF", paddingTop: "10px", paddingBottom: "60px", zIndex: 10 }}>
      <Reveal>
        <div style={{ position: "relative" }}>
          {/* Main Container — right wall pushed right to fill the gap */}
          <div
            className="cta-card-wrapper"
            style={{
              marginLeft: "clamp(16px, 4vw, 60px)", /* Shift container toward the left */
              marginRight: "clamp(30px, 6vw, 90px)", /* Moved right wall to the right */
              position: "relative",
              zIndex: 1,
              background: COLORS.surface,
            }}
          >
            <div className="cta-card-border-fallback" />
            <div style={{
              background: `linear-gradient(135deg, rgba(118,171,223,0.06), rgba(118,171,223,0.02))`,
              borderRadius: 19,
              padding: "clamp(64px, 9vw, 110px) clamp(32px, 5vw, 64px)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              zIndex: 2,
            }}>
              <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.accent}22, transparent)` }} />

              <div style={{ position: "relative", zIndex: 3 }}>
                <div style={{ fontSize: 11, letterSpacing: 3, color: COLORS.accent, marginBottom: 16 }}>READY TO START?</div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, color: COLORS.steelBright, margin: "0 0 16px" }}>
                  Let's Build Something Strong
                </h2>
                <p style={{ fontSize: 15, color: COLORS.textDim, maxWidth: 480, margin: "0 auto 36px" }}>
                  Contact our team for custom SS pipe specifications, project consultancy, or engineering solutions.
                </p>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 10 }}>
                  <CTAButton onClick={() => navigate("/contact")} variant="primary">CONTACT US →</CTAButton>
                  <CTAButton onClick={() => navigate("/company")} variant="outline">LEARN ABOUT US</CTAButton>
                </div>
              </div>
            </div>
          </div>

          {/* Man Pointing Image popping out of container */}
          <img
            src="/images/man_pointing.png"
            alt="Man pointing to buttons"
            style={{
              position: "absolute",
              top: "-27%",
              right: "-25.5%",
              height: "150%",
              width: "auto",
              zIndex: 9,
              pointerEvents: "none",
              filter: "none",
              animation: "slideFromTop 0.85s cubic-bezier(0.22,1,0.36,1) both",
            }}
          />
        </div>
      </Reveal>
    </Section>
  );
}

// ── Home Page ─────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <ServicesPreview />
      <WhyChooseUs />
      <HomeCTA />
    </>
  );
}
