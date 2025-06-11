import { MdCategory, MdFlightTakeoff } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaHeading, FaLocationDot } from "react-icons/fa6";
import { TbTypography } from "react-icons/tb";


const BlogCard = ({blog}) => {
  return (
    <div className="w-80 relative mb-30">
    {/* Image */}
    <img
      src={blog.image}
      alt="Bike Freight"
      className="w-full h-62 object-cover rounded-t-lg"
    />

    {/* White card - half over image, half outside */}
    <div className="absolute left-1/2 -translate-x-1/2 -bottom-24 w-[90%]  rounded-xl p-5 bg-white text-[#596610] shadow-xl z-10 border border-[#596610]">
      {/* Orange Icon */}
      <motion.div
      initial={{y:[0, -10, 0]}}
      animate={{y:[-10, 0, -10]}}
      transition={{duration: 3, repeat: Infinity}}
      className="w-14 h-14 bg-[#49501a] rounded-full flex items-center justify-center -mt-10 mx-auto shadow-md">
        <MdFlightTakeoff className="text-white text-2xl" /> 
      </motion.div>

      {/* Content */}
      <h1 className="text-center mt-3 font-semibold flex items-center gap-2"><MdCategory></MdCategory> {blog.category}</h1>
      <h3 className=" text-lg italic  flex items-center gap-2"><TbTypography></TbTypography>{blog.title}</h3>
      <div className="">
      <h3 className="text-center font-semibold flex items-center gap-2"><FaLocationDot />{blog.placeName}</h3>
      </div>
      <p className="text-sm mt-1 italic break-words line-clamp-3">
        {blog.short_description}
      </p>
      <div className=" mt-6 flex items-center gap-3">
        <Link className="bg-[#4d551b] text-white py-1 px-3 rounded-lg" 
        to={`/blogs/${blog._id}`}>Details</Link>
        <Link className="border border-[#4a521b] py-1 px-3 rounded-lg" to='/'>WishList</Link>
      </div>
    </div>
  </div>
  );
};

export default BlogCard;
