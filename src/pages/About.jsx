
const About = () => {
  return (
    <div className="about-us-container py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to SoulSpark, where we connect individuals seeking meaningful relationships with like-minded partners. Our platform is designed to help you find someone who truly aligns with your values, interests, and life goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="about-card bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to provide a safe and reliable platform where individuals can meet, connect, and build lasting relationships based on mutual respect and shared values.
            </p>
          </div>
          <div className="about-card bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where people can find their perfect match with ease, allowing them to focus on building strong, healthy relationships that last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
