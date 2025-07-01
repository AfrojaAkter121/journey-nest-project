import React, { useContext, useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";

const Featured = () => {
  const [data, setData] = useState([]);
  const { setLoading } = useContext(AuthContext);

  const API = import.meta.env.VITE_API;

  useEffect(() => {
    setLoading(true); // Set loading state to true
    const loadBlogs = async () => {
      try {
        const res = await fetch(`${API}/blogs`);
        const blogs = await res.json();

        const top10 = blogs
          .filter((b) => b.long_description)
          .sort((a, b) => b.long_description.length - a.long_description.length)
          .slice(0, 10);

        setData(top10);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    loadBlogs();
    // We deliberately leave [] empty to avoid loop
  }, []);


  const columns = [
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }) => (
        <img
          src={row.original.image}
          alt=""
          className="w-24 h-20 object-cover rounded-lg p-1"
        />
      ),
    },
    { header: "Place Name", accessorKey: "placeName" },
    { header: "Title", accessorKey: "title" },
    {
      header: "Best Time",
      accessorKey: "bestTimeToVisit",
      cell: ({ cell }) => {
        const val = cell.getValue();
        return (
          <div title={val}>
            {val?.length > 20 ? val.slice(0, 20) + "..." : val}
          </div>
        );
      },
    },
    { header: "Author Name", accessorKey: "authorName" },
    {
      header: "Created Date",
      accessorKey: "createAt",
      cell: ({ cell }) =>
        cell.getValue() ? cell.getValue().slice(0, 10) : "No Date",
    },
    {
      header: "Des Length",
      accessorKey: "descLength",
      cell: ({ row }) => row.original.long_description.length,
    },
    {
      header: "Details",
      id: "details",
      cell: ({ row }) => (
        <Link to={`/blogs/${row.original._id}`}>
          <button className="bg-[#bfce61] p-2 px-3 text-white rounded-2xl cursor-pointer">
            <FaEye size={16} className="text-black" />
          </button>
        </Link>
      ),
    },
  ];

  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  });

  return (
    <div className="py-10">
      <Helmet>
        <title>Featured Blogs | JourneyNest</title>
        </Helmet>
      <h2 className="text-xl font-semibold mb-4 italic bg-[#bfce61] px-5 py-2 w-48">
        Featured Blogs
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-[#bfce61] rounded-xl">
          <thead className="bg-[#bfce61]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-2 text-left border-b border-[#bfce61] cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === "asc"
                      ? " 🔼"
                      : header.column.getIsSorted() === "desc"
                      ? " 🔽"
                      : ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="even:bg-[#e6ecb9] odd:bg-[#ecf0d5]">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 border-b border-[#bfce61]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Featured;
