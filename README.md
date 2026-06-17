# 🔐 Authentication Backend API

A backend authentication system built with Node.js, Express.js, MongoDB, and TypeScript following a layered architecture approach.
This project implements secure user authentication, authorization, profile management, and password security features while maintaining a clean and scalable code structure.

## 🚀 Features

### Authentication

* User Registration (Signup)
* User Login
* JWT-based Authentication
* Password Hashing using bcrypt

### User Management

* Get Authenticated User Profile
* Update User Profile
* Change Password

### Security

* Protected Routes using JWT Middleware
* Email Format Validation
* Password Strength Validation
* Secure Password Storage

### Architecture

* Layered Architecture
* Separation of Concerns
* Modular Folder Structure
* TypeScript Type Safety

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* TypeScript
* JWT (jsonwebtoken)
* bcrypt

## 📂 Project Structure

src
├── controllers
├── services
├── repositories
├── routes
├── middleware
├── models
├── types
├── utils
└── config

### Request Flow

Route
↓
Controller
↓
Service
↓
Repository
↓
Database

## 🔑 API Endpoints

### Authentication

#### Register User

```http
POST /signup
```

#### Login User

```http
POST /login
```

### User Profile

#### Get Profile

```http
GET /profile
```

#### Update Profile

```http
PATCH /profile
```

### Password Management

#### Change Password

```http
PATCH /change-password
```

## ⚙️ Environment Variables

Create a `.env` file:

``env
PORT=5000
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
``

## 📦 Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm run dev
```

## 📚 Documentation

Detailed documentation is available inside the `docs` folder covering:

- Backend Fundamentals
- Request Lifecycle
- Authentication & Authorization
- JWT
- Database Concepts
- API Documentation
- Middleware Flow

## Learning Outcomes

Through this project, I gained hands-on experience with:

* JWT Authentication
* Password Hashing & Verification
* Middleware Development
* Protected Routes
* MongoDB & Mongoose
* Layered Architecture
* TypeScript Integration
* Input Validation
* Error Handling
* Backend API Development
