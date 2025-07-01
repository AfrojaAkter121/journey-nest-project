import { Bell, Menu, Sun } from "lucide-react";
import { FiMoon, FiSun } from "react-icons/fi";
import { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { motion } from "framer-motion";
import SlideHoverButton from "../Pages/SlideHoverButton";
import Swal from "sweetalert2";
import { MdOutlineTravelExplore } from "react-icons/md";
import ThemeContext from "../Context/ThemeContext";
import { BsFillCloudSunFill } from "react-icons/bs";

export default function Navbar() {
  const { isDark, toggleTheme } = use(ThemeContext);
  const { user, logOut } = use(AuthContext);
  const [menu, setMenu] = useState(false);

  // 🌙 Theme-Based Color Variables
  const primaryColor = isDark ? "#DB2777" : "#D7E95D";
  const textPrimary = isDark ? "text-white" : "text-black";
  // const bgPrimary = isDark ? "bg-black" : "bg-white";
  const borderPrimary = isDark ? "border-white/20" : "border-black/10";
  const dropdownBg = isDark
    ? "bg-[#1a1a2e] text-white"
    : "bg-[#D7E95D]/60 text-black";
  // Pink for both modes (not teal)
  const themeBtnBg = isDark
    ? "bg-[#DB2777] text-white border-[#DB2777] hover:bg-[#c41c65]"
    : "bg-[#D7E95D] text-black border-[#D7E95D] hover:bg-[#D7E95D]";

  // Profile dropdown card background
  const profileCardBg = isDark
    ? "bg-white/10 text-white"
    : "bg-[#D7E95D]/20 text-black";

  // Auth Buttons (Sign in, Sign up, Log out)
  const authBtn = isDark
    ? "bg-[#DB2777] text-white hover:bg-[#c41c65]"
    : "bg-[#D7E95D] text-black hover:bg-[#D7E95D]";

  const handleMenuBar = () => setMenu(!menu);

  const handleLogout = () => {
    logOut()
      .then(() => Swal.fire("Logout successful"))
      .catch((err) => Swal.fire("Logout failed", err.message, "error"));
  };

  const links = (
    <div className="flex flex-col md:flex-row items-center italic gap-5 py-2">
      <SlideHoverButton text={"Home"} link={""} />
      {user && <SlideHoverButton text={"Add Blog"} link={"addBlogs"} />}
      <SlideHoverButton text={"AllBlogs"} link={"allBlogs"} />
      <SlideHoverButton text={"Featured"} link={"featured"} />
      {!user && <SlideHoverButton text={"Meet with Guide"} link={"guide"}  />}
      {user && <SlideHoverButton text={"Wishlist"} link={"wishList"} />}
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
       className="sticky top-0 z-30 backdrop-blur-xl transition-all duration-300"
    >
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center px-4 py-2 rounded-lg ${textPrimary}`}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: [1, 0.9, 1] }}
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ duration: 2, delay: 3, repeat: Infinity }}
          className="flex py-2 pr-10 pl-4 items-center gap-3 rounded-2xl"
        >
          <MdOutlineTravelExplore
            size={35}
            className={isDark ? "text-[#DB2777]" : "text-[#414908]"}
          />
          <h1 className="text-xl md:text-4xl font-extrabold flex items-center">
            <span
              className="-rotate-12 inline-block tracking-[0.1em]"
              style={{ color: primaryColor }}
            >
              J
            </span>
            <span
              className="tracking-[0.1em] ml-1"
              style={{ color: isDark ? "white" : "#414908" }}
            >
              ourney
            </span>
            <span
              className="tracking-[0.1em] ml-1"
              style={{ color: isDark ? primaryColor : "#b8d30c" }}
            >
              Nest
            </span>
          </h1>
        </motion.div>

        {/* Right Side */}
        <div className="flex z-40 items-center gap-4">
          <div className="hidden md:flex gap-6 font-bold items-center justify-center">
            {links}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`text-2xl p-2 rounded-full border transition-colors duration-300 ${themeBtnBg}`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <BsFillCloudSunFill/>: <FiMoon />}
          </button>

          {/* Profile Menu */}
          <div
            className={`flex z-20 items-center gap-2 border ${borderPrimary} rounded-xl px-2 py-1`}
          >
            <Menu
              onClick={handleMenuBar}
              className="w-6 h-6"
              style={{ color: isDark ? "white" : "#1D3D2F" }}
            />

            {menu && (
              <div
                className={`w-60 absolute z-10 ${dropdownBg} rounded-xl p-5 flex flex-col gap-3 top-18 md:right-8 right-0 justify-center`}
              >
                {user && (
                  <div
                    className={`${profileCardBg} flex flex-col justify-center items-center p-5 rounded-lg`}
                  >
                    <img
                      src={user.photoURL}
                      className="w-20 h-20 rounded-full object-cover border-2 border-green-800"
                      alt="User"
                    />
                    <h1>{user.displayName}</h1>
                    <h1 className="break-all text-center">{user.email}</h1>
                  </div>
                )}

                <div className="md:hidden flex border-t border-dashed pt-3">
                  {links}
                </div>

                {user ? (
                  <div
                    className={`flex flex-col gap-4 justify-center text-center italic ${textPrimary}`}
                  >
                    <div className="border-dashed border" />
                    <SlideHoverButton text={"My Profile"} link={"myProfile"} />
                    <button
                      onClick={handleLogout}
                      className={`py-2 px-2 rounded-2xl italic ${authBtn}`}
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <div className="border-dashed border"></div>
                    <Link to="/signin">
                      <button
                        className={`py-2 px-2 rounded-2xl w-[80%] italic ${authBtn}`}
                      >
                        Sign In
                      </button>
                    </Link>
                    <Link to="/register">
                      <button
                        className={`py-2 px-2 rounded-2xl w-[80%] italic ${authBtn}`}
                      >
                        Register
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Profile Avatar */}
            <div>
              {user ? (
                <div className="relative group">
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="cursor-pointer w-10 h-10 object-cover rounded-full"
                  />
                  <div className="absolute top-10 left-0 text-green-800 bg-[#D7E95D] p-2 rounded shadow hidden group-hover:block z-50">
                    {user.displayName}
                  </div>
                </div>
              ) : (
                <img
                  src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                  className="h-10 w-10 rounded-full"
                  alt="Default"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
