import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Cart = () => {

    const loadProduct = useLoaderData()
    console.log(loadProduct)
    const { user } = useContext(AuthContext)
    console.log(user.email)
    const filterItems = loadProduct.filter(product => product.userEmail == user.email)
    console.log(filterItems)
    return (
        <div>
            <h2 className="text-4xl my-5 text-center font-bold">Welcome in your cart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-5">
            {   filterItems.length > 0 ?
                filterItems.map(item =>
                    <div key={item._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src={item.product.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.product.name}</h2>
                                <p>Brand: {item.product.brand}</p>
                                <p>Type: {item.product.type}</p>
                                <p className="text-lg font-bold text-amber-700">Price: $ {item.product.price}</p>
                                <div className="card-actions justify-between">
                                    <button className="btn btn-secondary">Buy Now</button>
                                    <button className="btn btn-error">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>) :
                    <div>
                        <h2>You have not Add any product yet. please add product.</h2>
                    </div>
            }
            </div>
        </div>
    );
};

export default Cart;