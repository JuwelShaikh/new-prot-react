import React from 'react';
import '../Works/Works.css'

const Works = () => {
    return (
        <div className='work'>
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brand & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores  <br/>amet aut aspernatur explicabo deleniti totam possimus nobis, <br /> laudantium <br/>praesentium reprehenderit repellendus similique laborum </span>

                <button className='button s-button'>Hire me</button>

                <div className="blur s-blur" style={{ background: '#abf1ff94' }}></div>
            </div>
        </div>
    );
};

export default Works;