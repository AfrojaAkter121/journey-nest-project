import React from 'react';
import Header from '../Component/Header';
import CircleImageLayout from '../Component/CircleImageLayout';
import SlideHoverButton from './SlideHoverButton';
import RecentBlogs from '../Component/RecentBlogs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='bg-[#b0c047] rounded-b-lg'>
                <h1 className='p-1 text-center text-xl font-semibold italic'>Curated with love by Afroja, for every traveler with a story to tell. 🌍✨ </h1>
            </div>
            <RecentBlogs></RecentBlogs>
            <CircleImageLayout></CircleImageLayout>
            <SlideHoverButton></SlideHoverButton>
        </div>
    );
};

export default Home;