import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import ThemeContext from "../Context/ThemeContext";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AddBlogForm = () => {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);
  const axiosSecure = useAxiosSecure();
  const [step, setStep] = useState(1);

  const nextStep = () => step < 2 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const blogData = Object.fromEntries(formData.entries());

    axiosSecure.post(`/blogs`, blogData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("Success!", "Blog added successfully!", "success");
        e.target.reset();
        setStep(1);
      } else {
        Swal.fire("Error!", "Failed to add blog. Please try again.", "error");
      }
    });
  };

  const inputStyle = `w-full p-2 px-5 border rounded-xl transition 
    ${isDark ? "bg-[#0f0f1d] text-white border-[#DB2777] placeholder-gray-400" : "bg-[#dce69b] text-green-950 border-gray-300"}`;

  const readOnlyStyle = `${isDark ? "bg-[#1e1e2f] text-white" : "bg-[#313804] text-black"}`;

  const sectionBg = isDark ? "bg-[#0f0f1d] border-[#DB2777]" : "bg-white border-[#313804]";

  const stepBtnLight = `bg-[#aebe3f] text-green-950 italic font-semibold px-4 py-2 mt-4 rounded`;
const stepBtnDark = `bg-[#DB2777] text-white italic font-semibold px-4 py-2 mt-4 rounded`;


  return (
    <motion.div
      initial={{ opacity: 0, x: 110 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
      className="max-w-md mx-auto mt-0 md:mt-20 p-5 md:p-0"
    >
      <form
        onSubmit={handleSubmit}
        className={`rounded py-8 px-7 border-4 ${sectionBg}`}
      >
        <h2 className={`text-xl font-bold mb-8 italic text-center w-1/2 mx-auto -rotate-3 
          ${isDark ? "bg-[#DB2777] text-white" : "bg-[#bcce49] text-[#0f172a]"}`}>
          Add Travel Blog
        </h2>

        {/* Step 1 */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
            className="space-y-3"
          >
            <input name="title" placeholder="Title" required className={inputStyle} />
            <input name="image" placeholder="Image URL" required className={inputStyle} />
            <input name="placeName" placeholder="Place Name" required className={inputStyle} />

            <select name="category" required className={inputStyle}>
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
              name="authorName"
              type="text"
              value={user?.displayName || ""}
              readOnly
              className={`${inputStyle} ${readOnlyStyle}`}
            />
            <input
              name="authorEmail"
              type="email"
              value={user?.email || ""}
              readOnly
              className={`${inputStyle} ${readOnlyStyle}`}
            />
            <input
              name="authorPhoto"
              type="text"
              value={user?.photoURL || ""}
              readOnly
              className={`${inputStyle} ${readOnlyStyle}`}
            />

            <div className="flex justify-end">
              <button type="button" onClick={nextStep} className={isDark ? stepBtnDark : stepBtnLight}>
                Next
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
            className="space-y-3"
          >
            <textarea name="short_description" placeholder="Short Description" required className={inputStyle} />
            <textarea name="long_description" placeholder="Long Description" required className={inputStyle} />
            <input name="popularityReason" placeholder="Why it's popular?" required className={inputStyle} />
            <input name="bestTimeToVisit" placeholder="Best Time to Visit" required className={inputStyle} />
            <input name="activities" placeholder="Activities (comma separated)" required className={inputStyle} />

            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className={isDark ? stepBtnDark : stepBtnLight}>
                Back
              </button>
              <motion.button
                initial={{ scale: [1, 0.9, 1] }}
                animate={{ scale: [0.9, 1, 0.9] }}
                transition={{ duration: 1, repeat: Infinity }}
                type="submit"
                className={`${isDark ? 'bg-[#5e243e]' : 'bg-green-950'} text-white italic font-semibold px-4 py-3 mt-4 rounded`}
              >
                Submit
              </motion.button>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default AddBlogForm;
