import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Spinner from "./Components/Spinner/Spinner.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Portfolio from "./Pages/Portfolio/Portfolio.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Spinner/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
