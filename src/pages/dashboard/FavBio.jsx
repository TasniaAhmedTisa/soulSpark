import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const FavBio = () => {
  const { user } = useContext(AuthContext);

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (user && user.email) {
      // Fetch favourite biodatas
      fetch(`http://localhost:5000/favourites?userEmail=${user.email}`) // Replace with actual user email
        .then((res) => res.json())
        .then((data) => setFavourites(data))
        .catch((err) => console.error("Error fetching favourites:", err));
    }
  }, [user]); // Only run this effect when user changes

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/favourites/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setFavourites((prev) => prev.filter((fav) => fav._id !== id));
        alert("Favourite deleted successfully!");
      });
  };

  if (!user || !user.email) {
    return <p>Please log in to view your favourites.</p>; // If no user, show this message
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-4">My Favourites Biodata</h1>
      {favourites.length === 0 ? (
        <p className="text-center text-gray-500">You have no favorite biodatas.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Biodata ID</th>
              <th className="border border-gray-300 px-4 py-2">Permanent Address</th>
              <th className="border border-gray-300 px-4 py-2">Occupation</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {favourites.map((fav) => (
              <tr key={fav._id}>
                <td className="border border-gray-300 px-4 py-2">{fav.name}</td>
                <td className="border border-gray-300 px-4 py-2">{fav.biodataId}</td>
                <td className="border border-gray-300 px-4 py-2">{fav.permanentAddress}</td>
                <td className="border border-gray-300 px-4 py-2">{fav.occupation}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(fav._id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FavBio;
