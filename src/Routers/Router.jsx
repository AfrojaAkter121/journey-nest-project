import {
    createBrowserRouter,
  } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/Login";
import AllBlogs from "../Pages/AllBlogs";
import Register from "../Pages/Register";
import RegisterPage from "../Pages/RegisterPage";

  export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          },
            {
                path: '/signin',
                element: <Login></Login>
            },
            {
              path: '/register',
              element: <RegisterPage></RegisterPage>
            },
            {
                path: '/allBlogs',
                element: <AllBlogs></AllBlogs>
            }
        ]
    }
  ]);