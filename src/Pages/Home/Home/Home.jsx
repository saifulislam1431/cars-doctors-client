import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import PopularProduct from '../PopularProduct/PopularProduct';


const Home = () => {
    return (
        <section className='my-10 md:mt-12 lg:mt-16 space-y-10 lg:space-y-20'>
            <Banner />
            <About />
            <Service />
            <Contact />
            <PopularProduct />

        </section>
    );
};

export default Home;