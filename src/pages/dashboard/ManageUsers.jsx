import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
  //const [users, setUsers] = useState([]);
 // const [loading, setLoading] = useState(true);

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    }
})

  // Fetch all users
//   useEffect(() => {
//     fetch("http://localhost:5000/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching users:", err);
//         setLoading(false);
//       });
//   }, []);

  const handleMakeAdmin = user => {
    
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        if(res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}
      

  const handleMakePremium = (userId) => {
    fetch(`http://localhost:5000/users/make-premium/${userId}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("User has been made premium successfully!");
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user.id === userId ? { ...user, isPremium: true } : user
            )
          );
        }
      })
      .catch((err) => console.error("Error making user premium:", err));
  };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Manage Users</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">User Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Make Admin</th>
              <th className="border border-gray-300 px-4 py-2">Make Premium</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.role === 'admin' ? (
                    <span className="text-green-600 font-bold">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="bg-blue-500 text-white py-1 px-3 rounded shadow hover:bg-blue-600"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.isPremium ? (
                    <span className="text-green-600 font-bold">Premium</span>
                  ) : (
                    <button
                      onClick={() => handleMakePremium(user.id)}
                      className="bg-green-500 text-white py-1 px-3 rounded shadow hover:bg-green-600"
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

export default ManageUsers;
