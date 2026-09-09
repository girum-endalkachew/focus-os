# FocusOS — Operating System for Deep Work ⚡

A high-performance, dark-glassmorphic productivity suite built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, **PostgreSQL**, and **Prisma ORM**.

![FocusOS Design Tokens](https://img.shields.shields.io/badge/Design_System-Electric_Lime_%23B8FF3D-green)
![Tech Stack](https://img.shields.shields.io/badge/Stack-Next.js_|_TypeScript_|_Prisma-blue)

---

## 🎨 FocusOS Design System Specification

- **Primary Accent**: Electric Lime (`#B8FF3D`)
- **Background**: Deep Obsidian (`#050808`)
- **Surfaces**: Emerald Glass (`#0B1510`, `#102019`)
- **Glassmorphism Effect**: `background: rgba(255, 255, 255, 0.04); backdrop-filter: blur(20px);`
- **Glow Token**: `box-shadow: 0 0 40px rgba(184, 255, 61, 0.12);`

---

## 🚀 Key Features

- **Interactive Pomodoro Engine**: 25m focus, 5m short break, 15m long break.
- **Ambient Cyber Soundscapes**: Rain, Binaural Beats, Tokyo Cafe, Static White noise.
- **Goal & Task Queue**: Real-time task tracking with instant Server Actions.
- **Project Progress Tracker**: Target vs. spent hours visualizer.
- **Performance Analytics**: Deep work charts and peak focus indicators.
- **AI Focus Coach**: Smart suggestions generated on demand.
- **Gamification & XP**: Earn levels, badges, and daily streak rewards.

---

## 🛠️ Stack & Architecture
FocusOS/
├── src/
│ ├── app/ # Next.js App Router & API Endpoints
│ ├── components/ui/ # Primitive Glassmorphic UI Components
│ ├── hooks/ # Custom Timer & State Hooks
│ ├── actions/ # Server Actions
│ └── lib/ # Prisma Client & Utilities
└── prisma/ # PostgreSQL Database Schema

text


---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/girum-endalkachew/focus-os.git

# Install dependencies
npm install

# Run database migrations
npx prisma db push

# Start development server
npm run dev
Designed and engineered with focus.
