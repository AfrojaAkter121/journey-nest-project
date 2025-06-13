import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import BlogCard from "../Component/BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";


const AllBlogs = () => {
  const initialBlogs = useLoaderData();
  const [category, setCategory] = useState("all");
  const [title, setTitle] = useState("");
  const [blogs, setBlogs] = useState(initialBlogs);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      
      if (title.trim() || category.trim()) {
        axios
          .get(`${import.meta.env.VITE_API}/blogs?category=${category}&title=${title}`)
          .then((res) => {
            setBlogs(res.data);
          })
          .catch((err) => console.error(err));
      } else {
        setBlogs(initialBlogs); 
      }
    }, 500);
    console.log(delayDebounce);
    return () => clearTimeout(delayDebounce);
   
  }, [title, category, initialBlogs]); 
 

  return (
    <div className="max-w-6xl mx-auto">
     
     <div className="flex justify-between mt-7">
     <input
        type="text"
        placeholder="🔍 Search blogs..."
        className="border px-4 py-2 rounded-lg shadow-md mb-4 w-sm border-2 border-[#465207]  text-green-950"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
       <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
            name="category"
            required
            className="border px-4 py-2 rounded-lg shadow-md mb-4 w-sm border-2 border-[#e5e9ce] bg-[#e8f0b6] text-green-950 "
          >
             <option value="all">All</option>
              <option value="adventure">Adventure</option>
              <option value="beaches">Beaches</option>
              <option value="mountains">Mountains</option>
              <option value="cultural">Cultural</option>
              <option value="historical">Historical</option>
              <option value="wildlife">Wildlife</option>
              <option value="city-tours">City Tours</option>
          </select>
     </div>

      <div className="grid gap-5">
        {blogs.length === 0 &&  (
          <p className="text-center text-gray-500">No blogs found.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 gap-5">
          {Array.isArray(blogs) &&
            blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
        </div>
      </div>
    </div>
  );
};


export default AllBlogs;
