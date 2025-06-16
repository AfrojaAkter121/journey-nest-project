import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
    {
      question: "How can I share my travel story on JourneyNest?",
      answer:
        "To share your story, simply create an account, go to the 'Write Blog' section, and submit your post. After review, it will be published.",
    },
    {
      question: "Do I need to pay to use JourneyNest?",
      answer:
        "No, JourneyNest is completely free to use. You can read blogs, write posts, and connect with other travelers at no cost.",
    },
    {
      question: "Can I follow other travelers on JourneyNest?",
      answer:
        "Yes! You can follow your favorite travelers and stay updated with their latest travel stories and tips.",
    },
    {
      question: "How can I find blogs based on specific destinations?",
      answer:
        "Use the search bar or explore categories like 'Mountains', 'Beaches', or 'Cities' to find blogs tailored to your travel interests.",
    },
    {
      question: "Is JourneyNest available on mobile devices?",
      answer:
        "Absolutely! JourneyNest is fully responsive and works seamlessly on both desktop and mobile browsers.",
    },
  ];

export default function FaqItem() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-16 items-center">
      {/* Image with Text */}
      <div className="relative overflow-hidden rounded-xl shadow-md">
        <img
          src="https://i.postimg.cc/gJ2Bd5z6/pexels-helenalopes-697244.jpg"
          alt="Runner by the beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 text-white flex flex-col justify-center px-8 py-10">
          <h2 className="text-3xl font-bold mb-2">✈️ Explore the world with JourneyNest — Your Travel Companion 🌍</h2>
          <p className="text-sm md:text-base max-w-md">
          "Traveling isn’t just about reaching places, it’s about discovering yourself through every step of the journey."

          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h4 className="text-[#596610] font-semibold uppercase mb-1 tracking-wide">
          || Common Questions ||
        </h4>
        <h2 className="text-3xl font-bold mb-6">
          Everything You <span className="text-[#596610] italic">Need to Know.</span>
        </h2>

        <div className="space-y-3">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-blue-50 transition"
              >
                {item.question}
                {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

