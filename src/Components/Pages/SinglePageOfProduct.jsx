import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Products/products';

const SinglePageOfProduct = () => {
    const { productID } = useParams();
    const product = products?.find((prod) => prod.id === productID);

    if (!product) {
        return (
            <div className='font-custom text-2xl mt-5 flex justify-center items-center text-center h-screen'>
                Produkti nuk u gjet. BAD REQUEST!
            </div>
        );
    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center'>
            {/* Header Section */}
            <div
                className='w-full py-8 lg:py-10'
                style={{ backgroundColor: product.backgroundColor }}
            >
                <div className='lg:px-[60px] px-5 mx-auto'>
                    <img
                        className='w-full h-auto max-h-[400px] object-cover rounded-[10px]'
                        alt={product.title}
                        src={product.image}
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className='w-full lg:px-[60px] px-5 py-8'>
                <p
                    className='font-custom uppercase text-2xl lg:text-[48px] mb-6'
                    style={{ color: product.titleColor }}
                >
                    {product.title}
                </p>
                <p className='text-sm lg:text-[15px] leading-relaxed text-justify font-custom1 tracking-tight'>
                    {product.description}
                </p>
            </div>
        </div>
    );
};

export default SinglePageOfProduct;
