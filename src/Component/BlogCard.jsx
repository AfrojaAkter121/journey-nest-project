import { MdCategory, MdFlightTakeoff } from "react-icons/md";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { TbTypography } from "react-icons/tb";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const wishData = {
    ...blog,
    userEmail: user?.email,
    addedAt: new Date(),
  };

  const handleAddWishlist = () => {
    axios
      .post(`${import.meta.env.VITE_API}/wishlist`, wishData)
      .then((res) => {
        if (res.data.result.insertedId) {
          Swal.fire("Added!", "Blog added to wishlist!", "success");
          navigate("/wishList");
        }
      })
      .catch((err) => {
        if (err.response?.status === 409) {
          Swal.fire("Oops!", "Already in wishlist!", "info");
        } else {
          Swal.fire("Error", err?.response?.data?.message || "Failed", "error");
        }
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(219, 39, 119, 0.5)",
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
      className="relative mb-40 p-5 md:p-0"
    >
      {/* Image */}
      <img
        src={blog.image}
        alt="Blog"
        className="w-full h-60 object-cover rounded-t-xl"
      />

      {/* Card Body */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 -bottom-32 hover:-bottom-8 duration-300 w-[90%] hover:w-[100%] rounded-xl p-5 z-10 border shadow-lg
        ${isDark
            ? "bg-[#0f0f1d] text-white border-[#DB2777] shadow-[#DB2777]/30"
            : "bg-white/80 text-green-950 border-[#596610] shadow-[#596610]"
        }`}
      >
        {/* Floating Icon */}
        <motion.div
          initial={{ y: [0, -10, 0] }}
          animate={{ y: [-10, 0, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
          className={`w-14 h-14 rounded-full flex items-center justify-center -mt-10 mx-auto shadow-md 
          ${isDark ? "bg-[#DB2777] text-[#0f0f1d]" : "bg-[#c1d443] text-green-950"}`}
        >
          <MdFlightTakeoff className="text-2xl" />
        </motion.div>

        {/* Content */}
        <h1 className="text-center mt-3 font-semibold flex items-center gap-2">
          <MdCategory /> {blog.category}
        </h1>
        <h3 className="text-lg flex items-center gap-2">
          <TbTypography /> {blog.title}
        </h3>
        <h3 className="text-center font-semibold flex items-center gap-2">
          <FaLocationDot /> {blog.placeName}
        </h3>
        <p className="text-sm mt-1 line-clamp-3 break-words">
          {blog.short_description}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-3 justify-center">
          <Link
            to={`/blogs/${blog._id}`}
            className={`py-1 px-4 rounded-full italic font-medium transition
              ${isDark ? "bg-[#DB2777] text-[#0f0f1d]" : "bg-[#c1d443] text-green-950"}`}
          >
            Details
          </Link>
          <button
            onClick={handleAddWishlist}
            className={`py-1 px-4 rounded-full italic border transition
              ${isDark
                ? "border-[#DB2777] text-white"
                : "border-[#4a521b] text-green-950"}`}
          >
            Wishlist
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
