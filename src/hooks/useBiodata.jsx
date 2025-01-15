import { useEffect, useState } from "react";

const useBiodata = () =>{
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true)
    
        useEffect(() => {
            fetch('http://localhost:5000/biodata')
                .then(res => res.json())
                .then(data => {
                    setMembers(data)
                    setLoading(false)
                })
                
                
            
        }, []);

        return [members,loading]

}
export default useBiodata;