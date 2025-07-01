import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";
import { use } from "react";
import ThemeContext from "../Context/ThemeContext";

const SlideHoverButton = ({ link, text }) => {
  const { isDark } = use(ThemeContext);

  // 🎨 Color Variables
  const bgBase = isDark ? "bg-[#333333]/20 shadow shadow-4xl shadow-[#DB2777]" : "bg-gray-200";
  const slideBg = isDark ? "bg-[#DB2777] text-white" : "bg-[#c1d443] text-green-900";
  const activeBg = isDark ? "bg-[#DB2777] text-white" : "bg-[#c1d443] text-green-950";
  const hoverText = isDark ? "group-hover:text-white" : "group-hover:text-green-950";

  return (
    <motion.div className={`relative inline-block overflow-hidden rounded-full group ${bgBase}`}>
      {/* Sliding Background */}
      <motion.span
        className={`absolute inset-0 ${slideBg} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0`}
      />

      {/* NavLink with dynamic class */}
      <NavLink
        to={`/${link}`}
        className={({ isActive }) =>
          `relative z-10 px-4 py-2 block rounded-full font-semibold transition-colors duration-500 ${
            isActive ? activeBg : hoverText
          }`
        }
      >
        {text}
      </NavLink>
    </motion.div>
  );
};

export default SlideHoverButton;
