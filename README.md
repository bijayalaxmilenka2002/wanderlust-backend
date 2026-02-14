
# 🏡 Wanderlust– Real Estate Booking Platform

A full-stack real estate web application inspired by Airbnb that allows users to explore property listings, create accounts, add properties, upload images, and manage bookings.

Built using **HTML, CSS, JavaScript, Node.js, Express, and MongoDB**, and deployed on **Render** with media storage handled by **Cloudinary** and database hosted on **MongoDB Atlas**.

---

# 📌 Project Overview

WanderStay is a dynamic real estate listing platform where users can:

* Browse available properties
* View detailed listing pages
* Add new properties
* Upload property images
* Edit or delete listings
* Store and retrieve data securely from MongoDB Atlas
* Handle image storage via Cloudinary

The application follows a **RESTful architecture** and uses **MVC pattern** for clean and scalable backend structure.

---

# 🏗️ Project Architecture & Code Explanation

## 1️⃣ Frontend (Client Side)

The frontend is built using:

* **HTML** – Structure of the application
* **CSS** – Styling and layout
* **JavaScript** – Client-side interactivity

### Key Features:

* Responsive property listing grid
* Dynamic rendering of property data
* Form validation
* Image previews before upload
* Clean UI similar to Airbnb

---

## 2️⃣ Backend (Server Side)

Built using:

* **Node.js**
* **Express.js**

### Core Functionalities:

### 🔹 Routing

RESTful routes are implemented:

* `GET /listings` → View all properties
* `GET /listings/:id` → View single property
* `POST /listings` → Create new listing
* `PUT /listings/:id` → Update listing
* `DELETE /listings/:id` → Delete listing

### 🔹 MVC Pattern

The project follows:

* **Models** → MongoDB Schemas
* **Views** → EJS Templates
* **Controllers** → Business logic

This structure improves maintainability and scalability.

---

## 3️⃣ Database Integration

### 🗄️ MongoDB Atlas

* Cloud-hosted NoSQL database
* Stores:

  * Listing data
  * User information
  * Image URLs
  * Property details

### 🧩 Mongoose

* Used for schema creation
* Data validation
* Middleware
* Model relationships

---

## 4️⃣ Image Upload System

### ☁️ Cloudinary Integration

* Stores uploaded property images
* Returns secure URLs
* Optimized media delivery
* Prevents server overload

Images are uploaded via Multer middleware and then stored on Cloudinary.

---

# 🚀 Tech Stack

## 💻 Frontend

* HTML5
* CSS3
* JavaScript

## ⚙️ Backend

* Node.js
* Express.js

## 🗄️ Database

* MongoDB Atlas
* Mongoose

## ☁️ Cloud Services

* Cloudinary (Image Storage)
* Render (Deployment)

---

# 🔐 Key Features

✔️ Full CRUD functionality
✔️ RESTful API design
✔️ Cloud image storage
✔️ MongoDB Atlas integration
✔️ Error handling middleware
✔️ Server-side validation
✔️ Responsive UI
✔️ Clean MVC architecture

---

# 🌍 Deployment

The application is deployed on **Render**.

### 🔗 Live Demo:

👉 https://wanderlust-backend-ihtj.onrender.com
.click on this above link
.then click on icon

# 📂 Installation & Setup

If someone wants to run locally:

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate to project folder
cd your-repo-name

# Install dependencies
npm install

# Create .env file and add:
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
MONGO_URI=

# Start server
npm start
```

Server will run on:

```
http://localhost:8080
```

---

# 🧠 Learning Outcomes

Through this project I learned:

* Building RESTful APIs using Express
* Designing scalable backend architecture
* Connecting MongoDB Atlas to production apps
* Handling image uploads securely with Cloudinary
* Deploying full-stack apps on Render
* Implementing MVC pattern in real-world projects
* Writing clean and maintainable backend code

---

# 📈 Future Improvements

* User authentication (JWT / Passport.js)
* Booking system
* Payment gateway integration
* Map integration (GeoJSON)
* Admin dashboard
* Search & filter system

---

# 👨‍💻 Author
BIJAYALAXMI LENKA
MERN Stack Developer
