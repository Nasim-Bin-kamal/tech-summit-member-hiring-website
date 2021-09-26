import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import Summary from '../Summary/Summary';

const MainInfo = () => {
    const [members, setMembers] = useState([]);
    const [addedMembers, setAddedMembers] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);

    const handleAddMember = member => {
        let newMembers = [...addedMembers];
        const existingMember = addedMembers.find(addMember => addMember.id === member.id);
        if (!existingMember) {
            newMembers = [...addedMembers, member];
        }
        setAddedMembers(newMembers);

    }
    return (
        <div className="container">
            <div className="row">

                {/* all members section  */}
                <div className="col-sm-1 col-md-9 mx-auto">
                    <h2 className="my-3 text-primary">Members</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                        {
                            members.map(member => <Member
                                key={member.id}
                                member={member}
                                handleAddMember={handleAddMember}
                            ></Member>)
                        }
                    </div>
                </div>

                {/* summary section  */}
                <div className="col-md-3 mt-5">
                    <Summary addedMembers={addedMembers}></Summary>
                </div>
            </div>

        </div>
    );
};

export default MainInfo;
