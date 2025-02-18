import React, { useContext, useState } from "react";  
import { AuthContext } from "../../provider/AuthProvider"; 
import { FaFacebookSquare, FaInstagramSquare, FaHeart, FaUserFriends, FaUsers } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const ProfilePage = () => {
  const { user } = useContext(AuthContext); 

  // Fake stats (replace with real API data later)
  const [likes, setLikes] = useState(254);
  const [followers, setFollowers] = useState(1_245);
  const [following, setFollowing] = useState(340);

  if (!user) {
    return <p className="text-center text-lg font-semibold mt-10">Loading user data...</p>;
  }

  // Profile Picture: Get from Firebase Auth or use a default image
  const profilePic = user.photoURL || "/default-avatar.png"; // Change to your default image URL

  return (
    <div className="sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto -mt-9 pt-3">

      {/* Profile Card */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 text-center">
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

          <div className="flex items-center justify-center gap-5 mt-4">
            <div className="text-center">
              <FaHeart className="text-red-500 text-3xl" />
              <p className="font-semibold">{likes} Likes</p>
            </div>
            <div className="text-center">
              <FaUserFriends className="text-blue-500 text-3xl" />
              <p className="font-semibold">{followers} Followers</p>
            </div>
            <div className="text-center">
              <FaUsers className="text-green-500 text-3xl" />
              <p className="font-semibold">{following} Following</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-5">
            <p><span className="font-semibold">Phone:</span> +880 1234 567 890</p>
            <p><span className="font-semibold">Address:</span> Dhaka, Bangladesh</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-3 pt-5 text-3xl">
            <FaFacebookSquare className="text-blue-600 hover:text-blue-800 cursor-pointer" />
            <FaSquareTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
            <FaInstagramSquare className="text-pink-500 hover:text-pink-700 cursor-pointer" />
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
