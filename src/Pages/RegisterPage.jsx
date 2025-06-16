import Lottie from 'lottie-react';
import React from 'react';
import register from '../../public/register.json'
import Register from './Register';

const RegisterPage = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center my-10  bg-gradient-to-b from-[white]/40 via-[#e9f1b3] to-[white]/40'
    >
            <div className='md:max-w-xl h-auto'>
            <Lottie className='w-full' animationData={register}></Lottie>
            </div>
            
            <Register></Register>
        </div>
    );
};

export default RegisterPage;