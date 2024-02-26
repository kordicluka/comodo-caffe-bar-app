import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Drink from "./pages/Drink";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import SocialBar from "./components/SocialBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SocialBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:drink" element={<Drink />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
