# DriveLearn - Driving School Landing Page

A modern, high-converting, responsive landing page for an accredited driving school academy, crafted with Next.js 16 App Router, React 19, Tailwind CSS v4, Framer Motion, and shadcn/ui components.

---

## 🎨 Design & Color Palette

- **Primary Accent:** `#F5B90B` (Amber Gold)
- **Deep Navy Base:** `#081839`, `#061536`, `#040e25`
- **Text & Accents:** High-contrast neutral whites, slates, and muted ambers
- **Visual Assets:** Curated, lossless WebP imagery with matching palette elements and transparent logos

---

## 🚀 Key Features

1. **Topbar & Sticky Navbar**
   - Direct phone, email, operating hours, and location links
   - Smooth navigation anchors linking to `#home`, `#about`, `#services`, `#why-choose-us`, `#testimonials`, and `#faqs`
   - Mobile-responsive drawer navigation with instant modal trigger

2. **Hero Section**
   - High-impact animated slide carousel with dynamic headlines, badges, and rating indicator
   - Direct CTA triggers for the Contact / Enrolment modal

3. **About Section**
   - Experience highlight badge (12+ Years of Excellence)
   - Dual-column feature checklist with custom bullet highlights
   - Seamless video preview modal and course exploration CTA

4. **Featured Courses & Programs Carousel**
   - Responsive multi-card carousel powered by `shadcn/ui` and `embla-carousel` with auto-play
   - 5 comprehensive driving courses (Novice Driver Foundation, Official License Preparation, Car Safety & Mechanics, Confidence Booster Sessions, Accelerated Express Program)
   - Dual-action cards: course information and direct enrolment modal trigger

5. **Why Choose Us Section**
   - 6 structured value propositions highlighting accredited training, expert mentors, modern dual-control fleet, defensive driving, flexible hours, and transparent pricing
   - Centerpiece rotating dashboard steering wheel graphic matching the `#F5B90B` theme

6. **Key Statistics Counter**
   - 4 animated stat counters: 25k+ Licensed Graduates, 45+ Certified Instructors, 60+ Dual-Control Vehicles, 98% First-Time Pass Rate

7. **Student Testimonials Carousel**
   - Verified student reviews carousel with 5-star ratings, student avatars, and location badges
   - Interactive carousel controls with autoplay and manual prev/next navigation

8. **Helpful FAQs Section**
   - Accordion-style expandable questions and answers covering permits, insurance, dual controls, lesson duration, cancellations, and home pickup
   - Embedded direct helpdesk support card with direct call and email links

9. **Interactive Enrolment & Contact Modal**
   - Powered by `shadcn/ui` Dialog and accessible global React Context
   - Centered title, subtitle, 5 clean input fields (Full Name, Phone Number, Email, Select Course, Preferred Timing), and high-contrast submit button
   - Connected to all CTA buttons across the landing page for maximum conversion

10. **Footer**
    - Brand identity, about snippet, quick navigation links, services directory, contact info, social links, and copyright statement

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) (`Dialog`, `Carousel`, `Button`)
- **Carousel Engine:** [Embla Carousel](https://www.embla-carousel.com/) + Autoplay Plugin
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
- **Fonts:** [Poppins](https://fonts.google.com/specimen/Poppins) via `next/font/google`
- **Asset Optimization:** WebP format & [Sharp](https://sharp.pixelplumbing.com/)

---

## 📂 Project Structure

```text
drive-learn/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Tailwind v4 styles and custom tokens
│   ├── layout.tsx          # Root layout with ContactModalProvider
│   └── page.tsx            # Single-page landing composition
├── components/
│   ├── cards/
│   │   ├── FeatureCard.tsx
│   │   ├── ServiceCard.tsx
│   │   └── TestimonialCard.tsx
│   ├── common/
│   │   └── ContactModal.tsx    # 5-input lead generation modal
│   ├── layout/
│   │   ├── Topbar.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── button.tsx
│       ├── carousel.tsx
│       └── dialog.tsx
├── context/
│   └── ContactModalContext.tsx # Global modal state provider
├── data/
│   ├── index.ts            # Type definitions and siteMap export
│   └── site.json           # Centralized configuration & content
├── lib/
│   ├── fonts.ts            # Google Poppins font configuration
│   └── utils.ts            # Class merging utility
├── public/
│   ├── images/             # 18 optimized WebP section assets
│   └── logo/               # Vector WebP logos (black & white variants)
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🚢 Publishing to a New Git Repository

To push this codebase to a new GitHub, GitLab, or Bitbucket repository:

```bash
# 1. Initialize git (if not already done)
git init -b main

# 2. Stage all files
git add .

# 3. Commit
git commit -m "feat: complete drive-learn landing page with #F5B90B theme"

# 4. Link your new remote repository
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git

# 5. Push to main
git push -u origin main
```

---

## 📄 License
Private & Proprietary. All rights reserved.
