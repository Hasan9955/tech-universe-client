import { Rating } from "@material-tailwind/react";
import { useContext } from "react";
import { useLoaderData} from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";

const Details = () => {

    const product = useLoaderData()
    const { user } = useContext(AuthContext)
    const userEmail = user.email

    const cartProduct = { product, userEmail }
    const handleCart = () => {
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product added successfully')
                    
                }
            })
    }

    return (
        <div className="card p-5 bg-white shadow-xl  my-10 text-black">
            <div className="flex gap-5 flex-col md:flex-row md:items-center">
                <figure><img className="w-full" src={product.photo} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="card-title">{product.name}</h2>
                    <h2 className=" ">Brand: {product.brand}</h2>
                    <h2 className=" ">Type: {product.type}</h2>
                    <h2 className="text-xl text-pink-600 ">Price: $ {product.price}</h2>
                    <Rating value={parseInt(product.rating)}></Rating>
                </div>
            </div>
            <p className="mt-4">{product.description}</p>
            <div className="card-actions justify-end">
                <button onClick={handleCart} className="btn btn-primary mt-5">Add Cart</button>
            </div>
        </div>
    );
};

export default Details;