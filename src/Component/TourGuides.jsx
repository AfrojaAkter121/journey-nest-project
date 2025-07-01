import React, { use, useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContext"; // Adjust this path if needed

const guides = [
  {
    name: "Abu Mustafah",
    photo: "https://i.postimg.cc/pLdvBLMj/received-2098320103901193.jpg",
    description:
      "10 years experienced mountain guide. Expert in Sundarbans, Sylhet & Sajek tours.",
    specialty: "Jungle trekking, Cultural tours",
    location: "Bandarban",
    languages: ["Bengali", "English"],
    rating: 4.8,
    priceRange: "৳1000 – ৳2000/day",
    isOnline: true,
  },
  {
    name: "Sharmin Akter",
    photo: "https://i.postimg.cc/SsThz0J4/pexels-rdne-5778553.jpgc",
    description:
      "Expert female guide for Cox’s Bazar and Saint Martin’s travel.",
    specialty: "Beach tours, family trips",
    location: "Cox's Bazar",
    languages: ["Bengali", "Hindi"],
    rating: 4.7,
    priceRange: "৳800 – ৳1500/day",
    isOnline: false,
  },
  {
    name: "Rezaul Karim",
    photo: "https://i.postimg.cc/jS2wmKrV/pexels-olly-3778569.jpg",
    description: "Wildlife & nature lover with deep knowledge of Sundarbans.",
    specialty: "Wildlife tracking, boat tours",
    location: "Khulna",
    languages: ["Bengali", "English"],
    rating: 4.6,
    priceRange: "৳900 – ৳1800/day",
    isOnline: true,
  },
  {
    name: "Mohona Das",
    photo: "https://i.postimg.cc/SR2w2JBL/pexels-liliana-drew-8554347.jpg",
    description: "Local lifestyle expert and food tour guide.",
    specialty: "Food tours, cultural discovery",
    location: "Sylhet",
    languages: ["Bengali", "English"],
    rating: 4.9,
    priceRange: "৳1000/day",
    isOnline: false,
  },
  {
    name: "Jamila Hossain",
    photo:
      "https://i.postimg.cc/fTgfq80b/pexels-tima-miroshnichenko-5717632.jpg",
    description: "Certified hiking expert, offers full day guided trekking.",
    specialty: "Mountain hiking, off-trail guide",
    location: "Rangamati",
    languages: ["Bengali"],
    rating: 4.5,
    priceRange: "৳1100 – ৳1700/day",
    isOnline: true,
  },
  {
    name: "Taslima Rahman",
    photo:
      "https://i.postimg.cc/DyfxMWjx/pexels-tima-miroshnichenko-5717041.jpg",
    description: "Nature & Photography guide, fluent in storytelling.",
    specialty: "Photography spots, calm nature trips",
    location: "Sajek",
    languages: ["Bengali", "English"],
    rating: 4.8,
    priceRange: "৳950 – ৳1500/day",
    isOnline: true,
  },
  {
    name: "Nurul Islam",
    photo: "https://i.postimg.cc/tCHjZzgY/pexels-marianna-15577-89427.jpg",
    description: "Best known for night safari and adventure camping.",
    specialty: "Night safari, forest camping",
    location: "Sundarbans",
    languages: ["Bengali"],
    rating: 4.6,
    priceRange: "৳1200/day",
    isOnline: false,
  },
  {
    name: "Fatima Begum",
    photo:
      "https://i.postimg.cc/vZqkz7G7/pexels-tima-miroshnichenko-5717641.jpg",
    description: "Woman-friendly tours and city exploration expert.",
    specialty: "Dhaka city tour, historical places",
    location: "Dhaka",
    languages: ["Bengali", "English"],
    rating: 4.9,
    priceRange: "৳700 – ৳1300/day",
    isOnline: true,
  },
  {
    name: "Tariq Aziz",
    photo: "https://i.postimg.cc/QMMsNxdm/pexels-liliana-drew-8554524.jpg",
    description: "Cycling + tour guide, for active young groups.",
    specialty: "Cycling tours, riverbank rides",
    location: "Mymensingh",
    languages: ["Bengali", "English", "Hindi"],
    rating: 4.4,
    priceRange: "৳1000/day",
    isOnline: false,
  },
];

const GuideCard = ({ guide }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-xl p-6 transform transition duration-300 hover:scale-105 shadow-md ${
        isDark
          ? "bg-[#1a1a2e] text-white shadow-[#e75a97]"
          : "bg-white text-[#0e241a] shadow-[#5e6916]"
      }`}
    >
      <div className="relative">
        <img
          src={guide.photo}
          alt={guide.name}
          className="rounded-t-xl w-full h-48 object-cover"
        />
        {guide.isOnline && (
          <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            Online
          </span>
        )}
      </div>
      <div className="text-center">
        <h2
          className={`text-xl font-bold italic mt-4 rounded-md p-1 ${
            isDark ? "bg-[#c41c65] text-white" : "bg-[#cbdb5f] text-[#0e241a]"
          }`}
        >
          {guide.name}
        </h2>
        <p className="mt-2 text-lg">{guide.description}</p>
        <p className="text-sm">
          <span className="font-semibold">Specialty:</span> {guide.specialty}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Languages:</span>{" "}
          {guide.languages.join(", ")}
        </p>
        <div className="flex justify-around items-center mt-7">
          <p className="text-sm ">{guide.location}</p>
          <p className="text-sm mt-2">
            <span className="font-semibold">⭐</span> {guide.rating} / 5
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-7">
        <button
          className={`rounded-full p-2 cursor-pointer ${
            isDark
              ? "bg-[#c41c65] text-white"
              : "bg-[#cbdb5f] text-[#0e241a]"
          }`}
        >
          <FaFacebookF size={20} />
        </button>
        <button
          className={`rounded-full p-2 cursor-pointer ${
            isDark
              ? "bg-[#c41c65] text-white"
              : "bg-[#cbdb5f] text-[#0e241a]"
          }`}
        >
          <FaInstagram size={20} />
        </button>
        <button
          className={`rounded-full p-2 cursor-pointer ${
            isDark
              ? "bg-[#c41c65] text-white"
              : "bg-[#cbdb5f] text-[#0e241a]"
          }`}
        >
          <FaTwitter size={20} />
        </button>
        <button
          className={`rounded-full p-2 cursor-pointer ${
            isDark
              ? "bg-[#c41c65] text-white"
              : "bg-[#cbdb5f] text-[#0e241a]"
          }`}
        >
          <FaLinkedinIn size={20} />
        </button>
      </div>
    </div>
  );
};

const TourGuides = () => {
  const {isDark} = use(ThemeContext)
  // Group guides by 3 per slide
  const groupedGuides = [];
  for (let i = 0; i < guides.length; i += 3) {
    groupedGuides.push(guides.slice(i, i + 3));
  }

  return (
    <div className="relative py-16 mt-10  text-center">
      <h2 className="text-xl italic ">Meet with Guide</h2>
      <h1 className={`text-3xl italic ${isDark ? 'text-[#da3f82]' : 'text-[#414908]'}`}>
  🌍 A great guide turns a trip into a story worth remembering.
</h1>
      <p className="flex justify-center text-center mb-10">
        Our experienced tour guides don’t just lead the way — they bring
        destinations to life with deep knowledge, <br /> local insights, and a
        warm smile. From hidden gems to cultural tales, they ensure every
        journey <br /> is safe, fun, and unforgettable.
      </p>
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8 md:px-20"
            >
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
