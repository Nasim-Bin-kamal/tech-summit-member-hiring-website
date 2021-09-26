import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-title">
                    <h1>Join The World's Largest <br></br> Tech Summit 2021</h1>
                    <h3>Total Estimated Budget: $50M</h3>
                    <h4 className="mt-md-3">Registration deadline: 30th September 2021</h4>
                    <p>If you want to join click the enroll button</p>
                    <button className="btn btn-danger px-5 fs-5 my-md-3">Enroll Now <i className="fas fa-angle-double-right"></i></button>

                </div>

            </div>

        </div>
    );
};

export default Banner;