import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { use } from "react";
import ThemeContext from "../Context/ThemeContext";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co/fYNDscby/pexels-felipealves-3833192.jpg",
    title: `Discover Your Dream Destinations Here!`,
    desc: "Whether you seek the thrill of adventure, the tranquility of serene landscapes, or the cultural richness of far-off lands, we’re here to turn your dreams into reality.",
    btn1: "Explore",
    btn2: "Read More",
  },
  {
    id: 2,
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
    title: "Plan Your Next Great Escape!",
    desc: "We offer tailor-made experiences and unforgettable memories. Let’s create your travel story together.",
    btn1: "Get Started",
    btn2: "Learn More",
  },
  {
    id: 3,
    image: "https://i.ibb.co/mP5yp9L/pexels-tatianasyrikova-3933900.jpg",
    title: "Explore Majestic Mountains",
    desc: "Breathe fresh air, hike thrilling trails, and capture breathtaking views with our mountain adventures.",
    btn1: "View Trips",
    btn2: "Contact Us",
  },
];

export default function Header() {
  const [current, setCurrent] = useState(0);
  const { isDark } = use(ThemeContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Dark/light mode button styles
  const btn1Class = isDark
    ? "px-5 sm:px-6 py-2 sm:py-3 rounded-l-full text-[#591543] font-semibold text-sm sm:text-base bg-white/80 hover:bg-[#c41c65] transition"
    : "px-5 sm:px-6 py-2 sm:py-3 rounded-l-full text-black font-semibold text-sm sm:text-base bg-[#D7E95D]/80 hover:bg-[#cde02a] transition";

  const btn2Class = isDark
    ? "px-5 sm:px-6 py-2 sm:py-3 rounded-r-full text-white font-bold text-sm sm:text-base bg-[#7f1d5d]/60 hover:bg-[#591543] transition"
    : "bg-white/60 px-5 sm:px-6 py-2 sm:py-3 rounded-r-full text-green-900 hover:bg-gray-200 font-bold text-sm sm:text-base transition";

  return (
    <header className="relative overflow-hidden min-h-[80vh] rounded-t-2xl">
      <AnimatePresence>
        <motion.div
        initial={{ x: -80 }}
        animate={{x: 0 }}
          key={slides[current].id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-20 text-white px-4 md:px-20 py-24 h-full flex flex-col justify-center">
            <motion.h1
              
              transition={{ duration: 1,  }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 italic max-w-xl"
            >
              <span className={`${isDark ? "text-[#DB2777]" : "text-[#D7E95D]"}`}>
                {slides[current].title.split(" ")[0]}{" "}
                {slides[current].title.split(" ")[1]}{" "}
              </span>
              {slides[current].title.slice(slides[current].title.indexOf(" ") + 1)}
            </motion.h1>

            <p
              initial={{ y: 50, opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-6 max-w-xl text-sm sm:text-base"
            >
              {slides[current].desc}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to='/allBlogs' className={btn1Class}>{slides[current].btn1}</Link>
              <Link to='featured' className={btn2Class}>{slides[current].btn2}</Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </header>
  );
}
