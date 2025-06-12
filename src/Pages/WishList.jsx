import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

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
            {
                blogs.map(blog => <div key={blog._id} className='border mt-6'> 
                    <h1>{blog.title}</h1>
                    <h1>{blog.sort_description}</h1>
                    <h1>{blog.long_description}</h1>
                    <button onClick={()=> handleDelete(blog._id)}>delete</button>
                </div>)
            }
        </div>
    );
};

export default WishList;