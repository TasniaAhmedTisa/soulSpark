import React, { useState, useEffect } from "react";

const ViewBio = () => {
  const [biodata, setBiodata] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch user's biodata
    fetch("http://localhost:5000/biodata/1") // Replace with the actual user's biodata ID
      .then((res) => res.json())
      .then((data) => setBiodata(data))
      .catch((err) => console.error("Error fetching biodata:", err));
  }, []);

  const handlePremiumRequest = () => {
    fetch("http://localhost:5000/premium-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ biodataId: biodata.biodataId }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Premium request sent successfully!");
        setShowModal(false);
      })
      .catch((err) => console.error("Error submitting premium request:", err));
  };

  if (!biodata) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-4">View Biodata</h1>
      <div className="bg-white shadow-md rounded-md p-6 space-y-4">
        <img
          src={biodata.profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <p><strong>Biodata Type:</strong> {biodata.biodataType}</p>
        <p><strong>Name:</strong> {biodata.name}</p>
        <p><strong>Date of Birth:</strong> {biodata.dob}</p>
        <p><strong>Height:</strong> {biodata.height}</p>
        <p><strong>Weight:</strong> {biodata.weight}</p>
        <p><strong>Age:</strong> {biodata.age}</p>
        <p><strong>Occupation:</strong> {biodata.occupation}</p>
        <p><strong>Race:</strong> {biodata.race}</p>
        <p><strong>Father's Name:</strong> {biodata.fatherName}</p>
        <p><strong>Mother's Name:</strong> {biodata.motherName}</p>
        <p><strong>Permanent Division:</strong> {biodata.permanentDivision}</p>
        <p><strong>Present Division:</strong> {biodata.presentDivision}</p>
        <p><strong>Expected Partner Age:</strong> {biodata.expectedPartnerAge}</p>
        <p><strong>Expected Partner Height:</strong> {biodata.expectedPartnerHeight}</p>
        <p><strong>Expected Partner Weight:</strong> {biodata.expectedPartnerWeight}</p>
        <p><strong>Contact Email:</strong> {biodata.contactEmail}</p>
        <p><strong>Mobile Number:</strong> {biodata.mobileNumber}</p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Make Biodata Premium
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <p>Do you want to make this biodata premium?</p>
            <div className="mt-4">
              <button
                onClick={handlePremiumRequest}
                className="bg-green-500 text-white py-2 px-4 rounded mr-2 hover:bg-green-600"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBio;
