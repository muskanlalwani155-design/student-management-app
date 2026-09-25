# Student Management CRUD Application

A responsive Single-Page Application (SPA) built with React and Vite for managing student academic records, featuring full CRUD operations, clean component architecture, and API integration.

---

## Tech Stack

* **Frontend:** React.js, Vite, Bootstrap, CSS3
* **API & Networking:** Axios, RESTful APIs / JSON Server
* **Build Tool:** Vite
* **Deployment:** Vercel

---

## Features

* **Full CRUD Operations:** Add new students, view student records in real time, edit details, and delete entries without page reloads.
* **Client-Side Validation:** Form checks to prevent invalid or empty submissions.
* **Centralized API Handling:** Configured Axios instance with request and response error handling.
* **Fast & Responsive UI:** Built using Vite for instant Hot Module Replacement (HMR) and optimized production bundles.

---

## Project Structure

```text
student-management-app/
├── public/
├── src/
│   ├── components/      # Navbar, StudentForm, StudentList, StudentItem
│   ├── services/        # Axios API service configurations
│   ├── App.jsx          # Main application component & state
│   ├── main.jsx         # Entry point
│   └── index.css        # Global layout & custom styling
├── package.json
├── vite.config.js
└── README.md
