import React from 'react';
import '../Footer/Footer.css';
import wave from '../../img/wave.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={wave} alt="" style={{width: '100%'}}/>
            <div className="f-contnet">
                
            </div>
        </div>
    );
};

export default Footer;