import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, price, title, _id } = service;
    return (
        <section>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-52" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mb-3">{title}</h2>
                    <div className="card-actions">
                        <p className='font-semibold text-primary'>Price : ${price}</p>
                        <Link to={`/service/${_id}`}>
                        <button>
                            <FaArrowRight className='text-primary' />
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCard;