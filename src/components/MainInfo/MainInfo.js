import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import Summary from '../Summary/Summary';

const MainInfo = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <h2>Members</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">

                        {
                            members.map(member => <Member key={member.id} member={member}></Member>)
                        }
                    </div>

                </div>
                <div className="col-md-3">
                    <Summary></Summary>
                </div>
            </div>

        </div>
    );
};

export default MainInfo;
