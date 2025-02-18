import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const GotMarried = () => {
  const [selfBiodataId, setSelfBiodataId] = useState('');
  const [partnerBiodataId, setPartnerBiodataId] = useState('');
  const [coupleImage, setCoupleImage] = useState('');
  const [successStory, setSuccessStory] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://assignment-12-server-five-opal.vercel.app/success-stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          selfBiodataId,
          partnerBiodataId,
          coupleImage,
          successStory
        })
      });

      if (response.ok) {
        navigate('/'); 
      } else {
        console.error('Error submitting story');
      }
    } catch (error) {
      console.error('Error submitting story:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="animate__animated animate__fadeInDown text-2xl font-bold text-center mb-8">Got Married? Share Your Story!</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Self Biodata ID</label>
          <input
            type="text"
            value={selfBiodataId}
            onChange={(e) => setSelfBiodataId(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Partner Biodata ID</label>
          <input
            type="text"
            value={partnerBiodataId}
            onChange={(e) => setPartnerBiodataId(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Couple Image Link (or upload image)</label>
          <input
            type="text"
            value={coupleImage}
            onChange={(e) => setCoupleImage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Success Story Review</label>
          <textarea
            value={successStory}
            onChange={(e) => setSuccessStory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full p-3 bg-blue-500 text-white rounded ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Story'}
        </button>
      </form>
    </div>
  );
};

export default GotMarried;
