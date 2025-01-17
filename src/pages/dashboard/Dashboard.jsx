import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false); // Assuming role information is in `user`

  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role === "admin") {
      setIsAdmin(true);
    }
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
        <h2 className="text-2xl font-bold mb-6">
          {isAdmin ? "Admin Dashboard" : "User Dashboard"}
        </h2>
        <nav className="space-y-4">
          {isAdmin ? (
            <>
              {/* Admin-specific links */}
              <Link to="/dashboard" className="block hover:bg-gray-700 p-2 rounded">
                Admin Dashboard
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
            </>
          ) : (
            <>
              {/* User-specific links */}
              <Link to="/dashboard" className="block hover:bg-gray-700 p-2 rounded">
                My Dashboard
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
