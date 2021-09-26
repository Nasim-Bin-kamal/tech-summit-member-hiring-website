import React from 'react';

const MemberCount = (props) => {
    const { count } = props;
    return (
        <div className="my-3 border border-1 rounded-3 border-info">
            <div classNameName="alert alert-light fade show" role="alert">
                <span><img className="p-1" src={count.img} alt="" style={{ width: "70px", height: "70px" }} /></span> <span>{count.name}</span>
            </div>

        </div>
    );
};

export default MemberCount;