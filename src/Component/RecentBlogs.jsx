import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import RecentCard from "./RecentCard";
import Marquee from "react-fast-marquee";
import ThemeContext from "../Context/ThemeContext";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/recent`).then((res) => {
      setBlogs(res.data);
    });
  }, []);

  // Dynamic Colors
  const highlightColor = isDark ? "#c41c65" : "#9eb317";
  const textColor = isDark ? "text-white" : "text-black";
  const paraColor = isDark ? "text-gray-300" : "text-gray-600";


  return (
    <div className={` py-12 px-4 md:px-8 rounded-2xl`}>
      <h2 className={`text-3xl font-bold text-center mt-8 tracking-[0.1em] ${textColor}`}>
        <span className="transform -rotate-12 inline-block" style={{ color: highlightColor }}>
          R
        </span>
        <span>ecent </span>
        <span style={{ color: highlightColor }}>Blogs</span>
      </h2>

      <p className={`text-center mt-4 mb-6 text-sm sm:text-base ${paraColor}`}>
        “Discover our latest blog posts featuring current trends, useful tips,
        and inspiring stories. Each article <br className="hidden md:block" />
        is carefully crafted to expand your knowledge and spark your interest.
        Explore the newest blogs <br className="hidden md:block" />
        and make your journey more colorful.”
      </p>

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        <div className="flex gap-10 p-5">
          {blogs.map((blog) => (
            <RecentCard key={blog._id} blog={blog} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default RecentBlogs;
