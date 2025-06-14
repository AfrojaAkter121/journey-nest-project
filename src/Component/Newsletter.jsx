import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

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
    <div className="max-w-md mx-auto p-6 bg-gray-100/40 rounded-md shadow-md mt-7">
      <h2 className="text-xl italic font-semibold mb-4 text-center">Subscribe to our Newsletter</h2>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-3 rounded-md border border-green-900 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-900 text-white px-6 rounded-md hover:bg-green-700 transition"
        >
          Subscribe
        </button>
      </form>

      {/* Toast container must be rendered once */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Newsletter;
