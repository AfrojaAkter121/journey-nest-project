import { flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { FaEye, FaRegHeart } from 'react-icons/fa6';
import { Link } from 'react-router';

const Featured = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`${import.meta.env.VITE_API}/blogs`)
        .then(res => res.json())
        .then(blogs => {
          const sorted = blogs
            .filter(blog => blog.long_description)
            .sort((a, b) => b.long_description.length - a.long_description.length)
            .slice(0, 10);
          setData(sorted);
        });
    }, []);
    console.log(data)
   // Sort blogs by description length and pick top 10
   const topBlogs = useMemo(() => {
    const sorted = [...data].sort(
      (a, b) => b.long_description.length - a.long_description.length
    );
    return sorted.slice(0, 10);
  }, [data]);

  const columns = [
    {
      header: 'Image',
      accessorKey: 'image',
      cell: ({ row }) => <img src={row.original.image} alt="" className="w-24 h-20 object-cover rounded-lg p-1" />,
    },
    {
      header: 'placeName',
      accessorKey: 'placeName',
    },
    {
      header: 'Title',
      accessorKey: 'title',
    },
    {
      header: 'Best Time',
      accessorKey: 'bestTimeToVisit',
      cell: ({ cell }) => {
        const value = cell.getValue();
        return (
          <div title={value}>
            {value?.length > 20 ? value.slice(0, 20) + '...' : value}
          </div>
        );
      },
    },
    {
      header: 'authorName',
      accessorKey: 'authorName',
    },
    {
        header: 'Created Date',
        accessorKey: 'createAt',
        cell: ({ cell }) => {
            const value = cell.getValue();  // এটা দিয়ে value নিতে হবে
        
            if (!value) return 'No Date';
        
            return value.slice(0, 10);
          }
      },
    {
      header: 'Des Length',
      accessorKey: 'descLength',
      cell: ({ row }) => row.original.long_description.length,
    },
    {
        header: 'Details',
        id: 'details', // এটা দিতে হবে কারণ accessorKey নাই
        cell: ({ row }) => {
          const blogId = row.original._id;
          return (
            <Link to={`/blogs/${blogId}`}>
                <button className="bg-[#bfce61] p-2 px-3 text-white rounded-2xl"><FaEye size={16} className='text-black'></FaEye></button></Link>
          );
        },
      }
  ];

  const table = useReactTable({
    data: topBlogs,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: [],
    },
  });

    return (
        <div className="py-10">
        <h2 className="text-xl font-semibold mb-4 italic bg-[#bfce61] px-5 py-2 w-48">Featured Blogs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-[#bfce61] rounded-xl">
            <thead className="bg-[#bfce61]">
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      className="p-2 text-left border-b border-[#bfce61] cursor-pointer"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() === 'asc' ? ' 🔼' : header.column.getIsSorted() === 'desc' ? ' 🔽' : ''}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id} className="even:bg-[#e6ecb9]/80
                 odd:bg-[#ecf0d5]">
                  {row.getVisibleCells().map(cell => (
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