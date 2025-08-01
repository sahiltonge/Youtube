
## 📺 YouTube Clone MERN Application

This project is a full-stack YouTube clone built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It supports features like video upload, viewing, profile display, and a responsive UI similar to YouTube.

> 🔗 **Backend Hosted at:** [https://youtube-ujja.onrender.com](https://youtube-ujja.onrender.com)

---

### 📁 Project Structure

```
youtube-clone/
│
├── client/               # React Frontend
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── public/
│   └── package.json
│
├── server/               # Node.js + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 📦 Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) (v18+ recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) or local MongoDB

---

## ⚙️ How to Run

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone
```

### 🔹 2. Install Frontend Dependencies

```bash
cd client
npm install
```

> 📌 If `node_modules` is deleted, this will re-install all frontend dependencies.

### 🔹 3. Install Backend Dependencies

```bash

npm install
```



---

### 🔹 4. Start the Frontend

```bash
cd ../client
npm start
```

The React app will run on: `http://localhost:3000`

---

### 🔹 5. Start the Backend

```bash
cd ../server
npm start
```

The Express backend will run on: `http://localhost:5000` (unless hosted elsewhere)

---

## 🌐 Environment Configuration

### ✅ Create `.env` in `/server`

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## 🔄 API Base URL

To make API calls from the frontend, the app uses this base URL:

```
https://youtube-ujja.onrender.com
```

Located in:
📁 `client/src/api/axiosInstance.js`

---

## 📸 Features

* ✅ User Signup/Login
* ✅ Upload Videos
* ✅ Watch Videos
* ✅ Profile Page
* ✅ Responsive UI
* ✅ React Router Navigation
* ✅ Global API config using Axios

---

## 👨‍💻 Author

* **Name:** Sahil Tonge
Great! Below is a **`README.md` file for the backend (`/server` folder)** of your YouTube Clone MERN application. It includes all necessary instructions like environment setup, dependency installation, and running the server — useful if others want to contribute or deploy it.

---

## 🖥️ YouTube Clone – Backend

This is the **Node.js + Express.js** backend for the YouTube Clone MERN project. It handles API routes for user registration, login, video upload, and profile-related operations. It uses **MongoDB Atlas**, **JWT (JSON Web Token)** for authentication, and **Multer** for file handling.

> 🌐 **Live Backend URL:**
> [https://youtube-ujja.onrender.com](https://youtube-ujja.onrender.com)

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **JWT (JSON Web Token)**
* **Multer (for video and thumbnail uploads)**
* **CORS**
* **dotenv**

---

## 📁 Folder Structure

```
server/
├── controllers/        # Logic for routes (signup, login, upload, etc.)
├── middleware/         # Authentication middleware (JWT)
├── models/             # Mongoose models (User, Video)
├── routes/             # Express route handlers
├── uploads/            # Uploaded files
├── server.js           # Entry point
├── .env                # Environment variables
└── package.json
```

---

## 📦 Prerequisites

Make sure you have:

* Node.js installed (`v18+`)
* A MongoDB Atlas connection URI (or local MongoDB)
* Your `.env` file configured

---

## 🔧 Setup Instructions

### 🔹 1. Navigate to Server Folder

```bash
cd server
```

### 🔹 2. Install Dependencies

```bash
npm install
```

> ⚠️ If `node_modules` is deleted, run this again to reinstall all backend dependencies.

### 🔹 3. Configure Environment

Create a `.env` file in `/server` and add the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET=your_secure_jwt_secret
```

Replace the values with your actual MongoDB URI and secret key.

### 🔹 4. Start the Server

```bash
npm start
```

Server will run on `http://localhost:5000` unless otherwise specified in your environment.

---

## 🚀 API Endpoints Overview

| Method | Endpoint            | Description              | Auth Required |
| ------ | ------------------- | ------------------------ | ------------- |
| POST   | `/signup`           | Register new user        | ❌             |
| POST   | `/login`            | Login user and get token | ❌             |
| POST   | `/upload-video`     | Upload video             | ✅             |
| GET    | `/get-videos`       | Fetch all videos         | ❌             |
| GET    | `/get-user/:userId` | Get user profile info    | ✅             |

> ⚠️ Most protected routes require `Authorization: Bearer <token>` in headers.

---

## 🧩 Key Packages

```json
"dependencies": {
  "bcryptjs": "^2.4.3",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "express": "^4.18.2",
  "jsonwebtoken": "^9.0.0",
  "mongoose": "^7.6.1",
  "multer": "^1.4.5-lts.1",
  "nodemon": "^3.0.1"
}
```

To reinstall dependencies after deletion of `node_modules`:

```bash
npm install
```

---

## 🛡️ Security & Middleware

* JWT-based authentication using a middleware to protect routes.
* CORS setup to allow frontend access (`http://localhost:3000` or hosted domain).
* Environment variables stored securely in `.env`.

---

## 👨‍💻 Author

* **Sahil Tonge**
* 📧 [sahiltonge85@gmail.com]

