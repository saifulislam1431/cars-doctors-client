import React from 'react';
import login from "../../assets/images/login/login.svg";
import { Link } from 'react-router-dom';
import icon1 from "../../assets/icons/facebook.png";
import icon2 from "../../assets/icons/linkedin.png";
import icon3 from "../../assets/icons/google.png";

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        
    }

    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:mr-10">
                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100">
                        <h1 className='text-center pt-5 text-2xl font-bold'>Login</h1>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" 
                                    name='email'
                                    placeholder="email" 
                                    className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" 
                                    name='password'
                                    className="input input-bordered" />

                                </div>
                                <input type="submit" value="Sign In" className="btn btn-primary form-control mt-6 w-full" />

                            </form>
                            <label className="label">
                                <span className="label-text-alt link link-hover">Forgot password?</span>
                            </label>
                            <hr className='border-1 border-primary mt-2'/>
                            <div className='text-center items-center mt-3'>
                                <p className='font-medium'>or Sign in with</p>
                                <div className='my-3 space-x-3'>
                                    <button>
                                        <img src={icon1} alt=""className='w-8' />
                                    </button>
                                    <button>
                                        <img src={icon2} alt=""className='w-8' />
                                    </button>
                                    <button>
                                        <img src={icon3} alt=""className='w-8' />
                                    </button>
                                </div>
                                <p>New to Car Doctor? <Link to="/register" className='text-primary font-semibold'>Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;