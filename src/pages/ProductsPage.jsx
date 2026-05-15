// ============================================================
//  DECOTUBE — Products Page
// ============================================================
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS, PRODUCTS } from "../data/constants";
import { Reveal, Section, SectionHeading, PipeIcon, CTAButton, VideoBackground } from "../componenet/UI";

// ── Page Hero ─────────────────────────────────────────────
function ProductsHero() {
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
      <VideoBackground src="/videos/Product_section.mp4" />
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 4, padding: "4px 16px", fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>PRODUCT RANGE</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, color: "#ffffff", margin: "0 0 20px", letterSpacing: -1, lineHeight: 1.05 }}>
            Precision<br />
            <span style={{ color: "#ffffff" }}>Steel Products</span>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", maxWidth: 560, lineHeight: 1.85 }}>
            Stainless Steel Welded Round Pipes, RHS, SHS tubes, and Oil &amp; Gas premium grade products. ASTM A554 / A249 / A213 compliant. Custom lengths and finishes available.
          </p>
        </Reveal>
      </div>
    </section>
  );
}


// ── Spec Table ────────────────────────────────────────────
function SpecTable({ specs }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: 2, marginBottom: 12 }}>SPECIFICATIONS</div>
      {specs.map(({ label, value }) => (
        <div key={label} style={{
          display: "flex", gap: 12,
          padding: "9px 0",
          borderBottom: `1px solid ${COLORS.border}`,
        }}>
          <div style={{ width: 130, fontSize: 11, color: COLORS.textMuted, letterSpacing: 0.5, flexShrink: 0 }}>{label}</div>
          <div style={{ fontSize: 13, color: COLORS.steel }}>{value}</div>
        </div>
      ))}
    </div>
  );
}

