import { Bell, Menu, Sun } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenuBar = () => {
    setMenu(!menu);
  };

  const links = (
    <div className="flex flex-col md:flex-row items-center italic gap-5  py-2">
      <NavLink className='bg-gray-200 px-4 py-2 rounded-full text-gray-600' to="/">Home</NavLink>
      <NavLink className='bg-gray-200 px-4 py-2 rounded-full text-gray-600' to="/allBlogs">All Blogs</NavLink>
      <NavLink className='bg-gray-200 px-4 py-2 rounded-full text-gray-600' to="/createGroup">Create Group</NavLink>
      <NavLink className='bg-gray-200 px-4 py-2 rounded-full text-gray-600' to="/allGroups">All Group</NavLink>
    </div>
  );
  return (
    <nav className="">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2 rounded-lg ">
        {/* Left: Logo */}
        <div className="flex py-2 pr-10 pl-4 items-center gap-3"
        style={{
          clipPath: "polygon(75% 0%, 100% 100%, 75% 100%, 0% 100%, 0 46%, 0% 0%)",
           backgroundColor: "#1D3D2F"
        }}>
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
          <Sun className="w-5 h-5 text-green-900" />

          {/* Profile Menu */}
          <div className="flex z-20 items-center gap-2 border border-[#aabd32] rounded-xl px-2 py-1">
            <Menu onClick={handleMenuBar} className="w-6 h-6 text-gray-600" />
            {menu && (
              <div className="w-56 absolute z-10 bg-[#D7E95D]/60 rounded-xl p-5 flex flex-col gap-3 top-18 right-24 justify-center  ">
                <div className="md:hidden flex ">{links}</div>

                <Link onClick={()=>console.log('clicked')} to="/signin">
                  <button className=" bg-green-900 text-white py-2 px-2 rounded-2xl w-[80%] italic">Sign In</button>
                </Link>

                <Link to="/register">
                  <button className="bg-green-900 z-50 text-white py-2 px-2 rounded-2xl w-[80%] italic w-[80%]">Register</button>
                </Link>

              </div>
            )}
            <div className="avatar avatar-online">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
