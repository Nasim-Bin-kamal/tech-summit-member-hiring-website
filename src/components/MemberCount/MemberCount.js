import React from 'react';

const MemberCount = (props) => {
    const { count } = props;
    return (
        <div className="my-3 border border-1 rounded-3">
            <div classNameName="alert alert-light fade show" role="alert">
                <span><img src={count.img} alt="" style={{ width: "50px", height: "50px" }} /></span> <span>{count.name}</span>

            </div>

        </div>
    );
};

export default MemberCount;