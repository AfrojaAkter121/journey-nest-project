
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import BlogCard from '../Component/BlogCard';

const AllBlogs = () => {
    const blogs = useLoaderData()
    console.log(blogs)
    
    return (
            <div className='max-w-6xl mx-auto grid grid-cols-3 my-10 gap-5'>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
    );
};

export default AllBlogs;