import Lottie from "lottie-react";
import React, { useContext } from "react";
import register from "../../public/register.json";
import Register from "./Register";
import ThemeContext from "../Context/ThemeContext";

const RegisterPage = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col md:flex-row justify-around items-center my-10 transition duration-300 ${
        isDark
          ? "bg-gradient-to-b from-[#0f0f1d]/80 via-[#16000a]/70 to-[#0f0f1d]/80 text-white"
          : "bg-gradient-to-b from-[white]/40 via-[#e9f1b3] to-[white]/40 text-[#0e241a]"
      }`}
    >
      <div className="md:max-w-xl h-auto">
        <Lottie className="w-full" animationData={register} />
      </div>

      <Register />
    </div>
  );
};

export default RegisterPage;
