import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import 'animate.css';

const ApprovedPre = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch premium approval requests
  const { data: premiumRequests = [], refetch } = useQuery({
    queryKey: ["premiumRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/premium-requests");
      return res.data;
    },
  });

  // Handle premium approval
  const handleMakePremium = (user) => {
    axiosSecure
      .patch(`/admin/premium-requests/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} has been made a Premium User!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.error("Error approving premium request:", err);
        Swal.fire({
          icon: "error",
          title: "Failed to make Premium",
          text: "Something went wrong.",
        });
      });
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="animate__animated animate__fadeInDown text-3xl font-bold text-center mb-6">
        Approve Premium Requests
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Biodata ID</th>
              <th className="border border-gray-300 px-4 py-2">Make Premium</th>
            </tr>
          </thead>
          <tbody>
            {premiumRequests.map((user) => (
              <tr key={user._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.biodataId || "N/A"}</td>
                <td className="border border-gray-300 px-4 py-2">
                {user.status === 'approved' ? (
                    <span className="text-green-600 font-bold">Approved</span>
                  ) : (
                    <button
                      onClick={() => handleMakePremium(user)}
                      className="bg-blue-500 text-white py-1 px-3 rounded shadow hover:bg-blue-600"
                    >
                      Make Premium
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedPre;
