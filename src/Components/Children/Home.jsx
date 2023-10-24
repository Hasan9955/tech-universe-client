import { Link, useLoaderData } from "react-router-dom";
import Slider from "../../Route Manage/Slider";
import About from "./About";

const Home = () => {


    const brandCards = useLoaderData()


    return (
        <div>
            
            <Slider></Slider>
            <h2 className="mt-10 text-3xl md:text-5xl text-center font-bold text-amber-600">TECH UNIVERSE</h2>
            <h2 className="text-2xl md:text-3xl text-center  font-extrabold ">Explore Our Awesome Brands</h2>
            <div className="grid grid-cols-2 md:px-20 p-5 md:grid-cols-3 gap-5 my-10">

                {
                    brandCards.map(card =>
                        <Link  key={card._id} to={`/products/${card.brandName}`}>
                            <div>
                                <div className="card bg-white shadow-xl">
                                    <figure><img className="grow" src={card.image} alt="Brand" /></figure>
                                    <hr/>
                                    <hr />
                                    <div className="py-3">
                                        <h2 className="text-center text-black text-xl md:text-2xl lg:text-3xl font-bold">{card.brandName}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
            <About></About>
        </div>
    );
};

export default Home;