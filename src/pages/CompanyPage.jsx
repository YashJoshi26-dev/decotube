// ============================================================
//  DECOTUBE — Company / Who We Are Page
// ============================================================
import { COLORS, COMPANY } from "../data/constants";
import { Reveal, Section, SectionHeading, InfoCard, CTAButton, VideoBackground } from "../componenet/UI";
import { useNavigate } from "react-router-dom";

// ── Page Hero ─────────────────────────────────────────────
function CompanyHero() {
  return (
    <section style={{
      height: "100vh",
      position: "relative",
      display: "flex", alignItems: "center",
      padding: "0 clamp(16px, 6vw, 80px)",
      paddingTop: "110px",
      overflow: "hidden",
      background: "#111",
    }}>
      <VideoBackground src="/videos/WhoWeAre_section.mp4" />
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{
            display: "inline-block", background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.22)", borderRadius: 4,
            padding: "4px 16px", fontSize: 11, letterSpacing: 3,
            color: "rgba(255,255,255,0.85)", marginBottom: 20,
          }}>WHO WE ARE</div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 900, color: "#ffffff", margin: "0 0 20px", letterSpacing: -1, lineHeight: 1.05 }}>
            Decotube India<br />
            <span style={{ color: "#ffffff" }}>Private Limited</span>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", maxWidth: 580, lineHeight: 1.85 }}>
            A specialized manufacturer and engineering consultancy delivering end-to-end support for Tube &amp; Pipe manufacturing units — with a strong focus on premium Oil &amp; Gas grade products.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ── About Section ─────────────────────────────────────────
function AboutSection() {
  return (
    <Section id="about" style={{ background: "#FFFFFF" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 5vw, 72px)", alignItems: "stretch",
      }}>
        <div>
          <SectionHeading label="ABOUT US" title={<>A Trust in<br /><span style={{ color: "#111111" }}>Stainless Steel</span></>} theme="light" />
          <Reveal delay={0.1}>
            <p style={{ color: "#555555", lineHeight: 1.9, fontSize: 15, marginBottom: 18 }}>
              <strong style={{ color: "#111111" }}>Decotube India Private Limited</strong> is a manufacturer and supplier of a qualitative range of Stainless-Steel Welded Round Pipes, RHS and SHS. Known for high corrosion resistance, excellent weldability and matchless quality, our products are designed to meet the needs of multiple industries across diverse sectors.
            </p>
            <p style={{ color: "#555555", lineHeight: 1.9, fontSize: 15, marginBottom: 18 }}>
              Beyond manufacturing, we are a specialized consultancy delivering end-to-end support for Tube &amp; Pipe manufacturing units — Greenfield &amp; Brownfield project execution, quality systems, automation, and business development.
            </p>
            <p style={{ color: "#555555", lineHeight: 1.9, fontSize: 15, marginBottom: 32 }}>
              Our commitment is simple: <em style={{ color: "#111111", fontStyle: "normal", fontWeight: 700 }}>the best technical solution at the most economical cost</em>, backed by industry expertise and guaranteed performance.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                "Reliable & Practical Solutions",
                "Global Standards Compliance",
                "Faster Project Completion",
                "Long-term Technical Partnership",
                "API, ISO, BIS, ASTM Certified",
                "Industry 4.0 Ready",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: "linear-gradient(135deg, #111111, #444444)",
                    flexShrink: 0, marginTop: 1,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 9, color: "#fff", fontWeight: 700,
                  }}>✓</div>
                  <span style={{ fontSize: 13, color: "#555555" }}>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Company glance image */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: 7, left: 0, right: 0, bottom: -7 }}>
            <Reveal delay={0.15} style={{ height: "100%" }}>
              <div style={{
                borderRadius: 16, overflow: "hidden",
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                height: "100%",
              }}>
                <img
                  src="/images/companyglance.jpg"
                  alt="Company at a glance"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center bottom", display: "block" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ── Vision / Mission ──────────────────────────────────────
function VisionMission() {
  const cards = [
    {
      video: "/videos/vision.mp4",
      title: "Our Vision",
      text: "To be India's most trusted name in stainless steel tube manufacturing and engineering consultancy — delivering innovation, reliability, and world-class quality to every industry we serve.",
    },
    {
      video: "/videos/mission.mp4",
      title: "Our Mission",
      text: "Deliver premium-grade stainless steel products and end-to-end technical engineering solutions that empower manufacturing industries to reach global standards at economical costs.",
    },
  ];

  return (
    <Section id="vision-mission" style={{ background: "#FFFFFF" }} maxWidth={1500}>
      <SectionHeading label="OUR DIRECTION" title="Vision & Mission" center theme="light" />
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px, 4vw, 40px)",
        maxWidth: 1500, margin: "0 auto",
      }}>
        {cards.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1} style={{ height: "100%" }}>
            <InfoCard video={item.video} title={item.title} desc={item.text} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ── Core Competencies ─────────────────────────────────────
