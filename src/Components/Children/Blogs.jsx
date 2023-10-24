import { Link, useLoaderData } from "react-router-dom";

const Blogs = () => {

    const blogData = useLoaderData()
    console.log(blogData)
    return (
        <div>
            {
                blogData && 
                <div>
                    {
                        blogData.map(blog => 
                            <div key={blog._id} className="bg-white shadow-xl rounded-xl mt-10 text-black m-2 md:m-5">
            <img className="rounded-t-xl" src={blog.image} alt="" />
            <div className="py-5 p-2 md:p-5">
                <h3 className="flex gap-5 items-center"><p>{blog.type}</p><p>|</p><p>{blog.date}</p></h3>
                <h2 className="text-2xl md:text-3xl font-bold my-2">{blog.title}</h2>
                <p>
                    {
                    blog.details.length > 300 ? 
                    <p>{blog.details.slice(0, 300)}<Link to={`/blog/${blog._id}`}><span className="text-blue-600 font-bold ml-2">see more...</span></Link></p> : <p>{blog.details}</p>
                    }
                    </p>
                <Link to={`/blog/${blog._id}`}>
                <button className="btn btn-primary mt-4">Read More </button>
                </Link>
            </div>
        </div>)
                    }
                </div>
                
            }
        </div>
    );
};

export default Blogs;