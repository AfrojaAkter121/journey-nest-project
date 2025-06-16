import React from "react";
import { FaArrowRight, FaUserFriends, FaStar } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Lottie from "lottie-react";
import animation from "../../public/tour.json";

const TripSection = () => {
  return (
    <section className="relative bg-white py-28 px-4 md:px-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4 items-center ">
          <img
            src="https://i.postimg.cc/pXCh56Rd/pexels-mohamedelaminemsiouri-2108813.jpg"
            alt="City Tour"
            className=" w-62 h-[450px] rounded-t-full rounded-l-full  object-cover"
          />
          <div className="flex flex-col gap-4">
            <img
              src="https://i.postimg.cc/2Sxw6wXd/pexels-samkolder-2387866.jpg"
              alt="Mountain Trip"
              className="rounded-t-full rounded-r-full w-52 h-60 object-cover"
            />
            <img
              src="https://i.postimg.cc/gJ2Bd5z6/pexels-helenalopes-697244.jpg"
              alt="Kayak"
              className="rounded-b-full rounded-l-full w-52 h-60  object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h3 className="text-xl text-gray-500 italic">Let's Go Together</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
            Plan Your Trip <br className="hidden md:block" /> With Us
          </h2>
          <p className="text-gray-600 max-w-xl">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humour or
            randomised words which don't look even slightly.
          </p>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <BsFillPatchCheckFill className="text-[#596610] mt-1" size={20} />
              <div>
                <h4 className="font-bold text-lg">Exclusive Trip</h4>
                <p className="text-gray-500 text-sm">
                  There are many variations of passages of <br />
                  available but the majority.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BsFillPatchCheckFill className="text-[#596610] mt-1" size={20} />
              <div>
                <h4 className="font-bold text-lg">Professional Guide</h4>
                <p className="text-gray-500 text-sm">
                  There are many variations of passages of <br /> available but
                  the majority.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-4 bg-[#596610] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#596610] transition">
            Learn More <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Traveler Image */}
      <div className="hidden lg:block absolute right-10 top-88 w-96">
        <Lottie animationData={animation}></Lottie>
      </div>
    </section>
  );
};

export default TripSection;
