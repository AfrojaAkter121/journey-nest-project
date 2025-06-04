import React from 'react';
import Login from './Login';
import Lottie from 'lottie-react';
import login from '../../public/Login.json'

const LoginPages = () => {
    return (
        <div className='flex justify-around items-center my-10  bg-gradient-to-b from-[white]/40 via-[#e9f1b3] to-[white]/40'
        >
            <Login></Login>
                <Lottie animationData={login} style={{ width: '500px', height: '600px' }}  ></Lottie>
                
            </div>
    );
};

export default LoginPages;