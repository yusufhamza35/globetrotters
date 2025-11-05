import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Tours from "./components/tours/Tours";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { ClipLoader } from "react-spinners";
import TourPage from "./components/tours/TourPage";
import PopularTours from "./components/popularTours/PopularTours";
import Error from "./components/error/Error";
import Blogs from "./components/blog/Blogs";
import BlogDetail from "./components/blog/BlogDetail";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container w-full">
      <Header />

      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <ClipLoader color="#2563EB" size={60} />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/turlar/:page?/:transport?" element={<Tours />} />
          <Route path="/tur/:slug" element={<TourPage />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/populer-turlar" element={<PopularTours />} />
          <Route path="/bloglar/:page/:category" element={<Blogs />} />
          <Route path="/bloglar" element={<Navigate to="/bloglar/1/hepsi" />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}

      <Footer />
    </div>
  );
}
