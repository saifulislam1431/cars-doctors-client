import React from 'react';
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <section>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[500px] lg:h-[600px]">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  h-full w-full rounded-xl items-center">
                        <div className='space-y-6 pl-10 lg:w-2/4'>
                            <div className='space-y-4'>
                                <h2 className='w-1/2 text-3xl font-bold text-white'>Affordable Price For Car Servicing</h2>
                                <p className='text-white font-medium'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            </div>
                            <div className='inline-flex space-x-4'>
                                <button className='mySecBtn'>Discover More</button>
                                <button className='myThirdBtn'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                        <a href="#slide4" className="myCircleTwo"><FaArrowLeft className='text-white' /></a>
                        <a href="#slide2" className="myCircleOne"><FaArrowRight className='text-white' /></a>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full h-[500px] lg:h-[600px]">
                    <img src={img2} className="w-full rounded-xl" />
                    <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  h-full w-full rounded-xl items-center">
                        <div className='space-y-6 pl-10 lg:w-2/4'>
                            <div className='space-y-4'>
                                <h2 className='w-1/2 text-3xl font-bold text-white'>Affordable Price For Car Servicing</h2>
                                <p className='text-white font-medium'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            </div>
                            <div className='inline-flex space-x-4'>
                                <button className='mySecBtn'>Discover More</button>
                                <button className='myThirdBtn'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                        <a href="#slide1" className="myCircleTwo"><FaArrowLeft className='text-white' /></a>
                        <a href="#slide3" className="myCircleOne"><FaArrowRight className='text-white' /></a>
                    </div>

                </div>
                <div id = "slide3" className="carousel-item relative w-full h-[500px] lg:h-[600px]">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  h-full w-full rounded-xl items-center">
                        <div className='space-y-6 pl-10 lg:w-2/4'>
                            <div className='space-y-4'>
                                <h2 className='w-1/2 text-3xl font-bold text-white'>Affordable Price For Car Servicing</h2>
                                <p className='text-white font-medium'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            </div>
                            <div className='inline-flex space-x-4'>
                                <button className='mySecBtn'>Discover More</button>
                                <button className='myThirdBtn'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                        <a href="#slide2" className="myCircleTwo"><FaArrowLeft className='text-white' /></a>
                        <a href="#slide4" className="myCircleOne"><FaArrowRight className='text-white' /></a>
                    </div>

                </div>
                <div id="slide4" className="carousel-item relative w-full h-[500px] lg:h-[600px]">
                    <img src={img4} className="w-full rounded-xl" />
                    <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  h-full w-full rounded-xl items-center">
                        <div className='space-y-6 pl-10 lg:w-2/4'>
                            <div className='space-y-4'>
                                <h2 className='w-1/2 text-3xl font-bold text-white'>Affordable Price For Car Servicing</h2>
                                <p className='text-white font-medium'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            </div>
                            <div className='inline-flex space-x-4'>
                                <button className='mySecBtn'>Discover More</button>
                                <button className='myThirdBtn'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                        <a href="#slide3" className="myCircleTwo"><FaArrowLeft className='text-white' /></a>
                        <a href="#slide1" className="myCircleOne"><FaArrowRight className='text-white' /></a>
                    </div>

                </div>
                <div id="slide5" className="carousel-item relative w-full h-[500px] lg:h-[600px]">
                    <img src={img5} className="w-full rounded-xl" />
                    <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  h-full w-full rounded-xl items-center">
                        <div className='space-y-6 pl-10 lg:w-2/4'>
                            <div className='space-y-4'>
                                <h2 className='w-1/2 text-3xl font-bold text-white'>Affordable Price For Car Servicing</h2>
                                <p className='text-white font-medium'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            </div>
                            <div className='inline-flex space-x-4'>
                                <button className='mySecBtn'>Discover More</button>
                                <button className='myThirdBtn'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                        <a href="#slide4" className="myCircleTwo"><FaArrowLeft className='text-white' /></a>
                        <a href="#slide1" className="myCircleOne"><FaArrowRight className='text-white' /></a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;