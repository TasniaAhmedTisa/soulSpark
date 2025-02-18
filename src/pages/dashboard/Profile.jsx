import React, { useContext } from "react"; 
import { AuthContext } from "../../provider/AuthProvider"; 
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


const ProfilePage = () => {
  const { user } = useContext(AuthContext); 

  if (!user) {
    return <p className="text-center text-lg font-semibold mt-10">Loading user data...</p>;
  }

  // Profile Picture: Get from Firebase Auth or use a default image
  const profilePic = user.photoURL || "/default-avatar.png"; // Change to your default image URL
  const coverPhoto = "/default-cover.jpg"; // You can replace this with a dynamic cover photo

  return (
    <div className="sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto mt-10 pt-3">

      {/* Profile Card */}
      <div className="relative -mt-16 sm:-mt-20 bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-white rounded-full overflow-hidden shadow-md">
            <img 
              src={profilePic} 
              alt="User Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info */}
          <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.displayName || "User"}</h2>
          <p className="text-gray-600">{user.email}</p>
          <div className="flex items-center justify-center sm:justify-start">
                <span className="font-semibold"> Phone:</span>
                <span className="ml-2">+880 1234 567 890</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="font-semibold"> Address:</span>
                <span className="ml-2">Dhaka, Bangladesh</span>
              </div>
              <div className="flex gap-3 pt-5 text-3xl">
              <FaFacebookSquare />
              <FaSquareTwitter />
              <FaInstagramSquare />


              </div>


          {/* Action Buttons */}
          <div className="my-10 flex justify-center gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
