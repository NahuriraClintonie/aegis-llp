## 📁 Project Structure: `aegis-llp`

```plaintext
aegis-llp/
├── app/                         # Next.js App Router pages
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Top Page (Landing)
│   ├── about/                  # /about page
│   ├── companies/              # /companies listing
│   │   └── [id]/               # /companies/[id] detail
│   ├── projects/               # Projects showcase
│   ├── blog/                   # Blog & updates
│   ├── news/                   # News & press
│   ├── careers/                # Careers page
│   ├── contact/                # Contact page
│   └── globals.css             # Global styles (reset only)
│
├── components/                 # UI components (atomic design)
│   ├── atoms/                  # Buttons, Inputs, Labels
│   ├── molecules/              # Cards, Form groups
│   ├── organisms/              # Sections (Hero, Footer)
│   └── layouts/                # Header, Footer, Layout wrappers
│
├── features/                   # Feature-specific logic
│   ├── companies/              # Company fetching logic
│   ├── projects/               # Project card logic
│   └── blog/                   # Blog utilities
│
├── styles/                     # Vanilla Extract styles
│   ├── atoms/                  # Individual component styles
│   ├── tokens/                 # Design tokens (colors, spacing, typography)
│   └── theme.css.ts            # Light/Dark or Default theme
│
├── lib/                        # Utilities, API clients, constants
│   ├── api.ts                  # API helper functions
│   ├── metadata.ts             # SEO metadata generators
│   └── constants.ts            # Static constants
│
├── public/                     # Static assets (images, favicon, etc.)
│
├── types/                      # Global TypeScript types
│   └── index.d.ts
│
├── .eslintrc.js                # ESLint config
├── tsconfig.json               # TypeScript config
└── next.config.js              # Next.js config
```
