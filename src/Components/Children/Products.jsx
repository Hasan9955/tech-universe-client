import { Rating } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";
import ProductSlider from "./ProductSlider";

const Products = () => {
    const loadProducts = useLoaderData()
    
    
    
    const handleWindow = () => window.scrollTo(10, 10)
    return (
        <div>
            
            
            {
                loadProducts.length > 0 ?
                <div>
                    <ProductSlider></ProductSlider>
                    <h3 className="text-center text-3xl md:text-4xl lg:text-5xl mt-10 text-amber-600 font-bold">{loadProducts[0].brand}</h3>
                    <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-pink-600">Welcome to the immersive universe of the {loadProducts[0].brand} Brand !!!</h2>
                    <div className="grid p-3 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            loadProducts.map(product =>
                                <div key={product._id}>
                                    <div className="card bg-white shadow-xl">
                                        <figure className="px-5 mt-2">
                                            <img src={product.photo} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center text-black">
                                            <h2 className="card-title grow">{product.name}</h2>
                                            <p>Brand: {product.brand}</p>
                                            <p>Type: {product.type}</p>
                                            <p className="text-amber-600 text-xl">Price: $ {product.price}</p>
                                            <Rating value={parseInt(product.rating)} />
                                            <div className="card-actions">
                                                <Link to={`/details/${product._id}`}><button onClick={handleWindow} className="btn btn-primary">Details</button></Link>
                                                <Link to={`/update/${product._id}`}><button onClick={handleWindow} className="btn btn-primary">Update</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div> :
                    <div className="text-center mb-36 flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co/BnMb4PR/no-product-found-1.png" alt="" />
                        <h1 className="text-3xl md:text-4xl lg:text-5xl">Sorry !!!</h1>
                        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">This brand currently has no products available for display.</h2>
                        <Link to='/'><button onClick={handleWindow} className="btn btn-primary rounded-full mt-2">Go Home</button></Link>
                    </div>
            }
        </div>
    );
};

export default Products;