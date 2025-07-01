import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { AuthContext } from "../Context/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import ThemeContext from "../Context/ThemeContext";

const UpdateBlogs = () => {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);
  const axiosSecure = useAxiosSecure();
  const blog = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());

    axiosSecure.put(`/update/${blog._id}`, formEntries).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Updated!",
          icon: "success",
        });
        navigate("/allBlogs");
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
      className={`flex flex-col md:flex-row w-full min-h-[800px] rounded-xl border-4 
        ${isDark ? "border-[#DB2777] bg-[#0f0f1d]" : "border-[#313804] bg-white"} my-10`}
    >
      <Helmet>
        <title>Update | JourneyNest</title>
      </Helmet>

      {/* Form Section */}
      <form
        onSubmit={handleUpdate}
        className="w-full md:w-1/2 p-10 flex flex-col justify-center"
      >
        <h2
          className={`text-2xl font-bold mb-6 ${isDark ? "" : "text-[#313804]"}`}
        >
          Update Your Travel Blog
        </h2>

        {/* Grouped Inputs */}
        <div className="mb-6">
          <label className={`text-sm font-semibold ${isDark ? "" : "text-[#313804]"}`}>
            Blog Title & Category
          </label>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <input
              name="title"
              defaultValue={blog.title}
              placeholder="Blog Title"
              className={`px-4 py-2 rounded font-medium transition duration-300 
                ${isDark ? "bg-[#1a1a2e] text-[#c7b2bc] border border-[#DB2777]" : "border-2 border-[#313804] text-[#4f5a0b]"}`}
              required
            />
            <select
              name="category"
              defaultValue={blog.category}
              className={`px-4 py-2 rounded font-medium transition duration-300 
                ${isDark ? "bg-[#1a1a2e] text-[#c7b2bc] border border-[#DB2777]" : "border-2 border-[#313804] text-[#4f5a0b]"}`}
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

        {/* Single Inputs */}
        <div className="mb-6">
          <label className={`text-sm font-semibold ${isDark ? "" : "text-[#313804]"}`}>
            Why is it popular?
          </label>
          <input
            name="popularityReason"
            defaultValue={blog.popularityReason}
            className={`w-full px-4 py-2 rounded font-medium transition duration-300 
              ${isDark ? "bg-[#1a1a2e] text-[#c7b2bc] border border-[#DB2777]" : "border-2 border-[#313804] text-[#4f5a0b]"}`}
            required
          />
        </div>

        <div className="mb-6">
          <label className={`text-sm font-semibold ${isDark ? "" : "text-[#313804]"}`}>
            Location, Best Time & Activities
          </label>
          <div className="grid md:grid-cols-3 gap-4 mt-2">
            {["placeName", "bestTimeToVisit", "activities"].map((field) => (
              <input
                key={field}
                name={field}
                defaultValue={blog[field]}
                placeholder={field}
                className={`px-4 py-2 rounded font-medium transition duration-300 
                  ${isDark ? "bg-[#1a1a2e] text-[#c7b2bc] border border-[#DB2777]" : "border-2 border-[#313804] text-[#4f5a0b]"}`}
                required
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className={`text-sm font-semibold ${isDark ? "" : "text-[#313804]"}`}>
            Description
          </label>
          {["long_description", "short_description"].map((field) => (
            <textarea
              key={field}
              name={field}
              defaultValue={blog[field]}
              placeholder={field}
              className={`w-full mt-2 px-4 py-2 rounded font-medium transition duration-300 
                ${isDark ? "bg-[#1a1a2e] text-[#c7b2bc] border border-[#DB2777]" : "border-2 border-[#313804] text-[#4f5a0b]"}`}
              required
            />
          ))}
        </div>

        <div className="mb-6">
          <label className={`text-sm font-semibold ${isDark ? "" : "text-[#313804]"}`}>
            User Info
          </label>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <input
              name="userName"
              defaultValue={user.displayName}
              readOnly
              className={`w-full px-4 py-2 rounded font-medium 
                ${isDark ? "bg-[#1a1a2e] text-[#c7b2bc] border border-[#DB2777]" : "border-2 border-[#313804] text-[#4f5a0b]"}`}
            />
            <input
              name="userEmail"
              defaultValue={user.email}
              readOnly
              className={`w-full px-4 py-2 rounded font-medium 
                ${isDark ? "bg-[#1a1a2e] text-[#c7b2bc] border border-[#DB2777]" : "border-2 border-[#313804] text-[#4f5a0b]"}`}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className={`text-sm font-semibold ${isDark ? "" : "text-[#313804]"}`}>
            Image URL
          </label>
          <input
            name="image"
            defaultValue={blog.image}
            placeholder="Image URL"
            className={`w-full px-4 py-2 rounded font-medium 
              ${isDark ? "bg-[#1a1a2e]  border border-[#DB2777]" : "border-2 border-[#313804] text-[#4f5a0b]"}`}
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 mt-8 rounded-full font-medium shadow-md transition-transform hover:scale-105 
            ${isDark ? "bg-[#DB2777] text-[#0f0f1d]" : "bg-gradient-to-r from-[#313804] via-[#5f6b0e] to-[#64720d] text-white"}`}
        >
          Update Blog
        </button>
      </form>

      {/* Image Side */}
      <div
        className="w-full md:w-1/2 min-h-[800px] bg-cover bg-center rounded-r-xl"
        style={{ backgroundImage: `url(${blog.image})` }}
      ></div>
    </motion.div>
  );
};

export default UpdateBlogs;
