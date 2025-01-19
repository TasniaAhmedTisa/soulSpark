import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ApprovedContact = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch contact requests
  const { data: contactRequests = [], refetch } = useQuery({
    queryKey: ["contactRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/contact-requests");
      return res.data;
    },
  });

  // Handle contact approval
  const handleApproveContact = (user) => {
    console.log("Approving contact for:", user);

    axiosSecure
      .patch(`/admin/contact-requests/${user._id}`)
      .then((res) => {
        if (res.status === 200 && res.data.modifiedCount > 0) {
            refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name}'s contact request has been approved!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.error("Error approving contact request:", err);
        Swal.fire({
          icon: "error",
          title: "Failed to approve contact",
          text: "Something went wrong.",
        });
      });
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Approve Contact Requests
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Biodata ID</th>
              <th className="border border-gray-300 px-4 py-2">
                Approve Contact Request
              </th>
            </tr>
          </thead>
          <tbody>
            {contactRequests.map((user) => (
              <tr key={user._id} className="text-center">
                
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.userEmail}</td>
                <td className="border border-gray-300 px-4 py-2">{user.biodataId || "N/A"}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleApproveContact(user)}
                    className="bg-green-500 text-white py-1 px-3 rounded shadow hover:bg-green-600"
                  >
                    Approve Contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedContact;
