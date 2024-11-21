import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate password update logic (replace with actual implementation)
        if (email && password) {
            // Assuming there's a function like updatePassword(email, newPassword)
            // Call it here and handle success/failure
            setSuccess("Password updated successfully! You can now log in.");
            setTimeout(() => navigate('/auth/login'), 2000); // Redirect to login page after 2 seconds
        } else {
            setError("Please fill out all fields.");
        }
    };

    return (
        <div className="hero bg-base-200 h-[600px] w-8/12 mx-auto rounded-3xl">
            <div className="hero-content flex-col">
                <h1 className="text-3xl font-bold">Reset Your Password</h1>
                <p className="text-gray-600 mb-4">Enter your email and new password to reset your credentials.</p>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">New Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter new password"
                                className="input input-bordered"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        {success && <p className="text-green-500 text-sm">{success}</p>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
