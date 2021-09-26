import React from 'react';
import MemberCount from '../MemberCount/MemberCount';
import './Summary.css'

const Summary = (props) => {
    const { addedMembers } = props;
    const totalAmount = addedMembers.reduce((prev, curr) => prev + curr.honorarium, 0);
    return (
        <div className="my-5 border border-3 border-info rounded-3 p-3  summary-info">
            <div className="text-center text-primary">
                <h4>Total Members: {addedMembers.length}</h4>
                <h5>Total Spending: ${totalAmount.toFixed(2)}</h5>
            </div>
            <div>
                <h4 className="mt-4">Added Members:</h4>
                {
                    addedMembers.map(member => <MemberCount key={member.id} member={member}></MemberCount>)
                }
            </div>
        </div>
    );
};

export default Summary;