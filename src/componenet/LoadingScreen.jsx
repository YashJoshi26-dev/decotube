// ============================================================
//  DECOTUBE — Loading Screen
// ============================================================
import { useState, useEffect } from "react";
import { COLORS } from "../data/constants";

export default function LoadingScreen({ onDone }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const t = setInterval(() => {
      p += Math.random() * 15 + 3;
      if (p >= 100) {
        p = 100;
        clearInterval(t);
        setTimeout(() => onDone(), 500);
      }
      setPct(Math.min(Math.floor(p), 100));
    }, 75);
    return () => clearInterval(t);
  }, [onDone]);

  const circumference = 2 * Math.PI * 38;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: COLORS.bgDark,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: 0,
    }}>
      {/* Spinning ring */}
      <div style={{ position: "relative", width: 100, height: 100, marginBottom: 32 }}>
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="50" cy="50" r="38" fill="none" stroke={COLORS.border} strokeWidth="2" />
          <circle
            cx="50" cy="50" r="38"
            fill="none"
            stroke={COLORS.accentBright}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * pct) / 100}
            style={{ transition: "stroke-dashoffset 0.1s ease" }}
          />
        </svg>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Courier New', monospace",
          fontSize: 14, fontWeight: 700,
          color: COLORS.steelBright,
        }}>
          {pct}%
        </div>
      </div>

      {/* Brand */}
      <div style={{
        fontFamily: "'Courier New', monospace",
        fontSize: "clamp(22px, 5vw, 32px)",
        fontWeight: 900,
        letterSpacing: 10,
        color: COLORS.steelBright,
        marginBottom: 6,
      }}>
        DECOTUBE
      </div>
      <div style={{
        fontSize: 10, letterSpacing: 5,
        color: COLORS.textDim, marginBottom: 36,
      }}>
        INDIA PRIVATE LIMITED
      </div>

      {/* Progress bar */}
      <div style={{
        width: 220, height: 2,
        background: COLORS.border,
        borderRadius: 1,
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accentBright})`,
          transition: "width 0.1s ease",
        }} />
      </div>

      <div style={{
        marginTop: 20, fontSize: 10, letterSpacing: 3,
        color: COLORS.textMuted,
      }}>
        A TRUST IN STAINLESS STEEL
      </div>
    </div>
  );
}
