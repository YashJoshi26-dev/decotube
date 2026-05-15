// ============================================================
//  DECOTUBE — Navbar
// ============================================================
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { COLORS, NAV_ITEMS } from "../data/constants";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          height: 70,
          background: scrolled ? "rgba(12,12,12,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: `1px solid ${scrolled ? "#252525" : "transparent"}`,
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(16px, 5vw, 64px)",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 9,
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.steelBright})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 19, color: scrolled ? "#fafaf8" : "#fafaf8",
            flexShrink: 0,
          }}>
            D
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: 3, color: "#ffffff", lineHeight: 1.1 }}>
              DECOTUBE
            </div>
            <div style={{ fontSize: 9, letterSpacing: 2, color: "rgba(255,255,255,0.45)", lineHeight: 1 }}>
              METAL INDIA PVT. LTD.
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            const isQuote = item.name === "GET ENQUIRY";
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  textDecoration: "none",
                  padding: isQuote ? "8px 20px" : "8px 14px",
                  fontSize: 11,
                  letterSpacing: 1.5,
                  fontWeight: 600,
                  borderRadius: isQuote ? 7 : 6,
                  color: isActive
                    ? "#ffffff"
                    : isQuote
                      ? "#0f0f0f"
                      : "rgba(255,255,255,0.70)",
                  background: isQuote
                    ? "#ffffff"
                    : isActive
                      ? "rgba(255,255,255,0.10)"
                      : "transparent",
                  border: isActive && !isQuote ? `1px solid rgba(255,255,255,0.18)` : "1px solid transparent",
                  transition: "all 0.2s",
                  position: "relative",
                  marginLeft: isQuote ? 8 : 0,
                }}
                onMouseEnter={e => {
                  if (!isActive && !isQuote) e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={e => {
                  if (!isActive && !isQuote) e.currentTarget.style.color = "rgba(255,255,255,0.70)";
                }}
              >
                {item.name}
                {/* Active dot */}
                {isActive && !isQuote && (
                  <span style={{
                    position: "absolute", bottom: 3, left: "50%", transform: "translateX(-50%)",
                    width: 3, height: 3, borderRadius: "50%",
                    background: COLORS.accentGold,
                  }} />
                )}
              </Link>
            );
          })}
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none", border: `1px solid ${COLORS.border}`,
            borderRadius: 8, padding: "8px 12px", cursor: "pointer",
            display: "none", flexDirection: "column", gap: 5,
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 2,
              background: COLORS.steel, borderRadius: 1,
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translateY(7px)"
                  : i === 2 ? "rotate(-45deg) translateY(-7px)"
                    : "scaleX(0)"
                : "none",
              transition: "all 0.3s",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        style={{
          position: "fixed", top: 70, left: 0, right: 0, zIndex: 999,
          background: "rgba(10,10,10,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid #252525`,
          maxHeight: menuOpen ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div style={{ padding: "16px 24px" }}>
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  display: "block",
                  padding: "14px 0",
                  borderBottom: `1px solid ${COLORS.border}`,
                  textDecoration: "none",
                  fontSize: 13,
                  letterSpacing: 2,
                  fontWeight: 600,
                  color: isActive ? COLORS.accentBright : COLORS.textDim,
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
