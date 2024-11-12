import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { categoriesData } from './foodMenu';

const Product = ({ product, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.2 }}
            className="border-b w-full lg:w-[550px] border-[#4A296A] pb-4 mb-4"
        >
            <div className="flex items-center space-x-2 mb-2">
                <p className="text-[28px] lg:text-[48px] uppercase font-custom text-[#D53C6F]">
                    {product.name}
                </p>
            </div>
            <div className="text-left text-[#1F1634] text-[20px] lg:text-[40px] font-custom1 font-bold mt-2">
                {product.price} Lekë
            </div>
        </motion.div>
    );
};

const ProductMenu = ({ category }) => {
    const selectedCategory = categoriesData.find(item => item.id === category?.id);

    return (
        <div className="grid lg:grid-cols-2 gap-6 lg:px-[60px] px-5 lg:mt-24 mt-12">
            {selectedCategory && selectedCategory.products && selectedCategory.products.length > 0 && (
                <>
                    {selectedCategory.products.map((product, index) => (
                        <Product key={product.id} product={product} index={index} />
                    ))}
                </>
            )}
        </div>
    );
};

export default ProductMenu;
