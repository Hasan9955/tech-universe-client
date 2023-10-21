import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
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
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    slides && slides.map(sli => 
                    <div  key={sli._id}>
                       
                        <SwiperSlide><img className='w-full' src={sli.image} alt="" /></SwiperSlide>
                    </div>
                   )
                }
                
            </Swiper>
            this is update
        </div>
    );
};

export default ProductSlider;