import React from 'react';
import AddBlogForm from '../Component/AddBlogForm';
import Lottie from 'lottie-react';
import animation from '../../public/AddBlogs.json'
import { motion } from 'framer-motion';

const AddBlogs = () => {
    return (
        <div className='flex justify-around items-center bg-gradient-to-b from-[white]/40 via-[#e9f1b3] to-[white]/40 mb-20'>
            <motion.div
             initial={{ opacity: 0, x: -100 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.1 }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
             className=''>
                <Lottie style={{ width: '500px', height: '600px' }} animationData={animation}></Lottie>
            </motion.div>
            <div className=''>
                <AddBlogForm></AddBlogForm>
            </div>
        </div>
    );
};

export default AddBlogs;