import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import WishListTable from "../Component/WishListTable";

const WishList = () => {
  const { user, setLoading } = use(AuthContext);
  console.log(user.accessToken);
  const [search, setSearch] = useState("");
  // const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API}/wishlist/${user.email}?searchParams=${search}`, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBlogs(data));
    setLoading(false);
  }, [user, search, setLoading]);

  const handleDelete = (id) => {
    // First confirm with user
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // If user confirms, proceed with deletion
        axios
          .delete(`${import.meta.env.VITE_API}/wishlist/${id}`)
          .then((res) => {
            if (res.data.success) {
              // Update the blog list
              setBlogs((prev) => prev.filter((item) => item._id !== id));
              // Show success alert
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            } else {
              // Server responded with an error
              Swal.fire({
                title: "Error!",
                text: res.data.message || "Deletion failed.",
                icon: "error",
              });
            }
          })
          .catch(() => {
            // Network or server error
            Swal.fire({
              title: "Error!",
              text: "Something went wrong. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <input
          type="text"
          placeholder="🔍 Search blogs..."
          className="border px-4 py-2 rounded-lg shadow-md mb-4 w-xs border-2 border-[#465207] bg-[#dbe5a5] text-green-950 mt-7"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <h1 className="text-2xl font-bold mb-6 text-[#6c7e13] italic">My Wish List</h1>
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            {blogs.map((blog) => (
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
