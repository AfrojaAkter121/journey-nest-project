import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const guides = [
  // First 4
  {
    name: "Jacob Jones",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
  {
    name: "Guy Hawkins",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
  {
    name: "Jenny Wilson",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
  // Next 4
  {
    name: "Albert Flores",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
  {
    name: "Dianne Russell",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
  {
    name: "Darrell Steward",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
  {
    name: "Savannah Nguyen",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
  // Last 4
  {
    name: "Wade Warren",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
  {
    name: "Ronald Richards",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Tourist Guide",
    image: "https://i.ibb.co/qFFvz7Vn/pexels-reelssman-2148981725-30637575.jpg",
  },
];

const GuideCard = ({ guide }) => (
  <div className="bg-white rounded-xl shadow-md shadow-[#5e6916] p-6 text-center transform transition duration-300 hover:scale-105">
    <img
      src={guide.image}
      alt={guide.name}
      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold mb-1">{guide.name}</h3>
    <p className="text-sm text-gray-500 mb-3">{guide.role}</p>
    <div className="flex justify-center gap-3 ">
      <button className=" bg-[#cbdb5f] text-[#0e241a] rounded-full p-2">
        <FaFacebookF size={20} />
      </button>
      <button className=" bg-[#cbdb5f] text-[#0e241a] rounded-full p-2">
        <FaInstagram size={20} />
      </button>
      <button className=" bg-[#cbdb5f] text-[#0e241a] rounded-full p-2">
        <FaTwitter size={20} />
      </button>
      <button className=" bg-[#cbdb5f] text-[#0e241a] rounded-full p-2">
        <FaLinkedinIn size={20} />
      </button>
    </div>
  </div>
);

const TourGuides = () => {
  // Group guides by 4 per slide
  const groupedGuides = [];
  for (let i = 0; i < guides.length; i += 4) {
    groupedGuides.push(guides.slice(i, i + 4));
  }

  return (
    <div className="py-16  text-center">
      <h2 className="text-xl italic ">Meet with Guide</h2>
      <h1 className="text-3xl italic text-[#414908] ">🌍 A great guide turns a trip into a story worth remembering.</h1>
      <p className="flex justify-center text-center mb-10">Our experienced tour guides don’t just lead the way — they bring destinations to life with deep knowledge, <br/> local insights, and a warm smile.
      From hidden gems to cultural tales, they ensure every journey <br/>  is safe, fun, and unforgettable.</p>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          pagination: true,
          arrows: true,
        }}
      >
        {groupedGuides.map((group, index) => (
          <SplideSlide key={index}>
            <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8 md:px-20">
              {group.map((guide, idx) => (
                <GuideCard key={idx} guide={guide} />
              ))}
            </motion.div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default TourGuides;
