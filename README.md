# 🎯 Job Swipe – Smart Job Discovery & Apply Flow

A frontend-focused product demo for a modern college placement platform, designed to help students **discover jobs, review eligibility, and apply intentionally** using a swipe-based interface.

Built as part of a frontend engineering assignment, this project emphasizes **clean architecture, state-driven UX, and realistic product decisions** over feature overload or backend complexity.

🔗 **Live Demo:**  
      https://job-swipe-frontend.vercel.app/

---

## ✨ Features

      -  Swipe-based job discovery (left = skip, right = interested)
      -  Diverse technical roles  
        *(Frontend, Backend, Python/Django, AI/ML, DevOps, Mobile)*
      -  Job detail preview
        - Role description
        - Eligibility badges (CGPA & branches)
      -  Confirmation modal to prevent accidental applications
      -  Apply flow with mocked ATS scoring
        - Match percentage
        - Matched & missing keywords
      -  Gesture-first UX with button fallback
      -  Fully responsive (desktop + mobile)
      -  Smooth animations using Framer Motion

---

## 🧠 Design & Architecture Decisions

### 1. Feature-first structure
The project follows a feature-first folder structure to keep related logic colocated and scalable.

            src/
      ├── components/
      │ └── job/
      │ ├── JobCard.tsx
      │ ├── JobDetailModal.tsx
      │ └── ConfirmApplyModal.tsx
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

      - Discover jobs → Confirm apply → Application submitted
      - Keeps UX fast and predictable
      - Mirrors real-world swipe-based interfaces

---

### 3. UX safety: confirmation before applying

      Since swipe gestures can be accidental, a **confirmation modal** is introduced before submitting an application.  
      This ensures intentional user actions and improves trust in the apply flow.

---

### 4. Mocked ATS scoring (by design)

      ATS scoring is intentionally simplified using keyword overlap:
      - Keeps the focus on frontend architecture
      - Easy to understand and extend
      - Avoids unnecessary ML complexity for the scope of this assignment

---

### 5. Swipe UX with fallback buttons


      - Swipe gestures implemented using **Framer Motion**
      - Skip / Interested buttons act as accessible fallback
      - Visual swipe hints (LIKE / SKIP) improve clarity

---

## 🛠 Tech Stack

      - React + TypeScript  
      - Vite  
      - Framer Motion  
      - CSS-in-JS (inline styles) for rapid iteration

---

## 🚀 Getting Started Locally


      npm install
      npm run dev

      The app will run on: http://localhost:5173

## 📌 Possible Extensions

      Persist applied jobs

      Role-based skill matching

      Backend integration

      Authentication & user profiles

      Swipe analytics

## 🧑‍💻 Author

      Mahak Vishwakarma
      Built with ❤️ as a frontend engineering assignment.