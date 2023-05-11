import React from 'react';
import Rating from 'react-rating';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { img, price, title, rating } = product;
    return (
        <section>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-52" />
                </figure>
                <div className="card-body text-center items-center">
                    <div>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaStar className='h-5 w-5' />}
                            placeholderSymbol={<FaStar className='text-yellow-500 h-5 w-5' />}
                            fullSymbol={<FaStar className='text-yellow-500 h-5 w-5' />}
                        />
                    </div>
                    <h2 className="card-title mb-2">{title}</h2>
                    <div className="card-actions">
                        <p className='font-semibold text-primary'>Price : ${price}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCard;