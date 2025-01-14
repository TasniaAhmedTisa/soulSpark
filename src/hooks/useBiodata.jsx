import { useEffect, useState } from "react";

const useBiodata = () =>{
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true)
    
        useEffect(() => {
            fetch('/Biodata.json')
                .then(res => res.json())
                .then(data => {
                    setMembers(data)
                    setLoading(false)
                })
                
                
            
        }, []);

        return [members,loading]

}
export default useBiodata;