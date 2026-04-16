# 📚 BUDHA LIBRARY – Seat Booking System

A full-stack web application for managing **library seat bookings**, user authentication, and admin operations.

---

## 🚀 Features

* 🔐 User Signup & Login (JWT आधारित authentication)
* 📅 Seat Booking with time slots
* 👤 Profile Management (photo + details)
* 💳 Online Payment (Razorpay integration)
* 📊 Admin Dashboard (users, bookings, revenue)
* 🔁 Password Reset via Email (Gmail SMTP)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MySQL (mysql2)
* JWT Authentication
* Bcrypt (password hashing)
* Multer (file upload)

### Database

* MySQL (Localhost)

---

## 📂 Project Structure

```
project/
├── frontend/   # React App
├── backend/    # Express Server
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repo

```bash
git clone https://github.com/Prashant2raja/library_project.git
cd library_project
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=studyproject

PORT=5000
JWT_SECRET=your_secret
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🗄️ Database Setup

Run this in MySQL:

```sql
CREATE DATABASE studyproject;
```

---

## 🌐 API Base URL

```
http://localhost:5000/api
```

---

## 🔑 Key Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | /api/signup      | Register user |
| POST   | /api/login       | Login         |
| GET    | /api/user/:email | Get profile   |
| POST   | /api/bookings    | Book seat     |

---

## ▶️ Run Project

```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm run dev
```

---

## 📸 Screenshots

(Add screenshots here later)

---

## 🧠 Author

**Prashant Singh Rajput**
B.Tech CSE | Java & Full Stack Developer

---

## ⭐ Contribution

Feel free to fork and contribute!

---

## 📄 License

This project is for educational purposes.

## 📂 Project Structure

```
library_project/
│
├── frontend/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable components (Navbar, PrivateRoute)
│   │   ├── pages/            # All pages (Login, Signup, Dashboard, etc.)
│   │   ├── services/         # API calls (axios)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles/
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
├── backend/                  # Node.js + Express Backend
│   ├── config/               # DB connection (db.js)
│   ├── controllers/          # Business logic
│   ├── routes/               # API routes
│   ├── middleware/           # Auth, upload, etc.
│   ├── models/               # DB queries / schema logic
│   ├── uploads/              # Uploaded files (images/docs)
│   ├── utils/                # Helper functions
│   ├── server.js             # Main server file
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```

---

## 📌 Important Folders Explained

* **frontend/** → React UI (what user sees)
* **backend/** → Express server (API + logic)
* **config/** → Database connection (MySQL)
* **controllers/** → Handles request logic
* **routes/** → API endpoints
* **middleware/** → Auth, file upload, etc.
* **models/** → Database queries
* **uploads/** → Stored user files

