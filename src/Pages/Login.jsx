import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/AuthProvider";
import ThemeContext from "../Context/ThemeContext";
import { auth } from "../Firebase/firebase";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        navigate(location.state || "/");
        Swal.fire({
          title: "Login Success!",
          icon: "success",
        });
      })
      .catch((err) => {
        setError(err.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        Swal.fire({
          title: "Google Login Success!",
          icon: "success",
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  return (
    <div className={` min-h-screen flex justify-center items-center`}>
      <Helmet>
        <title>Log In Account | JourneyNest</title>
      </Helmet>

      <div className={`p-8 rounded-lg shadow-xl w-full max-w-sm border-2 transition-all duration-300 
        ${isDark ? "bg-[#0f0f1d] border-[#DB2777] text-white" : "bg-white border-[#0e241a] text-[#0e241a]"}`}>

        <h2 className={`text-2xl italic font-semibold mb-6 text-center -rotate-3 
          ${isDark ? "bg-[#DB2777] text-white" : "bg-[#cbdb5f] text-[#0e241a]"}`}>
          Login Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Username or Email"
            required
            className={`w-full bg-transparent border-b focus:outline-none py-2 
              ${isDark ? "border-gray-400 placeholder-gray-400" : "border-[#0e241a] text-[#0e241a]"}`}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className={`w-full bg-transparent border-b focus:outline-none py-2 
              ${isDark ? "border-gray-400 placeholder-gray-400" : "border-[#0e241a] text-[#0e241a]"}`}
          />
          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className={`w-full rounded-full font-medium py-2 mt-4 transition duration-200 
              ${isDark ? "bg-[#DB2777] text-white hover:bg-[#be1761]" : "bg-[#1D3D2F] text-white hover:bg-[#0e241a]"}`}
          >
            Login Account
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Create an Account?{" "}
          <Link
            to="/register"
            className={`underline font-medium ${isDark ? "text-[#DB2777]" : "text-[#0e241a]"}`}
          >
            Register
          </Link>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="px-4 text-gray-500 text-sm">Or</span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-4">
          <button className={`${isDark ? "bg-[#DB2777] text-white hover:bg-[#be1761]" : "bg-[#cbdb5f] text-[#0e241a]"} rounded-full p-3`}>
            <FaGithub size={20} />
          </button>
          <button className={`${isDark ? "bg-[#DB2777] text-white hover:bg-[#be1761]" : "bg-[#cbdb5f] text-[#0e241a]"} rounded-full p-3`}>
            <FaTwitter size={20} />
          </button>
          <button
            onClick={handleGoogleSignUp}
            className={`${isDark ? "bg-[#DB2777] text-white hover:bg-[#be1761]" : "bg-[#cbdb5f] text-[#0e241a]"} rounded-full p-3`}
          >
            <FaGoogle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
