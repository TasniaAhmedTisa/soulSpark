import React from 'react';
import { Link } from 'react-router-dom';

const BiodataCard = ({ biodata }) => {
    const { biodataId, biodataType, profileImage, permanentDivision, age, occupation } = biodata;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
                src={profileImage || 'https://via.placeholder.com/150'}
                alt={`${biodataType} profile`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <div className="text-center">
                <p className="font-bold">ID: {biodataId}</p>
                <p className="text-blue-500 uppercase">{biodataType}</p>
                <p>Division: {permanentDivision}</p>
                <p>Occupation: {occupation}</p>
                <p className="text-red-500 font-bold">Age: {age}</p>
            </div>
            <div className="mt-4 text-center">
                <Link to={`/biodatas/${biodataId}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                        View Profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BiodataCard;
