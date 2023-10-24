import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { IoReaderOutline } from 'react-icons/io5';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { GiSelfLove } from 'react-icons/gi';
import { MdAddLocationAlt, MdOutlineAccountCircle } from 'react-icons/md';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyAccount = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
        .then(() => {
            toast.error('Now you have logOut')
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            {
                user &&
                <div className="flex md:flex-row flex-col items-center my-10 gap-5">
                    <img className="w-36 rounded-full shadow-xl border-2" src={user.photoURL} alt="" />
                    <div className="flex justify-center flex-col">
                        <h2 className="text-2xl font-bold">Hello, {user.displayName}</h2>
                        <p className="">{user.email}</p>
                        <button onClick={() => toast('This feature will be coming soon!!!')} className="btn btn-sm mt-4">Update Profile</button>
                    </div>
                </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 p-4">
               <div className="border p-5 flex flex-col gap-2 justify-center items-center shadow-2xl rounded-xl ">
                    <p className="text-5xl"><IoReaderOutline></IoReaderOutline></p>
                    <hr />
                    <h2 className="text-2xl font-bold">Orders</h2>
                </div>
                <Link to='/cart'><div className="border p-5 flex flex-col gap-2 justify-center items-center shadow-2xl rounded-xl ">
                    <p className="text-5xl"><BsFillCartCheckFill></BsFillCartCheckFill></p>
                    <hr />
                    <h2 className="text-2xl font-bold">My Cart</h2>
                </div></Link>
                <div className="border p-5 flex flex-col gap-2 justify-center items-center shadow-2xl rounded-xl ">
                    <p className="text-5xl"><MdAddLocationAlt></MdAddLocationAlt></p>
                    <hr />
                    <h2 className="text-2xl font-bold">Address</h2>
                </div>
                <div className="border p-5 flex flex-col gap-2 justify-center items-center shadow-2xl rounded-xl ">
                    <p className="text-5xl"><MdOutlineAccountCircle></MdOutlineAccountCircle></p>
                    <hr />
                    <h2 className="text-2xl font-bold">Account Details</h2>
                </div>
                <div className="border p-5 flex flex-col gap-2 justify-center items-center shadow-2xl rounded-xl ">
                    <p className="text-5xl"><GiSelfLove></GiSelfLove></p>
                    <hr />
                    <h2 className="text-2xl font-bold">Wishlist</h2>
                </div>
                <div onClick={handleLogout} className="cursor-pointer border p-5 flex flex-col gap-2 justify-center items-center shadow-2xl rounded-xl ">
                    <p className="text-5xl"><BiLogOut></BiLogOut></p>
                    <hr />
                    <h2 className="text-2xl font-bold">Log out</h2>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;