import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        let validationErrors = {};

        
        const nameRegex = /^[a-zA-Z ]{2,}$/;
        if (!nameRegex.test(name)) {
            validationErrors.name = "Name must have at least 2 characters and contain only letters.";
        }

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            validationErrors.email = "Invalid email format.";
        }

        
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            validationErrors.password =
                "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character.";
        }

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({displayName:name , photoURL:photo})
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
            });
    };

    return (
        <div className="hero bg-base-200 h-[600px] w-8/12 mx-auto rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                            {error.name && (
                                <label className="label text-xs text-rose-500">{error.name}</label>
                            )}
                        </div>

                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                name="photo"
                                type="text"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                required
                            />
                        </div>

                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                            {error.email && (
                                <label className="label text-xs text-rose-500">{error.email}</label>
                            )}
                        </div>

                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                            {error.password && (
                                <label className="label text-xs text-rose-500">{error.password}</label>
                            )}
                            <label className="label">
                                <p className="text-center font-semibold">
                                    Already have an Account?{' '}
                                    <Link className="text-pink-600" to="/auth/login">
                                        Login
                                    </Link>
                                </p>
                            </label>
                        </div>

                      
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
