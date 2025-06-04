import { Bell, Menu, Sun } from "lucide-react";
import { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthProvider";

export default function Navbar() {
  const { user, logOut } = use(AuthContext);
  const [menu, setMenu] = useState(false);

  const handleMenuBar = () => {
    setMenu(!menu);
  };

  const handleLogout =() => {
    logOut().then(() => {
      console.log('logout successful')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const links = (
    <div className="flex flex-col md:flex-row items-center italic gap-5  py-2">
      <NavLink
        className="bg-gray-200 px-4 py-2 rounded-full text-gray-600"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="bg-gray-200 px-4 py-2 rounded-full text-gray-600"
        to="/allBlogs"
      >
        All Blogs
      </NavLink>
      <NavLink
        className="bg-gray-200 px-4 py-2 rounded-full text-gray-600"
        to="/addBlogs"
      >
        Add Blog
      </NavLink>
      <NavLink
        className="bg-gray-200 px-4 py-2 rounded-full text-gray-600"
        to="/featured"
      >
        {" "}
        Featured
      </NavLink>
      <NavLink
        className="bg-gray-200 px-4 py-2 rounded-full text-gray-600"
        to="/wishList"
      >
        {" "}
        Wishlist{" "}
      </NavLink>
    </div>
  );
  return (
    <nav className="">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2 rounded-lg ">
        {/* Left: Logo */}
        <div
          className="flex py-2 pr-10 pl-4 items-center gap-3"
          style={{
            clipPath:
              "polygon(75% 0%, 100% 100%, 75% 100%, 0% 100%, 0 46%, 0% 0%)",
            backgroundColor: "#1D3D2F",
          }}
        >
          <img
            src="https://i.ibb.co/MknWVzH4/guard-travel-logo-icon-design-vector-22948229.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full border-2 border-white"
          />
          <span className="text-xl font-semibold">
            <span className="text-white">Journey</span>
            <span className="text-[#e0ee85]">Nest</span>
          </span>
        </div>

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
              <div className="w-56 absolute z-10 bg-[#D7E95D]/60 rounded-xl p-5 flex flex-col gap-3 top-18 md:right-26 right-0 justify-center  ">
                <div className="md:hidden flex ">{links}</div>

                {user ? (
                  <button
                    onClick={() => {
                      handleLogout()
                    }}
                    className="bg-green-900 text-white py-2 px-2 rounded-2xl w-[80%] italic"
                  >
                    Log Out
                  </button>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link onClick={() => console.log("clicked")} to="/signin">
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

            <div className="avatar avatar-online">
              <div className="w-10 rounded-full">
                {user ? (
                  <div className="relative group">
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="cursor-pointer rounded-full"
                    />
                    <div className="absolute top-120 left-0 bg-white text-black p-2 rounded shadow hidden group-hover:block z-50">
                      {user.displayName}
                    </div>
                  </div>
                ) : (
                  <img
                    src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                    className="h-10 w-10 rounded-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
