// ============================================================
//  DECOTUBE — App.jsx (Router + Layout)
// ============================================================
import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./componenet/Navbar";
import Footer from "./componenet/Footer";
import LoadingScreen from "./componenet/LoadingScreen";
import { ParticleBg } from "./componenet/UI";
import { COLORS } from "./data/constants";

import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import DownloadsPage from "./pages/DownloadsPage";
import ContactPage from "./pages/ContactPage";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  const [prev, setPrev] = useState(pathname);
  if (prev !== pathname) {
    window.scrollTo(0, 0);
    setPrev(pathname);
  }
  return null;
}

function AppLayout() {
  return (
    <div style={{
      background: COLORS.bg,
      color: COLORS.text,
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      overflowX: "clip",   /* "clip" = no horizontal scroll, but does NOT break position:sticky like "hidden" does */
      minHeight: "100vh",
      position: "relative",
    }}>
      <ParticleBg />
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/company"   element={<CompanyPage />} />
          <Route path="/products"  element={<ProductsPage />} />
          <Route path="/services"  element={<ServicesPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/contact"   element={<ContactPage />} />
          {/* 404 fallback */}
          <Route path="*" element={
            <div style={{
              minHeight: "60vh", display: "flex",
              flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: 16,
            }}>
              <div style={{ fontSize: 64 }}>🔩</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: COLORS.steelBright }}>404</div>
              <div style={{ color: COLORS.textDim }}>Page not found</div>
              <a href="/" style={{
                marginTop: 8,
                background: `linear-gradient(135deg, ${COLORS.accent}, #1a4499)`,
                color: "#fff", textDecoration: "none",
                borderRadius: 8, padding: "10px 24px",
                fontSize: 13, fontWeight: 700, letterSpacing: 2,
              }}>BACK HOME</a>
            </div>
          } />
        </Routes>
      </main>

      <Footer />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COLORS.bg}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.accent}; border-radius: 2px; }
        select option { background: ${COLORS.bgDark}; color: ${COLORS.text}; }
        @media (max-width: 768px) {
          /* Stack 2-col grids on mobile */
          [style*="grid-template-columns: 1fr 1fr"],
          [style*="grid-template-columns: 3fr 2fr"],
          [style*="grid-template-columns: 2fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          [style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          [style*="grid-template-columns: 1fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  if (!loaded) return <LoadingScreen onDone={handleDone} />;

  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