// ── Weight Chart ──────────────────────────────────────────
function WeightChart({ data, productId }) {
  if (!data || data.length === 0) return (
    <div style={{
      background: COLORS.bgDark, border: `1px solid ${COLORS.border}`,
      borderRadius: 10, padding: 20, fontSize: 13, color: COLORS.textMuted, textAlign: "center",
    }}>
      Weight charts available on request. Contact us for detailed technical specifications.
    </div>
  );

  const thicknesses = ["0.60", "0.70", "0.80", "0.90", "1.00", "1.20", "1.50", "2.00", "2.50", "3.00"];
  const keyMap = { "0.60": "w060", "0.70": "w070", "0.80": "w080", "0.90": "w090", "1.00": "w100", "1.20": "w120", "1.50": "w150", "2.00": "w200", "2.50": "w250", "3.00": "w300" };

  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: 2, marginBottom: 12 }}>WEIGHT CHART (kg/meter)</div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 500 }}>
        <thead>
          <tr style={{ background: COLORS.surfaceLight }}>
            <th style={{ padding: "8px 12px", textAlign: "left", color: COLORS.accent, fontSize: 10, letterSpacing: 1, borderBottom: `1px solid ${COLORS.border}`, whiteSpace: "nowrap" }}>
              SIZE (mm)
            </th>
            {thicknesses.map(t => (
              <th key={t} style={{ padding: "8px 8px", textAlign: "center", color: COLORS.textMuted, fontSize: 10, borderBottom: `1px solid ${COLORS.border}`, whiteSpace: "nowrap" }}>
                {t}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.size} style={{ background: i % 2 === 0 ? "transparent" : COLORS.bgDark }}>
              <td style={{ padding: "7px 12px", color: COLORS.steelBright, fontWeight: 600, fontSize: 12, borderBottom: `1px solid ${COLORS.border}33`, whiteSpace: "nowrap" }}>
                {row.size}
              </td>
              {thicknesses.map(t => {
                const val = row[keyMap[t]];
                return (
                  <td key={t} style={{
                    padding: "7px 8px", textAlign: "center",
                    color: val ? COLORS.steel : COLORS.textMuted,
                    borderBottom: `1px solid ${COLORS.border}33`,
                    fontSize: 11,
                  }}>
                    {val || "—"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 10, fontSize: 11, color: COLORS.textMuted }}>
        * Thickness values shown in mm. Weight values in kg/meter. Custom lengths 3m–10m available.
      </div>
    </div>
  );
}

// ── Product Card ──────────────────────────────────────────
function ProductCard({ product, isOpen, onToggle }) {
  return (
    <div style={{
      position: "relative",
      zIndex: isOpen ? 100 : 1,
      marginBottom: 32,
    }}>
      {/* Video Container */}
      <div
        onClick={onToggle}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 400,
          margin: "0 auto",
          aspectRatio: "1/1",
          background: COLORS.bgDark,
          borderRadius: 24,
          overflow: "hidden",
          cursor: "pointer",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          border: "none",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
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
            objectFit: "contain",
            zIndex: 0,
            transform: "scale(1.08)", // Slight scale to push watermark out of frame
          }}
        >
          <source src={product.video} type="video/mp4" />
        </video>

        {/* Plus/Minus toggle in corner */}
        <div style={{
          position: "absolute",
          top: 24,
          right: 24,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: isOpen ? "#ffffff" : "rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
          border: `1px solid rgba(255,255,255,0.2)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: isOpen ? "#000000" : "#ffffff", fontSize: 20,
          zIndex: 2,
          transition: "all 0.3s",
        }}>
          {isOpen ? "−" : "+"}
        </div>
      </div>

      {/* Info below video */}
      <div style={{ marginTop: 24, padding: "0 4px", maxWidth: 440, margin: "0 auto" }}>
        <div style={{ fontSize: 11, color: COLORS.accent, letterSpacing: 3, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>{product.sub}</div>
        <div style={{ fontWeight: 900, fontSize: "clamp(22px, 2.2vw, 28px)", color: COLORS.steelBright, letterSpacing: -0.5, lineHeight: 1.1 }}>{product.title}</div>
      </div>

      {/* Expanded Detail drops down below the card */}
      {isOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          marginTop: 24,
          background: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 24,
          padding: 32,
          zIndex: 10,
          boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40 }}>
            <div>
              <SpecTable specs={product.specs} />
              <div style={{
                background: `linear-gradient(135deg, ${COLORS.surfaceLight}, transparent)`,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 12,
                padding: 20,
              }}>
                <div style={{ fontSize: 10, color: COLORS.textMuted, letterSpacing: 2, marginBottom: 8 }}>APPLICATIONS</div>
                <div style={{ fontSize: 14, color: COLORS.steelBright, lineHeight: 1.6 }}>{product.application}</div>
              </div>
            </div>
            <div>
              <WeightChart data={product.weightChart} productId={product.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Products Catalog ──────────────────────────────────────
function ProductsCatalog() {
  const [openProduct, setOpenProduct] = useState(null);
  const navigate = useNavigate();

  return (
    <Section id="catalog">
      <SectionHeading
        label="FULL CATALOG"
        title="All Product Lines"
        subtitle="Click any product to expand full specifications and weight charts."
      />
      <div className="product-grid">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.id} delay={i * 0.07}>
            <ProductCard
              product={product}
              isOpen={openProduct === i}
              onToggle={() => setOpenProduct(openProduct === i ? null : i)}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ── Grades & Finishes ─────────────────────────────────────
function WhiteTechnicalSection() {
  const navigate = useNavigate();
  return (
    <Section id="technical" style={{ background: "#FFFFFF", paddingBottom: 100 }}>
      {/* Download CTA moved here */}
      <Reveal>
        <div style={{
          background: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 24, padding: 48,
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 32,
          marginBottom: 80,
          boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
        }}>
          <div>
            <div style={{ fontSize: 11, color: COLORS.accent, letterSpacing: 3, fontWeight: 700, marginBottom: 12 }}>TECHNICAL DOCUMENTATION</div>
            <div style={{ fontWeight: 900, fontSize: 24, color: COLORS.steelBright, marginBottom: 8 }}>
              Download Full Product Catalog
            </div>
            <div style={{ fontSize: 15, color: COLORS.textDim, maxWidth: 500, lineHeight: 1.6 }}>
              Complete weight charts, specifications, and application data for all product lines.
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <CTAButton onClick={() => navigate("/downloads")} variant="primary">
              📄 DOWNLOAD CATALOG
            </CTAButton>
            <CTAButton onClick={() => navigate("/contact")} variant="outline">
              REQUEST ENQUIRY
            </CTAButton>
          </div>
        </div>
      </Reveal>

      <SectionHeading label="MATERIAL" title="Grades & Surface Finishes" center theme="light" />
      
      <div className="material-grid">
        {[
          {
            title: "Steel Grades",
            items: [
              { name: "200 Series", desc: "Austenitic, economy grade, good corrosion resistance" },
              { name: "300 Series", desc: "Prime grade — 304, 316L, 321 etc. High corrosion resistance" },
              { name: "400 Series", desc: "Ferritic/Martensitic, magnetic, heat resistant" },
            ],
          },
          {
            title: "Surface Finish",
            items: [
              { name: "240 Grit", desc: "Fine finish, general industrial use" },
              { name: "320–400 Grit", desc: "Polished, architectural applications" },
              { name: "600–800 Grit", desc: "Mirror/bright polish, premium applications" },
            ],
          },
          {
            title: "Standards",
            items: [
              { name: "ASTM A554", desc: "Welded stainless steel mechanical tubing" },
              { name: "ASTM A249", desc: "Welded austenitic steel boiler tubes" },
              { name: "ASTM A213", desc: "Seamless ferritic & austenitic alloy-steel tubes" },
            ],
          },
        ].map((group, i) => (
          <Reveal key={group.title} delay={i * 0.1}>
            <div style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 24, padding: 40,
              height: "100%",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}>
              <div style={{ fontSize: 11, color: COLORS.accent, letterSpacing: 3, fontWeight: 800, marginBottom: 24 }}>
                {group.title.toUpperCase()}
              </div>
              {group.items.map(item => (
                <div key={item.name} style={{ marginBottom: 20 }}>
                  <div style={{ fontWeight: 800, fontSize: 14, color: COLORS.steelBright, marginBottom: 4 }}>{item.name}</div>
                  <div style={{ fontSize: 13, color: COLORS.textDim, lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// ── Products Page ─────────────────────────────────────────
export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsCatalog />
      <WhiteTechnicalSection />
    </>
  );
}
