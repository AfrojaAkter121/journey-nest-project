import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const UpdateBlogs = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const blog = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());

    // save the database
    axiosSecure.put(`/update/${blog._id}`, formEntries).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Update!",
          icon: "success",
          draggable: true,
        });
        navigate("/allBlogs");
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
      className="flex flex-col md:flex-row w-full min-h-[800px] rounded-xl border-4 border-[#313804] my-10"
    >
      {/* Right Form Section */}
      <form
        onSubmit={handleUpdate}
        className="w-full md:w-1/2 p-12 bg-white flex flex-col justify-center"
      >
        <h2 className="text-2xl text-[#313804] font-semibold font-bold mb-4">
          Update Your travel blog
        </h2>

        <div className="mb-6">
          <label className="text-sm font-semibold text-[#313804]">
            Blog title And Category
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input
              name="title"
              placeholder="Blog Title"
              defaultValue={blog.title}
              className="border-2 border-[#313804] focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#4f5a0b] font-semibold transition duration-500"
              required
            />
            <select
              name="category"
              defaultValue={blog.category}
              className="border-2 border-[#313804] focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#4f5a0b] font-semibold transition duration-500"
              required
            >
              <option value="">Select Category</option>
              <option value="adventure">Adventure</option>
              <option value="beaches">Beaches</option>
              <option value="mountains">Mountains</option>
              <option value="cultural">Cultural</option>
              <option value="historical">Historical</option>
              <option value="wildlife">Wildlife</option>
              <option value="city-tours">City Tours</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold text-[#313804]">
            popularityReason
          </label>
          <input
            name="popularityReason"
            defaultValue={blog.popularityReason}
            placeholder="popularityReason"
            className="w-full border-2 border-[#313804] focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#4f5a0b] font-semibold transition duration-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold text-[#313804]">
            Locaion & BestTime & Activities
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <input
              name="placeName"
              defaultValue={blog.placeName}
              placeholder="placeName"
              className="border-2 border-[#313804] focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#4f5a0b] font-semibold transition duration-500"
              required
            />
            <input
              type="text"
              name="bestTimeToVisit"
              defaultValue={blog.bestTimeToVisit}
              placeholder="bestTimeToVisit"
              className="border-2 border-[#313804] focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#4f5a0b] font-semibold transition duration-500"
              required
            />
            <input
              type="text"
              name="activities"
              defaultValue={blog.activities}
              placeholder="activities"
              className="border-2 border-[#313804] focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#4f5a0b] font-semibold transition duration-500"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold text-[#313804]">
            Description
          </label>
          <textarea
            name="long_description"
            defaultValue={blog.long_description}
            placeholder="long_description"
            className="w-full border-2 border-[#313804] focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#4f5a0b] font-semibold transition duration-500"
            required
          />
          <textarea
            name="short_description"
            defaultValue={blog.short_description}
            placeholder="short_description"
            className="w-full border-2 border-[#313804] focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#4f5a0b] font-semibold transition duration-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold text-[#313804]">
            User Name and Email
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input
              name="userName"
              defaultValue={user.displayName}
              readOnly
              className="w-full border-2 border-[#313804] focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#4f5a0b] font-semibold transition duration-500"
            />
            <input
              name="userEmail"
              defaultValue={user.email}
              readOnly
              className="w-full border-2 border-[#313804] focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#4f5a0b] font-semibold transition duration-500"
            />
          </div>
          <div></div>
        </div>

        <div className="mb-8">
          <label className="text-sm font-semibold text-[#313804]">
            Photo Url
          </label>
          <input
            name="image"
            defaultValue={blog.image}
            placeholder="Image URL"
            className="w-full border-2 border-[#313804] focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#4f5a0b] font-semibold transition duration-500"
            required
          />
        </div>

        <div className="flex items-center gap-6">
          <button
            type="submit"
            className="px-6 w-full py-3 mt-8 rounded-full bg-gradient-to-r from-[#313804] via-[#5f6b0e] to-[#64720d] text-white font-medium shadow-md hover:scale-105 transition-transform"
          >
            Update Group
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#ccc]"></div>
          <div className="w-2 h-2 rounded-full bg-[#ccc]"></div>
          <div className="w-2 h-2 rounded-full bg-[#cc5e33]"></div>
        </div>
      </form>

      {/* Left Image Section */}
      <div
        className="w-full md:w-1/2  min-h-[800px]  bg-cover bg-center "
        style={{
          backgroundImage: `url(${blog.image})`,
        }}
      ></div>
    </motion.div>
  );
};

export default UpdateBlogs;
