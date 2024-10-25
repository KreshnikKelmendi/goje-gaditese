import React from 'react'
import ProductCarousel from './ProductCarousel'

const ProductsInHomePage = () => {
    return (
        <div className='lg:h-[663px] bg-[#1F1634] '>
            <div className='pt-16 px-5 lg:px-[60px]'>
                <p className='text-[#F3CCE7] text-[20px] font-custom'>Produktet</p>
                <p className='text-[32px] lg:text-[48px] font-custom w-full 2xl:w-[1292px] uppercase lg:leading-[62.85px] mt-4 text-[#D53D6E]'>Gojë Gaditëse – Ju rregullon shijen e gojës dhe ju shton buzëqeshjen në ditët tuaja me të lumtura! </p>
            </div>
            <div className='2xl:mt-20 mt-6 lg:mt-16 px-5 lg:px-0 lg:pl-[60px]'>
                <ProductCarousel />
            </div>
        </div>
    )
}

export default ProductsInHomePage