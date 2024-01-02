import React from 'react';
import '../Works/Works.css'
import upwork from '../../img/Upwork.png'
import fiver from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import spotify from '../../img/Shopify.png'
import facebook from '../../img/Facebook.png'

const Works = () => {
    return (
        <div className='work'>
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brand & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores  <br/>amet aut aspernatur explicabo deleniti totam possimus nobis, <br /> laudantium <br/>praesentium reprehenderit repellendus similique laborum </span>

                <button className='button s-button'>Hire me</button>

            </div>
            {/* righ-side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={fiver} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={spotify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={facebook} alt="" />
                    </div>
                </div>
                {/* background-circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;