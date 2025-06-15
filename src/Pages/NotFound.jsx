// 404.jsx
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-router";
import animation from '../../public/notFound.json'; // Adjust the path as necessary


const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 p-6">
      {/* Animated 404 Number */}
      <motion.h1
        className="text-[120px] font-extrabold text-purple-600 drop-shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 8 }}
      >
        <Lottie style={{ width: '500px', height: '400px' }} animationData={animation}></Lottie>
      </motion.h1>

      {/* Animated Text */}
      <motion.p
        className="text-xl md:text-2xl text-gray-700 mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Oops! The page you are looking for doesn’t exist.
      </motion.p>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link to="/">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-lg shadow-md transition">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
