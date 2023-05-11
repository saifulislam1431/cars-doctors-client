import React from 'react';
import feature1 from "../../../assets/icons/Group 38729.svg";
import feature2 from "../../../assets/icons/group.svg";
import feature3 from "../../../assets/icons/check.svg";
import feature4 from "../../../assets/icons/person.svg";
import feature5 from "../../../assets/icons/Wrench.svg";
import feature6 from "../../../assets/icons/deliveryt.svg";

const Features = () => {
    return (
        <section>
            <div className='text-center'>
                <p className='text-primary font-bold text-xl mb-3'>Core Features</p>
                <h1 className="text-5xl font-bold">Why Choose Us</h1>
                <p className="py-6 lg:w-1/2 mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className='flex items-center justify-center'>
                <div className='mt-5 grid grid-cols-3 md:grid-cols-6 gap-5 w-full'>
                    <div className='border w-full rounded-lg hover:bg-primary hover:text-white p-5 text-center'>
                        <img src={feature2} alt="" className='w-12 h-10 mx-auto mb-2' />
                        <p className='font-bold'>Expert Team</p>
                    </div>

                    <div className='border w-full rounded-lg hover:bg-primary hover:text-white p-5 text-center'>
                        <img src={feature1} alt="" className='w-12 h-10 mx-auto mb-2' />
                        <p className='font-bold'>Timely Delivery</p>
                    </div>

                    <div className='border w-full rounded-lg hover:bg-primary hover:text-white p-5 text-center'>
                        <img src={feature4} alt="" className='w-12 h-10 mx-auto mb-2' />
                        <p className='font-bold'>24/7 Support</p>
                    </div>

                    <div className='border w-full rounded-lg hover:bg-primary hover:text-white p-5 text-center'>
                        <img src={feature5} alt="" className='w-12 h-10 mx-auto mb-2' />
                        <p className='font-bold'>Best Equipment</p>
                    </div>

                    <div className='border w-full rounded-lg hover:bg-primary hover:text-white p-5 text-center'>
                        <img src={feature3} alt="" className='w-12 h-10 mx-auto mb-2' />
                        <p className='font-bold'>100% Guranty</p>
                    </div>

                    <div className='border w-full rounded-lg hover:bg-primary hover:text-white p-5 text-center'>
                        <img src={feature6} alt="" className='w-12 h-10 mx-auto mb-2' />
                        <p className='font-bold'>Timely Delivery</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;