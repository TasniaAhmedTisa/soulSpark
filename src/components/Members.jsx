

const Members = ({member}) => {
    const {biodataId,biodataType,profileImage,permanentDivision,occupation,age} = member;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={profileImage} alt="" />
            <div>
                <p>{biodataId}</p>
                <p>{biodataType}</p>
                <h3 className="uppercase">{permanentDivision}</h3>
                <p>{occupation}</p>
            </div>
            <p className="text-yellow-500">${age}</p>
        </div>
    );
};

export default Members;