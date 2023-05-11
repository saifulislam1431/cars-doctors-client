import React, { useContext } from 'react';
import parts from "../../../assets/images/about_us/parts.jpg"
import person from "../../../assets/images/about_us/person.jpg"
import { UserContext } from '../../../Provider/Auth/Auth';

const About = () => {

    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row items-center justify-center">
                    <div className='w-full relative mr-7 mb-20 lg:mb-0'>
                    <img src={person} className="rounded-lg shadow-2xl w-3/5" />
                    <img src={parts} className=" rounded-lg shadow-2xl w-1/2 absolute top-1/2 left-1/3 border-8 border-white" />
                    </div>
                    <div>
                        <p className='text-primary font-bold text-xl mb-3'>About Us</p>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="mySecBtn mt-5">Get More Info</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;