import { useState, useEffect } from "react";
import Members from "../../components/members";

const MemberList = () => {
    const [members, setMembers] = useState([]);
    const [sortOrder, setSortOrder] = useState("ascending");

    useEffect(() => {
        fetch('/premium.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                return res.json();
            })
            .then((data) => {
                const premiumMembers = data.filter(member => member.category === "Premium");
                setMembers(premiumMembers);            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        
    }, []);

    const sortMembers = (order) => {
        const sorted = [...members].sort((a, b) => {
            if (order === "ascending") {
                return a.age - b.age;
            } else {
                return b.age - a.age;
            }
        });
        setMembers(sorted);
    };

    const toggleSortOrder = () => {
        const newOrder = sortOrder === "ascending" ? "descending" : "ascending";
        setSortOrder(newOrder);
        sortMembers(newOrder);
    };

    return (
        <section className="my-8 w-11/12 mx-auto">
                            <h1 className="text-2xl font-bold text-center italic">----Premium Members----</h1>

            <div className="flex justify-between items-center mb-5">
                <button
                    onClick={toggleSortOrder}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all"
                >
                    Sort: {sortOrder === "ascending" ? "Ascending" : "Descending"}
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                    <Members key={member.biodataId} member={member} />
                ))}
            </div>
        </section>
    );
};

export default MemberList;
