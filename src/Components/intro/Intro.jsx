import React from 'react';
import '../intro/intro.css'

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
            </div>
            <div className="i-right">
                this is the right side
            </div>
            
        </div>
    );
};

export default Intro;