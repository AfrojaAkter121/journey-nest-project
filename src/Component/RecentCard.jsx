
import React, { useContext } from "react";
import {
  FaEye,
  FaMapMarkerAlt,
  FaRegBookmark,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import ThemeContext from "../Context/ThemeContext";

const RecentCard = ({ blog }) => {
  const { isDark } = useContext(ThemeContext);



  // 🌙 Theme-based styles
  const cardBg = isDark ? "bg-[#1a1a2e]/80" : "bg-gray-300";
  const borderColor = isDark ? "border-white/20" : "border-gray-300";
  const sectionBg = isDark ? "bg-white/10" : "bg-white";
  const textColor = isDark ? "text-white" : "text-black";
  const mutedText = isDark ? "text-gray-400" : "text-gray-600";
  const activityColor = isDark ? "text-white" : "text-[#151802]";

  return (
    <Link
    to={`/blogs/${blog._id}`}
      className={`${cardBg} w-full max-w-md mx-auto p-5 rounded-xl shadow-md relative transition`}
    >
      <div className="relative z-10 flex items-center gap-5">
        {/* Thumbnail */}
        <div className={`rounded-xl overflow-hidden border-4 ${borderColor} w-32 h-32 flex-shrink-0`}>
          <img
            src={blog.image}
            alt="Blog thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className={`mb-2 text-sm ${mutedText}`}>⭐⭐⭐⭐</p>

          <div className="space-y-2 text-xs sm:text-sm">
            <div className={`${sectionBg} ${textColor} p-2 rounded flex items-center gap-2`}>
              <FaUsers className="text-teal-500" />
              {blog.title}
            </div>
            <div className={`${sectionBg} ${textColor} p-2 rounded flex items-center gap-2`}>
              <FaMapMarkerAlt className="text-red-500" />
              {blog.placeName} Country
            </div>
          </div>

          {/* Activities */}
          <div className="flex flex-wrap gap-2 mt-3">
            {blog.activities?.split(",").map((activity, idx) => (
              <span
                key={idx}
                className={`bg-white/20 ${activityColor} px-2 py-1 rounded-full text-xs`}
              >
                {activity.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecentCard;
