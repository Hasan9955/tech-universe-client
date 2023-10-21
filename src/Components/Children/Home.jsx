import { Link, useLoaderData } from "react-router-dom";
import Slider from "../../Route Manage/Slider";

const Home = () => {


    const brandCards = useLoaderData()

    
    return (
        <div>

            <Slider></Slider>
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