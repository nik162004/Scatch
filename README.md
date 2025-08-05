# 🛍️ Scatch — E-commerce Web App

Scatch is a full-stack EJS + Node.js-based e-commerce platform featuring user authentication, cart functionality, admin product creation, and dynamic product display with image uploads using Multer and MongoDB.

---

## 🚀 Features

- 🔐 **User Authentication** (Register/Login/Logout using JWT)
- 🛒 **Add to Cart** functionality
- 💳 **Price Breakdown & Billing** on the Cart page
- 📦 **Admin Panel** to create and manage products
- 🧑‍💼 **Owner Login** to seed initial admin (only in development mode)
- 📸 **Product Image Upload** via `multer` (stored in memory)
- 🎨 Custom UI theming (background, panel, text color per product)

---

## 🛠️ Tech Stack

- **Frontend**: HTML, EJS, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Auth**: JWT (JSON Web Tokens), bcrypt
- **File Uploads**: Multer
- **Session & Flash**: express-session, connect-flash
- **Environment Config**: dotenv, config
