import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Cart = () => {
    const [mainItems, setMainItems] = useState(null)

    
    const loadProduct = useLoaderData()
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const filterItems = loadProduct.filter(product => product.userEmail == user.email)

        setMainItems(filterItems)
    },[loadProduct, user.email])






    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.acknowledged){
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = mainItems.filter(data => data._id !== id)
                            setMainItems(remaining)
                        }
                    })
                
            }
        })

    }
    return (
        <div>

            {
                mainItems && 
                <div>
                {mainItems.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-5">
                        {
                            mainItems.map(item =>
                                <div key={item._id}>
                                    <div className="card bg-base-100 shadow-xl">
                                        <figure><img src={item.product.photo} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{item.product.name}</h2>
                                            <p>Brand: {item.product.brand}</p>
                                            <p>Type: {item.product.type}</p>
                                            <p className="text-lg font-bold text-amber-700">Price: $ {item.product.price}</p>
                                            <div className="card-actions justify-between">
                                                <button onClick={() => toast('This feature will be coming soon.')} className="btn btn-secondary">Buy Now</button>
                                                <button onClick={() => handleDelete(item._id)} className="btn btn-error">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div> :
                    <div className="flex flex-col text-center justify-center  items-center mb-20 p-2">
                        <img className="w-1/2" src="https://i.ibb.co/j6MBkVs/image.webp" alt="" />
                        <h2 className="text-4xl text-amber-800 mb-5">Your cart is currently empty.</h2>
                        <p className="text-lg max-w-md"> Feel free to browse our products and add items to your cart whenever you are ready to make a purchase. If you have any questions or need assistance, please do not hesitate to reach out.
                        </p>
                        <span className="text-4xl text-blue-400 mb-5">Happy shopping!</span>
                        <Link to='/'>
                            <button className="btn rounded-full btn-primary">Go Home</button>
                        </Link>
                    </div>
                }
            </div>
            }
        </div>
    );
};

export default Cart;