import { MdCategory, MdFlightTakeoff } from "react-icons/md";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { FaHeading, FaLocationDot } from "react-icons/fa6";
import { TbTypography } from "react-icons/tb";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";


const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const wishData = {
    ...blog,
    userEmail: user?.email,
    addedAt: new Date(),
  };

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
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
     className=" relative mb-30">
      {/* Image */}
      <img
        src={blog.image}
        alt="Bike Freight"
        className="w-full h-62 object-cover rounded-t-lg"
      />

      {/* White card - half over image, half outside */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -bottom-24 hover:-bottom-0 duration-300 w-[90%] hover:w-[100%] rounded-xl p-5
      bg-white/80 text-green-950 shadow-lg shadow-[#596610] z-10 border border-[#596610]"
      >
        {/* Orange Icon */}
        <motion.div
          initial={{ y: [0, -10, 0] }}
          animate={{ y: [-10, 0, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-14 h-14 bg-[#c1d443] text-green-950 rounded-full flex items-center justify-center -mt-10 mx-auto shadow-md"
        >
          <MdFlightTakeoff className=" text-2xl" />
        </motion.div>

        {/* Content */}
        <h1 className="text-center mt-3 font-semibold flex items-center gap-2">
          <MdCategory></MdCategory> {blog.category}
        </h1>
        <h3 className=" text-lg  flex items-center gap-2">
          <TbTypography></TbTypography>
          {blog.title}
        </h3>
        <div className="">
          <h3 className="text-center font-semibold flex items-center gap-2">
            <FaLocationDot />
            {blog.placeName}
          </h3>
        </div>
        <p className="text-sm mt-1 break-words line-clamp-3">
          {blog.short_description}
        </p>
        <div className=" mt-6 flex items-center gap-3">
          <Link
            className="bg-[#c1d443] text-green-950 py-1 px-3 rounded-lg italic"
            to={`/blogs/${blog._id}`}
          >
            Details
          </Link>
          <Link
            onClick={handleAddWishlist}
            className="border border-[#4a521b] py-1 px-3 rounded-lg italic"
          >
            WishList
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
