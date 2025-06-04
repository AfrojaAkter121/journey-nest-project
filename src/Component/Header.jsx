import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Navbar from "./Navbar";
import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          interval: 4000,
          pauseOnHover: false,
          arrows: true,
          pagination: true,
        }}
      >
        {/* Slide 1 */}
        <SplideSlide>
          <motion.div
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            className="relative rounded-t-2xl overflow-hidden bg-gradient-to-b from-[#D7E95D]/80 to-white bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url('https://i.ibb.co/mP5yp9L/pexels-tatianasyrikova-3933900.jpg')`,
              backgroundBlendMode: "multiply", 
            }}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <motion.div
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{ duration: 3 }}
              className="relative z-20 text-white px-6 md:px-20 py-32 animate-slideUp"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">
                <span className="text-[#D7E95D]">Discover Your</span> Dream{" "}
                <br /> Destinations Here!
              </h1>
              <p className="mb-6 max-w-xl">
                Whether you seek the thrill of adventure, the tranquility <br />
                of serene landscapes, or the cultural richness <br />
                of far-off lands, we’re here to turn your dreams into reality.
              </p>
              <div className="flex flex-wrap gap-2">
                <button className="px-6 py-3 rounded-l-full text-black bg-[#D7E95D]/80">
                  Explore
                </button>
                <button className="bg-white/60 px-6 py-3 rounded-r-full text-green-900 hover:bg-gray-200 font-bold">
                  Read More
                </button>
              </div>
            </motion.div>
          </motion.div>
        </SplideSlide>

        {/* Slide 2 */}
        <SplideSlide>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            className="relative rounded-t-2xl overflow-hidden bg-gradient-to-b from-[#D7E95D]/80 to-white bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url('https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg')`,
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <motion.div
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 3 }}
              className="relative z-20 text-white px-6 md:px-20 py-32 animate-slideUp"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">
                <span className="text-[#D7E95D]">Plan Your Next  </span> <br />Great Escape!
              </h1>
              <p className="mb-6 max-w-xl">
              We offer tailor-made experiences and   <br /> unforgettable memories. Let’s create <br />
              your travel story together.
              </p>
              <div className="flex flex-wrap gap-2">
                <button className="px-6 py-3 rounded-l-full text-black bg-[#D7E95D]/80">
                Get Started
                </button>
                <button className="bg-white/60 px-6 py-3 rounded-r-full text-green-900 hover:bg-gray-200 font-bold">
                Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
        </SplideSlide>

        {/* Slide 3 */}
        <SplideSlide>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            className="relative rounded-t-2xl overflow-hidden bg-gradient-to-b from-[#D7E95D]/80 to-white bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url('https://i.ibb.co/fYNDscby/pexels-felipealves-3833192.jpg')`,
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <motion.div
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 3 }}
              className="relative z-20 text-white px-6 md:px-20 py-32 animate-slideUp"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">
                <span className="text-[#D7E95D]">Explore Majestic </span> <br />{" "}
                Mountains
              </h1>
              <p className="mb-6 max-w-xl">
                Breathe fresh air, hike thrilling trails, and <br /> capture
                breathtaking views with <br />
                our mountain adventures.
              </p>
              <div className="flex flex-wrap gap-2">
                <button className="px-6 py-3 rounded-l-full text-black bg-[#D7E95D]/80">
                  View Trips
                </button>
                <button className="bg-white/60 px-6 py-3 rounded-r-full text-green-900 hover:bg-gray-200 font-bold">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </motion.div>
        </SplideSlide>

        {/* Slide 4 */}
        <SplideSlide>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            className="relative rounded-t-2xl overflow-hidden bg-gradient-to-b from-[#D7E95D]/80 to-white bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url('https://i.ibb.co/q3RYjLWm/pexels-asadphoto-1024969.jpg')`,
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <motion.div
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 3 }}
              className="relative z-20 text-white px-6 md:px-20 py-32 animate-slideUp"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">
                <span className="text-[#D7E95D]">Experience Vibrant  </span> <br />City Life
              </h1>
              <p className="mb-6 max-w-xl">
                Breathe fresh air, hike thrilling trails, and <br /> capture
                breathtaking views with <br />
                our mountain adventures.
              </p>
              <div className="flex flex-wrap gap-2">
                <button className="px-6 py-3 rounded-l-full text-black bg-[#D7E95D]/80">
                Book Now
                </button>
                <button className="bg-white/60 px-6 py-3 rounded-r-full text-green-900 hover:bg-gray-200 font-bold">
                Discover More
                </button>
              </div>
            </motion.div>
          </motion.div>
        </SplideSlide>
      </Splide>
    </header>
  );
}
