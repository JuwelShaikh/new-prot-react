import React from 'react';
import '../Testimonials/Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import propic1 from '../../img/profile1.jpg';
import propic2 from '../../img/profile2.jpg';
import propic3 from '../../img/profile3.jpg';
import propic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';



const Testimonial = () => {
    const clients = [
        {
            img: propic1,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, similique autem sapiente suscipit mollitia porro quia nesciunt soluta. Commodi, doloremque! Deserunt natus illum dolorem inventore nemo, velit sequi harum quia!",
        },
        {
            img: propic2,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, similique autem sapiente suscipit mollitia porro quia nesciunt soluta. Commodi, doloremque! Deserunt natus illum dolorem inventore nemo, velit sequi harum quia!",
        },
        {
            img: propic3,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, similique autem sapiente suscipit mollitia porro quia nesciunt soluta. Commodi, doloremque! Deserunt natus illum dolorem inventore nemo, velit sequi harum quia!",
        },
        {
            img: propic4,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, similique autem sapiente suscipit mollitia porro quia nesciunt soluta. Commodi, doloremque! Deserunt natus illum dolorem inventore nemo, velit sequi harum quia!",
        }
    ]

    return (
        <div className='t-wrapper'>
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional work</span>
                <span>From me...</span>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper> 
        </div>
    );
};

export default Testimonial;