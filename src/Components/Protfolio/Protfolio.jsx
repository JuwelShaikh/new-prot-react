import React from 'react';
import '../Protfolio/Protfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import sidebar from '../../img/sidebar.png'
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
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='protfolio-slider'
            >
                <SwiperSlide>
                    <img src={sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicapp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt="" />
                </SwiperSlide>
            </Swiper>
           
        </div>
    );
};

export default Protfolio;