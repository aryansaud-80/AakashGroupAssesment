# 🚀 Aakash Group Frontend Internship Assessment

A modern, responsive **React Single Page Application (SPA)** created for the Aakash Group Frontend Internship Assessment. This project includes a marketing-style landing page inspired by [aakashlabs.com](https://aakashlabs.com), a functional contact form powered by **Formspree**, and a dynamic **Anime Discovery** page using the **Jikan API**.

---

## 🔗 Live Demo & Links

- 🌐 **Live Site**: [https://aakash-group-assesment.vercel.app/](https://aakash-group-assesment.vercel.app/)
- 💻 **GitHub Repository**: [github.com/aryansaud-80/AakashGroupAssesment](https://github.com/aryansaud-80/AakashGroupAssesment)

---

## 📸 Screenshots

> Images located in `/src/assets/readmeImage/`

### 🌐 Landing Page

![Landing Page](/src/assets/readmeImage/home.png)

### 🧠 About Section

![About Section](/src/assets/readmeImage/about.png)

### 👥 Team Section

![Team Section](/src/assets/readmeImage/team.png)

### 📬 Contact Form

![Contact Form](/src/assets/readmeImage/form.png)

### 🎌 Anime Discovery Page

![Anime Discovery](/src/assets/readmeImage/animeDiscover.png)

### 📘 Anime Detail Page

![Anime Detail](/src/assets/readmeImage/animeDetail.png)

---

## 📁 Project Features

### ✅ As per assessment requirements:

- 📌 **Navigation Header** (sticky, responsive, mobile-friendly)
- 🎞 **Hero Slider** (autoplay, manual controls, pause/resume)
- 🧠 **About Us** section modeled after Aakash Labs branding
- 👨💻 **Team Section** with role, skills, and social links
- 📬 **Contact Us Form** with validation and API (Formspree + Axios)
- 🔗 **Social Links** integrated in footer and team section
- 🔻 **Footer** with quick links, services, newsletter input
- 📄 **Secondary Page**: Anime Discovery with Jikan API

---

## 🧩 Bonus Feature: Anime Discovery

Powered by [Jikan API](https://jikan.moe/)

- 🔍 Real-time anime search
- 🔄 Load more functionality
- 📘 Detail page with trailer, characters, genres, and stats

---

## 🛠 Tech Stack

| Tech                 | Usage                           |
| -------------------- | ------------------------------- |
| **React (Vite)**     | Frontend framework & build tool |
| **Tailwind CSS**     | Utility-first styling           |
| **React Router DOM** | SPA routing & page handling     |
| **Axios**            | API communication               |
| **Formspree**        | Contact form submission         |
| **Jikan API**        | Anime data & media              |
| **Toastify**         | Form feedback + notifications   |
| **Vercel**           | Deployment & hosting            |

---

## 📂 Folder Structure

```css
AakashGroupAssesment/
├── public/
├── src/
│   ├── api/
│   │   └── axiosInstance.js        # Axios config
│   ├── assets/
│   │   └── readmeImage/            # Screenshots
│   ├── components/
│   │   ├── About/                  # AboutUs section
│   │   ├── Contact/                # Form + Info cards
│   │   ├── Footer/                 # Footer components
│   │   ├── Nav/                    # Navbar
│   │   ├── Team/                   # Team section
│   │   └── Anime/                  # AnimeCard & helpers
│   ├── pages/
│   │   ├── Home.jsx                # Landing page
│   │   ├── AnimeDiscoverPage.jsx  # Anime discovery view
│   │   └── AnimeDetailPage.jsx    # Anime detail page
│   ├── styles/                    # Custom styles (if any)
│   ├── App.jsx
│   └── main.jsx
├── vercel.json                    # SPA routing support
├── package.json
└── README.md

```

## 💡 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/aryansaud-80/AakashGroupAssesment.git
cd AakashGroupAssesment

# Install dependencies
npm install

# Run locally
npm run dev

# Visit
http://localhost:5173
```

## 📬 Contact Form Integration

The contact form is integrated using Formspree and axios.post.

### ✅ Features

- Field validation
- POST request to Fromspree endpoint
- Toast alerts for success or failure
- Fields reset after submission

## 🧍 Author

Aryan Saud — Frontend Developer & MERN Stack Enthusiast

- [🔗 GitHub: @aryansaud-80](https://github.com/aryansaud-80)

- [🔗 LinkedIn: @aryan-saud-81a618293](https://github.com/aryansaud-80)

- [📧 work.aryansaud@gmail.com](mailto:work.aryansaud@gmail.com)
