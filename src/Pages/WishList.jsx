import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import WishListTable from '../Component/WishListTable';

const WishList = () => {
    const  {user} = use(AuthContext)
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/wishlist/${user.email}`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [user])
    
    const handleDelete = (id) => {
      // First confirm with user
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          // If user confirms, proceed with deletion
          axios.delete(`${import.meta.env.VITE_API}/wishlist/${id}`)
            .then((res) => {
              if (res.data.success) {
                // Update the blog list
                setBlogs(prev => prev.filter(item => item._id !== id));
                // Show success alert
                Swal.fire({
                  title: "Deleted!",
                  text: "Your item has been deleted.",
                  icon: "success"
                });
              } else {
                // Server responded with an error
                Swal.fire({
                  title: "Error!",
                  text: res.data.message || "Deletion failed.",
                  icon: "error"
                });
              }
            })
            .catch(() => {
              // Network or server error
              Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again.",
                icon: "error"
              });
            });
        }
      });
    };
    

    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">My Wish List</h1>
                {blogs.length > 0 ? (
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
                        {blogs.map(blog => (
                            <WishListTable
                                key={blog._id}
                                blog={blog}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </div>
                    
                ) : (
                    <p className="text-gray-500">No items in your wish list.</p>
                )}
            </div>
        </div>
    );
};

export default WishList;