import {
    createBrowserRouter,
  } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AllBlogs from "../Pages/AllBlogs";
import RegisterPage from "../Pages/RegisterPage";
import LoginPages from "../Pages/LoginPages";

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
                element: <LoginPages></LoginPages>
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