import { useEffect, useState } from "react";
import MenuItem from "../../Components/Shared/MenuItem";


const Member = () => {
    const [member, setMember] = useState([]);
    useEffect(() => {
        fetch('premium.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="my-12">
            
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
            <button className="btn btn-outline border-0 border-b-4 mt-5 uppercase">ORDER YOUR FAVOURITE FOOD</button>

            </div>
        </section>
    );
};

export default Member;