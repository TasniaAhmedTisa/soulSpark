import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Biodatas from "./pages/Biodatas";
import Details from "./pages/details/Details";
import Register from "./pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "./pages/dashboard/Dashboard";
import Checkout from "./pages/Checkout/Checkout";
import NotFoundPage from "./components/NotFoundPage";
  
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
          path: '/contact',
          element:<Contact></Contact>
        },
        {
          path: '/about',
          element:<PrivateRoutes><About></About></PrivateRoutes>
        },
        {
          path: '/biodata/:id',
          element:<PrivateRoutes><Details></Details></PrivateRoutes>
        },
        {
          path: '/dashboard',
          element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
          
        },
        {
          path: '/checkout/:id',
          element:<Checkout></Checkout>
        },
      ]

    },
    
    {
      path: 'login',
      element:<Login></Login>
        
    },
    {
      path: '/register',
      element:<Register></Register>
    },
    {
      path: '*',
      element:<NotFoundPage></NotFoundPage>
    }
    
  ]);