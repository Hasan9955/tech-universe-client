import { Link, useLoaderData } from "react-router-dom";

const Home = () => {


    const brandCards = useLoaderData()

    
    return (
        <div>

            <div className="md:px-10 p-2 md:py-10 ">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/3S4XbYF/7995902.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/FJgPgWq/banner-4.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Q9MWL85/banner-5.jpg" className="w-full" />
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
            <h2 className="text-5xl text-center font-bold text-amber-600">TECH UNIVERSE</h2>
            <h2 className="text-3xl md:text-5xl text-black text-center  font-extrabold ">Explore Our Awesome Brands</h2>
            <div className="grid grid-cols-1 p-2 md:grid-cols-3 gap-5 my-10">

                {
                    brandCards.map(card =>
                        <Link key={card._id} to={`/products/${card.brandName}`}>
                            <div>
                                <div className="card bg-base-100 shadow-xl">
                                    <figure><img className="grow" src={card.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="text-center text-3xl font-bold">{card.brandName}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Home;