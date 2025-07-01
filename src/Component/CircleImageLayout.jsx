import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

export default function CircleImageLayout() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          initial={{ y: [10, 0, 10] }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className={`text-center md:w-md text-2xl font-bold italic ${
            isDark ? "bg-[#c41c65] text-white" : "bg-[#c3d35a] text-black"
          }`}
        >
          Discover Stories Around the Globe
        </motion.h1>
        <p
          className={`${
            isDark ? "text-gray-300" : "text-[#3e4705]"
          } text-center mt-5`}
        >
          Travel brings us together. Each journey tells a different story — from
          cozy <br /> cafés in Paris to vibrant street markets in Bangkok. Our
          global
          <br /> community of explorers shares real moments, authentic
          experiences, <br /> and the joy of discovering the unknown.
        </p>
      </div>
      <div className={`relative w-full h-[700px] overflow-hidden p-20`}>
        {/* Background Soft Circles */}
        <div
          className={`absolute top-100 left-90 w-48 h-48 rounded-full z-0 ${
            isDark ? "bg-[#db6a9b]" : "bg-[#e7f398]"
          }`}
        ></div>
        <div
          className={`absolute top-20 right-90 w-72 h-72 rounded-full z-0 ${
            isDark ? "bg-[#db6a9b]" : "bg-[#e7f398]"
          }`}
        ></div>
        <div
          className={`absolute bottom-40 right-60 w-40 h-40 rounded-full z-0 ${
            isDark ? "bg-[#db6a9b]" : "bg-[#e7f398]"
          }`}
        ></div>

        {/* Circle Images (unchanged) */}
        <motion.img
          initial={{ x: [40, 0, 40] }}
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          src="https://i.ibb.co/bMFcYV1H/pexels-tatianasyrikova-3933924.jpg"
          alt=""
          className="absolute hidden md:block top-20 left-1/3 w-36 h-36 object-cover rounded-full z-10 shadow-md"
        />
        <motion.img
          initial={{ x: [40, 0, 40] }}
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          src="https://i.ibb.co/jPQVmgk2/pexels-anastasia-shuraeva-4513218.jpg"
          alt=""
          className="absolute top-30 right-1/4 w-38 h-38 object-cover rounded-full z-10 shadow-md"
        />
        <motion.img
          initial={{ y: [40, 0, 40] }}
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          src="https://i.ibb.co/395bqmjm/pexels-tatianasyrikova-3933386.jpg"
          alt=""
          className="absolute left-1/2 top-1/3 transform -translate-x-1/2 w-70 h-70 object-cover rounded-full z-20 shadow-lg"
        />
        <motion.img
          initial={{ x: [40, 0, 40] }}
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          src="https://i.ibb.co/tTvQLXpf/pexels-shvets-2563681.jpg"
          alt=""
          className="absolute bottom-20 right-80 w-40 h-40 object-cover rounded-full z-10 shadow-md"
        />
        <motion.img
          initial={{ y: [60, 0, 60] }}
          animate={{ y: [0, 60, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          src="https://i.ibb.co/XkVXrSMR/pexels-paige-deasley-115813531-9789940.jpg"
          alt=""
          className="absolute hidden md:block bottom-40 left-1/5 w-48 h-48 object-cover rounded-full z-10 shadow-md"
        />
        <motion.img
          initial={{ y: [50, 0, 50] }}
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          src="https://i.ibb.co/j9qg6Q29/pexels-manoj-gurjar-1738771-3304372.jpg"
          alt=""
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-36 object-cover rounded-full z-10 shadow-md"
        />
      </div>
    </div>
  );
}
