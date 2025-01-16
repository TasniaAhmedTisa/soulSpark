import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditBio = () => {
  const navigate = useNavigate();
  const [biodata, setBiodata] = useState({
    biodataType: "",
    name: "",
    profileImage: "",
    dob: "",
    height: "",
    weight: "",
    age: "",
    occupation: "",
    race: "",
    fatherName: "",
    motherName: "",
    permanentDivision: "",
    presentDivision: "",
    expectedPartnerAge: "",
    expectedPartnerHeight: "",
    expectedPartnerWeight: "",
    mobileNumber: "",
  });

  // Fetch the user's biodata if editing an existing biodata
  useEffect(() => {
    // You can fetch the existing biodata by ID here and update the state if necessary
    // Example: fetch(`http://localhost:5000/biodata/${user.biodataId}`)
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiodata((prevBiodata) => ({ ...prevBiodata, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit biodata to the backend to create or update
    fetch("http://localhost:5000/biodata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(biodata),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Biodata saved successfully!");
        navigate("/dashboard");
      })
      .catch((err) => console.error("Error saving biodata:", err));
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-4">Edit Biodata</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block">Biodata Type</label>
          <select
            name="biodataType"
            value={biodata.biodataType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Type</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Add other fields similar to above */}
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            name="name"
            value={biodata.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Additional form fields here... */}

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600"
          >
            Save and Publish Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBio;
