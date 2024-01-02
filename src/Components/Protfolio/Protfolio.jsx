import React from 'react';
import '../Protfolio/Protfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slider from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'


const Protfolio = () => {
    return (
        <div className='protfolio'>
            {/* heading */}
            <span>Recent projects</span>
            <span>Protfolio</span>

            {/* slider */}
            <Swiper>
                <SwiperSlide>
                    <img src="" alt="" />
                </SwiperSlide>
            </Swiper>
           
        </div>
    );
};

export default Protfolio;