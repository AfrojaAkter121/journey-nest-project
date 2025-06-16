import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co/fYNDscby/pexels-felipealves-3833192.jpg",
    title: `Discover Your Dream  Destinations Here!`,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative overflow-hidden min-h-[80vh] rounded-t-2xl">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[current].image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-20 text-white px-6 md:px-20 py-32 h-full flex flex-col justify-center">
            <motion.h1
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 italic w-[500px]"
            >
              <span className="text-[#D7E95D]">
                {slides[current].title.split(" ")[0]}{" "}
                {slides[current].title.split(" ")[1]}{" "}
              </span>
              {slides[current].title.slice(
                slides[current].title.indexOf(" ") + 1
              )}
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-6 w-[500px]"
            >
              {slides[current].desc}
            </motion.p>

            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-l-full text-black bg-[#D7E95D]/80">
                {slides[current].btn1}
              </button>
              <button className="bg-white/60 px-6 py-3 rounded-r-full text-green-900 hover:bg-gray-200 font-bold">
                {slides[current].btn2}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </header>
  );
}
