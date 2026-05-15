# Decotube India Pvt. Ltd. — Website

Premium industrial website for Decotube India Private Limited.
"A Trust in Stainless Steel"

---

## 📁 Project Structure

```
decotube/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                     # React entry point
    ├── App.jsx                      # Router + Layout (Navbar, Footer, Loading)
    ├── index.css                    # Global reset styles
    │
    ├── data/
    │   └── constants.js             # All company data, services, products, colors
    │
    ├── componenet/                  # (matches your existing folder name)
    │   ├── Navbar.jsx               # Top navigation bar
    │   ├── Footer.jsx               # Site footer
    │   ├── LoadingScreen.jsx        # Animated intro loading screen
    │   └── UI.jsx                   # Shared: Reveal, AnimCounter, PipeCanvas,
    │                                #   ParticleBg, CTAButton, InfoCard,
    │                                #   SectionHeading, Section, PipeIcon
    │
    └── pages/
        ├── HomePage.jsx             # Hero + Stats + Services Preview + Why Us + CTA
        ├── CompanyPage.jsx          # About + Vision/Mission + Competencies + Leadership
        ├── ProductsPage.jsx         # Full catalog + Weight Charts + Grades & Finishes
        ├── ServicesPage.jsx         # 12 services + Category filter + Process + Industries
        ├── DownloadsPage.jsx        # PDF downloads + Email request form
        └── ContactPage.jsx          # Quote form + Contact details + Response info
```

---

## 🚀 Setup & Run

```bash
# 1. Navigate to project folder
cd decotube

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 🎨 Tech Stack

- **React 18** + **React Router DOM v7**
- **Vite 6** (build tool)
- **Vanilla CSS** in JS (no Tailwind dependency needed)
- **Canvas API** for 3D pipe animations & particle background
- **IntersectionObserver** for scroll-reveal animations

---

## 📌 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | Fullscreen hero, stats, services preview, why-us, CTA |
| `/company` | CompanyPage | About, vision/mission, competencies, leadership |
| `/products` | ProductsPage | Product catalog with weight charts and specs |
| `/services` | ServicesPage | 12 services with category filter and process steps |
| `/downloads` | DownloadsPage | PDF catalog and brochure download/request |
| `/contact` | ContactPage | Quote form, contact info, response timelines |

---

## 📞 Company Info

- **HQ:** 81, Mangal Nagar (Sukhaliya), Indore, MP 452010
- **Works:** Plot I-71, MPIDC, Jetapur-Palasia, Dhar, MP 454001
- **Email:** infodecotube@gmail.com
- **Phone:** +91 97555 98666 / +91 88814 11181
- **GST:** 23AAJCD3322N1ZO

---

## 🔧 Customization

All company data, colors, and content is centralized in:
`src/data/constants.js`

Update `COMPANY`, `SERVICES`, `PRODUCTS`, `COLORS`, `STATS` there and
changes will propagate across all pages automatically.
