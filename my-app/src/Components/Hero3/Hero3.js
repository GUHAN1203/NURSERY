import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Hero3.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Hero3() {
  return (
    <>
    
    <div className='home-products'>
        <h1>PRODUCTS</h1>
    </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{
          delay:1500, // Delay between slides (3 seconds)
          disableOnInteraction: false, // Keeps autoplay after interaction          
          pauseOnMouseEnter: true, // Pause autoplay when hovering over the swiper
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 5,
          stretch: -30,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='card-container'>
            <a  href='product'>
            <img src="https://images.unsplash.com/photo-1538998073820-4dfa76300194?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='card-img' alt='img' />
            </a>
            <a href='product' className='card-btn'> FLOWERS</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card-container'>
        <img src="https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='card-img'/>
            <a href='consulting' className='card-btn'> INDOOR PLANTS</a>
            </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className='card-container'>
        <img src="https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='card-img'/>
            <a href='consulting' className='card-btn'> LANDSCAPING</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card-container'>
        <img src="https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='card-img'/>
            <a href='consulting' className='card-btn'> TREES</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card-container'>
        <img src="https://plus.unsplash.com/premium_photo-1674986175088-2d7dda41f7f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" className='card-img'/>
            <a href='consulting' className='card-btn'> OUTDOOR PLANTS</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card-container'>
        <img src="https://images.unsplash.com/photo-1538998073820-4dfa76300194?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='card-img'/>
            <a href='consulting' className='card-btn'> FRUIT PLANTS</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card-container'>
        <img src="https://images.unsplash.com/photo-1495975295218-a59edae1540a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxmbG93ZXJzfGVufDB8MXwwfHx8MA%3D%3D" className='card-img'/>
            <a href='consulting' className='card-btn'> FERTILIZER </a>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
