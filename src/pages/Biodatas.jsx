import React, { useState, useEffect } from 'react';
import Filterbar from '../components/FilterBar';
import BiodataList from '../components/BiodataList';

const Biodatas = () => {
    const [biodatas, setBiodatas] = useState([]);
    const [filteredBiodatas, setFilteredBiodatas] = useState([]);

    // Fetch biodatas from a JSON file in the public folder
    useEffect(() => {
        fetch('http://localhost:5000/biodata')
            .then((res) => res.json())
            .then((data) => {
                setBiodatas(data);
                setFilteredBiodatas(data);
            });
    }, []);

    // Handle filter updates
    const handleFilterUpdate = (filters) => {
        let filtered = [...biodatas];
        
        // Filter by age range
        if (filters.ageRange) {
            filtered = filtered.filter(biodata =>
                biodata.age >= filters.ageRange[0] && biodata.age <= filters.ageRange[1]
            );
        }

        // Filter by biodata type
        if (filters.biodataType) {
            filtered = filtered.filter(biodata => biodata.biodataType === filters.biodataType);
        }

        // Filter by division
        if (filters.division) {
            filtered = filtered.filter(biodata => biodata.permanentDivision === filters.division);
        }

        setFilteredBiodatas(filtered);
    };

    return (
        <div>
            <h1 className='text-center my-4 italic'>----All Biodatas----</h1>

            <div className="flex gap-6 p-6">
            {/* Sidebar for Filters */}
            <div className="w-1/4">
                <Filterbar onFilterUpdate={handleFilterUpdate} />
            </div>

            {/* Biodata List */}
            <div className="w-3/4">
                <BiodataList biodatas={filteredBiodatas.slice(0, 20)} />
            </div>
        </div>
        </div>
    );
};

export default Biodatas;
