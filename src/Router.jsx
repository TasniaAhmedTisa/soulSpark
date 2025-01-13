import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Biodatas from "./pages/Biodatas";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path:'/biodatas',
          element:<Biodatas></Biodatas>
        },
        {
          path: 'login',
          element:<Login></Login>
            
        },
        {
          path: '/contact',
          element:<Contact></Contact>
        },
        {
          path: '/about',
          element:<About></About>
        }
      ]
    },
  ]);