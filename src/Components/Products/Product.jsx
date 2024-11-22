import React from 'react';
import { motion } from 'framer-motion';
import ProductsList from './ProductList';

const Product = () => {
    const titleText = "PRODUKTET";
    const descriptionText =
        "Të gjitha produktet e cateringut janë të gatuara në shtëpi nga ne, dhe si të tilla mbajnë cilësinë e produkteve që përdor çdo njeri në shtëpi";

    return (
        <>
            <div className="flex flex-col lg:flex-row lg:h-[307px] 2xl:h-[35vh] px-6 py-16 lg:py-0 lg:items-center bg-[#1F1634] lg:px-[60px]">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                    className="text-[44px] lg:text-[84px] font-custom tracking-[3px] mb-2 text-[#FADEEA]"
                >
                    {titleText.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0.2, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.01 } },
                    }}
                    className="text-[16px] font-bold tracking-[1px] font-custom1 lg:tracking-[3px] leading-[21.6px] lg:w-[625px] text-[#FADEEA] lg:ml-44"
                >
                    {descriptionText.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0.2, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            {char === "\n" ? <br /> : char}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            <ProductsList />
        </>
    );
};

export default Product;
