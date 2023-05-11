import React from 'react';
import { useLoaderData } from 'react-router-dom';
import serviceImg from "../../assets/images/checkout/checkout.png";
import files from "../../assets/icons/file.png";
import logo from "../../assets/images/logo.svg"
import { FaArrowRight } from 'react-icons/fa';

const ServiceDetails = () => {
    const service = useLoaderData();
    const{title,_id,service_id,img,description,facility,price} = service;

    return (
        <section className='my-10 flex items-center justify-center'>
            <div>
                <div className='relative w-full mb-5'>
                    <img src={serviceImg} alt="" />
                    <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  h-full w-full rounded-xl items-center top-0">
                        <div className='space-y-6 pl-10 lg:w-2/4'>
                            
                            <h1 className='text-xl md:text-3xl font-bold text-white'>Service Details of <span className='text-primary'>{title}</span></h1>
                            
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-10 my-10 lg:mt-20'>
<div className='w-full lg:w-3/4'>
    <img src={img} alt="" className='rounded-xl'/>
    <div className='lg:w-3/4'>
    <h1 className='my-5 font-bold text-xl lg:text-3xl text-primary'>{title}</h1>
    <p className='mb-4'><span className='font-semibold'>Description: </span>{description}</p>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
    {
        facility.map(faci => <div>
<div className='bg-gray-300 bg-opacity-40 p-4 border-t-2 border-primary rounded-lg'>
    <h1 className='font-bold my-2'>{faci.name}</h1>
    <p className='font-medium text-gray-800'>{faci.details}</p>
</div>
        </div>)
    }
</div>
    </div>

</div>

<div className='w-full lg:w-1/2'>
    <div className='bg-black lg:w-2/3 p-4 text-white rounded-lg'>
        <h1 className='font-bold mb-3'>Download</h1>
        <div className='flex items-center'>
            <div className='mr-2'>
            <img src={files} alt="" className='w-8'/>
            </div>
            <div  className='flex-grow'>
                <p className='font-semibold'>Our Brochure</p>
                <p className='text-gray-400 text-sm'>Download</p>
            </div>
            <div>
                <button className='myCircleOne'>
<FaArrowRight className='text-white'/>
                </button>
            </div>
        </div>

        <div className='flex items-center mt-3'>
            <div className='mr-2'>
            <img src={files} alt="" className='w-8'/>
            </div>
            <div  className='flex-grow'>
                <p className='font-semibold'>Company Details</p>
                <p className='text-gray-400 text-sm'>Download</p>
            </div>
            <div>
                <button className='myCircleOne'>
<FaArrowRight className='text-white'/>
                </button>
            </div>
        </div>
    </div>
    <div className='bg-black lg:w-2/3 p-4 text-white rounded-lg my-7 text-center items-center'>
<div>
    <img src={logo} alt="" className=' mx-auto'/>
    <h1 className='my-3 font-medium'>Need Help? We Are Here <br /> 
To Help You</h1>

<div className='bg-white p-3 w-3/4 mx-auto rounded-lg'>
<p className='text-black font-extrabold'><span className='text-primary'>Car Doctor</span> Special</p>
<p className='text-black text-sm font-semibold'>Save up to <span className='text-primary'>60% off</span></p>
</div>
</div>
    </div>
</div>
                </div>
               
            </div>
        </section>
    );
};

export default ServiceDetails;