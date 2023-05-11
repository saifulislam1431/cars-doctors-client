import React from 'react';
import serviceImg from "../../assets/images/checkout/checkout.png";
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();

    const handleCheckOut = e => {
        e.preventDefault();
    }
    return (
        <section className='my-10 flex items-center justify-center'>
            <div>
                <div className='relative w-full mb-5'>
                    <img src={serviceImg} alt="" />
                    <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  h-full w-full rounded-xl items-center top-0">
                        <div className='space-y-6 pl-10 lg:w-2/4'>

                            <h1 className='text-xl md:text-3xl font-bold text-white'>Check Out</h1>

                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-center text-2xl font-bold text-primary'>{service.title}</h1>
                    <form className='w-full space-y-7 mt-16' onSubmit={handleCheckOut}>
                        {/* Name  */}
                        <div className='md:flex gap-4'>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='firstName' placeholder="First Name" className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='lastName' placeholder="Last Name" className="w-full inputField" />
                            </div>
                        </div>
                        {/* Phone & email */}
                        <div className='md:flex gap-4 mt-2'>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='phone' placeholder="Your Phone" className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='email' placeholder="Your email" className="w-full inputField" />
                            </div>
                        </div>


                        {/* Photo url */}
                        <div className='mt-2'>
                            <div>
                                <textarea
                                    rows={8}
                                    name=',massage' placeholder="Your Massage" className="w-full inputField" />
                            </div>

                        </div>
                        <input className='mySecBtn w-full my-5' type="submit" value="Order Confirm" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;