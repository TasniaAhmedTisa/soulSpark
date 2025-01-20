import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const EditBio = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const { user } = useContext(AuthContext)
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

  useEffect(() => {
    fetch(`https://assignment-12-server-five-opal.vercel.app/biodata/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBiodata(data); 
      })
      .catch((err) => console.error("Error fetching biodata:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiodata((prevBiodata) => ({ ...prevBiodata, [name]: value }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  fetch(`https://assignment-12-server-five-opal.vercel.app/biodata/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(biodata),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to update biodata");
      }
      return res.json();
    })
    .then(() => {
      alert("Biodata updated successfully!");
      navigate("/dashboard");
    })
    .catch((err) => {
      console.error("Error updating biodata:", err);
      alert("There was an error updating the biodata.");
    });
};

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-4">Edit or Create Biodata</h1>

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

        {/* Profile Image Link */}
        <div>
          <label className="block">Profile Image Link</label>
          <input
            type="text"
            name="profileImage"
            value={biodata.profileImage}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={biodata.dob}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Height */}
        <div>
          <label className="block">Height</label>
          <select
            name="height"
            value={biodata.height}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Height</option>
            <option value="Short">Short</option>
            <option value="Average">Average</option>
            <option value="Tall">Tall</option>
          </select>
        </div>

        {/* Weight */}
        <div>
          <label className="block">Weight</label>
          <select
            name="weight"
            value={biodata.weight}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Weight</option>
            <option value="Underweight">Underweight</option>
            <option value="Normal">Normal</option>
            <option value="Overweight">Overweight</option>
          </select>
        </div>

        {/* Age */}
        <div>
          <label className="block">Age</label>
          <input
            type="number"
            name="age"
            value={biodata.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="block">Occupation</label>
          <select
            name="occupation"
            value={biodata.occupation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Occupation</option>
            <option value="Student">Student</option>
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Teacher">Teacher</option>
            <option value="Business">Business</option>
          </select>
        </div>

        {/* Race */}
        <div>
          <label className="block">Race (Skin color)</label>
          <select
            name="race"
            value={biodata.race}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Race</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Asian">Asian</option>
            <option value="Mixed">Mixed</option>
          </select>
        </div>

        {/* Father's Name */}
        <div>
          <label className="block">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            value={biodata.fatherName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="block">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            value={biodata.motherName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Permanent Division */}
        <div>
          <label className="block">Permanent Division</label>
          <select
            name="permanentDivision"
            value={biodata.permanentDivision}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagra">Chattagra</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>

        {/* Present Division */}
        <div>
          <label className="block">Present Division</label>
          <select
            name="presentDivision"
            value={biodata.presentDivision}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagra">Chattagra</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>

        {/* Expected Partner Age */}
        <div>
          <label className="block">Expected Partner Age</label>
          <input
            type="number"
            name="expectedPartnerAge"
            value={biodata.expectedPartnerAge}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Expected Partner Height */}
        <div>
          <label className="block">Expected Partner Height</label>
          <select
            name="expectedPartnerHeight"
            value={biodata.expectedPartnerHeight}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Height</option>
            <option value="Short">Short</option>
            <option value="Average">Average</option>
            <option value="Tall">Tall</option>
          </select>
        </div>

        {/* Expected Partner Weight */}
        <div>
          <label className="block">Expected Partner Weight</label>
          <select
            name="expectedPartnerWeight"
            value={biodata.expectedPartnerWeight}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Weight</option>
            <option value="Underweight">Underweight</option>
            <option value="Normal">Normal</option>
            <option value="Overweight">Overweight</option>
          </select>
        </div>

        {/* Contact Email (Readonly) */}
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="contactEmail"
            value={user.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block">Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={biodata.mobileNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <button onSubmit={handleSubmit}
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
