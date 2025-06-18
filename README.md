# 🤖 AI Tools Explorer Challenge

A full-stack web app built with **React** and **Node.js (Express)** that allows users to:

- Browse a list of AI tools
- Filter by category or name
- Mark tools as favorites
- View and remove favorites
- Enjoy bonus features like **Dark Mode**, **Search**, **Confetti**, and a **Category Chart**

---

## 📸 Screenshots

### 🧠 All Tools Page
![All Tools](./client/public/screenshots/all-tools.png)

### ❤️ My Favorites
![Favorites](./client/public/screenshots/favorites.png)

### 🎉 Confetti Animation on Favorite
![Confetti](./client/public/screenshots/confetti.png)

### 🌙 Dark Mode Toggle
![Dark Mode](./client/public/screenshots/dark-mode.png)

---

## 🧱 Folder Structure

```
/client   --> React Frontend
/server   --> Express Backend
```

---

## 🚀 How to Run the Project

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/ai-tools-explorer.git
cd ai-tools-explorer
```

---

### 2. Start the Backend

```bash
cd server
npm install
node index.js
```

- Runs on: `http://localhost:5000`

---

### 3. Start the Frontend

```bash
cd ../client
npm install
npm start
```

- Runs on: `http://localhost:3000`

---

## 🧠 Features

- ✅ View all AI tools
- ✅ Filter by category
- ✅ Search by name
- ✅ Mark/unmark favorites
- ✅ Remove favorite items
- ✅ Error handling for duplicates
- ✅ Mobile responsive UI
- ✅ Loading & error states

---

## 🎁 Bonus Features Implemented

| Feature              | Status   |
|----------------------|----------|
| 🌙 Dark mode toggle  | ✅ Done  |
| 📊 Category Chart    | ✅ Done  |
| 🔍 Search by name    | ✅ Done  |
| 🎉 Confetti on Save  | ✅ Done  |

---

## 📦 Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Charting**: Chart.js
- **Confetti**: `canvas-confetti`

---

## ⚠️ Notes

- Data is stored in-memory, no database required
- Favorites reset on server restart

---

## 👨‍💻 Developed By

Akshit Kumar – Internship Challenge Submission for **Simplify AI Tools**
