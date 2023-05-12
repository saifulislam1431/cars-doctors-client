import React, { useContext } from 'react';
import serviceImg from "../../assets/images/checkout/checkout.png";
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../../Provider/Auth/Auth';

const Checkout = () => {
    const service = useLoaderData();
    const {user} = useContext(UserContext)

    const handleCheckOut = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const amount = form.amount.value;
        const email = form.email.value;
        const date = form.date.value;
        const message = form.message.value;
        const order ={
            customerName : name,
            advanceAmount : amount,
            totalPrice : service?.price,
            email,
            serviceDate : date,
            message,
            serviceId : service?._id,
            serviceTitle: service?.title,
            serviceImg: service?.img

        }
        console.log(order);

        fetch(`https://cars-doctors-server-saifulislam1431.vercel.app/bookings`,{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Order Successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
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
                                    name='name' 
                                    defaultValue={user.displayName}
                                    placeholder="Your Name" className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='amount' placeholder={`Advance Amount $${service.price}`}  className="w-full inputField" />
                            </div>
                        </div>
                        {/* Phone & email */}
                        <div className='md:flex gap-4 mt-2'>
                            <div className='md:w-1/2'>

                                <input type="text"
                                    name='email' 
                                    defaultValue={user.email}
                                    placeholder="Your email" className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>

                                <input type="date"
                                    name='date' className="w-full inputField" />
                            </div>
                        </div>


                        {/* massage */}
                        <div className='mt-2'>
                            <div>
                                <textarea
                                    rows={8}
                                    name='message' placeholder="Your Message" className="w-full inputField" />
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