import React, { useState, useEffect } from "react";
import Filterbar from "../components/FilterBar";
import BiodataList from "../components/BiodataList";
import 'animate.css';

const Biodatas = () => {
  const [biodatas, setBiodatas] = useState([]);
  const [filteredBiodatas, setFilteredBiodatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const biodatasPerPage = 9;

  useEffect(() => {
    fetch("https://assignment-12-server-five-opal.vercel.app/biodata")
      .then((res) => res.json())
      .then((data) => {
        setBiodatas(data);
        setFilteredBiodatas(data); // Initialize filtered data
      });
  }, []);

  const handleFilterUpdate = (filters) => {
    let filtered = [...biodatas];

    // Filter by age range
    if (filters.ageRange) {
      filtered = filtered.filter(
        (biodata) =>
          biodata.age >= filters.ageRange[0] &&
          biodata.age <= filters.ageRange[1]
      );
    }

    // Filter by biodata type
    if (filters.biodataType) {
      filtered = filtered.filter(
        (biodata) => biodata.biodataType === filters.biodataType
      );
    }

    // Filter by division
    if (filters.division) {
      filtered = filtered.filter(
        (biodata) => biodata.permanentDivision === filters.division
      );
    }

    setFilteredBiodatas(filtered);
    setCurrentPage(1); // Reset to the first page when filters change
  };

  // Calculate the current page biodatas
  const indexOfLastBiodata = currentPage * biodatasPerPage;
  const indexOfFirstBiodata = indexOfLastBiodata - biodatasPerPage;
  const currentBiodatas = filteredBiodatas.slice(
    indexOfFirstBiodata,
    indexOfLastBiodata
  );

  // Pagination controls
  const totalPages = Math.ceil(filteredBiodatas.length / biodatasPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-200 to-green-200 mb-5">
      <h1 className="text-center my-3 pt-5 italic animate__animated animate__backInLeft">----All Biodatas----</h1>
      <div className="flex gap-4 p-6">
        {/* Sidebar for Filters */}
        <div className="w-1/4">
          <Filterbar onFilterUpdate={handleFilterUpdate} />
        </div>

        {/* Biodata List */}
        <div className="w-3/4">
          <BiodataList biodatas={currentBiodatas} />

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-400 rounded"
            >
              Previous
            </button>
            <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-400 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
