import axios from 'axios';
import React, { useContext } from 'react';
import { FaEye, FaRegBookmark, FaStar } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const RecentCard = ({blog}) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();

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
        <div className="w-xl rounded-2xl p-6 text-white bg-gradient-to-br from-[#0c0f29] to-[#bcce49]  border border-white/10 relative italic">
        
        <div className='grid grid-cols-3 gap-5 items-center'>
            <div className='col-span-1'> 
                <img className='w-38 h-38 rounded-full object-cover' src={blog.image} alt=""/>
            </div>
            <div className='col-span-2'>
            <h4 className="text-sm  mb-1">{blog.title}</h4>
            <h4 className="text-sm  mb-1">{blog.category}</h4>
            <h4 className="text-sm  mb-1">{blog.placeName}</h4>
        <h2 className="text-lg font-semibold leading-snug mb-6 break-all">
          {blog.popularityReason}
        </h2>
        {blog.activities?.split(",").map((activity, index) => (
          <span key={index} className="badge flex flex-wrap bg-[#d1da99]/50 rounded-lg text-black ml-3">
            {activity.trim()}
          </span>
        ))}

        <div className='mt-8 flex justify-between'>
            <Link to={`/blogs/${blog._id}`}>
                <button className="bg-[#d1da99] text-black py-2 px-4 rounded-lg hover:bg-[#c0c87b] transition duration-300">
                    <FaEye/>
                </button>
            </Link>
            <button onClick={handleAddWishlist} className="bg-[#d1da99] text-black py-2 px-4 rounded-lg hover:bg-[#c0c87b] transition duration-300 ml-2">
                <FaRegBookmark/>
            </button>
        </div>
            </div>
        </div>
        
  
      
      </div>
    );
};

export default RecentCard;