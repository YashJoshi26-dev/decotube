// ============================================================
//  DECOTUBE — Services Page
// ============================================================
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS, SERVICES } from "../data/constants";
import { Reveal, Section, SectionHeading, CTAButton, VideoBackground } from "../componenet/UI";

// ── Page Hero ─────────────────────────────────────────────
function ServicesHero() {
  return (
    <section style={{
      height: "100vh",
      position: "relative",
      borderBottom: "1px solid #e4e2de",
      display: "flex", alignItems: "center",
      padding: "0 clamp(16px, 6vw, 80px)",
      paddingTop: "110px",
      overflow: "hidden",
      background: "#111",
    }}>
      <VideoBackground src="/videos/Services_section.mp4" />
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 4, padding: "4px 16px", fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>WHAT WE DO</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, color: "#ffffff", margin: "0 0 20px", letterSpacing: -1, lineHeight: 1.05 }}>
            Engineering<br />
            <span style={{ color: "#ffffff" }}>Solutions</span>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", maxWidth: 560, lineHeight: 1.85 }}>
            From stainless steel pipe manufacturing to greenfield project consultancy — 12 specialized services covering every aspect of industrial tube &amp; pipe operations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}


// ── Category Filter ───────────────────────────────────────
function CategoryFilter({ active, onChange }) {
  const categories = ["All", "Manufacturing", "Consultancy", "Engineering", "Quality", "Operations"];
  return (
    <div style={{
      display: "flex", gap: 8, flexWrap: "wrap",
      marginBottom: 40,
    }}>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          style={{
            background: active === cat
              ? "#111111"
              : "#ffffff",
            border: `1px solid ${active === cat ? "#111111" : "#e0e0e0"}`,
            borderRadius: 6,
            padding: "7px 18px",
            color: active === cat ? "#fff" : "#555555",
            fontSize: 11, letterSpacing: 1.5,
            fontWeight: 600, cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { if (active !== cat) { e.currentTarget.style.background = "#f5f5f5"; e.currentTarget.style.borderColor = "#aaa"; } }}
          onMouseLeave={e => { if (active !== cat) { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.borderColor = "#e0e0e0"; } }}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

// ── Service Card ──────────────────────────────────────────
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={(index % 3) * 0.08}>
      {/* Outer wrapper provides spinning border + lift on hover */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          height: 380, // Reduced from 420 to remove extra bottom space
          position: "relative",
          borderRadius: 14,
          padding: "1.5px",
          overflow: "hidden",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.3)" : "0 4px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "default",
        }}
      >
        {/* Spinning conic border */}
        <div style={{
          position: "absolute",
          top: "-50%", left: "-50%", width: "200%", height: "200%",
          background: "conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.3) 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          animation: "spin-border 1.2s linear infinite",
          zIndex: 0,
        }} />
        {/* Static border when not hovering */}
        <div style={{
          position: "absolute", inset: 0,
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 14,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }} />
        {/* Card content */}
        <div style={{
          position: "relative", zIndex: 2,
          background: "#171717",
          borderRadius: 13,
          height: "100%",
          boxSizing: "border-box",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
        }}>
          {/* Image */}
          <div style={{ height: 160, overflow: "hidden", position: "relative" }}>
            <img 
              src={service.image} 
              alt={service.title} 
              style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} 
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #171717 5%, transparent 60%)" }} />
          </div>

          <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
            {/* Category badge */}
            <div style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4, padding: "2px 8px",
              fontSize: 8, letterSpacing: 2,
              color: "#aaaaaa", marginBottom: 12,
              alignSelf: "flex-start",
            }}>
              {service.category.toUpperCase()}
            </div>

            <div style={{ fontWeight: 700, fontSize: 16, color: "#ffffff", marginBottom: 6 }}>
              {service.title}
            </div>
            <div style={{ fontSize: 11, color: "#bbbbbb", marginBottom: 10 }}>{service.short}</div>
            <p style={{ fontSize: 12.5, color: "#999999", lineHeight: 1.6, margin: 0 }}>{service.desc}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ── Services Grid ─────────────────────────────────────────
function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All"
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <Section id="services-grid" style={{ background: "#ffffff" }}>
      <SectionHeading
        label="ALL SERVICES"
        title="12 Specialized Services"
        subtitle="Comprehensive industrial engineering and manufacturing solutions from a single trusted partner."
        theme="light"
      />
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 20,
      }}>
        {filtered.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </Section>
  );
}

