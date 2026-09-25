# Student Management CRUD Application

A responsive Single-Page Application (SPA) built with React and Vite for managing student records. The application delivers end-to-end CRUD operations, dynamic routing, shimmer loading states for better UX, and mock REST API synchronization via JSON Server.

---

## Tech Stack

* **Frontend:** React.js, Vite, CSS3
* **Routing & State:** React Router DOM, React Hooks (`useState`, `useEffect`)
* **API & Backend:** Axios, JSON Server (`db.json`)
* **Build Tool:** Vite
* **Deployment:** Vercel

---

## Features

* **Complete CRUD Capabilities:**
  * **Create:** Register new students with details via `AddStudent.jsx`.
  * **Read:** View student listings on `Home.jsx` and detailed individual profiles on `View.jsx`.
  * **Update:** Edit existing student information through `Edit.jsx`.
  * **Delete:** Remove student records dynamically without full page refresh.
* **Enhanced User Experience:** Shimmer loading state on data fetch to prevent layout shifts.
* **Error Handling:** Dedicated `ErrorPage.jsx` component to gracefully catch invalid routes or broken links.
* **Component-Driven Architecture:** Modular reusable components like `Student.jsx` for rendering student cards/rows.

---

## Project Structure

```text
student-management-app/
├── public/
├── src/
│   ├── assets/             # Static icons and assets
│   ├── Components/
│   │   └── Student.jsx     # Reusable student card/item component
│   ├── Pages/
│   │   ├── AddStudent.jsx  # Form to register a new student
│   │   ├── Edit.jsx        # Edit existing student records
│   │   ├── ErrorPage.jsx   # 404 / error boundary view
│   │   ├── Home.jsx        # Student list view with shimmer loading
│   │   └── View.jsx        # Detailed individual student view
│   ├── App.css
│   ├── App.jsx             # Main routing configuration
│   ├── index.css           # Global layout & styling
│   └── main.jsx            # React root mount
├── db.json                 # Mock backend database (JSON Server)
├── index.html
├── package.json
└── vite.config.js
