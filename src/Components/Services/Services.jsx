import React from 'react';
import '../Services/Services.css'
import heartEmoji from '../../img/heartemoji.png'
import glasess from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Cards/Card';
import resume from '../Services/Juwel CV PDF.pdf'
import { motion } from 'framer-motion';

const Services = () => {
    const transition ={duration:1, type: "sprint"}
    return (
        <div className='services'>
            {/* left-side */}
        <div className="awesome">
            <span>My awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores amet aut aspernatur explicabo deleniti totam possimus nobis, <br /> laudantium praesentium reprehenderit repellendus similique laborum </span>
            <a href={resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className="blur s-blur" style={{background: '#abf1ff94'}}></div>
        </div>
        {/* right-side */}
        <div className="cards">
            <motion.div
                initial={{left:"25rem"}}
                whileInView={{left:'14rem'}}
                transition={transition}
            style={{
                left:'14rem'
            }}>
                <Card
                    emoji={heartEmoji}
                    heading = {'Desing'}
                    details ={'Figma, Scratch, Adobe'}
                />
            </motion.div>
            {/* second card */}
            <motion.div 
                initial={{right:'24rem'}}
                whileInView={{right:"15rem"}}
                transition={transition}
            style={{top:'12rem', left:'-4rem' }}>
            <Card
                    emoji={glasess}
                    heading = {'Developer'}
                    details ={'HTML, CSS, JavaScript, React'}
                />
            </motion.div>
            {/* third card */}
            <motion.div
                initial={{left:'20rem'}}
                whileInView={{left:"10rem"}}
                transition={transition}
            style={{top:'19rem', left:'12rem' }}>
            <Card
                    emoji={humble}
                    heading = {'UI/UX'}
                    details ={'lorem ispum text are usually use in section where'}
                />
            </motion.div>
        </div>
        </div>
    );
};

export default Services;