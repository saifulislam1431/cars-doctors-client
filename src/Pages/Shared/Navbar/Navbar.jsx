import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import logo from "../../../assets/images/logo.svg"
const Navbar = () => {
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
                            <img src={logo} alt="" className='w-[68px] md:w-20'/>
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