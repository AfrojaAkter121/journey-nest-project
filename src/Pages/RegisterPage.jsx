import Lottie from 'lottie-react';
import React from 'react';
import register from '../../public/register.json'
import Register from './Register';

const RegisterPage = () => {
    return (
        <div className='flex justify-around items-center py-20'>
            <Lottie style={{ width: '500px', height: '600px' }}  animationData={register}></Lottie>
            <Register></Register>
        </div>
    );
};

export default RegisterPage;