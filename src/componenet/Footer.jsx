// ============================================================
//  DECOTUBE — Footer
// ============================================================
import { Link } from "react-router-dom";
import { COLORS, COMPANY, NAV_ITEMS } from "../data/constants";

export default function Footer() {
  return (
    <footer style={{
      background: COLORS.bgDark,
      borderTop: `1px solid ${COLORS.border}`,
      padding: "72px clamp(16px, 6vw, 80px) 32px",
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.3fr",
          gap: "clamp(24px, 4vw, 56px)",
          marginBottom: 56,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 9,
                background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.steelBright})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: 19, color: COLORS.bg,
              }}>D</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: 3, color: COLORS.steelBright }}>DECOTUBE</div>
                <div style={{ fontSize: 9, letterSpacing: 2, color: COLORS.textMuted }}>INDIA PVT. LTD.</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.85, maxWidth: 280 }}>
              A Trust in Stainless Steel. Manufacturer & engineering consultancy for premium Tube & Pipe solutions — serving diverse industries across India.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: 11, color: COLORS.accent, letterSpacing: 3, fontWeight: 700, marginBottom: 20 }}>NAVIGATION</div>
            {NAV_ITEMS.map(item => (
              <Link
                key={item.name}
                to={item.path}
                style={{ display: "block", textDecoration: "none", fontSize: 13, color: COLORS.textMuted, marginBottom: 12, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = COLORS.steel}
                onMouseLeave={e => e.target.style.color = COLORS.textMuted}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Products */}
          <div>
            <div style={{ fontSize: 11, color: COLORS.accent, letterSpacing: 3, fontWeight: 700, marginBottom: 20 }}>PRODUCTS</div>
            {["Round Welded Tubes", "Rectangular Hollow Section", "Square Hollow Section", "Oil & Gas Premium Tubes"].map(p => (
              <Link
                key={p}
                to="/products"
                style={{ display: "block", textDecoration: "none", fontSize: 13, color: COLORS.textMuted, marginBottom: 12, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = COLORS.steel}
                onMouseLeave={e => e.target.style.color = COLORS.textMuted}
              >
                {p}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, color: COLORS.accent, letterSpacing: 3, fontWeight: 700, marginBottom: 20 }}>CONTACT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <div style={{ fontSize: 10, color: COLORS.textMuted, letterSpacing: 1, marginBottom: 4 }}>HEADQUARTERS</div>
                <div style={{ fontSize: 12, color: COLORS.steel, lineHeight: 1.7 }}>{COMPANY.hq}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: COLORS.textMuted, letterSpacing: 1, marginBottom: 4 }}>WORKS</div>
                <div style={{ fontSize: 12, color: COLORS.steel, lineHeight: 1.7 }}>{COMPANY.works}</div>
              </div>
              <div>
                <a href={`mailto:${COMPANY.email}`} style={{ display: "block", fontSize: 12, color: COLORS.accent, marginBottom: 4, textDecoration: "none" }}>{COMPANY.email}</a>
                <div style={{ fontSize: 12, color: COLORS.steel }}>{COMPANY.phone1}</div>
                <div style={{ fontSize: 12, color: COLORS.steel }}>{COMPANY.phone2}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${COLORS.border}`,
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <div style={{ fontSize: 12, color: COLORS.textMuted }}>
            © 2024 Decotube India Private Limited. All rights reserved.
          </div>
          <div style={{ fontSize: 12, color: COLORS.textMuted }}>
            Made with precision in Indore, MP
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
