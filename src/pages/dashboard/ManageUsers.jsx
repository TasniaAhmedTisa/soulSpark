import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import 'animate.css';

import { useQuery, useQueryClient } from "@tanstack/react-query";
const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient();

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
//     fetch("https://assignment-12-server-five-opal.vercel.app/users")
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
  const updatedUsers = users.map((user) =>
    user._id === userId ? { ...user, isPremium: true } : user
  );

  queryClient.setQueryData(["users"], updatedUsers);

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "User is now Premium!",
    showConfirmButton: false,
    timer: 1500,
  });
};




  return (
    <div className="container mx-auto py-6">
      <h1 className="animate__animated animate__fadeInDown text-3xl font-bold text-center mb-6">Manage Users</h1>
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
                      onClick={() => handleMakePremium(user._id)}
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
