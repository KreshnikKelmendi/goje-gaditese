import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCarousel from './ProductCarousel';

const ProductsInHomePage = () => {
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger animation when 20% of the component is in view
        triggerOnce: true, // Play animation only once
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    };

    const textVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
    };

    return (
        <div className="lg:h-[663px] bg-[#1F1634]">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="pt-16 px-6 lg:px-[60px]"
            >
                <motion.p
                    variants={textVariants}
                    className="text-[#F3CCE7] text-[20px] font-custom tracking-[1px] lg:tracking-[3px]"
                >
                    Produktet
                </motion.p>
                <motion.p
                    variants={textVariants}
                    className="text-[24px] lg:text-[48px] font-custom1 tracking-[1px] lg:tracking-[3px] font-bold w-full 2xl:w-[1292px] leading-tight lg:leading-[62.85px] mt-4 text-[#D53D6E]"
                >
                    Gojë Gaditëse <br ></br>Ju rregullon shijen e gojës dhe ju shton buzëqeshjen në ditët tuaja më të lumtura! 
                </motion.p>
            </motion.div>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="2xl:mt-20 mt-6 lg:mt-16 px-6 lg:px-0 lg:pl-[50px] 2xl:pl-[50px]"
            >
                <ProductCarousel />
            </motion.div>
        </div>
    );
};

export default ProductsInHomePage;
