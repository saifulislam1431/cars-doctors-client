import React from 'react';
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import icon1 from "../../../assets/icons/facebook.png";
import icon2 from "../../../assets/icons/instagram.png";
import icon3 from "../../../assets/icons/linkedin.png";
import icon4 from "../../../assets/icons/twitter.png";
import { FaArrowRight } from 'react-icons/fa';


const Team = () => {
    return (
        <section>
            <div className='text-center'>
                <p className='text-primary font-bold text-xl mb-3'>Team</p>
                <h1 className="text-5xl font-bold">Meet Our Team</h1>
                <p className="py-6 lg:w-1/2 mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body text-center items-center">

                        <h2 className="card-title ">Mr. Mark</h2>
                        <div className="card-actions">
                            <p className='font-semibold text-primary'>Engine Expert</p>

                        </div>
                        <div className='inline-flex gap-2 mt-2'>
                            <img src={icon1} alt="Social Icons" className='w-8' />
                            <img src={icon2} alt="Social Icons" className='w-8' />
                            <img src={icon3} alt="Social Icons" className='w-8' />
                            <img src={icon4} alt="Social Icons" className='w-8' />
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body text-center items-center">

                        <h2 className="card-title ">Mr. Obama</h2>
                        <div className="card-actions">
                            <p className='font-semibold text-primary'>Engine Expert</p>

                        </div>
                        <div className='inline-flex gap-2 mt-2'>
                            <img src={icon1} alt="Social Icons" className='w-8' />
                            <img src={icon2} alt="Social Icons" className='w-8' />
                            <img src={icon3} alt="Social Icons" className='w-8' />
                            <img src={icon4} alt="Social Icons" className='w-8' />
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body text-center items-center">

                        <h2 className="card-title ">Mr. Hulk</h2>
                        <div className="card-actions">
                            <p className='font-semibold text-primary'>Engine Expert</p>

                        </div>
                        <div className='inline-flex gap-2 mt-2'>
                            <img src={icon1} alt="Social Icons" className='w-8' />
                            <img src={icon2} alt="Social Icons" className='w-8' />
                            <img src={icon3} alt="Social Icons" className='w-8' />
                            <img src={icon4} alt="Social Icons" className='w-8' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;