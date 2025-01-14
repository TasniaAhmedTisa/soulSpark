
const SuccessStories = () => {
  const stories = [
    {
      coupleImage: 'https://ibb.co.com/6s4ZZ2B',
      marriageDate: '2024-08-15',
      reviewStars: 5,
      storyText: 'We found each other here. Thank you for making this possible!',
    },
    {
      coupleImage: 'https://via.placeholder.com/150',
      marriageDate: '2023-01-10',
      reviewStars: 4,
      storyText: 'A wonderful platform to find your soulmate. Highly recommend!',
    },
    {
      coupleImage: 'https://via.placeholder.com/150',
      marriageDate: '2023-06-05',
      reviewStars: 5,
      storyText: 'This platform brought us together, and we’re forever grateful.',
    },
  ];

  // Sort stories by marriageDate in ascending order
  const sortedStories = [...stories].sort(
    (a, b) => new Date(a.marriageDate) - new Date(b.marriageDate)
  );

  return (
    <section className="py-10 bg-gray-50 w-11/12 mx-auto my-5">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 italic">----Success Stories----</h2>
        <div className="space-y-12">
          {sortedStories.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-6 bg-white shadow-md p-6 rounded-lg`}
            >
              <img
                src={story.coupleImage}
                alt="Couple"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg text-center"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-indigo-600">
                  Married on: {new Date(story.marriageDate).toLocaleDateString()}
                </h3>
                <p className="text-yellow-500 mt-2">
                  {'★'.repeat(story.reviewStars)}
                </p>
                <p className="mt-2 text-gray-700">{story.storyText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