function CoreCompetencies() {
  const competencies = [
    {
      image: "/images/Gemini_Generated_Image_m0kdaim0kdaim0kd.png",
      title: "Greenfield & Brownfield Project Consultancy",
      desc: "Complete planning, layout engineering, feasibility studies, and turnkey execution support for new manufacturing setups.",
    },
    {
      image: "/images/worker.png",
      title: "Project Execution & On-Site Supervision",
      desc: "Skilled technical teams for installation, commissioning, process stabilization, and production ramp-up.",
    },
    {
      image: "/images/CERTIFICATION.png",
      title: "Statutory Clearances & Certification",
      desc: "Assistance with all regulatory approvals, documentation, audits, and compliance for national & international standards.",
    },
    {
      image: "/images/BUSINESS DEVELOPMENT.png",
      title: "Business Development & Market Expansion",
      desc: "Strategic guidance to enhance product reach, customer acquisition, and industry positioning.",
    },
    {
      image: "/images/QUALITY SYSTEM.png",
      title: "Quality System Establishment",
      desc: "Implementation of QMS, SOP, MEx, inspection plans, and process control systems for consistent premium-grade output.",
    },
    {
      image: "/images/AUTOMATION.png",
      title: "Automation & Engineering Solutions",
      desc: "Customized automation, control systems, and process optimization for improved productivity and reduced downtime.",
    },
    {
      image: "/images/PRODUCT & MACHINE.png",
      title: "Product & Machine Upgradation",
      desc: "Modernization of existing mills, tooling, testing equipment, and production lines to meet global Oil & Gas specifications.",
    },
    {
      image: "/images/COST.png",
      title: "Product Cost Control & Efficiency",
      desc: "Data-driven analysis to reduce production cost, improve yield, and enhance overall plant profitability.",
    },
  ];

  return (
    <Section id="competencies" style={{ background: "#FFFFFF" }}>
      <SectionHeading
        label="CORE COMPETENCIES"
        title="What We Excel At"
        subtitle="Our team of India's technocrats brings vast experience across the full spectrum of tube & pipe manufacturing."
        center
        theme="light"
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 20,
      }}>
        {competencies.map((c, i) => (
          <Reveal key={c.title} delay={(i % 4) * 0.07}>
            <InfoCard image={c.image} title={c.title} desc={c.desc} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ── Industry Specialisation ───────────────────────────────
function IndustrySpec() {
  return (
    <Section id="industry" style={{ background: "#f5f5f5" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "clamp(24px, 5vw, 64px)", alignItems: "center",
      }}>
        <div>
          <SectionHeading
            label="INDUSTRY SPECIALISATION"
            title={<>Tube &amp; Pipe<br /><span style={{ color: "#111111" }}>Manufacturing Experts</span></>}
            theme="light"
          />
          <Reveal delay={0.1}>
            <p style={{ color: "#555555", fontSize: 15, lineHeight: 1.85, marginBottom: 28 }}>
              We specialize in the complete spectrum of tube &amp; pipe manufacturing technologies, from standard welded tubes to high-precision Oil &amp; Gas grade products.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "ERW, HFIW, TIG, CDW Cold Draw",
                "Seamless LSAW Lines",
                "OCTG, API Grade & Oil & Gas Premium Products",
                "High-precision, High-strength, Corrosion-resistant Solutions",
                "Rolls & Tools Design (FFx, DFT Forming Rolls)",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#111111", flexShrink: 0, marginTop: 7,
                  }} />
                  <span style={{ fontSize: 14, color: "#555555" }}>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div style={{
            background: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 16, padding: 36,
          }}>
            <div style={{ fontSize: 11, color: COLORS.accent, letterSpacing: 3, fontWeight: 700, marginBottom: 24 }}>OUR ASSURANCE</div>
            {[
              "Reliable, practical, and cost-effective solutions",
              "Faster project completion with optimized resources",
              "Compliance with global standards (API, ISO, BIS, ASTM)",
              "Long-term technical partnership for sustainable growth",
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                padding: "12px 0", borderBottom: `1px solid ${COLORS.border}`,
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentBright})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, color: "#111", fontWeight: 700, flexShrink: 0,
                }}>{i + 1}</div>
                <span style={{ fontSize: 13, color: COLORS.textDim, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

// ── Leadership ────────────────────────────────────────────
function Leadership() {
  const navigate = useNavigate();
  return (
    <Section id="leadership" style={{ background: "#FFFFFF" }}>
      <SectionHeading label="LEADERSHIP" title="The Minds Behind the Metal" center theme="light" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 28, maxWidth: 740, margin: "0 auto 48px",
      }}>
        {[
          {
            icon: "👤",
            name: "O.P. Singh Rana",
            role: "CEO & Founder",
            company: "Decometal India Pvt. Ltd.",
            desc: "Industry technocrat with vast experience in Tube & Pipe manufacturing. Leads Decotube's vision of delivering innovative, reliable, and cost-effective engineering solutions tailored to industry needs.",
          },
          {
            icon: "👥",
            name: "Engineering Division",
            role: "Technical Leadership",
            company: "Decotube India Pvt. Ltd.",
            desc: "A team of seasoned engineers specializing in ERW, HFIW, TIG, CDW, Seamless LSAW lines, and Oil & Gas premium product manufacturing — ensuring world-class execution on every project.",
          },
        ].map((p, i) => (
          <Reveal key={p.name} delay={i * 0.12}>
            <div style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 16, padding: 32,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, right: 0, width: 90, height: 90,
                background: `radial-gradient(circle at top right, ${COLORS.accent}11, transparent)`,
              }} />
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: `linear-gradient(135deg, ${COLORS.accent}22, ${COLORS.steelDim}22)`,
                border: `2px solid ${COLORS.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, marginBottom: 20,
              }}>
                {p.icon}
              </div>
              <div style={{ fontWeight: 800, fontSize: 18, color: COLORS.steelBright, marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: COLORS.accent, letterSpacing: 2, marginBottom: 4 }}>{p.role}</div>
              <div style={{ fontSize: 11, color: COLORS.textMuted, marginBottom: 16 }}>{p.company}</div>
              <p style={{ fontSize: 13, color: COLORS.textDim, lineHeight: 1.75 }}>{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <CTAButton onClick={() => navigate("/contact")} variant="primary">REACH OUR TEAM →</CTAButton>
      </div>
    </Section>
  );
}

// ── Company Page ──────────────────────────────────────────
export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <AboutSection />
      <VisionMission />
      <CoreCompetencies />
      <IndustrySpec />
      <Leadership />
    </>
  );
}
