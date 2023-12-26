import React from 'react';
import '../intro/intro.css'
import git from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import inst from '../../img/instagram.png'
import Vector1 from'../../img/Vector1.png'
import Vector2 from'../../img/Vector2.png'
import boy from'../../img/boy.png'
import thumbup from'../../img/thumbup.png'
import crowm from'../../img/crown.png'

const Intro = () => {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hi, I am</span>
                    <span>Juwel Shaikh</span>
                    <span>JR Frontend Developer with high level of creativity and confidence. It should give quality work </span>
                </div>
                <button className='button i-button'>Hire me!</button>
                <div className="i-icons">
                    <img src= {git} alt="" />
                    <img src={inst} alt="" />
                    <img src= {linkedin}alt="" />
                </div>
            </div>
            <div className="i-right">
                this is the right side
            </div>
            
        </div>
    );
};

export default Intro;