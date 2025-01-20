import React, { useEffect, useState } from 'react';

const SuccessStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch('https://assignment-12-server-five-opal.vercel.app/success-stories');
      const data = await response.json();
      setStories(data);
    };

    fetchStories();
  }, []);

  return (
    <section className="py-10 bg-gray-50 w-11/12 mx-auto my-5">
      <h2 className="text-3xl font-bold text-center mb-10 italic">---- Success Stories ----</h2>
      <div className="space-y-12 w-10/12 mx-auto">
        {stories.map((story, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg">
            <img
              src={story.coupleImage}
              alt="Couple"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg text-center"
            />
            <h3 className="text-xl font-semibold text-indigo-600">
              Married on: {new Date(story.date).toLocaleDateString()}
            </h3>
            <p className="text-yellow-500 mt-2">{"★".repeat(5)}</p>
            <p className="mt-2 text-gray-700">{story.successStory}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
