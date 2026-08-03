# JB Power V1 — Frontend

The official frontend repository for JB Power, a premier engineering firm specializing in end-to-end residential and commercial solar installations in India. 

This repository contains the V1 implementation of the JB Power web application, built with a strict focus on a "quiet premium" design language, architectural simplicity, and evolution over perfection.

## 🏗 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint + Prettier

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:parthivqw/jb-power-frontend.git
   cd jb-power-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This will output the static files into the `dist/` directory.

## 🎨 Design System

The visual identity of JB Power is built upon a strict, premium physical engineering aesthetic. We avoid generic SaaS layouts and focus on trust, longevity, and professional restraint.

### Color Palette

- **Deep Engineering Navy**: `#102A43` (Primary, Trust, Text)
- **Warm White**: `#FAFAF8` (Section Backgrounds)
- **Solar Gold**: `#FBBF24` (Accent, Trust Indicators)
- **Deep Gold**: `#F59E0B` (Hover States)
- **Very Light Sand**: `#F5F5F0` (Secondary Backgrounds)
- **Dark Charcoal**: `#334155` (Body Text)
- **WhatsApp Green**: `#25D366` (Success / Conversion)

*All colors are mapped to design tokens in `tailwind.config.js` (`jb-navy`, `jb-white-warm`, etc.).*

## 📁 Repository Structure

```
├── docs/                  # Product and architectural documentation
├── parthiv-engineering/   # Engineering playbooks and rules
├── public/                # Static public assets
├── src/
│   ├── assets/            # Images, icons, and fonts
│   ├── components/        # Reusable React components
│   │   ├── layout/        # Shell components (Navbar, Footer, Layout)
│   │   ├── sections/      # Page sections (Hero, Trust, etc.)
│   │   └── ui/            # Generic UI components (Button, Input)
│   ├── constants/         # Static configuration and data
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and API clients
│   ├── styles/            # Global CSS (index.css)
│   ├── types/             # TypeScript definitions
│   ├── App.tsx            # Main application entry
│   └── main.tsx           # React DOM rendering
└── tailwind.config.js     # Tailwind design system configuration
```

## 📜 Development Philosophy

- **Evolution over Perfection:** Build the smallest production-quality V1 possible. Do not gold-plate.
- **Surgical Scope:** Implement features exactly as specified in the current milestone. Do not anticipate future phases.
- **Component Boundaries:** Keep architecture simple and maintainable. Avoid complex state management unless strictly necessary.

## 📄 License

Proprietary and Confidential.
All rights reserved © JB Power.
