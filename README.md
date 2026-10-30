# IronCore Fitness — Portfolio Demonstration Website

A modern, high-performance web application designed for **IronCore Fitness**, a fictional elite strength and conditioning facility. Built specifically as a client-ready showcase demonstrating modern web architecture, athletic visual hierarchy, responsive UX design, and conversion-focused calls to action.

---

## 🚀 Live Demo & Tech Stack

* **Core Framework:** React 18 + Vite 6
* **Styling & Design System:** Tailwind CSS (extended custom dark palette: Obsidian `#0A0C10`, Slate `#12161F`, Athletic Amber `#F59E0B`)
* **Typography:** Montserrat (Headings) & Inter (Body)
* **Iconography:** Lucide React & Optimized Inline SVGs
* **Imagery:** Licensed, high-resolution fitness photography via Unsplash CDN
* **Deployment:** Pre-configured for single-command builds with Vite

---

## 📁 Project Structure

```
ironcore-fitness/
├── index.html                  # HTML5 entry with Google Fonts & athletic favicon
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind custom palette & font extensions
├── postcss.config.js           # PostCSS setup
├── src/
│   ├── main.jsx                # React DOM mount point
│   ├── App.jsx                 # Main layout & state orchestration
│   ├── index.css               # Global Tailwind directives & dark-mode scrollbars
│   ├── data/
│   │   ├── facilitiesData.js   # Equipment zones, specs, and imagery
│   │   ├── membershipData.js   # Tiers, demo prices, and included amenities
│   │   ├── trainersData.js     # Coaching staff, credentials, and specialties
│   │   └── galleryData.js      # Categorized facility photography
│   └── components/
│       ├── Navbar.jsx          # Sticky blur header with live hours indicator & mobile drawer
│       ├── Hero.jsx            # High-impact headline, hero CTAs & quick stats
│       ├── About.jsx           # Architectural philosophy & capacity standards
│       ├── Facilities.jsx      # Filterable zone showcase (Strength, Recovery, Turf, etc.)
│       ├── Memberships.jsx     # Tier comparison cards with demo pricing labels
│       ├── Trainers.jsx        # Coach profiles with consultation enquiry triggers
│       ├── Gallery.jsx         # Categorized photo gallery with interactive Lightbox
│       ├── ScheduleLocation.jsx# Dynamic "Open Now" calculator, schedule & mock map
│       ├── ContactSection.jsx  # Direct WhatsApp trigger, contact form & FAQ accordion
│       ├── EnquiryModal.jsx    # Universal enquiry modal with pre-filled context
│       └── Footer.jsx          # Portfolio disclaimers, quick links & social shortcuts
```

---

## 🛠️ How to Install and Run Locally

### Prerequisites
* **Node.js**: v18.0.0 or later (Node v24+ tested)
* **npm**: v9.0.0 or later

### Step-by-Step Setup

1. **Navigate to the project directory:**
   ```bash
   cd "C:\Users\ANKITA DAS\.gemini\antigravity\scratch\ironcore-fitness"
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to view the website with instant Hot Module Replacement (HMR).

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## ⚡ Key Features & UX Implementations

1. **Portfolio Demonstration Disclaimers:**
   * Prominent header notification and pricing badges indicating all membership prices and operational rosters are illustrative demonstration data.
   * Zero fabricated customer reviews or misleading member claims.

2. **Full Mobile & Desktop Responsiveness:**
   * Smooth hamburger slide-out navigation on smartphones and tablets.
   * Responsive multi-column grid layouts for facilities, pricing cards, and trainers.

3. **Universal Interactive Enquiry System:**
   * Every CTA button ("Book a Visit", "Enquire About Performance", "Request Consultation", etc.) connects to a centralized `EnquiryModal` with context pre-selected.
   * Full keyboard accessibility with ESC key close and outside-click dismiss.

4. **Dynamic Hours & Real-Time Status:**
   * Automatically calculates current day and local hour to display an active "Open Now" or "Opening Soon" badge.

5. **Direct WhatsApp Integration:**
   * Uses `https://wa.me/15550194766?text=...` with URL-encoded greeting and enquiry intent ready for mobile click-to-chat.

6. **Interactive Gallery Lightbox:**
   * Full-screen preview modal with next/previous keyboard and click controls.

---

## 📋 Limitations & Production Recommendations

Before taking this concept to a commercial production launch for a real paying gym client, consider the following enhancements:

* **Backend / CRM Integration:** The current contact form and modal log submissions client-side for presentation purposes. In production, connect the form to an API route, serverless endpoint, or CRM (e.g. Supabase, HubSpot, or Resend for automated transactional emails).
* **Live Interactive Map:** The location section uses a stylized vector map graphic to avoid requiring a paid Google Maps Platform API key. For a physical gym, replace this with an embedded Google Map iframe or Leaflet.js with OpenStreetMap.
* **Payment Gateway:** Intentionally omitted per project requirements. To accept real memberships, integrate Stripe Elements or Mindbody/Glofox member management widgets.
* **Custom Domain & SSL:** Deployable with zero configuration to Vercel, Netlify, or Cloudflare Pages.
