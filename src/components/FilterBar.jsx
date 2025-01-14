import React, { useState } from 'react';

const Filterbar = ({ onFilterUpdate }) => {
    const [ageRange, setAgeRange] = useState([18, 60]);
    const [biodataType, setBiodataType] = useState('');
    const [division, setDivision] = useState('');

    const handleApplyFilters = () => {
        onFilterUpdate({ ageRange, biodataType, division });
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Filter Options</h2>

            {/* Age Range */}
            <div className="mb-4">
                <label className="block font-medium mb-2">Age Range</label>
                <input
                    type="range"
                    min="18"
                    max="60"
                    value={ageRange[0]}
                    onChange={(e) => setAgeRange([+e.target.value, ageRange[1]])}
                    className="w-full"
                />
                <input
                    type="range"
                    min="18"
                    max="60"
                    value={ageRange[1]}
                    onChange={(e) => setAgeRange([ageRange[0], +e.target.value])}
                    className="w-full"
                />
                <p>
                    {ageRange[0]} - {ageRange[1]} years
                </p>
            </div>

            {/* Biodata Type */}
            <div className="mb-4">
                <label className="block font-medium mb-2">Biodata Type</label>
                <select
                    value={biodataType}
                    onChange={(e) => setBiodataType(e.target.value)}
                    className="w-full border p-2 rounded"
                >
                    <option value="">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            {/* Division */}
            <div className="mb-4">
                <label className="block font-medium mb-2">Division</label>
                <select
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="w-full border p-2 rounded"
                >
                    <option value="">All</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattagra">Chattagra</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Sylhet">Sylhet</option>
                </select>
            </div>

            <button
                onClick={handleApplyFilters}
                className="w-full bg-blue-500 text-white py-2 rounded"
            >
                Apply Filters
            </button>
        </div>
    );
};

export default Filterbar;
