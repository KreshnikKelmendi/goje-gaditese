import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Products/products';

const SinglePageOfProduct = () => {
    const { productID } = useParams();
    const product = products?.find((prod) => prod.id === productID);

    if (!product) {
        return (
            <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>
                Produkti nuk u gjet. BAD REQUEST!
            </div>
        );
    }

    return (
        <div className='w-full h-screen relative'>
            <div
                className='w-full h-[307px] lg:h-[250px] px-5 lg:px-[60px] '
                style={{ backgroundColor: product.backgroundColor }}
            >
                <div className='pt-10'>
                    <img className='w-full lg:h-[416px] object-cover rounded-[10px]' alt='' src={product.image} />
                </div>
                <div className='mt-6'>
                    <p style={{ color: product.titleColor }} className='font-custom uppercase text-[32px] lg:text-[78px]'>{product.title}</p>
                    <div className=''>
                        <p className='lg:w-1/2 text-justify font-custom1 tracking-tighter'>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePageOfProduct;
