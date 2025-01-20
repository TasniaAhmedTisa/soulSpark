import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Success = () => {
  const [stories, setStories] = useState([]);

  // Fetch success stories
  useEffect(() => {
    fetch('https://assignment-12-server-five-opal.vercel.app/success-stories')
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error('Error fetching success stories:', err));
  }, []);

  // Function to show the modal
  const showStoryModal = (story) => {
    Swal.fire({
      title: 'Success Story',
      html: `
        <div className="flex">
        <div>    
            <img src="${story.coupleImage}" alt="Couple" className="mt-4 w-32 h-32 items-center rounded-full"/>
         </div>
        <div>
        <p><strong>Male Biodata ID:</strong> ${story.selfBiodataId}</p>
        <p><strong>Female Biodata ID:</strong> ${story.partnerBiodataId}</p>
        <p><strong>Success Story:</strong> ${story.successStory}</p>
        </div>
        </div>
        
      `,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      width: '50%',
    });
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-4">Success Stories</h1>

      {/* Table */}
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Male Biodata ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Female Biodata ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">View Story</th>
          </tr>
        </thead>
        <tbody>
          {stories.map((story, index) => (
            <tr key={index} className="border-b">
              <td className="border border-gray-300 px-4 py-2">{story.selfBiodataId}</td>
              <td className="border border-gray-300 px-4 py-2">{story.partnerBiodataId}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => showStoryModal(story)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  View Story
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Success;
