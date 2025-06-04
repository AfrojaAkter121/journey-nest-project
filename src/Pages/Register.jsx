import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    setError("");

    // Validation Rules
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
    } else {
      setError(""); // Everything is valid
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          Swal.fire({
            title: "User Created Success!",
            icon: "success",
            draggable: true,
          });
          navigate("/");
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  // signup with google
  const provider = new GoogleAuthProvider();
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
    .then(() => {
      Swal.fire({
        title: "Google Signup Success!",
        icon: "success",
        draggable: true,
      });
      navigate(`${location.state ? location.state : "/"}`);
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    });
  };

  return (
    <div>
      <div className=" flex items-center justify-center ">
        <div className="bg-transparent bg-white text-[#0e241a] p-8 rounded-lg shadow-lg w-full max-w-sm border-2   border-[#0e241a]">
          <h2 className="text-2xl -rotate-3 italic bg-[#cbdb5f] font-semibold mb-6 text-center">
            Create an account
          </h2>

          {/* name */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full border-b focus:outline-none py-2"
            />
            {/* photo  */}
            <input
              type="text"
              name="photo"
              required
              placeholder="photoURL"
              className="w-full border-b focus:outline-none py-2"
            />
            {/* email */}
            <input
              type="email"
              name="email"
              placeholder="Username or Email"
              required
              className="w-full border-b focus:outline-none py-2"
            />
            {/* password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full border-b focus:outline-none py-2"
            />
            {error && <p className="text-sm text-red-500">{error}</p>}

            {/* submit btn */}
            <button
              type="submit"
              className="w-full bg-[#1D3D2F]  hover:-rotate-3 duration-75 text-white font-medium py-2 rounded-full mt-4"
            >
              Create an account
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#0e241a] font-medium underline">
              Login
            </Link>
          </p>

          <div className="flex items-center my-3">
            <div className="flex-grow h-px bg-gray-300 text-black"></div>
            <span className="px-4 text-gray-500 text-sm">Or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* github signup */}
          <div className=" flex space-x-3 justify-center items-center">
            <button className=" bg-[#cbdb5f] text-[#0e241a] rounded-full py-3 px-3">
              <FaGithub size={24} />
            </button>

            <button className=" bg-[#cbdb5f] text-[#0e241a] rounded-full py-3 px-3">
              <FaTwitter size={24} />
            </button>
            {/* google signup */}
            <button
              onClick={handleGoogleSignUp}
              className=" bg-[#cbdb5f] text-[#0e241a] rounded-full py-3 px-3"
            >
              <FaGoogle size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
