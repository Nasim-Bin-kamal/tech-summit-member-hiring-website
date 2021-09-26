import React from 'react';
import './Member.css'

const Member = (props) => {
    const { name, age, role, profession, honorarium, img, country } = props.member;
    return (
        <div>
            <div className="col p-1 border rounded-3 border-info">
                <div className="card h-100">

                    {/* single member information  */}
                    <img src={img} className="card-img-top rounded-circle mx-auto my-3" alt="..." style={{ width: "200px", height: "200px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <h6 className="card-text">Role: {role}</h6>
                        <p className="card-text"><b>Profession:</b> {profession}</p>
                        <p className="card-text">Age: {age}</p>
                        <p className="card-text">Country: {country}</p>
                        <p className="card-text">Honorarium: ${honorarium}</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => props.handleAddMember(props.member)}
                        ><i className="fas fa-user-plus"></i> Hire Member</button>
                    </div>

                    {/* social icons  */}
                    <div className="card-footer d-flex justify-content-around">
                        <i className="fab fa-instagram-square fa-2x" style={{ cursor: "pointer" }}></i>
                        <i className="fab fa-facebook-square fa-2x" style={{ cursor: "pointer" }}></i>
                        <i className="fab fa-twitter-square fa-2x" style={{ cursor: "pointer" }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Member;