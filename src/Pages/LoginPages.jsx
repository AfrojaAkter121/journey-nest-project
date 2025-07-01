import React, { useContext } from "react";
import Login from "./Login";
import Lottie from "lottie-react";
import login from "../../public/Login.json";
import ThemeContext from "../Context/ThemeContext";

const LoginPages = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col-reverse md:flex-row justify-around items-center my-5 
        ${isDark
        ? "bg-gradient-to-b from-[#0f0f1d] via-[#16000a] to-[#0f0f1d]"
          : "bg-gradient-to-b from-[white]/40 via-[#e9f1b3] to-[white]/40"
        }`}
    >
      <Login />

      <div className="md:w-xl h-auto">
        <Lottie animationData={login} className="w-full" />
      </div>
    </div>
  );
};

export default LoginPages;
