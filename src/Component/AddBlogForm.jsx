import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { motion } from "motion/react";

const AddBlogForm = () => {
  const { user } = use(AuthContext);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-lg mx-auto ">

      <form
        onSubmit={handleSubmit}
        className="space-y-4 border rounded py-8 px-7 bg-white rounded-r-3xl rounded-b-3xl border-4 border-[#313804]"
      >
        <h2 className="text-xl font-bold mb-8 italic bg-[#bcce49] text-center w-1/2 mx-auto -rotate-3 ">Add Travel Blog </h2>
        {step === 1 && (
          <>
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

            <input
              name="category"
              placeholder="Category"
              required
              className="w-full p-2 border rounded-r-full rounded-b-full bg-[#dce69b] text-green-950 px-5"
            />
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

            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="bg-[#aebe3f] text-green-950 italic font-semibold px-4 py-2 mt-4 rounded"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
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
              transition={{ duration: 1,repeat: Infinity }}
                type="submit"
                className=" bg-green-950 text-white italic font-semibold px-4 py-3 mt-4 rounded"
              >
                Submit
              </motion.button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default AddBlogForm;
