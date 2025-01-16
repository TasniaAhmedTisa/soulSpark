import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Dashboard = () => {
  const { user, isPremiumMember, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [biodata, setBiodata] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/biodata/${user.biodataId}`)
        .then((res) => res.json())
        .then((data) => setBiodata(data))
        .catch((err) => console.error("Error fetching biodata:", err));
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
    .then(() =>{})
    .catch(error => console.log(error))

  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-4 italic">----My Dashboard----</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Edit Biodata */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-bold">Edit Biodata</h2>
          <p>Update your personal biodata information.</p>
          <Link
            to="/dashboard/edit-biodata"
            className="text-blue-500 hover:text-blue-700"
          >
            Edit Biodata
          </Link>
        </div>

        {/* View Biodata */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-bold">View Biodata</h2>
          {biodata ? (
            <>
              <p><strong>Name:</strong> {biodata.name}</p>
              <p><strong>Type:</strong> {biodata.biodataType}</p>
              <p><strong>Occupation:</strong> {biodata.occupation}</p>
              <Link
                to={`/viewbiodata`}
                className="text-blue-500 hover:text-blue-700"
              >
                View Details
              </Link>
            </>
          ) : (
            <p>Loading your biodata...</p>
          )}
        </div>

        {/* My Contact Request */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-bold">My Contact Requests</h2>
          <Link
            to="/dashboard/my-contact-requests"
            className="text-blue-500 hover:text-blue-700"
          >
            View My Contact Requests
          </Link>
        </div>

        {/* Favourites Biodata */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-bold">Favourites Biodata</h2>
          <Link
            to="/dashboard/favourites"
            className="text-blue-500 hover:text-blue-700"
          >
            View Favourites
          </Link>
        </div>
      </div>

      {/* Logout */}
      <div className="mt-6 text-center">
        <button
          onClick={handleLogOut}
          className="bg-red-500 text-white py-2 px-6 rounded shadow-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
