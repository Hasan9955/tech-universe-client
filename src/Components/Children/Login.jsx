import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { signIn, googleSign } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState(null)
    

    const handleGoogleSign = () => {
        googleSign()
        .then(() => {
            toast.success('Login Successfully')
            
            navigate(location.state)
        })
        .catch(error => {
            console.error(error)
        })
    }
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const password = form.password.value  
        setError('')

        signIn(email, password)
        .then(() => {
            toast.success('Login Successfully')
            navigate(location.state)

        })
        .catch(error => setError(error))
    }
    return (
        <div className=" ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {
                        error && <div><p className="text-red-500 justify-center flex mt-3">Email or password invalid !!!</p></div>
                    }
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="mx-auto mb-5">
                        <p className="text-lg justify-center flex items-center gap-4">Login with: <button onClick={handleGoogleSign} className="btn text-2xl"><FcGoogle></FcGoogle></button></p>
                        <p >Do not have an account? <Link className="font-extrabold text-blue-600" to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;