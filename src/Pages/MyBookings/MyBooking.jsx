import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Provider/Auth/Auth';
import serviceImg from "../../assets/images/checkout/checkout.png";
import BookingSummary from './BookingSummary';
import { HiOutlineReply, HiOutlineTrash } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const MyBooking = () => {
    const { user } = useContext(UserContext);
    // console.log(user);
    const [order, setOrder] = useState([])

    const url = `https://cars-doctors-server.vercel.app/bookings?email=${user.email}`

    useEffect(() => {
        fetch(url,{
            method:"GET",
            headers:{
               authorization : `Bearer ${localStorage.getItem("car-access-token")}`
            }
        })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

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
                <div className="overflow-x-auto w-full my-5">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Service Image</th>
                                <th>Name</th>
                                <th>Remaining Price</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                order.map(or => <BookingSummary key={or._id} oldOrder={or} setOrder = {setOrder}
                                order={order}></BookingSummary>)
                            }

                        </tbody>


                    </table>
                </div>

                <div className='my-10 font-semibold flex justify-between items-center'>
                    <div>
                        <Link to="/">
                        <p className='inline-flex items-center gap-2'><HiOutlineReply className='text-primary' /><span>Continue Shopping</span></p>
                        </Link>
                    </div>
                    <div>
                        <p className='inline-flex items-center gap-2'><HiOutlineTrash className='text-primary' /><span>Delete Shopping Cart</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyBooking;