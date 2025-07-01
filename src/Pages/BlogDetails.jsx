import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router";
import CommentForm from "../Component/CommentForm";
import { AuthContext } from "../Context/AuthProvider";
import ThemeContext from "../Context/ThemeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`https://journey-nest-server.vercel.app/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  return (
    <div className={`py-12 px-4 md:px-16 grid md:grid-cols-2 gap-10 ${isDark ? " text-white" : "bg-white text-green-950"}`}>
      <Helmet>
        <title>Blog Details | JourneyNest</title>
      </Helmet>

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -110 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
        className="relative"
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <img
              src={blog.image}
              alt="Cover"
              className="w-full object-cover rounded-lg h-80 shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className={`${isDark ? "bg-white text-[#0f0f1d]" : "bg-white"} p-4 rounded-full shadow-xl`}>
                ▶
              </button>
            </div>
          </div>
          <img
            src={blog.image}
            alt="Side"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className={`absolute top-4 rounded-r-full px-4 py-1 font-semibold text-sm ${isDark ? "bg-[#DB2777] text-[#f4f4f7]" : "bg-[#bdcc6a] text-green-900"}`}>
          {blog.bestTimeToVisit}
        </div>

        <CommentForm postId={blog._id} blog={blog} />
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 110 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
      >
        <h4 className={`text-md italic w-fit mb-2 px-4 py-1 rounded-full ${isDark ? "bg-[#DB2777] text-[#0f0f1d]" : "bg-[#bdcc6a] text-green-900"}`}>
          {blog.title}
        </h4>

        <div className="mb-3">
          {blog.activities?.split(",").map((activity, index) => (
            <span
              key={index}
              className={`inline-block px-3 py-1 text-sm font-medium rounded-lg mr-2 mb-2 ${isDark ? "bg-[#DB2777] text-[#0f0f1d]" : "bg-[#525e04] text-white"}`}
            >
              {activity.trim()}
            </span>
          ))}
        </div>

        <h2 className="text-3xl font-bold leading-snug mb-4">{blog.popularityReason}</h2>
        <p className={`mb-3 ${isDark ? "" : "text-gray-700"}`}>
          {blog.short_description}
        </p>
        <p className={`mb-6 pl-3 border-l-4 ${isDark ? "border-[#DB2777]/40" : "border-[#879432]"} break-words`}>
          {blog.long_description}
        </p>

        <div className={`grid grid-cols-2 gap-2 font-medium mb-6 ${isDark ? "" : "text-gray-700"}`}>
          <div>🌍 Discover hidden gems around the world</div>
          <div>✈️ Insider travel tips & hacks</div>
          <div>📸 Stunning photography from every destination</div>
          <div>🗺️ Personalized travel itineraries & guides</div>
        </div>

        <p className={`${isDark ? "" : "text-gray-700"}`}>
          “Dive deep into the heart of this story, where every detail unravels a world of insights and inspiration...”
        </p>

        {/* Author & Update */}
        <div className="flex items-center justify-between mt-7">
          <div className="flex items-center gap-3">
            <img
              src={blog?.authorPhoto}
              alt="Author"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>{blog?.authorName}</span>
          </div>
          {user?.email === blog?.authorEmail && (
            <Link to={`/update/${blog._id}`}>
              <button className={`px-5 py-2 rounded-md font-medium transition ${isDark ? "bg-[#DB2777] text-[#0f0f1d]" : "bg-[#525e04] text-white"}`}>
                Update
              </button>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
