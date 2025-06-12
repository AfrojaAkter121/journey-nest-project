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
        axios.delete(`${import.meta.env.VITE_API}/wishlist/${id}`)
          .then(res => {
            if(res.data.success){
              Swal.fire({
                title: 'Deleted!',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
              });
              
              setBlogs(prev => prev.filter(item => item._id !== id));
            } else {
              Swal.fire({
                title: 'Error!',
                text: res.data.message,
                icon: 'error',
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: 'Error!',
              text: 'Something went wrong',
              icon: 'error',
            });
          });
      }
      

    return (
        <div>
             <div className="p-4 overflow-x-auto">
                  <h2 className="text-xl font-semibold mb-4">My Wishlist</h2>
                  <table className="min-w-full border divide-y divide-gray-200 shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left">Title</th>
                        <th className="px-4 py-2 text-left">Short Description</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {
                          blogs.map(blog => <WishListTable key={blog._id} blog={blog} handleDelete={handleDelete} />)
                        }
                    </tbody>
                  </table>
                </div>
            
        </div>
    );
};

export default WishList;