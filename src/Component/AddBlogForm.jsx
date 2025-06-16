import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AddBlogForm = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());

    axiosSecure
      .post(`/blogs`, formEntries 
      )
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Blog added successfully!",
            icon: "success",
            confirmButtonText: "OK",
          })
          // form.reset();
          // setStep(1); // Reset to step 1 after successful submission
        } else {
          Swal.fire(
            "Error!",
            "Failed to add blog. Please try again.",
            "error"
          );
        }
      })
  };

  return (
    <motion.div
    initial={{ opacity: 0, x: 110 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
     className="max-w-md mx-auto mt-0 md:mt-20 p-5 md:p-0">
      <form
        onSubmit={handleSubmit}
        className=" rounded py-8 px-7 bg-white border-4 border-[#313804]"
      >
        <h2 className="text-xl font-bold mb-8 italic bg-[#bcce49] text-center w-1/2 mx-auto -rotate-3">
          Add Travel Blog
        </h2>

        {/* Step 1 */}
        <motion.div
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.1 }}
         transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          className="space-y-3"
          style={{ display: step === 1 ? "block" : "none" }}
        >
          <input
            name="title"
            placeholder="Title"
            required
            className="w-full p-2 border rounded-r-full rounded-t-full bg-[#dce69b] text-green-950 px-5"
          />
          <input
            name="image"
            placeholder="Image URL"
            required
            className="w-full p-2 border rounded-r-full rounded-b-full bg-[#dce69b] text-green-950 px-5"
          />
          <input
            name="placeName"
            placeholder="Place Name"
            required
            className="w-full p-2 border rounded-r-full rounded-t-full bg-[#dce69b] text-green-950 px-5"
          />

          <select
            name="category"
            required
            className="w-full p-2 border rounded-r-full rounded-b-full bg-[#dce69b] text-green-950 px-5"
          >
             <option value="">Select Category</option>
              <option value="adventure">Adventure</option>
              <option value="beaches">Beaches</option>
              <option value="mountains">Mountains</option>
              <option value="cultural">Cultural</option>
              <option value="historical">Historical</option>
              <option value="wildlife">Wildlife</option>
              <option value="city-tours">City Tours</option>
          </select>
          <input
            type="text"
            name="authorName"
            value={user?.displayName || ""}
            readOnly
            className="w-full p-2 border rounded-r-full rounded-t-full  bg-[#313804] text-white px-5"
          />
          <input
            type="email"
            name="authorEmail"
            value={user?.email || ""}
            readOnly
            className="w-full p-2 border rounded-r-full rounded-b-full
               bg-[#313804] text-white px-5"
          />

          <input
            type="email"
            name="authorPhoto"
            value={user?.photoURL || ""}
            readOnly
            className="w-full p-2 border rounded-r-full rounded-b-full
               bg-[#313804] text-white px-5"
          />

          <div className="flex justify-end">
            <button
              type="button"
              onClick={nextStep}
              className="bg-[#aebe3f] text-green-950 italic font-semibold px-4 py-2 mt-4 rounded"
            >
              Next
            </button>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.1 }}
         transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
          className="space-y-3"
          style={{ display: step === 2 ? "block" : "none" }}
        >
          <textarea
            name="short_description"
            placeholder="Short Description"
            required
            className="w-full p-2 border rounded-xl bg-[#dce69b] text-green-950 px-5"
          />

          <textarea
            name="long_description"
            placeholder="Long Description"
            required
            className="w-full p-2 border rounded-xl bg-[#dce69b] text-green-950 px-5"
          />
          <input
            name="popularityReason"
            placeholder="Why it's popular?"
            required
            className="w-full p-2 border rounded-r-full rounded-b-full bg-[#dce69b] text-green-950 px-5"
          />
          <input
            name="bestTimeToVisit"
            placeholder="Best Time to Visit"
            required
            className="w-full p-2 border rounded-r-full rounded-b-full bg-[#dce69b] text-green-950 px-5"
          />
          <input
            name="activities"
            placeholder="Activities (comma separated)"
            required
            className="w-full p-2 border rounded-r-full rounded-b-full bg-[#dce69b] text-green-950 px-5"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="bg-[#aebe3f] text-green-950 italic font-semibold px-4 py-2 mt-4 rounded"
            >
              Back
            </button>

            <motion.button
              initial={{ scale: [1, 0.9, 1] }}
              animate={{ scale: [0.9, 1, 0.9] }}
              transition={{ duration: 1, repeat: Infinity }}
              type="submit"
              className=" bg-green-950 text-white italic font-semibold px-4 py-3 mt-4 rounded"
            >
              Submit
            </motion.button>
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default AddBlogForm;
