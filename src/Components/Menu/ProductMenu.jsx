import React from 'react';
import { categoriesData } from './foodMenu';





const ProductMenu = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-6 lg:px-[60px] px-5 lg:mt-24 mt-12">
            {categoriesData.map((item) => (
                <div key={item.id} className="border-b w-full lg:w-fit border-[#4A296A] pb-4 mb-4">
                    <div className="flex items-center space-x-2 mb-2">

                        <p className="text-[32px] lg:text-[48px] uppercase font-custom text-[#D53C6F]">{item.title}</p>
                    </div>
                    <p className="text-[#4A296A] text-[14px] font-custom1 uppercase">{item.description}</p>
                    <div className="text-left text-[#1F1634] text-[40px] font-custom1 font-bold mt-6">$12.99</div>
                </div>
            ))}
        </div>
    );
};

export default ProductMenu;
