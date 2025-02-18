import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
//import useAdmin from "../../hooks/useAdmin";
import axios from "axios";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false); 
//  const [isAdmin] = useAdmin()
//  console.log(isAdmin)
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (user && user.email) {
        try {
          const response = await axios.get(
            `https://assignment-12-server-five-opal.vercel.app/users/admin/${user.email}`
          );
          setIsAdmin(response.data.admin); // Backend should return `admin: true/false`
        } catch (error) {
          console.error("Failed to check admin status:", error);
        }
      }
    };
    checkAdminStatus();
  }, [user]);

  const handleLogout = () => {
    logOut()
      .then(() => navigate("/login"))
      .catch((error) => console.error("Logout failed:", error));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-lg lg:text-2xl font-bold mb-6">
          {isAdmin ? "Admin Dashboard" : "User Dashboard"}
        </h2>
        <nav className="space-y-4">
          {isAdmin ? (
            <>
              {/* Admin-specific links */}
              <Link to="profile" className="block hover:bg-gray-700 p-2 rounded">
                My profile
              </Link>
              <Link to="admindashboard" className="block hover:bg-gray-700 p-2 rounded">
                Overview
              </Link>
              <Link to="/dashboard/manage-users" className="block hover:bg-gray-700 p-2 rounded">
                Manage Users
              </Link>
              <Link to="/dashboard/approved-premium" className="block hover:bg-gray-700 p-2 rounded">
                Approved Premium
              </Link>
              <Link to="/dashboard/approved-requests" className="block hover:bg-gray-700 p-2 rounded">
                Approved Contact Requests
              </Link>
              <Link to="/dashboard/success-stories" className="block hover:bg-gray-700 p-2 rounded">
                Success Stories
              </Link>

            </>
          ) : (
            <>
              {/* User-specific links */}
              <Link to="profile" className="block hover:bg-gray-700 p-2 rounded">
                My profile
              </Link>
              <Link to="admindashboard" className="block hover:bg-gray-700 p-2 rounded">
                Overview
              </Link>
              <Link to="/dashboard/edit-biodata" className="block hover:bg-gray-700 p-2 rounded">
                Edit Biodata
              </Link>
              <Link to="/dashboard/view-biodata" className="block hover:bg-gray-700 p-2 rounded">
                View Biodata
              </Link>
              <Link to="/dashboard/my-contact-requests" className="block hover:bg-gray-700 p-2 rounded">
                My Contact Requests
              </Link>
              <Link to="/dashboard/favourites" className="block hover:bg-gray-700 p-2 rounded">
                Favourites
              </Link>
              <Link to="/dashboard/gotmarried" className="block hover:bg-gray-700 p-2 rounded">
                Got Married
              </Link>
            </>
          )}
          <button
            onClick={handleLogout}
            className="block w-full bg-red-600 hover:bg-red-700 p-2 rounded mt-4"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
