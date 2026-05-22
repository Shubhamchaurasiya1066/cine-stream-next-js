# CineStream

CineStream is a premium movie discovery web application built using Next.js 15 App Router.

This project was developed as part of Sprint 09 Frontend Architecture specialization.

The application fetches movie data from the TMDB API and delivers a modern cinematic experience with Server-Side Rendering and SEO optimization.

---

# Features

* Next.js 15 App Router
* Server-Side Rendering (SSR)
* Dynamic Routing
* SEO Metadata Generation
* TMDB API Integration
* Responsive Design
* Premium Cinematic UI
* Tailwind CSS Styling
* Dynamic Movie Pages
* Optimized Next.js Image Component

---

# Tech Stack

* Next.js 15
* React
* Tailwind CSS
* TMDB API
* React Icons

---

# Folder Structure

src/
├── app/
│    ├── page.js
│    ├── layout.js
│    ├── movie/
│    │     └── [id]/
│    │           └── page.js
│
├── components/
│    ├── Navbar.jsx
│    ├── Hero.jsx
│    ├── SearchBar.jsx
│    ├── MovieGrid.jsx
│    ├── MovieCard.jsx
│    └── Footer.jsx
│
├── lib/
│    └── tmdb.js

---

# Installation

Clone the repository:

git clone YOUR_GITHUB_REPO_LINK

Install dependencies:

npm install

Run development server:

npm run dev

Open:

http://localhost:3000

---

# Environment Variables

Create a .env.local file in the root directory:

NEXT_PUBLIC_TMDB_API_KEY=74c48650157dba1ff74921785e8f7e85

---

# SEO Optimization

This project uses generateMetadata() in dynamic routes to create SEO-friendly titles and descriptions for each movie page.

---

# Deployment

The project is deployed using Vercel.

---

# Learning Outcomes

This project helped in understanding:

* Server Components
* Client Components
* App Router Architecture
* Dynamic Metadata
* SSR in Next.js
* SEO Optimization
* File-Based Routing

---

# Author

Shubham Chaurasiya
