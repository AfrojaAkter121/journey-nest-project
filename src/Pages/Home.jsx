import React, { use } from "react";
import Header from "../Component/Header";
import CircleImageLayout from "../Component/CircleImageLayout";
import SlideHoverButton from "./SlideHoverButton";
import RecentBlogs from "../Component/RecentBlogs";
import TourGuides from "../Component/TourGuides";
import TripSection from "../Component/TripSection";
import { Helmet } from "react-helmet-async";
import FaqItem from "../Component/FaqItem";
import ThemeContext from "../Context/ThemeContext";

const Home = () => {
  const { isDark } = use(ThemeContext);

  const bgColor = isDark ? "bg-[#333333]/20 shadow shadow-3xl shadow-[#DB2777]" : "bg-[#b0c047]";
  const textColor = isDark ? "text-white" : "text-black";
  return (
    <div>
        <Helmet>
        <title>Home | JourneyNest</title>
        </Helmet>
      <Header></Header>
      <div className={`${bgColor} rounded-b-lg mb-7`}>
      <h1 className={`p-1 text-center text-xl font-semibold italic ${textColor}`}>
        Curated with love by Afroja, for every traveler with a story to tell. 🌍✨
      </h1>
    </div>
      <TripSection></TripSection>
      <RecentBlogs></RecentBlogs>
      <CircleImageLayout></CircleImageLayout>
      <TourGuides></TourGuides>
      <FaqItem></FaqItem>
    </div>
  );
};

export default Home;
