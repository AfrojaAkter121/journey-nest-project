import React from "react";

import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Newsletter from "../Component/Newsletter";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto min-h-screen">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
