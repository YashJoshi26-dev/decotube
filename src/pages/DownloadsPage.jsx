// ============================================================
//  DECOTUBE — Downloads Page
// ============================================================
import { useState } from "react";
import { COLORS } from "../data/constants";
import { Reveal, Section, SectionHeading, CTAButton, VideoBackground } from "../componenet/UI";

// ── Downloads Hero ────────────────────────────────────────
function DownloadsHero() {
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
      <VideoBackground src="/videos/Download_section.mp4" />
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 4, padding: "4px 16px", fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>RESOURCES</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, color: "#ffffff", margin: "0 0 20px", letterSpacing: -1, lineHeight: 1.05 }}>
            Downloads &amp;<br />
            <span style={{ color: "#ffffff" }}>Technical Resources</span>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", maxWidth: 520, lineHeight: 1.85 }}>
            Access product catalogs, technical datasheets, weight charts, and company brochures. All resources are available for free download.
          </p>
        </Reveal>
      </div>
    </section>
  );
}


function DownloadCard({ image, title, desc, fileType, fileSize, onDownload, badge }) {
  const [hovered, setHovered] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    if (downloading) return;
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      if (onDownload) onDownload();
    }, 1500);
  };

  return (
    <Reveal>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          height: 380, // Reduced to remove extra bottom space
          position: "relative",
          borderRadius: 16,
          padding: "1.5px",
          overflow: "hidden",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.3)" : "0 4px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.4s cubic-bezier(0.2, 0, 0.2, 1), box-shadow 0.4s ease",
          cursor: "default",
        }}
      >
        {/* Spinning Border */}
        <div style={{
          position: "absolute",
          top: "-50%", left: "-50%", width: "200%", height: "200%",
          background: "conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.3) 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          animation: "spin-border 1.5s linear infinite",
          zIndex: 0,
        }} />

        {/* Static Border */}
        <div style={{
          position: "absolute", inset: 0,
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.4s ease",
          zIndex: 1,
        }} />

        <div style={{
          position: "relative", zIndex: 2,
          background: "#171717",
          borderRadius: 15,
          height: "100%",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
        }}>
          {/* Image */}
          <div style={{ height: 160, overflow: "hidden", position: "relative" }}>
            <img
              src={image}
              alt={title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #171717 5%, transparent 60%)" }} />

            {badge && (
              <div style={{
                position: "absolute", top: 16, right: 16,
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", padding: "4px 10px", borderRadius: 4,
                fontSize: 9, fontWeight: 700, letterSpacing: 1,
              }}>
                {badge}
              </div>
            )}
          </div>

          <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#ffffff", marginBottom: 8, letterSpacing: -0.5 }}>{title}</div>
            <p style={{ fontSize: 12.5, color: "#999999", lineHeight: 1.6, marginBottom: 16, flex: 1 }}>{desc}</p>

            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.05)",
            }}>
              <div style={{ fontSize: 10, color: "#666666", fontWeight: 600 }}>
                {fileType} • {fileSize}
              </div>
              <button
                onClick={handleDownload}
                style={{
                  background: downloading ? "rgba(255,255,255,0.1)" : "#ffffff",
                  border: "none", borderRadius: 6,
                  padding: "10px 18px",
                  color: downloading ? "#ffffff" : "#111111", fontWeight: 700,
                  fontSize: 11, letterSpacing: 1,
                  cursor: "pointer", fontFamily: "inherit",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => { if (!downloading) e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
              >
                {downloading ? "✓ REQUESTED" : "↓ REQUEST"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ── Main Downloads Section ────────────────────────────────
function DownloadsCatalog() {
  const [requested, setRequested] = useState([]);
  const markRequested = (id) => setRequested(p => [...p, id]);

  const downloads = [
    {
      id: "product-catalog",
      image: "/images/Product Catalog.png",
      title: "Product Catalog",
      desc: "Complete product catalog covering all SS pipe and tube types — Round, RHS, SHS. Includes full weight charts, size tables, surface finish details, and application data.",
      fileType: "PDF",
      fileSize: "~2 MB",
      badge: "POPULAR",
    },
    {
      id: "company-intro",
      image: "/images/Company Introduction.png",
      title: "Company Introduction",
      desc: "Company profile and introduction letter covering Decotube's core competencies, specializations, leadership, and service offerings for prospective partners.",
      fileType: "PDF",
      fileSize: "~1.5 MB",
    },
    {
      id: "round-tube-chart",
      image: "/images/Round Tube Weight Chart.png",
      title: "Round Tube Weight Chart",
      desc: "Detailed weight chart for stainless steel round welded tubes. OD 9.53mm to 101.60mm, thickness 0.60mm to 3.00mm. Per-meter weight values.",
      fileType: "PDF",
      fileSize: "~400 KB",
    },
    {
      id: "rhs-chart",
      image: "/images/RHS Weight Chart.png",
      title: "RHS Weight Chart",
      desc: "Rectangular Hollow Section weight data. Sizes 10×20mm to 100×50mm, thickness 0.60mm to 2.50mm. ASTM A554/A213 compliant.",
      fileType: "PDF",
      fileSize: "~380 KB",
    },
    {
      id: "shs-chart",
      image: "/images/SHS Weight Chart.png",
      title: "SHS Weight Chart",
      desc: "Square Hollow Section weight data. Sizes 10×10mm to 80×80mm, thickness 0.30mm to 8.00mm. Applications and grade specifications included.",
      fileType: "PDF",
      fileSize: "~350 KB",
    },
    {
      id: "oil-gas",
      image: "/images/Oil & Gas Datasheet.png",
      title: "Oil & Gas Product Datasheet",
      desc: "Technical datasheet for OCTG and API grade premium tube & pipe products. ERW, HFIW, TIG, CDW, Seamless LSAW specifications and compliance data.",
      fileType: "PDF",
      fileSize: "~600 KB",
    },
    {
      id: "company-overview",
      image: "/images/Company Overview Table.png",
      title: "Company Overview Table",
      desc: "One-page summary: headquarters, core industry, specialization, registration details, and technical capabilities for vendor registration.",
      fileType: "PDF",
      fileSize: "~200 KB",
    },
    {
      id: "service-brochure",
      image: "/images/Engineering Services Brochure.png",
      title: "Engineering Services Brochure",
      desc: "Comprehensive brochure covering all 12 engineering services — from Greenfield consultancy to automation solutions, machine manufacturing, and quality systems.",
      fileType: "PDF",
      fileSize: "~1 MB",
    },
  ];

  return (
    <Section id="downloads-catalog" style={{ background: "#ffffff" }}>
      <SectionHeading
        label="AVAILABLE DOCUMENTS"
        title="Technical Downloads"
        subtitle="All documents are available free of charge. Click to request via email or download directly."
        theme="light"
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 20,
      }}>
        {downloads.map((doc, i) => (
            <DownloadCard
              key={doc.id}
              {...doc}
              requested={requested.includes(doc.id)}
              onDownload={markRequested}
            />
        ))}
      </div>

      {requested.length > 0 && (
        <Reveal>
          <div style={{
            marginTop: 32,
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: 12, padding: 20,
            textAlign: "center", fontSize: 14, color: "#22c55e",
          }}>
            ✓ Download request received! Our team will email you the requested documents shortly at infodecotube@gmail.com
          </div>
        </Reveal>
      )}
    </Section>
  );
}

// ── Request by Email ──────────────────────────────────────
function RequestByEmail() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", doc: "", message: "" });

  return (
    <Section id="request-form" style={{ background: "#ffffff", paddingBottom: "100px" }}>
      <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
        {/* Form Container with dark theme and shadow */}
        <div style={{
          background: "#171717",
          borderRadius: 20,
          position: "relative",
          zIndex: 1,
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
          overflow: "hidden",
        }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.03), transparent)",
            borderRadius: 20,
            padding: "clamp(48px, 6vw, 80px) clamp(24px, 4vw, 60px)",
            position: "relative",
            zIndex: 1,
          }}>
            <SectionHeading label="REQUEST DOCUMENTS" title="Email Request Form" center theme="dark" />
            
            {submitted ? (
              <Reveal>
                <div style={{ textAlign: "center", padding: "40px 0", color: "#ffffff" }}>
                  <div style={{ fontSize: 44, marginBottom: 16 }}>✅</div>
                  <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Request Sent!</div>
                  <div style={{ color: "#aaaaaa", fontSize: 14 }}>We will get back to you shortly at {form.email}.</div>
                </div>
              </Reveal>
            ) : (
              <Reveal delay={0.1}>
                <div style={{ position: "relative", zIndex: 3 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                    {[
                      { key: "name", label: "YOUR NAME *", placeholder: "Full name" },
                      { key: "email", label: "EMAIL ADDRESS *", placeholder: "email@company.com" },
                    ].map(({ key, label, placeholder }) => (
                      <div key={key}>
                        <label style={{ display: "block", fontSize: 10, color: "#aaaaaa", letterSpacing: 2, marginBottom: 8 }}>{label}</label>
                        <input
                          value={form[key]}
                          onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                          placeholder={placeholder}
                          style={{
                            width: "100%", background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
                            padding: "12px 14px", color: "#ffffff", fontSize: 14,
                            fontFamily: "inherit", outline: "none", boxSizing: "border-box",
                          }}
                          onFocus={e => e.target.style.borderColor = "#ffffff"}
                          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                        />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", fontSize: 10, color: "#aaaaaa", letterSpacing: 2, marginBottom: 8 }}>DOCUMENTS REQUIRED</label>
                    <select
                      value={form.doc}
                      onChange={e => setForm(p => ({ ...p, doc: e.target.value }))}
                      style={{
                        width: "100%", background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
                        padding: "12px 14px", color: form.doc ? "#ffffff" : "#666666",
                        fontSize: 14, fontFamily: "inherit", outline: "none",
                      }}
                    >
                      <option value="">Select document...</option>
                      <option>Product Catalog (Full)</option>
                      <option>Round Tube Weight Chart</option>
                      <option>RHS Weight Chart</option>
                      <option>SHS Weight Chart</option>
                      <option>Company Introduction Letter</option>
                      <option>Oil & Gas Product Datasheet</option>
                      <option>Engineering Services Brochure</option>
                      <option>All Documents</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: "block", fontSize: 10, color: "#aaaaaa", letterSpacing: 2, marginBottom: 8 }}>ADDITIONAL NOTES</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="Any specific requirements, product grades, or custom documentation needed..."
                      rows={3}
                      style={{
                        width: "100%", background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
                        padding: "12px 14px", color: "#ffffff", fontSize: 14,
                        fontFamily: "inherit", outline: "none", resize: "vertical",
                        boxSizing: "border-box",
                      }}
                      onFocus={e => e.target.style.borderColor = "#ffffff"}
                      onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>
                  <button
                    onClick={() => { if (form.name && form.email) setSubmitted(true); }}
                    style={{
                      width: "100%",
                      background: "#ffffff",
                      border: "none", borderRadius: 10, padding: "16px",
                      color: "#111111", fontWeight: 800, fontSize: 13, letterSpacing: 3,
                      cursor: "pointer", fontFamily: "inherit",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >
                    SEND REQUEST →
                  </button>
                </div>
              </Reveal>
            )}
          </div>
        </div>

      </div>
    </Section>
  );
}

// ── Downloads Page ────────────────────────────────────────
export default function DownloadsPage() {
  return (
    <>
      <DownloadsHero />
      <DownloadsCatalog />
      <RequestByEmail />
    </>
  );
}
