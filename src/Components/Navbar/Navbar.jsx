import React from 'react';
import './Nav.css'

const Navbar = () => {
    return (
        <div>
            <div className="n-main">
                <div className="n-left">
                    <div className="n-name">
                        Juwel
                    </div>
                    <span>Toggle</span>
                </div>
                <div className="n-right">
                    <div className="n-list">
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Experience</li>
                            <li>Protfolio</li>
                            <li>Testimonials</li>
                        </ul>
                        <button className='button'>Contact me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;