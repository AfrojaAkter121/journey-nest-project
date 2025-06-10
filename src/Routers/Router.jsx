import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AllBlogs from "../Pages/AllBlogs";
import RegisterPage from "../Pages/RegisterPage";
import LoginPages from "../Pages/LoginPages";
import AddBlogs from "../Pages/AddBlogs";
import Featured from "../Pages/Featured";
import WishList from "../Pages/WishList";
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../Pages/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-800"></div>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <LoginPages></LoginPages>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/allBlogs",
        loader: () => fetch('http://localhost:3000/blogs'),
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: '/blogs/:id',
        loader: ({params}) => fetch(`http://localhost:3000/blogs/${params.id}`),
        element: <BlogDetails></BlogDetails>
      }, 
      {
        path: "/addBlogs",
        element: (
          <PrivateRoute>
            <AddBlogs></AddBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/featured",
        element: <Featured></Featured>,
      },
      {
        path: "/wishList",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
