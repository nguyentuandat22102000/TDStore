import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import './index.css';
import App from './App.js';
import Contact from "./Pages/contact.js";
import SignIn from "./Pages/sign_in.js";
import SignUp from "./Pages/sign_up.js";
import Blog from "./Pages/blog.js";
import About from "./Pages/about.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


 