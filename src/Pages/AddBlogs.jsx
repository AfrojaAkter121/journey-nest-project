import React from "react";
import AddBlogForm from "../Component/AddBlogForm";
import Lottie from "lottie-react";
import animation from "../../public/AddBlogs.json";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const AddBlogs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gradient-to-b from-[white]/40 via-[#e9f1b3] to-[white]/40 mb-20">
        <Helmet>
        <title>Create Blog | JourneyNest</title>
        </Helmet>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
        className=""
      >
        <div className="w-full max-w-[500px] mx-auto">
          <Lottie animationData={animation} className="w-full h-auto" />
        </div>
      </motion.div>
      <div className="">
        <AddBlogForm></AddBlogForm>
      </div>
    </div>
  );
};

export default AddBlogs;
