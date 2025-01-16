import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SimilarBiodatas = ({ biodataType }) => {
  const [similarBiodatas, setSimilarBiodatas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/biodata?biodataType=${biodataType}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setSimilarBiodatas(data.slice(0, 3))
      }); // Show only 3
  }, [biodataType]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {similarBiodatas.map((biodata) => (
        <div
          key={biodata.id}
          className="p-4 bg-white shadow-md rounded-md border hover:shadow-lg"
        >
          <h3 className="text-xl font-bold">{biodata.name}</h3>
          <p><strong>Age:</strong> {biodata.age}</p>
          <p><strong>Division:</strong> {biodata.permanentDivision}</p>
          <p><strong>Occupation:</strong> {biodata.occupation}</p>
          <Link
            to={`/biodata/${biodata.id}`}
            className="text-blue-500 underline mt-2 block"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SimilarBiodatas;
