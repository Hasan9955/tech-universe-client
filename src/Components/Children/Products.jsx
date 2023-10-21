import { Rating } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";
import ProductSlider from "./ProductSlider";

const Products = () => {
    const loadProducts = useLoaderData()
    
    
    
    
    return (
        <div>
            <ProductSlider></ProductSlider>
            
            {
                loadProducts.length > 0 ?
                <div>
                    <h2 className="text-center text-4xl font-bold text-amber-600">Welcome In {loadProducts[0].brand} Shop</h2>
                    <div className="grid p-3 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            loadProducts.map(product =>
                                <div key={product._id}>
                                    <div className="card bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={product.photo} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{product.name}</h2>
                                            <p>Brand: {product.brand}</p>
                                            <p>Type: {product.type}</p>
                                            <p className="text-amber-600 text-xl">Price: $ {product.price}</p>
                                            <Rating value={parseInt(product.rating)} />
                                            <div className="card-actions">
                                                <Link to={`/details/${product._id}`}><button className="btn btn-primary">Details</button></Link>
                                                <Link to={`/update/${product._id}`}><button className="btn btn-primary">Update</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div> :
                    <div className="text-center my-48 md:my-56">
                        <h1 className="text-5xl">Sorry !!!</h1>
                        <h2 className="text-3xl font-bold">This brand currently has no products available for display.</h2>
                    </div>
            }
        </div>
    );
};

export default Products;