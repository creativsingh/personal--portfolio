# CreativSingh — Personal Portfolio & Design Engineering Showcase

## 💻 Getting Started Locally

### 1. Clone the repository & install dependencies

```bash
git clone https://github.com/creativsingh/personal-portfolio.git
cd personal-portfolio
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the app.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── globals.css      # CSS variables, theme tokens & custom scrollbar
│   │   ├── layout.tsx       # Root layout with SEO metadata & ThemeProvider
│   │   └── page.tsx         # Main portfolio assembly page
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation header with dark/light mode toggle
│   │   ├── Hero.tsx         # Hero section & availability status
│   │   ├── Philosophy.tsx   # Core principles & Design Engineering transition
│   │   ├── Projects.tsx     # Filterable project cards
│   │   ├── ProjectModal.tsx # Deep-dive case study drawer
│   │   ├── CommunitySpeaking.tsx # PixelPeps & conference talks
│   │   ├── ToolStack.tsx    # Technical stack grid
│   │   ├── MusicPlayer.tsx  # Acoustic music preview player
│   │   ├── Contact.tsx     # Contact form & social links
│   │   ├── Footer.tsx      # Footer component
│   │   └── ThemeProvider.tsx # Client theme context
│   └── data/
│       └── persona.ts       # Structured data store for portfolio content
├── public/                  # Static assets
└── package.json             # Project dependencies & scripts
```

---

## 🌐 Deployment

This application is optimized for zero-config deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into Vercel.
3. Deploy automatically with Next.js App Router defaults.

---

## 📄 License

Designed and developed by **Ajeet Singh (CreativSingh)** © {new Date().getFullYear()}. All rights reserved.
