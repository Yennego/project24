// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Structure/Header";
import Footer from "./components/Structure/Footer";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Research from "../src/pages/Research";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import CategoriesPage from "../admin/CategoriesPage";
import DepartmentsPage from "../admin/DepartmentsPage";
import DocumentsPage from "../admin/DocumentsPage";
import UsersPage from "../admin/UsersPage";
// import AdminRoutes from "../admin/adminRoutes/AdminRoutes";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="research" element={<Research />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Route path="admin/*">
          <AdminRoutes />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

function AdminRoutes() {
  return (
    <>
      <Route path="categories" element={<CategoriesPage />} />
      <Route path="departments" element={<DepartmentsPage />} />
      <Route path="documents" element={<DocumentsPage />} />
      <Route path="users" element={<UsersPage />} />
    </>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
