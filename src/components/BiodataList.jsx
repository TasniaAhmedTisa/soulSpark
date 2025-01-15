import React from 'react';
import BiodataCard from './BiodataCard';

const BiodataList = ({ biodatas }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {biodatas.map((biodata) => (
                <div key={biodata.id}>                 
                <BiodataCard key={biodata.biodataId} biodata={biodata} />

              </div>
            ))}
        </div>
    );
};

export default BiodataList;
