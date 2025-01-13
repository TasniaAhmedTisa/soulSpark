import { useEffect, useState } from "react";
import Members from "../../components/members";


const Member = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('premium.json')
            .then(res => res.json())
            .then(data => {
                const premiumMember = data.filter(member => member.category === 'premium');
                setMembers(premiumMember)
            })
    }, [])
    return (
        <section className="my-12">
            
            <div className="grid md:grid-cols-2 gap-10">
                {
                    members.map(member => <Members
                        key={member._id}
                        member={member}
                    ></Members>)
                }
            </div>
            <div className="flex justify-center">
            <button className="btn btn-outline border-0 border-b-4 mt-5 uppercase font-bold"> view profile </button>

            </div>
        </section>
    );
};

export default Member;