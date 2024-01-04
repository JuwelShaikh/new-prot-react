import React from 'react';
import '../Footer/Footer.css';
import wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Face from '@iconscout/react-unicons/icons/uil-facebook'
import Git from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={wave} alt="" style={{width: '100%'}}/>
            <div className="f-contnet">
                <span>Juwelshaikh04@gmail.com</span>
                <div className="f-icons">
                    <Insta color='white' size='3rem'/>
                    <Face color='white' size='3rem'/>
                    <Git color='white' size='3rem'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;