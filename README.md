# 🎭 Artistly.com – Performing Artist Booking Platform (Frontend Demo)

> 🚀 Built for the [Eventful India Frontend Developer Internship Assignment – June 2025]

This is a **mobile-responsive, functional frontend demo** of **Artistly.com**, a fictional performing artist booking platform. The platform connects **Event Planners** with **Artist Managers**, allowing users to browse, filter, and onboard artists.

---

## 📚 Table of Contents

- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Pages Overview](#pages-overview)
- [How to Run Locally](#how-to-run-locally)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Author](#author)

---

## 🌍 Live Demo

🟢 **Deployed on Vercel:** [https://artistly.vercel.app](https://artistly-orcin.vercel.app/)  
📝 Temporary Login (for reviewers):  
- Email: `your-email@gmail.com`  
- Password: `your-password`

---

## 🛠️ Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN/UI
- **Forms:** React Hook Form + Yup
- **State Handling:** useState, useEffect, (Optional: useContext)
- **Hosting:** Vercel

---

## ✨ Features

✅ Mobile Responsive UI  
✅ File-Based Routing with Next.js App Router  
✅ Reusable Components (Cards, Filters, Forms, Table)  
✅ Form Validation using React Hook Form + Yup  
✅ Artist Listing with Filters (Category, Location, Price)  
✅ Artist Onboarding Multi-Section Form  
✅ (Optional) Manager Dashboard with Table View  
✅ Deployed on Vercel with SEO Tags

---

## 📁 Folder Structure

```bash
artistly/
├── app/
│   ├── layout.tsx          # Global layout with navbar
│   ├── page.tsx            # Homepage
│   ├── explore/page.tsx    # Artist listing with filters
│   ├── onboard/page.tsx    # Artist onboarding form
│   └── dashboard/page.tsx  # (Optional) Manager dashboard
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ArtistCard.tsx
│   ├── FilterBlock.tsx
│   ├── ArtistForm.tsx
│   └── Table.tsx
├── data/
│   └── artists.json        # Dummy artist data
├── public/
│   └── placeholder.jpg     # Default image
├── styles/
│   └── globals.css         # Tailwind styles
├── README.md
