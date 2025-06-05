import React from 'react';
import AddBlogForm from '../Component/AddBlogForm';
import Lottie from 'lottie-react';
import animation from '../../public/AddBlogs.json'

const AddBlogs = () => {
    return (
        <div className='flex justify-around items-center bg-gradient-to-b from-[white]/40 via-[#e9f1b3] to-[white]/40'>
            <div className=''>
                <Lottie style={{ width: '500px', height: '600px' }} animationData={animation}></Lottie>
            </div>
            <div className=''>
                <AddBlogForm></AddBlogForm>
            </div>
        </div>
    );
};

export default AddBlogs;