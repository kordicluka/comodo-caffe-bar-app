import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Drink from "./pages/Drink";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import SocialBar from "./components/SocialBar";
import { AppProvider } from "./AppContext";
import Categories from "./pages/Categories";

function App() {
  return (
    <>
      {" "}
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <SocialBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Categories />} />
            <Route path="/menu/:category" element={<Menu />} />
            <Route path="/menu/:category/:drink" element={<Drink />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:slug" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
