import { Link } from "react-router-dom";
import Navbar from "../Root/Navbar";
import Footer from "../Root/Footer";

const Error = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center mb-2">
                <div className="relative">
                    <img className="rounded-xl" src="https://i.ibb.co/vHQwzQ6/404-page.png" alt="" />
                    <Link to='/'><button className="btn btn-warning w-full  absolute -mt-8 rounded-b-xl rounded-none md:-mt-12 btn-sm md:btn-md">Go Home</button></Link>

                </div>
            </div>
            <Footer></Footer>

        </>

    );
};

export default Error;