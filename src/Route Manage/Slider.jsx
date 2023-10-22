import { useEffect, useState } from "react";

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
        {
            photo &&  <div className="md:px-10 p-2 md:py-10 ">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={photo[0].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={photo[1].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={photo[2].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Wt5xTTH/banner-6.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
        }
       </div>
    );
};

export default Slider;