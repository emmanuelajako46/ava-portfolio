## Ava Haust Portfolio

A sleek and modern portfolio website for Ava Haust, built with React, TailwindCSS, and Dark/Light mode support. The portfolio showcases projects, skills, services, and testimonials with interactive components and smooth animations using GSAP.

## Features

Fully responsive and mobile-friendly design.

Dark and Light mode toggle with smooth transitions.

TailwindCSS for utility-first styling.

Animated sections using GSAP and ScrollTrigger.

Component-based React structure.

Carousel, services grid, FAQ, CTA, and stack tabs.

## Installation

Clone the repository:

git clone https://github.com/your-username/ava-portfolio.git
cd ava-portfolio


## Install dependencies:

npm install
# or
yarn install


Start the development server:

npm run dev
# or
yarn dev


Open your browser at http://localhost:5173
 (Vite default port).

## TailwindCSS

This project uses TailwindCSS for styling:

Utility-first classes (bg-card, text-foreground, px-6, etc.) are used throughout.

Tailwind configuration is standard; you can extend it in tailwind.config.js if needed.

## Custom CSS variables are defined for dark/light mode:

:root {
  --background: #F9F9F8;
  --foreground: #1A1A19;
  --bg-card: #FFFFFF;
}

.dark {
  --background: #1A1A19;
  --foreground: #F9F9F8;
  --bg-card: #20201F;
}

body {
  @apply bg-background text-foreground transition-colors duration-300;
}


--background → page background

--foreground → main text color

--bg-card → card/container backgrounds

## To update dark mode colors, simply modify the values inside the .dark class.

Dark / Light Mode Functionality

Dark and light mode is handled using the ThemeContext in:

/ava-portfolio/src/context/ThemeContext.jsx

Key Features

Provides theme state ('light' or 'dark') and toggleTheme function.

Stores user preference in localStorage.

Applies .dark class to the root <html> element.

## Components use the theme state to conditionally style elements.

Example usage in a component:

import { useTheme } from '../context/ThemeContext';

export default function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}


## Tailwind dark classes (e.g., dark:bg-background, dark:text-foreground) also work seamlessly with this context.

Folder Structure
ava-portfolio/
├─ public/                  # Static assets like images, favicon
├─ src/
│  ├─ components/           # Reusable React components
│  ├─ context/              # ThemeContext for dark/light mode
│  ├─ stacks/               # Stack images and data
│  ├─ App.jsx               # Main React app
│  └─ main.jsx              # React entry point
├─ tailwind.config.js
├─ package.json
└─ index.html

## How to Add or Update Dark/Light Mode Colors

Open your global CSS (e.g., index.css) where variables are defined.

Update the colors under :root for light mode.

Update the colors under .dark for dark mode.

Components will automatically use the updated colors via Tailwind bg-background, text-foreground, etc., or custom variable usage.

Deployment

## Build the project for production:

npm run build
# or
yarn build


## Deploy on any static hosting (Vercel, Netlify, GitHub Pages).

Credits

React.js – Frontend framework

TailwindCSS – Styling

GSAP – Animations and scroll triggers

Lucide Icons – Icons for buttons and UI elements