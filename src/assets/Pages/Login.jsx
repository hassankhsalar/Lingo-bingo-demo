import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const {userLogin, setUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});

        userLogin(email,password)
        .then(result=>{
            const user = result.user;
            setUser(user);
        })
        .catch((error) => {
           alert(error.code);
          });
    };

    return (
        <div className="hero bg-base-200 h-[600px] w-8/12 mx-auto rounded-3xl">
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
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center font-semibold'>Dont have an account? <Link className='text-pink-600' to="/auth/register">Register Now</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;