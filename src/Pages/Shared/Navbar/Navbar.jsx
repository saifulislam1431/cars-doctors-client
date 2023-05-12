import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingBag, FaSearch, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import logo from "../../../assets/images/logo.svg"
import { UserContext } from '../../../Provider/Auth/Auth';
import { toast } from 'react-toastify';
const Navbar = () => {
    const { user, logOut } = useContext(UserContext);
    const handleOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Successful!', {
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
    const navItems = <>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")} >Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "default")} >About</NavLink>
        </li>
        <li>
            <NavLink to="/service" className={({ isActive }) => (isActive ? "active" : "default")} >Service</NavLink>
        </li>
        <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "default")} >Blog</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "default")} >Contact</NavLink>
        </li>
        <li>
            {
                user ? 
                    <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "default")}  onClick={handleOut}><span>Log Out</span> <FaSignOutAlt className='text-primary' /></NavLink>
              
                    :
                    <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "default")} ><span>Login</span> <FaSignInAlt className='text-primary' /></NavLink>
            }
        </li>
    </>
    return (
        <main>
            <section>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <Link to="/">
                            <img src={logo} alt="" className='w-[68px] md:w-20' />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='inline-flex gap-2 mr-3'>
                            <Link to="/">
                                <FaShoppingBag className='w-5 h-4' />
                            </Link>
                            <Link to="/">
                                <FaSearch className='w-5 h-4' />
                            </Link>
                        </div>
                        <Link to="/appointment">
                            <button className='myBtn'>
                                Appointment
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Navbar;