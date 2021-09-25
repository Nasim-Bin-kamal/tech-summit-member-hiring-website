import React from 'react';
import MemberCount from '../MemberCount/MemberCount';

const Summary = (props) => {
    const { memberCount } = props;
    console.log(memberCount);
    const totalAmount = memberCount.reduce((prev, curr) => prev + curr.honorarium, 0);
    return (
        <div className="my-5 border border-2 rounded-3 p-3">
            <div>
                <h4>Total Memebers: {memberCount.length}</h4>
                <h5>Total Spending: {totalAmount}</h5>
            </div>
            <div>
                <h4>Added Members:</h4>

                {
                    memberCount.map(count => <MemberCount count={count}></MemberCount>)
                }

            </div>
        </div>
    );
};

export default Summary;