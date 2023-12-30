import React from 'react';
import '../Services/Services.css'
import heartEmoji from '../../img/heartemoji.png'
import glasess from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Cards/Card';

const Services = () => {
    return (
        <div className='services'>
            {/* left-side */}
        <div className="awesome">
            <span>My awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores amet aut aspernatur explicabo deleniti totam possimus nobis, <br /> laudantium praesentium reprehenderit repellendus similique laborum </span>
            <button className='button s-button'>Download CV</button>
            <div className="blur s-blur" style={{background: '#abf1ff94'}}></div>
        </div>
        {/* right-side */}
        <div className="cards">
            <div>
                <Card
                    emoji={heartEmoji}
                    heading = {'Desing'}
                    details ={'Figma, Scratch, Adobe'}
                />
            </div>
        </div>
        </div>
    );
};

export default Services;