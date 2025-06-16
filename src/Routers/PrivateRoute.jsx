import React, { use } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Lottie from "lottie-react";
import animation from "../../public/loading.json"; // Adjust the path as necessary

const PrivateRoute = ({ children }) => {
  const { loading, user } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-48">
        <Lottie
          style={{ width: 100, height: 100 }}
          animationData={animation}
        ></Lottie>
      </div>
    );
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signin" replace></Navigate>;
};

export default PrivateRoute;
