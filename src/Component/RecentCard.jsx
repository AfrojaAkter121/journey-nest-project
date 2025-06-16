import axios from "axios";
import React, { useContext } from "react";
import {
  FaEye,
  FaMapMarkerAlt,
  FaRegBookmark,
  FaStar,
  FaTag,
  FaUsers,
  FaVoicemail,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const RecentCard = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const wishData = {
    ...blog,
    userEmail: user?.email,
    addedAt: new Date(),
  };

  console.log(blog);

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
          Swal.fire(
            "Error",
            err.response?.data?.message || "Something went wrong",
            "error"
          );
        }
      });
  };

  return (
    <div className="bg-[#4c5704]/70 w-sm md:w-lg text-white p-6  rounded-lg relative overflow-hidden">
      <div className="absolute top-0 right-0  h-full bg-white transform rotate-45 translate-x-1/3 -translate-y-1/3 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        <div className="rounded-xl border-4 border-white overflow-hidden w-40 h-70">
          <img
            src={blog.image}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
        
          <p className="text-gray-300 mb-4">⭐⭐⭐⭐</p>

          <div className="space-y-3 text-sm">
            <div className="flex w-full items-center gap-2 bg-gray-800 p-2 rounded">
              <FaUsers className="text-teal-600" />
              {blog.title}
            </div>
            <div className="col-span-1  flex items-center gap-2 bg-gray-800 p-2 rounded">
              <FaMapMarkerAlt className="text-red-500" />
              {blog.placeName} Country
            </div>
            
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
           {blog.activities?.split(",").map((activity, index) => (
              <span
                key={index}
                className=" bg-white/20 text-[#151802] px-2 py-1 space-x-2 space-y-2 rounded-lg  ml-3"
              >
                {activity.trim()}
              </span>
            ))}
           </div>
          <div className="flex justify-between items-center mt-7">
            <Link to={`/blogs/${blog._id}`}>
              <button className="bg-[#d1da99] text-black py-2 px-4 rounded-lg hover:bg-[#c0c87b] transition duration-300">
                <FaEye />
              </button>
            </Link>
            <button
              onClick={handleAddWishlist}
              className="bg-[#d1da99] text-black py-2 px-4 rounded-lg hover:bg-[#c0c87b] transition duration-300 ml-2"
            >
              <FaRegBookmark />
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
