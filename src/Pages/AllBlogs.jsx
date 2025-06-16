import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import BlogCard from "../Component/BlogCard";
import { use, useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import animation from "../../public/noData.json"; // Adjust the path as necessary
import { Helmet } from "react-helmet-async";

const AllBlogs = () => {
  const { setLoading } = use(AuthContext);
  const initialBlogs = useLoaderData();
  const [category, setCategory] = useState("all");
  const [title, setTitle] = useState("");
  const [blogs, setBlogs] = useState(initialBlogs);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setLoading(true);
      if (title.trim() || category.trim()) {
        axios
          .get(
            `${
              import.meta.env.VITE_API
            }/blogs?category=${category}&title=${title}`
          )
          .then((res) => {
            setBlogs(res.data);
            setLoading(false);
          })
          .catch((err) => console.error(err));
      } else {
        setBlogs(initialBlogs);
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [title, category, initialBlogs, setLoading]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between mt-7 p-4 md:p-0">
      <Helmet>
        <title>All Blogs | JourneyNest</title>
        </Helmet>
        <input
          type="text"
          placeholder="🔍 Search blogs..."
          className=" px-4 py-2 rounded-lg shadow-md mb-4 md:w-sm border-2 border-[#465207]  text-green-950"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          required
          className=" px-4 py-2 rounded-lg shadow-md mb-4 md:w-sm border-2 border-[#e5e9ce] bg-[#e8f0b6] text-green-950 "
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
        {blogs.length === 0 && (
          <div className="flex justify-center items-center">
            <Lottie
              style={{ width: 600, height: 600 }}
              animationData={animation}
            ></Lottie>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 gap-5">
          {Array.isArray(blogs) &&
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
