import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const PopularProduct = () => {
    const [products, setProducts] = useState([]);
    const[showAll , setShowAll] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <section>
            <div className='text-center'>
                <p className='text-primary font-bold text-xl mb-3'>Popular Products</p>
                <h1 className="text-5xl font-bold">Browse Our Products</h1>
                <p className="py-6 lg:w-1/2 mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            </div>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.slice(0, showAll ? 6 : 6).map(product=><ProductCard
                    key={product._id}
                    product={product}
                    ></ProductCard>)
                }

            </div>
            <div className='text-center'>
            {
                !showAll && <button className='myBtn' onClick={()=> setShowAll(!showAll)}>More Products</button>
            }
            </div>
        </section>
    );
};

export default PopularProduct;