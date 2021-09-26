import React from 'react';
import Banner from '../Banner/Banner';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* nav bar initialize */}
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container p-2">
                    <a className="navbar-brand fs-3" href="/home"> World Tech Summit</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-5 me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fs-5" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="/members">Members</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="/schedule">Schedule</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="/activities">Activities</a>
                            </li>
                        </ul>

                        {/* search button  */}
                        <form className="d-flex flex-fill mx-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* summit banner  */}
            <div>
                <Banner />
            </div>

        </div>
    );
};

export default Header;