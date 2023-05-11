import React from 'react';
import customer1 from "../../../assets/images/testimonial/customer1.jpg";
import quote from "../../../assets/icons/quote.svg"
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Testimonial = () => {
    return (
        <section>
            <div className='text-center'>
                <p className='text-primary font-bold text-xl mb-3'>Testimonial</p>
                <h1 className="text-5xl font-bold">What Customer Says</h1>
                <p className="py-6 lg:w-1/2 mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className='mt-5 flex items-center justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full md:w-3/4'>
                    <div className='w-full border-2 p-4 rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className="w-10">
                                    <img src={customer1} className='rounded-full'/>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Awlad Hossain</h1>
                                    <p className='text-gray-600 font-medium'>Businessman</p>
                                </div>
                            </div>
                            <div className='w-14'>
                                <img src={quote} alt="" className='opacity-50'/>
                            </div>
                        </div>
                        <p className='my-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div>
                        <Rating
                            placeholderRating={5.0}
                            emptySymbol={<FaStar className='h-5 w-5' />}
                            placeholderSymbol={<FaStar className='text-[#FF912C] h-5 w-5' />}
                            fullSymbol={<FaStar className='text-[#FF912C] h-5 w-5' />}
                        />
                        </div>
                    </div>

                    <div className='w-full border-2 p-4 rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className="w-10 ">
                                    <img src={customer1} className='rounded-full'/>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Shajjad Hossain</h1>
                                    <p className='text-gray-600 font-medium'>Businessman</p>
                                </div>
                            </div>
                            <div className='w-14'>
                                <img src={quote} alt="" className='opacity-50'/>
                            </div>
                        </div>
                        <p className='my-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div>
                        <Rating
                            placeholderRating={5.0}
                            emptySymbol={<FaStar className='h-5 w-5' />}
                            placeholderSymbol={<FaStar className='text-[#FF912C] h-5 w-5' />}
                            fullSymbol={<FaStar className='text-[#FF912C] h-5 w-5' />}
                        />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;