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
import EditBio from "./pages/dashboard/EditBio";
import FavBio from "./pages/dashboard/FavBio";
import MyContactReq from "./pages/dashboard/MyContactReq";
import ViewBio from "./pages/dashboard/ViewBio";
import ManageUsers from "./pages/dashboard/ManageUsers";
import ApprovedPre from "./pages/dashboard/ApprovedPre";
import ApprovedContact from "./pages/dashboard/ApprovedContact";
import Admin from "./pages/dashboard/Admin";
import GotMarried from "./pages/dashboard/GotMarried";
import Success from "./pages/dashboard/Success";
import ProfilePage from "./pages/dashboard/Profile";
  
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
          children:[
            {
              index:true,
              path:'profile',
              element: <ProfilePage></ProfilePage>
            },
            
            {
              path:'admindashboard',
              element:<Admin></Admin>
            },
            { 
              path: "/dashboard/manage-users", 
              element: <ManageUsers></ManageUsers>
             },
             { 
              path: "/dashboard/success-stories", 
              element: <Success></Success>
             },
            { 
              path: "/dashboard/approved-premium", 
              element:  <ApprovedPre></ApprovedPre>
            },
            { 
              path: "/dashboard/approved-requests",
              element: <ApprovedContact></ApprovedContact>
            }, 
            {
              path: 'edit-biodata',
              element:<EditBio></EditBio>
            },
            {
              path:'view-biodata',
              element:<ViewBio></ViewBio>
            },
            {
              path:'/dashboard/my-contact-requests',
              element:<MyContactReq></MyContactReq>
            },
            {
              path:'/dashboard/favourites',
              element:<FavBio></FavBio>
            },
            {
              path:'/dashboard/gotmarried',
              element:<GotMarried></GotMarried>
            },
            
          ]
          
        },
        
        
        {
          path: '/checkout/:id',
          element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>
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