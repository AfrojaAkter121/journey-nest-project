import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { GoogleAuthProvider, updateProfile, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { AuthContext } from "../Context/AuthProvider";
import ThemeContext from "../Context/ThemeContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, setUser, user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number.");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          Swal.fire({ title: "User Created Successfully!", icon: "success" });
          navigate("/");
        });
      })
      .catch((err) => {
        Swal.fire({ icon: "error", title: "Oops...", text: err.message });
      });
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        Swal.fire({ title: "Google Signup Success!", icon: "success" });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({ icon: "error", title: "Oops...", text: err.message });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet><title>Register Account | JourneyNest</title></Helmet>

      <div className={`p-8 rounded-lg shadow-xl w-full max-w-sm border-2 transition-all duration-300 
        ${isDark ? "bg-[#0f0f1d] border-[#DB2777] text-white" : "bg-white border-[#0e241a] text-[#0e241a]"}`}>

        <h2 className={`text-2xl italic font-semibold mb-6 text-center -rotate-3 
          ${isDark ? "bg-[#DB2777] text-white" : "bg-[#cbdb5f] text-[#0e241a]"}`}>
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" required
            className={`w-full bg-transparent border-b focus:outline-none py-2 
              ${isDark ? "border-gray-400 placeholder-gray-400" : "border-[#0e241a] text-[#0e241a]"}`} />
          <input type="text" name="photo" placeholder="Photo URL" required
            className={`w-full bg-transparent border-b focus:outline-none py-2 
              ${isDark ? "border-gray-400 placeholder-gray-400" : "border-[#0e241a] text-[#0e241a]"}`} />
          <input type="email" name="email" placeholder="Email" required
            className={`w-full bg-transparent border-b focus:outline-none py-2 
              ${isDark ? "border-gray-400 placeholder-gray-400" : "border-[#0e241a] text-[#0e241a]"}`} />
          <input type="password" name="password" placeholder="Password" required
            className={`w-full bg-transparent border-b focus:outline-none py-2 
              ${isDark ? "border-gray-400 placeholder-gray-400" : "border-[#0e241a] text-[#0e241a]"}`} />
          {error && <p className="text-sm text-red-500">{error}</p>}

          <button type="submit"
            className={`w-full rounded-full font-medium py-2 mt-4 transition duration-200 
              ${isDark ? "bg-[#DB2777] text-white hover:bg-[#be1761]" : "bg-[#1D3D2F] text-white hover:bg-[#0e241a]"}`}>
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/signin"
            className={`underline font-medium ${isDark ? "text-[#DB2777]" : "text-[#0e241a]"}`}>
            Login
          </Link>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="px-4 text-gray-500 text-sm">Or</span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>

        {/* Social Sign Up */}
        <div className="flex justify-center gap-4">
          <button className={`${isDark ? "bg-[#DB2777] text-white hover:bg-[#be1761]" : "bg-[#cbdb5f] text-[#0e241a]"} rounded-full p-3`}>
            <FaGithub size={20} />
          </button>
          <button className={`${isDark ? "bg-[#DB2777] text-white hover:bg-[#be1761]" : "bg-[#cbdb5f] text-[#0e241a]"} rounded-full p-3`}>
            <FaTwitter size={20} />
          </button>
          <button onClick={handleGoogleSignUp}
            className={`${isDark ? "bg-[#DB2777] text-white hover:bg-[#be1761]" : "bg-[#cbdb5f] text-[#0e241a]"} rounded-full p-3`}>
            <FaGoogle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
