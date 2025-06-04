import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";


const SlideHoverButton = ({link, text}) => {
  return (
    <motion.div
    className="relative inline-block overflow-hidden rounded-full group bg-gray-200"
  >
    {/* Sliding Background */}
    <motion.span
      className="absolute inset-0 bg-[#c1d443] text-green-900 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"
    />

    {/* NavLink with dynamic class */}
    <NavLink
      to={`/${link}`}
      className={({ isActive }) =>
        `relative z-10 px-4 py-2 block rounded-full font-semibold transition-colors duration-500 ${
          isActive
            ? "bg-[#c1d443] text-green-950"
            : "relative z-10 font-semibold transition-colors duration-500 group-hover:text-green-950"
        }`
      }
    >
      {text}
    </NavLink>
  </motion.div>
  );
};

export default SlideHoverButton;
