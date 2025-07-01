import React from "react";
import { FaEye } from "react-icons/fa6";
import { MdAutoDelete } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "framer-motion";

const WishListTable = ({ blog, handleDelete, isDark }) => {
  const {
    activities = "",
    bestTimeToVisit,
    category,
    image,
    placeName,
    popularityReason,
    title,
  } = blog;
  const hoverEffect = isDark
  ? { scale: 1.05, boxShadow: "0 10px 20px rgba(219, 39, 119, 0.8)" }
  : { scale: 1.05, boxShadow: "0 10px 20px #cbdb5f" };

  const activityList = activities
    .split(",")
    .map((item) => item.replace(/"/g, "").trim());

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={hoverEffect}
    transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-xl rounded-xl shadow-lg overflow-hidden border ${
        isDark ? "bg-[#0f0f1d] border-[#DB2777]" : "bg-white border-gray-300"
      }`}
      style={{ height: "280px", width: "100%" }}
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="md:w-1/3 flex-shrink-0 p-3">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-2/3 p-5 flex flex-col justify-between">
          <div>
            <h3
              className={`text-xl font-bold ${
                isDark ? "text-[#DB2777]" : "text-gray-900"
              } italic mb-3 truncate`}
              title={title}
            >
              {title}
            </h3>

            <p
              className={`text-sm font-semibold ${
                isDark ? "text-white" : "text-gray-700"
              }`}
            >
              Category: <span className="font-normal">{category}</span>
            </p>
            <p
              className={`text-sm font-semibold ${
                isDark ? "text-white" : "text-gray-700"
              }`}
            >
              Place: <span className="font-normal">{placeName}</span>
            </p>
            <p
              className={`text-sm font-semibold ${
                isDark ? "text-white" : "text-gray-700"
              }`}
            >
              Best Time: <span className="font-normal">{bestTimeToVisit}</span>
            </p>
            <p
              className={`text-sm font-semibold truncate ${
                isDark ? "text-white" : "text-gray-700"
              }`}
              title={popularityReason}
            >
              Popularity Reason: <span className="font-normal">{popularityReason}</span>
            </p>

            {/* Activities */}
            <div className="flex flex-wrap gap-2 mt-3 max-h-14 overflow-y-auto">
              {activityList.map((act, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-3 py-1 rounded-full font-semibold cursor-default select-none ${
                    isDark
                      ? "bg-[#DB2777] text-[#0f0f1d]"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {act}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between mt-5">
            <Link
              to={`/blogs/${blog.blogId}`}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                isDark
                  ? "bg-[#DB2777] text-[#0f0f1d] hover:bg-[#a72169]"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              <FaEye className="inline-block mr-2" />
              View
            </Link>

            <button
              onClick={() => handleDelete(blog._id)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                isDark
                  ? "bg-[#0f0f1d] border border-[#DB2777] text-[#DB2777] hover:bg-[#DB2777] hover:text-[#0f0f1d]"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              <MdAutoDelete className="inline-block mr-2" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WishListTable;
