import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyContactReq = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.email) {
      setError("User email not found.");
      return;
    }

    // Fetch contact requests
    fetch(`http://localhost:5000/contact-requests?userEmail=${user.email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error fetching requests: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => setRequests(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch contact requests. Please try again later.");
      });
  }, [user]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/contact-requests/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setRequests((prev) => prev.filter((req) => req._id !== id));
        alert("Request deleted successfully!");
      })
      .catch((err) => console.error("Error deleting request:", err));
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-4">My Contact Requests</h1>
      {requests.length === 0 ? (
        <p className="text-center">No contact requests found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Biodata ID</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Mobile No</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req._id}>
                <td className="border border-gray-300 px-4 py-2">{req.biodataId}</td>
                <td className="border border-gray-300 px-4 py-2">{req.status}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {req.status === "Approve" ? req.mobileNumber : "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {req.status === "Approve" ? req.email : "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(req._id)}
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

export default MyContactReq;
