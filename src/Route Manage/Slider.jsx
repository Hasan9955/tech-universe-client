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
            delay: 5000,
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
                       
                        
                        <SwiperSlide ><img className='w-full' src="https://i.ibb.co/VvGbkmz/gaming-laptop.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-full' src="https://i.ibb.co/TLKwXGw/homeslider.png" alt="" /></SwiperSlide>
                        
                        <SwiperSlide><img className='w-full' src="https://i.ibb.co/k0c2xcT/Untitled-2.png" alt="" /></SwiperSlide>

                        <SwiperSlide><img className='w-full' src="https://i.ibb.co/F5xfKk3/Un-slide.png" alt="" /></SwiperSlide>
                    </div>
                    }
      </Swiper>



                    


       </div>
    );
};

export default Slider;