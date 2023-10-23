import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {

    const product = useLoaderData()
    const navigate = useNavigate()
    
    
    

    const handleForm = e => {
        e.preventDefault()



        const form = e.target
        const name = form.name.value 
        const type = form.type.value 
        const brand = form.brand.value
        const price = form.price.value 
        const rating = form.rating.value
        const description = form.description.value 
        const photo = form.photo.value
        
        

        const newProduct = {name, type, brand, price, rating, description, photo}
        

        fetch(`http://localhost:5000/products/${product._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Update Successfully')
                navigate(`/details/${product._id}`)
            }
        })
       
        
        
    }
    return (
        <div>
            <div className="flex justify-center">

                <form onSubmit={handleForm} className="bg-amber-200 md:p-10 lg:w-3/4 p-5 my-10 rounded-lg">
                    <h2 className="text-3xl font-bold  text-black">Update Product</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={product.name} placeholder="Enter product name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Type </span>
                            </label>
                            <input type="text" name="type" defaultValue={product.type} placeholder="Enter product type" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Brand Name</span>
                            </label>
                            <select defaultValue={product.brand} name="brand" className="select select-bordered w-full max-w-xs" required>
                                <option>Apple</option>
                                <option>Samsung</option>
                                <option>Sony</option>
                                <option>Google</option>
                                <option>Intel</option>
                                <option>Xiaomi</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Price</span>
                            </label>
                            <input type="number" name="price" defaultValue={product.price} placeholder="Enter product price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Ratting</span>
                            </label>
                            <input type="number" min='0' max='5' name="rating" defaultValue={product.rating} placeholder="Enter product rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Description</span>
                            </label>
                            <input type="text" name="description" defaultValue={product.description} placeholder="Enter short description" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo URL" defaultValue={product.photo} className="input input-bordered" required />
                    </div>
                    <input className="btn btn-primary w-full mt-4 border-[#331A15]" type="submit" value="Update Product" />
                </form>
            </div>
        </div>
    );
};

export default Update;
