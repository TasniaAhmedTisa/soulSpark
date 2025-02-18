import { useState, useEffect } from "react";
import Members from "../../components/members";
import useBiodata from "../../hooks/useBiodata";

const MemberList = () => {
    const [members] = useBiodata()
    const premiumMembers = members.filter(member => member.category === "Premium");
 
    //const [members, setMembers] = useState([]);
    const [sortOrder, setSortOrder] = useState("ascending");
    const [filteredMembers, setFilteredMembers] = useState([]);


    // useEffect(() => {
    //     fetch('/Biodata.json')
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error("Failed to fetch data");
    //             }
    //             return res.json();
    //         })
    //         .then((data) => {
    //             const premiumMembers = data.filter(member => member.category === "Premium");
    //             setMembers(premiumMembers);           
    //          })
    //         .catch((error) => {
    //             console.error("Error fetching data:", error);
    //         });
        
    // }, []);

    useEffect(() => {
        const premiumMembers = members.filter((member) => member.category === "Premium");
        const sorted = premiumMembers.sort((a, b) => {
            return sortOrder === "ascending" ? a.age - b.age : b.age - a.age;
        });
        setFilteredMembers(sorted);
    }, [members, sortOrder]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <section className="mt-8 mb-5 py-5 bg-gradient-to-b from-blue-900 to-green-100">
              <h2 className="animate__animated animate__fadeInDown font-bold text-center italic text-white">----Premium Members----</h2>

            <div className="flex justify-between items-center mt-4 mb-2 px-5">
            <select
                    onChange={handleSortChange}
                    value={sortOrder}
                    className=" rounded px-4 py-2 border-2 "
                >
                    
                    <option value="ascending">Sort by Age: Ascending</option>
                    <option value="descending">Sort by Age: Descending</option>
                </select>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredMembers.map((member) => (
                    <div key={member.biodataId} className="mx-5 my-3">                 
                    <Members key={member.biodataId} member={member} />
    
                  </div>
                ))}
            </div>
        </section>
    );
};

export default MemberList;
