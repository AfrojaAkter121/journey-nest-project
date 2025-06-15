import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CommentForm from "../Component/CommentForm";
import { AuthContext } from "../Context/AuthProvider";
import {motion} from "framer-motion";

const BlogDetails = () => {
  const { user } = use(AuthContext);
  const {id} = useParams()
  console.log(id)
  const [blog, setBlog] = useState({});

  // Fetch blog data using the loader
  useEffect(() => {
    fetch(`https://journey-nest-server.vercel.app/blogs/${id}`)
    .then(res => res.json())
    .then(data => setBlog(data))
  }, [id]);
  console.log(blog.authorPhoto)
  return (
    <div className="bg-white py-12 px-4 md:px-16 grid md:grid-cols-2 gap-10 ">
      {/* Left Side */}
      <motion.div
      initial={{ opacity: 0, x: -110 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
       className="relative">
        <div className="grid grid-cols-2 gap-2">
          <div className="relative">
            <img
              src={blog.image}
              alt="Shipping"
              className="w-full object-cover rounded-md h-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white p-4 rounded-full shadow-lg">▶</button>
            </div>
          </div>
          <img
            src={blog.image}
            alt="Worker"
            className="w-full h-full object-cover rounded-md  h-80"
          />
        </div>
        <div className="absolute top-4 rounded-r-full bg-[#bdcc6a] text-green-900 p-2 font-semibold text-center">
          <div className=" italic">{blog.bestTimeToVisit}</div>
        </div>
         <CommentForm postId={blog._id} blog={blog}></CommentForm>
        
        
      </motion.div>

      {/* Right Side */}
      <motion.div
      initial={{ opacity: 0, x: 110 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
      >
        <h4 className="text-md bg-[#bdcc6a] text-green-900 mb-2 py-1 px-2 items-center gap-2 w-40 italic ml-3 rounded-r-full rounded-t-full ">
          {blog.title}
        </h4>
        {blog.activities?.split(",").map((activity, index) => (
          <span key={index} className="badge bg-[#525e04] rounded-lg text-white ml-3">
            {activity.trim()}
          </span>
        ))}
        <h2 className="text-3xl font-bold leading-snug mb-4 mt-5">
          {blog.popularityReason}
        </h2>
        <p className="text-gray-600 ">{blog.short_description}</p>
        <p className="text-gray-600 mb-6 border-l-4 border-[#879432] pl-3 break-all">
          {blog.long_description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 text-gray-700 font-medium mb-8">
          <div>🌍 Discover hidden gems around the world</div>
          <div>✈️ Insider travel tips & hacks</div>
          <div>📸 Stunning photography from every destination</div>
          <div>🗺️ Personalized travel itineraries & guides</div>
        </div>
        <p className="">
          “Dive deep into the heart of this story, where every detail unravels a
          world of insights and inspiration. Explore the nuances that make this
          moment unforgettable, captured with passion and clarity. Let the words
          guide you through a journey of discovery, reflection, and connection.”
        </p>
       
        {/* CTA & CEO */}
        <div className="flex items-center justify-between mt-7">
          <div className="flex items-center gap-3">
            <img
              src={blog?.authorPhoto}
              alt="CEO"
              className="w-10 h-10 rounded-full object-cover"
            />
             
          </div>
          {
            user?.email === blog?.authorEmail ? <Link to={`/update/${blog._id}`}>
            <button className="bg-[#525e04] text-white px-6 py-2 rounded-md hover:bg-[#525e04] transition">
            update
          </button></Link> : ''
          }
          
        </div>
      </motion.div>
      
    </div>
  );
};

export default BlogDetails;
