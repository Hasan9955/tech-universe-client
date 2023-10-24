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



            <div className="flex flex-col justify-center items-center p-3">
                <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold text-amber-600 ">Reed Our Tech Blogs</h2>
                <p className="text-lg md:text-2xl font-bold text-center mt-2">Explore our latest blogs and stay updated with the latest  <br /> tech trends and insights right here on our website.</p>




                <div className="grid md:grid-cols-2 gap-5 mt-10">
                    <div className="p-5 shadow-xl rounded-xl lg:w-96 ">
                        <img  className="rounded-xl " src="https://i.ibb.co/VtSXXHT/Untitle.png" alt="" />
                        <hr />
                        <div className="mt-2 p-2">
                            <div className="md:flex justify-between mb-2"><p  className="text-xl font-bold">Lenovo Legion 7</p><p>2023-08-30</p></div>
                            <h2>Lenovo</h2>
                            <p className="mt-2 text-sm max-w-sm">The Lenovo Legion 7 packs high-end gaming components into a sleek chassis, delivering top-notch gaming performance. </p>
                            <Link to='/blog/653802ee62716335bb904380'>
                            <button className="btn btn-primary btn-sm mt-2">Reed more</button>
                            </Link>
                        </div>
                    </div>



                    <div className="p-5 shadow-xl rounded-xl lg:w-96">
                        <img  className="rounded-xl " src="https://i.ibb.co/9TjdD6B/Untitled3.png" alt="" />
                        <hr />
                        <div className="mt-2 p-2">
                            <div className="md:flex justify-between mb-2"><p  className="text-xl font-bold">Microsoft Pro 8</p><p>2023-09-30</p></div>
                            <h2>Microsoft</h2>
                            <p className="mt-2 text-sm max-w-sm">Microsoft Surface Pro 8 powered by Intel Core i7 with storage 256GB and above built on the Intel Evo platform.</p>
                            <Link to='/blog/653802ee62716335bb90437c'>
                            <button className="btn btn-primary btn-sm mt-2">Reed more</button>
                            </Link>
                        </div>
                    </div>



                    <div className="p-5 shadow-xl rounded-xl lg:w-96">
                        <img  className="rounded-xl " src="https://i.ibb.co/DwLw1Wr/Untitled.png" alt="" />
                        <hr />
                        <div className="mt-2 p-2">
                            <div className="md:flex justify-between mb-2"><p  className="text-xl font-bold">Google Pixel 7</p><p>2023-09-12</p></div>
                            <h2>Google</h2>
                            <p className="mt-2 text-sm max-w-sm">The Google Pixel 7 comes with a 6.3-inch OLED display with an FHD+ resolution with a 20:9 aspect ratio and a pixel density of around 416 ppi.</p>
                            <Link to='/blog/653802ee62716335bb90437f'>
                            <button className="btn btn-primary btn-sm mt-2">Reed more</button>
                            </Link>
                        </div>
                    </div>




                    <div className="p-5 shadow-xl rounded-xl lg:w-96">
                        <img  className="rounded-xl " src="https://i.ibb.co/swBhv8m/Untitle.png" alt="" />
                        <hr />
                        <div className="mt-2 p-2">
                            <div className="md:flex justify-between mb-2"><p  className="text-xl font-bold">Galaxy Watch 5</p><p>2023-10-18</p></div>
                            <h2>Samsung</h2>
                            <p className="mt-2 text-sm max-w-sm">The Samsung Galaxy Watch 5 tracks your health and fitness, offers impressive battery life, and has a stylish design.</p>
                            <Link to='/blog/653802ee62716335bb90437a'>
                            <button className="btn btn-primary btn-sm mt-2">Reed more</button>
                            </Link>
                        </div>
                    </div>
                    
                   
                </div>
                <Link to='/blog'>
                <button className="btn btn-primary mt-10">All Blogs</button>
                </Link>
            </div>
            <About></About>
        </div>
    );
};

export default Home;