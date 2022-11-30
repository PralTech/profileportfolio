import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import ishu from '../Images/ishu.png'
import ishanvi from '../Images/ishanvi.jpg'

const Testimonials = () => {
    const clients = [
        {
            img: ishu,
            review:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus neque dolorem illum consectetur saepe molestiae, dolor animi eaque, autem beatae necessitatibus suscipit vel veniam, tenetur."
        },
        {
            img: ishanvi,
            review:
                "Lorem ipsum dolor sit amet consectetur, Voluptatibus neque dolorem illum consectetur saepe molestiae, dolor animi eaque, autem beatae necessitatibus suscipit vel veniam, facilis tempore alias porro odit tenetur."
        },
        {
            img: ishu,
            review:
                "Lorem ipsum dolor sit amet consectetur, Voluptatibus neque dolorem illum consectetur saepe molestiae, dolor animi eaque, autem beatae necessitatibus suscipit vel veniam, facilis tempore alias porro odit tenetur."
        },
        {
            img: ishanvi,
            review:
                "Lorem ipsum dolor sit amet consectetur, Voluptatibus neque dolorem illum consectetur saepe molestiae, dolor animi eaque, autem beatae necessitatibus suscipit vel veniam, facilis tempore alias porro odit tenetur."
        },
        {
            img: ishanvi,
            review:
                "Lorem ipsum dolor sit amet consectetur, Voluptatibus neque dolorem illum consectetur saepe molestiae, dolor animi eaque, autem beatae necessitatibus suscipit vel veniam, facilis tempore alias porro odit tenetur."
        },
    ]
    return (
        <div className='t-wrapper'>
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional work </span>
                <span>from me...</span>
            </div>
            {/* slider  */}
            <Swiper
                modules={{ Pagination }}
                slidesPerView={1}
                Pagination={{ clickable: true }}
            >

                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial" >
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>

        </div>
    )
}

export default Testimonials
