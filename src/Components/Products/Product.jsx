import React from 'react'
import ProductsList from './ProductList'

const Product = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:h-[307px] px-5 py-16 lg:py-0 lg:items-center bg-[#1F1634] lg:px-[60px]">
                <p className="text-[44px] lg:text-[84px] font-custom1 mb-2 text-[#FADEEA]">PRODUKTET</p>
                <p className="text-[18px] font-custom leading-[21.6px] text-justify tracking-tighter lg:w-[625px] text-[#FADEEA] lg:ml-44">
                    Të gjitha produktet e cateringut janë të gatuara në shtëpi nga ne, dhe si të tilla mbajnë cilësinë e produkteve që përdor çdo njeri në shtëpi
                </p>
            </div>

            <ProductsList />
        </>
    )
}

export default Product