import React from 'react';
import './Nav.css'
import Toggle from './Togle/Toggle';

const Navbar = () => {
    return (
        <div>
            <div className="n-main">
                <div className="n-left">
                    <div className="n-name">
                        Juwel
                    </div>
                    <Toggle/>
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
                        <button className='button n-button'>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;