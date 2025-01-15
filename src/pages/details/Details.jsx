import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SimilarBiodatas from "./SimilarBiodatas ";

const Details = () => {
  const { id } = useParams();
  const { user, isPremiumMember } = useContext(AuthContext);
  const navigate = useNavigate();

  const [biodata, setBiodata] = useState(null);

  // Fetch biodata details
  useEffect(() => {
    fetch(`http://localhost:5000/biodata/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBiodata(data)
        console.log(data)
    });
  }, [id]);

  const handleAddToFavorites = () => {
    // Add biodata to favorites (make API call or update local state)
    console.log(`${biodata.name} added to favorites!`);
  };

  const handleRequestContact = () => {
    navigate(`/checkout/${id}`);
  };

  if (!biodata) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-4">{biodata.name}'s Biodata</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Biodata Details */}
        <div className="w-full lg:w-3/4 p-4 bg-white shadow-md rounded-md">
          <p><strong>Age:</strong> {biodata.age}</p>
          <p><strong>Type:</strong> {biodata.biodataType}</p>
          <p><strong>Division:</strong> {biodata.permanentDivision}</p>
          <p><strong>Occupation:</strong> {biodata.occupation}</p>
          {isPremiumMember ? (
            <>
              <p><strong>Email:</strong> {biodata.email}</p>
              <p><strong>Phone:</strong> {biodata.phone}</p>
            </>
          ) : (
            <p className="text-red-500 italic">Contact information is visible only to premium members.</p>
          )}
        </div>

        {/* Actions */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600"
            onClick={handleAddToFavorites}
          >
            Add to Favorites
          </button>
          {!isPremiumMember && (
            <button
              className="bg-green-500 text-white py-2 px-4 rounded shadow-md hover:bg-green-600"
              onClick={handleRequestContact}
            >
              Request Contact Information
            </button>
          )}
        </div>
      </div>

      {/* Similar Biodatas */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Similar Biodatas</h2>
        <SimilarBiodatas biodataType={biodata.biodataType} />
      </div>
    </div>
  );
};

export default Details;
