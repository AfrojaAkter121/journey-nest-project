import React from "react";
import { FaEye } from "react-icons/fa6";
import { MdAutoDelete } from "react-icons/md";
import { Link } from "react-router"; // ✅ Fix: 'react-router' → 'react-router-dom'
import { motion } from "framer-motion";

const WishListTable = ({ handleDelete, blog }) => {
  const {
    activities,
    bestTimeToVisit,
    category,
    image,
    placeName,
    popularityReason,
    title,
  } = blog;

  const activityList = activities
    .split(",")
    .map((item) => item.replace(/"/g, "").trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
      className="flex items-center justify-center bg-white px-7 md:px-0"
    >
      {/* Decorative left bar */}
      <div className="relative w-full max-w-md bg-gradient-to-b from-[#e4e9c9] to-white rounded-3xl shadow-lg p-6 flex flex-col justify-between">
        {/* Blurred Decoration */}
        <div className="absolute left-[-30px] top-10 w-20 h-60 bg-[#9eaa4c] rounded-full blur-md opacity-80 rotate-[-10deg] z-0"></div>
        <div className="absolute left-0 top-10 w-20 h-60 bg-[#9eaa4c] rounded-full flex items-center justify-center rotate-[-10deg] z-10">
          <span className="text-white text-sm font-semibold transform -rotate-90 whitespace-nowrap"></span>
        </div>

        {/* Main Content */}
        <div className="z-20">
          <img
            className="h-40 w-full object-cover rounded-t-lg mb-4"
            src={image}
            alt="Blog"
          />
          <h2 className="text-lg italic text-white bg-[#586314] text-center mb-4">
            {title}
          </h2>
          <p className="text-gray-600 mb-2">Category: {category}</p>
          <p className="text-gray-600 mb-2">Place: {placeName}</p>
          <p className="text-gray-600 mb-2">
            Best Time to Visit: {bestTimeToVisit}
          </p>
          <p className="text-gray-600 mb-2">
            Popularity Reason: {popularityReason}
          </p>

          {/* Activity Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {activityList.map((activity, index) => (
              <span
                key={index}
                className="bg-[#d9ddbd] text-[#313804] text-sm font-medium px-3 py-1 rounded-full"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-6">
          <Link
            to={`/blogs/${blog.blogId}`}
            className="bg-[#dde797] text-white rounded-full p-2 hover:bg-[#313804] transition"
          >
            <FaEye className="text-green-950 hover:text-white" />
          </Link>

          <button
            onClick={() => handleDelete(blog._id)}
            className="bg-[#313804] text-white rounded-full p-3 hover:bg-red-700 transition cursor-pointer"
          >
            <MdAutoDelete size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WishListTable;
