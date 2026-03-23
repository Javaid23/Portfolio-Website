# Javaid Butt Portfolio

Production-ready portfolio website built with Next.js 14, TypeScript, Tailwind CSS v3, Framer Motion, and react-hook-form.

## Features

- App Router architecture with reusable section components
- Dark cyber-inspired design system with responsive layout
- Animated section reveal (`whileInView`) and staggered cards/badges
- Mobile hamburger navigation with fullscreen menu
- Project showcase fed from typed data files
- Contact section with validation, clipboard copy, and mailto submit flow
- SEO metadata with OpenGraph and Twitter card tags

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v3
- Framer Motion
- lucide-react
- react-hook-form
- clsx
- next/font/google (Inter)

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build And Start

```bash
npm run build
npm start
```

## Folder Structure

```txt
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── SkillBadge.tsx
│   └── Skills.tsx
├── data/
│   ├── projects.ts
│   └── skills.ts
├── next-env.d.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Deploy To Vercel

1. Push this project to a GitHub repository.
2. Go to Vercel and click `Add New...` then `Project`.
3. Import your repository and keep default Next.js build settings.
4. Click `Deploy`.
5. After deployment, update metadata URL in `app/layout.tsx` with your production domain.

## Customization Notes

- Edit personal information in `components/Hero.tsx`, `components/About.tsx`, and `components/Footer.tsx`.
- Add your profile photo as `public/profile.jpg` to show it in the circular hero avatar.
- Add or update projects in `data/projects.ts`.
- Add or update categorized skills in `data/skills.ts`.
- Change design tokens in `tailwind.config.ts` and `app/globals.css`.
