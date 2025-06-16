import axios from "axios";
import React, { useEffect, useState } from "react";
import RecentCard from "./RecentCard";
import Marquee from "react-fast-marquee";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/recent`).then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-14 tracking-[0.1em]">
        <span className="text-[#9eb317] transform -rotate-12 tracking-[0.1em]">
          R
        </span>
        <span>ecent </span> <span className="text-[#9eb317]">Blogs</span>
      </h2>
      <p className="text-center ">
        “Discover our latest blog posts featuring current trends, useful tips,
        and inspiring stories. Each article <br /> is carefully crafted to
        expand your knowledge and spark your interest. Explore the newest blogs
        and make
        <br /> your journey more colorful.”
      </p>
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        <div className="flex gap-10 p-5">
          {blogs.map((blog) => (
            <RecentCard key={blog._id} blog={blog}></RecentCard>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default RecentBlogs;
