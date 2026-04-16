# BUDHA LIBRARY - Seat Booking Management System

A full-stack web application for managing library seat bookings with user authentication, profile management, and admin dashboard.

---

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Frontend Details](#frontend-details)
- [Backend Details](#backend-details)
- [Database](#database)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Admin Features](#admin-features)

---

## 🎯 Project Overview

**BUDHA LIBRARY** is a comprehensive seat booking management system designed for library users to:
- Register and authenticate with secure login/signup
- Book study seat with preferred time slots
- Manage profile and personal information
- Make online payments for bookings
- View booking history and subscription status
- Access admin dashboard for library management

---

## 💻 Tech Stack

### Frontend
- **React 19.0.0** - UI library
- **Vite 6.3.1** - Module bundler and dev server
- **React Router DOM 7.5.3** - Client-side routing
- **Axios 1.9.0** - HTTP client for API requests
- **CSS3** - Styling with custom color theme

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.1.0** - Web framework
- **MySQL2 3.14.1** - Database driver (promise-based)
- **Nodemailer 7.0.3** - Email sending via Gmail SMTP
- **jsonwebtoken 9.0.2** - JWT authentication
- **bcryptjs 5.1.1** - Password hashing (SALT_ROUNDS=10)
- **Multer** - File upload middleware
- **Dotenv** - Environment variable management

### Database
- **MySQL** - Local instance (localhost:3306)

### Design Theme
- **Primary Color:** #6a1b9a (Deep Purple)
- **Primary Light:** #ab47bc (Light Purple)
- **Background:** #f4f0f8 (Very Light Purple)
- **Text Primary:** #212121 (Dark)
- **Text Secondary:** #5f5f5f (Gray)

---

## 🎨 Frontend Details

### Hosting
- **Dev Server:** `http://localhost:5173`
- **Build Tool:** Vite with dev proxy to backend `/api` and `/uploads` routes

### Pages

#### 1. **Login Page** (`src/pages/Login.jsx`)
- User/Admin role-based login with toggle switch
- Email and password authentication
- JWT token storage with 2-hour expiration
- Error handling with inline messages
- Responsive two-panel design (branding + form)

#### 2. **Signup Page** (`src/pages/Signup.jsx`)
- New user registration form
- Fields: Full Name, Father's Name, Email, Phone, Password, Address, Government ID
- Photo upload with preview functionality
- Form validation with error feedback
- Multipart form-data submission
- Auto-redirect to login on success

#### 3. **Forgot Password Page** (`src/pages/ForgotPassword.jsx`)
- Email-based password reset request
- Sends reset link via Gmail SMTP
- Status messages (success/error)
- Professional branding panel layout

#### 4. **Reset Password Page** (`src/pages/ResetPassword.jsx`)
- Token-based password reset
- New password validation (match confirmation)
- Auto-redirect to login after 1.8 seconds on success
- Error handling for invalid/expired tokens

#### 5. **Profile Page** (`src/pages/Profile.jsx`)
- User profile view with avatar (square, 180x180px)
- Displays: Name, Father's Name, Email, Phone, Government ID, Address
- Subscription status: Seat number, time slot, booking date, validity
- Validity progress bar (days remaining)
- Edit profile functionality with photo change
- Password change option
- Pay Now button for renewal payments

#### 6. **Dashboard Page** (`src/pages/Dashboard.jsx`)
- User dashboard with booking summary
- Quick access to seat booking and profile
- Status indicators

#### 7. **Seat Booking Page** (`src/pages/SeatBooking.jsx`)
- Browse available seats
- Select preferred time slot
- Confirm booking with details
- Integration with payment system

#### 8. **Payments Page** (`src/pages/Payments.jsx`)
- Razorpay payment integration
- Display seat details and amount
- Payment verification
- Success/failure handling

#### 9. **User Profile Page** (`src/pages/UserProfile.jsx`)
- Detailed user information view
- Edit user information
- Password management

#### 10. **Edit User Page** (`src/pages/EditUser.jsx`)
- Update profile information
- Photo upload
- Address and contact details modification

#### 11. **Admin Booking Page** (`src/pages/AdminBooking.jsx`)
- Admin view of all bookings
- Filter and search functionality
- Booking management

#### 12. **Admin Dashboard Page** (`src/pages/AdminDashboard.jsx`)
- Admin statistics and analytics
- Total users, bookings, revenue
- System status overview

#### 13. **Help Desk Page** (`src/pages/HelpDesk.jsx`)
- Terms and Conditions
- Contact information (Email, Phone, Address)
- 24/7 support details
- Professional styling matching site design

### Components

#### Navbar Component (`src/components/Navbar.jsx`)
- Navigation menu with logo
- Links to all pages based on user role
- Logout functionality
- Mobile responsive hamburger menu

#### PrivateRoute Component (`src/components/PrivateRoute.jsx`)
- Route protection for authenticated users
- Redirects to login if not authenticated
- Role-based access control

### Styling
- All pages use consistent color theme
- Mobile responsive (@media 992px, 600px breakpoints)
- Professional two-panel layout for auth pages
- Smooth animations and transitions
- Accessible UI with proper contrast ratios

---

## 🖥️ Backend Details

### API Server
- **Base URL:** `http://localhost:5000`
- **CORS Enabled:** Frontend at `http://localhost:5173`
- **Port:** 5000

### Authentication
- **Method:** JWT (JSON Web Tokens)
- **Expiration:** 2 hours
- **Storage:** localStorage (frontend)
- **Password Hashing:** bcryptjs (10 rounds)

### Email Configuration
- **Provider:** Gmail SMTP
- **Host:** smtp.gmail.com
- **Port:** 465 (Secure TLS)
- **Credentials:** Environment variables (.env)
- **Feature:** Password reset emails with secure tokens

### Upload Configuration
- **Middleware:** Multer
- **Destination:** `/backend/uploads/`
- **Supported:** Profile photos, Government ID documents
- **Accessible:** Via `/uploads/:filename`

---

## 🗄️ Database

### Type
- **MySQL** (Local instance)
- **Host:** localhost
- **Port:** 3306
- **User:** root
- **Password:** @Raja1234
- **Database Name:** studyproject

### Tables

#### 1. **admin**
- `id` - Primary key
- `email` - Admin email (unique)
- `password` - Hashed password
- `name` - Admin name
- `created_at` - Creation timestamp

#### 2. **signup**
- `id` - Primary key
- `name` - User full name
- `father_name` - Father's name
- `email` - User email (unique)
- `mob_number` - Mobile number
- `password` - Hashed password
- `address` - User address
- `gov_id` - Government ID
- `photo` - Photo upload path
- `created_at` - Registration timestamp

#### 3. **bookings**
- `id` - Primary key
- `email` - User email (foreign key)
- `seat_number` - Booked seat ID
- `time_slot` - Preferred time slot
- `booked_date` - Booking date
- `valid_till` - Subscription expiry date
- `amount_paid` - Payment amount
- `transaction_id` - Razorpay transaction ID
- `updated_at` - Last update timestamp

#### 4. **login_logs**
- `id` - Primary key
- `email` - User email
- `login_time` - Login timestamp
- `ip_address` - User IP address (optional)
- `status` - Login success/failure

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v9 or higher)
- MySQL (local instance running)
- Git

### Clone Repository
```bash
git clone <repository-url>
cd <project-folder>
```

### Frontend Setup

1. **Navigate to frontend folder:**
```bash
cd frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file:**
```env
VITE_BACKEND_URL=http://localhost:5000
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXXXXX
```

4. **Start development server:**
```bash
npm run dev
```
Frontend will be available at: `http://localhost:5173`

### Backend Setup

1. **Navigate to backend folder:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file:**
```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASS=@Raja1234
DB_NAME=studyproject

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRY=2h

# Frontend URL (for CORS and email links)
FRONTEND_URL=http://localhost:5173

# Gmail SMTP Configuration
GMAIL_USER=mrprashant.hit@gmail.com
GMAIL_PASS="your_app_password"

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

**Note:** Gmail app password should be in quotes if it contains spaces.

4. **Start backend server:**
```bash
npm start
```
or with auto-reload:
```bash
npm run dev
```
Backend will be running at: `http://localhost:5000`

---

## 🚀 Running the Application

### Development Mode

#### Terminal 1 - Backend
```bash
cd backend
npm start
```
Expected output: `✅ Server running on http://localhost:5000`

#### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```
Expected output: `✅ Local: http://localhost:5173`

#### Terminal 3 - MySQL (if not running as service)
```bash
mysql -u root -p
```
Password: @Raja1234

### Production Build

#### Frontend
```bash
cd frontend
npm run build
```
Build output: `frontend/dist/`

#### Backend
```bash
NODE_ENV=production npm start
```

---

## 🔌 API Endpoints

### Authentication Endpoints

#### 1. User Signup
```http
POST /api/signup
Content-Type: multipart/form-data

Body:
- name: string (required)
- father_name: string (required)
- email: string (required, unique)
- mob_number: string (required)
- password: string (required, min 6 chars)
- address: string (required)
- gov_id: string (required)
- photo: file (required, image)

Response:
{
  "success": true,
  "message": "User registered successfully"
}
```

#### 2. User Login
```http
POST /api/login
Content-Type: application/json

Body:
{
  "email": "user@example.com",
  "password": "password123",
  "role": "user" | "admin"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGc...",
  "role": "user"
}
```

#### 3. Forgot Password
```http
POST /api/forgot-password
Content-Type: application/json

Body:
{
  "email": "user@example.com"
}

Response:
{
  "success": true,
  "message": "Reset link sent to email"
}
```

#### 4. Reset Password
```http
POST /api/reset-password/:token
Content-Type: application/json

Body:
{
  "password": "newpassword123",
  "confirmPassword": "newpassword123"
}

Response:
{
  "success": true,
  "message": "Password reset successfully"
}
```

---

### Profile Endpoints

#### 1. Get User Profile
```http
GET /api/user/:email
Headers:
- Authorization: Bearer {token}

Response:
{
  "id": 1,
  "name": "John Doe",
  "father_name": "Raj Doe",
  "email": "john@example.com",
  "mob_number": "9876543210",
  "address": "123 Main Street",
  "gov_id": "ABC123456",
  "photo": "/uploads/photo_name.jpg",
  "seat_number": "A1",
  "time_slot": "10:00 - 12:00",
  "booked_date": "2026-04-16",
  "valid_till": "2026-05-16"
}
```

#### 2. Update User Profile
```http
PUT /api/user/:email
Content-Type: multipart/form-data
Headers:
- Authorization: Bearer {token}

Body:
- name: string (optional)
- mob_number: string (optional)
- address: string (optional)
- photo: file (optional)
- currentPassword: string (optional, if changing password)
- newPassword: string (optional)
- confirmPassword: string (optional)

Response:
{
  "success": true,
  "message": "Profile updated successfully"
}
```

---

### Booking Endpoints

#### 1. Create Booking
```http
POST /api/bookings
Content-Type: application/json
Headers:
- Authorization: Bearer {token}

Body:
{
  "email": "user@example.com",
  "seat_number": "A1",
  "time_slot": "10:00 - 12:00",
  "booked_date": "2026-04-16"
}

Response:
{
  "success": true,
  "message": "Booking created",
  "bookingId": 1
}
```

#### 2. Get User Bookings
```http
GET /api/bookings/:email
Headers:
- Authorization: Bearer {token}

Response:
{
  "success": true,
  "bookings": [
    {
      "id": 1,
      "seat_number": "A1",
      "time_slot": "10:00 - 12:00",
      "booked_date": "2026-04-16",
      "valid_till": "2026-05-16",
      "amount_paid": 500
    }
  ]
}
```

---

### Payment Endpoints

#### 1. Create Razorpay Order
```http
POST /api/create-order
Content-Type: application/json
Headers:
- Authorization: Bearer {token}

Body:
{
  "amount": 50000, // in paise
  "email": "user@example.com"
}

Response:
{
  "success": true,
  "order_id": "order_XXXXX",
  "amount": 50000,
  "currency": "INR"
}
```

#### 2. Verify Payment
```http
POST /api/verify-payment
Content-Type: application/json
Headers:
- Authorization: Bearer {token}

Body:
{
  "razorpay_order_id": "order_XXXXX",
  "razorpay_payment_id": "pay_XXXXX",
  "razorpay_signature": "signature_XXXXX"
}

Response:
{
  "success": true,
  "message": "Payment verified and booking confirmed"
}
```

---

### Admin Endpoints

#### 1. Get All Bookings (Admin)
```http
GET /api/admin/bookings
Headers:
- Authorization: Bearer {admin_token}

Response:
{
  "success": true,
  "bookings": [
    {
      "id": 1,
      "user_email": "user@example.com",
      "seat_number": "A1",
      "time_slot": "10:00 - 12:00",
      "booked_date": "2026-04-16",
      "valid_till": "2026-05-16",
      "amount_paid": 500
    }
  ]
}
```

#### 2. Get All Users (Admin)
```http
GET /api/admin/users
Headers:
- Authorization: Bearer {admin_token}

Response:
{
  "success": true,
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "mob_number": "9876543210",
      "created_at": "2026-04-16"
    }
  ]
}
```

#### 3. Get System Statistics (Admin)
```http
GET /api/admin/statistics
Headers:
- Authorization: Bearer {admin_token}

Response:
{
  "success": true,
  "total_users": 150,
  "total_bookings": 450,
  "revenue": 225000,
  "active_bookings": 320
}
```

---

## 👨‍💼 Admin Features

### Admin Dashboard (`src/pages/AdminDashboard.jsx`)
- **Statistics Overview:**
  - Total Number of Users
  - Total Bookings Made
  - Total Revenue Generated
  - Currently Active Bookings
- **Charts & Analytics:** Visual representation of data
- **Quick Actions:** Manage users, view bookings

### Admin Booking Page (`src/pages/AdminBooking.jsx`)
- **View All Bookings:** List of all user bookings
- **Filter Options:**
  - Filter by date range
  - Filter by seat number
  - Filter by user email
  - Filter by status (active, expired)
- **Booking Details:**
  - User information
  - Seat and time slot details
  - Booking and expiry dates
  - Amount paid
- **Actions:**
  - Extend booking validity
  - Cancel booking
  - View user profile

### Admin Features Summary
- Role-based authentication (admin login)
- Separate admin dashboard and booking management
- Analytics and reporting
- User management capabilities
- Booking management and modification
- Revenue tracking

---

## 🔐 Security Features

1. **Password Security:**
   - Bcryptjs hashing with 10 salt rounds
   - Password confirmation validation
   - Secure password reset via email

2. **Authentication:**
   - JWT token-based authentication
   - 2-hour token expiration
   - Secure token storage in localStorage

3. **Email Verification:**
   - Gmail SMTP with TLS encryption
   - Secure password reset tokens
   - Token expiration validation

4. **Data Protection:**
   - CORS enabled only for frontend origin
   - Environment variables for sensitive data
   - File upload validation

5. **Database:**
   - Unique constraints on email
   - Foreign key relationships (future implementation)
   - Prepared statements in queries

---

## 📱 Responsive Design

- **Desktop:** Full layout (1200px+)
- **Tablet:** Optimized grid layout (768px - 1199px)
- **Mobile:** Single column, touch-friendly (< 768px)

Breakpoints:
- Large: 992px
- Medium: 768px
- Small: 600px

---

## 🐛 Common Issues & Solutions

### Issue: "Unknown database 'studyproject'"
**Solution:** Ensure MySQL is running and database exists
```bash
mysql -u root -p
CREATE DATABASE studyproject;
```

### Issue: Gmail SMTP Error
**Solution:** 
1. Enable 2-factor authentication on Gmail
2. Generate app password at https://myaccount.google.com/apppasswords
3. Use the generated password in .env with quotes if it contains spaces

### Issue: Frontend cannot connect to backend
**Solution:** 
1. Ensure backend is running on port 5000
2. Check Vite proxy config in `frontend/vite.config.js`
3. Verify VITE_BACKEND_URL in `frontend/.env`

### Issue: Token expired error
**Solution:** Clear localStorage and login again
```javascript
localStorage.clear();
```

---

## 📝 Environment Variables

### Frontend (`.env`)
```env
VITE_BACKEND_URL=http://localhost:5000
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXXXXX
```

### Backend (`.env`)
```env
DB_HOST=localhost
DB_USER=root
DB_PASS=@Raja1234
DB_NAME=studyproject
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRY=2h
FRONTEND_URL=http://localhost:5173
GMAIL_USER=mrprashant.hit@gmail.com
GMAIL_PASS="your_app_password"
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

---

## 📂 Project Structure

```
project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   └── PrivateRoute.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx & Login.css
│   │   │   ├── Signup.jsx & Signup.css
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── ResetPassword.jsx
│   │   │   ├── Profile.jsx & Profile.css
│   │   │   ├── Dashboard.jsx & Dashboard.css
│   │   │   ├── SeatBooking.jsx & SeatBooking.css
│   │   │   ├── Payments.jsx & Payments.css
│   │   │   ├── UserProfile.jsx & UserProfile.css
│   │   │   ├── EditUser.jsx & EditUser.css
│   │   │   ├── AdminBooking.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── HelpDesk.jsx & HelpDesk.css
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   ├── public/
│   ├── vite.config.js
│   ├── package.json
│   └── .env
├── backend/
│   ├── server.js
│   ├── uploads/
│   ├── package.json
│   ├── .env
│   └── .gitignore
└── README.md
```

---

## 🚢 Deployment

### Frontend (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy dist/ folder to Netlify/Vercel
```

### Backend (Heroku/Railway)
```bash
# Set environment variables on hosting platform
# Deploy repository
```

### Database (Remote MySQL)
- Update DB_HOST to remote server
- Ensure all migrations are run
- Update FRONTEND_URL for production

---

## 📞 Support & Contact

**Email:** example@gmail.com  
**Phone:** xxxxxxxxxx  
**Address:** Budha Library, Rajapul Jal Parishad Boring Road Patna (80001)

---

## 📄 License

This project is proprietary. All rights reserved © 2025 BUDHA LIBRARY.

---

## 👥 Contributors

Project developed and maintained by the BUDHA LIBRARY development team.

---

**Last Updated:** April 16, 2026
#   l i b r a r y _ p r o j e c t  
 