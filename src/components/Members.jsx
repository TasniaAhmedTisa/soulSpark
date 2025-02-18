import { Link } from "react-router-dom";

const Members = ({ member }) => {
    
    const { biodataId, biodataType, profileImage, permanentDivision, occupation, age } = member;

    return (
        <div className="bg-gradient-to-r from-white to-green-100 shadow-xl shadow-black rounded-lg border border-gray-300 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 p-5">
            <div className="flex flex-col items-center">
                <img
                    className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
                    src={profileImage}
                    alt={`${biodataType} profile`}
                />
                <div className="text-center">
                    <p className="text-gray-800 font-bold text-lg mb-1">ID: {biodataId}</p>
                    <p className="text-blue-600 text-sm uppercase font-semibold mb-2">
                        {biodataType}
                    </p>
                    <p className="text-gray-700 mb-1">
                        <span className="font-medium">Division:</span> {permanentDivision}
                    </p>
                    <p className="text-gray-700 mb-1">
                        <span className="font-medium">Occupation:</span> {occupation}
                    </p>
                    <p className="text-red-500 text-lg font-bold">
                        Age: {age}
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-2">
                <Link to={`/biodata/${biodataId}`}><button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all">
                    View Profile
                </button></Link>
            </div>
        </div>
    );
};

export default Members;
