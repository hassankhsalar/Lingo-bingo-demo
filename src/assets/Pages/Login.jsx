import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError({ ...error, login: err.code });
            });
    };

    return (
        <div className="hero bg-base-200 h-[800px] w-8/12 mx-auto rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            {error.login && (
                                <label className="label text-sm text-red-500">
                                    {error.login}
                                </label>
                            )}
                            <label className="label">
                                <Link to="/auth/forgotpassword" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold">
                        Don't have an account? <Link className="text-pink-600" to="/auth/register">Register Now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
