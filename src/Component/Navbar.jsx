import { Bell, Menu, Sun } from "lucide-react";
import { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { motion } from "framer-motion";
import SlideHoverButton from "../Pages/SlideHoverButton";
import Swal from "sweetalert2";
import { MdOutlineTravelExplore } from "react-icons/md";

export default function Navbar() {
  const { user, logOut } = use(AuthContext);
  const [menu, setMenu] = useState(false);

  const handleMenuBar = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("logout successful");
      })
      .catch((err) => {
        Swal.err(err);
      });
  };

  const links = (
    <div className="flex flex-col md:flex-row items-center italic gap-5  py-2">
      <SlideHoverButton text={"Home"} link={""}></SlideHoverButton>
      <SlideHoverButton text={"Add Blog"} link={"addBlogs"}></SlideHoverButton>
      <SlideHoverButton text={"AllBlogs"} link={"allBlogs"}></SlideHoverButton>
      <SlideHoverButton text={"Featured"} link={"featured"}></SlideHoverButton>
      <SlideHoverButton text={" Wishlist"} link={"wishList"}></SlideHoverButton>
    </div>
  );
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 rounded-lg ">
        {/* Left: Logo */}
        <motion.div
          initial={{ scale: [1, 0.9, 1] }}
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ duration: 2, delay: 3, repeat: Infinity }}
          className="flex py-2 pr-10 pl-4 items-center gap-3  rounded-2xl"
        >
          
          <MdOutlineTravelExplore size={35} className="text-[#414908]" />
          <h1 className="text-4xl font-extrabold flex items-center">
            <span className="text-[#b8d30c] -rotate-12 inline-block tracking-[0.1em]">
              J
            </span>
            <span className="text-[#414908] tracking-[0.1em] ml-1">ourney</span>
            
            <span className="text-[#b8d30c] tracking-[0.1em] ml-1">Nest</span>
          </h1>
        </motion.div>

        {/* Right: Icons + Profile */}
        <div className="flex z-40 items-center gap-4">
          <div className="hidden md:flex gap-6 font-bold items-center justify-center">
            {links}
          </div>
          {/* Theme Toggle Icon */}
          <Sun className="w-6 h-6 text-[#1D3D2F]" />

          {/* Profile Menu */}
          <div className="flex z-20 items-center gap-2 border border-[#1D3D2F] rounded-xl px-2 py-1">
            <Menu onClick={handleMenuBar} className="w-6 h-6 text-[#1D3D2F]" />
            {menu && (
              <div className="w-60 absolute z-10 bg-[#D7E95D]/60 rounded-xl p-5 flex flex-col gap-3 top-18 md:right-8 right-0 justify-center  ">
                {user && (
                  <div className="bg-white/50 flex flex-col justify-center items-center p-5 rounded-lg">
                    <img
                      src={user.photoURL}
                      className="w-20 h-20 rounded-full object-cover border-2 border-green-800"
                      alt=""
                      srcset=""
                    />
                    <h1>{user.displayName}</h1>
                    <h1 className="break-all">{user.email}</h1>
                  </div>
                )}

                <div className="md:hidden flex border-t border-dashed pt-3 ">
                  {links}
                </div>

                {user ? (
                  <div className="flex flex-col gap-4 justify-center text-center italic">
                    <div className="border-dashed border"></div>
                    <SlideHoverButton
                      text={"My Profile"}
                      link={"myProfile"}
                    ></SlideHoverButton>
                    <button
                      onClick={() => {
                        handleLogout();
                      }}
                      className="bg-green-900 text-white py-2 px-2 rounded-2xl  italic"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <div className="border-dashed border"></div>
                    <Link to="/signin">
                      <button className=" bg-green-900 text-white py-2 px-2 rounded-2xl w-[80%] italic">
                        Sign In
                      </button>
                    </Link>

                    <Link to="/register">
                      <button className="bg-green-900 z-50 text-white py-2 px-2 rounded-2xl w-[80%] italic w-[80%]">
                        Register
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            <div className="">
              <div className="">
                {user ? (
                  <div className="relative group ">
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
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
