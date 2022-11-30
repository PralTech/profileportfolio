import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import ishu from '../Images/ishu.png'
import ishanvi from '../Images/ishanvi.jpg'


const Portfolio = () => {
  return (
    <div className='portfolio'>
        <span>Client`s Images</span>
        <span>Portfolio</span>

        {/* swiper  */}
        <Swiper 
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        >
       
            <SwiperSlide>
                <img src={ishu} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={ishanvi} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={ishu} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={ishanvi} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio