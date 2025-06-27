# MERN Social Media Web App

A full-stack social media web application built using the **MERN stack** (MongoDB, Express, React, Node.js). Users can register, log in, create posts, like/unlike posts, comment, follow/unfollow others, and update their profiles.

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Context API for Authentication State
- Axios for API Requests
- CSS for Styling
- Timeago.js for relative timestamps

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt for password hashing
- Multer for file uploads
- JWT (optional for token-based auth)

---

## 📂 Folder Structure Overview
root/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── context/
│ └── public/
├── api/ # Express backend
│ ├── routes/
│ ├── models/
│ └── middleware/
├── uploads/ # Uploaded images
├── .env
└── README.md

---

## ✅ Features

- 🔐 User Authentication (Login / Register)
- 👤 Profile Management (Update details, profile & cover photo)
- 📸 Create, Like, and Comment on Posts
- 👫 Follow / Unfollow Users
- 💬 Real-time Feed Updates
- 📂 Image Upload via Multer
- 🔎 Search user profiles (optional)
- Responsive UI

---

## 🚀 Getting Started

### 🔧 Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd api
2.install dependencies
    npm install
3.create .env file
    MONGO_URL=your_mongodb_connection_string
    PORT=8800
4.start server
    npm start
💻 Frontend Setup
1.Navigate to the client directory:
cd my-app

2.Install dependencies:
npm install

3.Create a .env file:
REACT_APP_PUBLIC_FOLDER=http://localhost:8800/images/

4.Start the React app:
npm start

🧪 Testing
Basic functionality has been tested including:

Register/Login/Logout

Post creation and deletion

Like/Unlike toggling

Follow/Unfollow logic

File upload and image rendering

Protected routes and profile views

🐛 Known Issues / To-Do
Add token-based authentication (JWT)

Notifications system

Chat or messaging feature

Improve image size handling and compression

UI/UX polish and animations
📸 Screenshots
![image](https://github.com/user-attachments/assets/384f0032-26a6-4329-b232-4efced80efa5)

![image](https://github.com/user-attachments/assets/8a3a60e5-f875-412f-9e2c-92e0ae9a2aca)

![image](https://github.com/user-attachments/assets/0acc36d7-9553-4185-88c0-6724c9a52490)

👨‍💻 Author
Tanishk Kandpal
Feel free to connect on LinkedIn https://www.linkedin.com/in/tanishk-kandpal-clone1311 or check out other projects!



