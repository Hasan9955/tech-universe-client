import { useLoaderData } from "react-router-dom";

const Products = () => {
    const  loadProducts = useLoaderData()
    console.log(loadProducts)
    return (
        <div>
            <h2>we have {loadProducts.length} to show you under this brand</h2>
            {
                loadProducts.length > 0 ?
                <div>
                    we have product
                </div> :
                <div>
                    sorry you have not any product
                </div>
            }
        </div>
    );
};

export default Products;