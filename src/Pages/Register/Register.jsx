import React, { useContext, useState } from 'react';
import login from "../../assets/images/login/login.svg";
import icon1 from "../../assets/icons/facebook.png";
import icon2 from "../../assets/icons/linkedin.png";
import icon3 from "../../assets/icons/google.png";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Provider/Auth/Auth';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const { signUp,
        googleIn,
        facebookIn } = useContext(UserContext);


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            return setError("Your password should be minimum six in length")
        }

        signUp(email, password)
            .then(res => {
                const loggedUser = res.user;
                navigate(from, { replace: true });
                toast.success('Registration Successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setError("")
                form.reset();
                updateProfile(loggedUser, {
                    displayName: name
                }).then(() => console.log("Update")).catch((error) => console.log(error.message))
                console.log(loggedUser);
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })

    }

    const handleGoogleIn= ()=>{
        googleIn()
        .then(res => {
            const loggedUser = res.user;
            navigate(from, { replace: true });
            toast.success('Registration Successful!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setError("")

        })
        .catch((error) => {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
    }    

    const handleFacebookIn= ()=>{
        facebookIn()
        .then(res => {
            const loggedUser = res.user;
            navigate(from, { replace: true });
            toast.success('Login Successful!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setError("")

        })
        .catch((error) => {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
    } 
    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:mr-10">
                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100">
                        <h1 className='text-center pt-5 text-2xl font-bold'>Register</h1>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name"
                                        name='name' className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email"
                                        name='email' className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                        name='password'
                                        className="input input-bordered" />

                                </div>
                                <input type="submit" value="Sign Up" className="btn btn-primary form-control mt-6 w-full" />

                            </form>
                            <hr className='border-1 border-primary mt-2' />
                            <div className='text-center items-center mt-3'>
                                <p className='font-medium'>or Sign in with</p>
                                <div className='my-3 space-x-3'>
                                    <button onClick={handleFacebookIn}>
                                        <img src={icon1} alt="" className='w-8' />
                                    </button>
                                    <button>
                                        <img src={icon2} alt="" className='w-8' />
                                    </button>
                                    <button onClick={handleGoogleIn}>
                                        <img src={icon3} alt="" className='w-8' />
                                    </button>
                                </div>
                                <p>Have an account? <Link to="/login" className='text-primary font-semibold'>Sign In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;