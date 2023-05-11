import React from 'react';
import errorImg from "../../assets/images/404/212-2123376_erreur-404-png-error-404.jpeg"
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-100px)]'>
            <div>
                <img src={errorImg} alt="" className='w-full rounded-2xl'/>
                <div className='text-center mt-5'>
                <Link to ="/">
                    <button className='mySecBtn inline-flex items-center gap-2'><FaArrowLeft /> Back Home</button>
                </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;