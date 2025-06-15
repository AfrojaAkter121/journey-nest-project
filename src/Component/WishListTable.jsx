import React from 'react';
import { FaCarCrash } from 'react-icons/fa';
import { FaEye, FaRegHeart, FaTrash } from 'react-icons/fa6';
import { MdAutoDelete } from 'react-icons/md';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const WishListTable = ({handleDelete, blog}) => {
  console.log(blog)
  const {activities, bestTimeToVisit, category, image,  placeName,popularityReason,  title } = blog;

  const activityList = activities
  .split(',')
  .map(item => item.replace(/"/g, '').trim()); 


    return (
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ scale: 1.08, transition: { duration: 0.3 } }} 
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
       className="relative flex items-center justify-center bg-white">
      {/* Blurred Price Tag */}
      <div className="absolute left-[-30px] top-10 w-20 h-60 bg-[#9eaa4c] rounded-full blur-md opacity-80 rotate-[-10deg] z-0"></div>
      <div className="absolute left-0 top-10 w-20 h-60 bg-[#9eaa4c] rounded-full flex items-center justify-center rotate-[-10deg] z-10">
        <span className="text-white text-sm font-semibold transform -rotate-90 whitespace-nowrap">
        </span>
      </div>

      {/* Main Card */}
      <div className="relative z-20 bg-gradient-to-b from-[#e4e9c9] to-white rounded-3xl shadow-lg p-6 w-full h-full flex flex-col justify-between">
        <div className="">
          <img className='h-30 w-full object-cover rounded-t-lg' src={image} alt=""/>
          <h2 className="text-lg italic text-white bg-[#586314] text-center mb-4">{title}</h2>
          <p className="text-gray-600 mb-2">Category: {category}</p>
          <p className="text-gray-600 mb-2">Place: {placeName}</p>
          <p className="text-gray-600 mb-2">Best Time to Visit: {bestTimeToVisit}</p>
         
          <p className="text-gray-600 mb-2">Popularity Reason: {popularityReason}</p>
          <div className="flex flex-wrap gap-2">
    {activityList.map((activity, index) => (
      <span
        key={index}
        className="bg-[#d9ddbd] text-[#313804] text-sm font-medium mr-2 px-3 py-1 rounded-full"
      >
        {activity}
      </span>
    ))}
  </div>
          
        </div>
        <Link to={`/blogs/${blog.blogId}`} className="absolute mt-32 ml-60 bg-[#dde797] text-white rounded-full p-2  hover:bg-[#313804] transition">
          <FaEye className='text-green-950 hover:text-white'/>
        </Link>
        <button onClick={() => handleDelete(blog._id)} className="absolute mt-92 ml-62 bg-[#313804] text-white rounded-full p-4  hover:bg-[#313804] transition">
          <MdAutoDelete/>
        </button>
      </div>
    </motion.div>
    );
};

export default WishListTable;