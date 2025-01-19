import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
//import useAxiosSecure from './useAxiosSecure';
import axios from 'axios';

const useAdmin = () => {
    const {user} = useAuth()
    //const axiosSecure = useAxiosSecure()
   const {data: isAdmin}= useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async() =>{
        try {
            const res = await axios.get(`/users/admin/${user.email}`);
            console.log('API response:', res.data);  // Log response
            return res.data?.admin ?? false;
          } catch (err) {
            console.error('Error fetching admin status:', err);
            return false;  // Return false in case of error
          }
        }
         })
         return [isAdmin]
        }
    
    export default useAdmin