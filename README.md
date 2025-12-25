# 🎯 Job Swipe – Student Job Discovery & Apply Flow

A frontend-focused MVP for a college placement platform, designed to help students discover jobs using a swipe-based interface and apply with instant ATS feedback.

This project was built as part of a frontend engineering assignment, focusing on **clean architecture, clear state flow, and realistic UX decisions** rather than feature overload.

---

## ✨ Features

- 🔥 **Swipe-based job discovery** (left = skip, right = interested)
- 🧾 **Job detail modal**
  - Job description preview
  - Eligibility badges (CGPA & branches)
- 📊 **Apply flow with mocked ATS scoring**
  - ATS score
  - Matched & missing keywords
- 💡 **Gesture + button fallback UX**
- 📱 Fully responsive (desktop + mobile)
- 🎨 Smooth swipe animations using Framer Motion

---

## 🧠 Design & Architecture Decisions

### 1. Feature-first structure
The app is structured around features rather than generic folders to keep logic scalable and readable.

        src/
        ├── components/
        │ └── job/
        │ ├── JobCard.tsx
        │ └── JobDetailModal.tsx
        ├── pages/
        │ ├── JobSwipe.tsx
        │ └── ApplyConfirmation.tsx
        ├── api/
        │ └── jobs.api.ts
        ├── data/
        │ └── jobs.mock.json
        ├── utils/
        │ └── ats.mock.ts
        ├── types/
        │ └── job.types.ts

---

### 2. State-driven flow (no routing)
Instead of routing between pages, the app uses **state transitions**:
- Job Swipe → Apply Confirmation → Continue
- Keeps UX fast and predictable
- Matches real-world swipe interfaces (Tinder-style)

---

### 3. Mocked ATS scoring (by design)
ATS scoring is intentionally mocked using keyword overlap:
- Keeps the focus on frontend architecture
- Easy to explain and extend later
- Avoids unnecessary ML complexity for this scope

---

### 4. Swipe UX with fallback buttons
- Swipe gestures implemented using **Framer Motion**
- Skip / Interested buttons act as accessible fallback
- Visual swipe hints (LIKE / SKIP) improve clarity

---

## 🛠 Tech Stack

- **React + TypeScript**
- **Vite** for fast development
- **Framer Motion** for swipe animations
- **CSS-in-JS (inline styles)** for quick iteration

---

## 🚀 Getting Started Locally

npm install
npm run dev
The app will run on:

http://localhost:5173


🌐 Live Demo
👉 https://job-swipe-frontend.vercel.app/


📌 Future Improvements


    Persist applied jobs

    Real backend integration

    Enhanced ATS logic

    Authentication & profiles

    Swipe analytics

🧑‍💻 Author - Mahak Vishwakarma
Built with ❤️ as a frontend engineering assignment.