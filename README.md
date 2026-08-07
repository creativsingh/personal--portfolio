# Ajeet Singh (CreativSingh) — Portfolio

> **Lead Product Designer & Design Engineer based in Delhi, India.**  
> *Designing & building enterprise SaaS, AI-assisted workflows, design systems, and growing design communities.*

---

## 🌐 Connect & Social Links

Find me across the web for product design, design engineering, community meetups, and music:

| Platform | Handle / Profile | Direct Link |
| :--- | :--- | :--- |
| 🌐 **Website** | `creativsingh.com` | [creativsingh.com](https://creativsingh.com) |
| 💼 **LinkedIn** | `in/creativsingh` | [linkedin.com/in/creativsingh](https://linkedin.com/in/creativsingh) |
| 𝕏 **X (Twitter)** | `@creativsingh` | [x.com/creativsingh](https://x.com/creativsingh) |
| 🐙 **GitHub** | `creativsingh` | [github.com/creativsingh](https://github.com/creativsingh) |
| 🎨 **Figma** | `@creativsingh` | [figma.com/@creativsingh](https://figma.com/@creativsingh) |
| 🏀 **Dribbble** | `creativsingh` | [dribbble.com/creativsingh](https://dribbble.com/creativsingh) |
| ✍️ **Medium** | `@creativsingh` | [medium.com/@creativsingh](https://medium.com/@creativsingh) |
| 🤝 **PixelPeps** | `PixelPeps Community` | [pixelpeps.com](https://pixelpeps.com) |
| 🎙️ **Commudle** | `@creativsingh` | [commudle.com/users/creativsingh](https://commudle.com/users/creativsingh) |
| 🎵 **Spotify** | `CreativSingh` | [Spotify Artist Profile](https://open.spotify.com/artist/1qcYNoMSWiByxu5i5HNFVM) |
| ✉️ **Email** | `creativsingh@gmail.com` | [Send an Email](mailto:creativsingh@gmail.com) |

---

## 🚀 Featured Case Studies

- 📦 **[Scalie](https://creativsingh.com/work/scalie)** — Enterprise Resource Management platform connecting Vendors, Clients, and Admins to replace spreadsheet-driven staffing operations.
- 🤝 **[Commudle](https://creativsingh.com/work/commudle)** — All-in-one tech community platform & event hosting ecosystem serving 120K+ attendees.
- 🌿 **[Prana AI](https://creativsingh.com/work/prana-ai)** — AI-powered health & biometric scanning platform translating telemetry into personalized daily wellness habits.
- 🍔 **[Hunger Express](https://creativsingh.com/work/hunger-express)** — Multi-sided food delivery platform for the Nigerian market spanning Customer, Delivery Partner, and Vendor apps.
- 🤖 **[Genesis AI](https://creativsingh.com/work/genesis-ai)** — Enterprise CPQ (Configure, Price, Quote) AI-assisted rule configurator.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack compilation.
- **Language**: TypeScript (Strict type safety across persona data stores and sub-routes).
- **Styling**: Tailwind CSS & Vanilla CSS Design Tokens (Custom glassmorphism & dark/light theme context).
- **Icons**: Lucide React.
- **AI Agent Standards**: Includes machine-readable [`llms.txt`](https://creativsingh.com/llms.txt) and [`robots.txt`](https://creativsingh.com/robots.txt).
- **PDF & Interactive Features**: Interactive 404 Bezier Vector Canvas (`/not-found`) & PDF Resume viewer (`/resume`).

---

## 💻 Local Development

### 1. Clone Repository & Install Dependencies
```bash
git clone https://github.com/creativsingh/personal-portfolio.git
cd personal-portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Preview Production Bundle
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── globals.css          # CSS variables, theme tokens & custom scrollbar
│   │   ├── layout.tsx           # Root layout with SEO metadata & ThemeProvider
│   │   ├── page.tsx             # Main homepage
│   │   ├── resume/              # Resume page (/resume) with PDF download & preview
│   │   ├── speaking/            # Talks & workshops route (/speaking)
│   │   ├── pixelpeps/           # PixelPeps community page (/pixelpeps)
│   │   └── work/                # Case study routes (/work/[id])
│   ├── components/              # Modular UI components
│   └── data/
│       └── persona.ts           # Central structured data store
├── public/
│   ├── llms.txt                 # Machine-readable overview for LLMs & AI crawlers
│   ├── robots.txt               # Web crawler instructions
│   └── case-studies/            # Optimized case study media assets
└── package.json
```

---

## 📄 License & Attribution

Designed & engineered by **Ajeet Singh (CreativSingh)** © 2026. All rights reserved.
