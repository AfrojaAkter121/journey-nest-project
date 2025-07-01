import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Newsletter from "../Component/Newsletter";
import ThemeContext from "../Context/ThemeContext";
import { use } from "react";

const MainLayout = () => {
  const { isDark } = use(ThemeContext);

  // 🌙 Background gradient for dark mode
  const bgClass = isDark
    ? "bg-gradient-to-br from-black via-[#0f0f1d] to-[#1a1a2e] text-white"
    : "bg-white text-black";

  return (
    <div className={`${bgClass} transition-colors duration-500`}>
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
