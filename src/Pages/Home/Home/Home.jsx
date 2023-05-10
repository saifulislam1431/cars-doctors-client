import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../Service/Service';


const Home = () => {
    return (
        <section className='my-10 md:mt-12 lg:mt-16 space-y-10'>
            <Banner />
            <About />
            <Service />

        </section>
    );
};

export default Home;