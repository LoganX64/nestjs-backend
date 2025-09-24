# 🛍️ E-Commerce Frontend (React + Vite)

A simple e-commerce frontend built with **React, Vite, TailwindCSS, and Axios**.  
It provides **Products** and **Orders** pages with API integration to a backend (NestJS).

---

## 🚀 Features

- 📦 View Products
- 🛒 Create Orders
- 📃 View Orders
- 🔗 API integration with backend
- 🎨 Styled with TailwindCSS + DaisyUI

---

## 📂 Project Structure

```
src/
 ├── api/            # API service (axios)
 ├── components/     # Reusable UI components
 ├── pages/          # Products & Orders pages
 ├── App.jsx         # Main app entry
 ├── main.jsx        # React root
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/ecommerce-frontend.git
cd ecommerce-frontend
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Project

Start development server:

```bash
npm run dev
```

By default, it runs at:

👉 [http://localhost:5173](http://localhost:5173)

---

## 🔌 Backend Setup

This project expects a backend running at:

```
http://localhost:3000
```

### Example API Endpoints:

- `GET /products` → Fetch all products
- `GET /products/:id` → Fetch single product
- `POST /products` → Create a product
- `DELETE /products/:id` → Delete a product
- `GET /orders` → Fetch all orders
- `POST /orders` → Create new order

Make sure your backend is running before starting the frontend.

---

## 🖼️ Sample Products

Here are 5 sample product details with image links you can seed in your backend:

```json
[
  {
    "name": "Wireless Headphones",
    "price": 1999,
    "description": "Noise-cancelling over-ear headphones with deep bass.",
    "image": "https://picsum.photos/200/200?random=1"
  },
  {
    "name": "Smartwatch Pro",
    "price": 3499,
    "description": "Fitness tracking smartwatch with AMOLED display.",
    "image": "https://picsum.photos/200/200?random=2"
  },
  {
    "name": "Gaming Mouse",
    "price": 1499,
    "description": "High precision RGB gaming mouse with 7 buttons.",
    "image": "https://picsum.photos/200/200?random=3"
  },
  {
    "name": "Bluetooth Speaker",
    "price": 2299,
    "description": "Portable waterproof Bluetooth speaker.",
    "image": "https://picsum.photos/200/200?random=4"
  },
  {
    "name": "Mechanical Keyboard",
    "price": 4999,
    "description": "RGB mechanical keyboard with blue switches.",
    "image": "https://picsum.photos/200/200?random=5"
  }
]
```

---

## ✅ Available Scripts

- `npm run dev` → Start dev server
- `npm run build` → Build for production
- `npm run preview` → Preview production build

---

## 📌 Notes

- Update `src/api/index.js` if backend URL changes.
- Tailwind + DaisyUI already configured.
- LocalStorage can be used for storing `API_KEY` if authentication is needed.

---
