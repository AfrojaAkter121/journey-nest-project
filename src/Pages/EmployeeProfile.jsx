import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import animation from '../../public/profile.json'; // Adjust the path as necessary

const EmployeeProfile = () => {
  const { user: userData, setUser } = useContext(AuthContext);
  const [name, setName] = useState(userData?.displayName || " ");
  const [photo, setPhoto] = useState(userData?.photoURL || " ");


  const handleUpdateProfile = (e) => {
    e.preventDefault();

    // Update user data in AuthContext
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        // Update user in AuthContext
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
        // Optionally, you can show a success message or redirect
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        // Handle error appropriately, e.g., show an alert
      });
  };
  return (
    <div className="relative flex justify-around items-center text-green-950 my-20  bg-gradient-to-b from-[white]/40 via-[#e9f1b3] to-[white]/40 ">
      <div className=" relative flex flex-col shadow-2xl shadow-[#bdcc6a] w-sm rounded-xl px-8 py-11 bg-white/80 ml-14">
      <div className="absolute top-8 left-0 rounded-r-full bg-[#bdcc6a] text-green-900 px-6 py-3 font-semibold text-center">
          <div className=" italic">Update Your Profile</div>
        </div>
        <div className="flex flex-col items-center mt-14">
        <img
          src={userData.photoURL || "/default-avatar.png"}
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full border-2 border-green-800 shadow-md"
        />
        <h2 className="text-2xl mt-4">{userData.displayName}</h2>
        <p className="text-gray-500">{userData.email}</p>
        </div>
        <form onSubmit={handleUpdateProfile}>
          <div className="w-full mt-6 space-y-4">
            <div>
              
              <input
                type="text"
                defaultValue={userData.displayName}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b focus:outline-none py-2"
              />
            </div>
            <div>
             
              <input
                type="text"
                defaultValue={userData.photoURL}
                onChange={(e) => setPhoto(e.target.value)}
                className="w-full border-b focus:outline-none py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1D3D2F]  hover:-rotate-3 duration-75 text-white font-medium py-2 rounded-full mt-4"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
      <div>
            <Lottie style={{height: 600, width: 600}} animationData={animation}></Lottie>
      </div>
    </div>
  );
};

export default EmployeeProfile;
