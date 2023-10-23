import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';




const ProductSlider = () => {


    const [slides, setSlides] = useState(null)

    useEffect(() => {
        const loadSlide = async () => {
            const response = await fetch('http://localhost:5000/productSlider')
            const data = await response.json()
            setSlides(data)
        }
        
        loadSlide()
    }, [])
    
    

    return (
        <div>
            <Swiper slidesPerView={1}
                spaceBetween={30}
                keyboard ={{
                    enabled: true,
                  }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[ Pagination, Navigation, Keyboard]}
                className="mySwiper"
            >
                {
                    slides &&  
                    <div>
                       
                        <SwiperSlide><img className='w-full' src={slides[0].image} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-full' src={slides[1].image} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-full' src={slides[2].image} alt="" /></SwiperSlide>
                    </div>
                   
                }
                
            </Swiper>
            
        </div>
    );
};

export default ProductSlider;