// ── Process / How We Work ─────────────────────────────────
function HowWeWork() {
  const steps = [
    { step: "01", title: "Initial Consultation", desc: "Understand your requirements, project scope, and technical specifications through a detailed briefing." },
    { step: "02", title: "Technical Proposal", desc: "Our engineers prepare a comprehensive technical and commercial proposal tailored to your needs." },
    { step: "03", title: "Project Execution", desc: "Skilled teams execute with precision — from manufacturing to on-site supervision and commissioning." },
    { step: "04", title: "Quality Assurance", desc: "Rigorous QMS-controlled checks against ASTM, API, ISO, BIS standards at every stage." },
    { step: "05", title: "Delivery & Support", desc: "On-time delivery with post-project technical support, audits, and long-term partnership." },
  ];

  return (
    <Section id="how-we-work" style={{ background: "#f5f5f5" }}>
      <SectionHeading label="OUR PROCESS" title="How We Work" center theme="light" />
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 64px)",
        alignItems: "stretch", maxWidth: 1100, margin: "0 auto",
      }}>
        {/* Left: Image */}
        <Reveal>
          <div style={{ 
            height: "100%", 
            borderRadius: 20, 
            overflow: "hidden", 
            border: "1px solid #e5e5e5",
            animation: "float 6s ease-in-out infinite"
          }}>
            <img 
              src="/images/How_we_work_left.png" 
              alt="How We Work" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>
        </Reveal>

        {/* Right: Points */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, justifyContent: "center" }}>
          {steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div style={{
                display: "flex", gap: 28, alignItems: "flex-start",
                paddingBottom: i < steps.length - 1 ? 0 : 0,
                position: "relative",
              }}>
                {/* Step number + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, #111111, #444444)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 12, color: "#fff",
                    letterSpacing: 0.5,
                  }}>
                    {step.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{
                      width: 1, height: 35,
                      background: "linear-gradient(#11111188, transparent)",
                      margin: "4px 0",
                    }} />
                  )}
                </div>
                {/* Content */}
                <div style={{ paddingTop: 8, paddingBottom: i < steps.length - 1 ? 20 : 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#111111", marginBottom: 4 }}>
                    {step.title}
                  </div>
                  <p style={{ fontSize: 13, color: "#555555", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── Industry Areas ────────────────────────────────────────
function IndustryAreas() {
  const industries = [
    { image: "/images/Construction & Infrastructure.png", name: "Construction & Infrastructure" },
    { image: "/images/Oil & Gas.png", name: "Oil & Gas" },
    { image: "/images/Industrial Manufacturing.png", name: "Industrial Manufacturing" },
    { image: "/images/Furniture & Interior Design.png", name: "Furniture & Interior Design" },
    { image: "/images/Chemical & Petrochemical.png", name: "Chemical & Petrochemical" },
    { image: "/images/Heat Exchangers.png", name: "Heat Exchangers" },
    { image: "/images/Automotive & Transportation.png", name: "Automotive & Transportation" },
    { image: "/images/Pharmaceutical & Food Processing.png", name: "Pharmaceutical & Food Processing" },
  ];

  return (
    <Section id="industries" style={{ background: "#ffffff" }}>
      <SectionHeading label="SECTORS WE SERVE" title="Industries & Applications" center theme="light" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // Changed to 4-column split as requested
        gap: 16,
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={(i % 4) * 0.06}>
            <div style={{
              background: "#171717",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12, padding: "16px",
              textAlign: "center",
              transition: "all 0.25s",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#ffffff"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)"; }}
            >
              <div style={{ width: 80, height: 80, borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
                <img src={ind.image} alt={ind.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#ffffff", lineHeight: 1.4 }}>{ind.name}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ── Services CTA ──────────────────────────────────────────
function ServicesCTA() {
  const navigate = useNavigate();
  return (
    <Section id="services-cta" style={{ background: "#ffffff" }}>
      <Reveal>
        <div style={{
          background: "#171717",
          borderRadius: 20,
          padding: "clamp(48px, 6vw, 80px) clamp(32px, 5vw, 64px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
        }}>
          {/* Background decoration matching Home page */}
          <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent)" }} />
          
          <div style={{ position: "relative", zIndex: 3 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: "#aaaaaa", marginBottom: 16 }}>LET'S COLLABORATE</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, color: "#ffffff", margin: "0 0 16px" }}>
              Need a Custom Engineering Solution?
            </h2>
            <p style={{ fontSize: 15, color: "#999999", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Tell us your project requirements and we'll put together a tailored technical proposal.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <CTAButton onClick={() => navigate("/contact")} style={{ background: "#ffffff", color: "#111111", border: "1px solid #ffffff" }}>GET ENQUIRY →</CTAButton>
              <CTAButton onClick={() => navigate("/downloads")} style={{ background: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.3)" }}>DOWNLOAD BROCHURE</CTAButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

// ── Services Page ─────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <HowWeWork />
      <IndustryAreas />
      <ServicesCTA />
    </>
  );
}
