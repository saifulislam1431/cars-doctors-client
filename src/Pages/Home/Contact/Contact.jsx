import React from 'react';
import schedule from "../../../assets/images/contact/schedule.png";
import location from "../../../assets/images/contact/location.png";
import phone from "../../../assets/images/contact/phone.png";

const Contact = () => {
    return (
        <section className='h-80 lg:h-60 bg-black rounded-xl flex justify-center items-center px-5 '>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-16'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={schedule} alt="" className='w-10' />
                    </div>
                    <div>
                        <p className='font-medium text-white'>We are open monday-friday</p>
                        <h2 className='font-bold text-white'>7:00 am - 9:00 pm</h2>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div>
                        <img src={phone} alt="" className='w-10' />
                    </div>
                    <div>
                        <p className='font-medium text-white'>Have a question?</p>
                        <h2 className='font-bold text-white'>+2546 251 2658</h2>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div>
                        <img src={location} alt="" className='w-10' />
                    </div>
                    <div>
                        <p className='font-medium text-white'>Need a repair? our address</p>
                        <h2 className='font-bold text-white'>Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;