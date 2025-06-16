import React from "react";
import Login from "./Login";
import Lottie from "lottie-react";
import login from "../../public/Login.json";

const LoginPages = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-around items-center my-20  bg-gradient-to-b from-[white]/40 via-[#e9f1b3] to-[white]/40">
      <Login></Login>

      <div className="md:w-xl  h-auto">
        <Lottie animationData={login} className="w-full"></Lottie>
      </div>
    </div>
  );
};

export default LoginPages;
