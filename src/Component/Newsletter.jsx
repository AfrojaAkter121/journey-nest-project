import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeContext from "../Context/ThemeContext";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { isDark } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    toast.success("Thank you for subscribing to our newsletter");
    setEmail("");
  };

  return (
    <div
      className={`w-full max-w-xl mx-auto px-4 py-6 rounded-md shadow-md mt-7 transition-all ${
        isDark ? "bg-[#29293f] text-white" : "bg-gray-100/40 text-green-950"
      }`}
    >
      <h2 className="text-xl italic font-semibold mb-4 text-center">
        Subscribe to our Newsletter
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 items-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className={`w-full flex-grow p-3 rounded-md border focus:outline-none transition ${
            isDark
              ? "bg-[#0e1a2b] border-[#c41c65] text-white placeholder:text-gray-400"
              : "border-green-900"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className={`w-full sm:w-auto px-6 py-3 rounded-md transition font-semibold ${
            isDark
              ? "bg-[#c41c65] text-white hover:bg-[#c41c65]"
              : "bg-green-900 text-white hover:bg-green-700"
          }`}
        >
          Subscribe
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} theme={isDark ? "dark" : "light"} />
    </div>
  );
};

export default Newsletter;
