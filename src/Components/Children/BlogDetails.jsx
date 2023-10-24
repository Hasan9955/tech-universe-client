import { Link, useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const loadData = useLoaderData()
    console.log(loadData)
    return (
        <div>
            {
                loadData && 
                <div className="bg-white shadow-xl rounded-xl mt-10 text-black m-2 md:m-5">
            <img className="rounded-t-xl" src={loadData.image} alt="" />
            <div className="py-5 p-2 md:p-5">
                <h3 className="flex gap-5 items-center"><p>{loadData.type}</p><p>|</p><p>{loadData.date}</p></h3>
                <h2 className="text-2xl md:text-3xl font-bold my-2">{loadData.title}</h2>
                <p>{loadData.details}</p>
                
                <Link to='/blog'>
                <button className="btn btn-primary mt-4 w-full">Go Back</button>
                </Link>
                
            </div>
        </div>
            }
        </div>
    );
};

export default BlogDetails;