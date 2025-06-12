import React from 'react';
import { FaEye, FaRegHeart, FaTrash } from 'react-icons/fa6';

const WishListTable = ({handleDelete, blog}) => {
    return (
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
        <tr key={blog._id}>
              <td className="px-4 py-3 font-medium">{blog.title}</td>
              <td className="px-4 py-3">{blog.sort_description}</td>
              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  Saved
                </span>
              </td>
              <td className="px-4 py-3 space-x-3 text-gray-600">
                <button title="View">
                  <FaEye className="inline text-blue-500 hover:text-blue-700" />
                </button>
                <button title="React">
                  <FaRegHeart className="inline text-pink-500 hover:text-pink-700" />
                </button>
                <button onClick={() => handleDelete(blog._id)} title="Delete">
                  <FaTrash className="inline text-red-500 hover:text-red-700" />
                </button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    );
};

export default WishListTable;