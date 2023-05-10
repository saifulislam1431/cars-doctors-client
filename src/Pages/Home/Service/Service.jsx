import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    const[showAll , setShowAll] = useState(false);
    useEffect(() => {
        fetch("../../../../public/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div className='text-center'>
                <p className='text-primary font-bold text-xl mb-3'>Service</p>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-6 lg:w-1/2 mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            </div>

            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.slice(0, showAll ? 6 : 6).map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }

            </div>
            <div className='text-center'>
            {
                !showAll && <button className='myBtn' onClick={()=> setShowAll(!showAll)}>More Services</button>
            }
            </div>
        </section>
    );
};

export default Service;