import { useState } from "react";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="relative -mb-16 bg-gradient-to-r from-green-200 to-blue-900 text-white py-10 px-8 text-center rounded-2xl shadow-lg max-w-md sm:max-w-sm md:max-w-3xl lg:max-w-6xl mx-auto mt-12">
      <div className="border border-blue-950 shadow-2xl py-4 px-4 rounded-2xl ">
      <h2 className="text-3xl font-bold mb-4 text-black">Stay Updated with SoulSpark!</h2>
      <p className="text-lg mb-6 text-gray-800">Get dating tips, success stories, and exclusive offers.</p>
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-lg text-gray-800 w-full sm:w-auto flex-1 border border-gray-300 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-gray-200">{message}</p>}
      </div>
    </div>
  );
}
