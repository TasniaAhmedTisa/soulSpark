import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://assignment-12-server-five-opal.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;