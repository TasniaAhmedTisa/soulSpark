import { FaHandshake, FaUserCheck, FaHeart } from "react-icons/fa"; // Replaced GiWeddingRings with FaHeart

const WhyChooseUs = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white my-4">Why Choose Us</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Most Trusted and Premium Matrimony Service in the World.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 - Genuine Profiles */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg text-center">
          <FaUserCheck className="text-yellow-500 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Genuine Profiles</h3>
          <p className="text-gray-600 mt-2">
            Contact genuine profiles with 100% verified mobile.
          </p>
        </div>

        {/* Card 2 - Most Trusted */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg text-center">
          <FaHandshake className="text-blue-500 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Most Trusted</h3>
          <p className="text-gray-600 mt-2">
            The most trusted wedding matrimony brand worldwide.
          </p>
        </div>

        {/* Card 3 - 2000+ Weddings */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg text-center">
          <FaHeart className="text-pink-500 text-5xl mx-auto mb-4" /> {/* New Icon */}
          <h3 className="text-xl font-semibold">2000+ Weddings</h3>
          <p className="text-gray-600 mt-2">
            Lakhs of people have found their life partner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
