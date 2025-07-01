import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import WishListTable from "../Component/WishListTable";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Lottie from "lottie-react";
import animation from "../../public/noData.json"; // Adjust the path as necessary
import { Helmet } from "react-helmet-async";
import ThemeContext from "../Context/ThemeContext";
import { FaSearch } from "react-icons/fa";

const WishList = () => {
  const { isDark } = use(ThemeContext);
  const { user, setLoading } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/wishlist/${user.email}?searchParams=${search}`)
      .then((res) => setBlogs(res.data));
    setLoading(false);
  }, [user, search, setLoading, axiosSecure]);

  const handleDelete = (id) => {
    // First confirm with user
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // If user confirms, proceed with deletion
        axios
          .delete(`${import.meta.env.VITE_API}/wishlist/${id}`)
          .then((res) => {
            if (res.data.success) {
              // Update the blog list
              setBlogs((prev) => prev.filter((item) => item._id !== id));
              // Show success alert
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            } else {
              // Server responded with an error
              Swal.fire({
                title: "Error!",
                text: res.data.message || "Deletion failed.",
                icon: "error",
              });
            }
          })
          .catch(() => {
            // Network or server error
            Swal.fire({
              title: "Error!",
              text: "Something went wrong. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Wishlist | JourneyNest</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative w-full max-w-xs  mt-7">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full py-2 pl-4 pr-14 rounded-full text-sm transition focus:outline-none
          ${
            isDark
              ? "bg-[#0f0f1d] text-[#DB2777] placeholder-[#DB2777]/70 border border-[#DB2777] focus:ring-2 focus:ring-[#DB2777]"
              : "bg-[#dbe5a5] text-green-950 placeholder-green-700 border border-[#465207] focus:ring-2 focus:ring-[#465207]"
          }`}
          />
          <button
            className={`absolute top-1/2 right-1 -translate-y-1/2 rounded-full p-2 transition
          ${
            isDark
              ? "bg-[#DB2777] hover:bg-[#c1216c] text-white"
              : "bg-[#465207] hover:bg-[#5c7212] text-white"
          }`}
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>
        <h1
          className={`text-2xl font-bold mb-6 mt-10 ${
            isDark ? "text-[#c1216c]" : "text-[#6c7e13]"
          } italic`}
        >
          My Wish List
        </h1>
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2  gap-7">
            {blogs.map((blog) => (
              <WishListTable
                key={blog._id}
                blog={blog}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <Lottie
              style={{ width: 600, height: 600 }}
              animationData={animation}
            ></Lottie>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
