# Portfolio CMS with Admin Dashboard

A **full-stack portfolio website** with an integrated **Content Management System (CMS)**. This project allows authenticated admins to **add, edit, and delete projects, skills, fun facts, and contact messages** in real-time, while the **public website** dynamically displays the content.

Built using **React**, **Node.js**, **Express**, and **MongoDB**, with a responsive **admin dashboard** and **JWT authentication**.

## ✨ Features

- 🔐 **Secure Admin Authentication** (JWT)
- 🗂️ **Projects Management** (CRUD + featured projects for homepage)
- 🛠️ **Skills Manager** (Languages, Frameworks, Tools, Databases, Others)
- 🎉 **Fun Facts Manager** with icon/image URL support
- 📬 **Contact Form** with Email Notifications (using Nodemailer)
- 📱 **Responsive & Mobile-Friendly Dashboard** (Hamburger menu for mobile)
- 🌐 **Dynamic Public Website** – no hardcoded content
- ⚡ **MongoDB Database** connection for persistence

---

## 📁 Project Structure

```
📦 EazyByts
├─ client
│  ├─ .env
│  ├─ .gitignore
│  ├─ README.md
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  ├─ dev_image.png
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ api
│  │  │  ├─ dashboardApi.js
│  │  │  ├─ funFactApi.js
│  │  │  ├─ projectApi.js
│  │  │  └─ skillApi.js
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ About.jsx
│  │  │  ├─ ContactTab.jsx
│  │  │  ├─ Contacts.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ FunFactManager.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ Hero.jsx
│  │  │  ├─ ProjectCard.jsx
│  │  │  ├─ ProjectManager.jsx
│  │  │  ├─ Projects.jsx
│  │  │  ├─ Quote.jsx
│  │  │  ├─ Sidebar.jsx
│  │  │  ├─ SkillManager.jsx
│  │  │  ├─ SkillTab.jsx
│  │  │  └─ Skills.jsx
│  │  ├─ config
│  │  │  └─ api.js
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ AboutMe.jsx
│  │  │  ├─ AdminLogin.jsx
│  │  │  ├─ ContactPage.jsx
│  │  │  ├─ Dashboard.jsx
│  │  │  ├─ Home.jsx
│  │  │  └─ ProjectPage.jsx
│  │  └─ routes
│  │     ├─ PrivateRoute.jsx
│  │     └─ PublicRoute.jsx
│  ├─ tailwind.config.js
│  └─ vite.config.js
└─ server
   ├─ .gitignore
   ├─ api
   │  └─ index.js
   ├─ middleware
   │  └─ auth.js
   ├─ models
   │  ├─ Admin.js
   │  ├─ Contact.js
   │  ├─ FunFact.js
   │  ├─ Projects.js
   │  └─ Skill.js
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  ├─ auth.js
   │  ├─ contactRoutes.js
   │  ├─ funFactRoutes.js
   │  ├─ projectRoutes.js
   │  └─ skillRoutes.js
   ├─ seed
   │  └─ seedAdmin.js
   └─ utils
      └─ contactEmailTemplate.js
```

## 🚀 Getting Started

### 1️⃣ Backend Setup

```bash
cd backend
npm install
```

### Create a `.env` file in the `server/` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```

⚠️ Use Gmail App Passwords or environment-secured SMTP for production email services.

### Start the backend server:

```bash
npm run dev
```

Backend runs by default at: http://localhost:5000/api

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
```

### Create a `.env` file in `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### Start the frontend development server:

```bash
npm run dev
```

Frontend runs by default at: http://localhost:5173/

### 3️⃣ Credentials for Admin Login

```bash
email: admin@portfolio.com
password: admin123456789
```

## 🛠 Features Breakdown

| Feature          | Admin Dashboard | Public Website    |
| ---------------- | --------------- | ----------------- |
| Admin Login      | ✅              | ❌                |
| Manage Projects  | ✅ (CRUD)       | ✅ (Dynamic View) |
| Manage Skills    | ✅              | ✅ (Grouped List) |
| Fun Facts        | ✅              | ✅                |
| Contact Messages | ✅              | ✅ (Submit Only)  |

## 🖥️ Tech Stack

| Layer    | Technology                              |
| -------- | --------------------------------------- |
| Frontend | React, Vite, Tailwind CSS, Lucide Icons |
| Backend  | Node.js, Express, MongoDB (Mongoose)    |
| Auth     | JSON Web Tokens (JWT)                   |
| Emails   | Nodemailer                              |
| Database | MongoDB Atlas or Local MongoDB          |

📧 Contact
For feedback, contributions, or queries:

    📧 Email: scbabai2704@gmail.com

    🌐 GitHub: @SUGATACHANDA

## 📜 License

This project is licensed under the MIT License.

© 2024 SUGATA CHANDA
