import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import animation from "../../public/profile.json";
import { Helmet } from "react-helmet-async";
import ThemeContext from "../Context/ThemeContext";

const EmployeeProfile = () => {
  const { user: userData, setUser } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);
  const [name, setName] = useState(userData?.displayName || " ");
  const [photo, setPhoto] = useState(userData?.photoURL || " ");

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({
          ...userData,
          displayName: name,
          photoURL: photo,
        });
        Swal.fire({
          title: "Profile Updated!",
          text: "Your profile has been successfully updated.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div
      className={`relative flex flex-col-reverse md:flex-row justify-around items-center my-20 px-4
        ${
          isDark
            ? " text-[#DB2777] "
            : "text-green-950 bg-gradient-to-b from-[white]/40 via-[#e9f1b3] to-[white]/40"
        }`}
    >
      <Helmet>
        <title>My Profile | JourneyNest</title>
      </Helmet>

      {/* Profile Card */}
      <div
        className={`relative flex flex-col w-xs md:w-sm rounded-xl px-8 py-11 shadow-3xl
          ${isDark ? "bg-[#1a1a2e] shadow-[#DB2777]" : "bg-white/80 shadow-[#bdcc6a]"}`}
      >
        <div
          className={`absolute top-8 left-0 rounded-r-full px-6 py-3 font-semibold text-center
            ${isDark ? "bg-[#DB2777] text-[#0f0f1d]" : "bg-[#bdcc6a] text-green-900"}`}
        >
          <div className="italic">Update Your Profile</div>
        </div>

        <div className="flex flex-col items-center mt-14">
          <img
            src={userData.photoURL || "/default-avatar.png"}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-2 border-green-800 shadow-md"
          />
          <h2 className={`text-2xl mt-4 font-bold`}>
            {userData.displayName}
          </h2>
          <p className="text-sm text-gray-500">{userData.email}</p>
        </div>

        <form onSubmit={handleUpdateProfile}>
          <div className="w-full mt-6 space-y-4">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3 py-2 rounded-md font-medium transition 
                  ${isDark ? "bg-[#0f0f1d] text-[#DB2777] border border-[#DB2777]" : "border-b focus:outline-none"}`}
              />
            </div>
            <div>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className={`w-full px-3 py-2 rounded-md font-medium transition 
                  ${isDark ? "bg-[#0f0f1d] text-[#DB2777] border border-[#DB2777]" : "border-b focus:outline-none"}`}
              />
            </div>
            <button
              type="submit"
              className={`w-full font-medium py-2 rounded-full mt-4 cursor-pointer transition 
                ${isDark 
                  ? "bg-[#DB2777] text-[#0f0f1d] hover:scale-105" 
                  : "bg-[#1D3D2F] text-white hover:-rotate-3 duration-75"}`}
            >
              Edit
            </button>
          </div>
        </form>
      </div>

      {/* Animation */}
      <div className="max-w-3xl">
        <Lottie className="w-full" animationData={animation}></Lottie>
      </div>
    </div>
  );
};

export default EmployeeProfile;
