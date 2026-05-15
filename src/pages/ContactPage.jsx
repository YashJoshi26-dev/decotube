// ============================================================
//  DECOTUBE — Contact / Get Enquiry Page
// ============================================================
import { useState } from "react";
import { COLORS, COMPANY, SERVICES } from "../data/constants";
import { Reveal, Section, SectionHeading, VideoBackground } from "../componenet/UI";

// ── Page Hero ─────────────────────────────────────────────
function ContactHero() {
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
      <VideoBackground src="/videos/Contact_section.mp4" />
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 4, padding: "4px 16px", fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>GET IN TOUCH</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, color: "#ffffff", margin: "0 0 20px", letterSpacing: -1, lineHeight: 1.05 }}>
            Contact Us &amp;<br />
            <span style={{ color: "#ffffff" }}>Get a Enquiry</span>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", maxWidth: 520, lineHeight: 1.85 }}>
            Tell us your requirements. Our team will respond within 24 hours with a detailed technical proposal and pricing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}


// ── Enquiry Form ────────────────────────────────────────────
function QuoteForm() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    service: "", product: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Please describe your requirements";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setSubmitted(true);
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${hasError ? "#ef4444" : "rgba(255,255,255,0.1)"}`,
    borderRadius: 8,
    padding: "12px 14px",
    color: "#ffffff",
    fontSize: 14, fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  });

  if (submitted) {
    return (
      <Reveal>
        <div style={{
          background: "#171717",
          border: "1px solid rgba(34,197,94,0.25)",
          borderRadius: 16, padding: "56px 40px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: "50%",
            background: "rgba(34,197,94,0.12)",
            border: "2px solid rgba(34,197,94,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, margin: "0 auto 24px",
          }}>✅</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#22c55e", marginBottom: 10 }}>
            Enquiry Request Sent!
          </div>
          <div style={{ color: "#aaaaaa", fontSize: 14, lineHeight: 1.7, maxWidth: 400, margin: "0 auto 32px" }}>
            Thank you, <strong style={{ color: "#ffffff" }}>{form.name}</strong>! We've received your request and will email you at <strong style={{ color: "#ffffff" }}>{form.email}</strong> within 24 hours.
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", service: "", product: "", message: "" }); }}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 8, padding: "10px 24px",
              color: "#aaaaaa", fontSize: 13,
              cursor: "pointer", fontFamily: "inherit",
            }}
          >
            Submit Another Request
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={0.1}>
      <div style={{
        background: "#171717",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: "clamp(24px, 4vw, 48px)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      }}>
        <div style={{ fontSize: 11, color: "#ffffff", letterSpacing: 3, fontWeight: 700, marginBottom: 28 }}>
          ENQUIRY REQUEST FORM
        </div>

        {/* Row 1 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          {[
            { key: "name", label: "FULL NAME *", placeholder: "Your full name" },
            { key: "company", label: "COMPANY / ORGANIZATION", placeholder: "Your company" },
          ].map(({ key, label, placeholder }) => (
            <div key={key}>
              <label style={{ display: "block", fontSize: 10, color: "#aaaaaa", letterSpacing: 2, marginBottom: 8 }}>{label}</label>
              <input
                value={form[key]}
                onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                placeholder={placeholder}
                style={inputStyle(errors[key])}
                onFocus={e => e.target.style.borderColor = "#ffffff"}
                onBlur={e => e.target.style.borderColor = errors[key] ? "#ef4444" : "rgba(255,255,255,0.1)"}
              />
              {errors[key] && <div style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}>{errors[key]}</div>}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          {[
            { key: "email", label: "EMAIL ADDRESS *", placeholder: "email@company.com" },
            { key: "phone", label: "PHONE NUMBER", placeholder: "+91 XXXXX XXXXX" },
          ].map(({ key, label, placeholder }) => (
            <div key={key}>
              <label style={{ display: "block", fontSize: 10, color: "#aaaaaa", letterSpacing: 2, marginBottom: 8 }}>{label}</label>
              <input
                value={form[key]}
                onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                placeholder={placeholder}
                style={inputStyle(errors[key])}
                onFocus={e => e.target.style.borderColor = "#ffffff"}
                onBlur={e => e.target.style.borderColor = errors[key] ? "#ef4444" : "rgba(255,255,255,0.1)"}
              />
              {errors[key] && <div style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}>{errors[key]}</div>}
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: 10, color: "#aaaaaa", letterSpacing: 2, marginBottom: 8 }}>SERVICE REQUIRED</label>
            <select
              value={form.service}
              onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
              style={{ ...inputStyle(false), color: form.service ? "#ffffff" : "#666666" }}
            >
              <option value="">Select a service...</option>
              {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontSize: 10, color: "#aaaaaa", letterSpacing: 2, marginBottom: 8 }}>PRODUCT INTEREST</label>
            <select
              value={form.product}
              onChange={e => setForm(p => ({ ...p, product: e.target.value }))}
              style={{ ...inputStyle(false), color: form.product ? "#ffffff" : "#666666" }}
            >
              <option value="">Select a product...</option>
              <option>Round Welded Tubes (ASTM A554/A249)</option>
              <option>Rectangular Hollow Section (RHS)</option>
              <option>Square Hollow Section (SHS)</option>
              <option>Oil & Gas Premium Tubes (OCTG/API)</option>
              <option>Custom / Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div style={{ marginBottom: 28 }}>
          <label style={{ display: "block", fontSize: 10, color: "#aaaaaa", letterSpacing: 2, marginBottom: 8 }}>
            PROJECT REQUIREMENTS *
          </label>
          <textarea
            value={form.message}
            onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
            placeholder="Describe your project specifications..."
            rows={5}
            style={{ ...inputStyle(errors.message), resize: "vertical" }}
            onFocus={e => e.target.style.borderColor = "#ffffff"}
            onBlur={e => e.target.style.borderColor = errors.message ? "#ef4444" : "rgba(255,255,255,0.1)"}
          />
          {errors.message && <div style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}>{errors.message}</div>}
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            background: "#ffffff",
            border: "none", borderRadius: 10,
            padding: "16px",
            color: "#111111", fontWeight: 800,
            fontSize: 13, letterSpacing: 3,
            cursor: "pointer", fontFamily: "inherit",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.target.style.opacity = "0.85"}
          onMouseLeave={e => e.target.style.opacity = "1"}
        >
          SUBMIT ENQUIRY REQUEST →
        </button>
        <div style={{ textAlign: "center", marginTop: 14, fontSize: 12, color: "#666666" }}>
          Or email directly:{" "}
          <a href={`mailto:${COMPANY.email}`} style={{ color: "#ffffff", textDecoration: "none", fontWeight: 600 }}>
            {COMPANY.email}
          </a>
        </div>
      </div>
    </Reveal>
  );
}

// ── Contact Details ───────────────────────────────────────
function ContactDetails() {
  const details = [
    {
      icon: "🏢",
      title: "Headquarters",
      lines: [
        "81, Mangal Nagar (Sukhaliya)",
        "Indore, Madhya Pradesh – 452010",
      ],
    },
    {
      icon: "🏭",
      title: "Manufacturing Works",
      lines: [
        "Plot I-71, MPIDC, Jetapur-Palasia",
        "Dist. Dhar, Madhya Pradesh – 454001",
      ],
    },
    {
      icon: "📱",
      title: "Phone",
      lines: [COMPANY.phone1, COMPANY.phone2],
      isPhone: true,
    },
    {
      icon: "✉️",
      title: "Email",
      lines: [COMPANY.email],
      isEmail: true,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {details.map((d, i) => (
        <Reveal key={d.title} delay={i * 0.08}>
          <div style={{
            background: "#171717",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14, padding: 24,
            display: "flex", gap: 20, alignItems: "flex-start",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 11,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, flexShrink: 0,
            }}>
              {d.icon}
            </div>
            <div>
              <div style={{ fontSize: 10, color: "#ffffff", letterSpacing: 2, fontWeight: 700, marginBottom: 6 }}>
                {d.title.toUpperCase()}
              </div>
              {d.lines.map((line, j) => (
                d.isEmail ? (
                  <a key={j} href={`mailto:${line}`} style={{ display: "block", fontSize: 13, color: "#ffffff", textDecoration: "none", lineHeight: 1.7, fontWeight: 600 }}>{line}</a>
                ) : d.isPhone ? (
                  <a key={j} href={`tel:${line.replace(/\s/g, "")}`} style={{ display: "block", fontSize: 13, color: "#aaaaaa", textDecoration: "none", lineHeight: 1.7 }}>{line}</a>
                ) : (
                  <div key={j} style={{ fontSize: 13, color: "#aaaaaa", lineHeight: 1.7 }}>{line}</div>
                )
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ── Response Times ────────────────────────────────────────
function ResponseCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 0.08}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          height: "100%",
          position: "relative",
          borderRadius: 16,
          padding: "1.5px",
          overflow: "hidden",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? "0 10px 40px rgba(0,0,0,0.15)" : "none",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "default",
        }}
      >
        {/* Spinning conic border */}
        <div style={{
          position: "absolute",
          top: "-50%", left: "-50%", width: "200%", height: "200%",
          background: "conic-gradient(from 0deg, transparent 75%, rgba(0,0,0,0.7) 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          animation: "spin-border 1.2s linear infinite",
          zIndex: 0,
        }} />
        {/* Static border */}
        <div style={{
          position: "absolute", inset: 0,
          border: "1px solid #e5e5e5",
          borderRadius: 16,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }} />
        {/* Card content */}
        <div style={{
          position: "relative", zIndex: 2,
          background: "#171717",
          borderRadius: 15,
          padding: 24,
          textAlign: "center",
          height: "100%",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}>
          <div style={{ width: 64, height: 64, borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
            <img src={item.image} alt={item.time} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#ffffff", marginBottom: 4 }}>{item.time}</div>
          <div style={{ fontSize: 11, color: "#aaaaaa", letterSpacing: 1 }}>{item.label.toUpperCase()}</div>
        </div>
      </div>
    </Reveal>
  );
}

function ResponseInfo() {
  const items = [
    { image: "/images/Within 24hrs.png", time: "Within 24hrs", label: "Enquiry Response" },
    { image: "/images/2–3 Days.png", time: "2–3 Days", label: "Technical Proposal" },
    { image: "/images/As Required.png", time: "As Required", label: "Custom Manufacturing" },
    { image: "/images/Per Order.png", time: "Per Order", label: "Delivery Lead Time" },
  ];

  return (
    <Section id="response-info" style={{ background: "#f5f5f5" }}>
      <SectionHeading label="WHAT TO EXPECT" title="Response & Timelines" center theme="light" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 20, maxWidth: 1000, margin: "0 auto",
      }}>
        {items.map((item, i) => (
          <ResponseCard key={item.label} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}

// ── Contact Page Layout ───────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Section id="contact-main" style={{ background: "#ffffff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "clamp(24px, 4vw, 60px)", alignItems: "start" }}>
          <div>
            <SectionHeading label="REQUEST AN ENQUIRY" title="Tell Us Your Requirements" theme="light" />
            <QuoteForm />
          </div>
          <div>
            <SectionHeading label="REACH US" title="Contact Details" theme="light" />
            <ContactDetails />
          </div>
        </div>
      </Section>
      <ResponseInfo />
    </>
  );
}
