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
import glassesimoj from'../../img/glassesimoji.png'

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
                   <a href='https://github.com/JuwelShaikh' target="_blank"> <img src= {git} alt="" /></a>
                    <a href="https://www.instagram.com/juwel_shaikh/" target='_blank'><img src={inst} alt="" /></a>
                    <a href="https://www.linkedin.com/in/juwel-shaikh-236b73262/" target='_blank
                    '><img src= {linkedin}alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                
                <img src={boy} alt="" />
            </div>
            
        </div>
    );
};

export default Intro;