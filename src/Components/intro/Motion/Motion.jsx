import React from 'react';
import '../Motion/Motion.css'

const Motion = ({image,text1, text2}) => {
    return (
        <div className='motionDiv'>
            <img src={image} alt="" />
            <span>
                {text1}
                <br />
                {text2}
            </span>
        </div>
    );
};

export default Motion;