import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {

    const [photo, setPhoto] = useState(null)


    useEffect (() => {
        fetch('http://localhost:5000/productSlider')
        .then(res => res.json())
        .then(data => setPhoto(data))
    },[])
    


    /* 
    
    3 sliders 

    "https://i.ibb.co/3S4XbYF/7995902.jpg"
    "https://i.ibb.co/FJgPgWq/banner-4.jpg"
    "https://i.ibb.co/Q9MWL85/banner-5.jpg"
     */
    return (
       <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            photo && 
            <div>
                       
                        
                        <SwiperSlide><img className='w-full' src="https://i.ibb.co/VvGbkmz/gaming-laptop.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-full' src="https://i.ibb.co/TLKwXGw/homeslider.png" alt="" /></SwiperSlide>
                        
                        <SwiperSlide><img className='w-full' src="https://i.ibb.co/k0c2xcT/Untitled-2.png" alt="" /></SwiperSlide>

                        <SwiperSlide><img className='w-full' src="https://i.ibb.co/fNJfX9F/home-slider.png" alt="" /></SwiperSlide>
                    </div>
                    }
      </Swiper>


















        {/* {
            photo &&  <div className="md:px-10 p-2 md:py-10 ">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={photo[3]?.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={photo[4]?.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={photo[5]?.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={photo[6]?.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
        } */}
       </div>
    );
};

export default Slider;