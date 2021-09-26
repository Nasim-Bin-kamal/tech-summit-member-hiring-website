import React from 'react';

const MemberCount = (props) => {
    const { member } = props;
    return (
        <div className="my-3 border border-1 rounded-3 border-info">
            <div className="alert p-0 m-0 alert-light fade show" role="alert">
                <span><img className="p-1" src={member.img} alt="" style={{ width: "70px", height: "70px" }} /></span>
                <span>{member.name}</span>
            </div>

        </div>
    );
};

export default MemberCount;